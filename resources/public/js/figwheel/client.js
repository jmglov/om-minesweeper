// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25997 = cljs.core._EQ_;
var expr__25998 = (function (){var or__16818__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25997.call(null,"true",expr__25998))){
return true;
} else {
if(cljs.core.truth_(pred__25997.call(null,"false",expr__25998))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25998)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26000__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26001__i = 0, G__26001__a = new Array(arguments.length -  0);
while (G__26001__i < G__26001__a.length) {G__26001__a[G__26001__i] = arguments[G__26001__i + 0]; ++G__26001__i;}
  args = new cljs.core.IndexedSeq(G__26001__a,0);
} 
return G__26000__delegate.call(this,args);};
G__26000.cljs$lang$maxFixedArity = 0;
G__26000.cljs$lang$applyTo = (function (arglist__26002){
var args = cljs.core.seq(arglist__26002);
return G__26000__delegate(args);
});
G__26000.cljs$core$IFn$_invoke$arity$variadic = G__26000__delegate;
return G__26000;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26003){
var map__26006 = p__26003;
var map__26006__$1 = ((((!((map__26006 == null)))?((((map__26006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26006):map__26006);
var message = cljs.core.get.call(null,map__26006__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26006__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16818__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16806__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16806__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16806__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21611__auto___26168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___26168,ch){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___26168,ch){
return (function (state_26137){
var state_val_26138 = (state_26137[(1)]);
if((state_val_26138 === (7))){
var inst_26133 = (state_26137[(2)]);
var state_26137__$1 = state_26137;
var statearr_26139_26169 = state_26137__$1;
(statearr_26139_26169[(2)] = inst_26133);

(statearr_26139_26169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (1))){
var state_26137__$1 = state_26137;
var statearr_26140_26170 = state_26137__$1;
(statearr_26140_26170[(2)] = null);

(statearr_26140_26170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (4))){
var inst_26090 = (state_26137[(7)]);
var inst_26090__$1 = (state_26137[(2)]);
var state_26137__$1 = (function (){var statearr_26141 = state_26137;
(statearr_26141[(7)] = inst_26090__$1);

return statearr_26141;
})();
if(cljs.core.truth_(inst_26090__$1)){
var statearr_26142_26171 = state_26137__$1;
(statearr_26142_26171[(1)] = (5));

} else {
var statearr_26143_26172 = state_26137__$1;
(statearr_26143_26172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (15))){
var inst_26097 = (state_26137[(8)]);
var inst_26112 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26097);
var inst_26113 = cljs.core.first.call(null,inst_26112);
var inst_26114 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26113);
var inst_26115 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26114)].join('');
var inst_26116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26115);
var state_26137__$1 = state_26137;
var statearr_26144_26173 = state_26137__$1;
(statearr_26144_26173[(2)] = inst_26116);

(statearr_26144_26173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (13))){
var inst_26121 = (state_26137[(2)]);
var state_26137__$1 = state_26137;
var statearr_26145_26174 = state_26137__$1;
(statearr_26145_26174[(2)] = inst_26121);

(statearr_26145_26174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (6))){
var state_26137__$1 = state_26137;
var statearr_26146_26175 = state_26137__$1;
(statearr_26146_26175[(2)] = null);

(statearr_26146_26175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (17))){
var inst_26119 = (state_26137[(2)]);
var state_26137__$1 = state_26137;
var statearr_26147_26176 = state_26137__$1;
(statearr_26147_26176[(2)] = inst_26119);

(statearr_26147_26176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (3))){
var inst_26135 = (state_26137[(2)]);
var state_26137__$1 = state_26137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26137__$1,inst_26135);
} else {
if((state_val_26138 === (12))){
var inst_26096 = (state_26137[(9)]);
var inst_26110 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26096,opts);
var state_26137__$1 = state_26137;
if(cljs.core.truth_(inst_26110)){
var statearr_26148_26177 = state_26137__$1;
(statearr_26148_26177[(1)] = (15));

} else {
var statearr_26149_26178 = state_26137__$1;
(statearr_26149_26178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (2))){
var state_26137__$1 = state_26137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26137__$1,(4),ch);
} else {
if((state_val_26138 === (11))){
var inst_26097 = (state_26137[(8)]);
var inst_26102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26103 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26097);
var inst_26104 = cljs.core.async.timeout.call(null,(1000));
var inst_26105 = [inst_26103,inst_26104];
var inst_26106 = (new cljs.core.PersistentVector(null,2,(5),inst_26102,inst_26105,null));
var state_26137__$1 = state_26137;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26137__$1,(14),inst_26106);
} else {
if((state_val_26138 === (9))){
var inst_26097 = (state_26137[(8)]);
var inst_26123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26124 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26097);
var inst_26125 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26124);
var inst_26126 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26125)].join('');
var inst_26127 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26126);
var state_26137__$1 = (function (){var statearr_26150 = state_26137;
(statearr_26150[(10)] = inst_26123);

return statearr_26150;
})();
var statearr_26151_26179 = state_26137__$1;
(statearr_26151_26179[(2)] = inst_26127);

