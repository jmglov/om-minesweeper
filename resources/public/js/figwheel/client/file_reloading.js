// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16818__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16818__auto__){
return or__16818__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16818__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24554_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24554_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24559 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24560 = null;
var count__24561 = (0);
var i__24562 = (0);
while(true){
if((i__24562 < count__24561)){
var n = cljs.core._nth.call(null,chunk__24560,i__24562);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24563 = seq__24559;
var G__24564 = chunk__24560;
var G__24565 = count__24561;
var G__24566 = (i__24562 + (1));
seq__24559 = G__24563;
chunk__24560 = G__24564;
count__24561 = G__24565;
i__24562 = G__24566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24559);
if(temp__4425__auto__){
var seq__24559__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24559__$1)){
var c__17621__auto__ = cljs.core.chunk_first.call(null,seq__24559__$1);
var G__24567 = cljs.core.chunk_rest.call(null,seq__24559__$1);
var G__24568 = c__17621__auto__;
var G__24569 = cljs.core.count.call(null,c__17621__auto__);
var G__24570 = (0);
seq__24559 = G__24567;
chunk__24560 = G__24568;
count__24561 = G__24569;
i__24562 = G__24570;
continue;
} else {
var n = cljs.core.first.call(null,seq__24559__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24571 = cljs.core.next.call(null,seq__24559__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24559 = G__24571;
chunk__24560 = G__24572;
count__24561 = G__24573;
i__24562 = G__24574;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24613_24620 = cljs.core.seq.call(null,deps);
var chunk__24614_24621 = null;
var count__24615_24622 = (0);
var i__24616_24623 = (0);
while(true){
if((i__24616_24623 < count__24615_24622)){
var dep_24624 = cljs.core._nth.call(null,chunk__24614_24621,i__24616_24623);
topo_sort_helper_STAR_.call(null,dep_24624,(depth + (1)),state);

var G__24625 = seq__24613_24620;
var G__24626 = chunk__24614_24621;
var G__24627 = count__24615_24622;
var G__24628 = (i__24616_24623 + (1));
seq__24613_24620 = G__24625;
chunk__24614_24621 = G__24626;
count__24615_24622 = G__24627;
i__24616_24623 = G__24628;
continue;
} else {
var temp__4425__auto___24629 = cljs.core.seq.call(null,seq__24613_24620);
if(temp__4425__auto___24629){
var seq__24613_24630__$1 = temp__4425__auto___24629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24613_24630__$1)){
var c__17621__auto___24631 = cljs.core.chunk_first.call(null,seq__24613_24630__$1);
var G__24632 = cljs.core.chunk_rest.call(null,seq__24613_24630__$1);
var G__24633 = c__17621__auto___24631;
var G__24634 = cljs.core.count.call(null,c__17621__auto___24631);
var G__24635 = (0);
seq__24613_24620 = G__24632;
chunk__24614_24621 = G__24633;
count__24615_24622 = G__24634;
i__24616_24623 = G__24635;
continue;
} else {
var dep_24636 = cljs.core.first.call(null,seq__24613_24630__$1);
topo_sort_helper_STAR_.call(null,dep_24636,(depth + (1)),state);

var G__24637 = cljs.core.next.call(null,seq__24613_24630__$1);
var G__24638 = null;
var G__24639 = (0);
var G__24640 = (0);
seq__24613_24620 = G__24637;
chunk__24614_24621 = G__24638;
count__24615_24622 = G__24639;
i__24616_24623 = G__24640;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24617){
var vec__24619 = p__24617;
var x = cljs.core.nth.call(null,vec__24619,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24619,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24619,x,xs,get_deps__$1){
return (function (p1__24575_SHARP_){
return clojure.set.difference.call(null,p1__24575_SHARP_,x);
});})(vec__24619,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24653 = cljs.core.seq.call(null,provides);
var chunk__24654 = null;
var count__24655 = (0);
var i__24656 = (0);
while(true){
if((i__24656 < count__24655)){
var prov = cljs.core._nth.call(null,chunk__24654,i__24656);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24657_24665 = cljs.core.seq.call(null,requires);
var chunk__24658_24666 = null;
var count__24659_24667 = (0);
var i__24660_24668 = (0);
while(true){
if((i__24660_24668 < count__24659_24667)){
var req_24669 = cljs.core._nth.call(null,chunk__24658_24666,i__24660_24668);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24669,prov);

var G__24670 = seq__24657_24665;
var G__24671 = chunk__24658_24666;
var G__24672 = count__24659_24667;
var G__24673 = (i__24660_24668 + (1));
seq__24657_24665 = G__24670;
chunk__24658_24666 = G__24671;
count__24659_24667 = G__24672;
i__24660_24668 = G__24673;
continue;
} else {
var temp__4425__auto___24674 = cljs.core.seq.call(null,seq__24657_24665);
if(temp__4425__auto___24674){
var seq__24657_24675__$1 = temp__4425__auto___24674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24657_24675__$1)){
var c__17621__auto___24676 = cljs.core.chunk_first.call(null,seq__24657_24675__$1);
var G__24677 = cljs.core.chunk_rest.call(null,seq__24657_24675__$1);
var G__24678 = c__17621__auto___24676;
var G__24679 = cljs.core.count.call(null,c__17621__auto___24676);
var G__24680 = (0);
seq__24657_24665 = G__24677;
chunk__24658_24666 = G__24678;
count__24659_24667 = G__24679;
i__24660_24668 = G__24680;
continue;
} else {
var req_24681 = cljs.core.first.call(null,seq__24657_24675__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24681,prov);

var G__24682 = cljs.core.next.call(null,seq__24657_24675__$1);
var G__24683 = null;
var G__24684 = (0);
var G__24685 = (0);
seq__24657_24665 = G__24682;
chunk__24658_24666 = G__24683;
count__24659_24667 = G__24684;
i__24660_24668 = G__24685;
continue;
}
} else {
}
}
break;
}

var G__24686 = seq__24653;
var G__24687 = chunk__24654;
var G__24688 = count__24655;
var G__24689 = (i__24656 + (1));
seq__24653 = G__24686;
chunk__24654 = G__24687;
count__24655 = G__24688;
i__24656 = G__24689;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24653);
if(temp__4425__auto__){
var seq__24653__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24653__$1)){
var c__17621__auto__ = cljs.core.chunk_first.call(null,seq__24653__$1);
var G__24690 = cljs.core.chunk_rest.call(null,seq__24653__$1);
var G__24691 = c__17621__auto__;
var G__24692 = cljs.core.count.call(null,c__17621__auto__);
var G__24693 = (0);
seq__24653 = G__24690;
chunk__24654 = G__24691;
count__24655 = G__24692;
i__24656 = G__24693;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24653__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24661_24694 = cljs.core.seq.call(null,requires);
var chunk__24662_24695 = null;
var count__24663_24696 = (0);
var i__24664_24697 = (0);
while(true){
if((i__24664_24697 < count__24663_24696)){
var req_24698 = cljs.core._nth.call(null,chunk__24662_24695,i__24664_24697);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24698,prov);

var G__24699 = seq__24661_24694;
var G__24700 = chunk__24662_24695;
var G__24701 = count__24663_24696;
var G__24702 = (i__24664_24697 + (1));
seq__24661_24694 = G__24699;
chunk__24662_24695 = G__24700;
count__24663_24696 = G__24701;
i__24664_24697 = G__24702;
continue;
} else {
var temp__4425__auto___24703__$1 = cljs.core.seq.call(null,seq__24661_24694);
if(temp__4425__auto___24703__$1){
var seq__24661_24704__$1 = temp__4425__auto___24703__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24661_24704__$1)){
var c__17621__auto___24705 = cljs.core.chunk_first.call(null,seq__24661_24704__$1);
var G__24706 = cljs.core.chunk_rest.call(null,seq__24661_24704__$1);
var G__24707 = c__17621__auto___24705;
var G__24708 = cljs.core.count.call(null,c__17621__auto___24705);
var G__24709 = (0);
seq__24661_24694 = G__24706;
chunk__24662_24695 = G__24707;
count__24663_24696 = G__24708;
i__24664_24697 = G__24709;
continue;
} else {
var req_24710 = cljs.core.first.call(null,seq__24661_24704__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24710,prov);

var G__24711 = cljs.core.next.call(null,seq__24661_24704__$1);
var G__24712 = null;
var G__24713 = (0);
var G__24714 = (0);
seq__24661_24694 = G__24711;
chunk__24662_24695 = G__24712;
count__24663_24696 = G__24713;
i__24664_24697 = G__24714;
continue;
}
} else {
}
}
break;
}

