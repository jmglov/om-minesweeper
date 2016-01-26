// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21656 = [];
var len__17876__auto___21662 = arguments.length;
var i__17877__auto___21663 = (0);
while(true){
if((i__17877__auto___21663 < len__17876__auto___21662)){
args21656.push((arguments[i__17877__auto___21663]));

var G__21664 = (i__17877__auto___21663 + (1));
i__17877__auto___21663 = G__21664;
continue;
} else {
}
break;
}

var G__21658 = args21656.length;
switch (G__21658) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21656.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21659 = (function (f,blockable,meta21660){
this.f = f;
this.blockable = blockable;
this.meta21660 = meta21660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21661,meta21660__$1){
var self__ = this;
var _21661__$1 = this;
return (new cljs.core.async.t_cljs$core$async21659(self__.f,self__.blockable,meta21660__$1));
});

cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21661){
var self__ = this;
var _21661__$1 = this;
return self__.meta21660;
});

cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21660","meta21660",-1643325035,null)], null);
});

cljs.core.async.t_cljs$core$async21659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21659";

cljs.core.async.t_cljs$core$async21659.cljs$lang$ctorPrWriter = (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async21659");
});

cljs.core.async.__GT_t_cljs$core$async21659 = (function cljs$core$async$__GT_t_cljs$core$async21659(f__$1,blockable__$1,meta21660){
return (new cljs.core.async.t_cljs$core$async21659(f__$1,blockable__$1,meta21660));
});

}

