(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def mine-percentage 0.25)

(def minefield-width 8)
(def minefield-height 8)

(defn mine? []
  (< (rand) mine-percentage))

(defn generate-minefield []
 (vec (for [_ (range minefield-height)]
        (vec (for [_ (range minefield-width)]
               {:mine? (mine?) :flipped? false})))))

(defn neighbours [[x y]]
  (for [cand-x [(dec x) x (inc x)]
        cand-y [(dec y) y (inc y)]
        :let [coord [cand-x cand-y]]
        :when (not= [x y] coord)]
     coord))

(defn count-adjacent-mines [minefield coord]
  (->> coord
       neighbours
       (filter #(:mine? (get-in minefield %)))
       count))

(def app-state
  (atom (generate-minefield)))

(defn lost? []
  (some #(and (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn render-button [minefield coord]
  (let [cell (get-in minefield coord)]
   (cond
    (not (:flipped? cell)) "?"
    (not (:mine? cell)) (count-adjacent-mines minefield coord)
    (:mine? cell) "☠")))

(defn make-button [minefield cell row-index col-index]
  (dom/button
   #js {:onClick
        (fn [e]
          (swap! app-state update-in [row-index col-index :flipped?] (constantly true))
          (if (lost?) (js/alert "You lost!")
            (when (won?) (js/alert "You won!"))))}
   (render-button minefield [row-index col-index])))

(defn make-cell [minefield row-index col-index]
  (let [cell (-> minefield (nth row-index) (nth col-index))]
    (make-button minefield cell row-index col-index)))

(defn make-row [minefield row-index]
  (dom/div nil
    (->> (range (count (nth minefield row-index)))
         (map #(make-cell minefield row-index %)))))

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