var G__24715 = cljs.core.next.call(null,seq__24653__$1);
var G__24716 = null;
var G__24717 = (0);
var G__24718 = (0);
seq__24653 = G__24715;
chunk__24654 = G__24716;
count__24655 = G__24717;
i__24656 = G__24718;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24723_24727 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24724_24728 = null;
var count__24725_24729 = (0);
var i__24726_24730 = (0);
while(true){
if((i__24726_24730 < count__24725_24729)){
var ns_24731 = cljs.core._nth.call(null,chunk__24724_24728,i__24726_24730);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24731);

var G__24732 = seq__24723_24727;
var G__24733 = chunk__24724_24728;
var G__24734 = count__24725_24729;
var G__24735 = (i__24726_24730 + (1));
seq__24723_24727 = G__24732;
chunk__24724_24728 = G__24733;
count__24725_24729 = G__24734;
i__24726_24730 = G__24735;
continue;
} else {
var temp__4425__auto___24736 = cljs.core.seq.call(null,seq__24723_24727);
if(temp__4425__auto___24736){
var seq__24723_24737__$1 = temp__4425__auto___24736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24723_24737__$1)){
var c__17621__auto___24738 = cljs.core.chunk_first.call(null,seq__24723_24737__$1);
var G__24739 = cljs.core.chunk_rest.call(null,seq__24723_24737__$1);
var G__24740 = c__17621__auto___24738;
var G__24741 = cljs.core.count.call(null,c__17621__auto___24738);
var G__24742 = (0);
seq__24723_24727 = G__24739;
chunk__24724_24728 = G__24740;
count__24725_24729 = G__24741;
i__24726_24730 = G__24742;
continue;
} else {
var ns_24743 = cljs.core.first.call(null,seq__24723_24737__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24743);

var G__24744 = cljs.core.next.call(null,seq__24723_24737__$1);
var G__24745 = null;
var G__24746 = (0);
var G__24747 = (0);
seq__24723_24727 = G__24744;
chunk__24724_24728 = G__24745;
count__24725_24729 = G__24746;
i__24726_24730 = G__24747;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16818__auto__ = goog.require__;
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24748__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24749__i = 0, G__24749__a = new Array(arguments.length -  0);
while (G__24749__i < G__24749__a.length) {G__24749__a[G__24749__i] = arguments[G__24749__i + 0]; ++G__24749__i;}
  args = new cljs.core.IndexedSeq(G__24749__a,0);
} 
return G__24748__delegate.call(this,args);};
G__24748.cljs$lang$maxFixedArity = 0;
G__24748.cljs$lang$applyTo = (function (arglist__24750){
var args = cljs.core.seq(arglist__24750);
return G__24748__delegate(args);
});
G__24748.cljs$core$IFn$_invoke$arity$variadic = G__24748__delegate;
return G__24748;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24752 = cljs.core._EQ_;
var expr__24753 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24752.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24753))){
var path_parts = ((function (pred__24752,expr__24753){
return (function (p1__24751_SHARP_){
return clojure.string.split.call(null,p1__24751_SHARP_,/[\/\\]/);
});})(pred__24752,expr__24753))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24752,expr__24753){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24755){if((e24755 instanceof Error)){
var e = e24755;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24755;

}
}})());
});
;})(path_parts,sep,root,pred__24752,expr__24753))
} else {
if(cljs.core.truth_(pred__24752.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24753))){
return ((function (pred__24752,expr__24753){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24752,expr__24753){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24752,expr__24753))
);

return deferred.addErrback(((function (deferred,pred__24752,expr__24753){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24752,expr__24753))
);
});
;})(pred__24752,expr__24753))
} else {
return ((function (pred__24752,expr__24753){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24752,expr__24753))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24756,callback){
var map__24759 = p__24756;
var map__24759__$1 = ((((!((map__24759 == null)))?((((map__24759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24759):map__24759);
var file_msg = map__24759__$1;
var request_url = cljs.core.get.call(null,map__24759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24759,map__24759__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24759,map__24759__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__){
return (function (state_24783){
var state_val_24784 = (state_24783[(1)]);
if((state_val_24784 === (7))){
var inst_24779 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24785_24805 = state_24783__$1;
(statearr_24785_24805[(2)] = inst_24779);

(statearr_24785_24805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (1))){
var state_24783__$1 = state_24783;
var statearr_24786_24806 = state_24783__$1;
(statearr_24786_24806[(2)] = null);

(statearr_24786_24806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (4))){
var inst_24763 = (state_24783[(7)]);
var inst_24763__$1 = (state_24783[(2)]);
var state_24783__$1 = (function (){var statearr_24787 = state_24783;
(statearr_24787[(7)] = inst_24763__$1);

return statearr_24787;
})();
if(cljs.core.truth_(inst_24763__$1)){
var statearr_24788_24807 = state_24783__$1;
(statearr_24788_24807[(1)] = (5));

} else {
var statearr_24789_24808 = state_24783__$1;
(statearr_24789_24808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (6))){
var state_24783__$1 = state_24783;
var statearr_24790_24809 = state_24783__$1;
(statearr_24790_24809[(2)] = null);

(statearr_24790_24809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (3))){
var inst_24781 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24783__$1,inst_24781);
} else {
if((state_val_24784 === (2))){
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24783__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24784 === (11))){
var inst_24775 = (state_24783[(2)]);
var state_24783__$1 = (function (){var statearr_24791 = state_24783;
(statearr_24791[(8)] = inst_24775);

return statearr_24791;
})();
var statearr_24792_24810 = state_24783__$1;
(statearr_24792_24810[(2)] = null);

(statearr_24792_24810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (9))){
var inst_24769 = (state_24783[(9)]);
var inst_24767 = (state_24783[(10)]);
var inst_24771 = inst_24769.call(null,inst_24767);
var state_24783__$1 = state_24783;
var statearr_24793_24811 = state_24783__$1;
(statearr_24793_24811[(2)] = inst_24771);

(statearr_24793_24811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (5))){
var inst_24763 = (state_24783[(7)]);
var inst_24765 = figwheel.client.file_reloading.blocking_load.call(null,inst_24763);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24783__$1,(8),inst_24765);
} else {
if((state_val_24784 === (10))){
var inst_24767 = (state_24783[(10)]);
var inst_24773 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24767);
var state_24783__$1 = state_24783;
var statearr_24794_24812 = state_24783__$1;
(statearr_24794_24812[(2)] = inst_24773);

(statearr_24794_24812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (8))){
var inst_24763 = (state_24783[(7)]);
var inst_24769 = (state_24783[(9)]);
var inst_24767 = (state_24783[(2)]);
var inst_24768 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24769__$1 = cljs.core.get.call(null,inst_24768,inst_24763);
var state_24783__$1 = (function (){var statearr_24795 = state_24783;
(statearr_24795[(9)] = inst_24769__$1);

(statearr_24795[(10)] = inst_24767);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24769__$1)){
var statearr_24796_24813 = state_24783__$1;
(statearr_24796_24813[(1)] = (9));

} else {
var statearr_24797_24814 = state_24783__$1;
(statearr_24797_24814[(1)] = (10));

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
});})(c__21611__auto__))
;
return ((function (switch__21499__auto__,c__21611__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21500__auto__ = null;
var figwheel$client$file_reloading$state_machine__21500__auto____0 = (function (){
var statearr_24801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24801[(0)] = figwheel$client$file_reloading$state_machine__21500__auto__);

(statearr_24801[(1)] = (1));

return statearr_24801;
});
var figwheel$client$file_reloading$state_machine__21500__auto____1 = (function (state_24783){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24802){if((e24802 instanceof Object)){
var ex__21503__auto__ = e24802;
var statearr_24803_24815 = state_24783;
(statearr_24803_24815[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24816 = state_24783;
state_24783 = G__24816;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21500__auto__ = function(state_24783){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21500__auto____1.call(this,state_24783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21500__auto____0;
figwheel$client$file_reloading$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21500__auto____1;
return figwheel$client$file_reloading$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__))
})();
var state__21613__auto__ = (function (){var statearr_24804 = f__21612__auto__.call(null);
(statearr_24804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_24804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__))
);

return c__21611__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24817,callback){
var map__24820 = p__24817;
var map__24820__$1 = ((((!((map__24820 == null)))?((((map__24820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24820):map__24820);
var file_msg = map__24820__$1;
var namespace = cljs.core.get.call(null,map__24820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24820,map__24820__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24820,map__24820__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24822){
var map__24825 = p__24822;
var map__24825__$1 = ((((!((map__24825 == null)))?((((map__24825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24825):map__24825);
var file_msg = map__24825__$1;
var namespace = cljs.core.get.call(null,map__24825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16806__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16806__auto__){
var or__16818__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
var or__16818__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16818__auto____$1)){
return or__16818__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16806__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24827,callback){
var map__24830 = p__24827;
var map__24830__$1 = ((((!((map__24830 == null)))?((((map__24830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24830):map__24830);
var file_msg = map__24830__$1;
var request_url = cljs.core.get.call(null,map__24830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21611__auto___24918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___24918,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___24918,out){
return (function (state_24900){
var state_val_24901 = (state_24900[(1)]);
if((state_val_24901 === (1))){
var inst_24878 = cljs.core.nth.call(null,files,(0),null);
var inst_24879 = cljs.core.nthnext.call(null,files,(1));
var inst_24880 = files;
var state_24900__$1 = (function (){var statearr_24902 = state_24900;
(statearr_24902[(7)] = inst_24879);

(statearr_24902[(8)] = inst_24880);

(statearr_24902[(9)] = inst_24878);

return statearr_24902;
})();
var statearr_24903_24919 = state_24900__$1;
(statearr_24903_24919[(2)] = null);

(statearr_24903_24919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (2))){
var inst_24880 = (state_24900[(8)]);
var inst_24883 = (state_24900[(10)]);
var inst_24883__$1 = cljs.core.nth.call(null,inst_24880,(0),null);
var inst_24884 = cljs.core.nthnext.call(null,inst_24880,(1));
var inst_24885 = (inst_24883__$1 == null);
var inst_24886 = cljs.core.not.call(null,inst_24885);
var state_24900__$1 = (function (){var statearr_24904 = state_24900;
(statearr_24904[(11)] = inst_24884);

(statearr_24904[(10)] = inst_24883__$1);

return statearr_24904;
})();
if(inst_24886){
var statearr_24905_24920 = state_24900__$1;
(statearr_24905_24920[(1)] = (4));

} else {
var statearr_24906_24921 = state_24900__$1;
(statearr_24906_24921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (3))){
var inst_24898 = (state_24900[(2)]);
var state_24900__$1 = state_24900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24900__$1,inst_24898);
} else {
if((state_val_24901 === (4))){
var inst_24883 = (state_24900[(10)]);
var inst_24888 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24883);
var state_24900__$1 = state_24900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24900__$1,(7),inst_24888);
} else {
if((state_val_24901 === (5))){
var inst_24894 = cljs.core.async.close_BANG_.call(null,out);
var state_24900__$1 = state_24900;
var statearr_24907_24922 = state_24900__$1;
(statearr_24907_24922[(2)] = inst_24894);

(statearr_24907_24922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (6))){
var inst_24896 = (state_24900[(2)]);
var state_24900__$1 = state_24900;
var statearr_24908_24923 = state_24900__$1;
(statearr_24908_24923[(2)] = inst_24896);

(statearr_24908_24923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24901 === (7))){
var inst_24884 = (state_24900[(11)]);
var inst_24890 = (state_24900[(2)]);
var inst_24891 = cljs.core.async.put_BANG_.call(null,out,inst_24890);
var inst_24880 = inst_24884;
var state_24900__$1 = (function (){var statearr_24909 = state_24900;
(statearr_24909[(12)] = inst_24891);

(statearr_24909[(8)] = inst_24880);

return statearr_24909;
})();
var statearr_24910_24924 = state_24900__$1;
(statearr_24910_24924[(2)] = null);

(statearr_24910_24924[(1)] = (2));


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
});})(c__21611__auto___24918,out))
;
return ((function (switch__21499__auto__,c__21611__auto___24918,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____0 = (function (){
var statearr_24914 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24914[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__);

(statearr_24914[(1)] = (1));

return statearr_24914;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____1 = (function (state_24900){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object)){
var ex__21503__auto__ = e24915;
var statearr_24916_24925 = state_24900;
(statearr_24916_24925[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24926 = state_24900;
state_24900 = G__24926;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__ = function(state_24900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____1.call(this,state_24900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___24918,out))
})();
var state__21613__auto__ = (function (){var statearr_24917 = f__21612__auto__.call(null);
(statearr_24917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___24918);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___24918,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24927,opts){
var map__24931 = p__24927;
var map__24931__$1 = ((((!((map__24931 == null)))?((((map__24931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24931):map__24931);
var eval_body__$1 = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16806__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16806__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16806__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24933){var e = e24933;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24934_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24934_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24939){
var vec__24940 = p__24939;
var k = cljs.core.nth.call(null,vec__24940,(0),null);
var v = cljs.core.nth.call(null,vec__24940,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24941){
var vec__24942 = p__24941;
var k = cljs.core.nth.call(null,vec__24942,(0),null);
var v = cljs.core.nth.call(null,vec__24942,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24946,p__24947){
var map__25194 = p__24946;
var map__25194__$1 = ((((!((map__25194 == null)))?((((map__25194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25194):map__25194);
var opts = map__25194__$1;
var before_jsload = cljs.core.get.call(null,map__25194__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25194__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25194__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25195 = p__24947;
var map__25195__$1 = ((((!((map__25195 == null)))?((((map__25195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25195):map__25195);
var msg = map__25195__$1;
var files = cljs.core.get.call(null,map__25195__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25195__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25195__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25348){
var state_val_25349 = (state_25348[(1)]);
if((state_val_25349 === (7))){
var inst_25210 = (state_25348[(7)]);
var inst_25211 = (state_25348[(8)]);
var inst_25209 = (state_25348[(9)]);
var inst_25212 = (state_25348[(10)]);
var inst_25217 = cljs.core._nth.call(null,inst_25210,inst_25212);
var inst_25218 = figwheel.client.file_reloading.eval_body.call(null,inst_25217,opts);
var inst_25219 = (inst_25212 + (1));
var tmp25350 = inst_25210;
var tmp25351 = inst_25211;
var tmp25352 = inst_25209;
var inst_25209__$1 = tmp25352;
var inst_25210__$1 = tmp25350;
var inst_25211__$1 = tmp25351;
var inst_25212__$1 = inst_25219;
var state_25348__$1 = (function (){var statearr_25353 = state_25348;
(statearr_25353[(7)] = inst_25210__$1);

(statearr_25353[(8)] = inst_25211__$1);

(statearr_25353[(11)] = inst_25218);

(statearr_25353[(9)] = inst_25209__$1);

(statearr_25353[(10)] = inst_25212__$1);

return statearr_25353;
})();
var statearr_25354_25440 = state_25348__$1;
(statearr_25354_25440[(2)] = null);

(statearr_25354_25440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (20))){
var inst_25252 = (state_25348[(12)]);
var inst_25260 = figwheel.client.file_reloading.sort_files.call(null,inst_25252);
var state_25348__$1 = state_25348;
var statearr_25355_25441 = state_25348__$1;
(statearr_25355_25441[(2)] = inst_25260);

(statearr_25355_25441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (27))){
var state_25348__$1 = state_25348;
var statearr_25356_25442 = state_25348__$1;
(statearr_25356_25442[(2)] = null);

(statearr_25356_25442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (1))){
var inst_25201 = (state_25348[(13)]);
var inst_25198 = before_jsload.call(null,files);
var inst_25199 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25200 = (function (){return ((function (inst_25201,inst_25198,inst_25199,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24943_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24943_SHARP_);
});
;})(inst_25201,inst_25198,inst_25199,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25201__$1 = cljs.core.filter.call(null,inst_25200,files);
var inst_25202 = cljs.core.not_empty.call(null,inst_25201__$1);
var state_25348__$1 = (function (){var statearr_25357 = state_25348;
(statearr_25357[(14)] = inst_25199);

(statearr_25357[(13)] = inst_25201__$1);

(statearr_25357[(15)] = inst_25198);

return statearr_25357;
})();
if(cljs.core.truth_(inst_25202)){
var statearr_25358_25443 = state_25348__$1;
(statearr_25358_25443[(1)] = (2));

} else {
var statearr_25359_25444 = state_25348__$1;
(statearr_25359_25444[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (24))){
var state_25348__$1 = state_25348;
var statearr_25360_25445 = state_25348__$1;
(statearr_25360_25445[(2)] = null);

(statearr_25360_25445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (39))){
var inst_25302 = (state_25348[(16)]);
var state_25348__$1 = state_25348;
var statearr_25361_25446 = state_25348__$1;
(statearr_25361_25446[(2)] = inst_25302);

(statearr_25361_25446[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (46))){
var inst_25343 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25362_25447 = state_25348__$1;
(statearr_25362_25447[(2)] = inst_25343);

(statearr_25362_25447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (4))){
var inst_25246 = (state_25348[(2)]);
var inst_25247 = cljs.core.List.EMPTY;
var inst_25248 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25247);
var inst_25249 = (function (){return ((function (inst_25246,inst_25247,inst_25248,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24944_SHARP_){
var and__16806__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24944_SHARP_);
if(cljs.core.truth_(and__16806__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24944_SHARP_));
} else {
return and__16806__auto__;
}
});
;})(inst_25246,inst_25247,inst_25248,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25250 = cljs.core.filter.call(null,inst_25249,files);
var inst_25251 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25252 = cljs.core.concat.call(null,inst_25250,inst_25251);
var state_25348__$1 = (function (){var statearr_25363 = state_25348;
(statearr_25363[(17)] = inst_25248);

(statearr_25363[(18)] = inst_25246);

(statearr_25363[(12)] = inst_25252);

return statearr_25363;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25364_25448 = state_25348__$1;
(statearr_25364_25448[(1)] = (16));

} else {
var statearr_25365_25449 = state_25348__$1;
(statearr_25365_25449[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (15))){
var inst_25236 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25366_25450 = state_25348__$1;
(statearr_25366_25450[(2)] = inst_25236);

(statearr_25366_25450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (21))){
var inst_25262 = (state_25348[(19)]);
var inst_25262__$1 = (state_25348[(2)]);
var inst_25263 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25262__$1);
var state_25348__$1 = (function (){var statearr_25367 = state_25348;
(statearr_25367[(19)] = inst_25262__$1);

return statearr_25367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25348__$1,(22),inst_25263);
} else {
if((state_val_25349 === (31))){
var inst_25346 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25348__$1,inst_25346);
} else {
if((state_val_25349 === (32))){
var inst_25302 = (state_25348[(16)]);
var inst_25307 = inst_25302.cljs$lang$protocol_mask$partition0$;
var inst_25308 = (inst_25307 & (64));
var inst_25309 = inst_25302.cljs$core$ISeq$;
var inst_25310 = (inst_25308) || (inst_25309);
var state_25348__$1 = state_25348;
if(cljs.core.truth_(inst_25310)){
var statearr_25368_25451 = state_25348__$1;
(statearr_25368_25451[(1)] = (35));

} else {
var statearr_25369_25452 = state_25348__$1;
(statearr_25369_25452[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (40))){
var inst_25323 = (state_25348[(20)]);
var inst_25322 = (state_25348[(2)]);
var inst_25323__$1 = cljs.core.get.call(null,inst_25322,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25324 = cljs.core.get.call(null,inst_25322,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25325 = cljs.core.not_empty.call(null,inst_25323__$1);
var state_25348__$1 = (function (){var statearr_25370 = state_25348;
(statearr_25370[(21)] = inst_25324);

(statearr_25370[(20)] = inst_25323__$1);

return statearr_25370;
})();
if(cljs.core.truth_(inst_25325)){
var statearr_25371_25453 = state_25348__$1;
(statearr_25371_25453[(1)] = (41));

} else {
var statearr_25372_25454 = state_25348__$1;
(statearr_25372_25454[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (33))){
var state_25348__$1 = state_25348;
var statearr_25373_25455 = state_25348__$1;
(statearr_25373_25455[(2)] = false);

(statearr_25373_25455[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (13))){
var inst_25222 = (state_25348[(22)]);
var inst_25226 = cljs.core.chunk_first.call(null,inst_25222);
var inst_25227 = cljs.core.chunk_rest.call(null,inst_25222);
var inst_25228 = cljs.core.count.call(null,inst_25226);
var inst_25209 = inst_25227;
var inst_25210 = inst_25226;
var inst_25211 = inst_25228;
var inst_25212 = (0);
var state_25348__$1 = (function (){var statearr_25374 = state_25348;
(statearr_25374[(7)] = inst_25210);

(statearr_25374[(8)] = inst_25211);

(statearr_25374[(9)] = inst_25209);

(statearr_25374[(10)] = inst_25212);

return statearr_25374;
})();
var statearr_25375_25456 = state_25348__$1;
(statearr_25375_25456[(2)] = null);

(statearr_25375_25456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (22))){
var inst_25270 = (state_25348[(23)]);
var inst_25265 = (state_25348[(24)]);
var inst_25262 = (state_25348[(19)]);
var inst_25266 = (state_25348[(25)]);
var inst_25265__$1 = (state_25348[(2)]);
var inst_25266__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25265__$1);
var inst_25267 = (function (){var all_files = inst_25262;
var res_SINGLEQUOTE_ = inst_25265__$1;
var res = inst_25266__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25270,inst_25265,inst_25262,inst_25266,inst_25265__$1,inst_25266__$1,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24945_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24945_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25270,inst_25265,inst_25262,inst_25266,inst_25265__$1,inst_25266__$1,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25268 = cljs.core.filter.call(null,inst_25267,inst_25265__$1);
var inst_25269 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25270__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25269);
var inst_25271 = cljs.core.not_empty.call(null,inst_25270__$1);
var state_25348__$1 = (function (){var statearr_25376 = state_25348;
(statearr_25376[(23)] = inst_25270__$1);

(statearr_25376[(26)] = inst_25268);

(statearr_25376[(24)] = inst_25265__$1);

(statearr_25376[(25)] = inst_25266__$1);

return statearr_25376;
})();
if(cljs.core.truth_(inst_25271)){
var statearr_25377_25457 = state_25348__$1;
(statearr_25377_25457[(1)] = (23));

} else {
var statearr_25378_25458 = state_25348__$1;
(statearr_25378_25458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (36))){
var state_25348__$1 = state_25348;
var statearr_25379_25459 = state_25348__$1;
(statearr_25379_25459[(2)] = false);

(statearr_25379_25459[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (41))){
var inst_25323 = (state_25348[(20)]);
var inst_25327 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25328 = cljs.core.map.call(null,inst_25327,inst_25323);
var inst_25329 = cljs.core.pr_str.call(null,inst_25328);
var inst_25330 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25329)].join('');
var inst_25331 = figwheel.client.utils.log.call(null,inst_25330);
var state_25348__$1 = state_25348;
var statearr_25380_25460 = state_25348__$1;
(statearr_25380_25460[(2)] = inst_25331);

(statearr_25380_25460[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (43))){
var inst_25324 = (state_25348[(21)]);
var inst_25334 = (state_25348[(2)]);
var inst_25335 = cljs.core.not_empty.call(null,inst_25324);
var state_25348__$1 = (function (){var statearr_25381 = state_25348;
(statearr_25381[(27)] = inst_25334);

return statearr_25381;
})();
if(cljs.core.truth_(inst_25335)){
var statearr_25382_25461 = state_25348__$1;
(statearr_25382_25461[(1)] = (44));

} else {
var statearr_25383_25462 = state_25348__$1;
(statearr_25383_25462[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (29))){
var inst_25302 = (state_25348[(16)]);
var inst_25270 = (state_25348[(23)]);
var inst_25268 = (state_25348[(26)]);
var inst_25265 = (state_25348[(24)]);
var inst_25262 = (state_25348[(19)]);
var inst_25266 = (state_25348[(25)]);
var inst_25298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25301 = (function (){var all_files = inst_25262;
var res_SINGLEQUOTE_ = inst_25265;
var res = inst_25266;
var files_not_loaded = inst_25268;
var dependencies_that_loaded = inst_25270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25302,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25298,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25300){
var map__25384 = p__25300;
var map__25384__$1 = ((((!((map__25384 == null)))?((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var namespace = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25302,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25298,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25302__$1 = cljs.core.group_by.call(null,inst_25301,inst_25268);
var inst_25304 = (inst_25302__$1 == null);
var inst_25305 = cljs.core.not.call(null,inst_25304);
var state_25348__$1 = (function (){var statearr_25386 = state_25348;
(statearr_25386[(16)] = inst_25302__$1);

(statearr_25386[(28)] = inst_25298);

return statearr_25386;
})();
if(inst_25305){
var statearr_25387_25463 = state_25348__$1;
(statearr_25387_25463[(1)] = (32));

} else {
var statearr_25388_25464 = state_25348__$1;
(statearr_25388_25464[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (44))){
var inst_25324 = (state_25348[(21)]);
var inst_25337 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25324);
var inst_25338 = cljs.core.pr_str.call(null,inst_25337);
var inst_25339 = [cljs.core.str("not required: "),cljs.core.str(inst_25338)].join('');
var inst_25340 = figwheel.client.utils.log.call(null,inst_25339);
var state_25348__$1 = state_25348;
var statearr_25389_25465 = state_25348__$1;
(statearr_25389_25465[(2)] = inst_25340);

(statearr_25389_25465[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (6))){
var inst_25243 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25390_25466 = state_25348__$1;
(statearr_25390_25466[(2)] = inst_25243);

(statearr_25390_25466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (28))){
var inst_25268 = (state_25348[(26)]);
var inst_25295 = (state_25348[(2)]);
var inst_25296 = cljs.core.not_empty.call(null,inst_25268);
var state_25348__$1 = (function (){var statearr_25391 = state_25348;
(statearr_25391[(29)] = inst_25295);

return statearr_25391;
})();
if(cljs.core.truth_(inst_25296)){
var statearr_25392_25467 = state_25348__$1;
(statearr_25392_25467[(1)] = (29));

} else {
var statearr_25393_25468 = state_25348__$1;
(statearr_25393_25468[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (25))){
var inst_25266 = (state_25348[(25)]);
var inst_25282 = (state_25348[(2)]);
var inst_25283 = cljs.core.not_empty.call(null,inst_25266);
var state_25348__$1 = (function (){var statearr_25394 = state_25348;
(statearr_25394[(30)] = inst_25282);

return statearr_25394;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25395_25469 = state_25348__$1;
(statearr_25395_25469[(1)] = (26));

} else {
var statearr_25396_25470 = state_25348__$1;
(statearr_25396_25470[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (34))){
var inst_25317 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
if(cljs.core.truth_(inst_25317)){
var statearr_25397_25471 = state_25348__$1;
(statearr_25397_25471[(1)] = (38));

} else {
var statearr_25398_25472 = state_25348__$1;
(statearr_25398_25472[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (17))){
var state_25348__$1 = state_25348;
var statearr_25399_25473 = state_25348__$1;
(statearr_25399_25473[(2)] = recompile_dependents);

(statearr_25399_25473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (3))){
var state_25348__$1 = state_25348;
var statearr_25400_25474 = state_25348__$1;
(statearr_25400_25474[(2)] = null);

(statearr_25400_25474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (12))){
var inst_25239 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25401_25475 = state_25348__$1;
(statearr_25401_25475[(2)] = inst_25239);

(statearr_25401_25475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (2))){
var inst_25201 = (state_25348[(13)]);
var inst_25208 = cljs.core.seq.call(null,inst_25201);
var inst_25209 = inst_25208;
var inst_25210 = null;
var inst_25211 = (0);
var inst_25212 = (0);
var state_25348__$1 = (function (){var statearr_25402 = state_25348;
(statearr_25402[(7)] = inst_25210);

(statearr_25402[(8)] = inst_25211);

(statearr_25402[(9)] = inst_25209);

(statearr_25402[(10)] = inst_25212);

return statearr_25402;
})();
var statearr_25403_25476 = state_25348__$1;
(statearr_25403_25476[(2)] = null);

(statearr_25403_25476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (23))){
var inst_25270 = (state_25348[(23)]);
var inst_25268 = (state_25348[(26)]);
var inst_25265 = (state_25348[(24)]);
var inst_25262 = (state_25348[(19)]);
var inst_25266 = (state_25348[(25)]);
var inst_25273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25275 = (function (){var all_files = inst_25262;
var res_SINGLEQUOTE_ = inst_25265;
var res = inst_25266;
var files_not_loaded = inst_25268;
var dependencies_that_loaded = inst_25270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25273,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25274){
var map__25404 = p__25274;
var map__25404__$1 = ((((!((map__25404 == null)))?((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var request_url = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25273,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25276 = cljs.core.reverse.call(null,inst_25270);
var inst_25277 = cljs.core.map.call(null,inst_25275,inst_25276);
var inst_25278 = cljs.core.pr_str.call(null,inst_25277);
var inst_25279 = figwheel.client.utils.log.call(null,inst_25278);
var state_25348__$1 = (function (){var statearr_25406 = state_25348;
(statearr_25406[(31)] = inst_25273);

return statearr_25406;
})();
var statearr_25407_25477 = state_25348__$1;
(statearr_25407_25477[(2)] = inst_25279);

(statearr_25407_25477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (35))){
var state_25348__$1 = state_25348;
var statearr_25408_25478 = state_25348__$1;
(statearr_25408_25478[(2)] = true);

(statearr_25408_25478[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (19))){
var inst_25252 = (state_25348[(12)]);
var inst_25258 = figwheel.client.file_reloading.expand_files.call(null,inst_25252);
var state_25348__$1 = state_25348;
var statearr_25409_25479 = state_25348__$1;
(statearr_25409_25479[(2)] = inst_25258);

(statearr_25409_25479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (11))){
var state_25348__$1 = state_25348;
var statearr_25410_25480 = state_25348__$1;
(statearr_25410_25480[(2)] = null);

(statearr_25410_25480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (9))){
var inst_25241 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25411_25481 = state_25348__$1;
(statearr_25411_25481[(2)] = inst_25241);

(statearr_25411_25481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (5))){
var inst_25211 = (state_25348[(8)]);
var inst_25212 = (state_25348[(10)]);
var inst_25214 = (inst_25212 < inst_25211);
var inst_25215 = inst_25214;
var state_25348__$1 = state_25348;
if(cljs.core.truth_(inst_25215)){
var statearr_25412_25482 = state_25348__$1;
(statearr_25412_25482[(1)] = (7));

} else {
var statearr_25413_25483 = state_25348__$1;
(statearr_25413_25483[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (14))){
var inst_25222 = (state_25348[(22)]);
var inst_25231 = cljs.core.first.call(null,inst_25222);
var inst_25232 = figwheel.client.file_reloading.eval_body.call(null,inst_25231,opts);
var inst_25233 = cljs.core.next.call(null,inst_25222);
var inst_25209 = inst_25233;
var inst_25210 = null;
var inst_25211 = (0);
var inst_25212 = (0);
var state_25348__$1 = (function (){var statearr_25414 = state_25348;
(statearr_25414[(7)] = inst_25210);

(statearr_25414[(32)] = inst_25232);

(statearr_25414[(8)] = inst_25211);

(statearr_25414[(9)] = inst_25209);

(statearr_25414[(10)] = inst_25212);

return statearr_25414;
})();
var statearr_25415_25484 = state_25348__$1;
(statearr_25415_25484[(2)] = null);

(statearr_25415_25484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (45))){
var state_25348__$1 = state_25348;
var statearr_25416_25485 = state_25348__$1;
(statearr_25416_25485[(2)] = null);

(statearr_25416_25485[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (26))){
var inst_25270 = (state_25348[(23)]);
var inst_25268 = (state_25348[(26)]);
var inst_25265 = (state_25348[(24)]);
var inst_25262 = (state_25348[(19)]);
var inst_25266 = (state_25348[(25)]);
var inst_25285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25287 = (function (){var all_files = inst_25262;
var res_SINGLEQUOTE_ = inst_25265;
var res = inst_25266;
var files_not_loaded = inst_25268;
var dependencies_that_loaded = inst_25270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25285,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25286){
var map__25417 = p__25286;
var map__25417__$1 = ((((!((map__25417 == null)))?((((map__25417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25417):map__25417);
var namespace = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25285,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25288 = cljs.core.map.call(null,inst_25287,inst_25266);
var inst_25289 = cljs.core.pr_str.call(null,inst_25288);
var inst_25290 = figwheel.client.utils.log.call(null,inst_25289);
var inst_25291 = (function (){var all_files = inst_25262;
var res_SINGLEQUOTE_ = inst_25265;
var res = inst_25266;
var files_not_loaded = inst_25268;
var dependencies_that_loaded = inst_25270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25285,inst_25287,inst_25288,inst_25289,inst_25290,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25270,inst_25268,inst_25265,inst_25262,inst_25266,inst_25285,inst_25287,inst_25288,inst_25289,inst_25290,state_val_25349,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25292 = setTimeout(inst_25291,(10));
var state_25348__$1 = (function (){var statearr_25419 = state_25348;
(statearr_25419[(33)] = inst_25290);

(statearr_25419[(34)] = inst_25285);

return statearr_25419;
})();
var statearr_25420_25486 = state_25348__$1;
(statearr_25420_25486[(2)] = inst_25292);

(statearr_25420_25486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (16))){
var state_25348__$1 = state_25348;
var statearr_25421_25487 = state_25348__$1;
(statearr_25421_25487[(2)] = reload_dependents);

(statearr_25421_25487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (38))){
var inst_25302 = (state_25348[(16)]);
var inst_25319 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25302);
var state_25348__$1 = state_25348;
var statearr_25422_25488 = state_25348__$1;
(statearr_25422_25488[(2)] = inst_25319);

(statearr_25422_25488[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (30))){
var state_25348__$1 = state_25348;
var statearr_25423_25489 = state_25348__$1;
(statearr_25423_25489[(2)] = null);

(statearr_25423_25489[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (10))){
var inst_25222 = (state_25348[(22)]);
var inst_25224 = cljs.core.chunked_seq_QMARK_.call(null,inst_25222);
var state_25348__$1 = state_25348;
if(inst_25224){
var statearr_25424_25490 = state_25348__$1;
(statearr_25424_25490[(1)] = (13));

} else {
var statearr_25425_25491 = state_25348__$1;
(statearr_25425_25491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (18))){
var inst_25256 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
if(cljs.core.truth_(inst_25256)){
var statearr_25426_25492 = state_25348__$1;
(statearr_25426_25492[(1)] = (19));

} else {
var statearr_25427_25493 = state_25348__$1;
(statearr_25427_25493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (42))){
var state_25348__$1 = state_25348;
var statearr_25428_25494 = state_25348__$1;
(statearr_25428_25494[(2)] = null);

(statearr_25428_25494[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (37))){
var inst_25314 = (state_25348[(2)]);
var state_25348__$1 = state_25348;
var statearr_25429_25495 = state_25348__$1;
(statearr_25429_25495[(2)] = inst_25314);

(statearr_25429_25495[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25349 === (8))){
var inst_25209 = (state_25348[(9)]);
var inst_25222 = (state_25348[(22)]);
var inst_25222__$1 = cljs.core.seq.call(null,inst_25209);
var state_25348__$1 = (function (){var statearr_25430 = state_25348;
(statearr_25430[(22)] = inst_25222__$1);

return statearr_25430;
})();
if(inst_25222__$1){
var statearr_25431_25496 = state_25348__$1;
(statearr_25431_25496[(1)] = (10));

} else {
var statearr_25432_25497 = state_25348__$1;
(statearr_25432_25497[(1)] = (11));

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
});})(c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21499__auto__,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____0 = (function (){
var statearr_25436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25436[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__);

(statearr_25436[(1)] = (1));

return statearr_25436;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____1 = (function (state_25348){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_25348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e25437){if((e25437 instanceof Object)){
var ex__21503__auto__ = e25437;
var statearr_25438_25498 = state_25348;
(statearr_25438_25498[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25499 = state_25348;
state_25348 = G__25499;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__ = function(state_25348){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____1.call(this,state_25348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21613__auto__ = (function (){var statearr_25439 = f__21612__auto__.call(null);
(statearr_25439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_25439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__,map__25194,map__25194__$1,opts,before_jsload,on_jsload,reload_dependents,map__25195,map__25195__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21611__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25502,link){
var map__25505 = p__25502;
var map__25505__$1 = ((((!((map__25505 == null)))?((((map__25505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25505):map__25505);
var file = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25505,map__25505__$1,file){
return (function (p1__25500_SHARP_,p2__25501_SHARP_){
if(cljs.core._EQ_.call(null,p1__25500_SHARP_,p2__25501_SHARP_)){
return p1__25500_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25505,map__25505__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25511){
var map__25512 = p__25511;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var match_length = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25507_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25507_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25514 = [];
var len__17876__auto___25517 = arguments.length;
var i__17877__auto___25518 = (0);
while(true){
if((i__17877__auto___25518 < len__17876__auto___25517)){
args25514.push((arguments[i__17877__auto___25518]));

var G__25519 = (i__17877__auto___25518 + (1));
i__17877__auto___25518 = G__25519;
continue;
} else {
}
break;
}

var G__25516 = args25514.length;
switch (G__25516) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25514.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25521_SHARP_,p2__25522_SHARP_){
return cljs.core.assoc.call(null,p1__25521_SHARP_,cljs.core.get.call(null,p2__25522_SHARP_,key),p2__25522_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25523){
var map__25526 = p__25523;
var map__25526__$1 = ((((!((map__25526 == null)))?((((map__25526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25526):map__25526);
var f_data = map__25526__$1;
var file = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25528,files_msg){
var map__25535 = p__25528;
var map__25535__$1 = ((((!((map__25535 == null)))?((((map__25535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25535):map__25535);
var opts = map__25535__$1;
var on_cssload = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25537_25541 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25538_25542 = null;
var count__25539_25543 = (0);
var i__25540_25544 = (0);
while(true){
if((i__25540_25544 < count__25539_25543)){
var f_25545 = cljs.core._nth.call(null,chunk__25538_25542,i__25540_25544);
figwheel.client.file_reloading.reload_css_file.call(null,f_25545);

var G__25546 = seq__25537_25541;
var G__25547 = chunk__25538_25542;
var G__25548 = count__25539_25543;
var G__25549 = (i__25540_25544 + (1));
seq__25537_25541 = G__25546;
chunk__25538_25542 = G__25547;
count__25539_25543 = G__25548;
i__25540_25544 = G__25549;
continue;
} else {
var temp__4425__auto___25550 = cljs.core.seq.call(null,seq__25537_25541);
if(temp__4425__auto___25550){
var seq__25537_25551__$1 = temp__4425__auto___25550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25537_25551__$1)){
var c__17621__auto___25552 = cljs.core.chunk_first.call(null,seq__25537_25551__$1);
var G__25553 = cljs.core.chunk_rest.call(null,seq__25537_25551__$1);
var G__25554 = c__17621__auto___25552;
var G__25555 = cljs.core.count.call(null,c__17621__auto___25552);
var G__25556 = (0);
seq__25537_25541 = G__25553;
chunk__25538_25542 = G__25554;
count__25539_25543 = G__25555;
i__25540_25544 = G__25556;
continue;
} else {
var f_25557 = cljs.core.first.call(null,seq__25537_25551__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25557);

var G__25558 = cljs.core.next.call(null,seq__25537_25551__$1);
var G__25559 = null;
var G__25560 = (0);
var G__25561 = (0);
seq__25537_25541 = G__25558;
chunk__25538_25542 = G__25559;
count__25539_25543 = G__25560;
i__25540_25544 = G__25561;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25535,map__25535__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25535,map__25535__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map