(statearr_26151_26179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (5))){
var inst_26090 = (state_26137[(7)]);
var inst_26092 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26093 = (new cljs.core.PersistentArrayMap(null,2,inst_26092,null));
var inst_26094 = (new cljs.core.PersistentHashSet(null,inst_26093,null));
var inst_26095 = figwheel.client.focus_msgs.call(null,inst_26094,inst_26090);
var inst_26096 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26095);
var inst_26097 = cljs.core.first.call(null,inst_26095);
var inst_26098 = figwheel.client.autoload_QMARK_.call(null);
var state_26137__$1 = (function (){var statearr_26152 = state_26137;
(statearr_26152[(9)] = inst_26096);

(statearr_26152[(8)] = inst_26097);

return statearr_26152;
})();
if(cljs.core.truth_(inst_26098)){
var statearr_26153_26180 = state_26137__$1;
(statearr_26153_26180[(1)] = (8));

} else {
var statearr_26154_26181 = state_26137__$1;
(statearr_26154_26181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (14))){
var inst_26108 = (state_26137[(2)]);
var state_26137__$1 = state_26137;
var statearr_26155_26182 = state_26137__$1;
(statearr_26155_26182[(2)] = inst_26108);

(statearr_26155_26182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (16))){
var state_26137__$1 = state_26137;
var statearr_26156_26183 = state_26137__$1;
(statearr_26156_26183[(2)] = null);

(statearr_26156_26183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (10))){
var inst_26129 = (state_26137[(2)]);
var state_26137__$1 = (function (){var statearr_26157 = state_26137;
(statearr_26157[(11)] = inst_26129);

return statearr_26157;
})();
var statearr_26158_26184 = state_26137__$1;
(statearr_26158_26184[(2)] = null);

(statearr_26158_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26138 === (8))){
var inst_26096 = (state_26137[(9)]);
var inst_26100 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26096,opts);
var state_26137__$1 = state_26137;
if(cljs.core.truth_(inst_26100)){
var statearr_26159_26185 = state_26137__$1;
(statearr_26159_26185[(1)] = (11));

} else {
var statearr_26160_26186 = state_26137__$1;
(statearr_26160_26186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21611__auto___26168,ch))
;
return ((function (switch__21499__auto__,c__21611__auto___26168,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____1 = (function (state_26137){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_26137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__21503__auto__ = e26165;
var statearr_26166_26187 = state_26137;
(statearr_26166_26187[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26188 = state_26137;
state_26137 = G__26188;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__ = function(state_26137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____1.call(this,state_26137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21500__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___26168,ch))
})();
var state__21613__auto__ = (function (){var statearr_26167 = f__21612__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___26168);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___26168,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26189_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26189_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26196 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26196){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26194 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26195 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26194,_STAR_print_newline_STAR_26195,base_path_26196){
return (function() { 
var G__26197__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26198__i = 0, G__26198__a = new Array(arguments.length -  0);
while (G__26198__i < G__26198__a.length) {G__26198__a[G__26198__i] = arguments[G__26198__i + 0]; ++G__26198__i;}
  args = new cljs.core.IndexedSeq(G__26198__a,0);
} 
return G__26197__delegate.call(this,args);};
G__26197.cljs$lang$maxFixedArity = 0;
G__26197.cljs$lang$applyTo = (function (arglist__26199){
var args = cljs.core.seq(arglist__26199);
return G__26197__delegate(args);
});
G__26197.cljs$core$IFn$_invoke$arity$variadic = G__26197__delegate;
return G__26197;
})()
;})(_STAR_print_fn_STAR_26194,_STAR_print_newline_STAR_26195,base_path_26196))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26195;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26194;
}}catch (e26193){if((e26193 instanceof Error)){
var e = e26193;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26196], null));
} else {
var e = e26193;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26196))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26200){
var map__26207 = p__26200;
var map__26207__$1 = ((((!((map__26207 == null)))?((((map__26207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26207):map__26207);
var opts = map__26207__$1;
var build_id = cljs.core.get.call(null,map__26207__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26207,map__26207__$1,opts,build_id){
return (function (p__26209){
var vec__26210 = p__26209;
var map__26211 = cljs.core.nth.call(null,vec__26210,(0),null);
var map__26211__$1 = ((((!((map__26211 == null)))?((((map__26211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26211):map__26211);
var msg = map__26211__$1;
var msg_name = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26210,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26210,map__26211,map__26211__$1,msg,msg_name,_,map__26207,map__26207__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26210,map__26211,map__26211__$1,msg,msg_name,_,map__26207,map__26207__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26207,map__26207__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26217){
var vec__26218 = p__26217;
var map__26219 = cljs.core.nth.call(null,vec__26218,(0),null);
var map__26219__$1 = ((((!((map__26219 == null)))?((((map__26219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26219):map__26219);
var msg = map__26219__$1;
var msg_name = cljs.core.get.call(null,map__26219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26218,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26221){
var map__26231 = p__26221;
var map__26231__$1 = ((((!((map__26231 == null)))?((((map__26231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26231):map__26231);
var on_compile_warning = cljs.core.get.call(null,map__26231__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26231__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26231,map__26231__$1,on_compile_warning,on_compile_fail){
return (function (p__26233){
var vec__26234 = p__26233;
var map__26235 = cljs.core.nth.call(null,vec__26234,(0),null);
var map__26235__$1 = ((((!((map__26235 == null)))?((((map__26235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26235):map__26235);
var msg = map__26235__$1;
var msg_name = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26234,(1));
var pred__26237 = cljs.core._EQ_;
var expr__26238 = msg_name;
if(cljs.core.truth_(pred__26237.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26238))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26237.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26238))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26231,map__26231__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__,msg_hist,msg_names,msg){
return (function (state_26454){
var state_val_26455 = (state_26454[(1)]);
if((state_val_26455 === (7))){
var inst_26378 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26378)){
var statearr_26456_26502 = state_26454__$1;
(statearr_26456_26502[(1)] = (8));

} else {
var statearr_26457_26503 = state_26454__$1;
(statearr_26457_26503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (20))){
var inst_26448 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26458_26504 = state_26454__$1;
(statearr_26458_26504[(2)] = inst_26448);

(statearr_26458_26504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (27))){
var inst_26444 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26459_26505 = state_26454__$1;
(statearr_26459_26505[(2)] = inst_26444);

(statearr_26459_26505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (1))){
var inst_26371 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26371)){
var statearr_26460_26506 = state_26454__$1;
(statearr_26460_26506[(1)] = (2));

} else {
var statearr_26461_26507 = state_26454__$1;
(statearr_26461_26507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (24))){
var inst_26446 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26462_26508 = state_26454__$1;
(statearr_26462_26508[(2)] = inst_26446);

(statearr_26462_26508[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (4))){
var inst_26452 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26454__$1,inst_26452);
} else {
if((state_val_26455 === (15))){
var inst_26450 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26463_26509 = state_26454__$1;
(statearr_26463_26509[(2)] = inst_26450);

(statearr_26463_26509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (21))){
var inst_26409 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26464_26510 = state_26454__$1;
(statearr_26464_26510[(2)] = inst_26409);

(statearr_26464_26510[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (31))){
var inst_26433 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26433)){
var statearr_26465_26511 = state_26454__$1;
(statearr_26465_26511[(1)] = (34));

} else {
var statearr_26466_26512 = state_26454__$1;
(statearr_26466_26512[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (32))){
var inst_26442 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26467_26513 = state_26454__$1;
(statearr_26467_26513[(2)] = inst_26442);

(statearr_26467_26513[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (33))){
var inst_26431 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26468_26514 = state_26454__$1;
(statearr_26468_26514[(2)] = inst_26431);

(statearr_26468_26514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (13))){
var inst_26392 = figwheel.client.heads_up.clear.call(null);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(16),inst_26392);
} else {
if((state_val_26455 === (22))){
var inst_26413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26414 = figwheel.client.heads_up.append_message.call(null,inst_26413);
var state_26454__$1 = state_26454;
var statearr_26469_26515 = state_26454__$1;
(statearr_26469_26515[(2)] = inst_26414);

(statearr_26469_26515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (36))){
var inst_26440 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26470_26516 = state_26454__$1;
(statearr_26470_26516[(2)] = inst_26440);

(statearr_26470_26516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (29))){
var inst_26424 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26471_26517 = state_26454__$1;
(statearr_26471_26517[(2)] = inst_26424);

(statearr_26471_26517[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (6))){
var inst_26373 = (state_26454[(7)]);
var state_26454__$1 = state_26454;
var statearr_26472_26518 = state_26454__$1;
(statearr_26472_26518[(2)] = inst_26373);

(statearr_26472_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (28))){
var inst_26420 = (state_26454[(2)]);
var inst_26421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26422 = figwheel.client.heads_up.display_warning.call(null,inst_26421);
var state_26454__$1 = (function (){var statearr_26473 = state_26454;
(statearr_26473[(8)] = inst_26420);

return statearr_26473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(29),inst_26422);
} else {
if((state_val_26455 === (25))){
var inst_26418 = figwheel.client.heads_up.clear.call(null);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(28),inst_26418);
} else {
if((state_val_26455 === (34))){
var inst_26435 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(37),inst_26435);
} else {
if((state_val_26455 === (17))){
var inst_26400 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26474_26519 = state_26454__$1;
(statearr_26474_26519[(2)] = inst_26400);

(statearr_26474_26519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (3))){
var inst_26390 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26390)){
var statearr_26475_26520 = state_26454__$1;
(statearr_26475_26520[(1)] = (13));

} else {
var statearr_26476_26521 = state_26454__$1;
(statearr_26476_26521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (12))){
var inst_26386 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26477_26522 = state_26454__$1;
(statearr_26477_26522[(2)] = inst_26386);

(statearr_26477_26522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (2))){
var inst_26373 = (state_26454[(7)]);
var inst_26373__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26454__$1 = (function (){var statearr_26478 = state_26454;
(statearr_26478[(7)] = inst_26373__$1);

return statearr_26478;
})();
if(cljs.core.truth_(inst_26373__$1)){
var statearr_26479_26523 = state_26454__$1;
(statearr_26479_26523[(1)] = (5));

} else {
var statearr_26480_26524 = state_26454__$1;
(statearr_26480_26524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (23))){
var inst_26416 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26416)){
var statearr_26481_26525 = state_26454__$1;
(statearr_26481_26525[(1)] = (25));

} else {
var statearr_26482_26526 = state_26454__$1;
(statearr_26482_26526[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (35))){
var state_26454__$1 = state_26454;
var statearr_26483_26527 = state_26454__$1;
(statearr_26483_26527[(2)] = null);

(statearr_26483_26527[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (19))){
var inst_26411 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26411)){
var statearr_26484_26528 = state_26454__$1;
(statearr_26484_26528[(1)] = (22));

} else {
var statearr_26485_26529 = state_26454__$1;
(statearr_26485_26529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (11))){
var inst_26382 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26486_26530 = state_26454__$1;
(statearr_26486_26530[(2)] = inst_26382);

(statearr_26486_26530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (9))){
var inst_26384 = figwheel.client.heads_up.clear.call(null);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(12),inst_26384);
} else {
if((state_val_26455 === (5))){
var inst_26375 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26454__$1 = state_26454;
var statearr_26487_26531 = state_26454__$1;
(statearr_26487_26531[(2)] = inst_26375);

(statearr_26487_26531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (14))){
var inst_26402 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26402)){
var statearr_26488_26532 = state_26454__$1;
(statearr_26488_26532[(1)] = (18));

} else {
var statearr_26489_26533 = state_26454__$1;
(statearr_26489_26533[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (26))){
var inst_26426 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26454__$1 = state_26454;
if(cljs.core.truth_(inst_26426)){
var statearr_26490_26534 = state_26454__$1;
(statearr_26490_26534[(1)] = (30));

} else {
var statearr_26491_26535 = state_26454__$1;
(statearr_26491_26535[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (16))){
var inst_26394 = (state_26454[(2)]);
var inst_26395 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26396 = figwheel.client.format_messages.call(null,inst_26395);
var inst_26397 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26398 = figwheel.client.heads_up.display_error.call(null,inst_26396,inst_26397);
var state_26454__$1 = (function (){var statearr_26492 = state_26454;
(statearr_26492[(9)] = inst_26394);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(17),inst_26398);
} else {
if((state_val_26455 === (30))){
var inst_26428 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26429 = figwheel.client.heads_up.display_warning.call(null,inst_26428);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(33),inst_26429);
} else {
if((state_val_26455 === (10))){
var inst_26388 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26493_26536 = state_26454__$1;
(statearr_26493_26536[(2)] = inst_26388);

(statearr_26493_26536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (18))){
var inst_26404 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26405 = figwheel.client.format_messages.call(null,inst_26404);
var inst_26406 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26407 = figwheel.client.heads_up.display_error.call(null,inst_26405,inst_26406);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(21),inst_26407);
} else {
if((state_val_26455 === (37))){
var inst_26437 = (state_26454[(2)]);
var state_26454__$1 = state_26454;
var statearr_26494_26537 = state_26454__$1;
(statearr_26494_26537[(2)] = inst_26437);

(statearr_26494_26537[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26455 === (8))){
var inst_26380 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26454__$1 = state_26454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26454__$1,(11),inst_26380);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21611__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21499__auto__,c__21611__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____0 = (function (){
var statearr_26498 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26498[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__);

(statearr_26498[(1)] = (1));

return statearr_26498;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____1 = (function (state_26454){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_26454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e26499){if((e26499 instanceof Object)){
var ex__21503__auto__ = e26499;
var statearr_26500_26538 = state_26454;
(statearr_26500_26538[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26539 = state_26454;
state_26454 = G__26539;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__ = function(state_26454){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____1.call(this,state_26454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__,msg_hist,msg_names,msg))
})();
var state__21613__auto__ = (function (){var statearr_26501 = f__21612__auto__.call(null);
(statearr_26501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_26501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__,msg_hist,msg_names,msg))
);

return c__21611__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21611__auto___26602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___26602,ch){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___26602,ch){
return (function (state_26585){
var state_val_26586 = (state_26585[(1)]);
if((state_val_26586 === (1))){
var state_26585__$1 = state_26585;
var statearr_26587_26603 = state_26585__$1;
(statearr_26587_26603[(2)] = null);

(statearr_26587_26603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (2))){
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26585__$1,(4),ch);
} else {
if((state_val_26586 === (3))){
var inst_26583 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26585__$1,inst_26583);
} else {
if((state_val_26586 === (4))){
var inst_26573 = (state_26585[(7)]);
var inst_26573__$1 = (state_26585[(2)]);
var state_26585__$1 = (function (){var statearr_26588 = state_26585;
(statearr_26588[(7)] = inst_26573__$1);

return statearr_26588;
})();
if(cljs.core.truth_(inst_26573__$1)){
var statearr_26589_26604 = state_26585__$1;
(statearr_26589_26604[(1)] = (5));

} else {
var statearr_26590_26605 = state_26585__$1;
(statearr_26590_26605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (5))){
var inst_26573 = (state_26585[(7)]);
var inst_26575 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26573);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26585__$1,(8),inst_26575);
} else {
if((state_val_26586 === (6))){
var state_26585__$1 = state_26585;
var statearr_26591_26606 = state_26585__$1;
(statearr_26591_26606[(2)] = null);

(statearr_26591_26606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (7))){
var inst_26581 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26592_26607 = state_26585__$1;
(statearr_26592_26607[(2)] = inst_26581);

(statearr_26592_26607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (8))){
var inst_26577 = (state_26585[(2)]);
var state_26585__$1 = (function (){var statearr_26593 = state_26585;
(statearr_26593[(8)] = inst_26577);

return statearr_26593;
})();
var statearr_26594_26608 = state_26585__$1;
(statearr_26594_26608[(2)] = null);

(statearr_26594_26608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21611__auto___26602,ch))
;
return ((function (switch__21499__auto__,c__21611__auto___26602,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21500__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21500__auto____0 = (function (){
var statearr_26598 = [null,null,null,null,null,null,null,null,null];
(statearr_26598[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21500__auto__);

(statearr_26598[(1)] = (1));

return statearr_26598;
});
var figwheel$client$heads_up_plugin_$_state_machine__21500__auto____1 = (function (state_26585){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_26585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e26599){if((e26599 instanceof Object)){
var ex__21503__auto__ = e26599;
var statearr_26600_26609 = state_26585;
(statearr_26600_26609[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26610 = state_26585;
state_26585 = G__26610;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21500__auto__ = function(state_26585){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21500__auto____1.call(this,state_26585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21500__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21500__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___26602,ch))
})();
var state__21613__auto__ = (function (){var statearr_26601 = f__21612__auto__.call(null);
(statearr_26601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___26602);

return statearr_26601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___26602,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__){
return (function (state_26631){
var state_val_26632 = (state_26631[(1)]);
if((state_val_26632 === (1))){
var inst_26626 = cljs.core.async.timeout.call(null,(3000));
var state_26631__$1 = state_26631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26631__$1,(2),inst_26626);
} else {
if((state_val_26632 === (2))){
var inst_26628 = (state_26631[(2)]);
var inst_26629 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26631__$1 = (function (){var statearr_26633 = state_26631;
(statearr_26633[(7)] = inst_26628);

return statearr_26633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26631__$1,inst_26629);
} else {
return null;
}
}
});})(c__21611__auto__))
;
return ((function (switch__21499__auto__,c__21611__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____0 = (function (){
var statearr_26637 = [null,null,null,null,null,null,null,null];
(statearr_26637[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__);

(statearr_26637[(1)] = (1));

return statearr_26637;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____1 = (function (state_26631){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_26631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e26638){if((e26638 instanceof Object)){
var ex__21503__auto__ = e26638;
var statearr_26639_26641 = state_26631;
(statearr_26639_26641[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26642 = state_26631;
state_26631 = G__26642;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__ = function(state_26631){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____1.call(this,state_26631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21500__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__))
})();
var state__21613__auto__ = (function (){var statearr_26640 = f__21612__auto__.call(null);
(statearr_26640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_26640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__))
);

return c__21611__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26643){
var map__26650 = p__26643;
var map__26650__$1 = ((((!((map__26650 == null)))?((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var ed = map__26650__$1;
var formatted_exception = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26652_26656 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26653_26657 = null;
var count__26654_26658 = (0);
var i__26655_26659 = (0);
while(true){
if((i__26655_26659 < count__26654_26658)){
var msg_26660 = cljs.core._nth.call(null,chunk__26653_26657,i__26655_26659);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26660);

var G__26661 = seq__26652_26656;
var G__26662 = chunk__26653_26657;
var G__26663 = count__26654_26658;
var G__26664 = (i__26655_26659 + (1));
seq__26652_26656 = G__26661;
chunk__26653_26657 = G__26662;
count__26654_26658 = G__26663;
i__26655_26659 = G__26664;
continue;
} else {
var temp__4425__auto___26665 = cljs.core.seq.call(null,seq__26652_26656);
if(temp__4425__auto___26665){
var seq__26652_26666__$1 = temp__4425__auto___26665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26652_26666__$1)){
var c__17621__auto___26667 = cljs.core.chunk_first.call(null,seq__26652_26666__$1);
var G__26668 = cljs.core.chunk_rest.call(null,seq__26652_26666__$1);
var G__26669 = c__17621__auto___26667;
var G__26670 = cljs.core.count.call(null,c__17621__auto___26667);
var G__26671 = (0);
seq__26652_26656 = G__26668;
chunk__26653_26657 = G__26669;
count__26654_26658 = G__26670;
i__26655_26659 = G__26671;
continue;
} else {
var msg_26672 = cljs.core.first.call(null,seq__26652_26666__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26672);

var G__26673 = cljs.core.next.call(null,seq__26652_26666__$1);
var G__26674 = null;
var G__26675 = (0);
var G__26676 = (0);
seq__26652_26656 = G__26673;
chunk__26653_26657 = G__26674;
count__26654_26658 = G__26675;
i__26655_26659 = G__26676;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26677){
var map__26680 = p__26677;
var map__26680__$1 = ((((!((map__26680 == null)))?((((map__26680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26680):map__26680);
var w = map__26680__$1;
var message = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16806__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16806__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16806__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26688 = cljs.core.seq.call(null,plugins);
var chunk__26689 = null;
var count__26690 = (0);
var i__26691 = (0);
while(true){
if((i__26691 < count__26690)){
var vec__26692 = cljs.core._nth.call(null,chunk__26689,i__26691);
var k = cljs.core.nth.call(null,vec__26692,(0),null);
var plugin = cljs.core.nth.call(null,vec__26692,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26688,chunk__26689,count__26690,i__26691,pl_26694,vec__26692,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26694.call(null,msg_hist);
});})(seq__26688,chunk__26689,count__26690,i__26691,pl_26694,vec__26692,k,plugin))
);
} else {
}

var G__26695 = seq__26688;
var G__26696 = chunk__26689;
var G__26697 = count__26690;
var G__26698 = (i__26691 + (1));
seq__26688 = G__26695;
chunk__26689 = G__26696;
count__26690 = G__26697;
i__26691 = G__26698;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26688);
if(temp__4425__auto__){
var seq__26688__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26688__$1)){
var c__17621__auto__ = cljs.core.chunk_first.call(null,seq__26688__$1);
var G__26699 = cljs.core.chunk_rest.call(null,seq__26688__$1);
var G__26700 = c__17621__auto__;
var G__26701 = cljs.core.count.call(null,c__17621__auto__);
var G__26702 = (0);
seq__26688 = G__26699;
chunk__26689 = G__26700;
count__26690 = G__26701;
i__26691 = G__26702;
continue;
} else {
var vec__26693 = cljs.core.first.call(null,seq__26688__$1);
var k = cljs.core.nth.call(null,vec__26693,(0),null);
var plugin = cljs.core.nth.call(null,vec__26693,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26703 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26688,chunk__26689,count__26690,i__26691,pl_26703,vec__26693,k,plugin,seq__26688__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26703.call(null,msg_hist);
});})(seq__26688,chunk__26689,count__26690,i__26691,pl_26703,vec__26693,k,plugin,seq__26688__$1,temp__4425__auto__))
);
} else {
}

var G__26704 = cljs.core.next.call(null,seq__26688__$1);
var G__26705 = null;
var G__26706 = (0);
var G__26707 = (0);
seq__26688 = G__26704;
chunk__26689 = G__26705;
count__26690 = G__26706;
i__26691 = G__26707;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26708 = [];
var len__17876__auto___26711 = arguments.length;
var i__17877__auto___26712 = (0);
while(true){
if((i__17877__auto___26712 < len__17876__auto___26711)){
args26708.push((arguments[i__17877__auto___26712]));

var G__26713 = (i__17877__auto___26712 + (1));
i__17877__auto___26712 = G__26713;
continue;
} else {
}
break;
}

var G__26710 = args26708.length;
switch (G__26710) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26708.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17883__auto__ = [];
var len__17876__auto___26719 = arguments.length;
var i__17877__auto___26720 = (0);
while(true){
if((i__17877__auto___26720 < len__17876__auto___26719)){
args__17883__auto__.push((arguments[i__17877__auto___26720]));

var G__26721 = (i__17877__auto___26720 + (1));
i__17877__auto___26720 = G__26721;
continue;
} else {
}
break;
}

var argseq__17884__auto__ = ((((0) < args__17883__auto__.length))?(new cljs.core.IndexedSeq(args__17883__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17884__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26716){
var map__26717 = p__26716;
var map__26717__$1 = ((((!((map__26717 == null)))?((((map__26717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26717):map__26717);
var opts = map__26717__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26715){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26715));
});

//# sourceMappingURL=client.js.map