(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def mine-percentage 0.10)

(def minefield-width 8)
(def minefield-height 8)

(defn mine? []
  (< (rand) mine-percentage))

(defn generate-minefield []
 (vec (for [_ (range minefield-height)]
        (vec (for [_ (range minefield-width)]
               {:mine? (mine?) :flipped? false})))))

(defn neighbour-coords [[x y]]
  (for [cand-x [(dec x) x (inc x)]
        cand-y [(dec y) y (inc y)]
        :let [coord [cand-x cand-y]]
        :when (not= [x y] coord)]
     coord))

(defn count-adjacent-mines [minefield coord]
  (->> coord
       neighbour-coords
       (filter #(:mine? (get-in minefield %)))
       count))

(def app-state
  (atom (generate-minefield)))

(defn lost? []
  (some #(and (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn flip-cell [minefield [x y]]
  (swap! app-state update-in [x y :flipped?] (constantly true)))

(defn cell-text [minefield coord]
  (let [cell (get-in minefield coord)]
   (cond
    (not (:flipped? cell)) "_"
    (not (:mine? cell)) (count-adjacent-mines minefield coord)
    (:mine? cell) "☠")))

(defn make-button [minefield cell x y]
  (dom/button
   #js {:onClick
        (fn [e]
          (flip-cell minefield [x y])
          (if (lost?) (js/alert "You lost!")
            (when (won?) (js/alert "You won!"))))}
   (cell-text minefield [x y])))

(defn make-cell [minefield x y]
  (let [cell (-> minefield (nth x) (nth y))]
    (make-button minefield cell x y)))

(defn make-row [minefield x]
  (dom/div nil
    (->> (range (count (nth minefield x)))
         (map #(make-cell minefield x %)))))

(defui Minefield
  Object
  (render [this]
    (let [minefield (om/props this)]
      (dom/div nil
        (->> (range (count minefield))
             (map #(make-row minefield %)))))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
