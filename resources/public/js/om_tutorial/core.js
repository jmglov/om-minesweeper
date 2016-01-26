// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
om_tutorial.core.read = (function om_tutorial$core$read(p__21910,key,params){
var map__21914 = p__21910;
var map__21914__$1 = ((((!((map__21914 == null)))?((((map__21914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21914):map__21914);
var env = map__21914__$1;
var state = cljs.core.get.call(null,map__21914__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21916 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__21916,(0),null);
var value = cljs.core.nth.call(null,vec__21916,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.mutate = (function om_tutorial$core$mutate(p__21917,key,params){
var map__21920 = p__21917;
var map__21920__$1 = ((((!((map__21920 == null)))?((((map__21920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21920):map__21920);
var env = map__21920__$1;
var state = cljs.core.get.call(null,map__21920__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21920,map__21920__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__21920,map__21920__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__18903__auto__ = this;
React.Component.apply(this__18903__auto__,arguments);

if(!((this__18903__auto__.initLocalState == null))){
this__18903__auto__.state = this__18903__auto__.initLocalState();
} else {
this__18903__auto__.state = {};
}

return this__18903__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x21926_21936 = om_tutorial.core.Counter.prototype;
x21926_21936.componentWillUpdate = ((function (x21926_21936){
return (function (next_props__18844__auto__,next_state__18845__auto__){
var this__18843__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18843__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18843__auto__);
});})(x21926_21936))
;

x21926_21936.shouldComponentUpdate = ((function (x21926_21936){
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
});})(x21926_21936))
;

x21926_21936.componentWillUnmount = ((function (x21926_21936){
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
});})(x21926_21936))
;

x21926_21936.componentDidUpdate = ((function (x21926_21936){
return (function (prev_props__18846__auto__,prev_state__18847__auto__){
var this__18843__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18843__auto__);
});})(x21926_21936))
;

x21926_21936.isMounted = ((function (x21926_21936){
return (function (){
var this__18843__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18843__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21926_21936))
;

x21926_21936.componentWillMount = ((function (x21926_21936){
return (function (){
var this__18843__auto__ = this;
var indexer__18848__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18843__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18848__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18848__auto__,this__18843__auto__);
}
});})(x21926_21936))
;

x21926_21936.render = ((function (x21926_21936){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21927 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21928 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21929 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21930 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21931 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21932 = om.next.props.call(null,this$);
var map__21932__$1 = ((((!((map__21932 == null)))?((((map__21932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21932):map__21932);
var count = cljs.core.get.call(null,map__21932__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21932,map__21932__$1,count,_STAR_reconciler_STAR_21927,_STAR_depth_STAR_21928,_STAR_shared_STAR_21929,_STAR_instrument_STAR_21930,_STAR_parent_STAR_21931,this$,x21926_21936){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__21932,map__21932__$1,count,_STAR_reconciler_STAR_21927,_STAR_depth_STAR_21928,_STAR_shared_STAR_21929,_STAR_instrument_STAR_21930,_STAR_parent_STAR_21931,this$,x21926_21936))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21931;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21930;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21929;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21928;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21927;
}});})(x21926_21936))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x21934_21937 = om_tutorial.core.Counter;
x21934_21937.om$next$IQuery$ = true;

x21934_21937.om$next$IQuery$query$arity$1 = ((function (x21934_21937){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21934_21937))
;


var x21935_21938 = om_tutorial.core.Counter.prototype;
x21935_21938.om$next$IQuery$ = true;

x21935_21938.om$next$IQuery$query$arity$1 = ((function (x21935_21938){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21935_21938))
;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__18905__auto__,writer__18906__auto__,opt__18907__auto__){
return cljs.core._write.call(null,writer__18906__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map