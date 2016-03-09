(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def minefield-width 8)

(def minefield-height 8)

(defn generate-minefield []
  (vec (repeat minefield-height (vec (repeat minefield-width {:mine? true :flipped? false})))))

(def app-state (atom (generate-minefield)))

(defn lost? []
  (some #(and (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn render-button [cell]
  (println cell)
  (cond
   (not (:flipped? cell)) "?"
   (not (:mine? cell)) "☺"
   (:mine? cell) "☠"))

(defn make-button [cell row-index col-index]
  (dom/button
   #js {:onClick
        (fn [e]
          (swap! app-state update-in [row-index col-index :flipped?] (constantly true))
          (if (lost?) (js/alert "You lost!")
            (when (won?) (js/alert "You won!"))))}
   (render-button cell)))

(defn make-cell [props row-index col-index]
  (let [cell (-> props (nth row-index) (nth col-index))]
    (make-button cell row-index col-index)))

(defn make-row [props row-index]
  (dom/div nil
    (->> (range (count (nth props row-index)))
         (map #(make-cell props row-index %)))))

(defui Minefield
  Object
  (render [this]
          (let [props (om/props this)]
               (dom/div nil
                  (->> (range (count props))
                       (map #(make-row props %)))))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
