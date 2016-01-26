(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defn generate-minefield []
  [{:mine? false :flipped? false}])

(def app-state (atom (generate-minefield)))

(defn render-button [cell]
  (println cell)
  (cond
   (not (:flipped? cell)) "?"
   (not (:mine? cell)) "☺"))


(defn make-button [cell pos]
  (dom/button
   #js {:onClick
        (fn [e]
          (swap! app-state update-in [pos :flipped?] (constantly true)))}
   (render-button cell)))


(defui Minefield
  Object
  (render [this]
    (let [pos 0
          cell (-> (om/props this) (nth pos))]
      (dom/div nil
               (make-button cell pos)))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Minefield (gdom/getElement "app"))
