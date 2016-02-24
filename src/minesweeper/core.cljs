(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defn generate-minefield []
  [[{:mine? true :flipped? false}]])

(def app-state (atom (generate-minefield)))

(defn lost? []
  (some? #(and (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn won? []
  (every? #(or (:flipped? %) (:mine? %)) (flatten @app-state)))

(defn render-button [cell]
  (println cell)
  (cond
   (not (:flipped? cell)) "?"
   (not (:mine? cell)) "☺"
   (:mine? cell) "☠"))

(defn make-button [cell row column]
  (dom/button
   #js {:onClick
        (fn [e]
          (swap! app-state update-in [row column :flipped?] (constantly true))
          (if (lost?) (println "You lost!")
            (when (won?) (println "You won!"))))}
   (render-button cell)))

(defui Minefield
  Object
  (render [this]
    (let [[row column] [0 0]
          cell (-> (om/props this) (nth row) (nth column))]
      (dom/div nil
               (make-button cell row column)))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
