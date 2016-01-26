// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25578_25592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25579_25593 = null;
var count__25580_25594 = (0);
var i__25581_25595 = (0);
while(true){
if((i__25581_25595 < count__25580_25594)){
var f_25596 = cljs.core._nth.call(null,chunk__25579_25593,i__25581_25595);
cljs.core.println.call(null,"  ",f_25596);

var G__25597 = seq__25578_25592;
var G__25598 = chunk__25579_25593;
var G__25599 = count__25580_25594;
var G__25600 = (i__25581_25595 + (1));
seq__25578_25592 = G__25597;
chunk__25579_25593 = G__25598;
count__25580_25594 = G__25599;
i__25581_25595 = G__25600;
continue;
} else {
var temp__4425__auto___25601 = cljs.core.seq.call(null,seq__25578_25592);
if(temp__4425__auto___25601){
var seq__25578_25602__$1 = temp__4425__auto___25601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25578_25602__$1)){
var c__17621__auto___25603 = cljs.core.chunk_first.call(null,seq__25578_25602__$1);
var G__25604 = cljs.core.chunk_rest.call(null,seq__25578_25602__$1);
var G__25605 = c__17621__auto___25603;
var G__25606 = cljs.core.count.call(null,c__17621__auto___25603);
var G__25607 = (0);
seq__25578_25592 = G__25604;
chunk__25579_25593 = G__25605;
count__25580_25594 = G__25606;
i__25581_25595 = G__25607;
continue;
} else {
var f_25608 = cljs.core.first.call(null,seq__25578_25602__$1);
cljs.core.println.call(null,"  ",f_25608);

var G__25609 = cljs.core.next.call(null,seq__25578_25602__$1);
var G__25610 = null;
var G__25611 = (0);
var G__25612 = (0);
seq__25578_25592 = G__25609;
chunk__25579_25593 = G__25610;
count__25580_25594 = G__25611;
i__25581_25595 = G__25612;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25613 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16818__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25613);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25613)))?cljs.core.second.call(null,arglists_25613):arglists_25613));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25582 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25583 = null;
var count__25584 = (0);
var i__25585 = (0);
while(true){
if((i__25585 < count__25584)){
var vec__25586 = cljs.core._nth.call(null,chunk__25583,i__25585);
var name = cljs.core.nth.call(null,vec__25586,(0),null);
var map__25587 = cljs.core.nth.call(null,vec__25586,(1),null);
var map__25587__$1 = ((((!((map__25587 == null)))?((((map__25587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25587):map__25587);
var doc = cljs.core.get.call(null,map__25587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25614 = seq__25582;
var G__25615 = chunk__25583;
var G__25616 = count__25584;
var G__25617 = (i__25585 + (1));
seq__25582 = G__25614;
chunk__25583 = G__25615;
count__25584 = G__25616;
i__25585 = G__25617;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25582);
if(temp__4425__auto__){
var seq__25582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25582__$1)){
var c__17621__auto__ = cljs.core.chunk_first.call(null,seq__25582__$1);
var G__25618 = cljs.core.chunk_rest.call(null,seq__25582__$1);
var G__25619 = c__17621__auto__;
var G__25620 = cljs.core.count.call(null,c__17621__auto__);
var G__25621 = (0);
seq__25582 = G__25618;
chunk__25583 = G__25619;
count__25584 = G__25620;
i__25585 = G__25621;
continue;
} else {
var vec__25589 = cljs.core.first.call(null,seq__25582__$1);
var name = cljs.core.nth.call(null,vec__25589,(0),null);
var map__25590 = cljs.core.nth.call(null,vec__25589,(1),null);
var map__25590__$1 = ((((!((map__25590 == null)))?((((map__25590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25590):map__25590);
var doc = cljs.core.get.call(null,map__25590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25590__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25622 = cljs.core.next.call(null,seq__25582__$1);
var G__25623 = null;
var G__25624 = (0);
var G__25625 = (0);
seq__25582 = G__25622;
chunk__25583 = G__25623;
count__25584 = G__25624;
i__25585 = G__25625;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map