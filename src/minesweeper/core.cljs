(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def mine-percentage 0)

(def minefield-width 2)
(def minefield-height 2)

(defn mine? []
  (< (rand) mine-percentage))

(defn generate-minefield []
  (vec (for [_ (range minefield-height)]
        (vec (for [_ (range minefield-width)]
               {:mine? (mine?) :flipped? false})))))

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

(def app-state
  (atom {:minefield (generate-minefield)}))

(defn lost? []
  (some #(and (:flipped? %) (:mine? %)) (flatten (:minefield @app-state))))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten (:minefield @app-state))))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key {:keys [x y] :as params}]
  (if (= 'flip key)
    {:value {:keys [:minefield]}
     :action #(swap! state update-in [:minefield x y :flipped? (constantly true)])}
    {:value :not-found}))

(defn flip-cell! [minefield [x y]]
  (swap! app-state update-in [:minefield x y :flipped?] (constantly true))

  #_((when (= (count-adjacent-mines minefield [x y]) 0))
     (doseq [neighbour-coord (neighbour-coords minefield [x y])]
      (when (not= :flipped? (get-in @app-state [x y]))
        (flip-cell! @app-state neighbour-coord)))))


(defn cell-text [minefield coord]
  (println minefield)
  (let [cell (get-in minefield coord)]
   (cond
    (not (:flipped? cell)) "_"
    (not (:mine? cell)) (count-adjacent-mines minefield coord)
    (:mine? cell) "☠")))

(defn make-button [this minefield cell x y]
  (dom/button
   #js {:onClick
        (fn [e]
          (om/transact! this `[(flip {:x ~x, :y ~y})])
          (if (lost?) (js/alert "You lost!")
            (when (won?) (js/alert "You won!"))))}
   (cell-text (:minefield (om/props this)) [x y])))

(defn make-cell [this minefield x y]
  (let [cell (-> minefield (nth x) (nth y))]
    (make-button this minefield cell x y)))

(defn make-row [this minefield x]
  (dom/div nil
    (->> (range (count (nth minefield x)))
         (map #(make-cell this minefield x %)))))

(defui Minefield
  static om/IQuery
  (query [this]
    [:minefield])
  Object
  (render [this]
    (let [minefield (:minefield (om/props this))]
      (dom/div nil
        (->> (range (count minefield))
             (map #(make-row this minefield %)))))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
