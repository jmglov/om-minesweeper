// Compiled by ClojureScript 1.7.170 {}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
minesweeper.core.generate_minefield = (function minesweeper$core$generate_minefield(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mine?","mine?",155874651),false,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false], null)], null);
});
minesweeper.core.app_state = cljs.core.atom.call(null,minesweeper.core.generate_minefield.call(null));
minesweeper.core.render_button = (function minesweeper$core$render_button(cell){
cljs.core.println.call(null,cell);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(cell))){
return "?";
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"mine?","mine?",155874651).cljs$core$IFn$_invoke$arity$1(cell))){
return "\u263A";
} else {
return null;
}
}
});
minesweeper.core.make_button = (function minesweeper$core$make_button(cell,pos){
return React.DOM.button({"onClick": (function (e){
return cljs.core.swap_BANG_.call(null,minesweeper.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978)], null),cljs.core.constantly.call(null,true));
})},om.util.force_children.call(null,minesweeper.core.render_button.call(null,cell)));
});
/**
 * @constructor
 */
minesweeper.core.Minefield = (function minesweeper$core$Minefield(){
var this__18903__auto__ = this;
React.Component.apply(this__18903__auto__,arguments);

if(!((this__18903__auto__.initLocalState == null))){
this__18903__auto__.state = this__18903__auto__.initLocalState();
} else {
this__18903__auto__.state = {};
}

return this__18903__auto__;
});

minesweeper.core.Minefield.prototype = goog.object.clone(React.Component.prototype);

var x20481_20489 = minesweeper.core.Minefield.prototype;
x20481_20489.componentWillUpdate = ((function (x20481_20489){
return (function (next_props__18844__auto__,next_state__18845__auto__){
var this__18843__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18843__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18843__auto__);
});})(x20481_20489))
;

x20481_20489.shouldComponentUpdate = ((function (x20481_20489){
return (function (next_props__18844__auto__,next_state__18845__auto__){
var this__18843__auto__ = this;
var or__16818__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18843__auto__),goog.object.get(next_props__18844__auto__,"omcljs$value"));
if(or__16818__auto__){
return or__16818__auto__;
} else {
var and__16806__auto__ = this__18843__auto__.state;
if(cljs.core.truth_(and__16806__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18843__auto__.state,"omcljs$state"),goog.object.get(next_state__18845__auto__,"omcljs$state"));
} else {
return and__16806__auto__;
}
}
});})(x20481_20489))
;

x20481_20489.componentWillUnmount = ((function (x20481_20489){
return (function (){
var this__18843__auto__ = this;
var r__18849__auto__ = om.next.get_reconciler.call(null,this__18843__auto__);
var cfg__18850__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18849__auto__);
var st__18851__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18850__auto__);
var indexer__18848__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18850__auto__);
if((st__18851__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18851__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18843__auto__);
}

if((indexer__18848__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18848__auto__,this__18843__auto__);
}
});})(x20481_20489))
;

x20481_20489.componentDidUpdate = ((function (x20481_20489){
return (function (prev_props__18846__auto__,prev_state__18847__auto__){
var this__18843__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18843__auto__);
});})(x20481_20489))
;

x20481_20489.isMounted = ((function (x20481_20489){
return (function (){
var this__18843__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18843__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20481_20489))
;

x20481_20489.componentWillMount = ((function (x20481_20489){
return (function (){
var this__18843__auto__ = this;
var indexer__18848__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18843__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18848__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18848__auto__,this__18843__auto__);
}
});})(x20481_20489))
;

x20481_20489.render = ((function (x20481_20489){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20482 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20483 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20484 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20485 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20486 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var pos = (0);
var cell = cljs.core.nth.call(null,om.next.props.call(null,this$),pos);
return React.DOM.div(null,om.util.force_children.call(null,minesweeper.core.make_button.call(null,cell,pos)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20486;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20485;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20484;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20483;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20482;
}});})(x20481_20489))
;


minesweeper.core.Minefield.prototype.constructor = minesweeper.core.Minefield;

minesweeper.core.Minefield.prototype.om$isComponent = true;

var x20487_20490 = minesweeper.core.Minefield;


var x20488_20491 = minesweeper.core.Minefield.prototype;


minesweeper.core.Minefield.cljs$lang$type = true;

minesweeper.core.Minefield.cljs$lang$ctorStr = "minesweeper.core/Minefield";

minesweeper.core.Minefield.cljs$lang$ctorPrWriter = (function (this__18905__auto__,writer__18906__auto__,opt__18907__auto__){
return cljs.core._write.call(null,writer__18906__auto__,"minesweeper.core/Minefield");
});
minesweeper.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),minesweeper.core.app_state], null));
om.next.add_root_BANG_.call(null,minesweeper.core.reconciler,minesweeper.core.Minefield,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map