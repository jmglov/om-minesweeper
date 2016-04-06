(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

;;; --- Configuration ---

(enable-console-print!)

(def mine-percentage 0.10)

(def minefield-width 8)
(def minefield-height 8)

;;; --- State ---

(defn generate-mine? []
  (< (rand) mine-percentage))

(defn generate-minefield []
  (vec (for [_ (range minefield-height)]
        (vec (for [_ (range minefield-width)]
               {:mine? (generate-mine?) :flipped? false})))))

(def app-state
  (atom {:minefield (generate-minefield)}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key {:keys [x y] :as params}]
  (if (= `flip key)
    {:value {:keys [:minefield]}
     :action #(swap! state update-in [:minefield x y :flipped?] (constantly true))}
    {:value :not-found}))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read :mutate mutate})}))

;;; --- Helpers ---

(defn neighbour-coords [minefield [x y]]
  (for [cand-x [(dec x) x (inc x)]
        cand-y [(dec y) y (inc y)]
        :let [coord [cand-x cand-y]]
        :when (not= [x y] coord)
        :when (get-in minefield coord)]
     coord))

(defn count-adjacent-mines [minefield coord]
  (->> coord
       (neighbour-coords minefield)
       (filter #(:mine? (get-in minefield %)))
       count))

(defn lost? []
  (some #(and (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn flip-all-zero-mine-neighbours [this minefield coord]
  (when (= (count-adjacent-mines minefield coord) 0)
    (doseq [neighbour-coord (neighbour-coords minefield coord)]
      (when (not= :flipped? (get-in @app-state neighbour-coord))
        (let [[x y] neighbour-coord]
          (om/transact! this `[(flip {:x ~x, :y ~y})]))))))

(defn cell-text [minefield coord]
  (let [cell (get-in minefield coord)]
   (println cell)
   (cond
    (not (:flipped? cell)) "_"
    (not (:mine? cell)) (count-adjacent-mines minefield coord)
    (:mine? cell) "☠")))

(defn make-button [this minefield cell x y]
  (dom/button
   #js {:onClick
        (fn [e]
          (om/transact! this `[(flip {:x ~x, :y ~y})])
          (flip-all-zero-mine-neighbours this minefield [x y]))}
   (cell-text minefield [x y])))

(defn make-cell [this minefield x y]
  (let [cell (-> minefield (nth x) (nth y))]
    (make-button this minefield cell x y)))

(defn make-row [this minefield x]
  (dom/div nil
    (->> (range (count (nth minefield x)))
         (map #(make-cell this minefield x %)))))

;;; --- React component ---

(defui Minefield
  static om/IQuery
  (query [this]
    [:minefield])
  Object
  (render [this]
    (let [{:keys [minefield]} (om/props this)]
      (dom/div nil
        (->> (range (count minefield))
             (map #(make-row this minefield %)))))))

;;; --- App ---

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
