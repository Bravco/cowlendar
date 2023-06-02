(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fd(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Hr(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=rt(r)?nT(r):Hr(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(rt(t))return t;if(Fe(t))return t}}const ZI=/;(?![^(]*\))/g,eT=/:([^]+)/,tT=/\/\*.*?\*\//gs;function nT(t){const e={};return t.replace(tT,"").split(ZI).forEach(n=>{if(n){const r=n.split(eT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Je(t){let e="";if(rt(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=Je(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function yn(t){if(!t)return null;let{class:e,style:n}=t;return e&&!rt(e)&&(t.class=Je(e)),n&&(t.style=Hr(n)),t}const rT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iT=fd(rT);function A_(t){return!!t||t===""}function sT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=xi(t[r],e[r]);return n}function xi(t,e){if(t===e)return!0;let n=Wm(t),r=Wm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Go(t),r=Go(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?sT(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xi(t[o],e[o]))return!1}}return String(t)===String(e)}function dd(t,e){return t.findIndex(n=>xi(n,e))}const an=t=>rt(t)?t:t==null?"":ne(t)||Fe(t)&&(t.toString===x_||!he(t.toString))?JSON.stringify(t,R_,2):String(t),R_=(t,e)=>e&&e.__v_isRef?R_(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:js(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!ne(e)&&!O_(e)?String(e):e,Ve={},us=[],kn=()=>{},oT=()=>!1,aT=/^on[^a-z]/,zc=t=>aT.test(t),pd=t=>t.startsWith("onUpdate:"),Jt=Object.assign,md=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lT=Object.prototype.hasOwnProperty,ke=(t,e)=>lT.call(t,e),ne=Array.isArray,hs=t=>Ca(t)==="[object Map]",js=t=>Ca(t)==="[object Set]",Wm=t=>Ca(t)==="[object Date]",he=t=>typeof t=="function",rt=t=>typeof t=="string",Go=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",N_=t=>Fe(t)&&he(t.then)&&he(t.catch),x_=Object.prototype.toString,Ca=t=>x_.call(t),cT=t=>Ca(t).slice(8,-1),O_=t=>Ca(t)==="[object Object]",gd=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Dl=fd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uT=/-(\w)/g,Kn=qc(t=>t.replace(uT,(e,n)=>n?n.toUpperCase():"")),hT=/\B([A-Z])/g,zs=qc(t=>t.replace(hT,"-$1").toLowerCase()),Wc=qc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zu=qc(t=>t?`on${Wc(t)}`:""),Yo=(t,e)=>!Object.is(t,e),Ml=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ql=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Km;const fT=()=>Km||(Km=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _n;class P_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_n;try{return _n=this,e()}finally{_n=n}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function dT(t){return new P_(t)}function pT(t,e=_n){e&&e.active&&e.effects.push(t)}function mT(){return _n}const yd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},D_=t=>(t.w&Yr)>0,M_=t=>(t.n&Yr)>0,gT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yr},yT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];D_(i)&&!M_(i)?i.delete(t):e[n++]=i,i.w&=~Yr,i.n&=~Yr}e.length=n}},Xl=new WeakMap;let Eo=0,Yr=1;const Uh=30;let wn;const Ci=Symbol(""),Vh=Symbol("");class vd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pT(this,r)}run(){if(!this.active)return this.fn();let e=wn,n=jr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wn,wn=this,jr=!0,Yr=1<<++Eo,Eo<=Uh?gT(this):Gm(this),this.fn()}finally{Eo<=Uh&&yT(this),Yr=1<<--Eo,wn=this.parent,jr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(Gm(this),this.onStop&&this.onStop(),this.active=!1)}}function Gm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jr=!0;const L_=[];function qs(){L_.push(jr),jr=!1}function Ws(){const t=L_.pop();jr=t===void 0?!0:t}function rn(t,e,n){if(jr&&wn){let r=Xl.get(t);r||Xl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=yd()),F_(i)}}function F_(t,e){let n=!1;Eo<=Uh?M_(t)||(t.n|=Yr,n=!D_(t)):n=!t.has(wn),n&&(t.add(wn),wn.deps.push(t))}function pr(t,e,n,r,i,s){const o=Xl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?gd(n)&&a.push(o.get("length")):(a.push(o.get(Ci)),hs(t)&&a.push(o.get(Vh)));break;case"delete":ne(t)||(a.push(o.get(Ci)),hs(t)&&a.push(o.get(Vh)));break;case"set":hs(t)&&a.push(o.get(Ci));break}if(a.length===1)a[0]&&$h(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);$h(yd(l))}}function $h(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Ym(r);for(const r of n)r.computed||Ym(r)}function Ym(t,e){(t!==wn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function vT(t,e){var n;return(n=Xl.get(t))===null||n===void 0?void 0:n.get(e)}const _T=fd("__proto__,__v_isRef,__isVue"),U_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Go)),wT=_d(),bT=_d(!1,!0),ET=_d(!0),Qm=IT();function IT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Re(this);for(let s=0,o=this.length;s<o;s++)rn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qs();const r=Re(this)[e].apply(this,n);return Ws(),r}}),t}function TT(t){const e=Re(this);return rn(e,"has",t),e.hasOwnProperty(t)}function _d(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?$T:j_:e?H_:B_).get(r))return r;const o=ne(r);if(!t){if(o&&ke(Qm,i))return Reflect.get(Qm,i,s);if(i==="hasOwnProperty")return TT}const a=Reflect.get(r,i,s);return(Go(i)?U_.has(i):_T(i))||(t||rn(r,"get",i),e)?a:_t(a)?o&&gd(i)?a:a.value:Fe(a)?t?z_(a):Sa(a):a}}const CT=V_(),ST=V_(!0);function V_(t=!1){return function(n,r,i,s){let o=n[r];if(Is(o)&&_t(o)&&!_t(i))return!1;if(!t&&(!Jl(i)&&!Is(i)&&(o=Re(o),i=Re(i)),!ne(n)&&_t(o)&&!_t(i)))return o.value=i,!0;const a=ne(n)&&gd(r)?Number(r)<n.length:ke(n,r),l=Reflect.set(n,r,i,s);return n===Re(s)&&(a?Yo(i,o)&&pr(n,"set",r,i):pr(n,"add",r,i)),l}}function kT(t,e){const n=ke(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pr(t,"delete",e,void 0),r}function AT(t,e){const n=Reflect.has(t,e);return(!Go(e)||!U_.has(e))&&rn(t,"has",e),n}function RT(t){return rn(t,"iterate",ne(t)?"length":Ci),Reflect.ownKeys(t)}const $_={get:wT,set:CT,deleteProperty:kT,has:AT,ownKeys:RT},NT={get:ET,set(t,e){return!0},deleteProperty(t,e){return!0}},xT=Jt({},$_,{get:bT,set:ST}),wd=t=>t,Kc=t=>Reflect.getPrototypeOf(t);function sl(t,e,n=!1,r=!1){t=t.__v_raw;const i=Re(t),s=Re(e);n||(e!==s&&rn(i,"get",e),rn(i,"get",s));const{has:o}=Kc(i),a=r?wd:n?Id:Qo;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ol(t,e=!1){const n=this.__v_raw,r=Re(n),i=Re(t);return e||(t!==i&&rn(r,"has",t),rn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function al(t,e=!1){return t=t.__v_raw,!e&&rn(Re(t),"iterate",Ci),Reflect.get(t,"size",t)}function Xm(t){t=Re(t);const e=Re(this);return Kc(e).has.call(e,t)||(e.add(t),pr(e,"add",t,t)),this}function Jm(t,e){e=Re(e);const n=Re(this),{has:r,get:i}=Kc(n);let s=r.call(n,t);s||(t=Re(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Yo(e,o)&&pr(n,"set",t,e):pr(n,"add",t,e),this}function Zm(t){const e=Re(this),{has:n,get:r}=Kc(e);let i=n.call(e,t);i||(t=Re(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&pr(e,"delete",t,void 0),s}function eg(){const t=Re(this),e=t.size!==0,n=t.clear();return e&&pr(t,"clear",void 0,void 0),n}function ll(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Re(o),l=e?wd:t?Id:Qo;return!t&&rn(a,"iterate",Ci),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function cl(t,e,n){return function(...r){const i=this.__v_raw,s=Re(i),o=hs(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?wd:e?Id:Qo;return!e&&rn(s,"iterate",l?Vh:Ci),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xr(t){return function(...e){return t==="delete"?!1:this}}function OT(){const t={get(s){return sl(this,s)},get size(){return al(this)},has:ol,add:Xm,set:Jm,delete:Zm,clear:eg,forEach:ll(!1,!1)},e={get(s){return sl(this,s,!1,!0)},get size(){return al(this)},has:ol,add:Xm,set:Jm,delete:Zm,clear:eg,forEach:ll(!1,!0)},n={get(s){return sl(this,s,!0)},get size(){return al(this,!0)},has(s){return ol.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:ll(!0,!1)},r={get(s){return sl(this,s,!0,!0)},get size(){return al(this,!0)},has(s){return ol.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:ll(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cl(s,!1,!1),n[s]=cl(s,!0,!1),e[s]=cl(s,!1,!0),r[s]=cl(s,!0,!0)}),[t,n,e,r]}const[PT,DT,MT,LT]=OT();function bd(t,e){const n=e?t?LT:MT:t?DT:PT;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ke(n,i)&&i in r?n:r,i,s)}const FT={get:bd(!1,!1)},UT={get:bd(!1,!0)},VT={get:bd(!0,!1)},B_=new WeakMap,H_=new WeakMap,j_=new WeakMap,$T=new WeakMap;function BT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HT(t){return t.__v_skip||!Object.isExtensible(t)?0:BT(cT(t))}function Sa(t){return Is(t)?t:Ed(t,!1,$_,FT,B_)}function jT(t){return Ed(t,!1,xT,UT,H_)}function z_(t){return Ed(t,!0,NT,VT,j_)}function Ed(t,e,n,r,i){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=HT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function fs(t){return Is(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Jl(t){return!!(t&&t.__v_isShallow)}function q_(t){return fs(t)||Is(t)}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function W_(t){return Yl(t,"__v_skip",!0),t}const Qo=t=>Fe(t)?Sa(t):t,Id=t=>Fe(t)?z_(t):t;function K_(t){jr&&wn&&(t=Re(t),F_(t.dep||(t.dep=yd())))}function G_(t,e){t=Re(t);const n=t.dep;n&&$h(n)}function _t(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return Y_(t,!1)}function zT(t){return Y_(t,!0)}function Y_(t,e){return _t(t)?t:new qT(t,e)}class qT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Re(e),this._value=n?e:Qo(e)}get value(){return K_(this),this._value}set value(e){const n=this.__v_isShallow||Jl(e)||Is(e);e=n?e:Re(e),Yo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qo(e),G_(this))}}function S(t){return _t(t)?t.value:t}const WT={get:(t,e,n)=>S(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return _t(i)&&!_t(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Q_(t){return fs(t)?t:new Proxy(t,WT)}function KT(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=YT(t,n);return e}class GT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vT(Re(this._object),this._key)}}function YT(t,e,n){const r=t[e];return _t(r)?r:new GT(t,e,n)}var X_;class QT{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[X_]=!1,this._dirty=!0,this.effect=new vd(e,()=>{this._dirty||(this._dirty=!0,G_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Re(this);return K_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}X_="__v_isReadonly";function XT(t,e,n=!1){let r,i;const s=he(t);return s?(r=t,i=kn):(r=t.get,i=t.set),new QT(r,i,s||!i,n)}function zr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Gc(s,e,n)}return i}function An(t,e,n,r){if(he(t)){const s=zr(t,e,n,r);return s&&N_(s)&&s.catch(o=>{Gc(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(An(t[s],e,n,r));return i}function Gc(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){zr(l,null,10,[t,o,a]);return}}JT(t,n,i,r)}function JT(t,e,n,r=!0){console.error(t)}let Xo=!1,Bh=!1;const Ut=[];let Fn=0;const ds=[];let sr=null,gi=0;const J_=Promise.resolve();let Td=null;function Z_(t){const e=Td||J_;return t?e.then(this?t.bind(this):t):e}function ZT(t){let e=Fn+1,n=Ut.length;for(;e<n;){const r=e+n>>>1;Jo(Ut[r])<t?e=r+1:n=r}return e}function Cd(t){(!Ut.length||!Ut.includes(t,Xo&&t.allowRecurse?Fn+1:Fn))&&(t.id==null?Ut.push(t):Ut.splice(ZT(t.id),0,t),e0())}function e0(){!Xo&&!Bh&&(Bh=!0,Td=J_.then(n0))}function eC(t){const e=Ut.indexOf(t);e>Fn&&Ut.splice(e,1)}function tC(t){ne(t)?ds.push(...t):(!sr||!sr.includes(t,t.allowRecurse?gi+1:gi))&&ds.push(t),e0()}function tg(t,e=Xo?Fn+1:0){for(;e<Ut.length;e++){const n=Ut[e];n&&n.pre&&(Ut.splice(e,1),e--,n())}}function t0(t){if(ds.length){const e=[...new Set(ds)];if(ds.length=0,sr){sr.push(...e);return}for(sr=e,sr.sort((n,r)=>Jo(n)-Jo(r)),gi=0;gi<sr.length;gi++)sr[gi]();sr=null,gi=0}}const Jo=t=>t.id==null?1/0:t.id,nC=(t,e)=>{const n=Jo(t)-Jo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function n0(t){Bh=!1,Xo=!0,Ut.sort(nC);const e=kn;try{for(Fn=0;Fn<Ut.length;Fn++){const n=Ut[Fn];n&&n.active!==!1&&zr(n,null,14)}}finally{Fn=0,Ut.length=0,t0(),Xo=!1,Td=null,(Ut.length||ds.length)&&n0()}}function rC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ve;f&&(i=n.map(d=>rt(d)?d.trim():d)),h&&(i=n.map(Ql))}let a,l=r[a=Zu(e)]||r[a=Zu(Kn(e))];!l&&s&&(l=r[a=Zu(zs(e))]),l&&An(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,An(c,t,6,i)}}function r0(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!he(t)){const l=c=>{const u=r0(c,e,!0);u&&(a=!0,Jt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Fe(t)&&r.set(t,null),null):(ne(s)?s.forEach(l=>o[l]=null):Jt(o,s),Fe(t)&&r.set(t,o),o)}function Yc(t,e){return!t||!zc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,zs(e))||ke(t,e))}let Ct=null,Qc=null;function Zl(t){const e=Ct;return Ct=t,Qc=t&&t.type.__scopeId||null,e}function Ir(t){Qc=t}function Tr(){Qc=null}function or(t,e=Ct,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ug(-1);const s=Zl(e);let o;try{o=t(...i)}finally{Zl(s),r._d&&ug(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function eh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:y}=t;let w,v;const b=Zl(t);try{if(n.shapeFlag&4){const A=i||r;w=Ln(u.call(A,A,h,s,d,f,g)),v=l}else{const A=e;w=Ln(A.length>1?A(s,{attrs:l,slots:a,emit:c}):A(s,null)),v=e.props?l:iC(l)}}catch(A){Do.length=0,Gc(A,t,1),w=Se(Qr)}let _=w;if(v&&y!==!1){const A=Object.keys(v),{shapeFlag:U}=_;A.length&&U&7&&(o&&A.some(pd)&&(v=sC(v,o)),_=Ts(_,v))}return n.dirs&&(_=Ts(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),w=_,Zl(b),w}const iC=t=>{let e;for(const n in t)(n==="class"||n==="style"||zc(n))&&((e||(e={}))[n]=t[n]);return e},sC=(t,e)=>{const n={};for(const r in t)(!pd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function oC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ng(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Yc(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ng(r,o,c):!0:!!o;return!1}function ng(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Yc(n,s))return!0}return!1}function aC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lC=t=>t.__isSuspense;function cC(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):tC(t)}function ps(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function St(t,e,n=!1){const r=nt||Ct;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&he(e)?e.call(r.proxy):e}}function uC(t,e){return Sd(t,null,{flush:"post"})}const ul={};function Dt(t,e,n){return Sd(t,e,n)}function Sd(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ve){const a=mT()===(nt==null?void 0:nt.scope)?nt:null;let l,c=!1,u=!1;if(_t(t)?(l=()=>t.value,c=Jl(t)):fs(t)?(l=()=>t,r=!0):ne(t)?(u=!0,c=t.some(_=>fs(_)||Jl(_)),l=()=>t.map(_=>{if(_t(_))return _.value;if(fs(_))return vi(_);if(he(_))return zr(_,a,2)})):he(t)?e?l=()=>zr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),An(t,a,3,[f])}:l=kn,e&&r){const _=l;l=()=>vi(_())}let h,f=_=>{h=v.onStop=()=>{zr(_,a,4)}},d;if(ea)if(f=kn,e?n&&An(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const _=JC();d=_.__watcherHandles||(_.__watcherHandles=[])}else return kn;let g=u?new Array(t.length).fill(ul):ul;const y=()=>{if(v.active)if(e){const _=v.run();(r||c||(u?_.some((A,U)=>Yo(A,g[U])):Yo(_,g)))&&(h&&h(),An(e,a,3,[_,g===ul?void 0:u&&g[0]===ul?[]:g,f]),g=_)}else v.run()};y.allowRecurse=!!e;let w;i==="sync"?w=y:i==="post"?w=()=>en(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),w=()=>Cd(y));const v=new vd(l,w);e?n?y():g=v.run():i==="post"?en(v.run.bind(v),a&&a.suspense):v.run();const b=()=>{v.stop(),a&&a.scope&&md(a.scope.effects,v)};return d&&d.push(b),b}function hC(t,e,n){const r=this.proxy,i=rt(t)?t.includes(".")?i0(r,t):()=>r[t]:t.bind(r,r);let s;he(e)?s=e:(s=e.handler,n=e);const o=nt;Cs(this);const a=Sd(i,s.bind(r),n);return o?Cs(o):Si(),a}function i0(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function vi(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_t(t))vi(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)vi(t[n],e);else if(js(t)||hs(t))t.forEach(n=>{vi(n,e)});else if(O_(t))for(const n in t)vi(t[n],e);return t}function sn(t){return he(t)?{setup:t,name:t.name}:t}const xo=t=>!!t.type.__asyncLoader,s0=t=>t.type.__isKeepAlive;function fC(t,e){o0(t,"a",e)}function dC(t,e){o0(t,"da",e)}function o0(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)s0(i.parent.vnode)&&pC(r,e,n,i),i=i.parent}}function pC(t,e,n,r){const i=Xc(e,t,r,!0);Ad(()=>{md(r[e],i)},n)}function Xc(t,e,n=nt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qs(),Cs(n);const a=An(e,n,t,o);return Si(),Ws(),a});return r?i.unshift(s):i.push(s),s}}const Cr=t=>(e,n=nt)=>(!ea||t==="sp")&&Xc(t,(...r)=>e(...r),n),mC=Cr("bm"),Ks=Cr("m"),gC=Cr("bu"),yC=Cr("u"),kd=Cr("bum"),Ad=Cr("um"),vC=Cr("sp"),_C=Cr("rtg"),wC=Cr("rtc");function bC(t,e=nt){Xc("ec",t,e)}function R8(t,e){const n=Ct;if(n===null)return t;const r=eu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ve]=e[s];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&vi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function hi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(qs(),An(l,n,8,[t.el,a,t,e]),Ws())}}const Rd="components";function Hh(t,e){return l0(Rd,t,!0,e)||t}const a0=Symbol();function N8(t){return rt(t)?l0(Rd,t,!1)||t:t||a0}function l0(t,e,n=!0,r=!1){const i=Ct||nt;if(i){const s=i.type;if(t===Rd){const a=GC(s,!1);if(a&&(a===e||a===Kn(e)||a===Wc(Kn(e))))return s}const o=rg(i[t]||s[t],e)||rg(i.appContext[t],e);return!o&&r?s:o}}function rg(t,e){return t&&(t[e]||t[Kn(e)]||t[Wc(Kn(e))])}function rs(t,e,n,r){let i;const s=n&&n[r];if(ne(t)||rt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function EC(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ne(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function Gt(t,e,n={},r,i){if(Ct.isCE||Ct.parent&&xo(Ct.parent)&&Ct.parent.isCE)return e!=="default"&&(n.name=e),Se("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),re();const o=s&&c0(s(n)),a=Un(et,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function c0(t){return t.some(e=>tc(e)?!(e.type===Qr||e.type===et&&!c0(e.children)):!0)?t:null}const jh=t=>t?w0(t)?eu(t)||t.proxy:jh(t.parent):null,Oo=Jt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jh(t.parent),$root:t=>jh(t.root),$emit:t=>t.emit,$options:t=>Nd(t),$forceUpdate:t=>t.f||(t.f=()=>Cd(t.update)),$nextTick:t=>t.n||(t.n=Z_.bind(t.proxy)),$watch:t=>hC.bind(t)}),th=(t,e)=>t!==Ve&&!t.__isScriptSetup&&ke(t,e),IC={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(th(r,e))return o[e]=1,r[e];if(i!==Ve&&ke(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ke(c,e))return o[e]=3,s[e];if(n!==Ve&&ke(n,e))return o[e]=4,n[e];zh&&(o[e]=0)}}const u=Oo[e];let h,f;if(u)return e==="$attrs"&&rn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&ke(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return th(i,e)?(i[e]=n,!0):r!==Ve&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ve&&ke(t,o)||th(e,o)||(a=s[0])&&ke(a,o)||ke(r,o)||ke(Oo,o)||ke(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zh=!0;function TC(t){const e=Nd(t),n=t.proxy,r=t.ctx;zh=!1,e.beforeCreate&&ig(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:y,deactivated:w,beforeDestroy:v,beforeUnmount:b,destroyed:_,unmounted:A,render:U,renderTracked:Z,renderTriggered:F,errorCaptured:de,serverPrefetch:ge,expose:Ke,inheritAttrs:Kt,components:at,directives:le,filters:Rt}=e;if(c&&CC(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const we=o[Te];he(we)&&(r[Te]=we.bind(n))}if(i){const Te=i.call(n,n);Fe(Te)&&(t.data=Sa(Te))}if(zh=!0,s)for(const Te in s){const we=s[Te],dt=he(we)?we.bind(n,n):he(we.get)?we.get.bind(n,n):kn,Ge=!he(we)&&he(we.set)?we.set.bind(n):kn,bt=W({get:dt,set:Ge});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Nt=>bt.value=Nt})}if(a)for(const Te in a)u0(a[Te],r,n,Te);if(l){const Te=he(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(we=>{ps(we,Te[we])})}u&&ig(u,t,"c");function _e(Te,we){ne(we)?we.forEach(dt=>Te(dt.bind(n))):we&&Te(we.bind(n))}if(_e(mC,h),_e(Ks,f),_e(gC,d),_e(yC,g),_e(fC,y),_e(dC,w),_e(bC,de),_e(wC,Z),_e(_C,F),_e(kd,b),_e(Ad,A),_e(vC,ge),ne(Ke))if(Ke.length){const Te=t.exposed||(t.exposed={});Ke.forEach(we=>{Object.defineProperty(Te,we,{get:()=>n[we],set:dt=>n[we]=dt})})}else t.exposed||(t.exposed={});U&&t.render===kn&&(t.render=U),Kt!=null&&(t.inheritAttrs=Kt),at&&(t.components=at),le&&(t.directives=le)}function CC(t,e,n=kn,r=!1){ne(t)&&(t=qh(t));for(const i in t){const s=t[i];let o;Fe(s)?"default"in s?o=St(s.from||i,s.default,!0):o=St(s.from||i):o=St(s),_t(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ig(t,e,n){An(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function u0(t,e,n,r){const i=r.includes(".")?i0(n,r):()=>n[r];if(rt(t)){const s=e[t];he(s)&&Dt(i,s)}else if(he(t))Dt(i,t.bind(n));else if(Fe(t))if(ne(t))t.forEach(s=>u0(s,e,n,r));else{const s=he(t.handler)?t.handler.bind(n):e[t.handler];he(s)&&Dt(i,s,t)}}function Nd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>ec(l,c,o,!0)),ec(l,e,o)),Fe(e)&&s.set(e,l),l}function ec(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ec(t,s,n,!0),i&&i.forEach(o=>ec(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=SC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const SC={data:sg,props:di,emits:di,methods:di,computed:di,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:di,directives:di,watch:AC,provide:sg,inject:kC};function sg(t,e){return e?t?function(){return Jt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function kC(t,e){return di(qh(t),qh(e))}function qh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?Jt(Jt(Object.create(null),t),e):e}function AC(t,e){if(!t)return e;if(!e)return t;const n=Jt(Object.create(null),t);for(const r in e)n[r]=Yt(t[r],e[r]);return n}function RC(t,e,n,r=!1){const i={},s={};Yl(s,Zc,1),t.propsDefaults=Object.create(null),h0(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:jT(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function NC(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Re(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yc(t.emitsOptions,f))continue;const d=e[f];if(l)if(ke(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Kn(f);i[g]=Wh(l,a,g,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{h0(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=zs(h))===h||!ke(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wh(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ke(e,h))&&(delete s[h],c=!0)}c&&pr(t,"set","$attrs")}function h0(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Dl(l))continue;const c=e[l];let u;i&&ke(i,u=Kn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Yc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Re(n),c=a||Ve;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Wh(i,l,h,c[h],t,!ke(c,h))}}return o}function Wh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&he(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Cs(i),r=c[n]=l.call(null,e),Si())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===zs(n))&&(r=!0))}return r}function f0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!he(t)){const u=h=>{l=!0;const[f,d]=f0(h,e,!0);Jt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Fe(t)&&r.set(t,us),us;if(ne(s))for(let u=0;u<s.length;u++){const h=Kn(s[u]);og(h)&&(o[h]=Ve)}else if(s)for(const u in s){const h=Kn(u);if(og(h)){const f=s[u],d=o[h]=ne(f)||he(f)?{type:f}:Object.assign({},f);if(d){const g=cg(Boolean,d.type),y=cg(String,d.type);d[0]=g>-1,d[1]=y<0||g<y,(g>-1||ke(d,"default"))&&a.push(h)}}}const c=[o,a];return Fe(t)&&r.set(t,c),c}function og(t){return t[0]!=="$"}function ag(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lg(t,e){return ag(t)===ag(e)}function cg(t,e){return ne(e)?e.findIndex(n=>lg(n,t)):he(e)&&lg(e,t)?0:-1}const d0=t=>t[0]==="_"||t==="$stable",xd=t=>ne(t)?t.map(Ln):[Ln(t)],xC=(t,e,n)=>{if(e._n)return e;const r=or((...i)=>xd(e(...i)),n);return r._c=!1,r},p0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(d0(i))continue;const s=t[i];if(he(s))e[i]=xC(i,s,r);else if(s!=null){const o=xd(s);e[i]=()=>o}}},m0=(t,e)=>{const n=xd(e);t.slots.default=()=>n},OC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Re(e),Yl(e,"_",n)):p0(e,t.slots={})}else t.slots={},e&&m0(t,e);Yl(t.slots,Zc,1)},PC=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Jt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,p0(e,i)),o=e}else e&&(m0(t,e),o={default:1});if(s)for(const a in i)!d0(a)&&!(a in o)&&delete i[a]};function g0(){return{app:null,config:{isNativeTag:oT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let DC=0;function MC(t,e){return function(r,i=null){he(r)||(r=Object.assign({},r)),i!=null&&!Fe(i)&&(i=null);const s=g0(),o=new Set;let a=!1;const l=s.app={_uid:DC++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ZC,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&he(c.install)?(o.add(c),c.install(l,...u)):he(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Se(r,i);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,eu(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Kh(t,e,n,r,i=!1){if(ne(t)){t.forEach((f,d)=>Kh(f,e&&(ne(e)?e[d]:e),n,r,i));return}if(xo(r)&&!i)return;const s=r.shapeFlag&4?eu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(rt(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):_t(c)&&(c.value=null)),he(l))zr(l,a,12,[o,u]);else{const f=rt(l),d=_t(l);if(f||d){const g=()=>{if(t.f){const y=f?ke(h,l)?h[l]:u[l]:l.value;i?ne(y)&&md(y,s):ne(y)?y.includes(s)||y.push(s):f?(u[l]=[s],ke(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,en(g,n)):g()}}}const en=cC;function LC(t){return FC(t)}function FC(t,e){const n=fT();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=kn,insertStaticContent:g}=t,y=(p,m,E,I=null,k=null,O=null,L=!1,N=null,P=!!m.dynamicChildren)=>{if(p===m)return;p&&!fo(p,m)&&(I=M(p),Nt(p,k,O,!0),p=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:R,ref:X,shapeFlag:H}=m;switch(R){case Jc:w(p,m,E,I);break;case Qr:v(p,m,E,I);break;case Po:p==null&&b(m,E,I,L);break;case et:at(p,m,E,I,k,O,L,N,P);break;default:H&1?U(p,m,E,I,k,O,L,N,P):H&6?le(p,m,E,I,k,O,L,N,P):(H&64||H&128)&&R.process(p,m,E,I,k,O,L,N,P,me)}X!=null&&k&&Kh(X,p&&p.ref,O,m||p,!m)},w=(p,m,E,I)=>{if(p==null)r(m.el=a(m.children),E,I);else{const k=m.el=p.el;m.children!==p.children&&c(k,m.children)}},v=(p,m,E,I)=>{p==null?r(m.el=l(m.children||""),E,I):m.el=p.el},b=(p,m,E,I)=>{[p.el,p.anchor]=g(p.children,m,E,I,p.el,p.anchor)},_=({el:p,anchor:m},E,I)=>{let k;for(;p&&p!==m;)k=f(p),r(p,E,I),p=k;r(m,E,I)},A=({el:p,anchor:m})=>{let E;for(;p&&p!==m;)E=f(p),i(p),p=E;i(m)},U=(p,m,E,I,k,O,L,N,P)=>{L=L||m.type==="svg",p==null?Z(m,E,I,k,O,L,N,P):ge(p,m,k,O,L,N,P)},Z=(p,m,E,I,k,O,L,N)=>{let P,R;const{type:X,props:H,shapeFlag:j,transition:ie,dirs:pe}=p;if(P=p.el=o(p.type,O,H&&H.is,H),j&8?u(P,p.children):j&16&&de(p.children,P,null,I,k,O&&X!=="foreignObject",L,N),pe&&hi(p,null,I,"created"),F(P,p,p.scopeId,L,I),H){for(const Ce in H)Ce!=="value"&&!Dl(Ce)&&s(P,Ce,null,H[Ce],O,p.children,I,k,V);"value"in H&&s(P,"value",null,H.value),(R=H.onVnodeBeforeMount)&&Dn(R,I,p)}pe&&hi(p,null,I,"beforeMount");const Pe=(!k||k&&!k.pendingBranch)&&ie&&!ie.persisted;Pe&&ie.beforeEnter(P),r(P,m,E),((R=H&&H.onVnodeMounted)||Pe||pe)&&en(()=>{R&&Dn(R,I,p),Pe&&ie.enter(P),pe&&hi(p,null,I,"mounted")},k)},F=(p,m,E,I,k)=>{if(E&&d(p,E),I)for(let O=0;O<I.length;O++)d(p,I[O]);if(k){let O=k.subTree;if(m===O){const L=k.vnode;F(p,L,L.scopeId,L.slotScopeIds,k.parent)}}},de=(p,m,E,I,k,O,L,N,P=0)=>{for(let R=P;R<p.length;R++){const X=p[R]=N?Mr(p[R]):Ln(p[R]);y(null,X,m,E,I,k,O,L,N)}},ge=(p,m,E,I,k,O,L)=>{const N=m.el=p.el;let{patchFlag:P,dynamicChildren:R,dirs:X}=m;P|=p.patchFlag&16;const H=p.props||Ve,j=m.props||Ve;let ie;E&&fi(E,!1),(ie=j.onVnodeBeforeUpdate)&&Dn(ie,E,m,p),X&&hi(m,p,E,"beforeUpdate"),E&&fi(E,!0);const pe=k&&m.type!=="foreignObject";if(R?Ke(p.dynamicChildren,R,N,E,I,pe,O):L||we(p,m,N,null,E,I,pe,O,!1),P>0){if(P&16)Kt(N,m,H,j,E,I,k);else if(P&2&&H.class!==j.class&&s(N,"class",null,j.class,k),P&4&&s(N,"style",H.style,j.style,k),P&8){const Pe=m.dynamicProps;for(let Ce=0;Ce<Pe.length;Ce++){const Qe=Pe[Ce],on=H[Qe],xt=j[Qe];(xt!==on||Qe==="value")&&s(N,Qe,on,xt,k,p.children,E,I,V)}}P&1&&p.children!==m.children&&u(N,m.children)}else!L&&R==null&&Kt(N,m,H,j,E,I,k);((ie=j.onVnodeUpdated)||X)&&en(()=>{ie&&Dn(ie,E,m,p),X&&hi(m,p,E,"updated")},I)},Ke=(p,m,E,I,k,O,L)=>{for(let N=0;N<m.length;N++){const P=p[N],R=m[N],X=P.el&&(P.type===et||!fo(P,R)||P.shapeFlag&70)?h(P.el):E;y(P,R,X,null,I,k,O,L,!0)}},Kt=(p,m,E,I,k,O,L)=>{if(E!==I){if(E!==Ve)for(const N in E)!Dl(N)&&!(N in I)&&s(p,N,E[N],null,L,m.children,k,O,V);for(const N in I){if(Dl(N))continue;const P=I[N],R=E[N];P!==R&&N!=="value"&&s(p,N,R,P,L,m.children,k,O,V)}"value"in I&&s(p,"value",E.value,I.value)}},at=(p,m,E,I,k,O,L,N,P)=>{const R=m.el=p?p.el:a(""),X=m.anchor=p?p.anchor:a("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:ie}=m;ie&&(N=N?N.concat(ie):ie),p==null?(r(R,E,I),r(X,E,I),de(m.children,E,X,k,O,L,N,P)):H>0&&H&64&&j&&p.dynamicChildren?(Ke(p.dynamicChildren,j,E,k,O,L,N),(m.key!=null||k&&m===k.subTree)&&y0(p,m,!0)):we(p,m,E,X,k,O,L,N,P)},le=(p,m,E,I,k,O,L,N,P)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?k.ctx.activate(m,E,I,L,P):Rt(m,E,I,k,O,L,P):qe(p,m,P)},Rt=(p,m,E,I,k,O,L)=>{const N=p.component=zC(p,I,k);if(s0(p)&&(N.ctx.renderer=me),qC(N),N.asyncDep){if(k&&k.registerDep(N,_e),!p.el){const P=N.subTree=Se(Qr);v(null,P,m,E)}return}_e(N,p,m,E,k,O,L)},qe=(p,m,E)=>{const I=m.component=p.component;if(oC(p,m,E))if(I.asyncDep&&!I.asyncResolved){Te(I,m,E);return}else I.next=m,eC(I.update),I.update();else m.el=p.el,I.vnode=m},_e=(p,m,E,I,k,O,L)=>{const N=()=>{if(p.isMounted){let{next:X,bu:H,u:j,parent:ie,vnode:pe}=p,Pe=X,Ce;fi(p,!1),X?(X.el=pe.el,Te(p,X,L)):X=pe,H&&Ml(H),(Ce=X.props&&X.props.onVnodeBeforeUpdate)&&Dn(Ce,ie,X,pe),fi(p,!0);const Qe=eh(p),on=p.subTree;p.subTree=Qe,y(on,Qe,h(on.el),M(on),p,k,O),X.el=Qe.el,Pe===null&&aC(p,Qe.el),j&&en(j,k),(Ce=X.props&&X.props.onVnodeUpdated)&&en(()=>Dn(Ce,ie,X,pe),k)}else{let X;const{el:H,props:j}=m,{bm:ie,m:pe,parent:Pe}=p,Ce=xo(m);if(fi(p,!1),ie&&Ml(ie),!Ce&&(X=j&&j.onVnodeBeforeMount)&&Dn(X,Pe,m),fi(p,!0),H&&ce){const Qe=()=>{p.subTree=eh(p),ce(H,p.subTree,p,k,null)};Ce?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Qe()):Qe()}else{const Qe=p.subTree=eh(p);y(null,Qe,E,I,p,k,O),m.el=Qe.el}if(pe&&en(pe,k),!Ce&&(X=j&&j.onVnodeMounted)){const Qe=m;en(()=>Dn(X,Pe,Qe),k)}(m.shapeFlag&256||Pe&&xo(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&en(p.a,k),p.isMounted=!0,m=E=I=null}},P=p.effect=new vd(N,()=>Cd(R),p.scope),R=p.update=()=>P.run();R.id=p.uid,fi(p,!0),R()},Te=(p,m,E)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,NC(p,m.props,I,E),PC(p,m.children,E),qs(),tg(),Ws()},we=(p,m,E,I,k,O,L,N,P=!1)=>{const R=p&&p.children,X=p?p.shapeFlag:0,H=m.children,{patchFlag:j,shapeFlag:ie}=m;if(j>0){if(j&128){Ge(R,H,E,I,k,O,L,N,P);return}else if(j&256){dt(R,H,E,I,k,O,L,N,P);return}}ie&8?(X&16&&V(R,k,O),H!==R&&u(E,H)):X&16?ie&16?Ge(R,H,E,I,k,O,L,N,P):V(R,k,O,!0):(X&8&&u(E,""),ie&16&&de(H,E,I,k,O,L,N,P))},dt=(p,m,E,I,k,O,L,N,P)=>{p=p||us,m=m||us;const R=p.length,X=m.length,H=Math.min(R,X);let j;for(j=0;j<H;j++){const ie=m[j]=P?Mr(m[j]):Ln(m[j]);y(p[j],ie,E,null,k,O,L,N,P)}R>X?V(p,k,O,!0,!1,H):de(m,E,I,k,O,L,N,P,H)},Ge=(p,m,E,I,k,O,L,N,P)=>{let R=0;const X=m.length;let H=p.length-1,j=X-1;for(;R<=H&&R<=j;){const ie=p[R],pe=m[R]=P?Mr(m[R]):Ln(m[R]);if(fo(ie,pe))y(ie,pe,E,null,k,O,L,N,P);else break;R++}for(;R<=H&&R<=j;){const ie=p[H],pe=m[j]=P?Mr(m[j]):Ln(m[j]);if(fo(ie,pe))y(ie,pe,E,null,k,O,L,N,P);else break;H--,j--}if(R>H){if(R<=j){const ie=j+1,pe=ie<X?m[ie].el:I;for(;R<=j;)y(null,m[R]=P?Mr(m[R]):Ln(m[R]),E,pe,k,O,L,N,P),R++}}else if(R>j)for(;R<=H;)Nt(p[R],k,O,!0),R++;else{const ie=R,pe=R,Pe=new Map;for(R=pe;R<=j;R++){const lt=m[R]=P?Mr(m[R]):Ln(m[R]);lt.key!=null&&Pe.set(lt.key,R)}let Ce,Qe=0;const on=j-pe+1;let xt=!1,Ar=0;const gn=new Array(on);for(R=0;R<on;R++)gn[R]=0;for(R=ie;R<=H;R++){const lt=p[R];if(Qe>=on){Nt(lt,k,O,!0);continue}let Ot;if(lt.key!=null)Ot=Pe.get(lt.key);else for(Ce=pe;Ce<=j;Ce++)if(gn[Ce-pe]===0&&fo(lt,m[Ce])){Ot=Ce;break}Ot===void 0?Nt(lt,k,O,!0):(gn[Ot-pe]=R+1,Ot>=Ar?Ar=Ot:xt=!0,y(lt,m[Ot],E,null,k,O,L,N,P),Qe++)}const Rr=xt?UC(gn):us;for(Ce=Rr.length-1,R=on-1;R>=0;R--){const lt=pe+R,Ot=m[lt],Nr=lt+1<X?m[lt+1].el:I;gn[R]===0?y(null,Ot,E,Nr,k,O,L,N,P):xt&&(Ce<0||R!==Rr[Ce]?bt(Ot,E,Nr,2):Ce--)}}},bt=(p,m,E,I,k=null)=>{const{el:O,type:L,transition:N,children:P,shapeFlag:R}=p;if(R&6){bt(p.component.subTree,m,E,I);return}if(R&128){p.suspense.move(m,E,I);return}if(R&64){L.move(p,m,E,me);return}if(L===et){r(O,m,E);for(let H=0;H<P.length;H++)bt(P[H],m,E,I);r(p.anchor,m,E);return}if(L===Po){_(p,m,E);return}if(I!==2&&R&1&&N)if(I===0)N.beforeEnter(O),r(O,m,E),en(()=>N.enter(O),k);else{const{leave:H,delayLeave:j,afterLeave:ie}=N,pe=()=>r(O,m,E),Pe=()=>{H(O,()=>{pe(),ie&&ie()})};j?j(O,pe,Pe):Pe()}else r(O,m,E)},Nt=(p,m,E,I=!1,k=!1)=>{const{type:O,props:L,ref:N,children:P,dynamicChildren:R,shapeFlag:X,patchFlag:H,dirs:j}=p;if(N!=null&&Kh(N,null,E,p,!0),X&256){m.ctx.deactivate(p);return}const ie=X&1&&j,pe=!xo(p);let Pe;if(pe&&(Pe=L&&L.onVnodeBeforeUnmount)&&Dn(Pe,m,p),X&6)C(p.component,E,I);else{if(X&128){p.suspense.unmount(E,I);return}ie&&hi(p,null,m,"beforeUnmount"),X&64?p.type.remove(p,m,E,k,me,I):R&&(O!==et||H>0&&H&64)?V(R,m,E,!1,!0):(O===et&&H&384||!k&&X&16)&&V(P,m,E),I&&pt(p)}(pe&&(Pe=L&&L.onVnodeUnmounted)||ie)&&en(()=>{Pe&&Dn(Pe,m,p),ie&&hi(p,null,m,"unmounted")},E)},pt=p=>{const{type:m,el:E,anchor:I,transition:k}=p;if(m===et){Xi(E,I);return}if(m===Po){A(p);return}const O=()=>{i(E),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:L,delayLeave:N}=k,P=()=>L(E,O);N?N(p.el,O,P):P()}else O()},Xi=(p,m)=>{let E;for(;p!==m;)E=f(p),i(p),p=E;i(m)},C=(p,m,E)=>{const{bum:I,scope:k,update:O,subTree:L,um:N}=p;I&&Ml(I),k.stop(),O&&(O.active=!1,Nt(L,p,m,E)),N&&en(N,m),en(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},V=(p,m,E,I=!1,k=!1,O=0)=>{for(let L=O;L<p.length;L++)Nt(p[L],m,E,I,k)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),G=(p,m,E)=>{p==null?m._vnode&&Nt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,E),tg(),t0(),m._vnode=p},me={p:y,um:Nt,m:bt,r:pt,mt:Rt,mc:de,pc:we,pbc:Ke,n:M,o:t};let Me,ce;return e&&([Me,ce]=e(me)),{render:G,hydrate:Me,createApp:MC(G,Me)}}function fi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function y0(t,e,n=!1){const r=t.children,i=e.children;if(ne(r)&&ne(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Mr(i[s]),a.el=o.el),n||y0(o,a)),a.type===Jc&&(a.el=o.el)}}function UC(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const VC=t=>t.__isTeleport,et=Symbol(void 0),Jc=Symbol(void 0),Qr=Symbol(void 0),Po=Symbol(void 0),Do=[];let In=null;function re(t=!1){Do.push(In=t?null:[])}function $C(){Do.pop(),In=Do[Do.length-1]||null}let Zo=1;function ug(t){Zo+=t}function v0(t){return t.dynamicChildren=Zo>0?In||us:null,$C(),Zo>0&&In&&In.push(t),t}function fe(t,e,n,r,i,s){return v0(K(t,e,n,r,i,s,!0))}function Un(t,e,n,r,i){return v0(Se(t,e,n,r,i,!0))}function tc(t){return t?t.__v_isVNode===!0:!1}function fo(t,e){return t.type===e.type&&t.key===e.key}const Zc="__vInternal",_0=({key:t})=>t??null,Ll=({ref:t,ref_key:e,ref_for:n})=>t!=null?rt(t)||_t(t)||he(t)?{i:Ct,r:t,k:e,f:!!n}:t:null;function K(t,e=null,n=null,r=0,i=null,s=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_0(e),ref:e&&Ll(e),scopeId:Qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ct};return a?(Od(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=rt(n)?8:16),Zo>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const Se=BC;function BC(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===a0)&&(t=Qr),tc(t)){const a=Ts(t,e,!0);return n&&Od(a,n),Zo>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(t)]=a:In.push(a)),a.patchFlag|=-2,a}if(YC(t)&&(t=t.__vccOpts),e){e=Fl(e);let{class:a,style:l}=e;a&&!rt(a)&&(e.class=Je(a)),Fe(l)&&(q_(l)&&!ne(l)&&(l=Jt({},l)),e.style=Hr(l))}const o=rt(t)?1:lC(t)?128:VC(t)?64:Fe(t)?4:he(t)?2:0;return K(t,e,n,r,i,o,s,!0)}function Fl(t){return t?q_(t)||Zc in t?Jt({},t):t:null}function Ts(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?ir(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_0(a),ref:e&&e.ref?n&&i?ne(i)?i.concat(Ll(e)):[i,Ll(e)]:Ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mn(t=" ",e=0){return Se(Jc,null,t,e)}function x8(t,e){const n=Se(Po,null,t);return n.staticCount=e,n}function vn(t="",e=!1){return e?(re(),Un(Qr,null,t)):Se(Qr,null,t)}function Ln(t){return t==null||typeof t=="boolean"?Se(Qr):ne(t)?Se(et,null,t.slice()):typeof t=="object"?Mr(t):Se(Jc,null,String(t))}function Mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function Od(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Od(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zc in e)?e._ctx=Ct:i===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ir(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Je([e.class,r.class]));else if(i==="style")e.style=Hr([e.style,r.style]);else if(zc(i)){const s=e[i],o=r[i];o&&s!==o&&!(ne(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Dn(t,e,n,r=null){An(t,e,7,[n,r])}const HC=g0();let jC=0;function zC(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||HC,s={uid:jC++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new P_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f0(r,i),emitsOptions:r0(r,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=rC.bind(null,s),t.ce&&t.ce(s),s}let nt=null;const Pd=()=>nt||Ct,Cs=t=>{nt=t,t.scope.on()},Si=()=>{nt&&nt.scope.off(),nt=null};function w0(t){return t.vnode.shapeFlag&4}let ea=!1;function qC(t,e=!1){ea=e;const{props:n,children:r}=t.vnode,i=w0(t);RC(t,n,i,e),OC(t,r);const s=i?WC(t,e):void 0;return ea=!1,s}function WC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=W_(new Proxy(t.ctx,IC));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?E0(t):null;Cs(t),qs();const s=zr(r,t,0,[t.props,i]);if(Ws(),Si(),N_(s)){if(s.then(Si,Si),e)return s.then(o=>{hg(t,o,e)}).catch(o=>{Gc(o,t,0)});t.asyncDep=s}else hg(t,s,e)}else b0(t,e)}function hg(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Q_(e)),b0(t,n)}let fg;function b0(t,e,n){const r=t.type;if(!t.render){if(!e&&fg&&!r.render){const i=r.template||Nd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Jt(Jt({isCustomElement:s,delimiters:a},o),l);r.render=fg(i,c)}}t.render=r.render||kn}Cs(t),qs(),TC(t),Ws(),Si()}function KC(t){return new Proxy(t.attrs,{get(e,n){return rn(t,"get","$attrs"),e[n]}})}function E0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=KC(t))},slots:t.slots,emit:t.emit,expose:e}}function eu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Q_(W_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oo)return Oo[n](t)},has(e,n){return n in e||n in Oo}}))}function GC(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function YC(t){return he(t)&&"__vccOpts"in t}const W=(t,e)=>XT(t,e,ea);function I0(){return QC().slots}function QC(){const t=Pd();return t.setupContext||(t.setupContext=E0(t))}function ka(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ne(e)?tc(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&tc(n)&&(n=[n]),Se(t,e,n))}const XC=Symbol(""),JC=()=>St(XC),ZC="3.2.47",eS="http://www.w3.org/2000/svg",yi=typeof document<"u"?document:null,dg=yi&&yi.createElement("template"),tS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?yi.createElementNS(eS,t):yi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>yi.createTextNode(t),createComment:t=>yi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{dg.innerHTML=r?`<svg>${t}</svg>`:t;const a=dg.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nS(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rS(t,e,n){const r=t.style,i=rt(n);if(n&&!i){if(e&&!rt(e))for(const s in e)n[s]==null&&Gh(r,s,"");for(const s in n)Gh(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const pg=/\s*!important$/;function Gh(t,e,n){if(ne(n))n.forEach(r=>Gh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iS(t,e);pg.test(n)?t.setProperty(zs(r),n.replace(pg,""),"important"):t[r]=n}}const mg=["Webkit","Moz","ms"],nh={};function iS(t,e){const n=nh[e];if(n)return n;let r=Kn(e);if(r!=="filter"&&r in t)return nh[e]=r;r=Wc(r);for(let i=0;i<mg.length;i++){const s=mg[i]+r;if(s in t)return nh[e]=s}return e}const gg="http://www.w3.org/1999/xlink";function sS(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gg,e.slice(6,e.length)):t.setAttributeNS(gg,e,n);else{const s=iT(e);n==null||s&&!A_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function oS(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=A_(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ar(t,e,n,r){t.addEventListener(e,n,r)}function aS(t,e,n,r){t.removeEventListener(e,n,r)}function lS(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=cS(e);if(r){const c=s[e]=fS(r,i);ar(t,a,c,l)}else o&&(aS(t,a,o,l),s[e]=void 0)}}const yg=/(?:Once|Passive|Capture)$/;function cS(t){let e;if(yg.test(t)){e={};let r;for(;r=t.match(yg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zs(t.slice(2)),e]}let rh=0;const uS=Promise.resolve(),hS=()=>rh||(uS.then(()=>rh=0),rh=Date.now());function fS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(dS(r,n.value),e,5,[r])};return n.value=t,n.attached=hS(),n}function dS(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const vg=/^on[a-z]/,pS=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?nS(t,r,i):e==="style"?rS(t,n,r):zc(e)?pd(e)||lS(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mS(t,e,r,i))?oS(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sS(t,e,r,i))};function mS(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&vg.test(e)&&he(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vg.test(e)&&rt(n)?!1:e in t}function zi(t){const e=Pd();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Qh(s,i))},r=()=>{const i=t(e.proxy);Yh(e.subTree,i),n(i)};uC(r),Ks(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Ad(()=>i.disconnect())})}function Yh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Yh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Qh(t.el,e);else if(t.type===et)t.children.forEach(n=>Yh(n,e));else if(t.type===Po){let{el:n,anchor:r}=t;for(;n&&(Qh(n,e),n!==r);)n=n.nextSibling}}function Qh(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const Xr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Ml(e,n):e};function gS(t){t.target.composing=!0}function _g(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wg={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Xr(i);const s=r||i.props&&i.props.type==="number";ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ql(a)),t._assign(a)}),n&&ar(t,"change",()=>{t.value=t.value.trim()}),e||(ar(t,"compositionstart",gS),ar(t,"compositionend",_g),ar(t,"change",_g))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Xr(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ql(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yS={deep:!0,created(t,e,n){t._assign=Xr(n),ar(t,"change",()=>{const r=t._modelValue,i=Ss(t),s=t.checked,o=t._assign;if(ne(r)){const a=dd(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(js(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(T0(t,s))})},mounted:bg,beforeUpdate(t,e,n){t._assign=Xr(n),bg(t,e,n)}};function bg(t,{value:e,oldValue:n},r){t._modelValue=e,ne(e)?t.checked=dd(e,r.props.value)>-1:js(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=xi(e,T0(t,!0)))}const vS={created(t,{value:e},n){t.checked=xi(e,n.props.value),t._assign=Xr(n),ar(t,"change",()=>{t._assign(Ss(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Xr(r),e!==n&&(t.checked=xi(e,r.props.value))}},_S={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=js(e);ar(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ql(Ss(o)):Ss(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=Xr(r)},mounted(t,{value:e}){Eg(t,e)},beforeUpdate(t,e,n){t._assign=Xr(n)},updated(t,{value:e}){Eg(t,e)}};function Eg(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!js(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Ss(s);if(n)ne(e)?s.selected=dd(e,o)>-1:s.selected=e.has(o);else if(xi(Ss(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ss(t){return"_value"in t?t._value:t.value}function T0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const O8={created(t,e,n){hl(t,e,n,null,"created")},mounted(t,e,n){hl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){hl(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){hl(t,e,n,r,"updated")}};function wS(t,e){switch(t){case"SELECT":return _S;case"TEXTAREA":return wg;default:switch(e){case"checkbox":return yS;case"radio":return vS;default:return wg}}}function hl(t,e,n,r,i){const o=wS(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}const bS=["ctrl","shift","alt","meta"],ES={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bS.some(n=>t[`${n}Key`]&&!e.includes(n))},ks=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=ES[e[i]];if(s&&s(n,e))return}return t(n,...r)},IS=Jt({patchProp:pS},tS);let Ig;function TS(){return Ig||(Ig=LC(IS))}const C0=(...t)=>{const e=TS().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=CS(r);if(!i)return;const s=e._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function CS(t){return rt(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Gs(e)},Gs=function(t){return new Error("Firebase Database ("+S0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A0=function(t){const e=k0(t);return tu.encodeByteArray(e,!0)},nc=function(t){return A0(t).replace(/\./g,"")},rc=function(t){try{return tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){return R0(void 0,t)}function R0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!AS(n)||(t[n]=R0(t[n],e[n]));return t}function AS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=()=>RS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rc(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return NS()||xS()||OS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},N0=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PS=t=>{const e=N0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DS=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function LS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function O0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P0(){return S0.NODE_ADMIN===!0}function D0(){try{return typeof indexedDB=="object"}catch{return!1}}function US(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VS,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$S(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function $S(t,e){return t.replace(BS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){return JSON.parse(t)}function Tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=na(rc(s[0])||""),n=na(rc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},HS=function(t){const e=M0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jS=function(t){const e=M0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function As(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ic(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tg(s)&&Tg(o)){if(!sc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function To(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qS(t,e){const n=new WS(t,e);return n.subscribe.bind(n)}class WS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}function GS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JS(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===pi?void 0:t}function JS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const ek={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},tk=Ae.INFO,nk={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let Cg,Sg;function sk(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ok(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L0=new WeakMap,Jh=new WeakMap,F0=new WeakMap,sh=new WeakMap,Ld=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&L0.set(n,t)}).catch(()=>{}),Ld.set(e,t),e}function lk(t){if(Jh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jh.set(t,e)}let Zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ck(t){Zh=t(Zh)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return F0.set(r,e.sort?e.sort():[e]),qr(r)}:ok().includes(t)?function(...e){return t.apply(oh(this),e),qr(L0.get(this))}:function(...e){return qr(t.apply(oh(this),e))}}function hk(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&lk(t),ik(t,sk())?new Proxy(t,Zh):t)}function qr(t){if(t instanceof IDBRequest)return ak(t);if(sh.has(t))return sh.get(t);const e=hk(t);return e!==t&&(sh.set(t,e),Ld.set(e,t)),e}const oh=t=>Ld.get(t);function fk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qr(o.result),l.oldVersion,l.newVersion,qr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],ah=new Map;function kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ah.set(e,s),s}ck(t=>({...t,get:(e,n,r)=>kg(e,n)||t.get(e,n,r),has:(e,n)=>!!kg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ef="@firebase/app",Ag="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Aa("@firebase/app"),yk="@firebase/app-compat",vk="@firebase/analytics-compat",_k="@firebase/analytics",wk="@firebase/app-check-compat",bk="@firebase/app-check",Ek="@firebase/auth",Ik="@firebase/auth-compat",Tk="@firebase/database",Ck="@firebase/database-compat",Sk="@firebase/functions",kk="@firebase/functions-compat",Ak="@firebase/installations",Rk="@firebase/installations-compat",Nk="@firebase/messaging",xk="@firebase/messaging-compat",Ok="@firebase/performance",Pk="@firebase/performance-compat",Dk="@firebase/remote-config",Mk="@firebase/remote-config-compat",Lk="@firebase/storage",Fk="@firebase/storage-compat",Uk="@firebase/firestore",Vk="@firebase/firestore-compat",$k="firebase",Bk="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="[DEFAULT]",Hk={[ef]:"fire-core",[yk]:"fire-core-compat",[_k]:"fire-analytics",[vk]:"fire-analytics-compat",[bk]:"fire-app-check",[wk]:"fire-app-check-compat",[Ek]:"fire-auth",[Ik]:"fire-auth-compat",[Tk]:"fire-rtdb",[Ck]:"fire-rtdb-compat",[Sk]:"fire-fn",[kk]:"fire-fn-compat",[Ak]:"fire-iid",[Rk]:"fire-iid-compat",[Nk]:"fire-fcm",[xk]:"fire-fcm-compat",[Ok]:"fire-perf",[Pk]:"fire-perf-compat",[Dk]:"fire-rc",[Mk]:"fire-rc-compat",[Lk]:"fire-gcs",[Fk]:"fire-gcs-compat",[Uk]:"fire-fst",[Vk]:"fire-fst-compat","fire-js":"fire-js",[$k]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,nf=new Map;function jk(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(nf.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,t);for(const n of oc.values())jk(n,t);return!0}function Fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new Ys("app","Firebase",zk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=Bk;function U0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=DS()),!n)throw Wr.create("no-options");const s=oc.get(i);if(s){if(sc(n,s.options)&&sc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new ZS(i);for(const l of nf.values())o.addComponent(l);const a=new qk(n,r,o);return oc.set(i,a),a}function Ud(t=tf){const e=oc.get(t);if(!e&&t===tf)return U0();if(!e)throw Wr.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=Hk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Gn(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-heartbeat-database",Kk=1,ra="firebase-heartbeat-store";let lh=null;function V0(){return lh||(lh=fk(Wk,Kk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ra)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),lh}async function Gk(t){try{return(await V0()).transaction(ra).objectStore(ra).get($0(t))}catch(e){if(e instanceof Zn)Oi.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function Rg(t,e){try{const r=(await V0()).transaction(ra,"readwrite");return await r.objectStore(ra).put(e,$0(t)),r.done}catch(n){if(n instanceof Zn)Oi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function $0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=1024,Qk=30*24*60*60*1e3;class Xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ng();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Qk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ng(),{heartbeatsToSend:n,unsentEntries:r}=Jk(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ng(){return new Date().toISOString().substring(0,10)}function Jk(t,e=Yk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D0()?US().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xg(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){Gn(new Nn("platform-logger",e=>new mk(e),"PRIVATE")),Gn(new Nn("heartbeat",e=>new Xk(e),"PRIVATE")),cn(ef,Ag,t),cn(ef,Ag,"esm2017"),cn("fire-js","")}eA("");function Vd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function B0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tA=B0,H0=new Ys("auth","Firebase",B0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Aa("@firebase/auth");function Ul(t,...e){Og.logLevel<=Ae.ERROR&&Og.error(`Auth (${qi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,...e){throw $d(t,...e)}function jn(t,...e){return $d(t,...e)}function nA(t,e,n){const r=Object.assign(Object.assign({},tA()),{[e]:n});return new Ys("auth","Firebase",r).create(e,{appName:t.name})}function $d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H0.create(t,...e)}function te(t,e,...n){if(!t)throw $d(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ul(e),new Error(e)}function mr(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function cr(t){mr(t instanceof Function,"Expected a class definition");let e=Pg.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t,e){const n=Fd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sc(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function iA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sA(){return Dg()==="http:"||Dg()==="https:"}function Dg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||LS()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=Md()||O0()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new Ra(3e4,6e4);function Xs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,r,i={}){return z0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),j0.fetch()(q0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function z0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lA),e);try{const i=new uA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nA(t,u,c);xn(t,u)}}catch(i){if(i instanceof Zn)throw i;xn(t,"network-request-failed")}}async function Na(t,e,n,r,i={}){const s=await Js(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function q0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bd(t.config,i):`${t.config.apiScheme}://${i}`}class uA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),cA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function fA(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Hd(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mo(ch(i.auth_time)),issuedAtTime:Mo(ch(i.iat)),expirationTime:Mo(ch(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ch(t){return Number(t)*1e3}function Hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=rc(n);return i?JSON.parse(i):(Ul("Failed to decode base64 JWT payload"),null)}catch(i){return Ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pA(t){const e=Hd(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&mA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rs(t,fA(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_A(s.providerUserInfo):[],a=vA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W0(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yA(t){const e=Ye(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _A(t){return t.map(e=>{var{providerId:n}=e,r=Vd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){const n=await z0(t,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=q0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ia;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ki{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new W0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ki(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,hA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:A,isAnonymous:U,providerData:Z,stsTokenManager:F}=n;te(_&&F,e,"internal-error");const de=ia.fromJSON(this.name,F);te(typeof _=="string",e,"internal-error"),Or(h,e.name),Or(f,e.name),te(typeof A=="boolean",e,"internal-error"),te(typeof U=="boolean",e,"internal-error"),Or(d,e.name),Or(g,e.name),Or(y,e.name),Or(w,e.name),Or(v,e.name),Or(b,e.name);const ge=new ki({uid:_,auth:e,email:f,emailVerified:A,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:d,tenantId:y,stsTokenManager:de,createdAt:v,lastLoginAt:b});return Z&&Array.isArray(Z)&&(ge.providerData=Z.map(Ke=>Object.assign({},Ke))),w&&(ge._redirectEventId=w),ge}static async _fromIdTokenResponse(e,n,r=!1){const i=new ia;i.updateFromServerResponse(n);const s=new ki({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ac(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K0.type="NONE";const Mg=K0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ki._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(cr(Mg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||cr(Mg);const o=Vl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ki._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J0(e))return"Blackberry";if(Z0(e))return"Webos";if(jd(e))return"Safari";if((e.includes("chrome/")||Y0(e))&&!e.includes("edge/"))return"Chrome";if(X0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G0(t=qt()){return/firefox\//i.test(t)}function jd(t=qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y0(t=qt()){return/crios\//i.test(t)}function Q0(t=qt()){return/iemobile/i.test(t)}function X0(t=qt()){return/android/i.test(t)}function J0(t=qt()){return/blackberry/i.test(t)}function Z0(t=qt()){return/webos/i.test(t)}function ru(t=qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bA(t=qt()){var e;return ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EA(){return FS()&&document.documentMode===10}function e1(t=qt()){return ru(t)||X0(t)||Z0(t)||J0(t)||/windows phone/i.test(t)||Q0(t)}function IA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e=[]){let n;switch(t){case"Browser":n=Lg(qt());break;case"Worker":n=`${Lg(qt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new TA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xa(t){return Ye(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SA(t,e,n){const r=xa(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=n1(e),{host:o,port:a}=kA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AA()}function n1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kA(t){const e=n1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ug(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ug(o)}}}function Ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function r1(t,e){return Js(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Xs(t,e))}async function i1(t,e){return Js(t,"POST","/v1/accounts:sendOobCode",Xs(t,e))}async function NA(t,e){return i1(t,e)}async function xA(t,e){return i1(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Xs(t,e))}async function PA(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends zd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return RA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OA(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return r1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PA(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class Pi extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LA(t){const e=Io(To(t)).link,n=e?Io(To(e)).deep_link_id:null,r=Io(To(t)).deep_link_id;return(r?Io(To(r)).link:null)||r||n||e||t}class qd{constructor(e){var n,r,i,s,o,a;const l=Io(To(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=MA((i=l.mode)!==null&&i!==void 0?i:null);te(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LA(e);try{return new qd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qd.parseLink(n);return te(r,"argument-error"),sa._fromEmailAndCode(e,r.code,r.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends s1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Oa{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Oa{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Oa{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return Na(t,"POST","/v1/accounts:signUp",Xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ki._fromIdTokenResponse(e,r,i),o=Vg(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vg(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lc(e,n,r,i)}}function o1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(t,s,e,r):s})}async function UA(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Rs(t,o1(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Hd(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e,n=!1){const r="signIn",i=await o1(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $A(t,e){return a1(xa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e,n){var r;te(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),te(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(te(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(te(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P8(t,e,n){const r=Ye(t),i={requestType:"PASSWORD_RESET",email:e};n&&l1(r,i,n),await xA(r,i)}async function D8(t,e,n){const r=xa(t),i=await FA(r,{returnSecureToken:!0,email:e,password:n}),s=await Di._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function M8(t,e,n){return $A(Ye(t),Zs.credential(e,n))}async function L8(t,e){const n=Ye(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&l1(n.auth,i,e);const{email:s}=await NA(n.auth,i);s!==t.email&&await t.reload()}function F8(t,e){return BA(Ye(t),null,e)}async function BA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Rs(t,r1(r,s));await t._updateTokensIfNecessary(o,!0)}function c1(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Wd(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function jA(t){return Ye(t).signOut()}const cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){const t=qt();return jd(t)||ru(t)}const qA=1e3,WA=10;class h1 extends u1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zA()&&IA(),this.fallbackToPolling=e1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h1.type="LOCAL";const KA=h1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1 extends u1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f1.type="SESSION";const d1=f1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await GA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Kd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function QA(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function XA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZA(){return p1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firebaseLocalStorageDb",e2=1,uc="firebaseLocalStorage",g1="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function t2(){const t=indexedDB.deleteDatabase(m1);return new Pa(t).toPromise()}function sf(){const t=indexedDB.open(m1,e2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:g1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await t2(),e(await sf()))})})}async function $g(t,e,n){const r=su(t,!0).put({[g1]:e,value:n});return new Pa(r).toPromise()}async function n2(t,e){const n=su(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=su(t,!0).delete(e);return new Pa(n).toPromise()}const r2=800,i2=3;class y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iu._getInstance(ZA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XA(),!this.activeServiceWorker)return;this.sender=new YA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await $g(e,cc,"1"),await Bg(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=su(i,!1).getAll();return new Pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y1.type="LOCAL";const s2=y1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function a2(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})}function l2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t,e){return e?cr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function u2(t){return a1(t.auth,new Gd(t),t.bypassAuthState)}function h2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),VA(n,new Gd(t),t.bypassAuthState)}async function f2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),UA(n,new Gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u2;case"linkViaPopup":case"linkViaRedirect":return f2;case"reauthViaPopup":case"reauthViaRedirect":return h2;default:xn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new Ra(2e3,1e4);class is extends v1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,d2.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="pendingRedirect",$l=new Map;class m2 extends v1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await g2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g2(t,e){const n=_2(e),r=v2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function y2(t,e){$l.set(t._key(),e)}function v2(t){return cr(t._redirectPersistence)}function _2(t){return Vl(p2,t.config.apiKey,t.name)}async function w2(t,e,n=!1){const r=xa(t),i=c2(r,e),o=await new m2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=10*60*1e3;class E2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!I2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function I2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S2=/^https?/;async function k2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await T2(t);for(const n of e)try{if(A2(n))return}catch{}xn(t,"unauthorized-domain")}function A2(t){const e=rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!S2.test(n))return!1;if(C2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=new Ra(3e4,6e4);function jg(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N2(t){return new Promise((e,n)=>{var r,i,s;function o(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),n(jn(t,"network-request-failed"))},timeout:R2.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=l2("iframefcb");return zn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},a2(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function x2(t){return Bl=Bl||N2(t),Bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=new Ra(5e3,15e3),P2="__/auth/iframe",D2="emulator/auth/iframe",M2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F2(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,D2):`https://${t.config.authDomain}/${P2}`,r={apiKey:e.apiKey,appName:t.name,v:qi},i=L2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qs(r).slice(1)}`}async function U2(t){const e=await x2(t),n=zn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:F2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},O2.get());function l(){zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$2=500,B2=600,H2="_blank",j2="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z2(t,e,n,r=$2,i=B2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=qt().toLowerCase();n&&(a=Y0(c)?H2:n),G0(c)&&(e=e||j2,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(bA(c)&&a!=="_self")return q2(e||"",a),new zg(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new zg(h)}function q2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="__/auth/handler",K2="emulator/auth/handler";function qg(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qi,eventId:i};if(e instanceof s1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Oa){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${G2(t)}?${Qs(a).slice(1)}`}function G2({config:t}){return t.emulator?Bd(t,K2):`https://${t.authDomain}/${W2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="webStorageSupport";class Y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d1,this._completeRedirectFn=w2,this._overrideRedirectResult=y2}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=qg(e,n,r,rf(),i);return z2(e,o,Kd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),QA(qg(e,n,r,rf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U2(e),r=new E2(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uh,{type:uh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uh];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e1()||jd()||ru()}}const Q2=Y2;var Wg="@firebase/auth",Kg="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Z2(t){Gn(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{te(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t1(t)},u=new CA(a,l,c);return iA(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new Nn("auth-internal",e=>{const n=xa(e.getProvider("auth").getImmediate());return(r=>new X2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Wg,Kg,J2(t)),cn(Wg,Kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=5*60,tR=x0("authIdTokenMaxAge")||eR;let Gg=null;const nR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tR)return;const i=n==null?void 0:n.token;Gg!==i&&(Gg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yn(t=Ud()){const e=Fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rA(t,{popupRedirectResolver:Q2,persistence:[s2,KA,d1]}),r=x0("authTokenSyncURL");if(r){const s=nR(r);HA(n,s,()=>s(n.currentUser)),c1(n,o=>s(o))}const i=N0("auth");return i&&SA(n,`http://${i}`),n}Z2("Browser");var rR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Yd=Yd||{},oe=rR||self;function hc(){}function ou(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Da(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iR(t){return Object.prototype.hasOwnProperty.call(t,hh)&&t[hh]||(t[hh]=++sR)}var hh="closure_uid_"+(1e9*Math.random()>>>0),sR=0;function oR(t,e,n){return t.call.apply(t.bind,arguments)}function aR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ht=oR:Ht=aR,Ht.apply(null,arguments)}function dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function At(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function si(){this.s=this.s,this.o=this.o}var lR=0;si.prototype.s=!1;si.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lR!=0)&&iR(this)};si.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ou(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var cR=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",hc,e),oe.removeEventListener("test",hc,e)}catch{}return t}();function fc(t){return/^[\s\xa0]*$/.test(t)}var Qg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fh(t,e){return t<e?-1:t>e?1:0}function au(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Vn(t){return au().indexOf(t)!=-1}function Xd(t){return Xd[" "](t),t}Xd[" "]=hc;function uR(t){var e=dR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hR=Vn("Opera"),Ns=Vn("Trident")||Vn("MSIE"),b1=Vn("Edge"),of=b1||Ns,E1=Vn("Gecko")&&!(au().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),fR=au().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function I1(){var t=oe.document;return t?t.documentMode:void 0}var dc;e:{var dh="",ph=function(){var t=au();if(E1)return/rv:([^\);]+)(\)|;)/.exec(t);if(b1)return/Edge\/([\d\.]+)/.exec(t);if(Ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fR)return/WebKit\/(\S+)/.exec(t);if(hR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ph&&(dh=ph?ph[1]:""),Ns){var mh=I1();if(mh!=null&&mh>parseFloat(dh)){dc=String(mh);break e}}dc=dh}var dR={};function pR(){return uR(function(){let t=0;const e=Qg(String(dc)).split("."),n=Qg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=fh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||fh(i[2].length==0,s[2].length==0)||fh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var af;if(oe.document&&Ns){var Xg=I1();af=Xg||parseInt(dc,10)||void 0}else af=void 0;var mR=af;function oa(t,e){if(jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(E1){e:{try{Xd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oa.X.h.call(this)}}At(oa,jt);var gR={2:"touch",3:"pen",4:"mouse"};oa.prototype.h=function(){oa.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ma="closure_listenable_"+(1e6*Math.random()|0),yR=0;function vR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++yR,this.ba=this.ea=!1}function lu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function T1(t){const e={};for(const n in t)e[n]=t[n];return e}const Jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jg.length;s++)n=Jg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cu(t){this.src=t,this.g={},this.h=0}cu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vR(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function lf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=w1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Zd="closure_lm_"+(1e6*Math.random()|0),gh={};function S1(t,e,n,r,i){if(r&&r.once)return A1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)S1(t,e[s],n,r,i);return null}return n=np(n),t&&t[Ma]?t.N(e,n,Da(r)?!!r.capture:!!r,i):k1(t,e,n,!1,r,i)}function k1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Da(i)?!!i.capture:!!i,a=tp(t);if(a||(t[Zd]=a=new cu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_R(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(N1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _R(){function t(n){return e.call(t.src,t.listener,n)}const e=wR;return t}function A1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)A1(t,e[s],n,r,i);return null}return n=np(n),t&&t[Ma]?t.O(e,n,Da(r)?!!r.capture:!!r,i):k1(t,e,n,!0,r,i)}function R1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)R1(t,e[s],n,r,i);else r=Da(r)?!!r.capture:!!r,n=np(n),t&&t[Ma]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cf(s,n,r,i),-1<n&&(lu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=tp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cf(e,n,r,i)),(n=-1<t?e[t]:null)&&ep(n))}function ep(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ma])lf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(N1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tp(e))?(lf(n,t),n.h==0&&(n.src=null,e[Zd]=null)):lu(t)}}}function N1(t){return t in gh?gh[t]:gh[t]="on"+t}function wR(t,e){if(t.ba)t=!0;else{e=new oa(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ep(t),t=n.call(r,e)}return t}function tp(t){return t=t[Zd],t instanceof cu?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function np(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function wt(){si.call(this),this.i=new cu(this),this.P=this,this.I=null}At(wt,si);wt.prototype[Ma]=!0;wt.prototype.removeEventListener=function(t,e,n,r){R1(this,t,e,n,r)};function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new jt(e,t);else if(e instanceof jt)e.target=e.target||t;else{var i=e;e=new jt(r,t),C1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pl(o,r,!0,e)&&i}if(o=e.g=t,i=pl(o,r,!0,e)&&i,i=pl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pl(o,r,!1,e)&&i}wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lu(n[r]);delete t.g[e],t.h--}}this.I=null};wt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&lf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var rp=oe.JSON.stringify;function bR(){var t=P1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ER{constructor(){this.h=this.g=null}add(e,n){const r=x1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var x1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IR,t=>t.reset());class IR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TR(t){oe.setTimeout(()=>{throw t},0)}function O1(t,e){uf||CR(),hf||(uf(),hf=!0),P1.add(t,e)}var uf;function CR(){var t=oe.Promise.resolve(void 0);uf=function(){t.then(SR)}}var hf=!1,P1=new ER;function SR(){for(var t;t=bR();){try{t.h.call(t.g)}catch(n){TR(n)}var e=x1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hf=!1}function uu(t,e){wt.call(this),this.h=t||1,this.g=e||oe,this.j=Ht(this.lb,this),this.l=Date.now()}At(uu,wt);q=uu.prototype;q.ca=!1;q.R=null;q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(ip(this),this.start()))}};q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ip(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}q.M=function(){uu.X.M.call(this),ip(this),delete this.g};function sp(t,e,n){if(typeof t=="function")n&&(t=Ht(t,n));else if(t&&typeof t.handleEvent=="function")t=Ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function D1(t){t.g=sp(()=>{t.g=null,t.i&&(t.i=!1,D1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kR extends si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:D1(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aa(t){si.call(this),this.h=t,this.g={}}At(aa,si);var Zg=[];function M1(t,e,n,r){Array.isArray(n)||(n&&(Zg[0]=n.toString()),n=Zg);for(var i=0;i<n.length;i++){var s=S1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function L1(t){Jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&ep(e)},t),t.g={}}aa.prototype.M=function(){aa.X.M.call(this),L1(this)};aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hu(){this.g=!0}hu.prototype.Aa=function(){this.g=!1};function AR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xR(t,n)+(r?" "+r:"")})}function NR(t,e){t.info(function(){return"TIMEOUT: "+e})}hu.prototype.info=function(){};function xR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rp(n)}catch{return e}}var Wi={},ey=null;function fu(){return ey=ey||new wt}Wi.Pa="serverreachability";function F1(t){jt.call(this,Wi.Pa,t)}At(F1,jt);function la(t){const e=fu();kt(e,new F1(e))}Wi.STAT_EVENT="statevent";function U1(t,e){jt.call(this,Wi.STAT_EVENT,t),this.stat=e}At(U1,jt);function Xt(t){const e=fu();kt(e,new U1(e,t))}Wi.Qa="timingevent";function V1(t,e){jt.call(this,Wi.Qa,t),this.size=e}At(V1,jt);function La(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var du={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function op(){}op.prototype.h=null;function ty(t){return t.h||(t.h=t.i())}function B1(){}var Fa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ap(){jt.call(this,"d")}At(ap,jt);function lp(){jt.call(this,"c")}At(lp,jt);var ff;function pu(){}At(pu,op);pu.prototype.g=function(){return new XMLHttpRequest};pu.prototype.i=function(){return{}};ff=new pu;function Ua(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new aa(this),this.O=OR,t=of?125:void 0,this.T=new uu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new H1}function H1(){this.i=null,this.g="",this.h=!1}var OR=45e3,df={},pc={};q=Ua.prototype;q.setTimeout=function(t){this.O=t};function pf(t,e,n){t.K=1,t.v=gu(gr(e)),t.s=n,t.P=!0,j1(t,null)}function j1(t,e){t.F=Date.now(),Va(t),t.A=gr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),X1(n.i,"t",r),t.C=0,n=t.l.H,t.h=new H1,t.g=vw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new kR(Ht(t.La,t,t.g),t.N)),M1(t.S,t.g,"readystatechange",t.ib),e=t.H?T1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),la(),AR(t.j,t.u,t.A,t.m,t.U,t.s)}q.ib=function(t){t=t.target;const e=this.L;e&&ur(t)==3?e.l():this.La(t)};q.La=function(t){try{if(t==this.g)e:{const u=ur(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||of||this.g&&(this.h.h||this.g.fa()||sy(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?la(3):la(2)),mu(this);var n=this.g.aa();this.Y=n;t:if(z1(this)){var r=sy(this.g);t="";var i=r.length,s=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_i(this),Lo(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,RR(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fc(a)){var c=a;break t}}c=null}if(n=c)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mf(this,n);else{this.i=!1,this.o=3,Xt(12),_i(this),Lo(this);break e}}this.P?(q1(this,u,o),of&&this.i&&u==3&&(M1(this.S,this.T,"tick",this.hb),this.T.start())):(ss(this.j,this.m,o,null),mf(this,o)),u==4&&_i(this),this.i&&!this.I&&(u==4?pw(this.l,this):(this.i=!1,Va(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),_i(this),Lo(this)}}}catch{}finally{}};function z1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function q1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=PR(t,n),i==pc){e==4&&(t.o=4,Xt(14),r=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(i==df){t.o=4,Xt(15),ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ss(t.j,t.m,i,null),mf(t,i);z1(t)&&i!=pc&&i!=df&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),mp(e),e.K=!0,Xt(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),_i(t),Lo(t))}q.hb=function(){if(this.g){var t=ur(this.g),e=this.g.fa();this.C<e.length&&(mu(this),q1(this,t,e),this.i&&t!=4&&Va(this))}};function PR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pc:(n=Number(e.substring(n,r)),isNaN(n)?df:(r+=1,r+n>e.length?pc:(e=e.substr(r,n),t.C=r+n,e)))}q.cancel=function(){this.I=!0,_i(this)};function Va(t){t.V=Date.now()+t.O,W1(t,t.O)}function W1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=La(Ht(t.gb,t),e)}function mu(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(NR(this.j,this.A),this.K!=2&&(la(),Xt(17)),_i(this),this.o=2,Lo(this)):W1(this,this.V-t)};function Lo(t){t.l.G==0||t.I||pw(t.l,t)}function _i(t){mu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ip(t.T),L1(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gf(n.h,t))){if(!t.J&&gf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yc(n),_u(n);else break e;pp(n),Xt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=La(Ht(n.cb,n),6e3));if(1>=ew(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else wi(n,11)}else if((t.J||n.g==t)&&yc(n),!fc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cp(s,s.h),s.h=null))}if(r.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,We(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=yw(r,r.H?r.ka:null,r.V),o.J){tw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(mu(a),Va(a)),r.g=o}else fw(r);0<n.i.length&&wu(n)}else c[0]!="stop"&&c[0]!="close"||wi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?wi(n,7):dp(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}la(4)}catch{}}function DR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ou(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function MR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ou(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function K1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ou(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MR(t),r=DR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var G1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ai(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ai){this.h=e!==void 0?e:t.h,mc(this,t.j),this.s=t.s,this.g=t.g,gc(this,t.m),this.l=t.l,e=t.i;var n=new ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ny(this,n),this.o=t.o}else t&&(n=String(t).match(G1))?(this.h=!!e,mc(this,n[1]||"",!0),this.s=Co(n[2]||""),this.g=Co(n[3]||"",!0),gc(this,n[4]),this.l=Co(n[5]||"",!0),ny(this,n[6]||"",!0),this.o=Co(n[7]||"")):(this.h=!!e,this.i=new ca(null,this.h))}Ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(So(e,ry,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(So(e,ry,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(So(n,n.charAt(0)=="/"?VR:UR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",So(n,BR)),t.join("")};function gr(t){return new Ai(t)}function mc(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ny(t,e,n){e instanceof ca?(t.i=e,HR(t.i,t.h)):(n||(e=So(e,$R)),t.i=new ca(e,t.h))}function We(t,e,n){t.i.set(e,n)}function gu(t){return We(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function So(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ry=/[#\/\?@]/g,UR=/[#\?:]/g,VR=/[#\?]/g,$R=/[#\?@]/g,BR=/#/g;function ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function oi(t){t.g||(t.g=new Map,t.h=0,t.i&&LR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=ca.prototype;q.add=function(t,e){oi(this),this.i=null,t=eo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Y1(t,e){oi(t),e=eo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Q1(t,e){return oi(t),e=eo(t,e),t.g.has(e)}q.forEach=function(t,e){oi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};q.oa=function(){oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};q.W=function(t){oi(this);let e=[];if(typeof t=="string")Q1(this,t)&&(e=e.concat(this.g.get(eo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return oi(this),this.i=null,t=eo(this,t),Q1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function X1(t,e,n){Y1(t,e),0<n.length&&(t.i=null,t.g.set(eo(t,e),Qd(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function eo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HR(t,e){e&&!t.j&&(oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Y1(this,r),X1(this,i,n))},t)),t.j=e}var jR=class{constructor(e,n){this.h=e,this.g=n}};function J1(t){this.l=t||zR,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ga&&oe.g.Ga()&&oe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zR=10;function Z1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ew(t){return t.h?1:t.g?t.g.size:0}function gf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cp(t,e){t.g?t.g.add(e):t.h=e}function tw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}J1.prototype.cancel=function(){if(this.i=nw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qd(t.i)}function up(){}up.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};up.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function qR(){this.g=new up}function WR(t,e,n){const r=n||"";try{K1(t,function(i,s){let o=i;Da(i)&&(o=rp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KR(t,e){const n=new hu;if(oe.Image){const r=new Image;r.onload=dl(ml,n,r,"TestLoadImage: loaded",!0,e),r.onerror=dl(ml,n,r,"TestLoadImage: error",!1,e),r.onabort=dl(ml,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=dl(ml,n,r,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ml(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $a(t){this.l=t.ac||null,this.j=t.jb||!1}At($a,op);$a.prototype.g=function(){return new yu(this.l,this.j)};$a.prototype.i=function(t){return function(){return t}}({});function yu(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}At(yu,wt);var hp=0;q=yu.prototype;q.open=function(t,e){if(this.readyState!=hp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ua(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ba(this)),this.readyState=hp};q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function rw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ba(this):ua(this),this.readyState==3&&rw(this)}};q.Va=function(t){this.g&&(this.response=this.responseText=t,Ba(this))};q.Ua=function(t){this.g&&(this.response=t,Ba(this))};q.ga=function(){this.g&&Ba(this)};function Ba(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ua(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GR=oe.JSON.parse;function tt(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=iw,this.K=this.L=!1}At(tt,wt);var iw="",YR=/^https?$/i,QR=["POST","PUT"];q=tt.prototype;q.Ka=function(t){this.L=t};q.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ff.g(),this.C=this.u?ty(this.u):ty(ff),this.g.onreadystatechange=Ht(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){iy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=oe.FormData&&t instanceof oe.FormData,!(0<=w1(QR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{aw(this),0<this.B&&((this.K=XR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ht(this.qa,this)):this.A=sp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){iy(this,s)}};function XR(t){return Ns&&pR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.qa=function(){typeof Yd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function iy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sw(t),vu(t)}function sw(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),vu(this))};q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),tt.X.M.call(this)};q.Ha=function(){this.s||(this.F||this.v||this.l?ow(this):this.fb())};q.fb=function(){ow(this)};function ow(t){if(t.h&&typeof Yd<"u"&&(!t.C[1]||ur(t)!=4||t.aa()!=2)){if(t.v&&ur(t)==4)sp(t.Ha,0,t);else if(kt(t,"readystatechange"),ur(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(G1)[1]||null;if(!i&&oe.self&&oe.self.location){var s=oe.self.location.protocol;i=s.substr(0,s.length-1)}r=!YR.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var o=2<ur(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",sw(t)}}finally{vu(t)}}}}function vu(t,e){if(t.g){aw(t);const n=t.g,r=t.C[0]?hc:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function aw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function ur(t){return t.g?t.g.readyState:0}q.aa=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}};q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GR(e)}};function sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case iw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}q.Ea=function(){return this.m};q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lw(t){let e="";return Jd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):We(t,e,n))}function po(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cw(t){this.Ca=0,this.i=[],this.j=new hu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=po("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=po("baseRetryDelayMs",5e3,t),this.bb=po("retryDelaySeedMs",1e4,t),this.$a=po("forwardChannelMaxRetries",2,t),this.ta=po("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new J1(t&&t.concurrentRequestLimit),this.Fa=new qR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}q=cw.prototype;q.ma=8;q.G=1;function dp(t){if(uw(t),t.G==3){var e=t.U++,n=gr(t.F);We(n,"SID",t.I),We(n,"RID",e),We(n,"TYPE","terminate"),Ha(t,n),e=new Ua(t,t.j,e,void 0),e.K=2,e.v=gu(gr(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=vw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Va(e)}gw(t)}function _u(t){t.g&&(mp(t),t.g.cancel(),t.g=null)}function uw(t){_u(t),t.u&&(oe.clearTimeout(t.u),t.u=null),yc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function wu(t){Z1(t.h)||t.m||(t.m=!0,O1(t.Ja,t),t.C=0)}function JR(t,e){return ew(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=La(Ht(t.Ja,t,e),mw(t,t.C)),t.C++,!0)}q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ua(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=T1(s),C1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hw(this,i,e),n=gr(this.F),We(n,"RID",t),We(n,"CVER",22),this.D&&We(n,"X-HTTP-Session-Id",this.D),Ha(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(lw(s)))+"&"+e:this.o&&fp(n,this.o,s)),cp(this.h,i),this.Ya&&We(n,"TYPE","init"),this.O?(We(n,"$req",e),We(n,"SID","null"),i.Z=!0,pf(i,n,null)):pf(i,n,e),this.G=2}}else this.G==3&&(t?oy(this,t):this.i.length==0||Z1(this.h)||oy(this))};function oy(t,e){var n;e?n=e.m:n=t.U++;const r=gr(t.F);We(r,"SID",t.I),We(r,"RID",n),We(r,"AID",t.T),Ha(t,r),t.o&&t.s&&fp(r,t.o,t.s),n=new Ua(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=hw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),cp(t.h,n),pf(n,r,e)}function Ha(t,e){t.ia&&Jd(t.ia,function(n,r){We(e,r,n)}),t.l&&K1({},function(n,r){We(e,r,n)})}function hw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ht(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{WR(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function fw(t){t.g||t.u||(t.Z=1,O1(t.Ia,t),t.A=0)}function pp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=La(Ht(t.Ia,t),mw(t,t.A)),t.A++,!0)}q.Ia=function(){if(this.u=null,dw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=La(Ht(this.eb,this),t)}};q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xt(10),_u(this),dw(this))};function mp(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function dw(t){t.g=new Ua(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=gr(t.sa);We(e,"RID","rpc"),We(e,"SID",t.I),We(e,"CI",t.L?"0":"1"),We(e,"AID",t.T),We(e,"TYPE","xmlhttp"),Ha(t,e),t.o&&t.s&&fp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=gu(gr(e)),n.s=null,n.P=!0,j1(n,t)}q.cb=function(){this.v!=null&&(this.v=null,_u(this),pp(this),Xt(19))};function yc(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function pw(t,e){var n=null;if(t.g==e){yc(t),mp(t),t.g=null;var r=2}else if(gf(t.h,e))n=e.D,tw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=fu(),kt(r,new V1(r,n)),wu(t)}else fw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&JR(t,e)||r==2&&pp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:wi(t,5);break;case 4:wi(t,10);break;case 3:wi(t,6);break;default:wi(t,2)}}}function mw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function wi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ht(t.kb,t);n||(n=new Ai("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||mc(n,"https"),gu(n)),KR(n.toString(),r)}else Xt(2);t.G=0,t.l&&t.l.va(e),gw(t),uw(t)}q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Xt(2)):(this.j.info("Failed to ping google.com"),Xt(1))};function gw(t){if(t.G=0,t.la=[],t.l){const e=nw(t.h);(e.length!=0||t.i.length!=0)&&(Yg(t.la,e),Yg(t.la,t.i),t.h.i.length=0,Qd(t.i),t.i.length=0),t.l.ua()}}function yw(t,e,n){var r=n instanceof Ai?gr(n):new Ai(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),gc(r,r.m);else{var i=oe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ai(null,void 0);r&&mc(s,r),e&&(s.g=e),i&&gc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&We(r,n,e),We(r,"VER",t.ma),Ha(t,r),r}function vw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new tt(new $a({jb:!0})):new tt(t.ra),e.Ka(t.H),e}function _w(){}q=_w.prototype;q.xa=function(){};q.wa=function(){};q.va=function(){};q.ua=function(){};q.Ra=function(){};function vc(){if(Ns&&!(10<=Number(mR)))throw Error("Environmental error: no available transport.")}vc.prototype.g=function(t,e){return new hn(t,e)};function hn(t,e){wt.call(this),this.g=new cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!fc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new to(this)}At(hn,wt);hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Xt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=yw(t,null,t.V),wu(t)};hn.prototype.close=function(){dp(this.g)};hn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rp(t),t=n);e.i.push(new jR(e.ab++,t)),e.G==3&&wu(e)};hn.prototype.M=function(){this.g.l=null,delete this.j,dp(this.g),delete this.g,hn.X.M.call(this)};function ww(t){ap.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}At(ww,ap);function bw(){lp.call(this),this.status=1}At(bw,lp);function to(t){this.g=t}At(to,_w);to.prototype.xa=function(){kt(this.g,"a")};to.prototype.wa=function(t){kt(this.g,new ww(t))};to.prototype.va=function(t){kt(this.g,new bw)};to.prototype.ua=function(){kt(this.g,"b")};vc.prototype.createWebChannel=vc.prototype.g;hn.prototype.send=hn.prototype.u;hn.prototype.open=hn.prototype.m;hn.prototype.close=hn.prototype.close;du.NO_ERROR=0;du.TIMEOUT=8;du.HTTP_ERROR=6;$1.COMPLETE="complete";B1.EventType=Fa;Fa.OPEN="a";Fa.CLOSE="b";Fa.ERROR="c";Fa.MESSAGE="d";wt.prototype.listen=wt.prototype.N;tt.prototype.listenOnce=tt.prototype.O;tt.prototype.getLastError=tt.prototype.Oa;tt.prototype.getLastErrorCode=tt.prototype.Ea;tt.prototype.getStatus=tt.prototype.aa;tt.prototype.getResponseJson=tt.prototype.Sa;tt.prototype.getResponseText=tt.prototype.fa;tt.prototype.send=tt.prototype.da;tt.prototype.setWithCredentials=tt.prototype.Ka;var ZR=function(){return new vc},eN=function(){return fu()},vh=du,tN=$1,nN=Wi,ay={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rN=$a,gl=B1,iN=tt;const ly="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Aa("@firebase/firestore");function cy(){return Mi.logLevel}function Q(t,...e){if(Mi.logLevel<=Ae.DEBUG){const n=e.map(gp);Mi.debug(`Firestore (${no}): ${t}`,...n)}}function yr(t,...e){if(Mi.logLevel<=Ae.ERROR){const n=e.map(gp);Mi.error(`Firestore (${no}): ${t}`,...n)}}function yf(t,...e){if(Mi.logLevel<=Ae.WARN){const n=e.map(gp);Mi.warn(`Firestore (${no}): ${t}`,...n)}}function gp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+t;throw yr(e),new Error(e)}function Le(t,e){t||se()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class oN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aN{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new Ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Pt(e)}}class lN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new lN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.A=n.token,new uN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new ct(0,0))}static max(){return new ae(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends ha{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new He(n)}static emptyPath(){return new He([])}}const dN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends ha{construct(e,n,r){return new Vt(e,n,r)}static isValidIdentifier(e){return dN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(He.fromString(e))}static fromName(e){return new J(He.fromString(e).popFirst(5))}static empty(){return new J(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new He(e.slice()))}}function pN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Jr(i,J.empty(),e)}function mN(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(ae.min(),J.empty(),-1)}static max(){return new Jr(ae.max(),J.empty(),-1)}}function gN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==yN)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function za(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}yp.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t){return t==null}function _c(t){return t===0&&1/t==-1/0}function wN(t){return typeof t=="number"&&Number.isInteger(t)&&!_c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Wt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const bN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(Le(!!t),typeof t=="string"){let e=0;const n=bN.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sw(t){const e=t.mapValue.fields.__previous_value__;return Cw(e)?Sw(e):e}function da(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cw(t)?4:EN(t)?9007199254740991:10:se()}function Qn(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Zr(r.timestampValue),o=Zr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Os(r.bytesValue).isEqual(Os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return st(r.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(r.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return st(r.integerValue)===st(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=st(r.doubleValue),o=st(i.doubleValue);return s===o?_c(s)===_c(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(uy(s)!==uy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Qn(s[a],o[a])))return!1;return!0}(t,e);default:return se()}}function pa(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=st(i.integerValue||i.doubleValue),a=st(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(da(t),da(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Os(i),a=Os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ne(o[l],a[l]);if(c!==0)return c}return Ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Ne(st(i.latitude),st(s.latitude));return o!==0?o:Ne(st(i.longitude),st(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ps(o[l],a[l]);if(c)return c}return Ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===yl.mapValue&&s===yl.mapValue)return 0;if(i===yl.mapValue)return 1;if(s===yl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Ne(a[u],c[u]);if(h!==0)return h;const f=Ps(o[a[u]],l[c[u]]);if(f!==0)return f}return Ne(a.length,c.length)}(t.mapValue,e.mapValue);default:throw se()}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=Zr(t),r=Zr(e),i=Ne(n.seconds,r.seconds);return i!==0?i:Ne(n.nanos,r.nanos)}function Ds(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Zr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=vf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${vf(r.fields[a])}`;return s+"}"}(t.mapValue):se();var e,n}function fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function vp(t){return!!t&&"arrayValue"in t}function dy(t){return!!t&&"nullValue"in t}function py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function Fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.position=e,this.inclusive=n}}function my(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{}class ot extends kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TN(e,n,r):n==="array-contains"?new kN(e,r):n==="in"?new AN(e,r):n==="not-in"?new RN(e,r):n==="array-contains-any"?new NN(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CN(e,r):new SN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class On extends kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new On(e,n)}matches(e){return Aw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Aw(t){return t.op==="and"}function Rw(t){return IN(t)&&Aw(t)}function IN(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function wf(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Rw(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function Nw(t,e){return t instanceof ot?function(n,r){return r instanceof ot&&n.op===r.op&&n.field.isEqual(r.field)&&Qn(n.value,r.value)}(t,e):t instanceof On?function(n,r){return r instanceof On&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Nw(s,r.filters[o]),!0):!1}(t,e):void se()}function xw(t){return t instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${Ds(e.value)}`}(t):t instanceof On?function(e){return e.op.toString()+" {"+e.getFilters().map(xw).join(" ,")+"}"}(t):"Filter"}class TN extends ot{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class CN extends ot{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SN extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class kN extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vp(n)&&pa(n.arrayValue,this.value)}}class AN extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class RN extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pa(this.value.arrayValue,n)}}class NN extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function xN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??It.RED,this.left=i??It.EMPTY,this.right=s??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new It(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,i){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new ut(Vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=Vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(Fo(this.value))}}function Pw(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new Vt([n]);if(Hl(r)){const s=Pw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ae.min(),ae.min(),ae.min(),tn.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,ae.min(),ae.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ae.min(),ae.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ON(t,e,n,r,i,s,o)}function _p(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ft=n}return e.ft}function wp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gy(t.startAt,e.startAt)&&gy(t.endAt,e.endAt)}function bf(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function PN(t,e,n,r,i,s,o,a){return new ro(t,e,n,r,i,s,o,a)}function Eu(t){return new ro(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Iu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dw(t){return t.collectionGroup!==null}function vs(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=Iu(e),r=bp(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new ys(n)),e.dt.push(new ys(Vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ys(Vt.keyField(),s))}}}return e.dt}function vr(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=vy(e.path,e.collectionGroup,vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ys(s.field,o))}const r=e.endAt?new wc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wc(e.startAt.position,e.startAt.inclusive):null;e._t=vy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Ef(t,e){e.getFirstInequalityField(),Iu(t);const n=t.filters.concat([e]);return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function If(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return wp(vr(t),vr(e))&&t.limitType===e.limitType}function Mw(t){return`${_p(vr(t))}|lt:${t.limitType}`}function Tf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>xw(r)).join(", ")}]`),bu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),`Target(${n})`}(vr(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of vs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=my(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,vs(n),r)||n.endAt&&!function(i,s,o){const a=my(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,vs(n),r))}(t,e)}function DN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lw(t){return(e,n)=>{let r=!1;for(const i of vs(t)){const s=MN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MN(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ps(a,l):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function LN(t,e){return wN(e)?Uw(e):Fw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this._=void 0}}function FN(t,e,n){return t instanceof bc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ma?$w(t,e):t instanceof ga?Bw(t,e):function(r,i){const s=Vw(r,i),o=wy(s)+wy(r.gt);return _f(s)&&_f(r.gt)?Uw(o):Fw(r.yt,o)}(t,e)}function UN(t,e,n){return t instanceof ma?$w(t,e):t instanceof ga?Bw(t,e):n}function Vw(t,e){return t instanceof Ec?_f(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class bc extends Su{}class ma extends Su{constructor(e){super(),this.elements=e}}function $w(t,e){const n=Hw(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends Su{constructor(e){super(),this.elements=e}}function Bw(t,e){let n=Hw(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class Ec extends Su{constructor(e,n){super(),this.yt=e,this.gt=n}}function wy(t){return st(t.integerValue||t.doubleValue)}function Hw(t){return vp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ma&&r instanceof ma||n instanceof ga&&r instanceof ga?xs(n.elements,r.elements,Qn):n instanceof Ec&&r instanceof Ec?Qn(n.gt,r.gt):n instanceof bc&&r instanceof bc}(t.transform,e.transform)}class $N{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qw(t.key,qn.none()):new qa(t.key,t.data,qn.none());{const n=t.data,r=tn.empty();let i=new ut(Vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new ln(i.toArray()),qn.none())}}function BN(t,e,n){t instanceof qa?function(r,i,s){const o=r.value.clone(),a=Ey(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(r,i,s){if(!jl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ey(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(zw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof qa?function(i,s,o,a){if(!jl(i.precondition,s))return o;const l=i.value.clone(),c=Iy(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(i,s,o,a){if(!jl(i.precondition,s))return o;const l=Iy(i.fieldTransforms,a,s),c=s.data;return c.setAll(zw(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return jl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function HN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vw(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function by(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&xs(n,r,(i,s)=>VN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qa extends ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ey(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UN(o,a,n[i]))}return r}function Iy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,FN(s,o,e))}return r}class qw extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jN extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,be;function qN(t){switch(t){default:return se();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Ww(t){if(t===void 0)return yr("GRPC error has no .code"),T.UNKNOWN;switch(t){case it.OK:return T.OK;case it.CANCELLED:return T.CANCELLED;case it.UNKNOWN:return T.UNKNOWN;case it.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case it.INTERNAL:return T.INTERNAL;case it.UNAVAILABLE:return T.UNAVAILABLE;case it.UNAUTHENTICATED:return T.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case it.NOT_FOUND:return T.NOT_FOUND;case it.ALREADY_EXISTS:return T.ALREADY_EXISTS;case it.PERMISSION_DENIED:return T.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case it.ABORTED:return T.ABORTED;case it.OUT_OF_RANGE:return T.OUT_OF_RANGE;case it.UNIMPLEMENTED:return T.UNIMPLEMENTED;case it.DATA_LOSS:return T.DATA_LOSS;default:return se()}}(be=it||(it={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Tw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new ht(J.comparator);function _r(){return WN}const Kw=new ht(J.comparator);function ko(...t){let e=Kw;for(const n of t)e=e.insert(n.key,n);return e}function Gw(t){let e=Kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return Vo()}function Yw(){return Vo()}function Vo(){return new io(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new ht(J.comparator),GN=new ut(J.comparator);function ye(...t){let e=GN;for(const n of t)e=e.add(n);return e}const YN=new ut(Ne);function Qw(){return YN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(ae.min(),i,Qw(),_r(),ye())}}class Wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wa(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class Xw{constructor(e,n){this.targetId=e,this.Et=n}}class Jw{constructor(e,n,r=Wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.At=0,this.Rt=Sy(),this.bt=Wt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ye(),n=ye(),r=ye();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new Wa(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Sy()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class QN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=_r(),this.qt=Cy(),this.Ut=new ut(Ne)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(bf(s))if(r===0){const o=new J(s.path);this.Qt(n,o,Mt.newNoDocument(o,ae.min()))}else Le(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&bf(a.target)){const l=new J(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Mt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ye();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Au(e,n,this.Ut,this.Lt,r);return this.Lt=_r(),this.qt=Cy(),this.Ut=new ut(Ne),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Ty,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ut(Ne),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Ty),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Cy(){return new ht(J.comparator)}function Sy(){return new ht(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZN=(()=>({and:"AND",or:"OR"}))();class ex{constructor(e,n){this.databaseId=e,this.wt=n}}function Ic(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zw(t,e){return t.wt?e.toBase64():e.toUint8Array()}function tx(t,e){return Ic(t,e.toTimestamp())}function Wn(t){return Le(!!t),ae.fromTimestamp(function(e){const n=Zr(e);return new ct(n.seconds,n.nanos)}(t))}function Ep(t,e){return function(n){return new He(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eb(t){const e=He.fromString(t);return Le(ib(e)),e}function Cf(t,e){return Ep(t.databaseId,e.path)}function _h(t,e){const n=eb(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(tb(n))}function Sf(t,e){return Ep(t.databaseId,e)}function nx(t){const e=eb(t);return e.length===4?He.emptyPath():tb(e)}function kf(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tb(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ky(t,e,n){return{name:Cf(t,e),fields:n.value.mapValue.fields}}function rx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.wt?(Le(c===void 0||typeof c=="string"),Wt.fromBase64String(c||"")):(Le(c===void 0||c instanceof Uint8Array),Wt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?T.UNKNOWN:Ww(l.code);return new B(c,l.message||"")}(o);n=new Jw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_h(t,r.document.name),s=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):ae.min(),a=new tn({mapValue:{fields:r.document.fields}}),l=Mt.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new zl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_h(t,r.document),s=r.readTime?Wn(r.readTime):ae.min(),o=Mt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_h(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new zN(i),o=r.targetId;n=new Xw(o,s)}}return n}function ix(t,e){let n;if(e instanceof qa)n={update:ky(t,e.key,e.value)};else if(e instanceof qw)n={delete:Cf(t,e.key)};else if(e instanceof ai)n={update:ky(t,e.key,e.data),updateMask:dx(e.fieldMask)};else{if(!(e instanceof jN))return se();n={verify:Cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof bc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ma)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ga)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ec)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:tx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se()}(t,e.precondition)),n}function sx(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Wn(r.updateTime):Wn(i);return s.isEqual(ae.min())&&(s=Wn(i)),new $N(s,r.transformResults||[])}(n,e))):[]}function ox(t,e){return{documents:[Sf(t,e.path)]}}function ax(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return rb(On.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:es(u.field),direction:ux(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.wt||bu(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lx(t){let e=nx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=nb(u);return h instanceof On&&Rw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ys(ts(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,bu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new wc(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new wc(f,h)}(n.endAt)),PN(e,i,o,s,a,"F",l,c)}function cx(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ts(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ts(e.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(e.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ts(e.unaryFilter.field);return ot.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(e){return ot.create(ts(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return On.create(e.compositeFilter.filters.map(n=>nb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return se()}}(e.compositeFilter.op))}(t):se()}function ux(t){return XN[t]}function hx(t){return JN[t]}function fx(t){return ZN[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return Vt.fromServerFormat(t.fieldPath)}function rb(t){return t instanceof ot?function(e){if(e.op==="=="){if(py(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NAN"}};if(dy(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(py(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NAN"}};if(dy(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(e.field),op:hx(e.op),value:e.value}}}(t):t instanceof On?function(e){const n=e.getFilters().map(r=>rb(r));return n.length===1?n[0]:{compositeFilter:{op:fx(e.op),filters:n}}}(t):se()}function dx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ib(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Yw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=jw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>by(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>by(n,r))}}class Ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=KN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ip(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Wt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.ie=e}}function yx(t){const e=lx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?If(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.Je=new _x}addToCollectionParentIndex(e,n){return this.Je.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Jr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class _x{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(He.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ms(0)}static vn(){return new Ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.changes=new io(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Uo(r.mutation,i,ln.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ko();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_r();const o=Vo(),a=Vo();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ai)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Uo(u.mutation,c,u.mutation.getFieldMask(),ct.now())):o.set(c.key,ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bx(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vo();let i=new ht((o,a)=>o-a),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ln.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Yw();u.forEach(f=>{if(!s.has(f)){const d=jw(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(bi());let a=-1,l=s;return o.next(c=>x.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?x.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ye())).next(u=>({batchId:a,changes:Gw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ko();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(c,u){return new ro(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Mt.newInvalidDocument(c)))});let o=ko();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Uo(c.mutation,l,ln.empty(),ct.now()),Cu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Wn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:yx(r.bundledQuery),readTime:Wn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.overlays=new ht(J.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ht((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=bi(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return x.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mx(n,r));let s=this.es.get(n);s===void 0&&(s=ye(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.ns=new ut(gt.ss),this.rs=new ut(gt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new gt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new gt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new J(new He([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new He([])),r=new gt(n,e),i=new gt(n,e+1);let s=ye();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||Ne(e._s,n._s)}static os(e,n){return Ne(e._s,n._s)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ut(gt.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new px(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new gt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ne);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new gt(new J(s),0);let a=new ut(Ne);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new gt(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.Es=e,this.docs=new ht(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Mt.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_r();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gN(mN(u),r)<=0||(i.has(u.key)||Cu(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kx(this)}getSize(e){return x.resolve(this.size)}}class kx extends wx{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.persistence=e,this.Rs=new io(n=>_p(n),wp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Tp,this.targetCount=0,this.vs=Ms.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ax(this),this.indexManager=new vx,this.remoteDocumentCache=function(r){return new Sx(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new gx(n),this.Ns=new Ix(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Tx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Cx(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Nx(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Nx extends vN{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Fs=new Tp,this.$s=null}static Bs(e){return new Cp(e)}get Ls(){if(this.$s)return this.$s;throw se()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=J.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(_y(n))return x.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=If(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,If(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,r,i){return _y(n)||i.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(cy()<=Ae.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tf(n)),this.Bi(e,o,n,pN(i,-1)))})}Fi(e,n){let r=new ut(Lw(e));return n.forEach((i,s)=>{Cu(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return cy()<=Ae.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Tf(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ht(Ne),this.Ui=new io(s=>_p(s),wp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ex(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Px(t,e,n,r){return new Ox(t,e,n,r)}async function sb(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ye();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Dx(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=x.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const y=l.docVersions.get(d);Le(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ye();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ob(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Mx(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Wt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(g,y,w){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.Cs.updateTargetData(s,d))});let l=_r(),c=ye();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Lx(s,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!r.isEqual(ae.min())){const u=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.qi=i,s))}function Lx(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_r();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Fx(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ux(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Ri(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Af(t,e,n){const r=ue(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!za(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Ay(t,e,n){const r=ue(t);let i=ae.min(),s=ye();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ue(a),h=u.Ui.get(c);return h!==void 0?x.resolve(u.qi.get(h)):u.Cs.getTargetData(l,c)}(r,o,vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ye())).next(a=>(Vx(r,DN(e),a),{documents:a,Hi:s})))}function Vx(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Ry{constructor(){this.activeTargetIds=Qw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $x{constructor(){this.Lr=new Ry,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);Q("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(Q("RestConnection","Received: ",l),l),l=>{throw yf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+no,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=Hx[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new iN;a.setWithCredentials(!0),a.listenOnce(tN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vh.NO_ERROR:const c=a.getResponseJson();Q("Connection","XHR received:",JSON.stringify(c)),s(c);break;case vh.TIMEOUT:Q("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const u=a.getStatus();if(Q("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(f.status);o(new B(d,f.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Q("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ZR(),o=eN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Q("Connection","Creating WebChannel: "+l,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const f=new jx({Hr:g=>{h?Q("Connection","Not sending because WebChannel is closed:",g):(u||(Q("Connection","Opening WebChannel transport."),c.open(),u=!0),Q("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),d=(g,y,w)=>{g.listen(y,v=>{try{w(v)}catch(b){setTimeout(()=>{throw b},0)}})};return d(c,gl.EventType.OPEN,()=>{h||Q("Connection","WebChannel transport opened.")}),d(c,gl.EventType.CLOSE,()=>{h||(h=!0,Q("Connection","WebChannel transport closed"),f.io())}),d(c,gl.EventType.ERROR,g=>{h||(h=!0,yf("Connection","WebChannel transport errored:",g),f.io(new B(T.UNAVAILABLE,"The operation could not be completed")))}),d(c,gl.EventType.MESSAGE,g=>{var y;if(!h){const w=g.data[0];Le(!!w);const v=w,b=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(b){Q("Connection","WebChannel received error:",b);const _=b.status;let A=function(Z){const F=it[Z];if(F!==void 0)return Ww(F)}(_),U=b.message;A===void 0&&(A=T.INTERNAL,U="Unknown error status: "+_+" with message "+b.message),h=!0,f.io(new B(A,U)),c.close()}else Q("Connection","WebChannel received:",w),f.ro(w)}}),d(o,nN.STAT_EVENT,g=>{g.stat===ay.PROXY?Q("Connection","Detected buffering proxy"):g.stat===ay.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return new ex(t,!0)}class ab{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ab(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new B(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qx extends lb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rx(this.yt,e),r=function(i){if(!("targetChange"in i))return ae.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?Wn(s.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=kf(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=bf(a)?{documents:ox(i,a)}:{query:ax(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Zw(i,s.resumeToken):s.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=Ic(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=cx(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=kf(this.yt),n.removeTarget=e,this.Bo(n)}}class Wx extends lb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=sx(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.Zo(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=kf(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ix(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class Gx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(yr(n),this.ou=!1):Q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l._u.add(4),await Ka(l),l.gu.set("Unknown"),l._u.delete(4),await Nu(l)}(this))})}),this.gu=new Gx(r,i)}}async function Nu(t){if(Gi(t))for(const e of t.wu)await e(!0)}async function Ka(t){for(const e of t.wu)await e(!1)}function cb(t,e){const n=ue(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Rp(n)?Ap(n):so(n).ko()&&kp(n,e))}function ub(t,e){const n=ue(t),r=so(n);n.du.delete(e),r.ko()&&hb(n,e),n.du.size===0&&(r.ko()?r.Fo():Gi(n)&&n.gu.set("Unknown"))}function kp(t,e){t.yu.Ot(e.targetId),so(t).zo(e)}function hb(t,e){t.yu.Ot(e),so(t).Ho(e)}function Ap(t){t.yu=new QN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),so(t).start(),t.gu.uu()}function Rp(t){return Gi(t)&&!so(t).No()&&t.du.size>0}function Gi(t){return ue(t)._u.size===0}function fb(t){t.yu=void 0}async function Qx(t){t.du.forEach((e,n)=>{kp(t,e)})}async function Xx(t,e){fb(t),Rp(t)?(t.gu.hu(e),Ap(t)):t.gu.set("Unknown")}async function Jx(t,e,n){if(t.gu.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tc(t,r)}else if(e instanceof zl?t.yu.Kt(e):e instanceof Xw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ae.min()))try{const r=await ob(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Wt.EMPTY_BYTE_STRING,l.snapshotVersion)),hb(i,a);const c=new Ri(l.target,a,1,l.sequenceNumber);kp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Tc(t,r)}}async function Tc(t,e,n){if(!za(e))throw e;t._u.add(1),await Ka(t),t.gu.set("Offline"),n||(n=()=>ob(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Nu(t)})}function db(t,e){return e().catch(n=>Tc(t,n,e))}async function xu(t){const e=ue(t),n=ei(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Zx(e);)try{const i=await Fx(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,eO(e,i)}catch(i){await Tc(e,i)}pb(e)&&mb(e)}function Zx(t){return Gi(t)&&t.fu.length<10}function eO(t,e){t.fu.push(e);const n=ei(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function pb(t){return Gi(t)&&!ei(t).No()&&t.fu.length>0}function mb(t){ei(t).start()}async function tO(t){ei(t).eu()}async function nO(t){const e=ei(t);for(const n of t.fu)e.Xo(n.mutations)}async function rO(t,e,n){const r=t.fu.shift(),i=Ip.from(r,e,n);await db(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function iO(t,e){e&&ei(t).Yo&&await async function(n,r){if(i=r.code,qN(i)&&i!==T.ABORTED){const s=n.fu.shift();ei(n).Mo(),await db(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await xu(n)}var i}(t,e),pb(t)&&mb(t)}async function xy(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n._u.add(3),await Ka(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Nu(n)}async function sO(t,e){const n=ue(t);e?(n._u.delete(2),await Nu(n)):e||(n._u.add(2),await Ka(n),n.gu.set("Unknown"))}function so(t){return t.pu||(t.pu=function(e,n,r){const i=ue(e);return i.su(),new qx(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Qx.bind(null,t),Zr:Xx.bind(null,t),Wo:Jx.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Rp(t)?Ap(t):t.gu.set("Unknown")):(await t.pu.stop(),fb(t))})),t.pu}function ei(t){return t.Iu||(t.Iu=function(e,n,r){const i=ue(e);return i.su(),new Wx(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:tO.bind(null,t),Zr:iO.bind(null,t),tu:nO.bind(null,t),Zo:rO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await xu(t)):(await t.Iu.stop(),t.fu.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Np(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(t,e){if(yr("AsyncQueue",`${e}: ${t}`),za(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ko(),this.sortedSet=new ht(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.Tu=new ht(J.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):se():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ls(e,n,_s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.Au=void 0,this.listeners=[]}}class aO{constructor(){this.queries=new io(e=>Mw(e),Tu),this.onlineState="Unknown",this.Ru=new Set}}async function Op(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new oO),i)try{s.Au=await n.onListen(r)}catch(o){const a=xp(o,`Initialization of query '${Tf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Dp(n)}async function Pp(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lO(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Dp(n)}function cO(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Dp(t){t.Ru.forEach(e=>{e.next()})}class Mp{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.key=e}}class yb{constructor(e){this.key=e}}class uO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ye(),this.mutatedKeys=ye(),this.Gu=Lw(e),this.Qu=new _s(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Oy,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=Cu(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?g!==y&&(r.track({type:3,doc:d}),w=!0):this.Hu(f,d)||(r.track({type:2,doc:d}),w=!0,(l&&this.Gu(d,l)>0||c&&this.Gu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),w=!0):f&&!d&&(r.track({type:1,doc:f}),w=!0,(l||c)&&(a=!0)),w&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((c,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return d(h)-d(f)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ls(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Oy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ye(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new yb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new gb(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ye();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ls.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class hO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fO{constructor(e){this.key=e,this.nc=!1}}class dO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new io(a=>Mw(a),Tu),this.rc=new Map,this.oc=new Set,this.uc=new ht(J.comparator),this.cc=new Map,this.ac=new Tp,this.hc={},this.lc=new Map,this.fc=Ms.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function pO(t,e){const n=TO(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Ux(n.localStore,vr(e));n.isPrimaryClient&&cb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await mO(n,e,r,a==="current",o.resumeToken)}return i}async function mO(t,e,n,r,i){t._c=(h,f,d)=>async function(g,y,w,v){let b=y.view.Wu(w);b.$i&&(b=await Ay(g.localStore,y.query,!1).then(({documents:U})=>y.view.Wu(U,b)));const _=v&&v.targetChanges.get(y.targetId),A=y.view.applyChanges(b,g.isPrimaryClient,_);return Dy(g,y.targetId,A.Xu),A.snapshot}(t,h,f,d);const s=await Ay(t.localStore,e,!0),o=new uO(e,s.Hi),a=o.Wu(s.documents),l=Wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Dy(t,n,c.Xu);const u=new hO(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function gO(t,e){const n=ue(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Tu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Af(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ub(n.remoteStore,r.targetId),Rf(n,r.targetId)}).catch(ja)):(Rf(n,r.targetId),await Af(n.localStore,r.targetId,!0))}async function yO(t,e,n){const r=CO(t);try{const i=await function(s,o){const a=ue(s),l=ct.now(),c=o.reduce((f,d)=>f.add(d.key),ye());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=_r(),g=ye();return a.Gi.getEntries(f,c).next(y=>{d=y,d.forEach((w,v)=>{v.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const w=[];for(const v of o){const b=HN(v,u.get(v.key).overlayedDocument);b!=null&&w.push(new ai(v.key,b,Pw(b.value.mapValue),qn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Gw(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new ht(Ne)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ga(r,i.changes),await xu(r.remoteStore)}catch(i){const s=xp(i,"Failed to persist write");n.reject(s)}}async function vb(t,e){const n=ue(t);try{const r=await Mx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Le(o.nc):i.removedDocuments.size>0&&(Le(o.nc),o.nc=!1))}),await Ga(n,r,e)}catch(r){await ja(r)}}function Py(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Dp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vO(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ht(J.comparator);o=o.insert(s,Mt.newNoDocument(s,ae.min()));const a=ye().add(s),l=new Au(ae.min(),new Map,new ut(Ne),o,a);await vb(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Lp(r)}else await Af(r.localStore,e,!1).then(()=>Rf(r,e,n)).catch(ja)}async function _O(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await Dx(n.localStore,e);wb(n,r,null),_b(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ga(n,i)}catch(i){await ja(i)}}async function wO(t,e,n){const r=ue(t);try{const i=await function(s,o){const a=ue(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Le(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);wb(r,e,n),_b(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ga(r,i)}catch(i){await ja(i)}}function _b(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function wb(t,e,n){const r=ue(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||bb(t,r)})}function bb(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(ub(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Lp(t))}function Dy(t,e,n){for(const r of n)r instanceof gb?(t.ac.addReference(r.key,e),bO(t,r)):r instanceof yb?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||bb(t,r.key)):se()}function bO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.oc.add(r),Lp(t))}function Lp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J(He.fromString(e)),r=t.fc.next();t.cc.set(r,new fO(n)),t.uc=t.uc.insert(n,r),cb(t.remoteStore,new Ri(vr(Eu(n.path)),r,2,yp.at))}}async function Ga(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Sp.Ci(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const c=ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(l,h=>x.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>x.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!za(u))throw u;Q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.qi.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.qi=c.qi.insert(h,g)}}}(r.localStore,s))}async function EO(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await sb(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ga(n,r.ji)}}function IO(t,e){const n=ue(t),r=n.cc.get(e);if(r&&r.nc)return ye().add(r.key);{let i=ye();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function TO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vO.bind(null,e),e.sc.Wo=lO.bind(null,e.eventManager),e.sc.wc=cO.bind(null,e.eventManager),e}function CO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wO.bind(null,e),e}class SO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Px(this.persistence,new xx,e.initialUser,this.yt)}yc(e){return new Rx(Cp.Bs,this.yt)}gc(e){return new $x}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Py(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EO.bind(null,this.syncEngine),await sO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aO}createDatastore(e){const n=Ru(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new zx(i));var i;return function(s,o,a,l){return new Kx(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Py(this.syncEngine,a,0),o=Ny.C()?new Ny:new Bx,new Yx(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new dO(r,i,s,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);Q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ka(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AO(t,e,n,r){if(e===!0&&r===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!J.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ly(t){if(J.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ou(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Map;class Uy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,AO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sN;switch(n.type){case"gapi":const r=n.client;return new cN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fy.get(e);n&&(Q("ComponentProvider","Removing Datastore"),Fy.delete(e),n.terminate())}(this),Promise.resolve()}}function RO(t,e,n,r={}){var i;const s=(t=pn(t,Pu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&yf("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Pt.MOCK_USER;else{o=MS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pt(l)}t._authCredentials=new oN(new Ew(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new li(this.firestore,e,this._query)}}class Kr extends li{constructor(e,n,r){super(e,n,Eu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new J(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Ya(t,e,...n){if(t=Ye(t),Eb("collection","path",e),t instanceof Pu){const r=He.fromString(e,...n);return Ly(r),new Kr(t,null,r)}{if(!(t instanceof zt||t instanceof Kr))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Ly(r),new Kr(t.firestore,null,r)}}function Fp(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Iw.R()),Eb("doc","path",e),t instanceof Pu){const r=He.fromString(e,...n);return My(r),new zt(t,null,new J(r))}{if(!(t instanceof zt||t instanceof Kr))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return My(r),new zt(t.firestore,t instanceof Kr?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):yr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=Iw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xO(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function OO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PO(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>xy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>xy(e.remoteStore,s)),t.onlineComponents=e}async function PO(t){return t.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await xO(t,new SO)),t.offlineComponents}async function Ib(t){return t.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await OO(t,new kO)),t.onlineComponents}function DO(t){return Ib(t).then(e=>e.syncEngine)}async function Cc(t){const e=await Ib(t),n=e.eventManager;return n.onListen=pO.bind(null,e.syncEngine),n.onUnlisten=gO.bind(null,e.syncEngine),n}function MO(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new Up({next:h=>{s.enqueueAndForget(()=>Pp(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new B(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new B(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Mp(Eu(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Op(i,u)}(await Cc(t),t.asyncQueue,e,n,r)),r.promise}function LO(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new Up({next:h=>{s.enqueueAndForget(()=>Pp(i,u)),h.fromCache&&a.source==="server"?l.reject(new B(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Mp(o,c,{includeMetadataChanges:!0,Nu:!0});return Op(i,u)}(await Cc(t),t.asyncQueue,e,n,r)),r.promise}class FO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ab(this,"async_queue_retry"),this.Wc=()=>{const n=wh();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=wh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new fr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!za(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Np.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Vy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Fi extends Pu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new FO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tb(this),this._firestoreClient.terminate()}}function UO(t,e){const n=typeof t=="object"?t:Ud(),r=typeof t=="string"?t:e||"(default)",i=Fd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PS("firestore");s&&RO(i,...s)}return i}function Du(t){return t._firestoreClient||Tb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new _N(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(Wt.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=/^__.*__$/;class $O{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new qa(e,this.data,n,this.fieldTransforms)}}class Cb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Sc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Sb(this.sa)&&VO.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class BO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Ru(e)}da(e,n,r,i=!1){return new Bp({sa:e,methodName:n,fa:r,path:Vt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Hp(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new BO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HO(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);jp("Data must be an object, but it was:",o,r);const a=kb(r,o);let l,c;if(s.merge)l=new ln(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Nf(e,h,n);if(!o.contains(f))throw new B(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Rb(u,f)||u.push(f)}l=new ln(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new $O(new tn(a),l,c)}class Lu extends Vp{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lu}}function jO(t,e,n,r){const i=t.da(1,e,n);jp("Data must be an object, but it was:",i,r);const s=[],o=tn.empty();Ki(r,(l,c)=>{const u=zp(e,l,n);c=Ye(c);const h=i.ca(u);if(c instanceof Lu)s.push(u);else{const f=Qa(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new ln(s);return new Cb(o,a,i.fieldTransforms)}function zO(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Nf(e,r,n)],l=[i];if(s.length%2!=0)throw new B(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Nf(e,s[f])),l.push(s[f+1]);const c=[],u=tn.empty();for(let f=a.length-1;f>=0;--f)if(!Rb(c,a[f])){const d=a[f];let g=l[f];g=Ye(g);const y=o.ca(d);if(g instanceof Lu)c.push(d);else{const w=Qa(g,y);w!=null&&(c.push(d),u.set(d,w))}}const h=new ln(c);return new Cb(u,h,o.fieldTransforms)}function qO(t,e,n,r=!1){return Qa(n,t.da(r?4:3,e))}function Qa(t,e){if(Ab(t=Ye(t)))return jp("Unsupported field value:",e,t),kb(t,e);if(t instanceof Vp)return function(n,r){if(!Sb(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qa(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return LN(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:Ic(r.yt,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ic(r.yt,i)}}if(n instanceof $p)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fs)return{bytesValue:Zw(r.yt,n._byteString)};if(n instanceof zt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ep(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ou(n)}`)}(t,e)}function kb(t,e){const n={};return Tw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const s=Qa(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ab(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof $p||t instanceof Fs||t instanceof zt||t instanceof Vp)}function jp(t,e,n){if(!Ab(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ou(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Nf(t,e,n){if((e=Ye(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return zp(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const WO=new RegExp("[~\\*/\\[\\]]");function zp(t,e,n){if(e.search(WO)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(T.INVALID_ARGUMENT,a+t+l)}function Rb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KO extends Nb{data(){return super.data()}}function qp(t,e){return typeof e=="string"?zp(t,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wp{}class Ob extends Wp{}function Fu(t,e,...n){let r=[];e instanceof Wp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Gp).length,o=i.filter(a=>a instanceof Kp).length;if(s>1||s>0&&o>0)throw new B(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Kp extends Ob{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kp(e,n,r)}_apply(e){const n=this._parse(e);return Pb(e._query,n),new li(e.firestore,e.converter,Ef(e._query,n))}_parse(e){const n=Hp(e.firestore);return function(i,s,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new B(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){By(u,c);const f=[];for(const d of u)f.push($y(a,i,d));h={arrayValue:{values:f}}}else h=$y(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||By(u,c),h=qO(o,s,u,c==="in"||c==="not-in");return ot.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Gp extends Wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Pb(s,a),s=Ef(s,a)}(e._query,n),new li(e.firestore,e.converter,Ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yp extends Ob{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new B(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new B(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ys(i,s);return function(a,l){if(bp(a)===null){const c=Iu(a);c!==null&&Db(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new li(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ro(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Uu(t,e="asc"){const n=e,r=qp("orderBy",t);return Yp._create(r,n)}function $y(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new B(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dw(e)&&n.indexOf("/")!==-1)throw new B(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!J.isDocumentKey(r))throw new B(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fy(t,new J(r))}if(n instanceof zt)return fy(t,n._key);throw new B(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ou(n)}.`)}function By(t,e){if(!Array.isArray(t)||t.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new B(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Pb(t,e){if(e.isInequality()){const r=Iu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new B(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=bp(t);s!==null&&Db(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Db(t,e,n){if(!n.isEqual(e))throw new B(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class GO{convertValue(e,n="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Ki(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $p(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Le(ib(r));const i=new fa(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mb extends Nb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ql extends Mb{data(e={}){return super.data(e)}}class Lb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ao(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ql(this._firestore,this._userDataWriter,r.key,r,new Ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ql(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ql(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:QO(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){t=pn(t,zt);const e=pn(t.firestore,Fi);return MO(Du(e),t._key).then(n=>Ub(e,t,n))}class Qp extends GO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function V8(t){t=pn(t,li);const e=pn(t.firestore,Fi),n=Du(e),r=new Qp(e);return xb(t._query),LO(n,t._query).then(i=>new Lb(e,r,t,i))}function $8(t,e,n){t=pn(t,zt);const r=pn(t.firestore,Fi),i=YO(t.converter,e,n);return Fb(r,[HO(Hp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qn.none())])}function XO(t,e,n,...r){t=pn(t,zt);const i=pn(t.firestore,Fi),s=Hp(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Mu?zO(s,"updateDoc",t._key,e,n,r):jO(s,"updateDoc",t._key,e),Fb(i,[o.toMutation(t._key,qn.exists(!0))])}function Xp(t,...e){var n,r,i;t=Ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof zt)c=pn(t.firestore,Fi),u=Eu(t._key.path),l={next:h=>{e[o]&&e[o](Ub(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=pn(t,li);c=pn(h.firestore,Fi),u=h._query;const f=new Qp(c);l={next:d=>{e[o]&&e[o](new Lb(c,f,h,d))},error:e[o+1],complete:e[o+2]},xb(t._query)}return function(h,f,d,g){const y=new Up(g),w=new Mp(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Op(await Cc(h),w)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>Pp(await Cc(h),w))}}(Du(c),u,a,l)}function Fb(t,e){return function(n,r){const i=new fr;return n.asyncQueue.enqueueAndForget(async()=>yO(await DO(n),r,i)),i.promise}(Du(t),e)}function Ub(t,e,n){const r=n.docs.get(e._key),i=new Qp(t);return new Mb(t,i,e._key,r,new Ao(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){no=n})(qi),Gn(new Nn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Fi(new aN(n.getProvider("auth-internal")),new hN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),cn(ly,"3.8.3",t),cn(ly,"3.8.3","esm2017")})();var JO="firebase",ZO="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(JO,ZO,"app");const eP={apiKey:"AIzaSyBSW1_s4aI-5bFgctl8v6n_NnCU1CsyREY",authDomain:"cowcardfile-b31b6.firebaseapp.com",projectId:"cowcardfile-b31b6",storageBucket:"cowcardfile-b31b6.appspot.com",messagingSenderId:"1019719663138",appId:"1:1019719663138:web:11e5fd4175c76a2727147b",measurementId:"G-F285BZBB1M"},Vb=U0(eP),Jp=UO(Vb),B8=Fu(Ya(Jp,"breeds"),Uu("id")),H8=Fu(Ya(Jp,"colorations"),Uu("id")),tP=Ya(Jp,"users");let Br,xf,nP;function rP(t){if(Yn().currentUser)return Fp(xf,t)}function $b(t){if(Yn().currentUser)return Ya(rP(t),"cows")}function j8(t){if(Yn().currentUser)return Fu($b(t),Uu("number"))}function z8(t,e){if(Yn().currentUser)return Fp($b(t),e)}Wd(Yn(),t=>{t?(Br=Fp(tP,t.uid),xf=Ya(Br,"farms"),nP=Fu(xf,Uu("name"))):console.log("not signed in")});const iP="modulepreload",sP=function(t){return"/cowlendar/"+t},jy={},mo=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=sP(s),s in jy)return;jy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":iP,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ns=typeof window<"u";function oP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function bh(t,e){const n={};for(const r in e){const i=e[r];n[r]=Pn(i)?i.map(t):t(i)}return n}const $o=()=>{},Pn=Array.isArray,aP=/\/$/,lP=t=>t.replace(aP,"");function Eh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fP(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function cP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uP(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Us(e.matched[r],n.matched[i])&&Bb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hP(t[n],e[n]))return!1;return!0}function hP(t,e){return Pn(t)?qy(t,e):Pn(e)?qy(e,t):t===e}function qy(t,e){return Pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ya;(function(t){t.pop="pop",t.push="push"})(ya||(ya={}));var Bo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bo||(Bo={}));function dP(t){if(!t)if(ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lP(t)}const pP=/^[^#]+#/;function mP(t,e){return t.replace(pP,"#")+e}function gP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vu=()=>({left:window.pageXOffset,top:window.pageYOffset});function yP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=gP(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wy(t,e){return(history.state?history.state.position-e:-1)+t}const Of=new Map;function vP(t,e){Of.set(t,e)}function _P(t){const e=Of.get(t);return Of.delete(t),e}let wP=()=>location.protocol+"//"+location.host;function Hb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),zy(l,"")}return zy(n,t)+r+i}function bP(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const d=Hb(t,location),g=n.value,y=e.value;let w=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}w=y?f.position-y.position:0}else r(d);i.forEach(v=>{v(n.value,g,{delta:w,type:ya.pop,direction:w?w>0?Bo.forward:Bo.back:Bo.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:Vu()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ky(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Vu():null}}function EP(t){const{history:e,location:n}=window,r={value:Hb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:wP()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Oe({},e.state,Ky(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Oe({},i.value,e.state,{forward:l,scroll:Vu()});s(u.current,u,!0);const h=Oe({},Ky(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function IP(t){t=dP(t);const e=EP(t),n=bP(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Oe({location:"",base:t,go:r,createHref:mP.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function TP(t){return typeof t=="string"||t&&typeof t=="object"}function jb(t){return typeof t=="string"||typeof t=="symbol"}const Pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zb=Symbol("");var Gy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gy||(Gy={}));function Vs(t,e){return Oe(new Error,{type:t,[zb]:!0},e)}function rr(t,e){return t instanceof Error&&zb in t&&(e==null||!!(t.type&e))}const Yy="[^/]+?",CP={sensitive:!1,strict:!1,start:!0,end:!0},SP=/[.+*?^${}()[\]/\\]/g;function kP(t,e){const n=Oe({},CP,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(SP,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:y,optional:w,regexp:v}=f;s.push({name:g,repeatable:y,optional:w});const b=v||Yy;if(b!==Yy){d+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+A.message)}}let _=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(_=w&&c.length<2?`(?:/${_})`:"/"+_),w&&(_+="?"),i+=_,d+=20,w&&(d+=-8),y&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:y,optional:w}=d,v=g in c?c[g]:"";if(Pn(v)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Pn(v)?v.join("/"):v;if(!b)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function AP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RP(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=AP(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Qy(r))return 1;if(Qy(i))return-1}return i.length-r.length}function Qy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NP={type:0,value:""},xP=/[a-zA-Z0-9_]/;function OP(t){if(!t)return[[]];if(t==="/")return[[NP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:xP.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function PP(t,e,n){const r=kP(OP(t.path),n),i=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function DP(t,e){const n=[],r=new Map;e=Zy({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const d=!f,g=MP(u);g.aliasOf=f&&f.record;const y=Zy(e,u),w=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of _)w.push(Oe({},g,{components:f?f.record.components:g.components,path:A,aliasOf:f?f.record:g}))}let v,b;for(const _ of w){const{path:A}=_;if(h&&A[0]!=="/"){const U=h.record.path,Z=U[U.length-1]==="/"?"":"/";_.path=h.record.path+(A&&Z+A)}if(v=PP(_,h,y),f?f.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),d&&u.name&&!Jy(v)&&o(u.name)),g.children){const U=g.children;for(let Z=0;Z<U.length;Z++)s(U[Z],v,f&&f.children[Z])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return b?()=>{o(b)}:$o}function o(u){if(jb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&RP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jy(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},g,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Vs(1,{location:u});y=f.record.name,d=Oe(Xy(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Xy(u.params,f.keys.map(b=>b.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(b=>b.re.test(g)),f&&(d=f.parse(g),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Vs(1,{location:u,currentLocation:h});y=f.record.name,d=Oe({},h.params,u.params),g=f.stringify(d)}const w=[];let v=f;for(;v;)w.unshift(v.record),v=v.parent;return{name:y,path:g,params:d,matched:w,meta:FP(w)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Xy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function MP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Jy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Zy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qb(t,e){return e.children.some(n=>n===t||qb(t,n))}const Wb=/#/g,UP=/&/g,VP=/\//g,$P=/=/g,BP=/\?/g,Kb=/\+/g,HP=/%5B/g,jP=/%5D/g,Gb=/%5E/g,zP=/%60/g,Yb=/%7B/g,qP=/%7C/g,Qb=/%7D/g,WP=/%20/g;function Zp(t){return encodeURI(""+t).replace(qP,"|").replace(HP,"[").replace(jP,"]")}function KP(t){return Zp(t).replace(Yb,"{").replace(Qb,"}").replace(Gb,"^")}function Pf(t){return Zp(t).replace(Kb,"%2B").replace(WP,"+").replace(Wb,"%23").replace(UP,"%26").replace(zP,"`").replace(Yb,"{").replace(Qb,"}").replace(Gb,"^")}function GP(t){return Pf(t).replace($P,"%3D")}function YP(t){return Zp(t).replace(Wb,"%23").replace(BP,"%3F")}function QP(t){return t==null?"":YP(t).replace(VP,"%2F")}function kc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function XP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Kb," "),o=s.indexOf("="),a=kc(o<0?s:s.slice(0,o)),l=o<0?null:kc(s.slice(o+1));if(a in e){let c=e[a];Pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ev(t){let e="";for(let n in t){const r=t[n];if(n=GP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(r)?r.map(s=>s&&Pf(s)):[r&&Pf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function JP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const ZP=Symbol(""),tv=Symbol(""),em=Symbol(""),Xb=Symbol(""),Df=Symbol("");function go(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Lr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Vs(4,{from:n,to:e})):h instanceof Error?a(h):TP(h)?a(Vs(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ih(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(eD(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Lr(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=oP(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Lr(f,n,r,s,o)()}))}}return i}function eD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nv(t){const e=St(em),n=St(Xb),r=W(()=>e.resolve(S(t.to))),i=W(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Us.bind(null,u));if(f>-1)return f;const d=rv(l[c-2]);return c>1&&rv(u)===d&&h[h.length-1].path!==d?h.findIndex(Us.bind(null,l[c-2])):f}),s=W(()=>i.value>-1&&iD(n.params,r.value.params)),o=W(()=>i.value>-1&&i.value===n.matched.length-1&&Bb(n.params,r.value.params));function a(l={}){return rD(l)?e[S(t.replace)?"replace":"push"](S(t.to)).catch($o):Promise.resolve()}return{route:r,href:W(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const tD=sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nv,setup(t,{slots:e}){const n=Sa(nv(t)),{options:r}=St(em),i=W(()=>({[iv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[iv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ka("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),nD=tD;function rD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iD(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Pn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function rv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const iv=(t,e,n)=>t??e??n,sD=sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=St(Df),i=W(()=>t.route||r.value),s=St(tv,0),o=W(()=>{let c=S(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=W(()=>i.value.matched[o.value]);ps(tv,W(()=>o.value+1)),ps(ZP,a),ps(Df,i);const l=Bt();return Dt(()=>[l.value,a.value,t.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Us(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return sv(n.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=ka(f,Oe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return sv(n.default,{Component:w,route:c})||w}}});function sv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jb=sD;function oD(t){const e=DP(t.routes,t),n=t.parseQuery||XP,r=t.stringifyQuery||ev,i=t.history,s=go(),o=go(),a=go(),l=zT(Pr);let c=Pr;ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bh.bind(null,C=>""+C),h=bh.bind(null,QP),f=bh.bind(null,kc);function d(C,V){let M,G;return jb(C)?(M=e.getRecordMatcher(C),G=V):G=C,e.addRoute(G,M)}function g(C){const V=e.getRecordMatcher(C);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(C=>C.record)}function w(C){return!!e.getRecordMatcher(C)}function v(C,V){if(V=Oe({},V||l.value),typeof C=="string"){const p=Eh(n,C,V.path),m=e.resolve({path:p.path},V),E=i.createHref(p.fullPath);return Oe(p,m,{params:f(m.params),hash:kc(p.hash),redirectedFrom:void 0,href:E})}let M;if("path"in C)M=Oe({},C,{path:Eh(n,C.path,V.path).path});else{const p=Oe({},C.params);for(const m in p)p[m]==null&&delete p[m];M=Oe({},C,{params:h(C.params)}),V.params=h(V.params)}const G=e.resolve(M,V),me=C.hash||"";G.params=u(f(G.params));const Me=cP(r,Oe({},C,{hash:KP(me),path:G.path})),ce=i.createHref(Me);return Oe({fullPath:Me,hash:me,query:r===ev?JP(C.query):C.query||{}},G,{redirectedFrom:void 0,href:ce})}function b(C){return typeof C=="string"?Eh(n,C,l.value.path):Oe({},C)}function _(C,V){if(c!==C)return Vs(8,{from:V,to:C})}function A(C){return F(C)}function U(C){return A(Oe(b(C),{replace:!0}))}function Z(C){const V=C.matched[C.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let G=typeof M=="function"?M(C):M;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=b(G):{path:G},G.params={}),Oe({query:C.query,hash:C.hash,params:"path"in G?{}:C.params},G)}}function F(C,V){const M=c=v(C),G=l.value,me=C.state,Me=C.force,ce=C.replace===!0,p=Z(M);if(p)return F(Oe(b(p),{state:typeof p=="object"?Oe({},me,p.state):me,force:Me,replace:ce}),V||M);const m=M;m.redirectedFrom=V;let E;return!Me&&uP(r,G,M)&&(E=Vs(16,{to:m,from:G}),Ge(G,G,!0,!1)),(E?Promise.resolve(E):ge(m,G)).catch(I=>rr(I)?rr(I,2)?I:dt(I):Te(I,m,G)).then(I=>{if(I){if(rr(I,2))return F(Oe({replace:ce},b(I.to),{state:typeof I.to=="object"?Oe({},me,I.to.state):me,force:Me}),V||m)}else I=Kt(m,G,!0,ce,me);return Ke(m,G,I),I})}function de(C,V){const M=_(C,V);return M?Promise.reject(M):Promise.resolve()}function ge(C,V){let M;const[G,me,Me]=aD(C,V);M=Ih(G.reverse(),"beforeRouteLeave",C,V);for(const p of G)p.leaveGuards.forEach(m=>{M.push(Lr(m,C,V))});const ce=de.bind(null,C,V);return M.push(ce),Ji(M).then(()=>{M=[];for(const p of s.list())M.push(Lr(p,C,V));return M.push(ce),Ji(M)}).then(()=>{M=Ih(me,"beforeRouteUpdate",C,V);for(const p of me)p.updateGuards.forEach(m=>{M.push(Lr(m,C,V))});return M.push(ce),Ji(M)}).then(()=>{M=[];for(const p of C.matched)if(p.beforeEnter&&!V.matched.includes(p))if(Pn(p.beforeEnter))for(const m of p.beforeEnter)M.push(Lr(m,C,V));else M.push(Lr(p.beforeEnter,C,V));return M.push(ce),Ji(M)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),M=Ih(Me,"beforeRouteEnter",C,V),M.push(ce),Ji(M))).then(()=>{M=[];for(const p of o.list())M.push(Lr(p,C,V));return M.push(ce),Ji(M)}).catch(p=>rr(p,8)?p:Promise.reject(p))}function Ke(C,V,M){for(const G of a.list())G(C,V,M)}function Kt(C,V,M,G,me){const Me=_(C,V);if(Me)return Me;const ce=V===Pr,p=ns?history.state:{};M&&(G||ce?i.replace(C.fullPath,Oe({scroll:ce&&p&&p.scroll},me)):i.push(C.fullPath,me)),l.value=C,Ge(C,V,M,ce),dt()}let at;function le(){at||(at=i.listen((C,V,M)=>{if(!Xi.listening)return;const G=v(C),me=Z(G);if(me){F(Oe(me,{replace:!0}),G).catch($o);return}c=G;const Me=l.value;ns&&vP(Wy(Me.fullPath,M.delta),Vu()),ge(G,Me).catch(ce=>rr(ce,12)?ce:rr(ce,2)?(F(ce.to,G).then(p=>{rr(p,20)&&!M.delta&&M.type===ya.pop&&i.go(-1,!1)}).catch($o),Promise.reject()):(M.delta&&i.go(-M.delta,!1),Te(ce,G,Me))).then(ce=>{ce=ce||Kt(G,Me,!1),ce&&(M.delta&&!rr(ce,8)?i.go(-M.delta,!1):M.type===ya.pop&&rr(ce,20)&&i.go(-1,!1)),Ke(G,Me,ce)}).catch($o)}))}let Rt=go(),qe=go(),_e;function Te(C,V,M){dt(C);const G=qe.list();return G.length?G.forEach(me=>me(C,V,M)):console.error(C),Promise.reject(C)}function we(){return _e&&l.value!==Pr?Promise.resolve():new Promise((C,V)=>{Rt.add([C,V])})}function dt(C){return _e||(_e=!C,le(),Rt.list().forEach(([V,M])=>C?M(C):V()),Rt.reset()),C}function Ge(C,V,M,G){const{scrollBehavior:me}=t;if(!ns||!me)return Promise.resolve();const Me=!M&&_P(Wy(C.fullPath,0))||(G||!M)&&history.state&&history.state.scroll||null;return Z_().then(()=>me(C,V,Me)).then(ce=>ce&&yP(ce)).catch(ce=>Te(ce,C,V))}const bt=C=>i.go(C);let Nt;const pt=new Set,Xi={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:w,getRoutes:y,resolve:v,options:t,push:A,replace:U,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:qe.add,isReady:we,install(C){const V=this;C.component("RouterLink",nD),C.component("RouterView",Jb),C.config.globalProperties.$router=V,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>S(l)}),ns&&!Nt&&l.value===Pr&&(Nt=!0,A(i.location).catch(me=>{}));const M={};for(const me in Pr)M[me]=W(()=>l.value[me]);C.provide(em,V),C.provide(Xb,Sa(M)),C.provide(Df,l);const G=C.unmount;pt.add(C),C.unmount=function(){pt.delete(C),pt.size<1&&(c=Pr,at&&at(),at=null,l.value=Pr,Nt=!1,_e=!1),G()}}};return Xi}function Ji(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aD(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Us(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Us(c,l))||i.push(l))}return[n,r,i]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=new Map,cD={activated:!1,tokenObservers:[]};function Xn(t){return lD.get(t)||Object.assign({},cD)}const ov={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ta,await hD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ta,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function hD(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ac=new Ys("appCheck","AppCheck",fD);function dD(t){if(!Xn(t).activated)throw Ac.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="firebase-app-check-database",mD=1,Mf="firebase-app-check-store";let _l=null;function gD(){return _l||(_l=new Promise((t,e)=>{try{const n=indexedDB.open(pD,mD);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Ac.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Mf,{keyPath:"compositeKey"})}}}catch(n){e(Ac.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),_l)}function yD(t,e){return vD(_D(t),e)}async function vD(t,e){const r=(await gD()).transaction(Mf,"readwrite"),s=r.objectStore(Mf).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Ac.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function _D(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Aa("@firebase/app-check");function av(t,e){return D0()?yD(t,e).catch(n=>{Lf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD={error:"UNKNOWN_ERROR"};function bD(t){return tu.encodeString(JSON.stringify(t),!1)}async function Ff(t,e=!1){const n=t.app;dD(n);const r=Xn(n);let i=r.token,s;if(i&&!Ro(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(Ro(l)?i=l:await av(n,void 0))}if(!e&&i&&Ro(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await Xn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Lf.warn(l.message):Lf.error(l),s=l}let a;return i?s?Ro(i)?a={token:i.token,internalError:s}:a=cv(s):(a={token:i.token},r.token=i,await av(n,i)):a=cv(s),o&&TD(n,a),a}function ED(t,e,n,r){const{app:i}=t,s=Xn(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ro(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),lv(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>lv(t))}function Zb(t,e){const n=Xn(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function lv(t){const{app:e}=t,n=Xn(e);let r=n.tokenRefresher;r||(r=ID(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function ID(t){const{app:e}=t;return new uD(async()=>{const n=Xn(e);let r;if(n.token?r=await Ff(t,!0):r=await Ff(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Xn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},ov.RETRIAL_MIN_WAIT,ov.RETRIAL_MAX_WAIT)}function TD(t,e){const n=Xn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ro(t){return t.expireTimeMillis-Date.now()>0}function cv(t){return{token:bD(wD),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Xn(this.app);for(const n of e)Zb(this.app,n.next);return Promise.resolve()}}function SD(t,e){return new CD(t,e)}function kD(t){return{getToken:e=>Ff(t,e),addTokenListener:e=>ED(t,"INTERNAL",e),removeTokenListener:e=>Zb(t.app,e)}}const AD="@firebase/app-check",RD="0.6.3",ND="app-check",uv="app-check-internal";function xD(){Gn(new Nn(ND,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return SD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(uv).initialize()})),Gn(new Nn(uv,t=>{const e=t.getProvider("app-check").getImmediate();return kD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),cn(AD,RD)}xD();const eE=Symbol("firebaseApp");function OD(t){return Pd()&&St(eE,null)||Ud(t)}const wl=new WeakMap;function PD(t,e){if(!wl.has(t)){const n=dT(!0);wl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),wl.delete(t)}}return wl.get(t)}const DD=new WeakMap,bl=new WeakMap;function tE(t){const e=OD(t);if(!bl.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{bl.set(e,s),n(s.value)}];bl.set(e,i)}return bl.get(e)}function MD(t){const e=tE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function LD(t,e){const n=Yn(e);c1(n,r=>{const i=tE();t.value=r,Array.isArray(i)&&i[1](t)})}const hv="@firebase/database",fv="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nE="";function FD(t){nE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:na(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UD(e)}}catch{}return new VD},Ei=rE("localStorage"),Uf=rE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Aa("@firebase/database"),$D=function(){let t=1;return function(){return t++}}(),iE=function(t){const e=YS(t),n=new zS;n.update(e);const r=n.digest();return tu.encodeByteArray(r)},Xa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xa.apply(null,r):typeof r=="object"?e+=Tt(r):e+=r,e+=" "}return e};let Ni=null,dv=!0;const BD=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ws.logLevel=Ae.VERBOSE,Ni=ws.log.bind(ws),e&&Uf.set("logging_enabled",!0)):typeof t=="function"?Ni=t:(Ni=null,Uf.remove("logging_enabled"))},Lt=function(...t){if(dv===!0&&(dv=!1,Ni===null&&Uf.get("logging_enabled")===!0&&BD(!0)),Ni){const e=Xa.apply(null,t);Ni(e)}},Ja=function(t){return function(...e){Lt(t,...e)}},Vf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xa(...t);ws.error(e)},Ui=function(...t){const e=`FIREBASE FATAL ERROR: ${Xa(...t)}`;throw ws.error(e),new Error(e)},un=function(...t){const e="FIREBASE WARNING: "+Xa(...t);ws.warn(e)},HD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$s="[MIN_NAME]",Vi="[MAX_NAME]",oo=function(t,e){if(t===e)return 0;if(t===$s||e===Vi)return-1;if(e===$s||t===Vi)return 1;{const n=pv(t),r=pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zD=function(t,e){return t===e?0:t<e?-1:1},yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tt(e))},tm=function(t){if(typeof t!="object"||t===null)return Tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Tt(e[r]),n+=":",n+=tm(t[e[r]]);return n+="}",n},oE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function mn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aE=function(t){D(!sE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},qD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},KD=new RegExp("^-?(0*)\\d{1,10}$"),GD=-2147483648,YD=2147483647,pv=function(t){if(KD.test(t)){const e=Number(t);if(e>=GD&&e<=YD)return e}return null},Za=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw un("Exception was thrown by user callback.",n),e},Math.floor(0))}},QD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ho=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){un(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(e)}}class $f{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$f.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="5",lE="v",cE="s",uE="r",hE="f",fE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dE="ls",pE="p",Bf="ac",mE="websocket",gE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yE(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===mE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eM(t)&&(n.ns=t.namespace);const i=[];return mn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.counters_={}}incrementCounter(e,n=1){Sr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={},Ch={};function rm(t){const e=t.toString();return Th[e]||(Th[e]=new tM),Th[e]}function nM(t,e){const n=t.toString();return Ch[n]||(Ch[n]=e()),Ch[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Za(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="start",iM="close",sM="pLPCommand",oM="pRTLPCB",vE="id",_E="pw",wE="ser",aM="cb",lM="seg",cM="ts",uM="d",hM="dframe",bE=1870,EE=30,fM=bE-EE,dM=25e3,pM=3e4;class os{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ja(e),this.stats_=rm(n),this.urlFn=l=>(this.appCheckToken&&(l[Bf]=this.appCheckToken),yE(n,gE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pM)),jD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new im((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mv)this.id=a,this.password=l;else if(o===iM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[mv]="t",r[wE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[aM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lE]=nm,this.transportSessionId&&(r[cE]=this.transportSessionId),this.lastSessionId&&(r[dE]=this.lastSessionId),this.applicationId&&(r[pE]=this.applicationId),this.appCheckToken&&(r[Bf]=this.appCheckToken),typeof location<"u"&&location.hostname&&fE.test(location.hostname)&&(r[uE]=hE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qD()&&!WD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=A0(n),i=oE(r,fM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hM]="t",r[vE]=e,r[_E]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class im{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$D(),window[sM+this.uniqueCallbackIdentifier]=e,window[oM+this.uniqueCallbackIdentifier]=n,this.myIFrame=im.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Lt("frame writing exception"),a.stack&&Lt(a.stack),Lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vE]=this.myID,e[_E]=this.myPW,e[wE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EE+r.length<=bE;){const o=this.pendingSegs.shift();r=r+"&"+lM+i+"="+o.seg+"&"+cM+i+"="+o.ts+"&"+uM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=16384,gM=45e3;let Rc=null;typeof MozWebSocket<"u"?Rc=MozWebSocket:typeof WebSocket<"u"&&(Rc=WebSocket);class bn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ja(this.connId),this.stats_=rm(n),this.connURL=bn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lE]=nm,typeof location<"u"&&location.hostname&&fE.test(location.hostname)&&(o[uE]=hE),n&&(o[cE]=n),r&&(o[dE]=r),i&&(o[Bf]=i),s&&(o[pE]=s),yE(e,mE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let r;P0(),this.mySock=new Rc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Rc!==null&&!bn.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=na(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oE(n,mM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bn.responsesRequiredToBeHealthy=2;bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[os,bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bn&&bn.isAvailable();let r=n&&!bn.previouslyFailed();if(e.webSocketOnly&&(n||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bn];else{const i=this.transports_=[];for(const s of va.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);va.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}va.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=6e4,vM=5e3,_M=10*1024,wM=100*1024,Sh="t",gv="d",bM="s",yv="r",EM="e",vv="o",_v="a",wv="n",bv="p",IM="h";class TM{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ja("c:"+this.id+":"),this.transportManager_=new va(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ho(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_M?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sh in e){const n=e[Sh];n===_v?this.upgradeIfSecondaryHealthy_():n===yv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_v,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yo(Sh,e);if(gv in e){const r=e[gv];if(n===IM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bM?this.onConnectionShutdown_(r):n===yv?this.onReset_(r):n===EM?Vf("Server Error: "+r):n===vv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nm!==r&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ho(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ho(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends TE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nc}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=32,Iv=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new ze("")}function Ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ti(t){return t.pieces_.length-t.pieceNum_}function $e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function CE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function SE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function vt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ze)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ze(n,0)}function ve(t){return t.pieceNum_>=t.pieces_.length}function dn(t,e){const n=Ee(t),r=Ee(e);if(n===null)return e;if(n===r)return dn($e(t),$e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function AE(t,e){if(ti(t)!==ti(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ti(t)>ti(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class SM{constructor(e,n){this.errorPrefix_=n,this.parts_=SE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nu(this.parts_[r]);RE(this)}}function kM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nu(e),RE(t)}function AM(t){const e=t.parts_.pop();t.byteLength_-=nu(e),t.parts_.length>0&&(t.byteLength_-=1)}function RE(t){if(t.byteLength_>Iv)throw new Error(t.errorPrefix_+"has a key path longer than "+Iv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ev)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ev+") or object contains a cycle "+mi(t))}function mi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends TE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sm}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=1e3,RM=60*5*1e3,Tv=30*1e3,NM=1.3,xM=3e4,OM="server_kill",Cv=3;class dr extends IE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dr.nextPersistentConnectionId_++,this.log_=Ja("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vo,this.maxReconnectDelay_=RM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!P0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Tt(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ta,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;dr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sr(e,"w")){const r=As(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vf("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xM&&(this.reconnectDelay_=vo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Lt("getToken() completed but was canceled"):(Lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new TM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{un(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(OM)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&un(h),l())}}}interrupt(e){Lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xh(this.interruptReasons_)&&(this.reconnectDelay_=vo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>tm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ze(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cv&&(this.reconnectDelay_=Tv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nE.replace(/\./g,"-")]=1,Md()?e["framework.cordova"]=1:O0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nc.getInstance().currentlyOnline();return Xh(this.interruptReasons_)&&e}}dr.nextPersistentConnectionId_=0;dr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ie($s,e),i=new Ie($s,n);return this.compare(r,i)!==0}minPost(){return Ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;class NE extends $u{static get __EMPTY_NODE(){return El}static set __EMPTY_NODE(e){El=e}compare(e,n){return oo(e.name,n.name)}isDefinedOn(e){throw Gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ie.MIN}maxPost(){return new Ie(Vi,El)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Ie(e,El)}toString(){return".key"}}const bs=new NE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??nn.EMPTY_NODE,this.right=s??nn.EMPTY_NODE}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}yt.RED=!0;yt.BLACK=!1;class PM{copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,yt.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,yt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new PM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t,e){return oo(t.name,e.name)}function om(t,e){return oo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hf;function MM(t){Hf=t}const xE=function(t){return typeof t=="number"?"number:"+aE(t):"string:"+t},OE=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sr(e,".sv"),"Priority must be a string or number.")}else D(t===Hf||t.isEmpty(),"priority of unexpected type.");D(t===Hf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sv;class mt{constructor(e,n=mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),OE(this.priorityNode_)}static set __childrenNodeConstructor(e){Sv=e}static get __childrenNodeConstructor(){return Sv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new mt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:Ee(e)===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,mt.__childrenNodeConstructor.EMPTY_NODE.updateChild($e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aE(this.value_):e+=this.value_,this.lazyHash_=iE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===mt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof mt.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=mt.VALUE_TYPE_ORDER.indexOf(n),s=mt.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PE,DE;function LM(t){PE=t}function FM(t){DE=t}class UM extends $u{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ie.MIN}maxPost(){return new Ie(Vi,new mt("[PRIORITY-POST]",DE))}makePost(e,n){const r=PE(e);return new Ie(n,new mt("[PRIORITY-POST]",r))}toString(){return".priority"}}const $t=new UM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=Math.log(2);class $M{constructor(e){const n=s=>parseInt(Math.log(s)/VM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new yt(f,h.node,yt.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=i(l,d),y=i(d+1,c);return h=t[d],f=n?n(h):h,new yt(f,h.node,yt.BLACK,g,y)}},s=function(l){let c=null,u=null,h=t.length;const f=function(g,y){const w=h-g,v=h;h-=g;const b=i(w+1,v),_=t[w],A=n?n(_):_;d(new yt(A,_.node,y,null,b))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));y?f(w,yt.BLACK):(f(w,yt.BLACK),f(w,yt.RED))}return u},o=new $M(t.length),a=s(o);return new nn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;const Zi={};class hr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(Zi&&$t,"ChildrenNode.ts has not been loaded"),kh=kh||new hr({".priority":Zi},{".priority":$t}),kh}get(e){const n=As(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return Sr(this.indexSet_,e.toString())}addIndex(e,n){D(e!==bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xc(r,e.getCompare()):a=Zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new hr(u,c)}addToIndexes(e,n){const r=ic(this.indexes_,(i,s)=>{const o=As(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===Zi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xc(a,o.getCompare())}else return Zi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ie(e.name,a))),l.insert(e,e.node)}});return new hr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ic(this.indexes_,i=>{if(i===Zi)return i;{const s=n.get(e.name);return s?i.remove(new Ie(e.name,s)):i}});return new hr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class xe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&OE(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _o||(_o=new xe(new nn(om),null,hr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_o}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_o:n}}getChild(e){const n=Ee(e);return n===null?this:this.getImmediateChild(n).getChild($e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_o:this.priorityNode_;return new xe(i,o,s)}}updateChild(e,n){const r=Ee(e);if(r===null)return n;{D(Ee(e)!==".priority"||ti(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($t,(o,a)=>{n[o]=a.val(e),r++,s&&xe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xE(this.getPriority().val())+":"),this.forEachChild($t,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===el?-1:0}withIndex(e){if(e===bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($t),i=n.getIterator($t);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bs?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BM extends xe{constructor(){super(new nn(om),xe.EMPTY_NODE,hr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const el=new BM;Object.defineProperties(Ie,{MIN:{value:new Ie($s,xe.EMPTY_NODE)},MAX:{value:new Ie(Vi,el)}});NE.__EMPTY_NODE=xe.EMPTY_NODE;mt.__childrenNodeConstructor=xe;MM(el);FM(el);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=!0;function Ft(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new mt(n,Ft(e))}if(!(t instanceof Array)&&HM){const n=[];let r=!1;if(mn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ft(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ie(o,l)))}}),n.length===0)return xe.EMPTY_NODE;const s=xc(n,DM,o=>o.name,om);if(r){const o=xc(n,$t.getCompare());return new xe(s,Ft(e),new hr({".priority":o},{".priority":$t}))}else return new xe(s,Ft(e),hr.Default)}else{let n=xe.EMPTY_NODE;return mn(t,(r,i)=>{if(Sr(t,r)&&r.substring(0,1)!=="."){const s=Ft(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ft(e))}}LM(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM extends $u{constructor(e){super(),this.indexPath_=e,D(!ve(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}makePost(e,n){const r=Ft(e),i=xe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ie(n,i)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,el);return new Ie(Vi,e)}toString(){return SE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM extends $u{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ie.MIN}maxPost(){return Ie.MAX}makePost(e,n){const r=Ft(e);return new Ie(n,r)}toString(){return".value"}}const qM=new zM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t){return{type:"value",snapshotNode:t}}function KM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function GM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$t}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Av(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$t?n="$priority":t.index_===qM?n="$value":t.index_===bs?n="$key":(D(t.index_ instanceof jM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends IE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ja("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Oc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Av(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),As(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Oc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Av(e._queryParams),r=e._path.toString(),i=new ta;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=na(a.responseText)}catch{un("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&un("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){return{value:null,children:new Map}}function ME(t,e,n){if(ve(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ee(e);t.children.has(r)||t.children.set(r,Pc());const i=t.children.get(r);e=$e(e),ME(i,e,n)}}function jf(t,e,n){t.value!==null?n(e,t.value):XM(t,(r,i)=>{const s=new ze(e.toString()+"/"+r);jf(i,s,n)})}function XM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&mn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=10*1e3,ZM=30*1e3,eL=5*60*1e3;class tL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JM(e);const r=Nv+(ZM-Nv)*Math.random();Ho(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;mn(e,(i,s)=>{s>0&&Sr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ho(this.reportStats_.bind(this),Math.floor(Math.random()*2*eL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));function LE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function FE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function UE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Bn.ACK_USER_WRITE,this.source=LE()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new Dc(De(),n,this.revert)}}else return D(Ee(this.path)===e,"operationForChild called for unrelated child."),new Dc($e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Bn.OVERWRITE}operationForChild(e){return ve(this.path)?new $i(this.source,De(),this.snap.getImmediateChild(e)):new $i(this.source,$e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Bn.MERGE}operationForChild(e){if(ve(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new $i(this.source,De(),n.value):new _a(this.source,De(),n)}else return D(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,$e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function nL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(YM(o.childName,o.snapshotNode))}),wo(t,i,"child_removed",e,r,n),wo(t,i,"child_added",e,r,n),wo(t,i,"child_moved",s,r,n),wo(t,i,"child_changed",e,r,n),wo(t,i,"value",e,r,n),i}function wo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>iL(t,a,l)),o.forEach(a=>{const l=rL(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iL(t,e,n){if(e.childName==null||n.childName==null)throw Gs("Should only compare child_ events.");const r=new Ie(e.childName,e.snapshotNode),i=new Ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){return{eventCache:t,serverCache:e}}function jo(t,e,n,r){return VE(new lm(e,n,r),t.serverCache)}function $E(t,e,n,r){return VE(t.eventCache,new lm(e,n,r))}function zf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah;const sL=()=>(Ah||(Ah=new nn(zD)),Ah);class Ue{constructor(e,n=sL()){this.value=e,this.children=n}static fromObject(e){let n=new Ue(null);return mn(e,(r,i)=>{n=n.set(new ze(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(ve(e))return null;{const r=Ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($e(e),n);return s!=null?{path:vt(new ze(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const n=Ee(e),r=this.children.get(n);return r!==null?r.subtree($e(e)):new Ue(null)}}set(e,n){if(ve(e))return new Ue(n,this.children);{const r=Ee(e),s=(this.children.get(r)||new Ue(null)).set($e(e),n),o=this.children.insert(r,s);return new Ue(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const n=Ee(e),r=this.children.get(n);if(r){const i=r.remove($e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ue(null):new Ue(this.value,s)}else return this}}get(e){if(ve(e))return this.value;{const n=Ee(e),r=this.children.get(n);return r?r.get($e(e)):null}}setTree(e,n){if(ve(e))return n;{const r=Ee(e),s=(this.children.get(r)||new Ue(null)).setTree($e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ue(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(vt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ve(e))return null;{const s=Ee(e),o=this.children.get(s);return o?o.findOnPath_($e(e),vt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,r){if(ve(e))return this;{this.value&&r(n,this.value);const i=Ee(e),s=this.children.get(i);return s?s.foreachOnPath_($e(e),vt(n,i),r):new Ue(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(vt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new Ue(null))}}function zo(t,e,n){if(ve(e))return new Rn(new Ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=dn(i,e);return s=s.updateChild(o,n),new Rn(t.writeTree_.set(i,s))}else{const i=new Ue(n),s=t.writeTree_.setTree(e,i);return new Rn(s)}}}function xv(t,e,n){let r=t;return mn(n,(i,s)=>{r=zo(r,vt(e,i),s)}),r}function Ov(t,e){if(ve(e))return Rn.empty();{const n=t.writeTree_.setTree(e,new Ue(null));return new Rn(n)}}function qf(t,e){return Yi(t,e)!=null}function Yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dn(n.path,e)):null}function Pv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($t,(r,i)=>{e.push(new Ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ie(r,i.value))}),e}function Gr(t,e){if(ve(e))return t;{const n=Yi(t,e);return n!=null?new Rn(new Ue(n)):new Rn(t.writeTree_.subtree(e))}}function Wf(t){return t.writeTree_.isEmpty()}function Bs(t,e){return BE(De(),t.writeTree_,e)}function BE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=BE(vt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(vt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){return KE(e,t)}function oL(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=r}function aL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cL(a,r.path)?i=!1:Tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return uL(t),!0;if(r.snap)t.visibleWrites=Ov(t.visibleWrites,r.path);else{const a=r.children;mn(a,l=>{t.visibleWrites=Ov(t.visibleWrites,vt(r.path,l))})}return!0}else return!1}function cL(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(vt(t.path,n),e))return!0;return!1}function uL(t){t.visibleWrites=jE(t.allWrites,hL,De()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hL(t){return t.visible}function jE(t,e,n){let r=Rn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Tn(n,o)?(a=dn(n,o),r=zo(r,a,s.snap)):Tn(o,n)&&(a=dn(o,n),r=zo(r,De(),s.snap.getChild(a)));else if(s.children){if(Tn(n,o))a=dn(n,o),r=xv(r,a,s.children);else if(Tn(o,n))if(a=dn(o,n),ve(a))r=xv(r,De(),s.children);else{const l=As(s.children,Ee(a));if(l){const c=l.getChild($e(a));r=zo(r,De(),c)}}}else throw Gs("WriteRecord should have .snap or .children")}}return r}function zE(t,e,n,r,i){if(!r&&!i){const s=Yi(t.visibleWrites,e);if(s!=null)return s;{const o=Gr(t.visibleWrites,e);if(Wf(o))return n;if(n==null&&!qf(o,De()))return null;{const a=n||xe.EMPTY_NODE;return Bs(o,a)}}}else{const s=Gr(t.visibleWrites,e);if(!i&&Wf(s))return n;if(!i&&n==null&&!qf(s,De()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Tn(c.path,e)||Tn(e,c.path))},a=jE(t.allWrites,o,e),l=n||xe.EMPTY_NODE;return Bs(a,l)}}}function fL(t,e,n){let r=xe.EMPTY_NODE;const i=Yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($t,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Gr(t.visibleWrites,e);return n.forEachChild($t,(o,a)=>{const l=Bs(Gr(s,new ze(o)),a);r=r.updateImmediateChild(o,l)}),Pv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Gr(t.visibleWrites,e);return Pv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dL(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=vt(e,n);if(qf(t.visibleWrites,s))return null;{const o=Gr(t.visibleWrites,s);return Wf(o)?i.getChild(n):Bs(o,i.getChild(n))}}function pL(t,e,n,r){const i=vt(e,n),s=Yi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Gr(t.visibleWrites,i);return Bs(o,r.getNode().getImmediateChild(n))}else return null}function mL(t,e){return Yi(t.visibleWrites,e)}function gL(t,e,n,r,i,s,o){let a;const l=Gr(t.visibleWrites,e),c=Yi(l,De());if(c!=null)a=c;else if(n!=null)a=Bs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<i;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function yL(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function Kf(t,e,n,r){return zE(t.writeTree,t.treePath,e,n,r)}function qE(t,e){return fL(t.writeTree,t.treePath,e)}function Dv(t,e,n,r){return dL(t.writeTree,t.treePath,e,n,r)}function Mc(t,e){return mL(t.writeTree,vt(t.treePath,e))}function vL(t,e,n,r,i,s){return gL(t.writeTree,t.treePath,e,n,r,i,s)}function cm(t,e,n){return pL(t.writeTree,t.treePath,e,n)}function WE(t,e){return KE(vt(t.treePath,e),t.writeTree)}function KE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,kv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,GM(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,KM(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,kv(r,e.snapshotNode,i.oldSnap));else throw Gs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const GE=new wL;class um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bi(this.viewCache_),s=vL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function bL(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function EL(t,e,n,r,i){const s=new _L;let o,a;if(n.type===Bn.OVERWRITE){const c=n;c.source.fromUser?o=Gf(t,e,c.path,c.snap,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ve(c.path),o=Lc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Bn.MERGE){const c=n;c.source.fromUser?o=TL(t,e,c.path,c.children,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Bn.ACK_USER_WRITE){const c=n;c.revert?o=kL(t,e,c.path,r,i,s):o=CL(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Bn.LISTEN_COMPLETE)o=SL(t,e,n.path,r,s);else throw Gs("Unknown operation type: "+n.type);const l=s.getChanges();return IL(e,o,l),{viewCache:o,changes:l}}function IL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(WM(zf(e)))}}function YE(t,e,n,r,i,s){const o=e.eventCache;if(Mc(r,n)!=null)return e;{let a,l;if(ve(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bi(e),u=c instanceof xe?c:xe.EMPTY_NODE,h=qE(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Kf(r,Bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ee(n);if(c===".priority"){D(ti(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Dv(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=$e(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Dv(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=cm(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,s):a=o.getNode()}}return jo(e,a,o.isFullyInitialized()||ve(n),t.filter.filtersNodes())}}function Lc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ve(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Ee(n);if(!l.isCompleteForPath(n)&&ti(n)>1)return e;const g=$e(n),w=l.getNode().getImmediateChild(d).updateChild(g,r);d===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),d,w,g,GE,null)}const h=$E(e,c,l.isFullyInitialized()||ve(n),u.filtersNodes()),f=new um(i,h,s);return YE(t,h,n,i,f,a)}function Gf(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new um(i,e,s);if(ve(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=jo(e,c,!0,t.filter.filtersNodes());else{const h=Ee(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=jo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=$e(n),d=a.getNode().getImmediateChild(h);let g;if(ve(f))g=r;else{const y=u.getCompleteChild(h);y!=null?CE(f)===".priority"&&y.getChild(kE(f)).isEmpty()?g=y:g=y.updateChild(f,r):g=xe.EMPTY_NODE}if(d.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=jo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Mv(t,e){return t.eventCache.isCompleteForChild(e)}function TL(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=vt(n,l);Mv(e,Ee(u))&&(a=Gf(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=vt(n,l);Mv(e,Ee(u))||(a=Gf(t,a,u,c,i,s,o))}),a}function Lv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Yf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ve(n)?c=r:c=new Ue(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Lv(t,d,f);l=Lc(t,l,new ze(h),g,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),y=Lv(t,g,f);l=Lc(t,l,new ze(h),y,i,s,o,a)}}),l}function CL(t,e,n,r,i,s,o){if(Mc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ve(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Lc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ve(n)){let c=new Ue(null);return l.getNode().forEachChild(bs,(u,h)=>{c=c.set(new ze(u),h)}),Yf(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ue(null);return r.foreach((u,h)=>{const f=vt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Yf(t,e,n,c,i,s,a,o)}}function SL(t,e,n,r,i){const s=e.serverCache,o=$E(e,s.getNode(),s.isFullyInitialized()||ve(n),s.isFiltered());return YE(t,o,n,r,GE,i)}function kL(t,e,n,r,i,s){let o;if(Mc(r,n)!=null)return e;{const a=new um(r,e,i),l=e.eventCache.getNode();let c;if(ve(n)||Ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Kf(r,Bi(e));else{const h=e.serverCache.getNode();D(h instanceof xe,"serverChildren would be complete if leaf node"),u=qE(r,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Ee(n);let h=cm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,$e(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,xe.EMPTY_NODE,$e(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kf(r,Bi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Mc(r,De())!=null,jo(e,c,o,t.filter.filtersNodes())}}function AL(t,e){const n=Bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ve(e)&&!n.getImmediateChild(Ee(e)).isEmpty())?n.getChild(e):null}function Fv(t,e,n,r){e.type===Bn.MERGE&&e.source.queryId!==null&&(D(Bi(t.viewCache_),"We should always have a full cache before handling merges"),D(zf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=EL(t.processor_,i,e,n,r);return bL(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,RL(t,s.changes,s.viewCache.eventCache.getNode(),null)}function RL(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uv;function NL(t){D(!Uv,"__referenceConstructor has already been defined"),Uv=t}function hm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),Fv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Fv(o,e,n,r));return s}}function fm(t,e){let n=null;for(const r of t.views.values())n=n||AL(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vv;function xL(t){D(!Vv,"__referenceConstructor has already been defined"),Vv=t}class $v{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=yL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OL(t,e,n,r,i){return oL(t.pendingWriteTree_,e,n,r,i),i?Hu(t,new $i(LE(),e,n)):[]}function as(t,e,n=!1){const r=aL(t.pendingWriteTree_,e);if(lL(t.pendingWriteTree_,e)){let s=new Ue(null);return r.snap!=null?s=s.set(De(),!0):mn(r.children,o=>{s=s.set(new ze(o),!0)}),Hu(t,new Dc(r.path,s,n))}else return[]}function Bu(t,e,n){return Hu(t,new $i(FE(),e,n))}function PL(t,e,n){const r=Ue.fromObject(n);return Hu(t,new _a(FE(),e,r))}function DL(t,e,n,r){const i=ZE(t,r);if(i!=null){const s=eI(i),o=s.path,a=s.queryId,l=dn(o,e),c=new $i(UE(a),l,n);return tI(t,o,c)}else return[]}function ML(t,e,n,r){const i=ZE(t,r);if(i){const s=eI(i),o=s.path,a=s.queryId,l=dn(o,e),c=Ue.fromObject(n),u=new _a(UE(a),l,c);return tI(t,o,u)}else return[]}function QE(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=dn(o,e),c=fm(a,l);if(c)return c});return zE(i,e,s,n,!0)}function Hu(t,e){return XE(e,t.syncPointTree_,null,HE(t.pendingWriteTree_,De()))}function XE(t,e,n,r){if(ve(t.path))return JE(t,e,n,r);{const i=e.get(De());n==null&&i!=null&&(n=fm(i,De()));let s=[];const o=Ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=WE(r,o);s=s.concat(XE(a,l,c,u))}return i&&(s=s.concat(hm(i,t,r,n))),s}}function JE(t,e,n,r){const i=e.get(De());n==null&&i!=null&&(n=fm(i,De()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=WE(r,o),u=t.operationForChild(o);u&&(s=s.concat(JE(u,a,l,c)))}),i&&(s=s.concat(hm(i,t,r,n))),s}function ZE(t,e){return t.tagToQueryMap.get(e)}function eI(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function tI(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=HE(t.pendingWriteTree_,e);return hm(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dm(n)}node(){return this.node_}}class pm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=vt(this.path_,e);return new pm(this.syncTree_,n)}node(){return QE(this.syncTree_,this.path_)}}const LL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bv=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return FL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return UL(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},FL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},UL=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},VL=function(t,e,n,r){return mm(e,new pm(n,t),r)},$L=function(t,e,n){return mm(t,new dm(e),n)};function mm(t,e,n){const r=t.getPriority().val(),i=Bv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Bv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new mt(a,Ft(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new mt(i))),o.forEachChild($t,(a,l)=>{const c=mm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ym(t,e){let n=e instanceof ze?e:new ze(e),r=t,i=Ee(n);for(;i!==null;){const s=As(r.node.children,i)||{children:{},childCount:0};r=new gm(i,r,s),n=$e(n),i=Ee(n)}return r}function ao(t){return t.node.value}function nI(t,e){t.node.value=e,Qf(t)}function rI(t){return t.node.childCount>0}function BL(t){return ao(t)===void 0&&!rI(t)}function ju(t,e){mn(t.node.children,(n,r)=>{e(new gm(n,t,r))})}function iI(t,e,n,r){n&&!r&&e(t),ju(t,i=>{iI(i,e,!0,r)}),n&&r&&e(t)}function HL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tl(t){return new ze(t.parent===null?t.name:tl(t.parent)+"/"+t.name)}function Qf(t){t.parent!==null&&jL(t.parent,t.name,t)}function jL(t,e,n){const r=BL(n),i=Sr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=/[\[\].#$\/\u0000-\u001F\u007F]/,qL=/[\[\].#$\u0000-\u001F\u007F]/,Rh=10*1024*1024,sI=function(t){return typeof t=="string"&&t.length!==0&&!zL.test(t)},WL=function(t){return typeof t=="string"&&t.length!==0&&!qL.test(t)},KL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WL(t)},oI=function(t,e,n){const r=n instanceof ze?new SM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mi(r));if(typeof e=="function")throw new Error(t+"contains a function "+mi(r)+" with contents = "+e.toString());if(sE(e))throw new Error(t+"contains "+e.toString()+" "+mi(r));if(typeof e=="string"&&e.length>Rh/3&&nu(e)>Rh)throw new Error(t+"contains a string greater than "+Rh+" utf8 bytes "+mi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(mn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sI(o)))throw new Error(t+" contains an invalid key ("+o+") "+mi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kM(r,o),oI(t,a,r),AM(r)}),i&&s)throw new Error(t+' contains ".value" child '+mi(r)+" in addition to actual children.")}},GL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KL(n))throw new Error(GS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function QL(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!AE(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qi(t,e,n){QL(t,n),XL(t,r=>Tn(r,e)||Tn(e,r))}function XL(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(JL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ni&&Lt("event: "+n.toString()),Za(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL="repo_interrupt",e3=25;class t3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pc(),this.transactionQueueTree_=new gm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function n3(t,e,n){if(t.stats_=rm(t.repoInfo_),t.forceRestClient_||QD())t.server_=new Oc(t.repoInfo_,(r,i,s,o)=>{Hv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dr(t.repoInfo_,e,(r,i,s,o)=>{Hv(t,r,i,s,o)},r=>{jv(t,r)},r=>{i3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nM(t.repoInfo_,()=>new tL(t.stats_,t.server_)),t.infoData_=new QM,t.infoSyncTree_=new $v({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Bu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vm(t,"connected",!1),t.serverSyncTree_=new $v({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Qi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function r3(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function aI(t){return LL({timestamp:r3(t)})}function Hv(t,e,n,r,i){t.dataUpdateCount++;const s=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ic(n,c=>Ft(c));o=ML(t.serverSyncTree_,s,l,i)}else{const l=Ft(n);o=DL(t.serverSyncTree_,s,l,i)}else if(r){const l=ic(n,c=>Ft(c));o=PL(t.serverSyncTree_,s,l)}else{const l=Ft(n);o=Bu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=wm(t,s)),Qi(t.eventQueue_,a,o)}function jv(t,e){vm(t,"connected",e),e===!1&&o3(t)}function i3(t,e){mn(e,(n,r)=>{vm(t,n,r)})}function vm(t,e,n){const r=new ze("/.info/"+e),i=Ft(n);t.infoData_.updateSnapshot(r,i);const s=Bu(t.infoSyncTree_,r,i);Qi(t.eventQueue_,r,s)}function s3(t){return t.nextWriteId_++}function o3(t){lI(t,"onDisconnectEvents");const e=aI(t),n=Pc();jf(t.onDisconnect_,De(),(i,s)=>{const o=VL(i,s,t.serverSyncTree_,e);ME(n,i,o)});let r=[];jf(n,De(),(i,s)=>{r=r.concat(Bu(t.serverSyncTree_,i,s));const o=u3(t,i);wm(t,o)}),t.onDisconnect_=Pc(),Qi(t.eventQueue_,De(),r)}function a3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZL)}function lI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Lt(n,...e)}function cI(t,e,n){return QE(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function _m(t,e=t.transactionQueueTree_){if(e||zu(t,e),ao(e)){const n=hI(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&l3(t,tl(e),n)}else rI(e)&&ju(e,n=>{_m(t,n)})}function l3(t,e,n){const r=n.map(c=>c.currentWriteId),i=cI(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=dn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{lI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(as(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zu(t,ym(t.transactionQueueTree_,e)),_m(t,t.transactionQueueTree_),Qi(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Za(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{un("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}wm(t,e)}},o)}function wm(t,e){const n=uI(t,e),r=tl(n),i=hI(t,n);return c3(t,i,r),r}function c3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=dn(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=e3)u=!0,h="maxretry",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else{const f=cI(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){oI("transaction failed: Data returned ",d,l.path);let g=Ft(d);typeof d=="object"&&d!=null&&Sr(d,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,v=aI(t),b=$L(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=b,l.currentWriteId=s3(t),o.splice(o.indexOf(w),1),i=i.concat(OL(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(as(t.serverSyncTree_,w,!0))}else u=!0,h="nodata",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0))}Qi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}zu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Za(r[a]);_m(t,t.transactionQueueTree_)}function uI(t,e){let n,r=t.transactionQueueTree_;for(n=Ee(e);n!==null&&ao(r)===void 0;)r=ym(r,n),e=$e(e),n=Ee(e);return r}function hI(t,e){const n=[];return fI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function fI(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ju(e,i=>{fI(t,i,n)})}function zu(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nI(e,n.length>0?n:void 0)}ju(e,r=>{zu(t,r)})}function u3(t,e){const n=tl(uI(t,e)),r=ym(t.transactionQueueTree_,e);return HL(r,i=>{Nh(t,i)}),Nh(t,r),iI(r,i=>{Nh(t,i)}),n}function Nh(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(as(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nI(e,void 0):n.length=s+1,Qi(t.eventQueue_,tl(e),i);for(let o=0;o<r.length;o++)Za(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function f3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):un(`Invalid query segment '${n}' in query '${t}'`)}return e}const zv=function(t,e){const n=d3(t),r=n.namespace;n.domain==="firebase.com"&&Ui(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||HD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ZD(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ze(n.pathString)}},d3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=h3(t.substring(u,h)));const f=f3(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ve(this._path)?null:CE(this._path)}get ref(){return new lo(this._repo,this._path)}get _queryIdentifier(){const e=Rv(this._queryParams),n=tm(e);return n==="{}"?"default":n}get _queryObject(){return Rv(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof bm))return!1;const n=this._repo===e._repo,r=AE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CM(this._path)}}class lo extends bm{constructor(e,n){super(e,n,new am,!1)}get parent(){const e=kE(this._path);return e===null?null:new lo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}NL(lo);xL(lo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p3="FIREBASE_DATABASE_EMULATOR_HOST",Xf={};let m3=!1;function g3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zv(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[p3]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=zv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new $f($f.OWNER):new JD(t.name,t.options,e);GL("Invalid Firebase Database URL",o),ve(o.path)||Ui("Database URL must point to the root of a Firebase Database (not including a child path).");const h=v3(a,t,u,new XD(t.name,n));return new _3(h,t)}function y3(t,e){const n=Xf[e];(!n||n[t.key]!==t)&&Ui(`Database ${e}(${t.repoInfo_}) has already been deleted.`),a3(t),delete n[t.key]}function v3(t,e,n,r){let i=Xf[e.name];i||(i={},Xf[e.name]=i);let s=i[t.toURLString()];return s&&Ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new t3(t,m3,n,r),i[t.toURLString()]=s,s}class _3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(n3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lo(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ui("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t){FD(qi),Gn(new Nn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return g3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(hv,fv,t),cn(hv,fv,"esm2017")}dr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};w3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebasestorage.googleapis.com",b3="storageBucket",E3=2*60*1e3,I3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Zn{constructor(e,n,r=0){super(xh(e),`Firebase Storage: ${n} (${xh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,er.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Jn||(Jn={}));function xh(t){return"storage/"+t}function T3(){const t="An unknown error occurred, please check the error payload for server response.";return new er(Jn.UNKNOWN,t)}function C3(){return new er(Jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S3(){return new er(Jn.CANCELED,"User canceled the upload/download.")}function k3(t){return new er(Jn.INVALID_URL,"Invalid URL '"+t+"'.")}function A3(t){return new er(Jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qv(t){return new er(Jn.INVALID_ARGUMENT,t)}function pI(){return new er(Jn.APP_DELETED,"The Firebase app was deleted.")}function R3(t){return new er(Jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw A3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=n===dI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:d,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<_.length;A++){const U=_[A],Z=U.regex.exec(e);if(Z){const F=Z[U.indices.bucket];let de=Z[U.indices.path];de||(de=""),r=new Cn(F,de),U.postModify(r);break}}if(r==null)throw k3(e);return r}}class N3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(d,l())},w)}function f(){s&&clearTimeout(s)}function d(w,...v){if(c){f();return}if(w){f(),u.call(null,w,...v);return}if(l()||o){f(),u.call(null,w,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let g=!1;function y(w){g||(g=!0,f(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function O3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(t){return t!==void 0}function Wv(t,e,n,r){if(r<e)throw qv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qv(`Invalid value for '${t}'. Expected ${n} or less.`)}function D3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fc||(Fc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n,r,i,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fc.NO_ERROR,l=s.getStatus();if(!a||M3(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Fc.ABORT;r(!1,new Tl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Tl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());P3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=T3();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?pI():S3();o(l)}else{const l=C3();o(l)}};this.canceled_?n(!1,new Tl(!1,null,!0)):this.backoffId_=x3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&O3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function F3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function U3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function B3(t,e,n,r,i,s,o=!0){const a=D3(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return V3(c,e),F3(c,n),U3(c,s),$3(c,r),new L3(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function j3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Uc(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j3(this._location.path)}get storage(){return this._service}get parent(){const e=H3(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new Uc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw R3(e)}}function Kv(t,e){const n=e==null?void 0:e[b3];return n==null?null:Cn.makeFromBucketSpec(n,t)}class z3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=E3,this._maxUploadRetryTime=I3,this._requests=new Set,i!=null?this._bucket=Cn.makeFromBucketSpec(i,this._host):this._bucket=Kv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=Kv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Uc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new N3(pI());{const o=B3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gv="@firebase/storage",Yv="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3="storage";function W3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new z3(n,r,i,e,qi)}function K3(){Gn(new Nn(q3,W3,"PUBLIC").setMultipleInstances(!0)),cn(Gv,Yv,""),cn(Gv,Yv,"esm2017")}K3();function G3(t){return(e,n)=>{const r=PD(e,n).run(()=>Bt(t));DD.set(e,r),LD(r,e)}}function Y3(t,{firebaseApp:e,modules:n=[]}){t.provide(eE,e);for(const r of n)t.use(r.bind(null,e))}const qu=oD({history:IP("/cowlendar/"),routes:[{path:"/",name:"home",component:()=>mo(()=>import("./Home-7c55b371.js"),["assets/Home-7c55b371.js","assets/Footer-d3f20363.js","assets/Footer-9b58e2a5.css","assets/Home-d493c656.css"])},{path:"/auth",name:"auth",component:()=>mo(()=>import("./Auth-f9c34c55.js"),["assets/Auth-f9c34c55.js","assets/index.esm-308fd4ff.js","assets/Footer-d3f20363.js","assets/Footer-9b58e2a5.css","assets/Auth-e473b217.css"]),meta:{requiresNoUser:!0}},{path:"/profile",name:"profile",component:()=>mo(()=>import("./Profile-cfb9d7e3.js"),["assets/Profile-cfb9d7e3.js","assets/index.esm-308fd4ff.js","assets/Footer-d3f20363.js","assets/Footer-9b58e2a5.css","assets/Profile-6bbb071d.css"]),meta:{requiresAuth:!0}},{path:"/app",name:"app",component:()=>mo(()=>import("./App-01e53c67.js"),["assets/App-01e53c67.js","assets/Footer-d3f20363.js","assets/Footer-9b58e2a5.css","assets/App-b9ccb3d3.css"]),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",component:()=>mo(()=>import("./Error404-675e3844.js"),["assets/Error404-675e3844.js","assets/Footer-d3f20363.js","assets/Footer-9b58e2a5.css","assets/Error404-14beb4ef.css"])}],scrollBehavior:(t,e,n)=>t.hash?{el:t.hash}:{top:0,left:0}});qu.beforeEach(async(t,e,n)=>{const r=t.matched.some(o=>o.meta.requiresNoUser),i=t.matched.some(o=>o.meta.requiresAuth),s=await MD();i&&!s?n("/auth"):r&&s?n("/"):n()});const Q3="/cowlendar/assets/logo_light-3d90efcb.svg",X3="/cowlendar/assets/logo_dark-09e88cfb.svg";const Wu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},J3=t=>(Ir("data-v-3bef413e"),t=t(),Tr(),t),Z3={key:0,src:Q3,alt:"logo"},e4={key:1,src:X3,alt:"logo"},t4=J3(()=>K("p",null,"Cowlendar",-1)),n4={__name:"Logo",setup(t){const e=Bt(!1);return Wd(Yn(),()=>{Yn().currentUser&&Xp(Br,n=>{e.value=n.data().darkMode})}),(n,r)=>{const i=Hh("RouterLink");return re(),Un(i,{to:"/",class:"logo"},{default:or(()=>[e.value?(re(),fe("img",Z3)):(re(),fe("img",e4)),t4]),_:1})}}},r4=Wu(n4,[["__scopeId","data-v-3bef413e"]]);const i4={__name:"Button",props:{label:{type:String,default:"Default"},isOutlined:{type:Boolean,default:!1},fSize:{type:String,default:"1em"},onClick:{type:Function,default:()=>{}}},setup(t){return(e,n)=>(re(),fe("button",{type:"submit",class:Je({outlined:t.isOutlined}),style:Hr({fontSize:t.fSize}),onClick:n[0]||(n[0]=ks((...r)=>t.onClick&&t.onClick(...r),["prevent"]))},an(t.label),7))}},s4=Wu(i4,[["__scopeId","data-v-4b9a9a7c"]]);const o4=t=>(Ir("data-v-1a1e9fef"),t=t(),Tr(),t),a4={class:"switch"},l4=["checked"],c4=o4(()=>K("span",{class:"slider"},null,-1)),u4={__name:"Switch",props:{checked:{type:Boolean,default:!1},onChange:{type:Function,default:()=>{}}},setup(t){return(e,n)=>(re(),fe("label",a4,[K("input",{type:"checkbox",checked:t.checked,onChange:n[0]||(n[0]=(...r)=>t.onChange&&t.onChange(...r))},null,40,l4),c4]))}},h4=Wu(u4,[["__scopeId","data-v-1a1e9fef"]]),f4={__name:"DarkModeSwitch",setup(t){const e=Bt(!1);Hy(Br).then(r=>{e.value=r.data().darkMode}),Xp(Br,r=>{e.value=r.data().darkMode});function n(){Hy(Br).then(r=>{let i=!r.data().darkMode;XO(Br,{darkMode:i}),e.value=i})}return(r,i)=>(re(),Un(h4,{checked:e.value,onChange:n},null,8,["checked"]))}};const tr=t=>(Ir("data-v-457f15de"),t=t(),Tr(),t),d4={id:"navbar",class:"navbar"},p4={class:"nav-links-wrapper"},m4={class:"nav-links"},g4={class:"nav-link"},y4={class:"nav-link"},v4={class:"nav-link"},_4={class:"nav-link"},w4={key:0,class:"dropdown"},b4={id:"dropdown",class:"dropdown-content"},E4=tr(()=>K("p",{class:"label"},"Logged as",-1)),I4=tr(()=>K("p",{class:"plan-type"},"Free",-1)),T4=tr(()=>K("hr",null,null,-1)),C4={style:{color:"var(--color-primary)"}},S4=tr(()=>K("hr",null,null,-1)),k4=tr(()=>K("a",null,"Subscription",-1)),A4=tr(()=>K("p",null,"Dark mode",-1)),R4=tr(()=>K("hr",null,null,-1)),N4=tr(()=>K("span",null,null,-1)),x4=tr(()=>K("span",null,null,-1)),O4=tr(()=>K("span",null,null,-1)),P4=[N4,x4,O4],D4={__name:"Navbar",props:{isLoggedIn:{type:Boolean,required:!0},handleSignOut:{type:Function,default:()=>{}}},setup(t){function e(){const i=document.querySelector(".hamburger"),s=document.querySelector(".nav-links");i.classList.toggle("active"),s.classList.toggle("active")}function n(){document.getElementById("dropdown").classList.toggle("show")}function r(){qu.push("/auth")}return window.addEventListener("click",function(i){if(!i.target.closest(".dropdown")){let s=document.getElementById("dropdown");s&&s.classList.contains("show")&&s.classList.remove("show")}}),window.addEventListener("scroll",function(){let i=this.document.getElementById("navbar");this.document.body.scrollTop>=200||this.document.documentElement.scrollTop>=200?i.classList.add("navbar-colored"):i.classList.remove("navbar-colored")}),(i,s)=>{const o=Hh("RouterLink"),a=Hh("font-awesome-icon");return re(),fe("nav",d4,[Se(r4),K("div",p4,[K("ul",m4,[K("li",g4,[Se(o,{to:"/"},{default:or(()=>[Mn("Home")]),_:1})]),K("li",y4,[Se(o,{to:"/#plans"},{default:or(()=>[Mn("Plans")]),_:1})]),K("li",v4,[Se(o,{to:"/#desktop"},{default:or(()=>[Mn("Desktop")]),_:1})]),K("li",_4,[Se(o,{to:"/#mobile"},{default:or(()=>[Mn("Mobile")]),_:1})])]),t.isLoggedIn?(re(),fe("div",w4,[K("div",{onClick:n,class:"dropdown-btn"},[Se(a,{icon:"fa-solid fa-circle-user",size:"2x",style:{"pointer-events":"none"}})]),K("ul",b4,[K("li",null,[K("div",null,[E4,K("p",null,an(S(Yn)().currentUser.email),1)]),I4]),T4,K("li",C4,[Se(a,{icon:"fa-solid fa-cow"}),Se(o,{to:"/app",style:{color:"var(--color-primary)"}},{default:or(()=>[Mn("Go to app →")]),_:1})]),S4,K("li",null,[Se(a,{icon:"fa-solid fa-user"}),Se(o,{to:"/profile"},{default:or(()=>[Mn("Profile")]),_:1})]),K("li",null,[Se(a,{icon:"fa-solid fa-money-bill-wave"}),k4]),K("li",null,[Se(a,{icon:"fa-solid fa-moon"}),A4,Se(f4)]),R4,K("li",null,[Se(a,{icon:"fa-solid fa-sign-out-alt"}),K("a",{onClick:s[0]||(s[0]=ks((...l)=>t.handleSignOut&&t.handleSignOut(...l),["prevent"]))},"Logout")])])])):(re(),Un(s4,{key:1,label:"Sign In",onClick:r})),K("button",{class:"hamburger",onClick:e},P4)])])}}},M4=Wu(D4,[["__scopeId","data-v-457f15de"]]),L4={__name:"App",setup(t){const e=Bt(!1);let n;Ks(()=>{n=Yn(),Wd(n,i=>{i?e.value=!0:e.value=!1,e.value===!0&&Xp(Br,s=>{let o=document.querySelector("html");s.data().darkMode?o.classList.add("dark"):o.classList.remove("dark")})})});function r(){jA(n).then(()=>{qu.push("/")})}return(i,s)=>(re(),fe(et,null,[Se(M4,{isLoggedIn:e.value,handleSignOut:r},null,8,["isLoggedIn"]),Se(S(Jb))],64))}},Qv="https://www.gstatic.com/charts/loader.js";let Oh=null;const Ph=new Map;function F4(){return window.google!==void 0?Promise.resolve(window.google.charts):(Oh===null&&(Oh=new Promise(t=>{const e=document.querySelector('script[src="'.concat(Qv,'"]')),n=e||document.createElement("script");e||(n.src=Qv,n.type="text/javascript",document.head.append(n)),n.onload=()=>{window.google!==void 0&&t(window.google.charts)}})),Oh)}async function U4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"current",{packages:e=["corechart","controls"],language:n="en",mapsApiKey:r}=arguments.length>1?arguments[1]:void 0;const i=await F4(),s="".concat(t,"_").concat(e.join("_"),"_").concat(n);if(Ph.has(s))return Ph.get(s);const o=new Promise(a=>{i.load(t,{packages:e,language:n,mapsApiKey:r}),i.setOnLoadCallback(()=>a(window.google))});return Ph.set(s,o),o}function V4(t,e,n){return t!==null&&e instanceof t.visualization.DataTable||t!==null&&e instanceof t.visualization.DataView?e:t!==null&&Array.isArray(e)?t.visualization.arrayToDataTable(e,n):t!==null&&e!==null&&typeof e=="object"?new t.visualization.DataTable(e):null}function Xv(t,e,n,r,i,s){const o=(l,c,u)=>{if(u===void 0)throw new Error("please, provide chart type property");return new c.visualization[u](l)};if(t===null)throw new Error("please, provide charts lib property");if(n===null)throw new Error("please, provide chart element property");return e=(s||o)(n,t,r),$4(t,e,i),e}function $4(t,e,n){if(n!==null)for(const[r,i]of Object.entries(n))t!==null&&e!==null&&t.visualization.events.addListener(e,r,i)}function Jv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,n;function r(){return e}return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];const l=this,c=function(){n=void 0,t.apply(l,o)};n!==void 0&&clearTimeout(n),n=setTimeout(c,r())}}let bo=null;const mI=sn({name:"GChart",props:{type:{type:String,required:!0},data:{type:[Array,Object,null],default:()=>[]},isFirstRowLabels:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},version:{type:String,default:"current"},settings:{type:Object,default:()=>({packages:["corechart","table"]})},events:{type:Object,default:null},createChart:{type:Function,default:void 0},resizeDebounce:{type:Number,default:200}},setup(t,e){let{emit:n}=e;const r=Bt(null),i=Bt(null);function s(){if(bo===null||r.value===null)return;const o=V4(bo,t.data,t.isFirstRowLabels);if(o!==null){var a;(a=r.value)===null||a===void 0||a.draw(o,t.options)}}return Dt(()=>t.data,()=>s(),{deep:!0}),Dt(()=>t.options,()=>s(),{deep:!0}),Dt(()=>t.type,()=>{r.value=Xv(bo,r.value,i.value,t.type,t.events,t.createChart),s()}),Ks(()=>{U4(t.version,t.settings).then(o=>{o!==void 0&&(bo=o,r.value=Xv(bo,r.value,i.value,t.type,t.events,t.createChart),n("ready",r.value,o),s())}),t.resizeDebounce>0&&window.addEventListener("resize",Jv(s,t.resizeDebounce))}),kd(()=>{r.value!==null&&typeof r.value.clearChart=="function"&&r.value.clearChart(),t.resizeDebounce>0&&window.removeEventListener("resize",Jv(s,t.resizeDebounce))}),()=>ka("div",{ref:i},[])}}),gI=C0({});function B4(){gI.component("GChart",mI)}const H4={version:"1.1.0",install:B4};let Jf=null;typeof window<"u"&&(Jf=window.Vue);Jf!=null&&gI.use(H4);var j4=Object.defineProperty,z4=Object.defineProperties,q4=Object.getOwnPropertyDescriptors,Zv=Object.getOwnPropertySymbols,W4=Object.prototype.hasOwnProperty,K4=Object.prototype.propertyIsEnumerable,e_=(t,e,n)=>e in t?j4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$n=(t,e)=>{for(var n in e||(e={}))W4.call(e,n)&&e_(t,n,e[n]);if(Zv)for(var n of Zv(e))K4.call(e,n)&&e_(t,n,e[n]);return t},Wl=(t,e)=>z4(t,q4(e)),ci=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const G4=t=>(Ir("data-v-e0a0b7f0"),t=t(),Tr(),t),Y4=["onClick"],Q4=["checked"],X4=G4(()=>K("label",{for:"checbox"},null,-1)),J4=sn({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(t,{emit:e}){const n=t;zi(o=>({"51ab8a49":S(s)}));const r=W(()=>n.status==="allSelected"),i=()=>{e("change",!r.value)},s=St("themeColor");return(o,a)=>(re(),fe("div",{class:"easy-checkbox",onClick:ks(i,["stop","prevent"])},[K("input",{type:"checkbox",checked:S(r),class:Je(t.status)},null,10,Q4),X4],8,Y4))}});var Z4=ci(J4,[["__scopeId","data-v-e0a0b7f0"]]);const e6=t=>(Ir("data-v-7e69a276"),t=t(),Tr(),t),t6=["checked"],n6=e6(()=>K("label",{for:"checbox"},null,-1)),r6=sn({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(t,{emit:e}){zi(r=>({fdaf7e9e:S(n)}));const n=St("themeColor");return(r,i)=>(re(),fe("div",{class:"easy-checkbox",onClick:i[0]||(i[0]=ks(s=>e("change"),["stop","prevent"]))},[K("input",{type:"checkbox",checked:t.checked},null,8,t6),n6]))}});var i6=ci(r6,[["__scopeId","data-v-7e69a276"]]);const s6=t=>(Ir("data-v-4ca5de3a"),t=t(),Tr(),t),o6={class:"easy-data-table__rows-selector"},a6={class:"rows-input"},l6=s6(()=>K("div",{class:"triangle"},null,-1)),c6=["onClick"],u6=sn({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t;zi(h=>({"1b889342":S(u)}));const r=Bt(!1),i=Bt(!1),s=St("dataTable");Dt(r,h=>{if(h&&s){const f=window.innerHeight,d=s.value.getBoundingClientRect().height,g=s.value.getBoundingClientRect().top;f-(d+g)<=100?i.value=!0:i.value=!1}});const o=W({get:()=>n.modelValue,set:h=>{e("update:modelValue",h)}}),a=h=>{o.value=h,r.value=!1},l=(h,f)=>{let d=h.parentNode;for(;d!=null;){if(d.classList&&d.classList.contains(f))return!0;d=d.parentNode}return!1},c=h=>{l(h.target,"easy-data-table__rows-selector")||(r.value=!1)};Ks(()=>{document.addEventListener("click",c)}),kd(()=>{document.removeEventListener("click",c)});const u=St("themeColor");return(h,f)=>(re(),fe("div",o6,[K("div",{class:"rows-input__wrapper",onClick:f[0]||(f[0]=d=>r.value=!r.value)},[K("div",a6,an(S(o)),1),l6]),K("ul",{class:Je(["select-items",{show:r.value,inside:i.value}])},[(re(!0),fe(et,null,rs(t.rowsItems,d=>(re(),fe("li",{key:d,class:Je({selected:d===S(o)}),onClick:g=>a(d)},an(d),11,c6))),128))],2)]))}});var h6=ci(u6,[["__scopeId","data-v-4ca5de3a"]]);const Ku=t=>(Ir("data-v-1fa3a520"),t=t(),Tr(),t),f6={class:"lds-ring"},d6=Ku(()=>K("div",null,null,-1)),p6=Ku(()=>K("div",null,null,-1)),m6=Ku(()=>K("div",null,null,-1)),g6=Ku(()=>K("div",null,null,-1)),y6=[d6,p6,m6,g6],v6=sn({__name:"Loading",setup(t){zi(n=>({26774109:S(e)}));const e=St("themeColor");return(n,r)=>(re(),fe("div",f6,y6))}});var _6=ci(v6,[["__scopeId","data-v-1fa3a520"]]);const w6={class:"loader-line"},b6=sn({__name:"LoadingLine",setup(t){zi(n=>({"0d327f57":S(e)}));const e=St("themeColor");return(n,r)=>(re(),fe("div",w6))}});var E6=ci(b6,[["__scopeId","data-v-7d281cac"]]);const I6={class:"buttons-pagination"},T6=["onClick"],C6=sn({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(t,{emit:e}){const n=t;zi(a=>({"40dd4f07":S(o)}));const r=7,i=a=>{a.type==="button"&&!a.active&&e("updatePage",a.page)},s=W(()=>{const a=[];if(n.maxPaginationNumber<=r)for(let l=1;l<=n.maxPaginationNumber;l+=1)a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if([1,2,n.maxPaginationNumber,n.maxPaginationNumber-1].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)if(l<=3)a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if(l===4)a.push({type:"omission"});else{const c=n.maxPaginationNumber-(r-l);a.push({type:"button",page:c,active:c===n.currentPaginationNumber,activePrev:c+1===n.currentPaginationNumber})}else if([3,4].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)l<=5?a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber}):l===6?a.push({type:"omission"}):a.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if([n.maxPaginationNumber-2,n.maxPaginationNumber-3].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)if(l===1)a.push({type:"button",page:1,active:n.currentPaginationNumber===1,activePrev:l+1===n.currentPaginationNumber});else if(l===2)a.push({type:"omission"});else{const c=n.maxPaginationNumber-(r-l);a.push({type:"button",page:c,active:c===n.currentPaginationNumber,activePrev:c+1===n.currentPaginationNumber})}else for(let l=1;l<=r;l+=1)if(l===1)a.push({type:"button",page:1,active:n.currentPaginationNumber===1,activePrev:l+1===n.currentPaginationNumber});else if(l===2||l===6)a.push({type:"omission"});else if(l===7)a.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else{const c=4-l,u=n.currentPaginationNumber-c;a.push({type:"button",page:u,active:u===n.currentPaginationNumber,activePrev:u+1===n.currentPaginationNumber})}return a}),o=St("themeColor");return(a,l)=>(re(),fe("div",I6,[(re(!0),fe(et,null,rs(S(s),(c,u)=>(re(),fe("div",{key:u,class:Je(["item",{button:c.type==="button",active:c.type==="button"&&c.active,"active-prev":c.type==="button"&&c.activePrev,omission:c.type==="omission"}]),onClick:h=>i(c)},an(c.type==="button"?c.page:"..."),11,T6))),128))]))}});var S6=ci(C6,[["__scopeId","data-v-4c681fa2"]]);const yI=t=>(Ir("data-v-c9da5286"),t=t(),Tr(),t),k6=yI(()=>K("span",{class:"arrow arrow-right"},null,-1)),A6=[k6],R6=yI(()=>K("span",{class:"arrow arrow-left"},null,-1)),N6=[R6],x6=sn({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(t,{emit:e}){const n=I0();return(r,i)=>(re(),fe(et,null,[K("div",{class:Je(["previous-page__click-button",{"first-page":t.isFirstPage}]),onClick:i[0]||(i[0]=s=>e("clickPrevPage"))},A6,2),S(n).buttonsPagination?Gt(r.$slots,"buttonsPagination",{key:0},void 0,!0):vn("",!0),K("div",{class:Je(["next-page__click-button",{"last-page":t.isLastPage}]),onClick:i[1]||(i[1]=s=>e("clickNextPage"))},N6,2)],64))}});var O6=ci(x6,[["__scopeId","data-v-c9da5286"]]);function P6(t,e,n,r){return{clickRow:(s,o,a)=>{if(t.value!==o)return;const l=$n({},s);if(e.value){const{checkbox:c}=s;delete l.checkbox,l.isSelected=c}if(n.value){const{index:c}=s;delete l.index,l.indexInCurrentPage=c}r("clickRow",l,a)}}}function D6(t,e,n){const r=Bt([]);return{expandingItemIndexList:r,updateExpandingItemIndexList:(o,a,l)=>{l.stopPropagation();const c=r.value.indexOf(o);if(c!==-1)r.value.splice(c,1);else{const u=t.value.findIndex(h=>JSON.stringify(h)===JSON.stringify(a));n("expandRow",e.value+u,a),r.value.push(e.value+u)}},clearExpandingItemIndexList:()=>{r.value=[]}}}function M6(t){const e=W(()=>t.value.filter(i=>i.fixed)),n=W(()=>e.value.length?e.value[e.value.length-1].value:""),r=W(()=>{if(!e.value.length)return[];const i=e.value.map(s=>{var o;return(o=s.width)!=null?o:100});return e.value.map((s,o)=>{var a,l;return{value:s.value,fixed:(a=s.fixed)!=null?a:!0,width:(l=s.width)!=null?l:100,distance:o===0?0:i.reduce((c,u,h)=>{let f=c;return h<o&&(f+=u),f})}})});return{fixedHeaders:e,lastFixedColumn:n,fixedColumnsInfos:r}}function L6(t,e,n,r,i,s,o,a,l,c,u,h,f,d,g,y,w,v,b){const _=W(()=>o.value.findIndex(le=>le.fixed)!==-1),A=W(()=>_.value?o.value.filter(le=>le.fixed):[]),U=W(()=>o.value.filter(le=>!le.fixed)),F=Bt(((le,Rt)=>Array.isArray(le)&&Array.isArray(Rt)?{sortBy:le,sortDesc:Rt.map(qe=>qe==="desc")}:le!==""?{sortBy:g.value,sortDesc:y.value==="desc"}:null)(g.value,y.value)),de=W(()=>{var le;const qe=[...A.value,...U.value].map(dt=>{const Ge=Object.assign(dt);if(Ge.sortable&&(Ge.sortType="none"),f.value)if(Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortType)&&f.value.sortBy.includes(Ge.value)){const bt=f.value.sortBy.indexOf(Ge.value);Ge.sortType=f.value.sortType[bt]}else Ge.value===f.value.sortBy&&f.value.sortType&&(Ge.sortType=f.value.sortType);if(F.value&&Array.isArray(F.value.sortBy)&&Array.isArray(F.value.sortDesc)&&F.value.sortBy.includes(Ge.value)){const bt=F.value.sortBy.indexOf(Ge.value);Ge.sortType=F.value.sortDesc[bt]?"desc":"asc"}else F.value&&Ge.value===F.value.sortBy&&(Ge.sortType=F.value.sortDesc?"desc":"asc");return Ge});let _e=[];a.value?_e=[i.value||_.value?{text:"",value:"expand",fixed:!0,width:n.value}:{text:"",value:"expand"},...qe]:_e=qe;let Te=[];d.value?Te=[s.value||_.value?{text:t.value,value:"index",fixed:!0,width:l.value}:{text:t.value,value:"index"},..._e]:Te=_e;let we=[];return c.value?we=[r.value||_.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(le=e.value)!=null?le:36}:{text:"checkbox",value:"checkbox"},...Te]:we=Te,we}),ge=W(()=>de.value.map(le=>le.value));return{clientSortOptions:F,headerColumns:ge,headersForRender:de,updateSortField:(le,Rt)=>{let qe=null;if(Rt==="none"?qe="asc":Rt==="asc"?qe="desc":qe=h.value?"asc":null,u.value&&v(le,qe),F.value&&Array.isArray(F.value.sortBy)&&Array.isArray(F.value.sortDesc)){const _e=F.value.sortBy.indexOf(le);_e===-1?qe!==null&&(F.value.sortBy.push(le),F.value.sortDesc.push(qe==="desc")):qe===null?(F.value.sortDesc.splice(_e,1),F.value.sortBy.splice(_e,1)):F.value.sortDesc[_e]=qe==="desc"}else qe===null?F.value=null:F.value={sortBy:le,sortDesc:qe==="desc"};b("updateSort",{sortType:qe,sortBy:le})},isMultiSorting:le=>f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.includes(le):F.value&&Array.isArray(F.value.sortBy)?F.value.sortBy.includes(le):!1,getMultiSortNumber:le=>f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.indexOf(le)+1:F.value&&Array.isArray(F.value.sortBy)?F.value.sortBy.indexOf(le)+1:!1}}function F6(t,e,n,r,i,s,o,a,l){const c=W(()=>(t.value-1)*i.value+1),u=W(()=>n.value?Math.min(l.value,t.value*i.value):Math.min(a.value.length,t.value*i.value)),h=W(()=>n.value?r.value:a.value.slice(c.value-1,u.value)),f=W(()=>o.value?h.value.map((y,w)=>$n({index:c.value+w},y)):h.value),d=W(()=>s.value.length===0||s.value.every(w=>a.value.findIndex(v=>JSON.stringify(w)===JSON.stringify(v))===-1)?"noneSelected":s.value.length===a.value.length&&s.value.every(v=>a.value.findIndex(b=>JSON.stringify(v)===JSON.stringify(b))!==-1)?"allSelected":"partSelected"),g=W(()=>e.value?d.value==="allSelected"?f.value.map(y=>$n({checkbox:!0},y)):d.value==="noneSelected"?f.value.map(y=>$n({checkbox:!1},y)):f.value.map(y=>{const w=s.value.findIndex(v=>{const b=$n({},y);return delete b.index,JSON.stringify(v)===JSON.stringify(b)})!==-1;return $n({checkbox:w},y)}):f.value);return{currentPageFirstIndex:c,currentPageLastIndex:u,multipleSelectStatus:d,pageItems:g}}function U6(t,e,n,r,i,s,o){const a=Bt(s.value?s.value.page:t.value),l=W(()=>Math.ceil(r.value/i.value)),c=W(()=>l.value===0||a.value===l.value),u=W(()=>a.value===1);return{currentPaginationNumber:a,maxPaginationNumber:l,isLastPage:c,isFirstPage:u,nextPage:()=>{if(r.value!==0&&!c.value&&!n.value)if(e.value){const y=a.value+1;o(y)}else a.value+=1},prevPage:()=>{if(r.value!==0&&!u.value&&!n.value)if(e.value){const y=a.value-1;o(y)}else a.value-=1},updatePage:y=>{n.value||(e.value?o(y):a.value=y)},updateCurrentPaginationNumber:y=>{a.value=y}}}function V6(t,e,n,r){const i=W(()=>!t.value&&e.value.findIndex(a=>a===r.value)===-1?[r.value,...e.value]:e.value),s=Bt(n.value?n.value.rowsPerPage:r.value);return{rowsItemsComputed:i,rowsPerPageRef:s,updateRowsPerPage:a=>{s.value=a}}}function $6(t,e,n){const r=W({get:()=>{if(t.value){const{page:a,rowsPerPage:l,sortBy:c,sortType:u}=t.value;return{page:a,rowsPerPage:l,sortBy:c??null,sortType:u??null}}return null},set:a=>{n("update:serverOptions",a)}});return{serverOptionsComputed:r,updateServerOptionsPage:a=>{r.value&&(r.value=Wl($n({},r.value),{page:a}))},updateServerOptionsSort:(a,l)=>{if(r.value)if(e.value&&Array.isArray(r.value.sortBy)&&Array.isArray(r.value.sortType)){const c=r.value.sortBy.findIndex(u=>u===a);c===-1&&l!==null&&(r.value.sortBy.push(a),r.value.sortType.push(l)),l===null?(r.value.sortBy.splice(c,1),r.value.sortType.splice(c,1)):r.value.sortType[c]=l}else r.value=Wl($n({},r.value),{sortBy:l!==null?a:null,sortType:l})},updateServerOptionsRowsPerPage:a=>{r.value&&(r.value=Wl($n({},r.value),{page:1,rowsPerPage:a}))}}}function Qt(t,e){var n;if(t.includes(".")){let r="";const i=t.split("."),{length:s}=i;let o=0;for(;o<s&&(r=o===0?e[i[o]]:r[i[o]],o+=1,r!==void 0););return r}return(n=e[t])!=null?n:""}function B6(t,e){const n=Qt(t,e);return Array.isArray(n)?n.join(","):n}function H6(t,e,n,r,i,s,o,a,l,c){const u=_=>{if(typeof s.value=="string"&&s.value!=="")return Qt(s.value,_);if(Array.isArray(s.value)){let A="";return s.value.forEach(U=>{A+=Qt(U,_)}),A}return Object.values(_).join(" ")},h=W(()=>{if(!n.value&&o.value!==""){const _=new RegExp(o.value,"i");return r.value.filter(A=>_.test(u(A)))}return r.value}),f=W(()=>{let _=[...h.value];return e.value?(e.value.forEach(A=>{_=_.filter(U=>{const{field:Z,comparison:F,criteria:de}=A;if(typeof F=="function")return F(Qt(Z,U),de);const ge=Qt(Z,U);switch(F){case"=":return ge===de;case"!=":return ge!==de;case">":return ge>de;case"<":return ge<de;case"<=":return ge<=de;case">=":return ge>=de;case"between":return ge>=Math.min(...de)&&ge<=Math.max(...de);case"in":return de.includes(ge);default:return ge===de}})}),_):h.value});Dt(f,_=>{e.value&&c("updateFilter",_)},{immediate:!0,deep:!0});function d(_,A,U,Z){const F=_[Z],de=A[Z];return(Z===0?U:d(_,A,U,Z-1)).sort((Ke,Kt)=>{let at=!0;for(let le=0;le<Z;le+=1)if(Qt(_[le],Ke)!==Qt(_[le],Kt)){at=!1;break}return at?Qt(F,Ke)<Qt(F,Kt)?de?1:-1:Qt(F,Ke)>Qt(F,Kt)?de?-1:1:0:0})}const g=W(()=>{if(n.value)return r.value;if(t.value===null)return f.value;const{sortBy:_,sortDesc:A}=t.value,U=[...f.value];return l&&Array.isArray(_)&&Array.isArray(A)?_.length===0?U:d(_,A,U,_.length-1):U.sort((Z,F)=>Qt(_,Z)<Qt(_,F)?A?1:-1:Qt(_,Z)>Qt(_,F)?A?-1:1:0)}),y=W(()=>n.value?a.value:g.value.length),w=W({get:()=>{var _;return(_=i.value)!=null?_:[]},set:_=>{c("update:itemsSelected",_)}});return{totalItems:g,selectItemsComputed:w,totalItemsLength:y,toggleSelectAll:_=>{w.value=_?g.value:[],_&&c("selectAll")},toggleSelectItem:_=>{const A=_.checkbox;if(delete _.checkbox,delete _.index,A)w.value=w.value.filter(U=>JSON.stringify(U)!==JSON.stringify(_)),c("deselectRow",_);else{const U=w.value;U.unshift(_),w.value=U,c("selectRow",_)}}}}var j6={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,deault:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1},tableNodeId:{type:String,default:""},showIndexSymbol:{type:String,default:"#"}};const z6=t=>(Ir("data-v-19cc4b1b"),t=t(),Tr(),t),q6=["id"],W6=["onClick"],K6={key:3,class:"header-text"},G6={key:5,class:"multi-sort__number"},Y6=["onClick","onDblclick","onContextmenu"],Q6=["onClick"],X6=["colspan"],J6={key:0,class:"vue3-easy-data-table__loading"},Z6=z6(()=>K("div",{class:"vue3-easy-data-table__loading-mask"},null,-1)),eF={class:"loading-entity"},tF={key:1,class:"vue3-easy-data-table__message"},nF={key:0,class:"vue3-easy-data-table__footer"},rF={key:0,class:"pagination__rows-per-page"},iF={class:"pagination__items-index"},sF=sn({__name:"DataTable",props:Wl($n({},j6),{items:{type:Array,required:!0},headers:{type:Array,required:!0}}),emits:["clickRow","contextmenuRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions","updatePageItems","updateTotalItems","selectAll"],setup(t,{expose:e,emit:n}){const r=t;zi(ee=>({"8bb50160":S(Nt),"53360ea0":S(bt)}));const{tableNodeId:i,clickEventType:s,bodyTextDirection:o,checkboxColumnWidth:a,currentPage:l,expandColumnWidth:c,filterOptions:u,fixedCheckbox:h,fixedExpand:f,fixedHeader:d,fixedIndex:g,headers:y,headerTextDirection:w,indexColumnWidth:v,items:b,itemsSelected:_,loading:A,mustSort:U,multiSort:Z,rowsItems:F,rowsPerPage:de,searchField:ge,searchValue:Ke,serverItemsLength:Kt,serverOptions:at,showIndex:le,sortBy:Rt,sortType:qe,tableHeight:_e,tableMinHeight:Te,themeColor:we,rowsOfPageSeparatorMessage:dt,showIndexSymbol:Ge}=KT(r),bt=W(()=>_e.value?`${_e.value}px`:null),Nt=W(()=>`${Te.value}px`);ps("themeColor",we.value);const pt=I0(),Xi=W(()=>!!pt.pagination),C=W(()=>!!pt.loading),V=W(()=>!!pt.expand),M=W(()=>!!pt.body),G=Bt(),me=Bt();ps("dataTable",G);const Me=Bt(!1);Ks(()=>{me.value.addEventListener("scroll",()=>{Me.value=me.value.scrollLeft>0})});const ce=W(()=>_.value!==null),p=W(()=>at.value!==null),{serverOptionsComputed:m,updateServerOptionsPage:E,updateServerOptionsSort:I,updateServerOptionsRowsPerPage:k}=$6(at,Z,n),{clientSortOptions:O,headerColumns:L,headersForRender:N,updateSortField:P,isMultiSorting:R,getMultiSortNumber:X}=L6(Ge,a,c,h,f,g,y,V,v,ce,p,U,m,le,Rt,qe,Z,I,n),{rowsItemsComputed:H,rowsPerPageRef:j,updateRowsPerPage:ie}=V6(p,F,at,de),{totalItems:pe,selectItemsComputed:Pe,totalItemsLength:Ce,toggleSelectAll:Qe,toggleSelectItem:on}=H6(O,u,p,b,_,ge,Ke,Kt,Z,n),{currentPaginationNumber:xt,maxPaginationNumber:Ar,isLastPage:gn,isFirstPage:Rr,nextPage:lt,prevPage:Ot,updatePage:Nr,updateCurrentPaginationNumber:YI}=U6(l,p,A,Ce,j,at,E),{currentPageFirstIndex:Lm,currentPageLastIndex:Fm,multipleSelectStatus:Um,pageItems:ui}=F6(xt,ce,p,b,j,Pe,le,pe,Ce),ho=W(()=>xt.value===0?0:(xt.value-1)*j.value),{expandingItemIndexList:Vm,updateExpandingItemIndexList:$m,clearExpandingItemIndexList:Bm}=D6(ui,ho,n),{fixedHeaders:Ju,lastFixedColumn:Hm,fixedColumnsInfos:QI}=M6(N),{clickRow:jm}=P6(s,ce,le,n),XI=ee=>{var nr;const Y=(nr=ee.width)!=null?nr:Ju.value.length?100:null;if(Y)return`width: ${Y}px; min-width: ${Y}px;`},zm=(ee,nr="th")=>{if(!Ju.value.length)return;const Y=QI.value.find(Et=>Et.value===ee);if(Y)return`left: ${Y.distance}px;z-index: ${nr==="th"?3:1};position: sticky;`};return Dt(A,(ee,nr)=>{m.value&&ee===!1&&nr===!0&&(YI(m.value.page),Bm())}),Dt(j,ee=>{p.value?k(ee):Nr(1)}),Dt([Ke,u],()=>{p.value||Nr(1)}),Dt([xt,O,ge,Ke,u],()=>{Bm()},{deep:!0}),Dt(ui,ee=>{n("updatePageItems",ee)},{deep:!0}),Dt(pe,ee=>{n("updateTotalItems",ee)},{deep:!0}),e({currentPageFirstIndex:Lm,currentPageLastIndex:Fm,clientItemsLength:Ce,maxPaginationNumber:Ar,currentPaginationNumber:xt,isLastPage:gn,isFirstPage:Rr,nextPage:lt,prevPage:Ot,updatePage:Nr,rowsPerPageOptions:H,rowsPerPageActiveOption:j,updateRowsPerPageActiveOption:ie}),(ee,nr)=>(re(),fe("div",{ref_key:"dataTable",ref:G,class:Je(["vue3-easy-data-table",[ee.tableClassName]])},[K("div",{ref_key:"tableBody",ref:me,class:Je(["vue3-easy-data-table__main",{"fixed-header":S(d),"fixed-height":S(_e),"show-shadow":Me.value,"table-fixed":S(Ju).length,hoverable:!ee.noHover,"border-cell":ee.borderCell}])},[K("table",{id:S(i)},[K("colgroup",null,[(re(!0),fe(et,null,rs(S(N),(Y,Et)=>(re(),fe("col",{key:Et,style:Hr(XI(Y))},null,4))),128))]),S(pt)["customize-headers"]?Gt(ee.$slots,"customize-headers",{key:0},void 0,!0):S(N).length&&!ee.hideHeader?(re(),fe("thead",{key:1,class:Je(["vue3-easy-data-table__header",[ee.headerClassName]])},[K("tr",null,[(re(!0),fe(et,null,rs(S(N),(Y,Et)=>(re(),fe("th",{key:Et,class:Je([{sortable:Y.sortable,none:Y.sortable&&Y.sortType==="none",desc:Y.sortable&&Y.sortType==="desc",asc:Y.sortable&&Y.sortType==="asc",shadow:Y.value===S(Hm)},typeof ee.headerItemClassName=="string"?ee.headerItemClassName:ee.headerItemClassName(Y,Et+1)]),style:Hr(zm(Y.value)),onClick:ks(Xe=>Y.sortable&&Y.sortType?S(P)(Y.value,Y.sortType):null,["stop"])},[Y.text==="checkbox"?(re(),Un(Z4,{key:S(Um),status:S(Um),onChange:S(Qe)},null,8,["status","onChange"])):(re(),fe("span",{key:1,class:Je(["header",`direction-${S(w)}`])},[S(pt)[`header-${Y.value}`]?Gt(ee.$slots,`header-${Y.value}`,yn(ir({key:0},Y)),void 0,!0):S(pt)[`header-${Y.value.toLowerCase()}`]?Gt(ee.$slots,`header-${Y.value.toLowerCase()}`,yn(ir({key:1},Y)),void 0,!0):S(pt).header?Gt(ee.$slots,"header",yn(ir({key:2},Y)),void 0,!0):(re(),fe("span",K6,an(Y.text),1)),Y.sortable?(re(),fe("i",{key:Y.sortType?Y.sortType:"none",class:Je(["sortType-icon",{desc:Y.sortType==="desc"}])},null,2)):vn("",!0),S(Z)&&S(R)(Y.value)?(re(),fe("span",G6,an(S(X)(Y.value)),1)):vn("",!0)],2))],14,W6))),128))])],2)):vn("",!0),S(M)?Gt(ee.$slots,"body",yn(ir({key:2},S(ui))),void 0,!0):S(L).length?(re(),fe("tbody",{key:3,class:Je(["vue3-easy-data-table__body",{"row-alternation":ee.alternating}])},[Gt(ee.$slots,"body-prepend",yn(Fl({items:S(ui),pagination:{isFirstPage:S(Rr),isLastPage:S(gn),currentPaginationNumber:S(xt),maxPaginationNumber:S(Ar),nextPage:S(lt),prevPage:S(Ot)},headers:S(N)})),void 0,!0),(re(!0),fe(et,null,rs(S(ui),(Y,Et)=>(re(),fe(et,{key:Et},[K("tr",{class:Je([{"even-row":(Et+1)%2===0},typeof ee.bodyRowClassName=="string"?ee.bodyRowClassName:ee.bodyRowClassName(Y,Et+1)]),onClick:Xe=>{S(jm)(Y,"single",Xe),ee.clickRowToExpand&&S($m)(Et+S(ho),Y,Xe)},onDblclick:Xe=>{S(jm)(Y,"double",Xe)},onContextmenu:ks(Xe=>{n("contextmenuRow",Y,Xe)},["prevent"])},[(re(!0),fe(et,null,rs(S(L),(Xe,JI)=>(re(),fe("td",{key:JI,style:Hr(zm(Xe,"td")),class:Je([{shadow:Xe===S(Hm),"can-expand":Xe==="expand"},typeof ee.bodyItemClassName=="string"?ee.bodyItemClassName:ee.bodyItemClassName(Xe,Et+1),`direction-${S(o)}`]),onClick:qm=>Xe==="expand"?S($m)(Et+S(ho),Y,qm):null},[S(pt)[`item-${Xe}`]?Gt(ee.$slots,`item-${Xe}`,yn(ir({key:0},Y)),void 0,!0):S(pt)[`item-${Xe.toLowerCase()}`]?Gt(ee.$slots,`item-${Xe.toLowerCase()}`,yn(ir({key:1},Y)),void 0,!0):Xe==="expand"?(re(),fe("i",{key:2,class:Je(["expand-icon",{expanding:S(Vm).includes(S(ho)+Et)}])},null,2)):Xe==="checkbox"?(re(),Un(i6,{key:3,checked:Y[Xe],onChange:qm=>S(on)(Y)},null,8,["checked","onChange"])):S(pt).item?Gt(ee.$slots,"item",yn(ir({key:4},{column:Xe,item:Y})),void 0,!0):(re(),fe(et,{key:5},[Mn(an(S(B6)(Xe,Y)),1)],64))],14,Q6))),128))],42,Y6),S(V)&&S(Vm).includes(Et+S(ho))?(re(),fe("tr",{key:0,class:Je([{"even-row":(Et+1)%2===0},typeof ee.bodyExpandRowClassName=="string"?ee.bodyExpandRowClassName:ee.bodyExpandRowClassName(Y,Et+1)])},[K("td",{colspan:S(N).length,class:"expand"},[Y.expandLoading?(re(),Un(E6,{key:0,class:"expand-loading"})):vn("",!0),Gt(ee.$slots,"expand",yn(Fl(Y)),void 0,!0)],8,X6)],2)):vn("",!0)],64))),128)),Gt(ee.$slots,"body-append",yn(Fl({items:S(ui),pagination:{isFirstPage:S(Rr),isLastPage:S(gn),currentPaginationNumber:S(xt),maxPaginationNumber:S(Ar),nextPage:S(lt),prevPage:S(Ot),updatePage:S(Nr)},headers:S(N)})),void 0,!0)],2)):vn("",!0)],8,q6),S(A)?(re(),fe("div",J6,[Z6,K("div",eF,[S(C)?Gt(ee.$slots,"loading",{key:0},void 0,!0):(re(),Un(_6,{key:1}))])])):vn("",!0),!S(ui).length&&!S(A)?(re(),fe("div",tF,[Gt(ee.$slots,"empty-message",{},()=>[Mn(an(ee.emptyMessage),1)],!0)])):vn("",!0)],2),ee.hideFooter?vn("",!0):(re(),fe("div",nF,[ee.hideRowsPerPage?vn("",!0):(re(),fe("div",rF,[Mn(an(ee.rowsPerPageMessage)+" ",1),Se(h6,{modelValue:S(j),"onUpdate:modelValue":nr[0]||(nr[0]=Y=>_t(j)?j.value=Y:null),"rows-items":S(H)},null,8,["modelValue","rows-items"])])),K("div",iF,an(`${S(Lm)}–${S(Fm)}`)+" "+an(S(dt))+" "+an(S(Ce)),1),S(Xi)?Gt(ee.$slots,"pagination",yn(ir({key:1},{isFirstPage:S(Rr),isLastPage:S(gn),currentPaginationNumber:S(xt),maxPaginationNumber:S(Ar),nextPage:S(lt),prevPage:S(Ot)})),void 0,!0):(re(),Un(O6,{key:2,"is-first-page":S(Rr),"is-last-page":S(gn),onClickNextPage:S(lt),onClickPrevPage:S(Ot)},EC({_:2},[ee.buttonsPagination?{name:"buttonsPagination",fn:or(()=>[Se(S6,{"current-pagination-number":S(xt),"max-pagination-number":S(Ar),onUpdatePage:S(Nr)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])]),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var vI=ci(sF,[["__scopeId","data-v-19cc4b1b"]]);typeof window<"u"&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",vI);function t_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t_(Object(n),!0).forEach(function(r){ft(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vc(t){return Vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vc(t)}function oF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function aF(t,e,n){return e&&n_(t.prototype,e),n&&n_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Em(t,e){return cF(t)||hF(t,e)||_I(t,e)||dF()}function nl(t){return lF(t)||uF(t)||_I(t)||fF()}function lF(t){if(Array.isArray(t))return Zf(t)}function cF(t){if(Array.isArray(t))return t}function uF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function _I(t,e){if(t){if(typeof t=="string")return Zf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zf(t,e)}}function Zf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r_=function(){},Im={},wI={},bI=null,EI={mark:r_,measure:r_};try{typeof window<"u"&&(Im=window),typeof document<"u"&&(wI=document),typeof MutationObserver<"u"&&(bI=MutationObserver),typeof performance<"u"&&(EI=performance)}catch{}var pF=Im.navigator||{},i_=pF.userAgent,s_=i_===void 0?"":i_,ni=Im,je=wI,o_=bI,Cl=EI;ni.document;var kr=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",II=~s_.indexOf("MSIE")||~s_.indexOf("Trident/"),Sl,kl,Al,Rl,Nl,wr="___FONT_AWESOME___",ed=16,TI="fa",CI="svg-inline--fa",Hi="data-fa-i2svg",td="data-fa-pseudo-element",mF="data-fa-pseudo-element-pending",Tm="data-prefix",Cm="data-icon",a_="fontawesome-i2svg",gF="async",yF=["HTML","HEAD","STYLE","SCRIPT"],SI=function(){try{return!0}catch{return!1}}(),Be="classic",Ze="sharp",Sm=[Be,Ze];function rl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Be]}})}var wa=rl((Sl={},ft(Sl,Be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ft(Sl,Ze,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Sl)),ba=rl((kl={},ft(kl,Be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ft(kl,Ze,{solid:"fass",regular:"fasr"}),kl)),Ea=rl((Al={},ft(Al,Be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ft(Al,Ze,{fass:"fa-solid",fasr:"fa-regular"}),Al)),vF=rl((Rl={},ft(Rl,Be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ft(Rl,Ze,{"fa-solid":"fass","fa-regular":"fasr"}),Rl)),_F=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,kI="fa-layers-text",wF=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bF=rl((Nl={},ft(Nl,Be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ft(Nl,Ze,{900:"fass",400:"fasr"}),Nl)),AI=[1,2,3,4,5,6,7,8,9,10],EF=AI.concat([11,12,13,14,15,16,17,18,19,20]),IF=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ii={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ia=new Set;Object.keys(ba[Be]).map(Ia.add.bind(Ia));Object.keys(ba[Ze]).map(Ia.add.bind(Ia));var TF=[].concat(Sm,nl(Ia),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ii.GROUP,Ii.SWAP_OPACITY,Ii.PRIMARY,Ii.SECONDARY]).concat(AI.map(function(t){return"".concat(t,"x")})).concat(EF.map(function(t){return"w-".concat(t)})),qo=ni.FontAwesomeConfig||{};function CF(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function SF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(je&&typeof je.querySelector=="function"){var kF=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kF.forEach(function(t){var e=Em(t,2),n=e[0],r=e[1],i=SF(CF(n));i!=null&&(qo[r]=i)})}var RI={styleDefault:"solid",familyDefault:"classic",cssPrefix:TI,replacementClass:CI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qo.familyPrefix&&(qo.cssPrefix=qo.familyPrefix);var Hs=$($({},RI),qo);Hs.autoReplaceSvg||(Hs.observeMutations=!1);var z={};Object.keys(RI).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Hs[t]=n,Wo.forEach(function(r){return r(z)})},get:function(){return Hs[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Hs.cssPrefix=e,Wo.forEach(function(n){return n(z)})},get:function(){return Hs.cssPrefix}});ni.FontAwesomeConfig=z;var Wo=[];function AF(t){return Wo.push(t),function(){Wo.splice(Wo.indexOf(t),1)}}var Dr=ed,Hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RF(t){if(!(!t||!kr)){var e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=je.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return je.head.insertBefore(e,r),t}}var NF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ta(){for(var t=12,e="";t-- >0;)e+=NF[Math.random()*62|0];return e}function co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function km(t){return t.classList?co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function NI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xF(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(NI(t[n]),'" ')},"").trim()}function Gu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Am(t){return t.size!==Hn.size||t.x!==Hn.x||t.y!==Hn.y||t.rotate!==Hn.rotate||t.flipX||t.flipY}function OF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function PF(t){var e=t.transform,n=t.width,r=n===void 0?ed:n,i=t.height,s=i===void 0?ed:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&II?l+="translate(".concat(e.x/Dr-r/2,"em, ").concat(e.y/Dr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Dr,"em), calc(-50% + ").concat(e.y/Dr,"em)) "):l+="translate(".concat(e.x/Dr,"em, ").concat(e.y/Dr,"em) "),l+="scale(".concat(e.size/Dr*(e.flipX?-1:1),", ").concat(e.size/Dr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var DF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xI(){var t=TI,e=CI,n=z.cssPrefix,r=z.replacementClass,i=DF;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var l_=!1;function Dh(){z.autoAddCss&&!l_&&(RF(xI()),l_=!0)}var MF={mixout:function(){return{dom:{css:xI,insertCss:Dh}}},hooks:function(){return{beforeDOMElementCreation:function(){Dh()},beforeI2svg:function(){Dh()}}}},br=ni||{};br[wr]||(br[wr]={});br[wr].styles||(br[wr].styles={});br[wr].hooks||(br[wr].hooks={});br[wr].shims||(br[wr].shims=[]);var Sn=br[wr],OI=[],LF=function t(){je.removeEventListener("DOMContentLoaded",t),$c=1,OI.map(function(e){return e()})},$c=!1;kr&&($c=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),$c||je.addEventListener("DOMContentLoaded",LF));function FF(t){kr&&($c?setTimeout(t,0):OI.push(t))}function il(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?NI(t):"<".concat(e," ").concat(xF(r),">").concat(s.map(il).join(""),"</").concat(e,">")}function c_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var UF=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Mh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?UF(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function VF(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function nd(t){var e=VF(t);return e.length===1?e[0].toString(16):null}function $F(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function u_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function rd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=u_(e);typeof Sn.hooks.addPack=="function"&&!i?Sn.hooks.addPack(t,u_(e)):Sn.styles[t]=$($({},Sn.styles[t]||{}),s),t==="fas"&&rd("fa",e)}var xl,Ol,Pl,ls=Sn.styles,BF=Sn.shims,HF=(xl={},ft(xl,Be,Object.values(Ea[Be])),ft(xl,Ze,Object.values(Ea[Ze])),xl),Rm=null,PI={},DI={},MI={},LI={},FI={},jF=(Ol={},ft(Ol,Be,Object.keys(wa[Be])),ft(Ol,Ze,Object.keys(wa[Ze])),Ol);function zF(t){return~TF.indexOf(t)}function qF(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!zF(i)?i:null}var UI=function(){var e=function(s){return Mh(ls,function(o,a,l){return o[l]=Mh(a,s,{}),o},{})};PI=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),DI=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),FI=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ls||z.autoFetchSvg,r=Mh(BF,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});MI=r.names,LI=r.unicodes,Rm=Yu(z.styleDefault,{family:z.familyDefault})};AF(function(t){Rm=Yu(t.styleDefault,{family:z.familyDefault})});UI();function Nm(t,e){return(PI[t]||{})[e]}function WF(t,e){return(DI[t]||{})[e]}function Ti(t,e){return(FI[t]||{})[e]}function VI(t){return MI[t]||{prefix:null,iconName:null}}function KF(t){var e=LI[t],n=Nm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ri(){return Rm}var xm=function(){return{prefix:null,iconName:null,rest:[]}};function Yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Be:n,i=wa[r][t],s=ba[r][t]||ba[r][i],o=t in Sn.styles?t:null;return s||o||null}var h_=(Pl={},ft(Pl,Be,Object.keys(Ea[Be])),ft(Pl,Ze,Object.keys(Ea[Ze])),Pl);function Qu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ft(e,Be,"".concat(z.cssPrefix,"-").concat(Be)),ft(e,Ze,"".concat(z.cssPrefix,"-").concat(Ze)),e),o=null,a=Be;(t.includes(s[Be])||t.some(function(c){return h_[Be].includes(c)}))&&(a=Be),(t.includes(s[Ze])||t.some(function(c){return h_[Ze].includes(c)}))&&(a=Ze);var l=t.reduce(function(c,u){var h=qF(z.cssPrefix,u);if(ls[u]?(u=HF[a].includes(u)?vF[a][u]:u,o=u,c.prefix=u):jF[a].indexOf(u)>-1?(o=u,c.prefix=Yu(u,{family:a})):h?c.iconName=h:u!==z.replacementClass&&u!==s[Be]&&u!==s[Ze]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=o==="fa"?VI(c.iconName):{},d=Ti(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ls.far&&ls.fas&&!z.autoFetchSvg&&(c.prefix="fas")}return c},xm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ze&&(ls.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ti(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ri()||"fas"),l}var GF=function(){function t(){oF(this,t),this.definitions={}}return aF(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),rd(a,o[a]);var l=Ea[Be][a];l&&rd(l,o[a]),UI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),f_=[],cs={},Es={},YF=Object.keys(Es);function QF(t,e){var n=e.mixoutsTo;return f_=t,cs={},Object.keys(Es).forEach(function(r){YF.indexOf(r)===-1&&delete Es[r]}),f_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Vc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){cs[o]||(cs[o]=[]),cs[o].push(s[o])})}r.provides&&r.provides(Es)}),n}function id(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=cs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ji(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=cs[t]||[];i.forEach(function(s){s.apply(null,n)})}function Er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function sd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ri();if(e)return e=Ti(n,e)||e,c_($I.definitions,n,e)||c_(Sn.styles,n,e)}var $I=new GF,XF=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,ji("noAuto")},JF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kr?(ji("beforeI2svg",e),Er("pseudoElements2svg",e),Er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,FF(function(){eU({autoReplaceSvgRoot:n}),ji("watch",e)})}},ZF={icon:function(e){if(e===null)return null;if(Vc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ti(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Yu(e[0]);return{prefix:r,iconName:Ti(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(_F))){var i=Qu(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ri(),iconName:Ti(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ri();return{prefix:s,iconName:Ti(s,e)||e}}}},fn={noAuto:XF,config:z,dom:JF,parse:ZF,library:$I,findIconDefinition:sd,toHtml:il},eU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?je:n;(Object.keys(Sn.styles).length>0||z.autoFetchSvg)&&kr&&z.autoReplaceSvg&&fn.dom.i2svg({node:r})};function Xu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return il(r)})}}),Object.defineProperty(t,"node",{get:function(){if(kr){var r=je.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function tU(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Am(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Gu($($({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function nU(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function Om(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,g=r.found?r:n,y=g.width,w=g.height,v=i==="fak",b=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(ge){return h.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(h.classes).join(" "),_={children:[],attributes:$($({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},A=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};d&&(_.attributes[Hi]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||Ta())},children:[l]}),delete _.attributes.title);var U=$($({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:$($({},A),h.styles)}),Z=r.found&&n.found?Er("generateAbstractMask",U)||{children:[],attributes:{}}:Er("generateAbstractIcon",U)||{children:[],attributes:{}},F=Z.children,de=Z.attributes;return U.children=F,U.attributes=de,a?nU(U):tU(U)}function d_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=$($($({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Hi]="");var u=$({},o.styles);Am(i)&&(u.transform=PF({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Gu(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function rU(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lh=Sn.styles;function od(t){var e=t[0],n=t[1],r=t.slice(4),i=Em(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ii.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ii.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ii.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var iU={found:!1,width:512,height:512};function sU(t,e){!SI&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ad(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=ri()),new Promise(function(r,i){if(Er("missingIconAbstract"),n==="fa"){var s=VI(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Lh[e]&&Lh[e][t]){var o=Lh[e][t];return r(od(o))}sU(t,e),r($($({},iU),{},{icon:z.showMissingIcons&&t?Er("missingIconAbstract")||{}:{}}))})}var p_=function(){},ld=z.measurePerformance&&Cl&&Cl.mark&&Cl.measure?Cl:{mark:p_,measure:p_},No='FA "6.3.0"',oU=function(e){return ld.mark("".concat(No," ").concat(e," begins")),function(){return BI(e)}},BI=function(e){ld.mark("".concat(No," ").concat(e," ends")),ld.measure("".concat(No," ").concat(e),"".concat(No," ").concat(e," begins"),"".concat(No," ").concat(e," ends"))},Pm={begin:oU,end:BI},Kl=function(){};function m_(t){var e=t.getAttribute?t.getAttribute(Hi):null;return typeof e=="string"}function aU(t){var e=t.getAttribute?t.getAttribute(Tm):null,n=t.getAttribute?t.getAttribute(Cm):null;return e&&n}function lU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function cU(){if(z.autoReplaceSvg===!0)return Gl.replace;var t=Gl[z.autoReplaceSvg];return t||Gl.replace}function uU(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function hU(t){return je.createElement(t)}function HI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?uU:hU:n;if(typeof t=="string")return je.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(HI(o,{ceFn:r}))}),i}function fU(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Gl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(HI(i),n)}),n.getAttribute(Hi)===null&&z.keepOriginalSource){var r=je.createComment(fU(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~km(n).indexOf(z.replacementClass))return Gl.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return il(a)}).join(`
`);n.setAttribute(Hi,""),n.innerHTML=o}};function g_(t){t()}function jI(t,e){var n=typeof e=="function"?e:Kl;if(t.length===0)n();else{var r=g_;z.mutateApproach===gF&&(r=ni.requestAnimationFrame||g_),r(function(){var i=cU(),s=Pm.begin("mutate");t.map(i),s(),n()})}}var Dm=!1;function zI(){Dm=!0}function cd(){Dm=!1}var Bc=null;function y_(t){if(o_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Kl:e,r=t.nodeCallback,i=r===void 0?Kl:r,s=t.pseudoElementsCallback,o=s===void 0?Kl:s,a=t.observeMutationsRoot,l=a===void 0?je:a;Bc=new o_(function(c){if(!Dm){var u=ri();co(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!m_(h.addedNodes[0])&&(z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&m_(h.target)&&~IF.indexOf(h.attributeName))if(h.attributeName==="class"&&aU(h.target)){var f=Qu(km(h.target)),d=f.prefix,g=f.iconName;h.target.setAttribute(Tm,d||u),g&&h.target.setAttribute(Cm,g)}else lU(h.target)&&i(h.target)})}}),kr&&Bc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dU(){Bc&&Bc.disconnect()}function pU(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function mU(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Qu(km(t));return i.prefix||(i.prefix=ri()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WF(i.prefix,t.innerText)||Nm(i.prefix,nd(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gU(t){var e=co(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ta()):(e["aria-hidden"]="true",e.focusable="false")),e}function yU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mU(t),r=n.iconName,i=n.prefix,s=n.rest,o=gU(t),a=id("parseNodeAttributes",{},t),l=e.styleParser?pU(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var vU=Sn.styles;function qI(t){var e=z.autoReplaceSvg==="nest"?v_(t,{styleParser:!1}):v_(t);return~e.extra.classes.indexOf(kI)?Er("generateLayersText",t,e):Er("generateSvgReplacementMutation",t,e)}var ii=new Set;Sm.map(function(t){ii.add("fa-".concat(t))});Object.keys(wa[Be]).map(ii.add.bind(ii));Object.keys(wa[Ze]).map(ii.add.bind(ii));ii=nl(ii);function __(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kr)return Promise.resolve();var n=je.documentElement.classList,r=function(h){return n.add("".concat(a_,"-").concat(h))},i=function(h){return n.remove("".concat(a_,"-").concat(h))},s=z.autoFetchSvg?ii:Sm.map(function(u){return"fa-".concat(u)}).concat(Object.keys(vU));s.includes("fa")||s.push("fa");var o=[".".concat(kI,":not([").concat(Hi,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Hi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=co(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Pm.begin("onTree"),c=a.reduce(function(u,h){try{var f=qI(h);f&&u.push(f)}catch(d){SI||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){jI(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function _U(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qI(t).then(function(n){n&&jI([n],e)})}function wU(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:sd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:sd(i||{})),t(r,$($({},n),{},{mask:i}))}}var bU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Hn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,g=d===void 0?null:d,y=n.classes,w=y===void 0?[]:y,v=n.attributes,b=v===void 0?{}:v,_=n.styles,A=_===void 0?{}:_;if(e){var U=e.prefix,Z=e.iconName,F=e.icon;return Xu($({type:"icon"},e),function(){return ji("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?b["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||Ta()):(b["aria-hidden"]="true",b.focusable="false")),Om({icons:{main:od(F),mask:l?od(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:Z,transform:$($({},Hn),i),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:b,styles:A,classes:w}})})}},EU={mixout:function(){return{icon:wU(bU)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=__,n.nodeCallback=_U,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?je:r,s=n.callback,o=s===void 0?function(){}:s;return __(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,g){Promise.all([ad(i,a),u.iconName?ad(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=Em(y,2),v=w[0],b=w[1];d([n,Om({icons:{main:v,mask:b},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gu(a);l.length>0&&(i.style=l);var c;return Am(o)&&(c=Er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},IU={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Xu({type:"layer"},function(){ji("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(nl(s)).join(" ")},children:o}]})}}}},TU={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Xu({type:"counter",content:n},function(){return ji("beforeDOMElementCreation",{content:n,params:r}),rU({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(nl(a))}})})}}}},CU={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Hn:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,d=f===void 0?{}:f;return Xu({type:"text",content:n},function(){return ji("beforeDOMElementCreation",{content:n,params:r}),d_({content:n,transform:$($({},Hn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(z.cssPrefix,"-layers-text")].concat(nl(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(II){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,d_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},SU=new RegExp('"',"ug"),w_=[1105920,1112319];function kU(t){var e=t.replace(SU,""),n=$F(e,0),r=n>=w_[0]&&n<=w_[1],i=e.length===2?e[0]===e[1]:!1;return{value:nd(i?e[0]:e),isSecondary:r||i}}function b_(t,e){var n="".concat(mF).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=co(t.children),o=s.filter(function(F){return F.getAttribute(td)===e})[0],a=ni.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(wF),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ze:Be,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ba[f][l[2].toLowerCase()]:bF[f][c],g=kU(h),y=g.value,w=g.isSecondary,v=l[0].startsWith("FontAwesome"),b=Nm(d,y),_=b;if(v){var A=KF(y);A.iconName&&A.prefix&&(b=A.iconName,d=A.prefix)}if(b&&!w&&(!o||o.getAttribute(Tm)!==d||o.getAttribute(Cm)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var U=yU(),Z=U.extra;Z.attributes[td]=e,ad(b,d).then(function(F){var de=Om($($({},U),{},{icons:{main:F,mask:xm()},prefix:d,iconName:_,extra:Z,watchable:!0})),ge=je.createElement("svg");e==="::before"?t.insertBefore(ge,t.firstChild):t.appendChild(ge),ge.outerHTML=de.map(function(Ke){return il(Ke)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function AU(t){return Promise.all([b_(t,"::before"),b_(t,"::after")])}function RU(t){return t.parentNode!==document.head&&!~yF.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(td)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function E_(t){if(kr)return new Promise(function(e,n){var r=co(t.querySelectorAll("*")).filter(RU).map(AU),i=Pm.begin("searchPseudoElements");zI(),Promise.all(r).then(function(){i(),cd(),e()}).catch(function(){i(),cd(),n()})})}var NU={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=E_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?je:r;z.searchPseudoElements&&E_(i)}}},I_=!1,xU={mixout:function(){return{dom:{unwatch:function(){zI(),I_=!0}}}},hooks:function(){return{bootstrap:function(){y_(id("mutationObserverCallbacks",{}))},noAuto:function(){dU()},watch:function(n){var r=n.observeMutationsRoot;I_?cd():y_(id("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},T_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},OU={mixout:function(){return{parse:{transform:function(n){return T_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=T_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:$({},d.outer),children:[{tag:"g",attributes:$({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),d.path)}]}]}}}},Fh={x:0,y:0,width:"100%",height:"100%"};function C_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function PU(t){return t.tag==="g"?t.children:[t]}var DU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Qu(i.split(" ").map(function(o){return o.trim()})):xm();return s.prefix||(s.prefix=ri()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,d=OF({transform:l,containerWidth:h,iconWidth:c}),g={tag:"rect",attributes:$($({},Fh),{},{fill:"white"})},y=u.children?{children:u.children.map(C_)}:{},w={tag:"g",attributes:$({},d.inner),children:[C_($({tag:u.tag,attributes:$($({},u.attributes),d.path)},y))]},v={tag:"g",attributes:$({},d.outer),children:[w]},b="mask-".concat(a||Ta()),_="clip-".concat(a||Ta()),A={tag:"mask",attributes:$($({},Fh),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:PU(f)},A]};return r.push(U,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(b,")")},Fh)}),{children:r,attributes:i}}}},MU={provides:function(e){var n=!1;ni.matchMedia&&(n=ni.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},LU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},FU=[MF,EU,IU,TU,CU,NU,xU,OU,DU,MU,LU];QF(FU,{mixoutsTo:fn});fn.noAuto;var WI=fn.config,UU=fn.library;fn.dom;var Hc=fn.parse;fn.findIconDefinition;fn.toHtml;var VU=fn.icon;fn.layer;var $U=fn.text;fn.counter;function S_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function En(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?S_(Object(n),!0).forEach(function(r){Zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jc(t){return jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jc(t)}function Zt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function HU(t,e){if(t==null)return{};var n=BU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ud(t){return jU(t)||zU(t)||qU(t)||WU()}function jU(t){if(Array.isArray(t))return hd(t)}function zU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qU(t,e){if(t){if(typeof t=="string")return hd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hd(t,e)}}function hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function WU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var KU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},KI={exports:{}};(function(t){(function(e){var n=function(v,b,_){if(!c(b)||h(b)||f(b)||d(b)||l(b))return b;var A,U=0,Z=0;if(u(b))for(A=[],Z=b.length;U<Z;U++)A.push(n(v,b[U],_));else{A={};for(var F in b)Object.prototype.hasOwnProperty.call(b,F)&&(A[v(F,_)]=n(v,b[F],_))}return A},r=function(v,b){b=b||{};var _=b.separator||"_",A=b.split||/(?=[A-Z])/;return v.split(A).join(_)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,_){return _?_.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var b=i(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return r(v,b).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},d=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},y=function(v,b){var _=b&&"process"in b?b.process:b;return typeof _!="function"?v:function(A,U){return _(A,v,U)}},w={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,b){return n(y(i,b),v)},decamelizeKeys:function(v,b){return n(y(o,b),v,b)},pascalizeKeys:function(v,b){return n(y(s,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(KU)})(KI);var GU=KI.exports,YU=["class","style"];function QU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=GU.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function XU(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Mm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Mm(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=XU(u);break;case"style":l.style=QU(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=HU(n,YU);return ka(t.tag,En(En(En({},e),{},{class:i.class,style:En(En({},i.style),o)},i.attrs),a),r)}var GI=!1;try{GI=!0}catch{}function JU(){if(!GI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ko(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zt({},t,e):{}}function ZU(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Zt(e,"fa-".concat(t.size),t.size!==null),Zt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Zt(e,"fa-pull-".concat(t.pull),t.pull!==null),Zt(e,"fa-swap-opacity",t.swapOpacity),Zt(e,"fa-bounce",t.bounce),Zt(e,"fa-shake",t.shake),Zt(e,"fa-beat",t.beat),Zt(e,"fa-fade",t.fade),Zt(e,"fa-beat-fade",t.beatFade),Zt(e,"fa-flash",t.flash),Zt(e,"fa-spin-pulse",t.spinPulse),Zt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function k_(t){if(t&&jc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Hc.icon)return Hc.icon(t);if(t===null)return null;if(jc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var e8=sn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=W(function(){return k_(e.icon)}),s=W(function(){return Ko("classes",ZU(e))}),o=W(function(){return Ko("transform",typeof e.transform=="string"?Hc.transform(e.transform):e.transform)}),a=W(function(){return Ko("mask",k_(e.mask))}),l=W(function(){return VU(i.value,En(En(En(En({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Dt(l,function(u){if(!u)return JU("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=W(function(){return l.value?Mm(l.value.abstract[0],{},r):null});return function(){return c.value}}});sn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=WI.familyPrefix,s=W(function(){return["".concat(i,"-layers")].concat(ud(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return ka("div",{class:s.value},r.default?r.default():[])}}});sn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=WI.familyPrefix,s=W(function(){return Ko("classes",[].concat(ud(e.counter?["".concat(i,"-layers-counter")]:[]),ud(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=W(function(){return Ko("transform",typeof e.transform=="string"?Hc.transform(e.transform):e.transform)}),a=W(function(){var c=$U(e.value.toString(),En(En({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=W(function(){return Mm(a.value,{},r)});return function(){return l.value}}});var t8={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},n8={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]},r8={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},i8=r8,s8={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},o8={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},a8={prefix:"fas",iconName:"bullhorn",icon:[512,512,[128226,128363],"f0a1","M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"]},l8={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"]},c8={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},u8={prefix:"fas",iconName:"file-arrow-up",icon:[384,512,["file-upload"],"f574","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"]},h8={prefix:"fas",iconName:"cow",icon:[640,512,[128004],"f6c8","M96 224v32V416c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V327.8c9.9 6.6 20.6 12 32 16.1V368c0 8.8 7.2 16 16 16s16-7.2 16-16V351.1c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9V368c0 8.8 7.2 16 16 16s16-7.2 16-16V343.8c11.4-4 22.1-9.4 32-16.1V416c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256l32 32v49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v14.4l-52.9-74.1C496 86.5 452.4 64 405.9 64H272 256 192 144C77.7 64 24 117.7 24 184v54C9.4 249.8 0 267.8 0 288v17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4V256 224 184c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160v64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6H361.4c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z"]},f8={prefix:"fas",iconName:"file-contract",icon:[384,512,[],"f56c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z"]},d8={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},p8={prefix:"fas",iconName:"file-pdf",icon:[448,512,[],"f1c1","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H296 272 184 160c-35.3 0-64 28.7-64 64v80 48 16H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM160 352h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48h8zm88-80h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm24 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16h-8v96h8zm72-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H400v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"]},m8={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},g8={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},y8={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},v8={prefix:"fas",iconName:"angle-down",icon:[384,512,[8964],"f107","M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},_8={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},w8={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},b8={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},E8=b8,I8={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},T8={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},C8={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]},S8={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},k8={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},A8={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};UU.add(A8,S8,d8,s8,o8,l8,i8,k8,h8,T8,m8,_8,E8,w8,I8,y8,u8,n8,g8,a8,f8,c8,p8,v8,C8,t8);const uo=C0(L4);uo.use(qu);uo.use(Y3,{firebaseApp:Vb,modules:[G3()]});uo.component("GChart",mI);uo.component("EasyDataTable",vI);uo.component("font-awesome-icon",e8);uo.mount("#app");export{XO as $,S as A,s4 as B,Hr as C,D8 as D,Br as E,et as F,P8 as G,Un as H,Pd as I,mC as J,Dt as K,r4 as L,_t as M,kd as N,fs as O,Is as P,St as Q,ps as R,Z_ as S,F8 as T,$8 as U,L8 as V,Hy as W,Xp as X,f4 as Y,h4 as Z,Wu as _,K as a,rP as a0,vS as a1,z8 as a2,B8 as a3,H8 as a4,zT as a5,N8 as a6,j8 as a7,nP as a8,V8 as a9,Se as b,fe as c,x8 as d,Tr as e,Mn as f,Bt as g,rs as h,ks as i,vn as j,or as k,wg as l,O8 as m,Je as n,re as o,Ir as p,Yn as q,Hh as r,jA as s,an as t,M8 as u,yS as v,R8 as w,qu as x,Sa as y,W as z};
