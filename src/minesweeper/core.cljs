(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defn generate-minefield []
  (vec (repeat 2 (vec (repeat 2 {:mine? true :flipped? false})))))

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

(defn make-button [cell row-index col-index]
  (dom/button
   #js {:onClick
        (fn [e]
          (swap! app-state update-in [row-index col-index :flipped?] (constantly true))
          (if (lost?) (println "You lost!")
            (when (won?) (println "You won!"))))}
   (render-button cell)))

(defui Minefield
  Object
  (render [this]
          (dom/div nil
                   (->> (range (count @app-state))
                        (map (fn [row-index]
                               (dom/div nil
                                        (->> (range (count (nth @app-state row-index)))
                                             (map (fn [col-index]
                                                    (let [cell (-> (om/props this) (nth row-index) (nth col-index))]
                                                      (make-button cell row-index col-index))))))))))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