return (new cljs.core.async.t_cljs$core$async21659(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21668 = [];
var len__17876__auto___21671 = arguments.length;
var i__17877__auto___21672 = (0);
while(true){
if((i__17877__auto___21672 < len__17876__auto___21671)){
args21668.push((arguments[i__17877__auto___21672]));

var G__21673 = (i__17877__auto___21672 + (1));
i__17877__auto___21672 = G__21673;
continue;
} else {
}
break;
}

var G__21670 = args21668.length;
switch (G__21670) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21668.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21675 = [];
var len__17876__auto___21678 = arguments.length;
var i__17877__auto___21679 = (0);
while(true){
if((i__17877__auto___21679 < len__17876__auto___21678)){
args21675.push((arguments[i__17877__auto___21679]));

var G__21680 = (i__17877__auto___21679 + (1));
i__17877__auto___21679 = G__21680;
continue;
} else {
}
break;
}

var G__21677 = args21675.length;
switch (G__21677) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21675.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21682 = [];
var len__17876__auto___21685 = arguments.length;
var i__17877__auto___21686 = (0);
while(true){
if((i__17877__auto___21686 < len__17876__auto___21685)){
args21682.push((arguments[i__17877__auto___21686]));

var G__21687 = (i__17877__auto___21686 + (1));
i__17877__auto___21686 = G__21687;
continue;
} else {
}
break;
}

var G__21684 = args21682.length;
switch (G__21684) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21682.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21689 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21689);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21689,ret){
return (function (){
return fn1.call(null,val_21689);
});})(val_21689,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21690 = [];
var len__17876__auto___21693 = arguments.length;
var i__17877__auto___21694 = (0);
while(true){
if((i__17877__auto___21694 < len__17876__auto___21693)){
args21690.push((arguments[i__17877__auto___21694]));

var G__21695 = (i__17877__auto___21694 + (1));
i__17877__auto___21694 = G__21695;
continue;
} else {
}
break;
}

var G__21692 = args21690.length;
switch (G__21692) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21690.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17721__auto___21697 = n;
var x_21698 = (0);
while(true){
if((x_21698 < n__17721__auto___21697)){
(a[x_21698] = (0));

var G__21699 = (x_21698 + (1));
x_21698 = G__21699;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21700 = (i + (1));
i = G__21700;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21704 = (function (alt_flag,flag,meta21705){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21705 = meta21705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21706,meta21705__$1){
var self__ = this;
var _21706__$1 = this;
return (new cljs.core.async.t_cljs$core$async21704(self__.alt_flag,self__.flag,meta21705__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21706){
var self__ = this;
var _21706__$1 = this;
return self__.meta21705;
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21705","meta21705",1727042426,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21704";

cljs.core.async.t_cljs$core$async21704.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async21704");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21704 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21704(alt_flag__$1,flag__$1,meta21705){
return (new cljs.core.async.t_cljs$core$async21704(alt_flag__$1,flag__$1,meta21705));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21704(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21710 = (function (alt_handler,flag,cb,meta21711){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21711 = meta21711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21712,meta21711__$1){
var self__ = this;
var _21712__$1 = this;
return (new cljs.core.async.t_cljs$core$async21710(self__.alt_handler,self__.flag,self__.cb,meta21711__$1));
});

cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21712){
var self__ = this;
var _21712__$1 = this;
return self__.meta21711;
});

cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21711","meta21711",-914227888,null)], null);
});

cljs.core.async.t_cljs$core$async21710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21710";

cljs.core.async.t_cljs$core$async21710.cljs$lang$ctorPrWriter = (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async21710");
});

cljs.core.async.__GT_t_cljs$core$async21710 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21710(alt_handler__$1,flag__$1,cb__$1,meta21711){
return (new cljs.core.async.t_cljs$core$async21710(alt_handler__$1,flag__$1,cb__$1,meta21711));
});

}

return (new cljs.core.async.t_cljs$core$async21710(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21713_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21713_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21714_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21714_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16818__auto__ = wport;
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21715 = (i + (1));
i = G__21715;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16818__auto__ = ret;
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16806__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16806__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16806__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17883__auto__ = [];
var len__17876__auto___21721 = arguments.length;
var i__17877__auto___21722 = (0);
while(true){
if((i__17877__auto___21722 < len__17876__auto___21721)){
args__17883__auto__.push((arguments[i__17877__auto___21722]));

var G__21723 = (i__17877__auto___21722 + (1));
i__17877__auto___21722 = G__21723;
continue;
} else {
}
break;
}

var argseq__17884__auto__ = ((((1) < args__17883__auto__.length))?(new cljs.core.IndexedSeq(args__17883__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17884__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21718){
var map__21719 = p__21718;
var map__21719__$1 = ((((!((map__21719 == null)))?((((map__21719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21719):map__21719);
var opts = map__21719__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21716){
var G__21717 = cljs.core.first.call(null,seq21716);
var seq21716__$1 = cljs.core.next.call(null,seq21716);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21717,seq21716__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21724 = [];
var len__17876__auto___21774 = arguments.length;
var i__17877__auto___21775 = (0);
while(true){
if((i__17877__auto___21775 < len__17876__auto___21774)){
args21724.push((arguments[i__17877__auto___21775]));

var G__21776 = (i__17877__auto___21775 + (1));
i__17877__auto___21775 = G__21776;
continue;
} else {
}
break;
}

var G__21726 = args21724.length;
switch (G__21726) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21724.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21611__auto___21778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___21778){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___21778){
return (function (state_21750){
var state_val_21751 = (state_21750[(1)]);
if((state_val_21751 === (7))){
var inst_21746 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21752_21779 = state_21750__$1;
(statearr_21752_21779[(2)] = inst_21746);

(statearr_21752_21779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (1))){
var state_21750__$1 = state_21750;
var statearr_21753_21780 = state_21750__$1;
(statearr_21753_21780[(2)] = null);

(statearr_21753_21780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (4))){
var inst_21729 = (state_21750[(7)]);
var inst_21729__$1 = (state_21750[(2)]);
var inst_21730 = (inst_21729__$1 == null);
var state_21750__$1 = (function (){var statearr_21754 = state_21750;
(statearr_21754[(7)] = inst_21729__$1);

return statearr_21754;
})();
if(cljs.core.truth_(inst_21730)){
var statearr_21755_21781 = state_21750__$1;
(statearr_21755_21781[(1)] = (5));

} else {
var statearr_21756_21782 = state_21750__$1;
(statearr_21756_21782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (13))){
var state_21750__$1 = state_21750;
var statearr_21757_21783 = state_21750__$1;
(statearr_21757_21783[(2)] = null);

(statearr_21757_21783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (6))){
var inst_21729 = (state_21750[(7)]);
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21750__$1,(11),to,inst_21729);
} else {
if((state_val_21751 === (3))){
var inst_21748 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21750__$1,inst_21748);
} else {
if((state_val_21751 === (12))){
var state_21750__$1 = state_21750;
var statearr_21758_21784 = state_21750__$1;
(statearr_21758_21784[(2)] = null);

(statearr_21758_21784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (2))){
var state_21750__$1 = state_21750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21750__$1,(4),from);
} else {
if((state_val_21751 === (11))){
var inst_21739 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
if(cljs.core.truth_(inst_21739)){
var statearr_21759_21785 = state_21750__$1;
(statearr_21759_21785[(1)] = (12));

} else {
var statearr_21760_21786 = state_21750__$1;
(statearr_21760_21786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (9))){
var state_21750__$1 = state_21750;
var statearr_21761_21787 = state_21750__$1;
(statearr_21761_21787[(2)] = null);

(statearr_21761_21787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (5))){
var state_21750__$1 = state_21750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21762_21788 = state_21750__$1;
(statearr_21762_21788[(1)] = (8));

} else {
var statearr_21763_21789 = state_21750__$1;
(statearr_21763_21789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (14))){
var inst_21744 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21764_21790 = state_21750__$1;
(statearr_21764_21790[(2)] = inst_21744);

(statearr_21764_21790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (10))){
var inst_21736 = (state_21750[(2)]);
var state_21750__$1 = state_21750;
var statearr_21765_21791 = state_21750__$1;
(statearr_21765_21791[(2)] = inst_21736);

(statearr_21765_21791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21751 === (8))){
var inst_21733 = cljs.core.async.close_BANG_.call(null,to);
var state_21750__$1 = state_21750;
var statearr_21766_21792 = state_21750__$1;
(statearr_21766_21792[(2)] = inst_21733);

(statearr_21766_21792[(1)] = (10));


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
});})(c__21611__auto___21778))
;
return ((function (switch__21499__auto__,c__21611__auto___21778){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_21770 = [null,null,null,null,null,null,null,null];
(statearr_21770[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_21770[(1)] = (1));

return statearr_21770;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_21750){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_21750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e21771){if((e21771 instanceof Object)){
var ex__21503__auto__ = e21771;
var statearr_21772_21793 = state_21750;
(statearr_21772_21793[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21794 = state_21750;
state_21750 = G__21794;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_21750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_21750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___21778))
})();
var state__21613__auto__ = (function (){var statearr_21773 = f__21612__auto__.call(null);
(statearr_21773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___21778);

return statearr_21773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___21778))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21978){
var vec__21979 = p__21978;
var v = cljs.core.nth.call(null,vec__21979,(0),null);
var p = cljs.core.nth.call(null,vec__21979,(1),null);
var job = vec__21979;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21611__auto___22161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results){
return (function (state_21984){
var state_val_21985 = (state_21984[(1)]);
if((state_val_21985 === (1))){
var state_21984__$1 = state_21984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21984__$1,(2),res,v);
} else {
if((state_val_21985 === (2))){
var inst_21981 = (state_21984[(2)]);
var inst_21982 = cljs.core.async.close_BANG_.call(null,res);
var state_21984__$1 = (function (){var statearr_21986 = state_21984;
(statearr_21986[(7)] = inst_21981);

return statearr_21986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21984__$1,inst_21982);
} else {
return null;
}
}
});})(c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results))
;
return ((function (switch__21499__auto__,c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_21990 = [null,null,null,null,null,null,null,null];
(statearr_21990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__);

(statearr_21990[(1)] = (1));

return statearr_21990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1 = (function (state_21984){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_21984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e21991){if((e21991 instanceof Object)){
var ex__21503__auto__ = e21991;
var statearr_21992_22162 = state_21984;
(statearr_21992_22162[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22163 = state_21984;
state_21984 = G__22163;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = function(state_21984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1.call(this,state_21984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results))
})();
var state__21613__auto__ = (function (){var statearr_21993 = f__21612__auto__.call(null);
(statearr_21993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22161);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___22161,res,vec__21979,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21994){
var vec__21995 = p__21994;
var v = cljs.core.nth.call(null,vec__21995,(0),null);
var p = cljs.core.nth.call(null,vec__21995,(1),null);
var job = vec__21995;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17721__auto___22164 = n;
var __22165 = (0);
while(true){
if((__22165 < n__17721__auto___22164)){
var G__21996_22166 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21996_22166) {
case "compute":
var c__21611__auto___22168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22165,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (__22165,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function (state_22009){
var state_val_22010 = (state_22009[(1)]);
if((state_val_22010 === (1))){
var state_22009__$1 = state_22009;
var statearr_22011_22169 = state_22009__$1;
(statearr_22011_22169[(2)] = null);

(statearr_22011_22169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (2))){
var state_22009__$1 = state_22009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22009__$1,(4),jobs);
} else {
if((state_val_22010 === (3))){
var inst_22007 = (state_22009[(2)]);
var state_22009__$1 = state_22009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22009__$1,inst_22007);
} else {
if((state_val_22010 === (4))){
var inst_21999 = (state_22009[(2)]);
var inst_22000 = process.call(null,inst_21999);
var state_22009__$1 = state_22009;
if(cljs.core.truth_(inst_22000)){
var statearr_22012_22170 = state_22009__$1;
(statearr_22012_22170[(1)] = (5));

} else {
var statearr_22013_22171 = state_22009__$1;
(statearr_22013_22171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (5))){
var state_22009__$1 = state_22009;
var statearr_22014_22172 = state_22009__$1;
(statearr_22014_22172[(2)] = null);

(statearr_22014_22172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (6))){
var state_22009__$1 = state_22009;
var statearr_22015_22173 = state_22009__$1;
(statearr_22015_22173[(2)] = null);

(statearr_22015_22173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (7))){
var inst_22005 = (state_22009[(2)]);
var state_22009__$1 = state_22009;
var statearr_22016_22174 = state_22009__$1;
(statearr_22016_22174[(2)] = inst_22005);

(statearr_22016_22174[(1)] = (3));


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
});})(__22165,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
;
return ((function (__22165,switch__21499__auto__,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_22020 = [null,null,null,null,null,null,null];
(statearr_22020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__);

(statearr_22020[(1)] = (1));

return statearr_22020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1 = (function (state_22009){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22021){if((e22021 instanceof Object)){
var ex__21503__auto__ = e22021;
var statearr_22022_22175 = state_22009;
(statearr_22022_22175[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22176 = state_22009;
state_22009 = G__22176;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = function(state_22009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1.call(this,state_22009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__;
})()
;})(__22165,switch__21499__auto__,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
})();
var state__21613__auto__ = (function (){var statearr_22023 = f__21612__auto__.call(null);
(statearr_22023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22168);

return statearr_22023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(__22165,c__21611__auto___22168,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
);


break;
case "async":
var c__21611__auto___22177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22165,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (__22165,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function (state_22036){
var state_val_22037 = (state_22036[(1)]);
if((state_val_22037 === (1))){
var state_22036__$1 = state_22036;
var statearr_22038_22178 = state_22036__$1;
(statearr_22038_22178[(2)] = null);

(statearr_22038_22178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (2))){
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22036__$1,(4),jobs);
} else {
if((state_val_22037 === (3))){
var inst_22034 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22036__$1,inst_22034);
} else {
if((state_val_22037 === (4))){
var inst_22026 = (state_22036[(2)]);
var inst_22027 = async.call(null,inst_22026);
var state_22036__$1 = state_22036;
if(cljs.core.truth_(inst_22027)){
var statearr_22039_22179 = state_22036__$1;
(statearr_22039_22179[(1)] = (5));

} else {
var statearr_22040_22180 = state_22036__$1;
(statearr_22040_22180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (5))){
var state_22036__$1 = state_22036;
var statearr_22041_22181 = state_22036__$1;
(statearr_22041_22181[(2)] = null);

(statearr_22041_22181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (6))){
var state_22036__$1 = state_22036;
var statearr_22042_22182 = state_22036__$1;
(statearr_22042_22182[(2)] = null);

(statearr_22042_22182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (7))){
var inst_22032 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
var statearr_22043_22183 = state_22036__$1;
(statearr_22043_22183[(2)] = inst_22032);

(statearr_22043_22183[(1)] = (3));


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
});})(__22165,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
;
return ((function (__22165,switch__21499__auto__,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_22047 = [null,null,null,null,null,null,null];
(statearr_22047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__);

(statearr_22047[(1)] = (1));

return statearr_22047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1 = (function (state_22036){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22048){if((e22048 instanceof Object)){
var ex__21503__auto__ = e22048;
var statearr_22049_22184 = state_22036;
(statearr_22049_22184[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22185 = state_22036;
state_22036 = G__22185;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = function(state_22036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1.call(this,state_22036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__;
})()
;})(__22165,switch__21499__auto__,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
})();
var state__21613__auto__ = (function (){var statearr_22050 = f__21612__auto__.call(null);
(statearr_22050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22177);

return statearr_22050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(__22165,c__21611__auto___22177,G__21996_22166,n__17721__auto___22164,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22186 = (__22165 + (1));
__22165 = G__22186;
continue;
} else {
}
break;
}

var c__21611__auto___22187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___22187,jobs,results,process,async){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___22187,jobs,results,process,async){
return (function (state_22072){
var state_val_22073 = (state_22072[(1)]);
if((state_val_22073 === (1))){
var state_22072__$1 = state_22072;
var statearr_22074_22188 = state_22072__$1;
(statearr_22074_22188[(2)] = null);

(statearr_22074_22188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (2))){
var state_22072__$1 = state_22072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22072__$1,(4),from);
} else {
if((state_val_22073 === (3))){
var inst_22070 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22072__$1,inst_22070);
} else {
if((state_val_22073 === (4))){
var inst_22053 = (state_22072[(7)]);
var inst_22053__$1 = (state_22072[(2)]);
var inst_22054 = (inst_22053__$1 == null);
var state_22072__$1 = (function (){var statearr_22075 = state_22072;
(statearr_22075[(7)] = inst_22053__$1);

return statearr_22075;
})();
if(cljs.core.truth_(inst_22054)){
var statearr_22076_22189 = state_22072__$1;
(statearr_22076_22189[(1)] = (5));

} else {
var statearr_22077_22190 = state_22072__$1;
(statearr_22077_22190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (5))){
var inst_22056 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22072__$1 = state_22072;
var statearr_22078_22191 = state_22072__$1;
(statearr_22078_22191[(2)] = inst_22056);

(statearr_22078_22191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (6))){
var inst_22053 = (state_22072[(7)]);
var inst_22058 = (state_22072[(8)]);
var inst_22058__$1 = cljs.core.async.chan.call(null,(1));
var inst_22059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22060 = [inst_22053,inst_22058__$1];
var inst_22061 = (new cljs.core.PersistentVector(null,2,(5),inst_22059,inst_22060,null));
var state_22072__$1 = (function (){var statearr_22079 = state_22072;
(statearr_22079[(8)] = inst_22058__$1);

return statearr_22079;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22072__$1,(8),jobs,inst_22061);
} else {
if((state_val_22073 === (7))){
var inst_22068 = (state_22072[(2)]);
var state_22072__$1 = state_22072;
var statearr_22080_22192 = state_22072__$1;
(statearr_22080_22192[(2)] = inst_22068);

(statearr_22080_22192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22073 === (8))){
var inst_22058 = (state_22072[(8)]);
var inst_22063 = (state_22072[(2)]);
var state_22072__$1 = (function (){var statearr_22081 = state_22072;
(statearr_22081[(9)] = inst_22063);

return statearr_22081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22072__$1,(9),results,inst_22058);
} else {
if((state_val_22073 === (9))){
var inst_22065 = (state_22072[(2)]);
var state_22072__$1 = (function (){var statearr_22082 = state_22072;
(statearr_22082[(10)] = inst_22065);

return statearr_22082;
})();
var statearr_22083_22193 = state_22072__$1;
(statearr_22083_22193[(2)] = null);

(statearr_22083_22193[(1)] = (2));


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
});})(c__21611__auto___22187,jobs,results,process,async))
;
return ((function (switch__21499__auto__,c__21611__auto___22187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_22087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__);

(statearr_22087[(1)] = (1));

return statearr_22087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1 = (function (state_22072){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22088){if((e22088 instanceof Object)){
var ex__21503__auto__ = e22088;
var statearr_22089_22194 = state_22072;
(statearr_22089_22194[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22195 = state_22072;
state_22072 = G__22195;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = function(state_22072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1.call(this,state_22072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___22187,jobs,results,process,async))
})();
var state__21613__auto__ = (function (){var statearr_22090 = f__21612__auto__.call(null);
(statearr_22090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22187);

return statearr_22090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___22187,jobs,results,process,async))
);


var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__,jobs,results,process,async){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__,jobs,results,process,async){
return (function (state_22128){
var state_val_22129 = (state_22128[(1)]);
if((state_val_22129 === (7))){
var inst_22124 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22130_22196 = state_22128__$1;
(statearr_22130_22196[(2)] = inst_22124);

(statearr_22130_22196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (20))){
var state_22128__$1 = state_22128;
var statearr_22131_22197 = state_22128__$1;
(statearr_22131_22197[(2)] = null);

(statearr_22131_22197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (1))){
var state_22128__$1 = state_22128;
var statearr_22132_22198 = state_22128__$1;
(statearr_22132_22198[(2)] = null);

(statearr_22132_22198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (4))){
var inst_22093 = (state_22128[(7)]);
var inst_22093__$1 = (state_22128[(2)]);
var inst_22094 = (inst_22093__$1 == null);
var state_22128__$1 = (function (){var statearr_22133 = state_22128;
(statearr_22133[(7)] = inst_22093__$1);

return statearr_22133;
})();
if(cljs.core.truth_(inst_22094)){
var statearr_22134_22199 = state_22128__$1;
(statearr_22134_22199[(1)] = (5));

} else {
var statearr_22135_22200 = state_22128__$1;
(statearr_22135_22200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (15))){
var inst_22106 = (state_22128[(8)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,(18),to,inst_22106);
} else {
if((state_val_22129 === (21))){
var inst_22119 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22136_22201 = state_22128__$1;
(statearr_22136_22201[(2)] = inst_22119);

(statearr_22136_22201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (13))){
var inst_22121 = (state_22128[(2)]);
var state_22128__$1 = (function (){var statearr_22137 = state_22128;
(statearr_22137[(9)] = inst_22121);

return statearr_22137;
})();
var statearr_22138_22202 = state_22128__$1;
(statearr_22138_22202[(2)] = null);

(statearr_22138_22202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (6))){
var inst_22093 = (state_22128[(7)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(11),inst_22093);
} else {
if((state_val_22129 === (17))){
var inst_22114 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
if(cljs.core.truth_(inst_22114)){
var statearr_22139_22203 = state_22128__$1;
(statearr_22139_22203[(1)] = (19));

} else {
var statearr_22140_22204 = state_22128__$1;
(statearr_22140_22204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (3))){
var inst_22126 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else {
if((state_val_22129 === (12))){
var inst_22103 = (state_22128[(10)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(14),inst_22103);
} else {
if((state_val_22129 === (2))){
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(4),results);
} else {
if((state_val_22129 === (19))){
var state_22128__$1 = state_22128;
var statearr_22141_22205 = state_22128__$1;
(statearr_22141_22205[(2)] = null);

(statearr_22141_22205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (11))){
var inst_22103 = (state_22128[(2)]);
var state_22128__$1 = (function (){var statearr_22142 = state_22128;
(statearr_22142[(10)] = inst_22103);

return statearr_22142;
})();
var statearr_22143_22206 = state_22128__$1;
(statearr_22143_22206[(2)] = null);

(statearr_22143_22206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (9))){
var state_22128__$1 = state_22128;
var statearr_22144_22207 = state_22128__$1;
(statearr_22144_22207[(2)] = null);

(statearr_22144_22207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (5))){
var state_22128__$1 = state_22128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22145_22208 = state_22128__$1;
(statearr_22145_22208[(1)] = (8));

} else {
var statearr_22146_22209 = state_22128__$1;
(statearr_22146_22209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (14))){
var inst_22108 = (state_22128[(11)]);
var inst_22106 = (state_22128[(8)]);
var inst_22106__$1 = (state_22128[(2)]);
var inst_22107 = (inst_22106__$1 == null);
var inst_22108__$1 = cljs.core.not.call(null,inst_22107);
var state_22128__$1 = (function (){var statearr_22147 = state_22128;
(statearr_22147[(11)] = inst_22108__$1);

(statearr_22147[(8)] = inst_22106__$1);

return statearr_22147;
})();
if(inst_22108__$1){
var statearr_22148_22210 = state_22128__$1;
(statearr_22148_22210[(1)] = (15));

} else {
var statearr_22149_22211 = state_22128__$1;
(statearr_22149_22211[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (16))){
var inst_22108 = (state_22128[(11)]);
var state_22128__$1 = state_22128;
var statearr_22150_22212 = state_22128__$1;
(statearr_22150_22212[(2)] = inst_22108);

(statearr_22150_22212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (10))){
var inst_22100 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22151_22213 = state_22128__$1;
(statearr_22151_22213[(2)] = inst_22100);

(statearr_22151_22213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (18))){
var inst_22111 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22152_22214 = state_22128__$1;
(statearr_22152_22214[(2)] = inst_22111);

(statearr_22152_22214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (8))){
var inst_22097 = cljs.core.async.close_BANG_.call(null,to);
var state_22128__$1 = state_22128;
var statearr_22153_22215 = state_22128__$1;
(statearr_22153_22215[(2)] = inst_22097);

(statearr_22153_22215[(1)] = (10));


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
});})(c__21611__auto__,jobs,results,process,async))
;
return ((function (switch__21499__auto__,c__21611__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_22157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__);

(statearr_22157[(1)] = (1));

return statearr_22157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1 = (function (state_22128){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22158){if((e22158 instanceof Object)){
var ex__21503__auto__ = e22158;
var statearr_22159_22216 = state_22128;
(statearr_22159_22216[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22217 = state_22128;
state_22128 = G__22217;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__,jobs,results,process,async))
})();
var state__21613__auto__ = (function (){var statearr_22160 = f__21612__auto__.call(null);
(statearr_22160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_22160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__,jobs,results,process,async))
);

return c__21611__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22218 = [];
var len__17876__auto___22221 = arguments.length;
var i__17877__auto___22222 = (0);
while(true){
if((i__17877__auto___22222 < len__17876__auto___22221)){
args22218.push((arguments[i__17877__auto___22222]));

var G__22223 = (i__17877__auto___22222 + (1));
i__17877__auto___22222 = G__22223;
continue;
} else {
}
break;
}

var G__22220 = args22218.length;
switch (G__22220) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22218.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22225 = [];
var len__17876__auto___22228 = arguments.length;
var i__17877__auto___22229 = (0);
while(true){
if((i__17877__auto___22229 < len__17876__auto___22228)){
args22225.push((arguments[i__17877__auto___22229]));

var G__22230 = (i__17877__auto___22229 + (1));
i__17877__auto___22229 = G__22230;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22225.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22232 = [];
var len__17876__auto___22285 = arguments.length;
var i__17877__auto___22286 = (0);
while(true){
if((i__17877__auto___22286 < len__17876__auto___22285)){
args22232.push((arguments[i__17877__auto___22286]));

var G__22287 = (i__17877__auto___22286 + (1));
i__17877__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var G__22234 = args22232.length;
switch (G__22234) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22232.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21611__auto___22289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___22289,tc,fc){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___22289,tc,fc){
return (function (state_22260){
var state_val_22261 = (state_22260[(1)]);
if((state_val_22261 === (7))){
var inst_22256 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22262_22290 = state_22260__$1;
(statearr_22262_22290[(2)] = inst_22256);

(statearr_22262_22290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (1))){
var state_22260__$1 = state_22260;
var statearr_22263_22291 = state_22260__$1;
(statearr_22263_22291[(2)] = null);

(statearr_22263_22291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (4))){
var inst_22237 = (state_22260[(7)]);
var inst_22237__$1 = (state_22260[(2)]);
var inst_22238 = (inst_22237__$1 == null);
var state_22260__$1 = (function (){var statearr_22264 = state_22260;
(statearr_22264[(7)] = inst_22237__$1);

return statearr_22264;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22265_22292 = state_22260__$1;
(statearr_22265_22292[(1)] = (5));

} else {
var statearr_22266_22293 = state_22260__$1;
(statearr_22266_22293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (13))){
var state_22260__$1 = state_22260;
var statearr_22267_22294 = state_22260__$1;
(statearr_22267_22294[(2)] = null);

(statearr_22267_22294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (6))){
var inst_22237 = (state_22260[(7)]);
var inst_22243 = p.call(null,inst_22237);
var state_22260__$1 = state_22260;
if(cljs.core.truth_(inst_22243)){
var statearr_22268_22295 = state_22260__$1;
(statearr_22268_22295[(1)] = (9));

} else {
var statearr_22269_22296 = state_22260__$1;
(statearr_22269_22296[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (3))){
var inst_22258 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22260__$1,inst_22258);
} else {
if((state_val_22261 === (12))){
var state_22260__$1 = state_22260;
var statearr_22270_22297 = state_22260__$1;
(statearr_22270_22297[(2)] = null);

(statearr_22270_22297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (2))){
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22260__$1,(4),ch);
} else {
if((state_val_22261 === (11))){
var inst_22237 = (state_22260[(7)]);
var inst_22247 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22260__$1,(8),inst_22247,inst_22237);
} else {
if((state_val_22261 === (9))){
var state_22260__$1 = state_22260;
var statearr_22271_22298 = state_22260__$1;
(statearr_22271_22298[(2)] = tc);

(statearr_22271_22298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (5))){
var inst_22240 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22241 = cljs.core.async.close_BANG_.call(null,fc);
var state_22260__$1 = (function (){var statearr_22272 = state_22260;
(statearr_22272[(8)] = inst_22240);

return statearr_22272;
})();
var statearr_22273_22299 = state_22260__$1;
(statearr_22273_22299[(2)] = inst_22241);

(statearr_22273_22299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (14))){
var inst_22254 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
var statearr_22274_22300 = state_22260__$1;
(statearr_22274_22300[(2)] = inst_22254);

(statearr_22274_22300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (10))){
var state_22260__$1 = state_22260;
var statearr_22275_22301 = state_22260__$1;
(statearr_22275_22301[(2)] = fc);

(statearr_22275_22301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22261 === (8))){
var inst_22249 = (state_22260[(2)]);
var state_22260__$1 = state_22260;
if(cljs.core.truth_(inst_22249)){
var statearr_22276_22302 = state_22260__$1;
(statearr_22276_22302[(1)] = (12));

} else {
var statearr_22277_22303 = state_22260__$1;
(statearr_22277_22303[(1)] = (13));

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
});})(c__21611__auto___22289,tc,fc))
;
return ((function (switch__21499__auto__,c__21611__auto___22289,tc,fc){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_22281 = [null,null,null,null,null,null,null,null,null];
(statearr_22281[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_22281[(1)] = (1));

return statearr_22281;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_22260){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22282){if((e22282 instanceof Object)){
var ex__21503__auto__ = e22282;
var statearr_22283_22304 = state_22260;
(statearr_22283_22304[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22305 = state_22260;
state_22260 = G__22305;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_22260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_22260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___22289,tc,fc))
})();
var state__21613__auto__ = (function (){var statearr_22284 = f__21612__auto__.call(null);
(statearr_22284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22289);

return statearr_22284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___22289,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__){
return (function (state_22369){
var state_val_22370 = (state_22369[(1)]);
if((state_val_22370 === (7))){
var inst_22365 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22371_22392 = state_22369__$1;
(statearr_22371_22392[(2)] = inst_22365);

(statearr_22371_22392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (1))){
var inst_22349 = init;
var state_22369__$1 = (function (){var statearr_22372 = state_22369;
(statearr_22372[(7)] = inst_22349);

return statearr_22372;
})();
var statearr_22373_22393 = state_22369__$1;
(statearr_22373_22393[(2)] = null);

(statearr_22373_22393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (4))){
var inst_22352 = (state_22369[(8)]);
var inst_22352__$1 = (state_22369[(2)]);
var inst_22353 = (inst_22352__$1 == null);
var state_22369__$1 = (function (){var statearr_22374 = state_22369;
(statearr_22374[(8)] = inst_22352__$1);

return statearr_22374;
})();
if(cljs.core.truth_(inst_22353)){
var statearr_22375_22394 = state_22369__$1;
(statearr_22375_22394[(1)] = (5));

} else {
var statearr_22376_22395 = state_22369__$1;
(statearr_22376_22395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (6))){
var inst_22356 = (state_22369[(9)]);
var inst_22349 = (state_22369[(7)]);
var inst_22352 = (state_22369[(8)]);
var inst_22356__$1 = f.call(null,inst_22349,inst_22352);
var inst_22357 = cljs.core.reduced_QMARK_.call(null,inst_22356__$1);
var state_22369__$1 = (function (){var statearr_22377 = state_22369;
(statearr_22377[(9)] = inst_22356__$1);

return statearr_22377;
})();
if(inst_22357){
var statearr_22378_22396 = state_22369__$1;
(statearr_22378_22396[(1)] = (8));

} else {
var statearr_22379_22397 = state_22369__$1;
(statearr_22379_22397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (3))){
var inst_22367 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22369__$1,inst_22367);
} else {
if((state_val_22370 === (2))){
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22369__$1,(4),ch);
} else {
if((state_val_22370 === (9))){
var inst_22356 = (state_22369[(9)]);
var inst_22349 = inst_22356;
var state_22369__$1 = (function (){var statearr_22380 = state_22369;
(statearr_22380[(7)] = inst_22349);

return statearr_22380;
})();
var statearr_22381_22398 = state_22369__$1;
(statearr_22381_22398[(2)] = null);

(statearr_22381_22398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (5))){
var inst_22349 = (state_22369[(7)]);
var state_22369__$1 = state_22369;
var statearr_22382_22399 = state_22369__$1;
(statearr_22382_22399[(2)] = inst_22349);

(statearr_22382_22399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (10))){
var inst_22363 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22383_22400 = state_22369__$1;
(statearr_22383_22400[(2)] = inst_22363);

(statearr_22383_22400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (8))){
var inst_22356 = (state_22369[(9)]);
var inst_22359 = cljs.core.deref.call(null,inst_22356);
var state_22369__$1 = state_22369;
var statearr_22384_22401 = state_22369__$1;
(statearr_22384_22401[(2)] = inst_22359);

(statearr_22384_22401[(1)] = (10));


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
});})(c__21611__auto__))
;
return ((function (switch__21499__auto__,c__21611__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21500__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21500__auto____0 = (function (){
var statearr_22388 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22388[(0)] = cljs$core$async$reduce_$_state_machine__21500__auto__);

(statearr_22388[(1)] = (1));

return statearr_22388;
});
var cljs$core$async$reduce_$_state_machine__21500__auto____1 = (function (state_22369){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22389){if((e22389 instanceof Object)){
var ex__21503__auto__ = e22389;
var statearr_22390_22402 = state_22369;
(statearr_22390_22402[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22403 = state_22369;
state_22369 = G__22403;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21500__auto__ = function(state_22369){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21500__auto____1.call(this,state_22369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21500__auto____0;
cljs$core$async$reduce_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21500__auto____1;
return cljs$core$async$reduce_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__))
})();
var state__21613__auto__ = (function (){var statearr_22391 = f__21612__auto__.call(null);
(statearr_22391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__))
);

return c__21611__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22404 = [];
var len__17876__auto___22456 = arguments.length;
var i__17877__auto___22457 = (0);
while(true){
if((i__17877__auto___22457 < len__17876__auto___22456)){
args22404.push((arguments[i__17877__auto___22457]));

var G__22458 = (i__17877__auto___22457 + (1));
i__17877__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var G__22406 = args22404.length;
switch (G__22406) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22404.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__){
return (function (state_22431){
var state_val_22432 = (state_22431[(1)]);
if((state_val_22432 === (7))){
var inst_22413 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22433_22460 = state_22431__$1;
(statearr_22433_22460[(2)] = inst_22413);

(statearr_22433_22460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (1))){
var inst_22407 = cljs.core.seq.call(null,coll);
var inst_22408 = inst_22407;
var state_22431__$1 = (function (){var statearr_22434 = state_22431;
(statearr_22434[(7)] = inst_22408);

return statearr_22434;
})();
var statearr_22435_22461 = state_22431__$1;
(statearr_22435_22461[(2)] = null);

(statearr_22435_22461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (4))){
var inst_22408 = (state_22431[(7)]);
var inst_22411 = cljs.core.first.call(null,inst_22408);
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(7),ch,inst_22411);
} else {
if((state_val_22432 === (13))){
var inst_22425 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22436_22462 = state_22431__$1;
(statearr_22436_22462[(2)] = inst_22425);

(statearr_22436_22462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (6))){
var inst_22416 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
if(cljs.core.truth_(inst_22416)){
var statearr_22437_22463 = state_22431__$1;
(statearr_22437_22463[(1)] = (8));

} else {
var statearr_22438_22464 = state_22431__$1;
(statearr_22438_22464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (3))){
var inst_22429 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22431__$1,inst_22429);
} else {
if((state_val_22432 === (12))){
var state_22431__$1 = state_22431;
var statearr_22439_22465 = state_22431__$1;
(statearr_22439_22465[(2)] = null);

(statearr_22439_22465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (2))){
var inst_22408 = (state_22431[(7)]);
var state_22431__$1 = state_22431;
if(cljs.core.truth_(inst_22408)){
var statearr_22440_22466 = state_22431__$1;
(statearr_22440_22466[(1)] = (4));

} else {
var statearr_22441_22467 = state_22431__$1;
(statearr_22441_22467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (11))){
var inst_22422 = cljs.core.async.close_BANG_.call(null,ch);
var state_22431__$1 = state_22431;
var statearr_22442_22468 = state_22431__$1;
(statearr_22442_22468[(2)] = inst_22422);

(statearr_22442_22468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (9))){
var state_22431__$1 = state_22431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22443_22469 = state_22431__$1;
(statearr_22443_22469[(1)] = (11));

} else {
var statearr_22444_22470 = state_22431__$1;
(statearr_22444_22470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (5))){
var inst_22408 = (state_22431[(7)]);
var state_22431__$1 = state_22431;
var statearr_22445_22471 = state_22431__$1;
(statearr_22445_22471[(2)] = inst_22408);

(statearr_22445_22471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (10))){
var inst_22427 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22446_22472 = state_22431__$1;
(statearr_22446_22472[(2)] = inst_22427);

(statearr_22446_22472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (8))){
var inst_22408 = (state_22431[(7)]);
var inst_22418 = cljs.core.next.call(null,inst_22408);
var inst_22408__$1 = inst_22418;
var state_22431__$1 = (function (){var statearr_22447 = state_22431;
(statearr_22447[(7)] = inst_22408__$1);

return statearr_22447;
})();
var statearr_22448_22473 = state_22431__$1;
(statearr_22448_22473[(2)] = null);

(statearr_22448_22473[(1)] = (2));


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
});})(c__21611__auto__))
;
return ((function (switch__21499__auto__,c__21611__auto__){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_22452 = [null,null,null,null,null,null,null,null];
(statearr_22452[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_22452[(1)] = (1));

return statearr_22452;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_22431){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22453){if((e22453 instanceof Object)){
var ex__21503__auto__ = e22453;
var statearr_22454_22474 = state_22431;
(statearr_22454_22474[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22475 = state_22431;
state_22431 = G__22475;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_22431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_22431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__))
})();
var state__21613__auto__ = (function (){var statearr_22455 = f__21612__auto__.call(null);
(statearr_22455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_22455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__))
);

return c__21611__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17473__auto__ = (((_ == null))?null:_);
var m__17474__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,_);
} else {
var m__17474__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17474__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,ch);
} else {
var m__17474__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m);
} else {
var m__17474__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22697 = (function (mult,ch,cs,meta22698){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22698 = meta22698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22699,meta22698__$1){
var self__ = this;
var _22699__$1 = this;
return (new cljs.core.async.t_cljs$core$async22697(self__.mult,self__.ch,self__.cs,meta22698__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22699){
var self__ = this;
var _22699__$1 = this;
return self__.meta22698;
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22698","meta22698",1875019752,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22697";

cljs.core.async.t_cljs$core$async22697.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async22697");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22697 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22697(mult__$1,ch__$1,cs__$1,meta22698){
return (new cljs.core.async.t_cljs$core$async22697(mult__$1,ch__$1,cs__$1,meta22698));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22697(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21611__auto___22918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___22918,cs,m,dchan,dctr,done){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___22918,cs,m,dchan,dctr,done){
return (function (state_22830){
var state_val_22831 = (state_22830[(1)]);
if((state_val_22831 === (7))){
var inst_22826 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22832_22919 = state_22830__$1;
(statearr_22832_22919[(2)] = inst_22826);

(statearr_22832_22919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (20))){
var inst_22731 = (state_22830[(7)]);
var inst_22741 = cljs.core.first.call(null,inst_22731);
var inst_22742 = cljs.core.nth.call(null,inst_22741,(0),null);
var inst_22743 = cljs.core.nth.call(null,inst_22741,(1),null);
var state_22830__$1 = (function (){var statearr_22833 = state_22830;
(statearr_22833[(8)] = inst_22742);

return statearr_22833;
})();
if(cljs.core.truth_(inst_22743)){
var statearr_22834_22920 = state_22830__$1;
(statearr_22834_22920[(1)] = (22));

} else {
var statearr_22835_22921 = state_22830__$1;
(statearr_22835_22921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (27))){
var inst_22773 = (state_22830[(9)]);
var inst_22771 = (state_22830[(10)]);
var inst_22702 = (state_22830[(11)]);
var inst_22778 = (state_22830[(12)]);
var inst_22778__$1 = cljs.core._nth.call(null,inst_22771,inst_22773);
var inst_22779 = cljs.core.async.put_BANG_.call(null,inst_22778__$1,inst_22702,done);
var state_22830__$1 = (function (){var statearr_22836 = state_22830;
(statearr_22836[(12)] = inst_22778__$1);

return statearr_22836;
})();
if(cljs.core.truth_(inst_22779)){
var statearr_22837_22922 = state_22830__$1;
(statearr_22837_22922[(1)] = (30));

} else {
var statearr_22838_22923 = state_22830__$1;
(statearr_22838_22923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (1))){
var state_22830__$1 = state_22830;
var statearr_22839_22924 = state_22830__$1;
(statearr_22839_22924[(2)] = null);

(statearr_22839_22924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (24))){
var inst_22731 = (state_22830[(7)]);
var inst_22748 = (state_22830[(2)]);
var inst_22749 = cljs.core.next.call(null,inst_22731);
var inst_22711 = inst_22749;
var inst_22712 = null;
var inst_22713 = (0);
var inst_22714 = (0);
var state_22830__$1 = (function (){var statearr_22840 = state_22830;
(statearr_22840[(13)] = inst_22711);

(statearr_22840[(14)] = inst_22713);

(statearr_22840[(15)] = inst_22714);

(statearr_22840[(16)] = inst_22712);

(statearr_22840[(17)] = inst_22748);

return statearr_22840;
})();
var statearr_22841_22925 = state_22830__$1;
(statearr_22841_22925[(2)] = null);

(statearr_22841_22925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (39))){
var state_22830__$1 = state_22830;
var statearr_22845_22926 = state_22830__$1;
(statearr_22845_22926[(2)] = null);

(statearr_22845_22926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (4))){
var inst_22702 = (state_22830[(11)]);
var inst_22702__$1 = (state_22830[(2)]);
var inst_22703 = (inst_22702__$1 == null);
var state_22830__$1 = (function (){var statearr_22846 = state_22830;
(statearr_22846[(11)] = inst_22702__$1);

return statearr_22846;
})();
if(cljs.core.truth_(inst_22703)){
var statearr_22847_22927 = state_22830__$1;
(statearr_22847_22927[(1)] = (5));

} else {
var statearr_22848_22928 = state_22830__$1;
(statearr_22848_22928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (15))){
var inst_22711 = (state_22830[(13)]);
var inst_22713 = (state_22830[(14)]);
var inst_22714 = (state_22830[(15)]);
var inst_22712 = (state_22830[(16)]);
var inst_22727 = (state_22830[(2)]);
var inst_22728 = (inst_22714 + (1));
var tmp22842 = inst_22711;
var tmp22843 = inst_22713;
var tmp22844 = inst_22712;
var inst_22711__$1 = tmp22842;
var inst_22712__$1 = tmp22844;
var inst_22713__$1 = tmp22843;
var inst_22714__$1 = inst_22728;
var state_22830__$1 = (function (){var statearr_22849 = state_22830;
(statearr_22849[(13)] = inst_22711__$1);

(statearr_22849[(14)] = inst_22713__$1);

(statearr_22849[(15)] = inst_22714__$1);

(statearr_22849[(18)] = inst_22727);

(statearr_22849[(16)] = inst_22712__$1);

return statearr_22849;
})();
var statearr_22850_22929 = state_22830__$1;
(statearr_22850_22929[(2)] = null);

(statearr_22850_22929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (21))){
var inst_22752 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22854_22930 = state_22830__$1;
(statearr_22854_22930[(2)] = inst_22752);

(statearr_22854_22930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (31))){
var inst_22778 = (state_22830[(12)]);
var inst_22782 = done.call(null,null);
var inst_22783 = cljs.core.async.untap_STAR_.call(null,m,inst_22778);
var state_22830__$1 = (function (){var statearr_22855 = state_22830;
(statearr_22855[(19)] = inst_22782);

return statearr_22855;
})();
var statearr_22856_22931 = state_22830__$1;
(statearr_22856_22931[(2)] = inst_22783);

(statearr_22856_22931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (32))){
var inst_22773 = (state_22830[(9)]);
var inst_22771 = (state_22830[(10)]);
var inst_22772 = (state_22830[(20)]);
var inst_22770 = (state_22830[(21)]);
var inst_22785 = (state_22830[(2)]);
var inst_22786 = (inst_22773 + (1));
var tmp22851 = inst_22771;
var tmp22852 = inst_22772;
var tmp22853 = inst_22770;
var inst_22770__$1 = tmp22853;
var inst_22771__$1 = tmp22851;
var inst_22772__$1 = tmp22852;
var inst_22773__$1 = inst_22786;
var state_22830__$1 = (function (){var statearr_22857 = state_22830;
(statearr_22857[(9)] = inst_22773__$1);

(statearr_22857[(10)] = inst_22771__$1);

(statearr_22857[(20)] = inst_22772__$1);

(statearr_22857[(21)] = inst_22770__$1);

(statearr_22857[(22)] = inst_22785);

return statearr_22857;
})();
var statearr_22858_22932 = state_22830__$1;
(statearr_22858_22932[(2)] = null);

(statearr_22858_22932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (40))){
var inst_22798 = (state_22830[(23)]);
var inst_22802 = done.call(null,null);
var inst_22803 = cljs.core.async.untap_STAR_.call(null,m,inst_22798);
var state_22830__$1 = (function (){var statearr_22859 = state_22830;
(statearr_22859[(24)] = inst_22802);

return statearr_22859;
})();
var statearr_22860_22933 = state_22830__$1;
(statearr_22860_22933[(2)] = inst_22803);

(statearr_22860_22933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (33))){
var inst_22789 = (state_22830[(25)]);
var inst_22791 = cljs.core.chunked_seq_QMARK_.call(null,inst_22789);
var state_22830__$1 = state_22830;
if(inst_22791){
var statearr_22861_22934 = state_22830__$1;
(statearr_22861_22934[(1)] = (36));

} else {
var statearr_22862_22935 = state_22830__$1;
(statearr_22862_22935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (13))){
var inst_22721 = (state_22830[(26)]);
var inst_22724 = cljs.core.async.close_BANG_.call(null,inst_22721);
var state_22830__$1 = state_22830;
var statearr_22863_22936 = state_22830__$1;
(statearr_22863_22936[(2)] = inst_22724);

(statearr_22863_22936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (22))){
var inst_22742 = (state_22830[(8)]);
var inst_22745 = cljs.core.async.close_BANG_.call(null,inst_22742);
var state_22830__$1 = state_22830;
var statearr_22864_22937 = state_22830__$1;
(statearr_22864_22937[(2)] = inst_22745);

(statearr_22864_22937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (36))){
var inst_22789 = (state_22830[(25)]);
var inst_22793 = cljs.core.chunk_first.call(null,inst_22789);
var inst_22794 = cljs.core.chunk_rest.call(null,inst_22789);
var inst_22795 = cljs.core.count.call(null,inst_22793);
var inst_22770 = inst_22794;
var inst_22771 = inst_22793;
var inst_22772 = inst_22795;
var inst_22773 = (0);
var state_22830__$1 = (function (){var statearr_22865 = state_22830;
(statearr_22865[(9)] = inst_22773);

(statearr_22865[(10)] = inst_22771);

(statearr_22865[(20)] = inst_22772);

(statearr_22865[(21)] = inst_22770);

return statearr_22865;
})();
var statearr_22866_22938 = state_22830__$1;
(statearr_22866_22938[(2)] = null);

(statearr_22866_22938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (41))){
var inst_22789 = (state_22830[(25)]);
var inst_22805 = (state_22830[(2)]);
var inst_22806 = cljs.core.next.call(null,inst_22789);
var inst_22770 = inst_22806;
var inst_22771 = null;
var inst_22772 = (0);
var inst_22773 = (0);
var state_22830__$1 = (function (){var statearr_22867 = state_22830;
(statearr_22867[(27)] = inst_22805);

(statearr_22867[(9)] = inst_22773);

(statearr_22867[(10)] = inst_22771);

(statearr_22867[(20)] = inst_22772);

(statearr_22867[(21)] = inst_22770);

return statearr_22867;
})();
var statearr_22868_22939 = state_22830__$1;
(statearr_22868_22939[(2)] = null);

(statearr_22868_22939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (43))){
var state_22830__$1 = state_22830;
var statearr_22869_22940 = state_22830__$1;
(statearr_22869_22940[(2)] = null);

(statearr_22869_22940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (29))){
var inst_22814 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22870_22941 = state_22830__$1;
(statearr_22870_22941[(2)] = inst_22814);

(statearr_22870_22941[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (44))){
var inst_22823 = (state_22830[(2)]);
var state_22830__$1 = (function (){var statearr_22871 = state_22830;
(statearr_22871[(28)] = inst_22823);

return statearr_22871;
})();
var statearr_22872_22942 = state_22830__$1;
(statearr_22872_22942[(2)] = null);

(statearr_22872_22942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (6))){
var inst_22762 = (state_22830[(29)]);
var inst_22761 = cljs.core.deref.call(null,cs);
var inst_22762__$1 = cljs.core.keys.call(null,inst_22761);
var inst_22763 = cljs.core.count.call(null,inst_22762__$1);
var inst_22764 = cljs.core.reset_BANG_.call(null,dctr,inst_22763);
var inst_22769 = cljs.core.seq.call(null,inst_22762__$1);
var inst_22770 = inst_22769;
var inst_22771 = null;
var inst_22772 = (0);
var inst_22773 = (0);
var state_22830__$1 = (function (){var statearr_22873 = state_22830;
(statearr_22873[(9)] = inst_22773);

(statearr_22873[(10)] = inst_22771);

(statearr_22873[(30)] = inst_22764);

(statearr_22873[(20)] = inst_22772);

(statearr_22873[(29)] = inst_22762__$1);

(statearr_22873[(21)] = inst_22770);

return statearr_22873;
})();
var statearr_22874_22943 = state_22830__$1;
(statearr_22874_22943[(2)] = null);

(statearr_22874_22943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (28))){
var inst_22770 = (state_22830[(21)]);
var inst_22789 = (state_22830[(25)]);
var inst_22789__$1 = cljs.core.seq.call(null,inst_22770);
var state_22830__$1 = (function (){var statearr_22875 = state_22830;
(statearr_22875[(25)] = inst_22789__$1);

return statearr_22875;
})();
if(inst_22789__$1){
var statearr_22876_22944 = state_22830__$1;
(statearr_22876_22944[(1)] = (33));

} else {
var statearr_22877_22945 = state_22830__$1;
(statearr_22877_22945[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (25))){
var inst_22773 = (state_22830[(9)]);
var inst_22772 = (state_22830[(20)]);
var inst_22775 = (inst_22773 < inst_22772);
var inst_22776 = inst_22775;
var state_22830__$1 = state_22830;
if(cljs.core.truth_(inst_22776)){
var statearr_22878_22946 = state_22830__$1;
(statearr_22878_22946[(1)] = (27));

} else {
var statearr_22879_22947 = state_22830__$1;
(statearr_22879_22947[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (34))){
var state_22830__$1 = state_22830;
var statearr_22880_22948 = state_22830__$1;
(statearr_22880_22948[(2)] = null);

(statearr_22880_22948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (17))){
var state_22830__$1 = state_22830;
var statearr_22881_22949 = state_22830__$1;
(statearr_22881_22949[(2)] = null);

(statearr_22881_22949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (3))){
var inst_22828 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22830__$1,inst_22828);
} else {
if((state_val_22831 === (12))){
var inst_22757 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22882_22950 = state_22830__$1;
(statearr_22882_22950[(2)] = inst_22757);

(statearr_22882_22950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (2))){
var state_22830__$1 = state_22830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22830__$1,(4),ch);
} else {
if((state_val_22831 === (23))){
var state_22830__$1 = state_22830;
var statearr_22883_22951 = state_22830__$1;
(statearr_22883_22951[(2)] = null);

(statearr_22883_22951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (35))){
var inst_22812 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22884_22952 = state_22830__$1;
(statearr_22884_22952[(2)] = inst_22812);

(statearr_22884_22952[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (19))){
var inst_22731 = (state_22830[(7)]);
var inst_22735 = cljs.core.chunk_first.call(null,inst_22731);
var inst_22736 = cljs.core.chunk_rest.call(null,inst_22731);
var inst_22737 = cljs.core.count.call(null,inst_22735);
var inst_22711 = inst_22736;
var inst_22712 = inst_22735;
var inst_22713 = inst_22737;
var inst_22714 = (0);
var state_22830__$1 = (function (){var statearr_22885 = state_22830;
(statearr_22885[(13)] = inst_22711);

(statearr_22885[(14)] = inst_22713);

(statearr_22885[(15)] = inst_22714);

(statearr_22885[(16)] = inst_22712);

return statearr_22885;
})();
var statearr_22886_22953 = state_22830__$1;
(statearr_22886_22953[(2)] = null);

(statearr_22886_22953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (11))){
var inst_22711 = (state_22830[(13)]);
var inst_22731 = (state_22830[(7)]);
var inst_22731__$1 = cljs.core.seq.call(null,inst_22711);
var state_22830__$1 = (function (){var statearr_22887 = state_22830;
(statearr_22887[(7)] = inst_22731__$1);

return statearr_22887;
})();
if(inst_22731__$1){
var statearr_22888_22954 = state_22830__$1;
(statearr_22888_22954[(1)] = (16));

} else {
var statearr_22889_22955 = state_22830__$1;
(statearr_22889_22955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (9))){
var inst_22759 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22890_22956 = state_22830__$1;
(statearr_22890_22956[(2)] = inst_22759);

(statearr_22890_22956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (5))){
var inst_22709 = cljs.core.deref.call(null,cs);
var inst_22710 = cljs.core.seq.call(null,inst_22709);
var inst_22711 = inst_22710;
var inst_22712 = null;
var inst_22713 = (0);
var inst_22714 = (0);
var state_22830__$1 = (function (){var statearr_22891 = state_22830;
(statearr_22891[(13)] = inst_22711);

(statearr_22891[(14)] = inst_22713);

(statearr_22891[(15)] = inst_22714);

(statearr_22891[(16)] = inst_22712);

return statearr_22891;
})();
var statearr_22892_22957 = state_22830__$1;
(statearr_22892_22957[(2)] = null);

(statearr_22892_22957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (14))){
var state_22830__$1 = state_22830;
var statearr_22893_22958 = state_22830__$1;
(statearr_22893_22958[(2)] = null);

(statearr_22893_22958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (45))){
var inst_22820 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22894_22959 = state_22830__$1;
(statearr_22894_22959[(2)] = inst_22820);

(statearr_22894_22959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (26))){
var inst_22762 = (state_22830[(29)]);
var inst_22816 = (state_22830[(2)]);
var inst_22817 = cljs.core.seq.call(null,inst_22762);
var state_22830__$1 = (function (){var statearr_22895 = state_22830;
(statearr_22895[(31)] = inst_22816);

return statearr_22895;
})();
if(inst_22817){
var statearr_22896_22960 = state_22830__$1;
(statearr_22896_22960[(1)] = (42));

} else {
var statearr_22897_22961 = state_22830__$1;
(statearr_22897_22961[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (16))){
var inst_22731 = (state_22830[(7)]);
var inst_22733 = cljs.core.chunked_seq_QMARK_.call(null,inst_22731);
var state_22830__$1 = state_22830;
if(inst_22733){
var statearr_22898_22962 = state_22830__$1;
(statearr_22898_22962[(1)] = (19));

} else {
var statearr_22899_22963 = state_22830__$1;
(statearr_22899_22963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (38))){
var inst_22809 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22900_22964 = state_22830__$1;
(statearr_22900_22964[(2)] = inst_22809);

(statearr_22900_22964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (30))){
var state_22830__$1 = state_22830;
var statearr_22901_22965 = state_22830__$1;
(statearr_22901_22965[(2)] = null);

(statearr_22901_22965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (10))){
var inst_22714 = (state_22830[(15)]);
var inst_22712 = (state_22830[(16)]);
var inst_22720 = cljs.core._nth.call(null,inst_22712,inst_22714);
var inst_22721 = cljs.core.nth.call(null,inst_22720,(0),null);
var inst_22722 = cljs.core.nth.call(null,inst_22720,(1),null);
var state_22830__$1 = (function (){var statearr_22902 = state_22830;
(statearr_22902[(26)] = inst_22721);

return statearr_22902;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22903_22966 = state_22830__$1;
(statearr_22903_22966[(1)] = (13));

} else {
var statearr_22904_22967 = state_22830__$1;
(statearr_22904_22967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (18))){
var inst_22755 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22905_22968 = state_22830__$1;
(statearr_22905_22968[(2)] = inst_22755);

(statearr_22905_22968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (42))){
var state_22830__$1 = state_22830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22830__$1,(45),dchan);
} else {
if((state_val_22831 === (37))){
var inst_22702 = (state_22830[(11)]);
var inst_22798 = (state_22830[(23)]);
var inst_22789 = (state_22830[(25)]);
var inst_22798__$1 = cljs.core.first.call(null,inst_22789);
var inst_22799 = cljs.core.async.put_BANG_.call(null,inst_22798__$1,inst_22702,done);
var state_22830__$1 = (function (){var statearr_22906 = state_22830;
(statearr_22906[(23)] = inst_22798__$1);

return statearr_22906;
})();
if(cljs.core.truth_(inst_22799)){
var statearr_22907_22969 = state_22830__$1;
(statearr_22907_22969[(1)] = (39));

} else {
var statearr_22908_22970 = state_22830__$1;
(statearr_22908_22970[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (8))){
var inst_22713 = (state_22830[(14)]);
var inst_22714 = (state_22830[(15)]);
var inst_22716 = (inst_22714 < inst_22713);
var inst_22717 = inst_22716;
var state_22830__$1 = state_22830;
if(cljs.core.truth_(inst_22717)){
var statearr_22909_22971 = state_22830__$1;
(statearr_22909_22971[(1)] = (10));

} else {
var statearr_22910_22972 = state_22830__$1;
(statearr_22910_22972[(1)] = (11));

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
});})(c__21611__auto___22918,cs,m,dchan,dctr,done))
;
return ((function (switch__21499__auto__,c__21611__auto___22918,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21500__auto__ = null;
var cljs$core$async$mult_$_state_machine__21500__auto____0 = (function (){
var statearr_22914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22914[(0)] = cljs$core$async$mult_$_state_machine__21500__auto__);

(statearr_22914[(1)] = (1));

return statearr_22914;
});
var cljs$core$async$mult_$_state_machine__21500__auto____1 = (function (state_22830){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_22830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e22915){if((e22915 instanceof Object)){
var ex__21503__auto__ = e22915;
var statearr_22916_22973 = state_22830;
(statearr_22916_22973[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22974 = state_22830;
state_22830 = G__22974;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21500__auto__ = function(state_22830){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21500__auto____1.call(this,state_22830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21500__auto____0;
cljs$core$async$mult_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21500__auto____1;
return cljs$core$async$mult_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___22918,cs,m,dchan,dctr,done))
})();
var state__21613__auto__ = (function (){var statearr_22917 = f__21612__auto__.call(null);
(statearr_22917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___22918);

return statearr_22917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___22918,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22975 = [];
var len__17876__auto___22978 = arguments.length;
var i__17877__auto___22979 = (0);
while(true){
if((i__17877__auto___22979 < len__17876__auto___22978)){
args22975.push((arguments[i__17877__auto___22979]));

var G__22980 = (i__17877__auto___22979 + (1));
i__17877__auto___22979 = G__22980;
continue;
} else {
}
break;
}

var G__22977 = args22975.length;
switch (G__22977) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22975.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,ch);
} else {
var m__17474__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,ch);
} else {
var m__17474__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m);
} else {
var m__17474__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,state_map);
} else {
var m__17474__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17473__auto__ = (((m == null))?null:m);
var m__17474__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,m,mode);
} else {
var m__17474__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17883__auto__ = [];
var len__17876__auto___22992 = arguments.length;
var i__17877__auto___22993 = (0);
while(true){
if((i__17877__auto___22993 < len__17876__auto___22992)){
args__17883__auto__.push((arguments[i__17877__auto___22993]));

var G__22994 = (i__17877__auto___22993 + (1));
i__17877__auto___22993 = G__22994;
continue;
} else {
}
break;
}

var argseq__17884__auto__ = ((((3) < args__17883__auto__.length))?(new cljs.core.IndexedSeq(args__17883__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17884__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22986){
var map__22987 = p__22986;
var map__22987__$1 = ((((!((map__22987 == null)))?((((map__22987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22987):map__22987);
var opts = map__22987__$1;
var statearr_22989_22995 = state;
(statearr_22989_22995[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22987,map__22987__$1,opts){
return (function (val){
var statearr_22990_22996 = state;
(statearr_22990_22996[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22987,map__22987__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22991_22997 = state;
(statearr_22991_22997[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22982){
var G__22983 = cljs.core.first.call(null,seq22982);
var seq22982__$1 = cljs.core.next.call(null,seq22982);
var G__22984 = cljs.core.first.call(null,seq22982__$1);
var seq22982__$2 = cljs.core.next.call(null,seq22982__$1);
var G__22985 = cljs.core.first.call(null,seq22982__$2);
var seq22982__$3 = cljs.core.next.call(null,seq22982__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22983,G__22984,G__22985,seq22982__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23161 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23162){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23162 = meta23162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23163,meta23162__$1){
var self__ = this;
var _23163__$1 = this;
return (new cljs.core.async.t_cljs$core$async23161(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23162__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23163){
var self__ = this;
var _23163__$1 = this;
return self__.meta23162;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23162","meta23162",1365527414,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23161";

cljs.core.async.t_cljs$core$async23161.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23161");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23161 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23161(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23162){
return (new cljs.core.async.t_cljs$core$async23161(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23162));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23161(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21611__auto___23324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23261){
var state_val_23262 = (state_23261[(1)]);
if((state_val_23262 === (7))){
var inst_23179 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23263_23325 = state_23261__$1;
(statearr_23263_23325[(2)] = inst_23179);

(statearr_23263_23325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (20))){
var inst_23191 = (state_23261[(7)]);
var state_23261__$1 = state_23261;
var statearr_23264_23326 = state_23261__$1;
(statearr_23264_23326[(2)] = inst_23191);

(statearr_23264_23326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (27))){
var state_23261__$1 = state_23261;
var statearr_23265_23327 = state_23261__$1;
(statearr_23265_23327[(2)] = null);

(statearr_23265_23327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (1))){
var inst_23167 = (state_23261[(8)]);
var inst_23167__$1 = calc_state.call(null);
var inst_23169 = (inst_23167__$1 == null);
var inst_23170 = cljs.core.not.call(null,inst_23169);
var state_23261__$1 = (function (){var statearr_23266 = state_23261;
(statearr_23266[(8)] = inst_23167__$1);

return statearr_23266;
})();
if(inst_23170){
var statearr_23267_23328 = state_23261__$1;
(statearr_23267_23328[(1)] = (2));

} else {
var statearr_23268_23329 = state_23261__$1;
(statearr_23268_23329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (24))){
var inst_23235 = (state_23261[(9)]);
var inst_23221 = (state_23261[(10)]);
var inst_23214 = (state_23261[(11)]);
var inst_23235__$1 = inst_23214.call(null,inst_23221);
var state_23261__$1 = (function (){var statearr_23269 = state_23261;
(statearr_23269[(9)] = inst_23235__$1);

return statearr_23269;
})();
if(cljs.core.truth_(inst_23235__$1)){
var statearr_23270_23330 = state_23261__$1;
(statearr_23270_23330[(1)] = (29));

} else {
var statearr_23271_23331 = state_23261__$1;
(statearr_23271_23331[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (4))){
var inst_23182 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23182)){
var statearr_23272_23332 = state_23261__$1;
(statearr_23272_23332[(1)] = (8));

} else {
var statearr_23273_23333 = state_23261__$1;
(statearr_23273_23333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (15))){
var inst_23208 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23208)){
var statearr_23274_23334 = state_23261__$1;
(statearr_23274_23334[(1)] = (19));

} else {
var statearr_23275_23335 = state_23261__$1;
(statearr_23275_23335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (21))){
var inst_23213 = (state_23261[(12)]);
var inst_23213__$1 = (state_23261[(2)]);
var inst_23214 = cljs.core.get.call(null,inst_23213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23215 = cljs.core.get.call(null,inst_23213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23216 = cljs.core.get.call(null,inst_23213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23261__$1 = (function (){var statearr_23276 = state_23261;
(statearr_23276[(13)] = inst_23215);

(statearr_23276[(12)] = inst_23213__$1);

(statearr_23276[(11)] = inst_23214);

return statearr_23276;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23261__$1,(22),inst_23216);
} else {
if((state_val_23262 === (31))){
var inst_23243 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23243)){
var statearr_23277_23336 = state_23261__$1;
(statearr_23277_23336[(1)] = (32));

} else {
var statearr_23278_23337 = state_23261__$1;
(statearr_23278_23337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (32))){
var inst_23220 = (state_23261[(14)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23261__$1,(35),out,inst_23220);
} else {
if((state_val_23262 === (33))){
var inst_23213 = (state_23261[(12)]);
var inst_23191 = inst_23213;
var state_23261__$1 = (function (){var statearr_23279 = state_23261;
(statearr_23279[(7)] = inst_23191);

return statearr_23279;
})();
var statearr_23280_23338 = state_23261__$1;
(statearr_23280_23338[(2)] = null);

(statearr_23280_23338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (13))){
var inst_23191 = (state_23261[(7)]);
var inst_23198 = inst_23191.cljs$lang$protocol_mask$partition0$;
var inst_23199 = (inst_23198 & (64));
var inst_23200 = inst_23191.cljs$core$ISeq$;
var inst_23201 = (inst_23199) || (inst_23200);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23201)){
var statearr_23281_23339 = state_23261__$1;
(statearr_23281_23339[(1)] = (16));

} else {
var statearr_23282_23340 = state_23261__$1;
(statearr_23282_23340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (22))){
var inst_23220 = (state_23261[(14)]);
var inst_23221 = (state_23261[(10)]);
var inst_23219 = (state_23261[(2)]);
var inst_23220__$1 = cljs.core.nth.call(null,inst_23219,(0),null);
var inst_23221__$1 = cljs.core.nth.call(null,inst_23219,(1),null);
var inst_23222 = (inst_23220__$1 == null);
var inst_23223 = cljs.core._EQ_.call(null,inst_23221__$1,change);
var inst_23224 = (inst_23222) || (inst_23223);
var state_23261__$1 = (function (){var statearr_23283 = state_23261;
(statearr_23283[(14)] = inst_23220__$1);

(statearr_23283[(10)] = inst_23221__$1);

return statearr_23283;
})();
if(cljs.core.truth_(inst_23224)){
var statearr_23284_23341 = state_23261__$1;
(statearr_23284_23341[(1)] = (23));

} else {
var statearr_23285_23342 = state_23261__$1;
(statearr_23285_23342[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (36))){
var inst_23213 = (state_23261[(12)]);
var inst_23191 = inst_23213;
var state_23261__$1 = (function (){var statearr_23286 = state_23261;
(statearr_23286[(7)] = inst_23191);

return statearr_23286;
})();
var statearr_23287_23343 = state_23261__$1;
(statearr_23287_23343[(2)] = null);

(statearr_23287_23343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (29))){
var inst_23235 = (state_23261[(9)]);
var state_23261__$1 = state_23261;
var statearr_23288_23344 = state_23261__$1;
(statearr_23288_23344[(2)] = inst_23235);

(statearr_23288_23344[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (6))){
var state_23261__$1 = state_23261;
var statearr_23289_23345 = state_23261__$1;
(statearr_23289_23345[(2)] = false);

(statearr_23289_23345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (28))){
var inst_23231 = (state_23261[(2)]);
var inst_23232 = calc_state.call(null);
var inst_23191 = inst_23232;
var state_23261__$1 = (function (){var statearr_23290 = state_23261;
(statearr_23290[(15)] = inst_23231);

(statearr_23290[(7)] = inst_23191);

return statearr_23290;
})();
var statearr_23291_23346 = state_23261__$1;
(statearr_23291_23346[(2)] = null);

(statearr_23291_23346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (25))){
var inst_23257 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23292_23347 = state_23261__$1;
(statearr_23292_23347[(2)] = inst_23257);

(statearr_23292_23347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (34))){
var inst_23255 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23293_23348 = state_23261__$1;
(statearr_23293_23348[(2)] = inst_23255);

(statearr_23293_23348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (17))){
var state_23261__$1 = state_23261;
var statearr_23294_23349 = state_23261__$1;
(statearr_23294_23349[(2)] = false);

(statearr_23294_23349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (3))){
var state_23261__$1 = state_23261;
var statearr_23295_23350 = state_23261__$1;
(statearr_23295_23350[(2)] = false);

(statearr_23295_23350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (12))){
var inst_23259 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23261__$1,inst_23259);
} else {
if((state_val_23262 === (2))){
var inst_23167 = (state_23261[(8)]);
var inst_23172 = inst_23167.cljs$lang$protocol_mask$partition0$;
var inst_23173 = (inst_23172 & (64));
var inst_23174 = inst_23167.cljs$core$ISeq$;
var inst_23175 = (inst_23173) || (inst_23174);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23175)){
var statearr_23296_23351 = state_23261__$1;
(statearr_23296_23351[(1)] = (5));

} else {
var statearr_23297_23352 = state_23261__$1;
(statearr_23297_23352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (23))){
var inst_23220 = (state_23261[(14)]);
var inst_23226 = (inst_23220 == null);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23226)){
var statearr_23298_23353 = state_23261__$1;
(statearr_23298_23353[(1)] = (26));

} else {
var statearr_23299_23354 = state_23261__$1;
(statearr_23299_23354[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (35))){
var inst_23246 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23246)){
var statearr_23300_23355 = state_23261__$1;
(statearr_23300_23355[(1)] = (36));

} else {
var statearr_23301_23356 = state_23261__$1;
(statearr_23301_23356[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (19))){
var inst_23191 = (state_23261[(7)]);
var inst_23210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23191);
var state_23261__$1 = state_23261;
var statearr_23302_23357 = state_23261__$1;
(statearr_23302_23357[(2)] = inst_23210);

(statearr_23302_23357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (11))){
var inst_23191 = (state_23261[(7)]);
var inst_23195 = (inst_23191 == null);
var inst_23196 = cljs.core.not.call(null,inst_23195);
var state_23261__$1 = state_23261;
if(inst_23196){
var statearr_23303_23358 = state_23261__$1;
(statearr_23303_23358[(1)] = (13));

} else {
var statearr_23304_23359 = state_23261__$1;
(statearr_23304_23359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (9))){
var inst_23167 = (state_23261[(8)]);
var state_23261__$1 = state_23261;
var statearr_23305_23360 = state_23261__$1;
(statearr_23305_23360[(2)] = inst_23167);

(statearr_23305_23360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (5))){
var state_23261__$1 = state_23261;
var statearr_23306_23361 = state_23261__$1;
(statearr_23306_23361[(2)] = true);

(statearr_23306_23361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (14))){
var state_23261__$1 = state_23261;
var statearr_23307_23362 = state_23261__$1;
(statearr_23307_23362[(2)] = false);

(statearr_23307_23362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (26))){
var inst_23221 = (state_23261[(10)]);
var inst_23228 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23221);
var state_23261__$1 = state_23261;
var statearr_23308_23363 = state_23261__$1;
(statearr_23308_23363[(2)] = inst_23228);

(statearr_23308_23363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (16))){
var state_23261__$1 = state_23261;
var statearr_23309_23364 = state_23261__$1;
(statearr_23309_23364[(2)] = true);

(statearr_23309_23364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (38))){
var inst_23251 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23310_23365 = state_23261__$1;
(statearr_23310_23365[(2)] = inst_23251);

(statearr_23310_23365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (30))){
var inst_23215 = (state_23261[(13)]);
var inst_23221 = (state_23261[(10)]);
var inst_23214 = (state_23261[(11)]);
var inst_23238 = cljs.core.empty_QMARK_.call(null,inst_23214);
var inst_23239 = inst_23215.call(null,inst_23221);
var inst_23240 = cljs.core.not.call(null,inst_23239);
var inst_23241 = (inst_23238) && (inst_23240);
var state_23261__$1 = state_23261;
var statearr_23311_23366 = state_23261__$1;
(statearr_23311_23366[(2)] = inst_23241);

(statearr_23311_23366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (10))){
var inst_23167 = (state_23261[(8)]);
var inst_23187 = (state_23261[(2)]);
var inst_23188 = cljs.core.get.call(null,inst_23187,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23189 = cljs.core.get.call(null,inst_23187,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23190 = cljs.core.get.call(null,inst_23187,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23191 = inst_23167;
var state_23261__$1 = (function (){var statearr_23312 = state_23261;
(statearr_23312[(16)] = inst_23189);

(statearr_23312[(7)] = inst_23191);

(statearr_23312[(17)] = inst_23190);

(statearr_23312[(18)] = inst_23188);

return statearr_23312;
})();
var statearr_23313_23367 = state_23261__$1;
(statearr_23313_23367[(2)] = null);

(statearr_23313_23367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (18))){
var inst_23205 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23314_23368 = state_23261__$1;
(statearr_23314_23368[(2)] = inst_23205);

(statearr_23314_23368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (37))){
var state_23261__$1 = state_23261;
var statearr_23315_23369 = state_23261__$1;
(statearr_23315_23369[(2)] = null);

(statearr_23315_23369[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23262 === (8))){
var inst_23167 = (state_23261[(8)]);
var inst_23184 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23167);
var state_23261__$1 = state_23261;
var statearr_23316_23370 = state_23261__$1;
(statearr_23316_23370[(2)] = inst_23184);

(statearr_23316_23370[(1)] = (10));


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
});})(c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21499__auto__,c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21500__auto__ = null;
var cljs$core$async$mix_$_state_machine__21500__auto____0 = (function (){
var statearr_23320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23320[(0)] = cljs$core$async$mix_$_state_machine__21500__auto__);

(statearr_23320[(1)] = (1));

return statearr_23320;
});
var cljs$core$async$mix_$_state_machine__21500__auto____1 = (function (state_23261){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23321){if((e23321 instanceof Object)){
var ex__21503__auto__ = e23321;
var statearr_23322_23371 = state_23261;
(statearr_23322_23371[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23372 = state_23261;
state_23261 = G__23372;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21500__auto__ = function(state_23261){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21500__auto____1.call(this,state_23261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21500__auto____0;
cljs$core$async$mix_$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21500__auto____1;
return cljs$core$async$mix_$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21613__auto__ = (function (){var statearr_23323 = f__21612__auto__.call(null);
(statearr_23323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23324);

return statearr_23323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23324,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17473__auto__ = (((p == null))?null:p);
var m__17474__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17474__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17473__auto__ = (((p == null))?null:p);
var m__17474__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,p,v,ch);
} else {
var m__17474__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23373 = [];
var len__17876__auto___23376 = arguments.length;
var i__17877__auto___23377 = (0);
while(true){
if((i__17877__auto___23377 < len__17876__auto___23376)){
args23373.push((arguments[i__17877__auto___23377]));

var G__23378 = (i__17877__auto___23377 + (1));
i__17877__auto___23377 = G__23378;
continue;
} else {
}
break;
}

var G__23375 = args23373.length;
switch (G__23375) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23373.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17473__auto__ = (((p == null))?null:p);
var m__17474__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,p);
} else {
var m__17474__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17473__auto__ = (((p == null))?null:p);
var m__17474__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17473__auto__)]);
if(!((m__17474__auto__ == null))){
return m__17474__auto__.call(null,p,v);
} else {
var m__17474__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17474__auto____$1 == null))){
return m__17474__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23381 = [];
var len__17876__auto___23506 = arguments.length;
var i__17877__auto___23507 = (0);
while(true){
if((i__17877__auto___23507 < len__17876__auto___23506)){
args23381.push((arguments[i__17877__auto___23507]));

var G__23508 = (i__17877__auto___23507 + (1));
i__17877__auto___23507 = G__23508;
continue;
} else {
}
break;
}

var G__23383 = args23381.length;
switch (G__23383) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23381.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16818__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16818__auto__)){
return or__16818__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16818__auto__,mults){
return (function (p1__23380_SHARP_){
if(cljs.core.truth_(p1__23380_SHARP_.call(null,topic))){
return p1__23380_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23380_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16818__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23384 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23385){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23385 = meta23385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23386,meta23385__$1){
var self__ = this;
var _23386__$1 = this;
return (new cljs.core.async.t_cljs$core$async23384(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23385__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23386){
var self__ = this;
var _23386__$1 = this;
return self__.meta23385;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23385","meta23385",-155353470,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23384";

cljs.core.async.t_cljs$core$async23384.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23384");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23384 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23385){
return (new cljs.core.async.t_cljs$core$async23384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23385));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23384(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21611__auto___23510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23510,mults,ensure_mult,p){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23510,mults,ensure_mult,p){
return (function (state_23458){
var state_val_23459 = (state_23458[(1)]);
if((state_val_23459 === (7))){
var inst_23454 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23460_23511 = state_23458__$1;
(statearr_23460_23511[(2)] = inst_23454);

(statearr_23460_23511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (20))){
var state_23458__$1 = state_23458;
var statearr_23461_23512 = state_23458__$1;
(statearr_23461_23512[(2)] = null);

(statearr_23461_23512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (1))){
var state_23458__$1 = state_23458;
var statearr_23462_23513 = state_23458__$1;
(statearr_23462_23513[(2)] = null);

(statearr_23462_23513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (24))){
var inst_23437 = (state_23458[(7)]);
var inst_23446 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23437);
var state_23458__$1 = state_23458;
var statearr_23463_23514 = state_23458__$1;
(statearr_23463_23514[(2)] = inst_23446);

(statearr_23463_23514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (4))){
var inst_23389 = (state_23458[(8)]);
var inst_23389__$1 = (state_23458[(2)]);
var inst_23390 = (inst_23389__$1 == null);
var state_23458__$1 = (function (){var statearr_23464 = state_23458;
(statearr_23464[(8)] = inst_23389__$1);

return statearr_23464;
})();
if(cljs.core.truth_(inst_23390)){
var statearr_23465_23515 = state_23458__$1;
(statearr_23465_23515[(1)] = (5));

} else {
var statearr_23466_23516 = state_23458__$1;
(statearr_23466_23516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (15))){
var inst_23431 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23467_23517 = state_23458__$1;
(statearr_23467_23517[(2)] = inst_23431);

(statearr_23467_23517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (21))){
var inst_23451 = (state_23458[(2)]);
var state_23458__$1 = (function (){var statearr_23468 = state_23458;
(statearr_23468[(9)] = inst_23451);

return statearr_23468;
})();
var statearr_23469_23518 = state_23458__$1;
(statearr_23469_23518[(2)] = null);

(statearr_23469_23518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (13))){
var inst_23413 = (state_23458[(10)]);
var inst_23415 = cljs.core.chunked_seq_QMARK_.call(null,inst_23413);
var state_23458__$1 = state_23458;
if(inst_23415){
var statearr_23470_23519 = state_23458__$1;
(statearr_23470_23519[(1)] = (16));

} else {
var statearr_23471_23520 = state_23458__$1;
(statearr_23471_23520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (22))){
var inst_23443 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
if(cljs.core.truth_(inst_23443)){
var statearr_23472_23521 = state_23458__$1;
(statearr_23472_23521[(1)] = (23));

} else {
var statearr_23473_23522 = state_23458__$1;
(statearr_23473_23522[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (6))){
var inst_23437 = (state_23458[(7)]);
var inst_23439 = (state_23458[(11)]);
var inst_23389 = (state_23458[(8)]);
var inst_23437__$1 = topic_fn.call(null,inst_23389);
var inst_23438 = cljs.core.deref.call(null,mults);
var inst_23439__$1 = cljs.core.get.call(null,inst_23438,inst_23437__$1);
var state_23458__$1 = (function (){var statearr_23474 = state_23458;
(statearr_23474[(7)] = inst_23437__$1);

(statearr_23474[(11)] = inst_23439__$1);

return statearr_23474;
})();
if(cljs.core.truth_(inst_23439__$1)){
var statearr_23475_23523 = state_23458__$1;
(statearr_23475_23523[(1)] = (19));

} else {
var statearr_23476_23524 = state_23458__$1;
(statearr_23476_23524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (25))){
var inst_23448 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23477_23525 = state_23458__$1;
(statearr_23477_23525[(2)] = inst_23448);

(statearr_23477_23525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (17))){
var inst_23413 = (state_23458[(10)]);
var inst_23422 = cljs.core.first.call(null,inst_23413);
var inst_23423 = cljs.core.async.muxch_STAR_.call(null,inst_23422);
var inst_23424 = cljs.core.async.close_BANG_.call(null,inst_23423);
var inst_23425 = cljs.core.next.call(null,inst_23413);
var inst_23399 = inst_23425;
var inst_23400 = null;
var inst_23401 = (0);
var inst_23402 = (0);
var state_23458__$1 = (function (){var statearr_23478 = state_23458;
(statearr_23478[(12)] = inst_23401);

(statearr_23478[(13)] = inst_23402);

(statearr_23478[(14)] = inst_23424);

(statearr_23478[(15)] = inst_23400);

(statearr_23478[(16)] = inst_23399);

return statearr_23478;
})();
var statearr_23479_23526 = state_23458__$1;
(statearr_23479_23526[(2)] = null);

(statearr_23479_23526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (3))){
var inst_23456 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23458__$1,inst_23456);
} else {
if((state_val_23459 === (12))){
var inst_23433 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23480_23527 = state_23458__$1;
(statearr_23480_23527[(2)] = inst_23433);

(statearr_23480_23527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (2))){
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23458__$1,(4),ch);
} else {
if((state_val_23459 === (23))){
var state_23458__$1 = state_23458;
var statearr_23481_23528 = state_23458__$1;
(statearr_23481_23528[(2)] = null);

(statearr_23481_23528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (19))){
var inst_23439 = (state_23458[(11)]);
var inst_23389 = (state_23458[(8)]);
var inst_23441 = cljs.core.async.muxch_STAR_.call(null,inst_23439);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23458__$1,(22),inst_23441,inst_23389);
} else {
if((state_val_23459 === (11))){
var inst_23413 = (state_23458[(10)]);
var inst_23399 = (state_23458[(16)]);
var inst_23413__$1 = cljs.core.seq.call(null,inst_23399);
var state_23458__$1 = (function (){var statearr_23482 = state_23458;
(statearr_23482[(10)] = inst_23413__$1);

return statearr_23482;
})();
if(inst_23413__$1){
var statearr_23483_23529 = state_23458__$1;
(statearr_23483_23529[(1)] = (13));

} else {
var statearr_23484_23530 = state_23458__$1;
(statearr_23484_23530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (9))){
var inst_23435 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23485_23531 = state_23458__$1;
(statearr_23485_23531[(2)] = inst_23435);

(statearr_23485_23531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (5))){
var inst_23396 = cljs.core.deref.call(null,mults);
var inst_23397 = cljs.core.vals.call(null,inst_23396);
var inst_23398 = cljs.core.seq.call(null,inst_23397);
var inst_23399 = inst_23398;
var inst_23400 = null;
var inst_23401 = (0);
var inst_23402 = (0);
var state_23458__$1 = (function (){var statearr_23486 = state_23458;
(statearr_23486[(12)] = inst_23401);

(statearr_23486[(13)] = inst_23402);

(statearr_23486[(15)] = inst_23400);

(statearr_23486[(16)] = inst_23399);

return statearr_23486;
})();
var statearr_23487_23532 = state_23458__$1;
(statearr_23487_23532[(2)] = null);

(statearr_23487_23532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (14))){
var state_23458__$1 = state_23458;
var statearr_23491_23533 = state_23458__$1;
(statearr_23491_23533[(2)] = null);

(statearr_23491_23533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (16))){
var inst_23413 = (state_23458[(10)]);
var inst_23417 = cljs.core.chunk_first.call(null,inst_23413);
var inst_23418 = cljs.core.chunk_rest.call(null,inst_23413);
var inst_23419 = cljs.core.count.call(null,inst_23417);
var inst_23399 = inst_23418;
var inst_23400 = inst_23417;
var inst_23401 = inst_23419;
var inst_23402 = (0);
var state_23458__$1 = (function (){var statearr_23492 = state_23458;
(statearr_23492[(12)] = inst_23401);

(statearr_23492[(13)] = inst_23402);

(statearr_23492[(15)] = inst_23400);

(statearr_23492[(16)] = inst_23399);

return statearr_23492;
})();
var statearr_23493_23534 = state_23458__$1;
(statearr_23493_23534[(2)] = null);

(statearr_23493_23534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (10))){
var inst_23401 = (state_23458[(12)]);
var inst_23402 = (state_23458[(13)]);
var inst_23400 = (state_23458[(15)]);
var inst_23399 = (state_23458[(16)]);
var inst_23407 = cljs.core._nth.call(null,inst_23400,inst_23402);
var inst_23408 = cljs.core.async.muxch_STAR_.call(null,inst_23407);
var inst_23409 = cljs.core.async.close_BANG_.call(null,inst_23408);
var inst_23410 = (inst_23402 + (1));
var tmp23488 = inst_23401;
var tmp23489 = inst_23400;
var tmp23490 = inst_23399;
var inst_23399__$1 = tmp23490;
var inst_23400__$1 = tmp23489;
var inst_23401__$1 = tmp23488;
var inst_23402__$1 = inst_23410;
var state_23458__$1 = (function (){var statearr_23494 = state_23458;
(statearr_23494[(12)] = inst_23401__$1);

(statearr_23494[(13)] = inst_23402__$1);

(statearr_23494[(17)] = inst_23409);

(statearr_23494[(15)] = inst_23400__$1);

(statearr_23494[(16)] = inst_23399__$1);

return statearr_23494;
})();
var statearr_23495_23535 = state_23458__$1;
(statearr_23495_23535[(2)] = null);

(statearr_23495_23535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (18))){
var inst_23428 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23496_23536 = state_23458__$1;
(statearr_23496_23536[(2)] = inst_23428);

(statearr_23496_23536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (8))){
var inst_23401 = (state_23458[(12)]);
var inst_23402 = (state_23458[(13)]);
var inst_23404 = (inst_23402 < inst_23401);
var inst_23405 = inst_23404;
var state_23458__$1 = state_23458;
if(cljs.core.truth_(inst_23405)){
var statearr_23497_23537 = state_23458__$1;
(statearr_23497_23537[(1)] = (10));

} else {
var statearr_23498_23538 = state_23458__$1;
(statearr_23498_23538[(1)] = (11));

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
});})(c__21611__auto___23510,mults,ensure_mult,p))
;
return ((function (switch__21499__auto__,c__21611__auto___23510,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_23502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23502[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_23502[(1)] = (1));

return statearr_23502;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_23458){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23503){if((e23503 instanceof Object)){
var ex__21503__auto__ = e23503;
var statearr_23504_23539 = state_23458;
(statearr_23504_23539[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23540 = state_23458;
state_23458 = G__23540;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_23458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_23458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23510,mults,ensure_mult,p))
})();
var state__21613__auto__ = (function (){var statearr_23505 = f__21612__auto__.call(null);
(statearr_23505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23510);

return statearr_23505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23510,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23541 = [];
var len__17876__auto___23544 = arguments.length;
var i__17877__auto___23545 = (0);
while(true){
if((i__17877__auto___23545 < len__17876__auto___23544)){
args23541.push((arguments[i__17877__auto___23545]));

var G__23546 = (i__17877__auto___23545 + (1));
i__17877__auto___23545 = G__23546;
continue;
} else {
}
break;
}

var G__23543 = args23541.length;
switch (G__23543) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23541.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23548 = [];
var len__17876__auto___23551 = arguments.length;
var i__17877__auto___23552 = (0);
while(true){
if((i__17877__auto___23552 < len__17876__auto___23551)){
args23548.push((arguments[i__17877__auto___23552]));

var G__23553 = (i__17877__auto___23552 + (1));
i__17877__auto___23552 = G__23553;
continue;
} else {
}
break;
}

var G__23550 = args23548.length;
switch (G__23550) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23548.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23555 = [];
var len__17876__auto___23626 = arguments.length;
var i__17877__auto___23627 = (0);
while(true){
if((i__17877__auto___23627 < len__17876__auto___23626)){
args23555.push((arguments[i__17877__auto___23627]));

var G__23628 = (i__17877__auto___23627 + (1));
i__17877__auto___23627 = G__23628;
continue;
} else {
}
break;
}

var G__23557 = args23555.length;
switch (G__23557) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23555.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21611__auto___23630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23596){
var state_val_23597 = (state_23596[(1)]);
if((state_val_23597 === (7))){
var state_23596__$1 = state_23596;
var statearr_23598_23631 = state_23596__$1;
(statearr_23598_23631[(2)] = null);

(statearr_23598_23631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (1))){
var state_23596__$1 = state_23596;
var statearr_23599_23632 = state_23596__$1;
(statearr_23599_23632[(2)] = null);

(statearr_23599_23632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (4))){
var inst_23560 = (state_23596[(7)]);
var inst_23562 = (inst_23560 < cnt);
var state_23596__$1 = state_23596;
if(cljs.core.truth_(inst_23562)){
var statearr_23600_23633 = state_23596__$1;
(statearr_23600_23633[(1)] = (6));

} else {
var statearr_23601_23634 = state_23596__$1;
(statearr_23601_23634[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (15))){
var inst_23592 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23602_23635 = state_23596__$1;
(statearr_23602_23635[(2)] = inst_23592);

(statearr_23602_23635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (13))){
var inst_23585 = cljs.core.async.close_BANG_.call(null,out);
var state_23596__$1 = state_23596;
var statearr_23603_23636 = state_23596__$1;
(statearr_23603_23636[(2)] = inst_23585);

(statearr_23603_23636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (6))){
var state_23596__$1 = state_23596;
var statearr_23604_23637 = state_23596__$1;
(statearr_23604_23637[(2)] = null);

(statearr_23604_23637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (3))){
var inst_23594 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23596__$1,inst_23594);
} else {
if((state_val_23597 === (12))){
var inst_23582 = (state_23596[(8)]);
var inst_23582__$1 = (state_23596[(2)]);
var inst_23583 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23582__$1);
var state_23596__$1 = (function (){var statearr_23605 = state_23596;
(statearr_23605[(8)] = inst_23582__$1);

return statearr_23605;
})();
if(cljs.core.truth_(inst_23583)){
var statearr_23606_23638 = state_23596__$1;
(statearr_23606_23638[(1)] = (13));

} else {
var statearr_23607_23639 = state_23596__$1;
(statearr_23607_23639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (2))){
var inst_23559 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23560 = (0);
var state_23596__$1 = (function (){var statearr_23608 = state_23596;
(statearr_23608[(7)] = inst_23560);

(statearr_23608[(9)] = inst_23559);

return statearr_23608;
})();
var statearr_23609_23640 = state_23596__$1;
(statearr_23609_23640[(2)] = null);

(statearr_23609_23640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (11))){
var inst_23560 = (state_23596[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23596,(10),Object,null,(9));
var inst_23569 = chs__$1.call(null,inst_23560);
var inst_23570 = done.call(null,inst_23560);
var inst_23571 = cljs.core.async.take_BANG_.call(null,inst_23569,inst_23570);
var state_23596__$1 = state_23596;
var statearr_23610_23641 = state_23596__$1;
(statearr_23610_23641[(2)] = inst_23571);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (9))){
var inst_23560 = (state_23596[(7)]);
var inst_23573 = (state_23596[(2)]);
var inst_23574 = (inst_23560 + (1));
var inst_23560__$1 = inst_23574;
var state_23596__$1 = (function (){var statearr_23611 = state_23596;
(statearr_23611[(7)] = inst_23560__$1);

(statearr_23611[(10)] = inst_23573);

return statearr_23611;
})();
var statearr_23612_23642 = state_23596__$1;
(statearr_23612_23642[(2)] = null);

(statearr_23612_23642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (5))){
var inst_23580 = (state_23596[(2)]);
var state_23596__$1 = (function (){var statearr_23613 = state_23596;
(statearr_23613[(11)] = inst_23580);

return statearr_23613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23596__$1,(12),dchan);
} else {
if((state_val_23597 === (14))){
var inst_23582 = (state_23596[(8)]);
var inst_23587 = cljs.core.apply.call(null,f,inst_23582);
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23596__$1,(16),out,inst_23587);
} else {
if((state_val_23597 === (16))){
var inst_23589 = (state_23596[(2)]);
var state_23596__$1 = (function (){var statearr_23614 = state_23596;
(statearr_23614[(12)] = inst_23589);

return statearr_23614;
})();
var statearr_23615_23643 = state_23596__$1;
(statearr_23615_23643[(2)] = null);

(statearr_23615_23643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (10))){
var inst_23564 = (state_23596[(2)]);
var inst_23565 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23596__$1 = (function (){var statearr_23616 = state_23596;
(statearr_23616[(13)] = inst_23564);

return statearr_23616;
})();
var statearr_23617_23644 = state_23596__$1;
(statearr_23617_23644[(2)] = inst_23565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (8))){
var inst_23578 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23618_23645 = state_23596__$1;
(statearr_23618_23645[(2)] = inst_23578);

(statearr_23618_23645[(1)] = (5));


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
});})(c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21499__auto__,c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_23622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23622[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_23622[(1)] = (1));

return statearr_23622;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_23596){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23623){if((e23623 instanceof Object)){
var ex__21503__auto__ = e23623;
var statearr_23624_23646 = state_23596;
(statearr_23624_23646[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23647 = state_23596;
state_23596 = G__23647;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_23596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_23596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21613__auto__ = (function (){var statearr_23625 = f__21612__auto__.call(null);
(statearr_23625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23630);

return statearr_23625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23630,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23649 = [];
var len__17876__auto___23705 = arguments.length;
var i__17877__auto___23706 = (0);
while(true){
if((i__17877__auto___23706 < len__17876__auto___23705)){
args23649.push((arguments[i__17877__auto___23706]));

var G__23707 = (i__17877__auto___23706 + (1));
i__17877__auto___23706 = G__23707;
continue;
} else {
}
break;
}

var G__23651 = args23649.length;
switch (G__23651) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23649.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___23709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23709,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23709,out){
return (function (state_23681){
var state_val_23682 = (state_23681[(1)]);
if((state_val_23682 === (7))){
var inst_23661 = (state_23681[(7)]);
var inst_23660 = (state_23681[(8)]);
var inst_23660__$1 = (state_23681[(2)]);
var inst_23661__$1 = cljs.core.nth.call(null,inst_23660__$1,(0),null);
var inst_23662 = cljs.core.nth.call(null,inst_23660__$1,(1),null);
var inst_23663 = (inst_23661__$1 == null);
var state_23681__$1 = (function (){var statearr_23683 = state_23681;
(statearr_23683[(9)] = inst_23662);

(statearr_23683[(7)] = inst_23661__$1);

(statearr_23683[(8)] = inst_23660__$1);

return statearr_23683;
})();
if(cljs.core.truth_(inst_23663)){
var statearr_23684_23710 = state_23681__$1;
(statearr_23684_23710[(1)] = (8));

} else {
var statearr_23685_23711 = state_23681__$1;
(statearr_23685_23711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (1))){
var inst_23652 = cljs.core.vec.call(null,chs);
var inst_23653 = inst_23652;
var state_23681__$1 = (function (){var statearr_23686 = state_23681;
(statearr_23686[(10)] = inst_23653);

return statearr_23686;
})();
var statearr_23687_23712 = state_23681__$1;
(statearr_23687_23712[(2)] = null);

(statearr_23687_23712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (4))){
var inst_23653 = (state_23681[(10)]);
var state_23681__$1 = state_23681;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23681__$1,(7),inst_23653);
} else {
if((state_val_23682 === (6))){
var inst_23677 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
var statearr_23688_23713 = state_23681__$1;
(statearr_23688_23713[(2)] = inst_23677);

(statearr_23688_23713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (3))){
var inst_23679 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23681__$1,inst_23679);
} else {
if((state_val_23682 === (2))){
var inst_23653 = (state_23681[(10)]);
var inst_23655 = cljs.core.count.call(null,inst_23653);
var inst_23656 = (inst_23655 > (0));
var state_23681__$1 = state_23681;
if(cljs.core.truth_(inst_23656)){
var statearr_23690_23714 = state_23681__$1;
(statearr_23690_23714[(1)] = (4));

} else {
var statearr_23691_23715 = state_23681__$1;
(statearr_23691_23715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (11))){
var inst_23653 = (state_23681[(10)]);
var inst_23670 = (state_23681[(2)]);
var tmp23689 = inst_23653;
var inst_23653__$1 = tmp23689;
var state_23681__$1 = (function (){var statearr_23692 = state_23681;
(statearr_23692[(11)] = inst_23670);

(statearr_23692[(10)] = inst_23653__$1);

return statearr_23692;
})();
var statearr_23693_23716 = state_23681__$1;
(statearr_23693_23716[(2)] = null);

(statearr_23693_23716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (9))){
var inst_23661 = (state_23681[(7)]);
var state_23681__$1 = state_23681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23681__$1,(11),out,inst_23661);
} else {
if((state_val_23682 === (5))){
var inst_23675 = cljs.core.async.close_BANG_.call(null,out);
var state_23681__$1 = state_23681;
var statearr_23694_23717 = state_23681__$1;
(statearr_23694_23717[(2)] = inst_23675);

(statearr_23694_23717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (10))){
var inst_23673 = (state_23681[(2)]);
var state_23681__$1 = state_23681;
var statearr_23695_23718 = state_23681__$1;
(statearr_23695_23718[(2)] = inst_23673);

(statearr_23695_23718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23682 === (8))){
var inst_23662 = (state_23681[(9)]);
var inst_23661 = (state_23681[(7)]);
var inst_23653 = (state_23681[(10)]);
var inst_23660 = (state_23681[(8)]);
var inst_23665 = (function (){var cs = inst_23653;
var vec__23658 = inst_23660;
var v = inst_23661;
var c = inst_23662;
return ((function (cs,vec__23658,v,c,inst_23662,inst_23661,inst_23653,inst_23660,state_val_23682,c__21611__auto___23709,out){
return (function (p1__23648_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23648_SHARP_);
});
;})(cs,vec__23658,v,c,inst_23662,inst_23661,inst_23653,inst_23660,state_val_23682,c__21611__auto___23709,out))
})();
var inst_23666 = cljs.core.filterv.call(null,inst_23665,inst_23653);
var inst_23653__$1 = inst_23666;
var state_23681__$1 = (function (){var statearr_23696 = state_23681;
(statearr_23696[(10)] = inst_23653__$1);

return statearr_23696;
})();
var statearr_23697_23719 = state_23681__$1;
(statearr_23697_23719[(2)] = null);

(statearr_23697_23719[(1)] = (2));


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
});})(c__21611__auto___23709,out))
;
return ((function (switch__21499__auto__,c__21611__auto___23709,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_23701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23701[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_23701[(1)] = (1));

return statearr_23701;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_23681){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23702){if((e23702 instanceof Object)){
var ex__21503__auto__ = e23702;
var statearr_23703_23720 = state_23681;
(statearr_23703_23720[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23721 = state_23681;
state_23681 = G__23721;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_23681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_23681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23709,out))
})();
var state__21613__auto__ = (function (){var statearr_23704 = f__21612__auto__.call(null);
(statearr_23704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23709);

return statearr_23704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23709,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23722 = [];
var len__17876__auto___23771 = arguments.length;
var i__17877__auto___23772 = (0);
while(true){
if((i__17877__auto___23772 < len__17876__auto___23771)){
args23722.push((arguments[i__17877__auto___23772]));

var G__23773 = (i__17877__auto___23772 + (1));
i__17877__auto___23772 = G__23773;
continue;
} else {
}
break;
}

var G__23724 = args23722.length;
switch (G__23724) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23722.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___23775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23775,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23775,out){
return (function (state_23748){
var state_val_23749 = (state_23748[(1)]);
if((state_val_23749 === (7))){
var inst_23730 = (state_23748[(7)]);
var inst_23730__$1 = (state_23748[(2)]);
var inst_23731 = (inst_23730__$1 == null);
var inst_23732 = cljs.core.not.call(null,inst_23731);
var state_23748__$1 = (function (){var statearr_23750 = state_23748;
(statearr_23750[(7)] = inst_23730__$1);

return statearr_23750;
})();
if(inst_23732){
var statearr_23751_23776 = state_23748__$1;
(statearr_23751_23776[(1)] = (8));

} else {
var statearr_23752_23777 = state_23748__$1;
(statearr_23752_23777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (1))){
var inst_23725 = (0);
var state_23748__$1 = (function (){var statearr_23753 = state_23748;
(statearr_23753[(8)] = inst_23725);

return statearr_23753;
})();
var statearr_23754_23778 = state_23748__$1;
(statearr_23754_23778[(2)] = null);

(statearr_23754_23778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (4))){
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23748__$1,(7),ch);
} else {
if((state_val_23749 === (6))){
var inst_23743 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
var statearr_23755_23779 = state_23748__$1;
(statearr_23755_23779[(2)] = inst_23743);

(statearr_23755_23779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (3))){
var inst_23745 = (state_23748[(2)]);
var inst_23746 = cljs.core.async.close_BANG_.call(null,out);
var state_23748__$1 = (function (){var statearr_23756 = state_23748;
(statearr_23756[(9)] = inst_23745);

return statearr_23756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23748__$1,inst_23746);
} else {
if((state_val_23749 === (2))){
var inst_23725 = (state_23748[(8)]);
var inst_23727 = (inst_23725 < n);
var state_23748__$1 = state_23748;
if(cljs.core.truth_(inst_23727)){
var statearr_23757_23780 = state_23748__$1;
(statearr_23757_23780[(1)] = (4));

} else {
var statearr_23758_23781 = state_23748__$1;
(statearr_23758_23781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (11))){
var inst_23725 = (state_23748[(8)]);
var inst_23735 = (state_23748[(2)]);
var inst_23736 = (inst_23725 + (1));
var inst_23725__$1 = inst_23736;
var state_23748__$1 = (function (){var statearr_23759 = state_23748;
(statearr_23759[(8)] = inst_23725__$1);

(statearr_23759[(10)] = inst_23735);

return statearr_23759;
})();
var statearr_23760_23782 = state_23748__$1;
(statearr_23760_23782[(2)] = null);

(statearr_23760_23782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (9))){
var state_23748__$1 = state_23748;
var statearr_23761_23783 = state_23748__$1;
(statearr_23761_23783[(2)] = null);

(statearr_23761_23783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (5))){
var state_23748__$1 = state_23748;
var statearr_23762_23784 = state_23748__$1;
(statearr_23762_23784[(2)] = null);

(statearr_23762_23784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (10))){
var inst_23740 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
var statearr_23763_23785 = state_23748__$1;
(statearr_23763_23785[(2)] = inst_23740);

(statearr_23763_23785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23749 === (8))){
var inst_23730 = (state_23748[(7)]);
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23748__$1,(11),out,inst_23730);
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
});})(c__21611__auto___23775,out))
;
return ((function (switch__21499__auto__,c__21611__auto___23775,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_23767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23767[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_23767[(1)] = (1));

return statearr_23767;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_23748){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23768){if((e23768 instanceof Object)){
var ex__21503__auto__ = e23768;
var statearr_23769_23786 = state_23748;
(statearr_23769_23786[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23787 = state_23748;
state_23748 = G__23787;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_23748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_23748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23775,out))
})();
var state__21613__auto__ = (function (){var statearr_23770 = f__21612__auto__.call(null);
(statearr_23770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23775);

return statearr_23770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23775,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23795 = (function (map_LT_,f,ch,meta23796){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23796 = meta23796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23797,meta23796__$1){
var self__ = this;
var _23797__$1 = this;
return (new cljs.core.async.t_cljs$core$async23795(self__.map_LT_,self__.f,self__.ch,meta23796__$1));
});

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23797){
var self__ = this;
var _23797__$1 = this;
return self__.meta23796;
});

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23798 = (function (map_LT_,f,ch,meta23796,_,fn1,meta23799){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23796 = meta23796;
this._ = _;
this.fn1 = fn1;
this.meta23799 = meta23799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23800,meta23799__$1){
var self__ = this;
var _23800__$1 = this;
return (new cljs.core.async.t_cljs$core$async23798(self__.map_LT_,self__.f,self__.ch,self__.meta23796,self__._,self__.fn1,meta23799__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23800){
var self__ = this;
var _23800__$1 = this;
return self__.meta23799;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23788_SHARP_){
return f1.call(null,(((p1__23788_SHARP_ == null))?null:self__.f.call(null,p1__23788_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23796","meta23796",-729413960,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23795","cljs.core.async/t_cljs$core$async23795",145704051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23799","meta23799",-851703966,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23798";

cljs.core.async.t_cljs$core$async23798.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23798");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23798 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23798(map_LT___$1,f__$1,ch__$1,meta23796__$1,___$2,fn1__$1,meta23799){
return (new cljs.core.async.t_cljs$core$async23798(map_LT___$1,f__$1,ch__$1,meta23796__$1,___$2,fn1__$1,meta23799));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23798(self__.map_LT_,self__.f,self__.ch,self__.meta23796,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16806__auto__ = ret;
if(cljs.core.truth_(and__16806__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16806__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23796","meta23796",-729413960,null)], null);
});

cljs.core.async.t_cljs$core$async23795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23795";

cljs.core.async.t_cljs$core$async23795.cljs$lang$ctorPrWriter = (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23795");
});

cljs.core.async.__GT_t_cljs$core$async23795 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23795(map_LT___$1,f__$1,ch__$1,meta23796){
return (new cljs.core.async.t_cljs$core$async23795(map_LT___$1,f__$1,ch__$1,meta23796));
});

}

return (new cljs.core.async.t_cljs$core$async23795(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23804 = (function (map_GT_,f,ch,meta23805){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23805 = meta23805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23806,meta23805__$1){
var self__ = this;
var _23806__$1 = this;
return (new cljs.core.async.t_cljs$core$async23804(self__.map_GT_,self__.f,self__.ch,meta23805__$1));
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23806){
var self__ = this;
var _23806__$1 = this;
return self__.meta23805;
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23805","meta23805",110307151,null)], null);
});

cljs.core.async.t_cljs$core$async23804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23804";

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorPrWriter = (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23804");
});

cljs.core.async.__GT_t_cljs$core$async23804 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23804(map_GT___$1,f__$1,ch__$1,meta23805){
return (new cljs.core.async.t_cljs$core$async23804(map_GT___$1,f__$1,ch__$1,meta23805));
});

}

return (new cljs.core.async.t_cljs$core$async23804(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23810 = (function (filter_GT_,p,ch,meta23811){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23811 = meta23811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23812,meta23811__$1){
var self__ = this;
var _23812__$1 = this;
return (new cljs.core.async.t_cljs$core$async23810(self__.filter_GT_,self__.p,self__.ch,meta23811__$1));
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23812){
var self__ = this;
var _23812__$1 = this;
return self__.meta23811;
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23811","meta23811",1575227139,null)], null);
});

cljs.core.async.t_cljs$core$async23810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23810";

cljs.core.async.t_cljs$core$async23810.cljs$lang$ctorPrWriter = (function (this__17416__auto__,writer__17417__auto__,opt__17418__auto__){
return cljs.core._write.call(null,writer__17417__auto__,"cljs.core.async/t_cljs$core$async23810");
});

cljs.core.async.__GT_t_cljs$core$async23810 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23810(filter_GT___$1,p__$1,ch__$1,meta23811){
return (new cljs.core.async.t_cljs$core$async23810(filter_GT___$1,p__$1,ch__$1,meta23811));
});

}

return (new cljs.core.async.t_cljs$core$async23810(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23813 = [];
var len__17876__auto___23857 = arguments.length;
var i__17877__auto___23858 = (0);
while(true){
if((i__17877__auto___23858 < len__17876__auto___23857)){
args23813.push((arguments[i__17877__auto___23858]));

var G__23859 = (i__17877__auto___23858 + (1));
i__17877__auto___23858 = G__23859;
continue;
} else {
}
break;
}

var G__23815 = args23813.length;
switch (G__23815) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23813.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___23861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___23861,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___23861,out){
return (function (state_23836){
var state_val_23837 = (state_23836[(1)]);
if((state_val_23837 === (7))){
var inst_23832 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23838_23862 = state_23836__$1;
(statearr_23838_23862[(2)] = inst_23832);

(statearr_23838_23862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (1))){
var state_23836__$1 = state_23836;
var statearr_23839_23863 = state_23836__$1;
(statearr_23839_23863[(2)] = null);

(statearr_23839_23863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (4))){
var inst_23818 = (state_23836[(7)]);
var inst_23818__$1 = (state_23836[(2)]);
var inst_23819 = (inst_23818__$1 == null);
var state_23836__$1 = (function (){var statearr_23840 = state_23836;
(statearr_23840[(7)] = inst_23818__$1);

return statearr_23840;
})();
if(cljs.core.truth_(inst_23819)){
var statearr_23841_23864 = state_23836__$1;
(statearr_23841_23864[(1)] = (5));

} else {
var statearr_23842_23865 = state_23836__$1;
(statearr_23842_23865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (6))){
var inst_23818 = (state_23836[(7)]);
var inst_23823 = p.call(null,inst_23818);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23823)){
var statearr_23843_23866 = state_23836__$1;
(statearr_23843_23866[(1)] = (8));

} else {
var statearr_23844_23867 = state_23836__$1;
(statearr_23844_23867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (3))){
var inst_23834 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23836__$1,inst_23834);
} else {
if((state_val_23837 === (2))){
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(4),ch);
} else {
if((state_val_23837 === (11))){
var inst_23826 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23845_23868 = state_23836__$1;
(statearr_23845_23868[(2)] = inst_23826);

(statearr_23845_23868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (9))){
var state_23836__$1 = state_23836;
var statearr_23846_23869 = state_23836__$1;
(statearr_23846_23869[(2)] = null);

(statearr_23846_23869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (5))){
var inst_23821 = cljs.core.async.close_BANG_.call(null,out);
var state_23836__$1 = state_23836;
var statearr_23847_23870 = state_23836__$1;
(statearr_23847_23870[(2)] = inst_23821);

(statearr_23847_23870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (10))){
var inst_23829 = (state_23836[(2)]);
var state_23836__$1 = (function (){var statearr_23848 = state_23836;
(statearr_23848[(8)] = inst_23829);

return statearr_23848;
})();
var statearr_23849_23871 = state_23836__$1;
(statearr_23849_23871[(2)] = null);

(statearr_23849_23871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (8))){
var inst_23818 = (state_23836[(7)]);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23836__$1,(11),out,inst_23818);
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
});})(c__21611__auto___23861,out))
;
return ((function (switch__21499__auto__,c__21611__auto___23861,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_23853 = [null,null,null,null,null,null,null,null,null];
(statearr_23853[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_23853[(1)] = (1));

return statearr_23853;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_23836){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_23836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e23854){if((e23854 instanceof Object)){
var ex__21503__auto__ = e23854;
var statearr_23855_23872 = state_23836;
(statearr_23855_23872[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23873 = state_23836;
state_23836 = G__23873;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_23836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_23836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___23861,out))
})();
var state__21613__auto__ = (function (){var statearr_23856 = f__21612__auto__.call(null);
(statearr_23856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___23861);

return statearr_23856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___23861,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23874 = [];
var len__17876__auto___23877 = arguments.length;
var i__17877__auto___23878 = (0);
while(true){
if((i__17877__auto___23878 < len__17876__auto___23877)){
args23874.push((arguments[i__17877__auto___23878]));

var G__23879 = (i__17877__auto___23878 + (1));
i__17877__auto___23878 = G__23879;
continue;
} else {
}
break;
}

var G__23876 = args23874.length;
switch (G__23876) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23874.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto__){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto__){
return (function (state_24046){
var state_val_24047 = (state_24046[(1)]);
if((state_val_24047 === (7))){
var inst_24042 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24048_24089 = state_24046__$1;
(statearr_24048_24089[(2)] = inst_24042);

(statearr_24048_24089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (20))){
var inst_24012 = (state_24046[(7)]);
var inst_24023 = (state_24046[(2)]);
var inst_24024 = cljs.core.next.call(null,inst_24012);
var inst_23998 = inst_24024;
var inst_23999 = null;
var inst_24000 = (0);
var inst_24001 = (0);
var state_24046__$1 = (function (){var statearr_24049 = state_24046;
(statearr_24049[(8)] = inst_24023);

(statearr_24049[(9)] = inst_24001);

(statearr_24049[(10)] = inst_23998);

(statearr_24049[(11)] = inst_24000);

(statearr_24049[(12)] = inst_23999);

return statearr_24049;
})();
var statearr_24050_24090 = state_24046__$1;
(statearr_24050_24090[(2)] = null);

(statearr_24050_24090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (1))){
var state_24046__$1 = state_24046;
var statearr_24051_24091 = state_24046__$1;
(statearr_24051_24091[(2)] = null);

(statearr_24051_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (4))){
var inst_23987 = (state_24046[(13)]);
var inst_23987__$1 = (state_24046[(2)]);
var inst_23988 = (inst_23987__$1 == null);
var state_24046__$1 = (function (){var statearr_24052 = state_24046;
(statearr_24052[(13)] = inst_23987__$1);

return statearr_24052;
})();
if(cljs.core.truth_(inst_23988)){
var statearr_24053_24092 = state_24046__$1;
(statearr_24053_24092[(1)] = (5));

} else {
var statearr_24054_24093 = state_24046__$1;
(statearr_24054_24093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (15))){
var state_24046__$1 = state_24046;
var statearr_24058_24094 = state_24046__$1;
(statearr_24058_24094[(2)] = null);

(statearr_24058_24094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (21))){
var state_24046__$1 = state_24046;
var statearr_24059_24095 = state_24046__$1;
(statearr_24059_24095[(2)] = null);

(statearr_24059_24095[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (13))){
var inst_24001 = (state_24046[(9)]);
var inst_23998 = (state_24046[(10)]);
var inst_24000 = (state_24046[(11)]);
var inst_23999 = (state_24046[(12)]);
var inst_24008 = (state_24046[(2)]);
var inst_24009 = (inst_24001 + (1));
var tmp24055 = inst_23998;
var tmp24056 = inst_24000;
var tmp24057 = inst_23999;
var inst_23998__$1 = tmp24055;
var inst_23999__$1 = tmp24057;
var inst_24000__$1 = tmp24056;
var inst_24001__$1 = inst_24009;
var state_24046__$1 = (function (){var statearr_24060 = state_24046;
(statearr_24060[(9)] = inst_24001__$1);

(statearr_24060[(14)] = inst_24008);

(statearr_24060[(10)] = inst_23998__$1);

(statearr_24060[(11)] = inst_24000__$1);

(statearr_24060[(12)] = inst_23999__$1);

return statearr_24060;
})();
var statearr_24061_24096 = state_24046__$1;
(statearr_24061_24096[(2)] = null);

(statearr_24061_24096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (22))){
var state_24046__$1 = state_24046;
var statearr_24062_24097 = state_24046__$1;
(statearr_24062_24097[(2)] = null);

(statearr_24062_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (6))){
var inst_23987 = (state_24046[(13)]);
var inst_23996 = f.call(null,inst_23987);
var inst_23997 = cljs.core.seq.call(null,inst_23996);
var inst_23998 = inst_23997;
var inst_23999 = null;
var inst_24000 = (0);
var inst_24001 = (0);
var state_24046__$1 = (function (){var statearr_24063 = state_24046;
(statearr_24063[(9)] = inst_24001);

(statearr_24063[(10)] = inst_23998);

(statearr_24063[(11)] = inst_24000);

(statearr_24063[(12)] = inst_23999);

return statearr_24063;
})();
var statearr_24064_24098 = state_24046__$1;
(statearr_24064_24098[(2)] = null);

(statearr_24064_24098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (17))){
var inst_24012 = (state_24046[(7)]);
var inst_24016 = cljs.core.chunk_first.call(null,inst_24012);
var inst_24017 = cljs.core.chunk_rest.call(null,inst_24012);
var inst_24018 = cljs.core.count.call(null,inst_24016);
var inst_23998 = inst_24017;
var inst_23999 = inst_24016;
var inst_24000 = inst_24018;
var inst_24001 = (0);
var state_24046__$1 = (function (){var statearr_24065 = state_24046;
(statearr_24065[(9)] = inst_24001);

(statearr_24065[(10)] = inst_23998);

(statearr_24065[(11)] = inst_24000);

(statearr_24065[(12)] = inst_23999);

return statearr_24065;
})();
var statearr_24066_24099 = state_24046__$1;
(statearr_24066_24099[(2)] = null);

(statearr_24066_24099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (3))){
var inst_24044 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24046__$1,inst_24044);
} else {
if((state_val_24047 === (12))){
var inst_24032 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24067_24100 = state_24046__$1;
(statearr_24067_24100[(2)] = inst_24032);

(statearr_24067_24100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (2))){
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24046__$1,(4),in$);
} else {
if((state_val_24047 === (23))){
var inst_24040 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24068_24101 = state_24046__$1;
(statearr_24068_24101[(2)] = inst_24040);

(statearr_24068_24101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (19))){
var inst_24027 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24069_24102 = state_24046__$1;
(statearr_24069_24102[(2)] = inst_24027);

(statearr_24069_24102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (11))){
var inst_24012 = (state_24046[(7)]);
var inst_23998 = (state_24046[(10)]);
var inst_24012__$1 = cljs.core.seq.call(null,inst_23998);
var state_24046__$1 = (function (){var statearr_24070 = state_24046;
(statearr_24070[(7)] = inst_24012__$1);

return statearr_24070;
})();
if(inst_24012__$1){
var statearr_24071_24103 = state_24046__$1;
(statearr_24071_24103[(1)] = (14));

} else {
var statearr_24072_24104 = state_24046__$1;
(statearr_24072_24104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (9))){
var inst_24034 = (state_24046[(2)]);
var inst_24035 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24046__$1 = (function (){var statearr_24073 = state_24046;
(statearr_24073[(15)] = inst_24034);

return statearr_24073;
})();
if(cljs.core.truth_(inst_24035)){
var statearr_24074_24105 = state_24046__$1;
(statearr_24074_24105[(1)] = (21));

} else {
var statearr_24075_24106 = state_24046__$1;
(statearr_24075_24106[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (5))){
var inst_23990 = cljs.core.async.close_BANG_.call(null,out);
var state_24046__$1 = state_24046;
var statearr_24076_24107 = state_24046__$1;
(statearr_24076_24107[(2)] = inst_23990);

(statearr_24076_24107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (14))){
var inst_24012 = (state_24046[(7)]);
var inst_24014 = cljs.core.chunked_seq_QMARK_.call(null,inst_24012);
var state_24046__$1 = state_24046;
if(inst_24014){
var statearr_24077_24108 = state_24046__$1;
(statearr_24077_24108[(1)] = (17));

} else {
var statearr_24078_24109 = state_24046__$1;
(statearr_24078_24109[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (16))){
var inst_24030 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24079_24110 = state_24046__$1;
(statearr_24079_24110[(2)] = inst_24030);

(statearr_24079_24110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (10))){
var inst_24001 = (state_24046[(9)]);
var inst_23999 = (state_24046[(12)]);
var inst_24006 = cljs.core._nth.call(null,inst_23999,inst_24001);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24046__$1,(13),out,inst_24006);
} else {
if((state_val_24047 === (18))){
var inst_24012 = (state_24046[(7)]);
var inst_24021 = cljs.core.first.call(null,inst_24012);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24046__$1,(20),out,inst_24021);
} else {
if((state_val_24047 === (8))){
var inst_24001 = (state_24046[(9)]);
var inst_24000 = (state_24046[(11)]);
var inst_24003 = (inst_24001 < inst_24000);
var inst_24004 = inst_24003;
var state_24046__$1 = state_24046;
if(cljs.core.truth_(inst_24004)){
var statearr_24080_24111 = state_24046__$1;
(statearr_24080_24111[(1)] = (10));

} else {
var statearr_24081_24112 = state_24046__$1;
(statearr_24081_24112[(1)] = (11));

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
});})(c__21611__auto__))
;
return ((function (switch__21499__auto__,c__21611__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____0 = (function (){
var statearr_24085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24085[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__);

(statearr_24085[(1)] = (1));

return statearr_24085;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____1 = (function (state_24046){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24086){if((e24086 instanceof Object)){
var ex__21503__auto__ = e24086;
var statearr_24087_24113 = state_24046;
(statearr_24087_24113[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24114 = state_24046;
state_24046 = G__24114;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__ = function(state_24046){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____1.call(this,state_24046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21500__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto__))
})();
var state__21613__auto__ = (function (){var statearr_24088 = f__21612__auto__.call(null);
(statearr_24088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto__);

return statearr_24088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto__))
);

return c__21611__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24115 = [];
var len__17876__auto___24118 = arguments.length;
var i__17877__auto___24119 = (0);
while(true){
if((i__17877__auto___24119 < len__17876__auto___24118)){
args24115.push((arguments[i__17877__auto___24119]));

var G__24120 = (i__17877__auto___24119 + (1));
i__17877__auto___24119 = G__24120;
continue;
} else {
}
break;
}

var G__24117 = args24115.length;
switch (G__24117) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24115.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24122 = [];
var len__17876__auto___24125 = arguments.length;
var i__17877__auto___24126 = (0);
while(true){
if((i__17877__auto___24126 < len__17876__auto___24125)){
args24122.push((arguments[i__17877__auto___24126]));

var G__24127 = (i__17877__auto___24126 + (1));
i__17877__auto___24126 = G__24127;
continue;
} else {
}
break;
}

var G__24124 = args24122.length;
switch (G__24124) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24122.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24129 = [];
var len__17876__auto___24180 = arguments.length;
var i__17877__auto___24181 = (0);
while(true){
if((i__17877__auto___24181 < len__17876__auto___24180)){
args24129.push((arguments[i__17877__auto___24181]));

var G__24182 = (i__17877__auto___24181 + (1));
i__17877__auto___24181 = G__24182;
continue;
} else {
}
break;
}

var G__24131 = args24129.length;
switch (G__24131) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24129.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___24184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___24184,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___24184,out){
return (function (state_24155){
var state_val_24156 = (state_24155[(1)]);
if((state_val_24156 === (7))){
var inst_24150 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24157_24185 = state_24155__$1;
(statearr_24157_24185[(2)] = inst_24150);

(statearr_24157_24185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (1))){
var inst_24132 = null;
var state_24155__$1 = (function (){var statearr_24158 = state_24155;
(statearr_24158[(7)] = inst_24132);

return statearr_24158;
})();
var statearr_24159_24186 = state_24155__$1;
(statearr_24159_24186[(2)] = null);

(statearr_24159_24186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (4))){
var inst_24135 = (state_24155[(8)]);
var inst_24135__$1 = (state_24155[(2)]);
var inst_24136 = (inst_24135__$1 == null);
var inst_24137 = cljs.core.not.call(null,inst_24136);
var state_24155__$1 = (function (){var statearr_24160 = state_24155;
(statearr_24160[(8)] = inst_24135__$1);

return statearr_24160;
})();
if(inst_24137){
var statearr_24161_24187 = state_24155__$1;
(statearr_24161_24187[(1)] = (5));

} else {
var statearr_24162_24188 = state_24155__$1;
(statearr_24162_24188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (6))){
var state_24155__$1 = state_24155;
var statearr_24163_24189 = state_24155__$1;
(statearr_24163_24189[(2)] = null);

(statearr_24163_24189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (3))){
var inst_24152 = (state_24155[(2)]);
var inst_24153 = cljs.core.async.close_BANG_.call(null,out);
var state_24155__$1 = (function (){var statearr_24164 = state_24155;
(statearr_24164[(9)] = inst_24152);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24155__$1,inst_24153);
} else {
if((state_val_24156 === (2))){
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(4),ch);
} else {
if((state_val_24156 === (11))){
var inst_24135 = (state_24155[(8)]);
var inst_24144 = (state_24155[(2)]);
var inst_24132 = inst_24135;
var state_24155__$1 = (function (){var statearr_24165 = state_24155;
(statearr_24165[(10)] = inst_24144);

(statearr_24165[(7)] = inst_24132);

return statearr_24165;
})();
var statearr_24166_24190 = state_24155__$1;
(statearr_24166_24190[(2)] = null);

(statearr_24166_24190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (9))){
var inst_24135 = (state_24155[(8)]);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24155__$1,(11),out,inst_24135);
} else {
if((state_val_24156 === (5))){
var inst_24135 = (state_24155[(8)]);
var inst_24132 = (state_24155[(7)]);
var inst_24139 = cljs.core._EQ_.call(null,inst_24135,inst_24132);
var state_24155__$1 = state_24155;
if(inst_24139){
var statearr_24168_24191 = state_24155__$1;
(statearr_24168_24191[(1)] = (8));

} else {
var statearr_24169_24192 = state_24155__$1;
(statearr_24169_24192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (10))){
var inst_24147 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24170_24193 = state_24155__$1;
(statearr_24170_24193[(2)] = inst_24147);

(statearr_24170_24193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (8))){
var inst_24132 = (state_24155[(7)]);
var tmp24167 = inst_24132;
var inst_24132__$1 = tmp24167;
var state_24155__$1 = (function (){var statearr_24171 = state_24155;
(statearr_24171[(7)] = inst_24132__$1);

return statearr_24171;
})();
var statearr_24172_24194 = state_24155__$1;
(statearr_24172_24194[(2)] = null);

(statearr_24172_24194[(1)] = (2));


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
});})(c__21611__auto___24184,out))
;
return ((function (switch__21499__auto__,c__21611__auto___24184,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_24176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24176[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_24176[(1)] = (1));

return statearr_24176;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_24155){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24177){if((e24177 instanceof Object)){
var ex__21503__auto__ = e24177;
var statearr_24178_24195 = state_24155;
(statearr_24178_24195[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24196 = state_24155;
state_24155 = G__24196;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_24155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_24155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___24184,out))
})();
var state__21613__auto__ = (function (){var statearr_24179 = f__21612__auto__.call(null);
(statearr_24179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___24184);

return statearr_24179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___24184,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24197 = [];
var len__17876__auto___24267 = arguments.length;
var i__17877__auto___24268 = (0);
while(true){
if((i__17877__auto___24268 < len__17876__auto___24267)){
args24197.push((arguments[i__17877__auto___24268]));

var G__24269 = (i__17877__auto___24268 + (1));
i__17877__auto___24268 = G__24269;
continue;
} else {
}
break;
}

var G__24199 = args24197.length;
switch (G__24199) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24197.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___24271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___24271,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___24271,out){
return (function (state_24237){
var state_val_24238 = (state_24237[(1)]);
if((state_val_24238 === (7))){
var inst_24233 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24239_24272 = state_24237__$1;
(statearr_24239_24272[(2)] = inst_24233);

(statearr_24239_24272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (1))){
var inst_24200 = (new Array(n));
var inst_24201 = inst_24200;
var inst_24202 = (0);
var state_24237__$1 = (function (){var statearr_24240 = state_24237;
(statearr_24240[(7)] = inst_24202);

(statearr_24240[(8)] = inst_24201);

return statearr_24240;
})();
var statearr_24241_24273 = state_24237__$1;
(statearr_24241_24273[(2)] = null);

(statearr_24241_24273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (4))){
var inst_24205 = (state_24237[(9)]);
var inst_24205__$1 = (state_24237[(2)]);
var inst_24206 = (inst_24205__$1 == null);
var inst_24207 = cljs.core.not.call(null,inst_24206);
var state_24237__$1 = (function (){var statearr_24242 = state_24237;
(statearr_24242[(9)] = inst_24205__$1);

return statearr_24242;
})();
if(inst_24207){
var statearr_24243_24274 = state_24237__$1;
(statearr_24243_24274[(1)] = (5));

} else {
var statearr_24244_24275 = state_24237__$1;
(statearr_24244_24275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (15))){
var inst_24227 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24245_24276 = state_24237__$1;
(statearr_24245_24276[(2)] = inst_24227);

(statearr_24245_24276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (13))){
var state_24237__$1 = state_24237;
var statearr_24246_24277 = state_24237__$1;
(statearr_24246_24277[(2)] = null);

(statearr_24246_24277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (6))){
var inst_24202 = (state_24237[(7)]);
var inst_24223 = (inst_24202 > (0));
var state_24237__$1 = state_24237;
if(cljs.core.truth_(inst_24223)){
var statearr_24247_24278 = state_24237__$1;
(statearr_24247_24278[(1)] = (12));

} else {
var statearr_24248_24279 = state_24237__$1;
(statearr_24248_24279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (3))){
var inst_24235 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24237__$1,inst_24235);
} else {
if((state_val_24238 === (12))){
var inst_24201 = (state_24237[(8)]);
var inst_24225 = cljs.core.vec.call(null,inst_24201);
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24237__$1,(15),out,inst_24225);
} else {
if((state_val_24238 === (2))){
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24237__$1,(4),ch);
} else {
if((state_val_24238 === (11))){
var inst_24217 = (state_24237[(2)]);
var inst_24218 = (new Array(n));
var inst_24201 = inst_24218;
var inst_24202 = (0);
var state_24237__$1 = (function (){var statearr_24249 = state_24237;
(statearr_24249[(7)] = inst_24202);

(statearr_24249[(8)] = inst_24201);

(statearr_24249[(10)] = inst_24217);

return statearr_24249;
})();
var statearr_24250_24280 = state_24237__$1;
(statearr_24250_24280[(2)] = null);

(statearr_24250_24280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (9))){
var inst_24201 = (state_24237[(8)]);
var inst_24215 = cljs.core.vec.call(null,inst_24201);
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24237__$1,(11),out,inst_24215);
} else {
if((state_val_24238 === (5))){
var inst_24202 = (state_24237[(7)]);
var inst_24201 = (state_24237[(8)]);
var inst_24210 = (state_24237[(11)]);
var inst_24205 = (state_24237[(9)]);
var inst_24209 = (inst_24201[inst_24202] = inst_24205);
var inst_24210__$1 = (inst_24202 + (1));
var inst_24211 = (inst_24210__$1 < n);
var state_24237__$1 = (function (){var statearr_24251 = state_24237;
(statearr_24251[(12)] = inst_24209);

(statearr_24251[(11)] = inst_24210__$1);

return statearr_24251;
})();
if(cljs.core.truth_(inst_24211)){
var statearr_24252_24281 = state_24237__$1;
(statearr_24252_24281[(1)] = (8));

} else {
var statearr_24253_24282 = state_24237__$1;
(statearr_24253_24282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (14))){
var inst_24230 = (state_24237[(2)]);
var inst_24231 = cljs.core.async.close_BANG_.call(null,out);
var state_24237__$1 = (function (){var statearr_24255 = state_24237;
(statearr_24255[(13)] = inst_24230);

return statearr_24255;
})();
var statearr_24256_24283 = state_24237__$1;
(statearr_24256_24283[(2)] = inst_24231);

(statearr_24256_24283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (10))){
var inst_24221 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24257_24284 = state_24237__$1;
(statearr_24257_24284[(2)] = inst_24221);

(statearr_24257_24284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (8))){
var inst_24201 = (state_24237[(8)]);
var inst_24210 = (state_24237[(11)]);
var tmp24254 = inst_24201;
var inst_24201__$1 = tmp24254;
var inst_24202 = inst_24210;
var state_24237__$1 = (function (){var statearr_24258 = state_24237;
(statearr_24258[(7)] = inst_24202);

(statearr_24258[(8)] = inst_24201__$1);

return statearr_24258;
})();
var statearr_24259_24285 = state_24237__$1;
(statearr_24259_24285[(2)] = null);

(statearr_24259_24285[(1)] = (2));


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
});})(c__21611__auto___24271,out))
;
return ((function (switch__21499__auto__,c__21611__auto___24271,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_24263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24263[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_24263[(1)] = (1));

return statearr_24263;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_24237){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24264){if((e24264 instanceof Object)){
var ex__21503__auto__ = e24264;
var statearr_24265_24286 = state_24237;
(statearr_24265_24286[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24287 = state_24237;
state_24237 = G__24287;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_24237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_24237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___24271,out))
})();
var state__21613__auto__ = (function (){var statearr_24266 = f__21612__auto__.call(null);
(statearr_24266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___24271);

return statearr_24266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___24271,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24288 = [];
var len__17876__auto___24362 = arguments.length;
var i__17877__auto___24363 = (0);
while(true){
if((i__17877__auto___24363 < len__17876__auto___24362)){
args24288.push((arguments[i__17877__auto___24363]));

var G__24364 = (i__17877__auto___24363 + (1));
i__17877__auto___24363 = G__24364;
continue;
} else {
}
break;
}

var G__24290 = args24288.length;
switch (G__24290) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24288.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21611__auto___24366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21611__auto___24366,out){
return (function (){
var f__21612__auto__ = (function (){var switch__21499__auto__ = ((function (c__21611__auto___24366,out){
return (function (state_24332){
var state_val_24333 = (state_24332[(1)]);
if((state_val_24333 === (7))){
var inst_24328 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24334_24367 = state_24332__$1;
(statearr_24334_24367[(2)] = inst_24328);

(statearr_24334_24367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (1))){
var inst_24291 = [];
var inst_24292 = inst_24291;
var inst_24293 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24332__$1 = (function (){var statearr_24335 = state_24332;
(statearr_24335[(7)] = inst_24293);

(statearr_24335[(8)] = inst_24292);

return statearr_24335;
})();
var statearr_24336_24368 = state_24332__$1;
(statearr_24336_24368[(2)] = null);

(statearr_24336_24368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (4))){
var inst_24296 = (state_24332[(9)]);
var inst_24296__$1 = (state_24332[(2)]);
var inst_24297 = (inst_24296__$1 == null);
var inst_24298 = cljs.core.not.call(null,inst_24297);
var state_24332__$1 = (function (){var statearr_24337 = state_24332;
(statearr_24337[(9)] = inst_24296__$1);

return statearr_24337;
})();
if(inst_24298){
var statearr_24338_24369 = state_24332__$1;
(statearr_24338_24369[(1)] = (5));

} else {
var statearr_24339_24370 = state_24332__$1;
(statearr_24339_24370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (15))){
var inst_24322 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24340_24371 = state_24332__$1;
(statearr_24340_24371[(2)] = inst_24322);

(statearr_24340_24371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (13))){
var state_24332__$1 = state_24332;
var statearr_24341_24372 = state_24332__$1;
(statearr_24341_24372[(2)] = null);

(statearr_24341_24372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (6))){
var inst_24292 = (state_24332[(8)]);
var inst_24317 = inst_24292.length;
var inst_24318 = (inst_24317 > (0));
var state_24332__$1 = state_24332;
if(cljs.core.truth_(inst_24318)){
var statearr_24342_24373 = state_24332__$1;
(statearr_24342_24373[(1)] = (12));

} else {
var statearr_24343_24374 = state_24332__$1;
(statearr_24343_24374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (3))){
var inst_24330 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24332__$1,inst_24330);
} else {
if((state_val_24333 === (12))){
var inst_24292 = (state_24332[(8)]);
var inst_24320 = cljs.core.vec.call(null,inst_24292);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24332__$1,(15),out,inst_24320);
} else {
if((state_val_24333 === (2))){
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24332__$1,(4),ch);
} else {
if((state_val_24333 === (11))){
var inst_24300 = (state_24332[(10)]);
var inst_24296 = (state_24332[(9)]);
var inst_24310 = (state_24332[(2)]);
var inst_24311 = [];
var inst_24312 = inst_24311.push(inst_24296);
var inst_24292 = inst_24311;
var inst_24293 = inst_24300;
var state_24332__$1 = (function (){var statearr_24344 = state_24332;
(statearr_24344[(7)] = inst_24293);

(statearr_24344[(11)] = inst_24312);

(statearr_24344[(8)] = inst_24292);

(statearr_24344[(12)] = inst_24310);

return statearr_24344;
})();
var statearr_24345_24375 = state_24332__$1;
(statearr_24345_24375[(2)] = null);

(statearr_24345_24375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (9))){
var inst_24292 = (state_24332[(8)]);
var inst_24308 = cljs.core.vec.call(null,inst_24292);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24332__$1,(11),out,inst_24308);
} else {
if((state_val_24333 === (5))){
var inst_24300 = (state_24332[(10)]);
var inst_24296 = (state_24332[(9)]);
var inst_24293 = (state_24332[(7)]);
var inst_24300__$1 = f.call(null,inst_24296);
var inst_24301 = cljs.core._EQ_.call(null,inst_24300__$1,inst_24293);
var inst_24302 = cljs.core.keyword_identical_QMARK_.call(null,inst_24293,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24303 = (inst_24301) || (inst_24302);
var state_24332__$1 = (function (){var statearr_24346 = state_24332;
(statearr_24346[(10)] = inst_24300__$1);

return statearr_24346;
})();
if(cljs.core.truth_(inst_24303)){
var statearr_24347_24376 = state_24332__$1;
(statearr_24347_24376[(1)] = (8));

} else {
var statearr_24348_24377 = state_24332__$1;
(statearr_24348_24377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (14))){
var inst_24325 = (state_24332[(2)]);
var inst_24326 = cljs.core.async.close_BANG_.call(null,out);
var state_24332__$1 = (function (){var statearr_24350 = state_24332;
(statearr_24350[(13)] = inst_24325);

return statearr_24350;
})();
var statearr_24351_24378 = state_24332__$1;
(statearr_24351_24378[(2)] = inst_24326);

(statearr_24351_24378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (10))){
var inst_24315 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24352_24379 = state_24332__$1;
(statearr_24352_24379[(2)] = inst_24315);

(statearr_24352_24379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (8))){
var inst_24300 = (state_24332[(10)]);
var inst_24296 = (state_24332[(9)]);
var inst_24292 = (state_24332[(8)]);
var inst_24305 = inst_24292.push(inst_24296);
var tmp24349 = inst_24292;
var inst_24292__$1 = tmp24349;
var inst_24293 = inst_24300;
var state_24332__$1 = (function (){var statearr_24353 = state_24332;
(statearr_24353[(14)] = inst_24305);

(statearr_24353[(7)] = inst_24293);

(statearr_24353[(8)] = inst_24292__$1);

return statearr_24353;
})();
var statearr_24354_24380 = state_24332__$1;
(statearr_24354_24380[(2)] = null);

(statearr_24354_24380[(1)] = (2));


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
});})(c__21611__auto___24366,out))
;
return ((function (switch__21499__auto__,c__21611__auto___24366,out){
return (function() {
var cljs$core$async$state_machine__21500__auto__ = null;
var cljs$core$async$state_machine__21500__auto____0 = (function (){
var statearr_24358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24358[(0)] = cljs$core$async$state_machine__21500__auto__);

(statearr_24358[(1)] = (1));

return statearr_24358;
});
var cljs$core$async$state_machine__21500__auto____1 = (function (state_24332){
while(true){
var ret_value__21501__auto__ = (function (){try{while(true){
var result__21502__auto__ = switch__21499__auto__.call(null,state_24332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21502__auto__;
}
break;
}
}catch (e24359){if((e24359 instanceof Object)){
var ex__21503__auto__ = e24359;
var statearr_24360_24381 = state_24332;
(statearr_24360_24381[(5)] = ex__21503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24382 = state_24332;
state_24332 = G__24382;
continue;
} else {
return ret_value__21501__auto__;
}
break;
}
});
cljs$core$async$state_machine__21500__auto__ = function(state_24332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21500__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21500__auto____1.call(this,state_24332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21500__auto____0;
cljs$core$async$state_machine__21500__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21500__auto____1;
return cljs$core$async$state_machine__21500__auto__;
})()
;})(switch__21499__auto__,c__21611__auto___24366,out))
})();
var state__21613__auto__ = (function (){var statearr_24361 = f__21612__auto__.call(null);
(statearr_24361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21611__auto___24366);

return statearr_24361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21613__auto__);
});})(c__21611__auto___24366,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map