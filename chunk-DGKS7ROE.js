import{$ as N,$a as v,$b as nl,A as co,Aa as pt,Ab as X,Ac as ft,B as dt,Ba as ln,Bb as ea,Bc as le,C as mo,Ca as it,Cb as dn,Cc as Qe,D as Wr,Da as ke,Db as mn,Dc as $t,E as Ps,Ea as q,Eb as pn,Ec as oa,F as Ut,Fa as Xr,Fb as ta,Fc as Ln,G as Yr,Ga as Rt,Gb as Te,Gc as $e,H as Zr,Ha as Bs,Hb as An,Hc as _o,I as Kr,Ia as js,Ib as Ws,Ic as zn,J as po,Ja as Qr,Jb as Dn,Jc as Bn,K as Fe,Ka as y,Kb as na,Kc as jn,L as we,La as K,Lb as ia,Lc as ml,M as oe,Ma as G,Mb as Ys,Mc as Un,N as Ue,Na as ut,Nb as Zs,Nc as yo,O as Pe,Oa as he,Ob as _e,Oc as qt,P as Rs,Pa as go,Pb as se,Pc as pl,Q as uo,Qa as Us,Qb as Ks,Qc as ul,R as w,Ra as cn,Rb as Xs,Rc as xo,S as Z,Sa as Vs,Sb as Qs,Sc as hl,T as Ts,Ta as Hs,Tb as me,Tc as Co,U as P,Ua as Tn,Ub as yi,Uc as fl,V as Se,Va as D,Vb as Js,W as d,Wa as k,Wb as el,X as As,Xa as M,Xb as Ee,Y as Ke,Ya as Ht,Yb as U,Z as mt,Za as re,Zb as xi,_ as F,_a as ae,_b as tl,a as b,aa as Re,ab as l,ac as il,b as te,ba as Ot,bb as c,bc as Fn,c as Oe,ca as pe,cb as S,d as Ms,da as ue,db as ve,dc as ol,e as tt,ea as Ct,eb as Me,ec as rl,f as R,fa as Ds,fb as ht,fc as Nn,g as We,ga as Q,gb as ie,gc as al,h as Ye,ha as H,hb as He,hc as sl,i as nt,ia as ho,ib as C,ic as ll,j as T,jb as Gs,jc as Gt,k as Es,ka as x,kb as g,kc as Le,l as ao,la as wt,lb as be,lc as cl,m as Is,ma as Ve,mb as V,n as Os,na as Pt,nb as ot,o as ne,oa as Fs,ob as Ge,oc as vo,p as so,pa as j,pb as L,q as It,qa as sn,qb as z,r as $r,ra as Ns,rb as $s,s as On,sa as Ne,sb as qs,t as Pn,ta as fo,tb as Jr,tc as dl,ua as Ls,ub as rt,v as Ze,vb as Tt,w as de,wa as Vt,wb as O,x as qr,xa as zs,xb as Xe,xc as Ie,y as Rn,yb as m,yc as ze,z as lo,za as p,zb as I,zc as bo}from"./chunk-V2E3ROMO.js";var B="primary",Ni=Symbol("RouteTitle"),ca=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function hn(i){return new ca(i)}function ra(i,n,e){for(let t=0;t<i.length;t++){let o=i[t],r=n[t];if(o[0]===":")e[o.substring(1)]=r;else if(o!==r.path)return!1}return!0}function Cl(i,n,e){let t=e.path.split("/"),o=t.indexOf("**");if(o===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let u={},h=i.slice(0,t.length);return ra(t,h,u)?{consumed:h,posParams:u}:null}if(o!==t.lastIndexOf("**"))return null;let r=t.slice(0,o),a=t.slice(o+1);if(r.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!ra(r,i.slice(0,r.length),s)||!ra(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function Io(i){return new Promise((n,e)=>{i.pipe(Ut()).subscribe({next:t=>n(t),error:t=>e(t)})})}function Xd(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!St(i[e],n[e]))return!1;return!0}function St(i,n){let e=i?da(i):void 0,t=n?da(n):void 0;if(!e||!t||e.length!=t.length)return!1;let o;for(let r=0;r<e.length;r++)if(o=e[r],!wl(i[o],n[o]))return!1;return!0}function da(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function wl(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((o,r)=>t[r]===o)}else return i===n}function Qd(i){return i.length>0?i[i.length-1]:null}function vn(i){return ao(i)?i:Vs(i)?nt(Promise.resolve(i)):T(i)}function Sl(i){return ao(i)?Io(i):Promise.resolve(i)}var Jd={exact:Ml,subset:El},kl={exact:em,subset:tm,ignored:()=>!0},Sa={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ei={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ka(i,n,e){let t=i instanceof qe?i:n.parseUrl(i);return se(()=>ma(n.lastSuccessfulNavigation()?.finalUrl??new qe,t,b(b({},Ei),e)))}function ma(i,n,e){return Jd[e.paths](i.root,n.root,e.matrixParams)&&kl[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function em(i,n){return St(i,n)}function Ml(i,n,e){if(!un(i.segments,n.segments)||!ko(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!Ml(i.children[t],n.children[t],e))return!1;return!0}function tm(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>wl(i[e],n[e]))}function El(i,n,e){return Il(i,n,n.segments,e)}function Il(i,n,e,t){if(i.segments.length>e.length){let o=i.segments.slice(0,e.length);return!(!un(o,e)||n.hasChildren()||!ko(o,e,t))}else if(i.segments.length===e.length){if(!un(i.segments,e)||!ko(i.segments,e,t))return!1;for(let o in n.children)if(!i.children[o]||!El(i.children[o],n.children[o],t))return!1;return!0}else{let o=e.slice(0,i.segments.length),r=e.slice(i.segments.length);return!un(i.segments,o)||!ko(i.segments,o,t)||!i.children[B]?!1:Il(i.children[B],n,r,t)}}function ko(i,n,e){return n.every((t,o)=>kl[e](i[o].parameters,t.parameters))}var qe=class{root;queryParams;fragment;_queryParamMap;constructor(n=new J([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=hn(this.queryParams),this._queryParamMap}toString(){return om.serialize(this)}},J=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Mo(this)}},Wt=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=hn(this.parameters),this._parameterMap}toString(){return Pl(this)}};function nm(i,n){return un(i,n)&&i.every((e,t)=>St(e.parameters,n[t].parameters))}function un(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function im(i,n){let e=[];return Object.entries(i.children).forEach(([t,o])=>{t===B&&(e=e.concat(n(o,t)))}),Object.entries(i.children).forEach(([t,o])=>{t!==B&&(e=e.concat(n(o,t)))}),e}var Kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>new Yt,providedIn:"root"})}return i})(),Yt=class{parse(n){let e=new ua(n);return new qe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ci(n.root,!0)}`,t=sm(n.queryParams),o=typeof n.fragment=="string"?`#${rm(n.fragment)}`:"";return`${e}${t}${o}`}},om=new Yt;function Mo(i){return i.segments.map(n=>Pl(n)).join("/")}function Ci(i,n){if(!i.hasChildren())return Mo(i);if(n){let e=i.children[B]?Ci(i.children[B],!1):"",t=[];return Object.entries(i.children).forEach(([o,r])=>{o!==B&&t.push(`${o}:${Ci(r,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=im(i,(t,o)=>o===B?[Ci(i.children[B],!1)]:[`${o}:${Ci(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[B]!=null?`${Mo(i)}/${e[0]}`:`${Mo(i)}/(${e.join("//")})`}}function Ol(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wo(i){return Ol(i).replace(/%3B/gi,";")}function rm(i){return encodeURI(i)}function pa(i){return Ol(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Eo(i){return decodeURIComponent(i)}function gl(i){return Eo(i.replace(/\+/g,"%20"))}function Pl(i){return`${pa(i.path)}${am(i.parameters)}`}function am(i){return Object.entries(i).map(([n,e])=>`;${pa(n)}=${pa(e)}`).join("")}function sm(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(o=>`${wo(e)}=${wo(o)}`).join("&"):`${wo(e)}=${wo(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var lm=/^[^\/()?;#]+/;function aa(i){let n=i.match(lm);return n?n[0]:""}var cm=/^[^\/()?;=#]+/;function dm(i){let n=i.match(cm);return n?n[0]:""}var mm=/^[^=?&#]+/;function pm(i){let n=i.match(mm);return n?n[0]:""}var um=/^[^&#]+/;function hm(i){let n=i.match(um);return n?n[0]:""}var ua=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new J([],{}):new J([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new Pe(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(o[B]=new J(e,t)),o}parseSegment(){let n=aa(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new Pe(4009,!1);return this.capture(n),new Wt(Eo(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=dm(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=aa(this.remaining);o&&(t=o,this.capture(t))}n[Eo(e)]=Eo(t)}parseQueryParam(n){let e=pm(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=hm(this.remaining);a&&(t=a,this.capture(t))}let o=gl(e),r=gl(t);if(n.hasOwnProperty(o)){let a=n[o];Array.isArray(a)||(a=[a],n[o]=a),a.push(r)}else n[o]=r}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=aa(this.remaining),r=this.remaining[o.length];if(r!=="/"&&r!==")"&&r!==";")throw new Pe(4010,!1);let a;o.indexOf(":")>-1?(a=o.slice(0,o.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=B);let s=this.parseChildren(e+1);t[a??B]=Object.keys(s).length===1&&s[B]?s[B]:new J([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new Pe(4011,!1)}};function Rl(i){return i.segments.length>0?new J([],{[B]:i}):i}function Tl(i){let n={};for(let[t,o]of Object.entries(i.children)){let r=Tl(o);if(t===B&&r.segments.length===0&&r.hasChildren())for(let[a,s]of Object.entries(r.children))n[a]=s;else(r.segments.length>0||r.hasChildren())&&(n[t]=r)}let e=new J(i.segments,n);return fm(e)}function fm(i){if(i.numberOfChildren===1&&i.children[B]){let n=i.children[B];return new J(i.segments.concat(n.segments),n.children)}return i}function Zt(i){return i instanceof qe}function Al(i,n,e=null,t=null,o=new Yt){let r=Dl(i);return Fl(r,n,e,t,o)}function Dl(i){let n;function e(r){let a={};for(let u of r.children){let h=e(u);a[u.outlet]=h}let s=new J(r.url,a);return r===i&&(n=s),s}let t=e(i.root),o=Rl(t);return n??o}function Fl(i,n,e,t,o){let r=i;for(;r.parent;)r=r.parent;if(n.length===0)return sa(r,r,r,e,t,o);let a=gm(n);if(a.toRoot())return sa(r,r,new J([],{}),e,t,o);let s=vm(a,r,i),u=s.processChildren?Si(s.segmentGroup,s.index,a.commands):Ll(s.segmentGroup,s.index,a.commands);return sa(r,s.segmentGroup,u,e,t,o)}function Oo(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ii(i){return typeof i=="object"&&i!=null&&i.outlets}function vl(i,n,e){i||="\u0275";let t=new qe;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function sa(i,n,e,t,o,r){let a={};for(let[h,f]of Object.entries(t??{}))a[h]=Array.isArray(f)?f.map(_=>vl(h,_,r)):vl(h,f,r);let s;i===n?s=e:s=Nl(i,n,e);let u=Rl(Tl(s));return new qe(u,a,o)}function Nl(i,n,e){let t={};return Object.entries(i.children).forEach(([o,r])=>{r===n?t[o]=e:t[o]=Nl(r,n,e)}),new J(i.segments,t)}var Po=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Oo(t[0]))throw new Pe(4003,!1);let o=t.find(Ii);if(o&&o!==Qd(t))throw new Pe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function gm(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Po(!0,0,i);let n=0,e=!1,t=i.reduce((o,r,a)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let s={};return Object.entries(r.outlets).forEach(([u,h])=>{s[u]=typeof h=="string"?h.split("/"):h}),[...o,{outlets:s}]}if(r.segmentPath)return[...o,r.segmentPath]}return typeof r!="string"?[...o,r]:a===0?(r.split("/").forEach((s,u)=>{u==0&&s==="."||(u==0&&s===""?e=!0:s===".."?n++:s!=""&&o.push(s))}),o):[...o,r]},[]);return new Po(e,n,t)}var Hn=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function vm(i,n,e){if(i.isAbsolute)return new Hn(n,!0,0);if(!e)return new Hn(n,!1,NaN);if(e.parent===null)return new Hn(e,!0,0);let t=Oo(i.commands[0])?0:1,o=e.segments.length-1+t;return bm(e,o,i.numberOfDoubleDots)}function bm(i,n,e){let t=i,o=n,r=e;for(;r>o;){if(r-=o,t=t.parent,!t)throw new Pe(4005,!1);o=t.segments.length}return new Hn(t,!1,o-r)}function _m(i){return Ii(i[0])?i[0].outlets:{[B]:i}}function Ll(i,n,e){if(i??=new J([],{}),i.segments.length===0&&i.hasChildren())return Si(i,n,e);let t=ym(i,n,e),o=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let r=new J(i.segments.slice(0,t.pathIndex),{});return r.children[B]=new J(i.segments.slice(t.pathIndex),i.children),Si(r,0,o)}else return t.match&&o.length===0?new J(i.segments,{}):t.match&&!i.hasChildren()?ha(i,n,e):t.match?Si(i,0,o):ha(i,n,e)}function Si(i,n,e){if(e.length===0)return new J(i.segments,{});{let t=_m(e),o={};if(Object.keys(t).some(r=>r!==B)&&i.children[B]&&i.numberOfChildren===1&&i.children[B].segments.length===0){let r=Si(i.children[B],n,e);return new J(i.segments,r.children)}return Object.entries(t).forEach(([r,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(o[r]=Ll(i.children[r],n,a))}),Object.entries(i.children).forEach(([r,a])=>{t[r]===void 0&&(o[r]=a)}),new J(i.segments,o)}}function ym(i,n,e){let t=0,o=n,r={match:!1,pathIndex:0,commandIndex:0};for(;o<i.segments.length;){if(t>=e.length)return r;let a=i.segments[o],s=e[t];if(Ii(s))break;let u=`${s}`,h=t<e.length-1?e[t+1]:null;if(o>0&&u===void 0)break;if(u&&h&&typeof h=="object"&&h.outlets===void 0){if(!_l(u,h,a))return r;t+=2}else{if(!_l(u,{},a))return r;t++}o++}return{match:!0,pathIndex:o,commandIndex:t}}function ha(i,n,e){let t=i.segments.slice(0,n),o=0;for(;o<e.length;){let r=e[o];if(Ii(r)){let u=xm(r.outlets);return new J(t,u)}if(o===0&&Oo(e[0])){let u=i.segments[n];t.push(new Wt(u.path,bl(e[0]))),o++;continue}let a=Ii(r)?r.outlets[B]:`${r}`,s=o<e.length-1?e[o+1]:null;a&&s&&Oo(s)?(t.push(new Wt(a,bl(s))),o+=2):(t.push(new Wt(a,{})),o++)}return new J(t,{})}function xm(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=ha(new J([],{}),0,t))}),n}function bl(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function _l(i,n,e){return i==e.path&&St(n,e.parameters)}var ki="imperative",Ae=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Ae||{}),st=class{id;url;constructor(n,e){this.id=n,this.url=e}},fn=class extends st{type=Ae.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",o=null){super(n,e),this.navigationTrigger=t,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},lt=class extends st{urlAfterRedirects;type=Ae.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Be=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Be||{}),Oi=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Oi||{}),gt=class extends st{reason;code;type=Ae.NavigationCancel;constructor(n,e,t,o){super(n,e),this.reason=t,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zl(i){return i instanceof gt&&(i.code===Be.Redirect||i.code===Be.SupersededByNewNavigation)}var Dt=class extends st{reason;code;type=Ae.NavigationSkipped;constructor(n,e,t,o){super(n,e),this.reason=t,this.code=o}},gn=class extends st{error;target;type=Ae.NavigationError;constructor(n,e,t,o){super(n,e),this.error=t,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Pi=class extends st{urlAfterRedirects;state;type=Ae.RoutesRecognized;constructor(n,e,t,o){super(n,e),this.urlAfterRedirects=t,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ro=class extends st{urlAfterRedirects;state;type=Ae.GuardsCheckStart;constructor(n,e,t,o){super(n,e),this.urlAfterRedirects=t,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},To=class extends st{urlAfterRedirects;state;shouldActivate;type=Ae.GuardsCheckEnd;constructor(n,e,t,o,r){super(n,e),this.urlAfterRedirects=t,this.state=o,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ao=class extends st{urlAfterRedirects;state;type=Ae.ResolveStart;constructor(n,e,t,o){super(n,e),this.urlAfterRedirects=t,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Do=class extends st{urlAfterRedirects;state;type=Ae.ResolveEnd;constructor(n,e,t,o){super(n,e),this.urlAfterRedirects=t,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fo=class{route;type=Ae.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},No=class{route;type=Ae.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Lo=class{snapshot;type=Ae.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zo=class{snapshot;type=Ae.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bo=class{snapshot;type=Ae.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jo=class{snapshot;type=Ae.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var $n=class{},Ri=class{},qn=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Cm(i){return!(i instanceof $n)&&!(i instanceof qn)&&!(i instanceof Ri)}var Uo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Xn(this.rootInjector)}},Xn=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let o=this.getOrCreateContext(e);o.outlet=t,this.contexts.set(e,o)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Uo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(Se(Ke))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vo=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=fa(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=fa(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=ga(n,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==n)}pathFromRoot(n){return ga(n,this._root).map(e=>e.value)}};function fa(i,n){if(i===n.value)return n;for(let e of n.children){let t=fa(i,e);if(t)return t}return null}function ga(i,n){if(i===n.value)return[n];for(let e of n.children){let t=ga(i,e);if(t.length)return t.unshift(n),t}return[]}var at=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vn(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var Ti=class extends Vo{snapshot;constructor(n,e){super(n),this.snapshot=e,Ea(this,n)}toString(){return this.snapshot.toString()}};function Bl(i,n){let e=wm(i,n),t=new We([new Wt("",{})]),o=new We({}),r=new We({}),a=new We({}),s=new We(""),u=new _t(t,o,a,s,r,B,i,e.root);return u.snapshot=e.root,new Ti(new at(u,[]),e)}function wm(i,n){let e={},t={},o={},a=new Wn([],e,o,"",t,B,i,null,{},n);return new Ai("",new at(a,[]))}var _t=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,o,r,a,s,u){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=o,this.dataSubject=r,this.outlet=a,this.component=s,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(ne(h=>h[Ni]))??T(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=o,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ne(n=>hn(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ne(n=>hn(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ma(i,n,e="emptyOnly"){let t,{routeConfig:o}=i;return n!==null&&(e==="always"||o?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:b(b({},n.params),i.params),data:b(b({},n.data),i.data),resolve:b(b(b(b({},i.data),n.data),o?.data),i._resolvedData)}:t={params:b({},i.params),data:b({},i.data),resolve:b(b({},i.data),i._resolvedData??{})},o&&Ul(o)&&(t.resolve[Ni]=o.title),t}var Wn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ni]}constructor(n,e,t,o,r,a,s,u,h,f){this.url=n,this.params=e,this.queryParams=t,this.fragment=o,this.data=r,this.outlet=a,this.component=s,this.routeConfig=u,this._resolve=h,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=hn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=hn(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ai=class extends Vo{url;constructor(n,e){super(e),this.url=n,Ea(this,e)}toString(){return jl(this._root)}};function Ea(i,n){n.value._routerState=i,n.children.forEach(e=>Ea(i,e))}function jl(i){let n=i.children.length>0?` { ${i.children.map(jl).join(", ")} } `:"";return`${i.value}${n}`}function la(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,St(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),St(n.params,e.params)||i.paramsSubject.next(e.params),Xd(n.url,e.url)||i.urlSubject.next(e.url),St(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function va(i,n){let e=St(i.params,n.params)&&nm(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||va(i.parent,n.parent))}function Ul(i){return typeof i.title=="string"||i.title===null}var Vl=new P(""),bn=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=B;activateEvents=new Q;deactivateEvents=new Q;attachEvents=new Q;detachEvents=new Q;routerOutletData=me();parentContexts=d(Xn);location=d(Rt);changeDetector=d(Ee);inputBinder=d(qo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:o}=e.name;if(t)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Pe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Pe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Pe(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Pe(4013,!1);this._activatedRoute=e;let o=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,u=new ba(e,s,o.injector,this.routerOutletData);this.activated=o.createComponent(a,{index:o.length,injector:u,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ve]})}return i})(),ba=class{route;childContexts;parent;outletData;constructor(n,e,t,o){this.route=n,this.childContexts=e,this.parent=t,this.outletData=o}get(n,e){return n===_t?this.route:n===Xn?this.childContexts:n===Vl?this.outletData:this.parent.get(n,e)}},qo=new P("");var Ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,o){t&1&&S(0,"router-outlet")},dependencies:[bn],encapsulation:2})}return i})();function Oa(i){let n=i.children&&i.children.map(Oa),e=n?te(b({},i),{children:n}):b({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==B&&(e.component=Ia),e}function Sm(i,n,e){let t=Di(i,n._root,e?e._root:void 0);return new Ti(t,n)}function Di(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let o=km(i,n,e);return new at(t,o)}else{if(i.shouldAttach(n.value)){let r=i.retrieve(n.value);if(r!==null){let a=r.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Di(i,s)),a}}let t=Mm(n.value),o=n.children.map(r=>Di(i,r));return new at(t,o)}}function km(i,n,e){return n.children.map(t=>{for(let o of e.children)if(i.shouldReuseRoute(t.value,o.value.snapshot))return Di(i,t,o);return Di(i,t)})}function Mm(i){return new _t(new We(i.url),new We(i.params),new We(i.queryParams),new We(i.fragment),new We(i.data),i.outlet,i.component,i)}var Yn=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Hl="ngNavigationCancelingError";function Ho(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=Zt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,o=Gl(!1,Be.Redirect);return o.url=e,o.navigationBehaviorOptions=t,o}function Gl(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Hl]=!0,e.cancellationCode=n,e}function Em(i){return $l(i)&&Zt(i.url)}function $l(i){return!!i&&i[Hl]}var _a=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,o,r){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=o,this.inputBindingEnabled=r}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),la(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let o=Vn(e);n.children.forEach(r=>{let a=r.value.outlet;this.deactivateRoutes(r,o[a],t),delete o[a]}),Object.values(o).forEach(r=>{this.deactivateRouteAndItsChildren(r,t)})}deactivateRoutes(n,e,t){let o=n.value,r=e?e.value:null;if(o===r)if(o.component){let a=t.getContext(o.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else r&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),o=t&&n.value.component?t.children:e,r=Vn(n);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),o=t&&n.value.component?t.children:e,r=Vn(n);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let o=Vn(e);n.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],t),this.forwardEvent(new jo(r.value.snapshot))}),n.children.length&&this.forwardEvent(new zo(n.value.snapshot))}activateRoutes(n,e,t){let o=n.value,r=e?e.value:null;if(la(o),o===r)if(o.component){let a=t.getOrCreateContext(o.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(o.component){let a=t.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let s=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),la(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=o,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},Go=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Gn=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Im(i,n,e){let t=i._root,o=n?n._root:null;return wi(t,o,e,[t.value])}function Om(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Qn(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!Ts(i)?i:n.get(i):t}function wi(i,n,e,t,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=Vn(n);return i.children.forEach(a=>{Pm(a,r[a.value.outlet],e,t.concat([a.value]),o),delete r[a.value.outlet]}),Object.entries(r).forEach(([a,s])=>Mi(s,e.getContext(a),o)),o}function Pm(i,n,e,t,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&r.routeConfig===a.routeConfig){let u=Rm(a,r,r.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new Go(t)):(r.data=a.data,r._resolvedData=a._resolvedData),r.component?wi(i,n,s?s.children:null,t,o):wi(i,n,e,t,o),u&&s&&s.outlet&&s.outlet.isActivated&&o.canDeactivateChecks.push(new Gn(s.outlet.component,a))}else a&&Mi(n,s,o),o.canActivateChecks.push(new Go(t)),r.component?wi(i,null,s?s.children:null,t,o):wi(i,null,e,t,o);return o}function Rm(i,n,e){if(typeof e=="function")return mt(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!un(i.url,n.url);case"pathParamsOrQueryParamsChange":return!un(i.url,n.url)||!St(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!va(i,n)||!St(i.queryParams,n.queryParams);default:return!va(i,n)}}function Mi(i,n,e){let t=Vn(i),o=i.value;Object.entries(t).forEach(([r,a])=>{o.component?n?Mi(a,n.children.getContext(r),e):Mi(a,null,e):Mi(a,n,e)}),o.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Gn(n.outlet.component,o)):e.canDeactivateChecks.push(new Gn(null,o)):e.canDeactivateChecks.push(new Gn(null,o))}function Li(i){return typeof i=="function"}function Tm(i){return typeof i=="boolean"}function Am(i){return i&&Li(i.canLoad)}function Dm(i){return i&&Li(i.canActivate)}function Fm(i){return i&&Li(i.canActivateChild)}function Nm(i){return i&&Li(i.canDeactivate)}function Lm(i){return i&&Li(i.canMatch)}function ql(i){return i instanceof Is||i?.name==="EmptyError"}var So=Symbol("INITIAL_VALUE");function Zn(){return we(i=>so(i.map(n=>n.pipe(dt(1),Fe(So)))).pipe(ne(n=>{for(let e of n)if(e!==!0){if(e===So)return So;if(e===!1||zm(e))return e}return!0}),de(n=>n!==So),dt(1)))}function zm(i){return Zt(i)||i instanceof Yn}function Wl(i){return i.aborted?T(void 0).pipe(dt(1)):new tt(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Yl(i){return oe(Wl(i))}function Bm(i){return It(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:o,canDeactivateChecks:r}}=n;return r.length===0&&o.length===0?T(te(b({},n),{guardsResult:!0})):jm(r,e,t).pipe(It(a=>a&&Tm(a)?Um(e,o,i):T(a)),ne(a=>te(b({},n),{guardsResult:a})))})}function jm(i,n,e){return nt(i).pipe(It(t=>qm(t.component,t.route,e,n)),Ut(t=>t!==!0,!0))}function Um(i,n,e){return nt(n).pipe(lo(t=>On(Hm(t.route.parent,e),Vm(t.route,e),$m(i,t.path),Gm(i,t.route))),Ut(t=>t!==!0,!0))}function Vm(i,n){return i!==null&&n&&n(new Bo(i)),T(!0)}function Hm(i,n){return i!==null&&n&&n(new Lo(i)),T(!0)}function Gm(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return T(!0);let t=e.map(o=>Pn(()=>{let r=n._environmentInjector,a=Qn(o,r),s=Dm(a)?a.canActivate(n,i):mt(r,()=>a(n,i));return vn(s).pipe(Ut())}));return T(t).pipe(Zn())}function $m(i,n){let e=n[n.length-1],o=n.slice(0,n.length-1).reverse().map(r=>Om(r)).filter(r=>r!==null).map(r=>Pn(()=>{let a=r.guards.map(s=>{let u=r.node._environmentInjector,h=Qn(s,u),f=Fm(h)?h.canActivateChild(e,i):mt(u,()=>h(e,i));return vn(f).pipe(Ut())});return T(a).pipe(Zn())}));return T(o).pipe(Zn())}function qm(i,n,e,t){let o=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!o||o.length===0)return T(!0);let r=o.map(a=>{let s=n._environmentInjector,u=Qn(a,s),h=Nm(u)?u.canDeactivate(i,n,e,t):mt(s,()=>u(i,n,e,t));return vn(h).pipe(Ut())});return T(r).pipe(Zn())}function Wm(i,n,e,t,o){let r=n.canLoad;if(r===void 0||r.length===0)return T(!0);let a=r.map(s=>{let u=Qn(s,i),h=Am(u)?u.canLoad(n,e):mt(i,()=>u(n,e)),f=vn(h);return o?f.pipe(Yl(o)):f});return T(a).pipe(Zn(),Zl(t))}function Zl(i){return Ms(Ue(n=>{if(typeof n!="boolean")throw Ho(i,n)}),ne(n=>n===!0))}function Ym(i,n,e,t,o,r){let a=n.canMatch;if(!a||a.length===0)return T(!0);let s=a.map(u=>{let h=Qn(u,i),f=Lm(h)?h.canMatch(n,e,o):mt(i,()=>h(n,e,o));return vn(f).pipe(Yl(r))});return T(s).pipe(Zn(),Zl(t))}var At=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},Fi=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function Zm(i){throw new Pe(4e3,!1)}function Km(i){throw Gl(!1,Be.GuardRejected)}var ya=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let t=[],o=e.root;for(;;){if(t=t.concat(o.segments),o.numberOfChildren===0)return t;if(o.numberOfChildren>1||!o.children[B])throw Zm(`${n.redirectTo}`);o=o.children[B]}}async applyRedirectCommands(n,e,t,o,r){let a=await Xm(e,o,r);if(a instanceof qe)throw new Fi(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new Fi(s);return s}applyRedirectCreateUrlTree(n,e,t,o){let r=this.createSegmentGroup(n,e.root,t,o);return new qe(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([o,r])=>{if(typeof r=="string"&&r[0]===":"){let s=r.substring(1);t[o]=e[s]}else t[o]=r}),t}createSegmentGroup(n,e,t,o){let r=this.createSegments(n,e.segments,t,o),a={};return Object.entries(e.children).forEach(([s,u])=>{a[s]=this.createSegmentGroup(n,u,t,o)}),new J(r,a)}createSegments(n,e,t,o){return e.map(r=>r.path[0]===":"?this.findPosParam(n,r,o):this.findOrReturn(r,t))}findPosParam(n,e,t){let o=t[e.path.substring(1)];if(!o)throw new Pe(4001,!1);return o}findOrReturn(n,e){let t=0;for(let o of e){if(o.path===n.path)return e.splice(t),o;t++}return n}};function Xm(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Io(vn(mt(e,()=>t(n))))}function Qm(i,n){return i.providers&&!i._injector&&(i._injector=Qr(i.providers,n,`Route: ${i.path}`)),i._injector??n}function bt(i){return i.outlet||B}function Jm(i,n){let e=i.filter(t=>bt(t)===n);return e.push(...i.filter(t=>bt(t)!==n)),e}var xa={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Kl(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function ep(i,n,e,t,o,r,a){let s=Xl(i,n,e);if(!s.matched)return T(s);let u=Kl(r(s));return t=Qm(n,t),Ym(t,n,e,o,u,a).pipe(ne(h=>h===!0?s:b({},xa)))}function Xl(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?b({},xa):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(n.matcher||Cl)(e,i,n);if(!o)return b({},xa);let r={};Object.entries(o.posParams??{}).forEach(([s,u])=>{r[s]=u.path});let a=o.consumed.length>0?b(b({},r),o.consumed[o.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:a,positionalParamSegments:o.posParams??{}}}function yl(i,n,e,t,o){return e.length>0&&ip(i,e,t,o)?{segmentGroup:new J(n,np(t,new J(e,i.children))),slicedSegments:[]}:e.length===0&&op(i,e,t)?{segmentGroup:new J(i.segments,tp(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new J(i.segments,i.children),slicedSegments:e}}function tp(i,n,e,t){let o={};for(let r of e)if(Wo(i,n,r)&&!t[bt(r)]){let a=new J([],{});o[bt(r)]=a}return b(b({},t),o)}function np(i,n){let e={};e[B]=n;for(let t of i)if(t.path===""&&bt(t)!==B){let o=new J([],{});e[bt(t)]=o}return e}function ip(i,n,e,t){return e.some(o=>!Wo(i,n,o)||!(bt(o)!==B)?!1:!(t!==void 0&&bt(o)===t))}function op(i,n,e){return e.some(t=>Wo(i,n,t))}function Wo(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function rp(i,n,e){return n.length===0&&!i.children[e]}var Ca=class{};async function ap(i,n,e,t,o,r,a="emptyOnly",s){return new wa(i,n,e,t,o,a,r,s).recognize()}var sp=31,wa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,o,r,a,s,u){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=o,this.urlTree=r,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=u,this.applyRedirects=new ya(this.urlSerializer,this.urlTree)}noMatchError(n){return new Pe(4002,`'${n.segmentGroup}'`)}async recognize(){let n=yl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(n),o=new at(t,e),r=new Ai("",o),a=Al(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(a),{state:r,tree:a}}async match(n){let e=new Wn([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),B,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,B,e),rootSnapshot:e}}catch(t){if(t instanceof Fi)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof At?this.noMatchError(t):t}}async processSegmentGroup(n,e,t,o,r){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,r);let a=await this.processSegment(n,e,t,t.segments,o,!0,r);return a instanceof at?[a]:[]}async processChildren(n,e,t,o){let r=[];for(let u of Object.keys(t.children))u==="primary"?r.unshift(u):r.push(u);let a=[];for(let u of r){let h=t.children[u],f=Jm(e,u),_=await this.processSegmentGroup(n,f,h,u,o);a.push(..._)}let s=Ql(a);return lp(s),s}async processSegment(n,e,t,o,r,a,s){for(let u of e)try{return await this.processSegmentAgainstRoute(u._injector??n,e,u,t,o,r,a,s)}catch(h){if(h instanceof At||ql(h))continue;throw h}if(rp(t,o,r))return new Ca;throw new At(t)}async processSegmentAgainstRoute(n,e,t,o,r,a,s,u){if(bt(t)!==a&&(a===B||!Wo(o,r,t)))throw new At(o);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,o,t,r,a,u);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,o,e,t,r,a,u);throw new At(o)}async expandSegmentAgainstRouteUsingRedirect(n,e,t,o,r,a,s){let{matched:u,parameters:h,consumedSegments:f,positionalParamSegments:_,remainingSegments:A}=Xl(e,o,r);if(!u)throw new At(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sp&&(this.allowRedirects=!1));let $=this.createSnapshot(n,o,r,h,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(f,o.redirectTo,_,Kl($),n),Y=await this.applyRedirects.lineralizeSegments(o,W);return this.processSegment(n,t,e,Y.concat(A),a,!1,s)}createSnapshot(n,e,t,o,r){let a=new Wn(t,o,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,dp(e),bt(e),e.component??e._loadedComponent??null,e,mp(e),n),s=Ma(a,r,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,t,o,r,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=an=>this.createSnapshot(n,t,an.consumedSegments,an.parameters,a),u=await Io(ep(e,t,o,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!u?.matched)throw new At(e);n=t._injector??n;let{routes:h}=await this.getChildConfig(n,t,o),f=t._loadedInjector??n,{parameters:_,consumedSegments:A,remainingSegments:$}=u,W=this.createSnapshot(n,t,A,_,a),{segmentGroup:Y,slicedSegments:Ce}=yl(e,A,$,h,r);if(Ce.length===0&&Y.hasChildren()){let an=await this.processChildren(f,h,Y,W);return new at(W,an)}if(h.length===0&&Ce.length===0)return new at(W,[]);let jt=bt(t)===r,Et=await this.processSegment(f,h,Y,Ce,jt?B:r,!0,W);return new at(W,Et instanceof at?[Et]:[])}async getChildConfig(n,e,t){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let r=e._loadedNgModuleFactory;return r&&!e._loadedInjector&&(e._loadedInjector=r.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Io(Wm(n,e,t,this.urlSerializer,this.abortSignal))){let r=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,r}throw Km(e)}return{routes:[],injector:n}}};function lp(i){i.sort((n,e)=>n.value.outlet===B?-1:e.value.outlet===B?1:n.value.outlet.localeCompare(e.value.outlet))}function cp(i){let n=i.value.routeConfig;return n&&n.path===""}function Ql(i){let n=[],e=new Set;for(let t of i){if(!cp(t)){n.push(t);continue}let o=n.find(r=>t.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...t.children),e.add(o)):n.push(t)}for(let t of e){let o=Ql(t.children);n.push(new at(t.value,o))}return n.filter(t=>!e.has(t))}function dp(i){return i.data||{}}function mp(i){return i.resolve||{}}function pp(i,n,e,t,o,r,a){return It(async s=>{let{state:u,tree:h}=await ap(i,n,e,t,s.extractedUrl,o,r,a);return te(b({},s),{targetSnapshot:u,urlAfterRedirects:h})})}function up(i){return It(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return T(n);let o=new Set(t.map(s=>s.route)),r=new Set;for(let s of o)if(!r.has(s))for(let u of Jl(s))r.add(u);let a=0;return nt(r).pipe(lo(s=>o.has(s)?hp(s,e,i):(s.data=Ma(s,s.parent,i).resolve,T(void 0))),Ue(()=>a++),Yr(1),It(s=>a===r.size?T(n):Ye))})}function Jl(i){let n=i.children.map(e=>Jl(e)).flat();return[i,...n]}function hp(i,n,e){let t=i.routeConfig,o=i._resolve;return t?.title!==void 0&&!Ul(t)&&(o[Ni]=t.title),Pn(()=>(i.data=Ma(i,i.parent,e).resolve,fp(o,i,n).pipe(ne(r=>(i._resolvedData=r,i.data=b(b({},i.data),r),null)))))}function fp(i,n,e){let t=da(i);if(t.length===0)return T({});let o={};return nt(t).pipe(It(r=>gp(i[r],n,e).pipe(Ut(),Ue(a=>{if(a instanceof Yn)throw Ho(new Yt,a);o[r]=a}))),Yr(1),ne(()=>o),Rn(r=>ql(r)?Ye:Es(r)))}function gp(i,n,e){let t=n._environmentInjector,o=Qn(i,t),r=o.resolve?o.resolve(n,e):mt(t,()=>o(n,e));return vn(r)}function xl(i){return we(n=>{let e=i(n);return e?nt(e).pipe(ne(()=>n)):T(n)})}var Pa=(()=>{class i{buildTitle(e){let t,o=e.root;for(;o!==void 0;)t=this.getResolvedTitleForRoute(o)??t,o=o.children.find(r=>r.outlet===B);return t}getResolvedTitleForRoute(e){return e.data[Ni]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>d(ec),providedIn:"root"})}return i})(),ec=(()=>{class i extends Pa{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(Se(dl))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Jn=new P("",{factory:()=>({})}),zi=new P(""),tc=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Zs);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let o=(async()=>{try{let r=await Sl(mt(e,()=>t.loadComponent())),a=await oc(ic(r));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,o),o}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let o=(async()=>{try{let r=await nc(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=r.routes,t._loadedInjector=r.injector,t._loadedNgModuleFactory=r.factory,r}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function nc(i,n,e,t){let o=await Sl(mt(e,()=>i.loadChildren())),r=await oc(ic(o)),a;r instanceof js||Array.isArray(r)?a=r:a=await n.compileModuleAsync(r),t&&t(i);let s,u,h=!1,f;return Array.isArray(a)?(u=a,h=!0):(s=a.create(e).injector,f=a,u=s.get(zi,[],{optional:!0,self:!0}).flat()),{routes:u.map(Oa),injector:s,factory:f}}function vp(i){return i&&typeof i=="object"&&"default"in i}function ic(i){return vp(i)?i.default:i}async function oc(i){return i}var Yo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>d(bp),providedIn:"root"})}return i})(),bp=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rc=new P("");var _p=()=>{},ac=new P(""),sc=(()=>{class i{currentNavigation=x(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=x(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=d(tc);environmentInjector=d(Ke);destroyRef=d(Ct);urlSerializer=d(Kn);rootContexts=d(Xn);location=d(Fn);inputBindingEnabled=d(qo,{optional:!0})!==null;titleStrategy=d(Pa);options=d(Jn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Yo);createViewTransition=d(rc,{optional:!0});navigationErrorHandler=d(ac,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>T(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new Fo(o)),t=o=>this.events.next(new No(o));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;_e(()=>{this.transitions?.next(te(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new We(null),this.transitions.pipe(de(t=>t!==null),we(t=>{let o=!1,r=new AbortController,a=()=>!o&&this.currentTransition?.id===t.id;return T(t).pipe(we(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Be.SupersededByNewNavigation),Ye;this.currentTransition=t;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?te(b({},u),{previousNavigation:null}):null,abort:()=>r.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&f!=="reload")return this.events.next(new Dt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Oi.IgnoredSameUrlNavigation)),s.resolve(!1),Ye;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return T(s).pipe(we(_=>(this.events.next(new fn(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?Ye:Promise.resolve(_))),pp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,r.signal),Ue(_=>{t.targetSnapshot=_.targetSnapshot,t.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(A=>(A.finalUrl=_.urlAfterRedirects,A)),this.events.next(new Ri)}),we(_=>nt(t.routesRecognizeHandler.deferredHandle??T(void 0)).pipe(ne(()=>_))),Ue(()=>{let _=new Pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:A,source:$,restoredState:W,extras:Y}=s,Ce=new fn(_,this.urlSerializer.serialize(A),$,W);this.events.next(Ce);let jt=Bl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=te(b({},s),{targetSnapshot:jt,urlAfterRedirects:A,extras:te(b({},Y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Et=>(Et.finalUrl=A,Et)),T(t)}else return this.events.next(new Dt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Oi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ye}),ne(s=>{let u=new Ro(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=t=te(b({},s),{guards:Im(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Bm(s=>this.events.next(s)),we(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ho(this.urlSerializer,s.guardsResult);let u=new To(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!a())return Ye;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Be.GuardRejected),Ye;if(s.guards.canActivateChecks.length===0)return T(s);let h=new Ao(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!a())return Ye;let f=!1;return T(s).pipe(up(this.paramsInheritanceStrategy),Ue({next:()=>{f=!0;let _=new Do(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{f||this.cancelNavigationTransition(s,"",Be.NoDataFromResolver)}}))}),xl(s=>{let u=f=>{let _=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let A=f._environmentInjector;_.push(this.configLoader.loadComponent(A,f.routeConfig).then($=>{f.component=$}))}for(let A of f.children)_.push(...u(A));return _},h=u(s.targetSnapshot.root);return h.length===0?T(s):nt(Promise.all(h).then(()=>s))}),xl(()=>this.afterPreactivation()),we(()=>{let{currentSnapshot:s,targetSnapshot:u}=t,h=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return h?nt(h).pipe(ne(()=>t)):T(t)}),dt(1),we(s=>{let u=Sm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=te(b({},s),{targetRouterState:u}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),this.events.next(new $n);let h=t.beforeActivateHandler.deferredHandle;return h?nt(h.then(()=>s)):T(s)}),Ue(s=>{new _a(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a()&&(o=!0,this.currentNavigation.update(u=>(u.abort=_p,u)),this.lastSuccessfulNavigation.set(_e(this.currentNavigation)),this.events.next(new lt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),oe(Wl(r.signal).pipe(de(()=>!o&&!t.targetRouterState),Ue(()=>{this.cancelNavigationTransition(t,r.signal.reason+"",Be.Aborted)}))),Ue({complete:()=>{o=!0}}),oe(this.transitionAbortWithErrorSubject.pipe(Ue(s=>{throw s}))),Ps(()=>{r.abort(),o||this.cancelNavigationTransition(t,"",Be.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Rn(s=>{if(o=!0,this.destroyed)return t.resolve(!1),Ye;if($l(s))this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Em(s)?this.events.next(new qn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let u=new gn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let h=mt(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(h instanceof Yn){let{message:f,cancellationCode:_}=Ho(this.urlSerializer,h);this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),f,_)),this.events.next(new qn(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return Ye}))}))}cancelNavigationTransition(e,t,o){let r=new gt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,o);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=_e(this.currentNavigation),o=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==o?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yp(i){return i!==ki}var lc=new P("");var cc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>d(xp),providedIn:"root"})}return i})(),$o=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},xp=(()=>{class i extends $o{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Zo=(()=>{class i{urlSerializer=d(Kn);options=d(Jn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Fn);urlHandlingStrategy=d(Yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new qe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:o}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=o??r;return a instanceof qe?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:o}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,o),this.routerState=e):this.rawUrlTree=o}routerState=Bl(null,d(Ke));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:()=>d(Cp),providedIn:"root"})}return i})(),Cp=(()=>{class i extends Zo{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof fn?this.updateStateMemento():e instanceof Dt?this.commitTransition(t):e instanceof Pi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof $n?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof gt&&!zl(e)?this.restoreHistory(t):e instanceof gn?this.restoreHistory(t,!0):e instanceof lt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:o,id:r}=t,{replaceUrl:a,state:s}=o;if(this.location.isCurrentPathEqualTo(e)||a){let u=this.browserPageId,h=b(b({},s),this.generateNgRouterState(r,u,t));this.location.replaceState(e,"",h)}else{let u=b(b({},s),this.generateNgRouterState(r,this.browserPageId+1,t));this.location.go(e,"",u)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,r=this.currentPageId-o;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,o){return this.canceledNavigationResolution==="computed"?b({navigationId:e,\u0275routerPageId:t},this.routerUrlState(o)):b({navigationId:e},this.routerUrlState(o))}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ra(i,n){i.events.pipe(de(e=>e instanceof lt||e instanceof gt||e instanceof gn||e instanceof Dt),ne(e=>e instanceof lt||e instanceof Dt?0:(e instanceof gt?e.code===Be.Redirect||e.code===Be.SupersededByNewNavigation:!1)?2:1),de(e=>e!==2),dt(1)).subscribe(()=>{n()})}var fe=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Us);stateManager=d(Zo);options=d(Jn,{optional:!0})||{};pendingTasks=d(Ds);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(sc);urlSerializer=d(Kn);location=d(Fn);urlHandlingStrategy=d(Yo);injector=d(Ke);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(cc);injectorCleanup=d(lc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(zi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(qo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let o=this.navigationTransitions.currentTransition,r=_e(this.navigationTransitions.currentNavigation);if(o!==null&&r!==null){if(this.stateManager.handleRouterEvent(t,r),t instanceof gt&&t.code!==Be.Redirect&&t.code!==Be.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof lt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof qn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,o.currentRawUrl),u=b({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||yp(o.source)},a);this.scheduleNavigation(s,ki,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Cm(t)&&this._events.next(t)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ki,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,o,r)=>{this.navigateToSyncWithBrowser(e,o,t,r)})}navigateToSyncWithBrowser(e,t,o,r){let a=o?.navigationId?o:null,s=o?.\u0275routerUrl??e;if(o?.\u0275routerUrl&&(r=te(b({},r),{browserUrl:e})),o){let h=b({},o);delete h.navigationId,delete h.\u0275routerPageId,delete h.\u0275routerUrl,Object.keys(h).length!==0&&(r.state=h)}let u=this.parseUrl(s);this.scheduleNavigation(u,t,a,r).catch(h=>{this.disposed||this.injector.get(ho)(h)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return _e(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Oa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:o,queryParams:r,fragment:a,queryParamsHandling:s,preserveFragment:u}=t,h=u?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=b(b({},this.currentUrlTree.queryParams),r);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=r||null}f!==null&&(f=this.removeEmptyProps(f));let _;try{let A=o?o.snapshot:this.routerState.snapshot.root;_=Dl(A)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return Fl(_,e,f,h??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let o=Zt(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(r,ki,null,t)}navigate(e,t={skipLocationChange:!1}){return wp(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Rs(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let o;if(t===!0?o=b({},Sa):t===!1?o=b({},Ei):o=b(b({},Ei),t),Zt(e))return ma(this.currentUrlTree,e,o);let r=this.parseUrl(e);return ma(this.currentUrlTree,r,o)}removeEmptyProps(e){return Object.entries(e).reduce((t,[o,r])=>(r!=null&&(t[o]=r),t),{})}scheduleNavigation(e,t,o,r,a){if(this.disposed)return Promise.resolve(!1);let s,u,h;a?(s=a.resolve,u=a.reject,h=a.promise):h=new Promise((_,A)=>{s=_,u=A});let f=this.pendingTasks.add();return Ra(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:s,reject:u,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wp(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new Pe(4008,!1)}var kp=(()=>{class i{router=d(fe);stateManager=d(Zo);fragment=x("");queryParams=x({});path=x("");serializer=d(Kn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof lt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:o}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(o),this.path.set(this.serializer.serialize(new qe(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Je=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Xs("href"),{optional:!0});reactiveHref=Ks(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return _e(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return _e(this._target)}_target=x(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return _e(this._queryParams)}_queryParams=x(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return _e(this._fragment)}_fragment=x(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return _e(this._queryParamsHandling)}_queryParamsHandling=x(void 0);set state(e){this._state.set(e)}get state(){return _e(this._state)}_state=x(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return _e(this._info)}_info=x(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return _e(this._relativeTo)}_relativeTo=x(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return _e(this._preserveFragment)}_preserveFragment=x(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return _e(this._skipLocationChange)}_skipLocationChange=x(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return _e(this._replaceUrl)}_replaceUrl=x(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=d(ho);options=d(Jn,{optional:!0});reactiveRouterState=d(kp);constructor(e,t,o,r,a,s){this.router=e,this.route=t,this.tabIndexAttribute=o,this.renderer=r,this.el=a,this.locationStrategy=s;let u=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=x(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Zt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,o,r,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||o||r||a||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,u)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let o=this.renderer,r=this.el.nativeElement;t!==null?o.setAttribute(r,e,t):o.removeAttribute(r,e)}_urlTree=se(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=o=>o==="preserve"||o==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Zt(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return _e(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(q(fe),q(_t),Fs("tabindex"),q(ke),q(j),q(il))};static \u0275dir=G({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,o){t&1&&C("click",function(a){return o.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&D("href",o.reactiveHref(),zs)("target",o._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",U],skipLocationChange:[2,"skipLocationChange","skipLocationChange",U],replaceUrl:[2,"replaceUrl","replaceUrl",U],routerLink:"routerLink"},features:[Ve]})}return i})(),Aa=(()=>{class i{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Q;link=d(Je,{optional:!0});constructor(e,t,o,r){this.router=e,this.element=t,this.renderer=o,this.cdr=r,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof lt&&this.update()})}ngAfterContentInit(){T(this.links.changes,T(null)).pipe($r()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=nt(e).pipe($r()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(o=>!!o)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=Mp(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?b({},Sa):b({},Ei);return o=>{let r=o.urlTree;return r?_e(ka(r,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||i)(q(fe),q(j),q(ke),q(Ee))};static \u0275dir=G({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(t,o,r){if(t&1&&ot(r,Je,5),t&2){let a;L(a=z())&&(o.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ve]})}return i})();function Mp(i){let n=i;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Ep=new P("");function Ip(i,...n){return As([{provide:zi,multi:!0,useValue:i},[],{provide:_t,useFactory:Op},{provide:Hs,multi:!0,useFactory:Pp},n.map(e=>e.\u0275providers)])}function Op(){return d(fe).routerState.root}function Pp(){let i=d(pe);return n=>{let e=i.get(Tn);if(n!==e.components[0])return;let t=i.get(fe),o=i.get(Rp);i.get(Tp)===1&&t.initialNavigation(),i.get(Ap,null,{optional:!0})?.setUpPreloading(),i.get(Ep,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Rp=new P("",{factory:()=>new R}),Tp=new P("",{factory:()=>1});var Ap=new P("");var ei=class i{constructor(n){this.http=n}http;baseUrl=Ie.STATICS_API_URL;apiResource="session";registrarSesion(n,e){return this.http.post(`${this.baseUrl}${this.apiResource}/registrar`,n,e)}validarSesion(n,e){return this.http.post(`${this.baseUrl}${this.apiResource}/validar`,n,e)}getSesion(n,e){return this.http.post(`${this.baseUrl}${this.apiResource}/getSesion`,n,e)}validarGoogleAuth(n,e){return this.http.post(`${this.baseUrl}${this.apiResource}/google-auth`,n,e)}static \u0275fac=function(e){return new(e||i)(Se(vo))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var _n="droguier_session",ee=class i{platformId=d(Ne);router=d(fe);sessionApiSvc=d(ei);sessionSignal=x(null);sessionUserSignal=x(null);constructor(){if(this.isBrowser()){let n=localStorage.getItem(_n);if(n)try{let e=JSON.parse(n);this.sessionSignal.set(e),this.sessionUserSignal.set(null)}catch{localStorage.removeItem(_n)}}}get session(){return this.sessionSignal.asReadonly()}get sessionUser(){return this.sessionUserSignal.asReadonly()}hasSession(){if(!this.isBrowser())return!!this.sessionSignal();let n=localStorage.getItem(_n),e=!!n;if(!e)return(this.sessionSignal()||this.sessionUserSignal())&&(this.sessionSignal.set(null),this.sessionUserSignal.set(null)),!1;if(e&&!this.sessionSignal())try{let t=JSON.parse(n);this.sessionSignal.set(t)}catch{return localStorage.removeItem(_n),this.sessionSignal.set(null),this.sessionUserSignal.set(null),!1}return e}getToken(){if(!this.isBrowser())return null;let n=localStorage.getItem(_n);if(!n)return null;try{let e=JSON.parse(n),t=e?.token??e?.accessToken??e?.data?.token??null;return typeof t=="string"&&t.trim().length>0?t:null}catch{return null}}setSession(n){this.isBrowser()&&n!==void 0&&(localStorage.setItem(_n,JSON.stringify(n)),this.sessionSignal.set(n),this.sessionUserSignal.set(null))}setSessionUser(n){this.sessionUserSignal.set(this.deserializeSessionUser(n))}async cargarSesion(n=!1){let e=this.sessionUserSignal();if(!n&&e)return e;let t=this.sessionSignal();if(!t)return this.sessionUserSignal.set(null),null;try{let o=await this.getSesionWithSubscribe({data:t?.data},"initial");if(this.isSessionExpiredMessage(o?.message)&&await this.revalidateSessionToken()){let s=this.sessionSignal();o=await this.getSesionWithSubscribe({data:s?.data},"after-refresh")}if(o?.success===!1||this.isSessionExpiredMessage(o?.message))return this.clearSession(),this.redirectToPublicHome(),null;let r=this.deserializeSessionUser(o?.data??null);return this.sessionUserSignal.set(r),r}catch{return this.clearSession(),this.redirectToPublicHome(),null}}getSesionWithSubscribe(n,e){return new Promise((t,o)=>{this.sessionApiSvc.getSesion(n).subscribe({next:r=>{t(r)},error:r=>{if(r?.status===403){let a={success:!1,message:r?.error?.message??r?.statusText??"Forbidden",status:403,data:r?.error??null};t(a)}else o(r)}})})}async revalidateSessionToken(){let n=this.sessionSignal();try{let e=await Os(this.sessionApiSvc.validarSesion(null));if(e?.success===!1||!e?.token)return!1;let t=te(b(b({},n??{}),e),{data:e?.data??n?.data});return this.setSession(t),!0}catch{return!1}}clearSession(){this.isBrowser()&&(localStorage.removeItem(_n),this.sessionSignal.set(null),this.sessionUserSignal.set(null))}deserializeSessionUser(n){if(!n)return null;if(typeof n=="object")return n;if(typeof n!="string")return null;try{let e=JSON.parse(n);if(typeof e=="string"){let t=JSON.parse(e);return t&&typeof t=="object"?t:null}return e&&typeof e=="object"?e:null}catch{return null}}isSessionExpiredMessage(n){return typeof n!="string"?!1:n.toLowerCase().includes("session has expired")}redirectToPublicHome(){this.isBrowser()&&this.router.navigate(["/home"])}isBrowser(){return Le(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function Np(i,n){if(i&1&&(l(0,"p"),m(1),c()),i&2){let e=n.ngIf;p(),X(" Expiraci\xF3n de sesi\xF3n: ",e," ")}}function Lp(i,n){if(i&1&&(l(0,"p"),m(1),c()),i&2){let e=n.ngIf;p(),X(" Expiraci\xF3n de refresh: ",e," ")}}function zp(i,n){if(i&1&&(l(0,"div",2)(1,"h3"),m(2,"Sesi\xF3n activa"),c(),he(3,Np,2,1,"p",3)(4,Lp,2,1,"p",3),l(5,"pre"),m(6),Dn(7,"json"),c()()),i&2){let e=n.ngIf,t=g();p(3),v("ngIf",t.formatSessionDate(e,"#sym:expiration_date","expiration_date")),p(),v("ngIf",t.formatSessionDate(e,"#sym:refresh_expiration_date","refresh_expiration_date")),p(2),I(na(7,3,e))}}function Bp(i,n){if(i&1&&(l(0,"p"),m(1),c()),i&2){let e=n.ngIf;p(),X(" Expiraci\xF3n de sesi\xF3n: ",e," ")}}function jp(i,n){if(i&1&&(l(0,"p"),m(1),c()),i&2){let e=n.ngIf;p(),X(" Expiraci\xF3n de refresh: ",e," ")}}function Up(i,n){if(i&1&&(l(0,"div",2)(1,"h3"),m(2,"Sesi\xF3n activa"),c(),he(3,Bp,2,1,"p",3)(4,jp,2,1,"p",3),l(5,"pre"),m(6),Dn(7,"json"),c()()),i&2){let e=n.ngIf,t=g();p(3),v("ngIf",t.formatSessionDate(e,"#sym:expiration_date","expiration_date")),p(),v("ngIf",t.formatSessionDate(e,"#sym:refresh_expiration_date","refresh_expiration_date")),p(2),I(na(7,3,e))}}var Ko=class i{constructor(n){this.sessionService=n;this.session.set(this.sessionService.session()),this.sessionUser.set(this.sessionService.sessionUser())}sessionService;session=x("");sessionUser=x(null);ngOnInit(){this.cargarSesion()}cargarSesion(){return this.sessionService.cargarSesion().then(n=>{this.sessionUser.set(this.sessionService.sessionUser())})}formatSessionDate(n,e,t){if(!n||typeof n!="object")return null;let o=n,r=o[e]??(t?o[t]:null);return r==null?null:this.toReadableDate(r)}toReadableDate(n){let e=null;if(typeof n=="number")e=new Date(n<1e12?n*1e3:n);else if(typeof n=="string"){let t=Number(n);!Number.isNaN(t)&&n.trim()!==""?e=new Date(t<1e12?t*1e3:t):e=new Date(n)}return!e||Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-CL",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}static \u0275fac=function(e){return new(e||i)(q(ee))};static \u0275cmp=y({type:i,selectors:[["app-dashboard"]],decls:7,vars:2,consts:[[1,"dashboard"],["class","session-box",4,"ngIf"],[1,"session-box"],[4,"ngIf"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h1"),m(2,"Panel privado"),c(),l(3,"p"),m(4,"Est\xE1s navegando en modo sesi\xF3n activa."),c(),he(5,zp,8,5,"div",1)(6,Up,8,5,"div",1),c()),e&2&&(p(5),v("ngIf",t.session()),p(),v("ngIf",t.sessionUser()))},dependencies:[Gt,Nn,ll],styles:["[_nghost-%COMP%]{display:block}.dashboard[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:2rem;box-shadow:0 14px 30px #0f172a1a}.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;color:#111827}.session-box[_ngcontent-%COMP%]{margin-top:1.25rem;background:#f8fafc;border-radius:12px;padding:1rem;border:1px solid #e2e8f0}pre[_ngcontent-%COMP%]{margin:0;white-space:pre-wrap;word-break:break-word;font-size:.85rem}"]})};var Vp=(i,n)=>n.src;function Hp(i,n){if(i&1&&(l(0,"li",4)(1,"span",5),S(2,"img",6),c(),l(3,"span",7),m(4),c()()),i&2){let e=n.$implicit;D("aria-label",e.name),p(2),v("src",e.src,Vt)("alt",e.alt),p(2),I(e.name)}}var ti=class i{techIcons=[{src:"assets/icons/javascript.svg",alt:"Logo de JavaScript",name:"JavaScript"},{src:"assets/icons/typescript.svg",alt:"Logo de TypeScript",name:"TypeScript"},{src:"assets/icons/angular.svg",alt:"Logo de Angular",name:"Angular"},{src:"assets/icons/nodejs.svg",alt:"Logo de Node.js",name:"Node.js"},{src:"assets/icons/expressjs.svg",alt:"Logo de Express",name:"Express"},{src:"assets/icons/html5.svg",alt:"Logo de HTML5",name:"HTML5"},{src:"assets/icons/css3.svg",alt:"Logo de CSS3",name:"CSS3"},{src:"assets/icons/npm.svg",alt:"Logo de npm",name:"npm"},{src:"assets/icons/cloudflare.svg",alt:"Logo de Cloudflare",name:"Cloudflare"},{src:"assets/icons/git.svg",alt:"Logo de Git",name:"Git"},{src:"assets/icons/github.svg",alt:"Logo de GitHub",name:"GitHub"},{src:"assets/icons/vscode.svg",alt:"Logo de VS Code",name:"VS Code"},{src:"assets/icons/opencode.svg",alt:"Logo de OpenCode",name:"OpenCode"},{src:"assets/icons/ollama.svg",alt:"Logo de Ollama",name:"Ollama"}];gridColumns=Math.ceil(Math.sqrt(this.techIcons.length));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-home"]],decls:7,vars:1,consts:[["aria-label","Tecnolog\xEDas usadas en esta web",1,"home-hero"],[1,"home-content"],[1,"home-title"],[1,"icon-grid",3,"ngClass"],["tabindex","0",1,"icon-card"],[1,"icon-tile"],["loading","lazy","width","50","height","50",1,"icon-logo",3,"src","alt"],["role","tooltip",1,"icon-tooltip"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),m(3,"Created with"),c(),l(4,"ul",3),re(5,Hp,5,4,"li",4,Vp),c()()()),e&2&&(p(4),v("ngClass","cols-"+t.gridColumns),p(),ae(t.techIcons))},dependencies:[ol],styles:['[_nghost-%COMP%]{display:block;flex:1 1 auto;min-height:100%;overflow:hidden;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-display, "Bitter", Georgia, serif)}.home-hero[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;box-sizing:border-box;overflow-y:auto}.home-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.home-title[_ngcontent-%COMP%]{font-family:"Electrolize",var(--app-font-sans, "Inter", sans-serif);font-size:.85rem;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-transform:uppercase;letter-spacing:.08em;align-self:flex-start;margin:0 0 1.25rem;color:var(--app-text-primary)}.icon-grid[_ngcontent-%COMP%]{list-style:none;display:grid;gap:clamp(.6rem,1.5vw,1rem);justify-content:center;padding:0;margin:0}.icon-grid.cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,7rem)}.icon-grid.cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,6.5rem)}.icon-card[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border-radius:var(--app-pills-radius);border:1px solid var(--app-border-strong);background:var(--app-chip-background-strong);cursor:default;transition:border-color .2s ease,box-shadow .2s ease}.icon-card[_ngcontent-%COMP%]:hover, .icon-card[_ngcontent-%COMP%]:focus-visible{border-color:var(--app-status-primary);box-shadow:0 0 8px var(--app-status-primary);outline:none}.icon-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:calc(var(--app-pills-radius) - 4px);background:color-mix(in srgb,var(--color-neutral-white, #ffffff) 85%,transparent);padding:.4rem;box-sizing:border-box}.icon-logo[_ngcontent-%COMP%]{width:62%;height:62%;object-fit:contain}.icon-tooltip[_ngcontent-%COMP%]{position:absolute;bottom:calc(100% + .5rem);left:50%;transform:translate(-50%);background:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-sans, "Inter", sans-serif);font-size:.7rem;font-weight:600;padding:.3rem .65rem;border:1px solid var(--app-border-strong);border-radius:var(--app-pills-radius);box-shadow:0 4px 10px var(--app-shadow);white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .15s ease,visibility .15s ease;pointer-events:none}.icon-tooltip[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:5px solid transparent;border-top-color:var(--app-border-strong)}.icon-card[_ngcontent-%COMP%]:hover   .icon-tooltip[_ngcontent-%COMP%], .icon-card[_ngcontent-%COMP%]:focus-visible   .icon-tooltip[_ngcontent-%COMP%]{opacity:1;visibility:visible}@media(max-width:48rem){.home-hero[_ngcontent-%COMP%]{padding:1.5rem .5rem}.home-title[_ngcontent-%COMP%]{font-size:.75rem}.icon-grid.cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,5.5rem)}.icon-grid.cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,4.5rem)}.icon-tile[_ngcontent-%COMP%]{padding:.3rem}}']})};var Mt=class i{constructor(n){this.http=n}http;baseUrl=Ie.STATICS_API_URL;get(n,e){let t=`${this.baseUrl}${n}`;return this.http.get(t,e)}post(n,e,t){return this.http.post(`${this.baseUrl}${n}`,e,t)}put(n,e,t){return this.http.put(`${this.baseUrl}${n}`,e,t)}delete(n,e){return this.http.delete(`${this.baseUrl}${n}`,e)}patch(n,e,t){return this.http.patch(`${this.baseUrl}${n}`,e,t)}static \u0275fac=function(e){return new(e||i)(Se(vo))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function Gp(i,n){if(i&1&&(l(0,"div",28),m(1),c()),i&2){let e=g(2);p(),X(" ",e.error_msg," ")}}function $p(i,n){if(i&1&&(l(0,"div",29),m(1),c()),i&2){let e=g(2);p(),X(" ",e.success_msg," ")}}function qp(i,n){i&1&&(l(0,"p",30),m(1," Esta accion desactivara el bookmark (soft delete). "),c())}function Wp(i,n){i&1&&(l(0,"p",30),m(1,' Esta accion agregara el tag "favorito" al bookmark. '),c())}function Yp(i,n){i&1&&(l(0,"small",32),m(1,"ID requerido."),c())}function Zp(i,n){if(i&1){let e=ie();l(0,"label"),m(1," ID * "),l(2,"input",31),pn("ngModelChange",function(o){F(e);let r=g(2);return mn(r.formModel.id,o)||(r.formModel.id=o),N(o)}),c(),he(3,Yp,2,0,"small",14),c()}if(i&2){g();let e=rt(15),t=g();p(2),dn("ngModel",t.formModel.id),p(),v("ngIf",t.formSubmitted&&(e.controls.id==null?null:e.controls.id.invalid))}}function Kp(i,n){i&1&&(l(0,"small",32),m(1,"Titulo requerido."),c())}function Xp(i,n){i&1&&(l(0,"small",32),m(1,"URL requerida."),c())}function Qp(i,n){if(i&1){let e=ie();l(0,"span",35)(1,"span"),m(2),c(),l(3,"button",36),C("click",function(){let o=F(e).$implicit,r=g(3);return N(r.removeTag(o))}),m(4," x "),c()()}if(i&2){let e=n.$implicit,t=g(3);p(2),I(e),p(),v("disabled",t.mode==="delete")}}function Jp(i,n){if(i&1&&(l(0,"div",33),he(1,Qp,5,2,"span",34),c()),i&2){let e=g(2);p(),v("ngForOf",e.bookmarkTags())}}function eu(i,n){if(i&1&&(l(0,"button",37),m(1,"Crear"),c()),i&2){let e=g(2);v("disabled",e.loadingApi())}}function tu(i,n){if(i&1&&(l(0,"button",38),m(1,"Actualizar"),c()),i&2){let e=g(2);v("disabled",e.loadingApi())}}function nu(i,n){if(i&1&&(l(0,"button",38),m(1,"Marcar favorito"),c()),i&2){let e=g(2);v("disabled",e.loadingApi())}}function iu(i,n){if(i&1&&(l(0,"button",39),m(1,"Desactivar"),c()),i&2){let e=g(2);v("disabled",e.loadingApi())}}function ou(i,n){if(i&1){let e=ie();l(0,"button",21),C("click",function(){F(e);let o=g(2);return N(o.clearForm(!0))}),m(1,"Limpiar formulario"),c()}if(i&2){let e=g(2);v("disabled",e.loadingApi())}}function ru(i,n){if(i&1){let e=ie();l(0,"div",2),C("click",function(){F(e);let o=g();return N(o.closeModal())}),l(1,"div",3),C("click",function(o){return o.stopPropagation()}),l(2,"div",4)(3,"div")(4,"p",5),m(5,"Formulario"),c(),l(6,"h3",6),m(7),c()(),l(8,"button",7),C("click",function(){F(e);let o=g();return N(o.closeModal())}),m(9,"Cerrar"),c()(),he(10,Gp,2,1,"div",8)(11,$p,2,1,"div",9)(12,qp,2,0,"p",10)(13,Wp,2,0,"p",10),l(14,"form",11,0),C("ngSubmit",function(){F(e);let o=g();return N(o.submitForm())}),he(16,Zp,4,2,"label",12),l(17,"label"),m(18," Titulo * "),l(19,"input",13),pn("ngModelChange",function(o){F(e);let r=g();return mn(r.formModel.title,o)||(r.formModel.title=o),N(o)}),c(),he(20,Kp,2,0,"small",14),c(),l(21,"label"),m(22," URL * "),l(23,"input",15),pn("ngModelChange",function(o){F(e);let r=g();return mn(r.formModel.url,o)||(r.formModel.url=o),N(o)}),c(),he(24,Xp,2,0,"small",14),c(),l(25,"label"),m(26," Icono "),l(27,"input",16),pn("ngModelChange",function(o){F(e);let r=g();return mn(r.formModel.icon,o)||(r.formModel.icon=o),N(o)}),c()(),l(28,"label",17),m(29," Descripcion "),l(30,"textarea",18),pn("ngModelChange",function(o){F(e);let r=g();return mn(r.formModel.description,o)||(r.formModel.description=o),N(o)}),c()(),l(31,"label",17),m(32," Tags "),l(33,"div",19)(34,"input",20),pn("ngModelChange",function(o){F(e);let r=g();return mn(r.bookmarkTagsInput,o)||(r.bookmarkTagsInput=o),N(o)}),C("keydown",function(o){F(e);let r=g();return N(r.handleTagKeydown(o))}),c(),l(35,"button",21),C("click",function(){F(e);let o=g();return N(o.addTagFromInput())}),m(36," Agregar "),c()(),he(37,Jp,2,1,"div",22),c(),l(38,"div",23),he(39,eu,2,1,"button",24)(40,tu,2,1,"button",25)(41,nu,2,1,"button",25)(42,iu,2,1,"button",26)(43,ou,2,1,"button",27),c()()()()}if(i&2){let e=rt(15),t=g();p(7),X("",t.mode==="create"?"Crear":t.mode==="update"?"Actualizar":t.mode==="favorite"?"Marcar favorito":"Desactivar"," bookmark"),p(3),v("ngIf",t.error()),p(),v("ngIf",t.success_msg&&!t.loadingApi()),p(),v("ngIf",t.mode==="delete"),p(),v("ngIf",t.mode==="favorite"),p(3),v("ngIf",t.mode!=="create"),p(3),v("required",t.mode!=="delete")("disabled",t.mode==="delete"),dn("ngModel",t.formModel.title),p(),v("ngIf",t.formSubmitted&&t.mode!=="delete"&&(e.controls.title==null?null:e.controls.title.invalid)),p(3),v("required",t.mode!=="delete")("disabled",t.mode==="delete"),dn("ngModel",t.formModel.url),p(),v("ngIf",t.formSubmitted&&t.mode!=="delete"&&(e.controls.url==null?null:e.controls.url.invalid)),p(3),v("disabled",t.mode==="delete"),dn("ngModel",t.formModel.icon),p(3),v("disabled",t.mode==="delete"),dn("ngModel",t.formModel.description),p(3),O("disabled",t.mode==="delete"),p(),v("disabled",t.mode==="delete"),dn("ngModel",t.bookmarkTagsInput),p(),v("disabled",t.mode==="delete"),p(2),v("ngIf",t.bookmarkTags().length>0),p(2),v("ngIf",t.mode==="create"),p(),v("ngIf",t.mode==="update"),p(),v("ngIf",t.mode==="favorite"),p(),v("ngIf",t.mode==="delete"),p(),v("ngIf",t.mode!=="delete")}}var Qo=class i{constructor(n){this.staticsApi=n}staticsApi;api_controller="bookmarks";api_fav_controller="partners/bookmarks";loadingApi=x(!1);error=x(!1);error_msg=null;success_msg=null;apiUrl=Ie.STATICS_API_URL;apiToken=Ie.STATICS_API_TOKEN;formModel={id:"",title:"",url:"",icon:"",description:"",tags:[]};bookmarkTags=x([]);bookmarkTagsInput="";formSubmitted=!1;open=!1;mode="create";bookmark=null;standardLoadTimeMs=typeof globalThis.STANDARD_LOAD_TIME_MS=="number"?globalThis.STANDARD_LOAD_TIME_MS:800;closed=new Q;completed=new Q;ngOnChanges(n){n.open?.currentValue&&this.prepareForm()}submitForm(){if(this.mode==="create"){this.createBookmark();return}if(this.mode==="update"){this.updateBookmark();return}if(this.mode==="favorite"){this.favoriteBookmark();return}if(this.mode==="delete"){this.deleteBookmark();return}}clearForm(n=!1){if(this.loadingApi.set(!1),n&&(this.mode==="update"||this.mode==="favorite")&&this.bookmark){this.selectBookmark(this.bookmark);return}this.formModel={id:"",title:"",url:"",icon:"",description:"",tags:[]},this.bookmarkTags.set([]),this.bookmarkTagsInput=""}closeModal(){this.formSubmitted=!1,this.closed.emit()}createBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("create"))return;this.resetStatus(),this.loadingApi.set(!0);let n=this.buildPayload();this.staticsApi.post(this.api_controller,n).subscribe({next:e=>{e.success?(this.success_msg="Bookmark creado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo crear el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:e=>this.handleError(e)})}updateBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("update"))return;this.resetStatus(),this.loadingApi.set(!0);let n=this.buildPayload(),e=encodeURIComponent(this.formModel.id);this.staticsApi.put(`${this.api_controller}/${e}`,n).subscribe({next:t=>{t.success?(this.success_msg="Bookmark actualizado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo actualizar el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:t=>this.handleError(t)})}deleteBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("delete"))return;if(!this.hasActiveTag()){this.error_msg='El bookmark ya esta desactivado (sin tag "activo").',this.error.set(!0);return}this.resetStatus(),this.loadingApi.set(!0);let n=encodeURIComponent(this.formModel.id);this.staticsApi.delete(`${this.api_controller}/${n}`).subscribe({next:e=>{e.success?(this.success_msg=e.message||"Bookmark desactivado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo desactivar el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:e=>this.handleError(e)})}favoriteBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("favorite"))return;this.resetStatus(),this.loadingApi.set(!0);let n=this.buildFavoritePayload(),e=encodeURIComponent(this.formModel.id);this.staticsApi.put(`${this.api_fav_controller}`,n).subscribe({next:t=>{t.success?(this.success_msg="Bookmark marcado como favorito correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo marcar el bookmark como favorito.",this.error.set(!0),this.loadingApi.set(!1))},error:t=>this.handleError(t)})}selectBookmark(n){this.formModel={id:n.id,title:n.title,url:n.url,icon:n.icon,description:n.description,tags:n.tags||[]},this.bookmarkTags.set([...n.tags||[]]),this.bookmarkTagsInput="",this.success_msg="Bookmark cargado en el formulario.",this.error.set(!1)}buildPayload(){this.addTagFromInput();let n=this.bookmarkTags();return{id:this.formModel.id,title:this.formModel.title,url:this.formModel.url,icon:this.formModel.icon||"",description:this.formModel.description||"",tags:n}}buildFavoritePayload(){this.addTagFromInput();let n=this.bookmarkTags(),t=n.some(o=>o.toLowerCase()==="favorito")?n:[...n,"favorito"];return this.bookmarkTags.set(t),{id:this.formModel.id,title:this.formModel.title,url:this.formModel.url,icon:this.formModel.icon||"",description:this.formModel.description||"",tags:t}}validateFormForMode(n){return this.resetStatus(),n!=="create"&&!this.formModel.id?(this.error_msg="El ID es obligatorio para esta accion.",this.error.set(!0),!1):n!=="delete"&&(!this.formModel.title||!this.formModel.url)?(this.error_msg="Titulo y URL son obligatorios.",this.error.set(!0),!1):!0}addTagFromInput(){let n=this.bookmarkTagsInput.trim();if(!n)return;let e=n.split(",").map(a=>a.trim()).filter(a=>a.length>0);if(e.length===0)return;let t=this.bookmarkTags(),o=new Set(t.map(a=>a.toLowerCase())),r=[...t];e.forEach(a=>{o.has(a.toLowerCase())||(r.push(a),o.add(a.toLowerCase()))}),this.bookmarkTags.set(r),this.bookmarkTagsInput=""}removeTag(n){let e=this.bookmarkTags().filter(t=>t!==n);this.bookmarkTags.set(e)}handleTagKeydown(n){(n.key==="Enter"||n.key===",")&&(n.preventDefault(),this.addTagFromInput())}prepareForm(){if(this.formSubmitted=!1,this.loadingApi.set(!1),this.resetStatus(),this.mode==="create"){this.clearForm();return}if(this.bookmark){this.selectBookmark(this.bookmark);return}this.clearForm(),this.error_msg="Selecciona un bookmark para continuar.",this.error.set(!0)}hasActiveTag(){return this.bookmarkTags().some(e=>e.toLowerCase()==="activo")}resetStatus(){this.error.set(!1),this.error_msg=null,this.success_msg=null}handleError(n){n?.status===401?this.error_msg=`Error 401: ${n.error?.message||"Token de autenticacion invalido"}`:n?.status===404?this.error_msg="Error 404: Endpoint no encontrado":n?.status===0?this.error_msg="Error de red: No se pudo conectar con el servidor":this.error_msg=`Error ${n?.status||""}: ${n?.error?.message||n?.message||"Error desconocido"}`,this.error.set(!0),this.loadingApi.set(!1)}static \u0275fac=function(e){return new(e||i)(q(Mt))};static \u0275cmp=y({type:i,selectors:[["app-statics-bookmarks-crud"]],inputs:{open:"open",mode:"mode",bookmark:"bookmark",standardLoadTimeMs:"standardLoadTimeMs"},outputs:{closed:"closed",completed:"completed"},features:[Ve],decls:1,vars:1,consts:[["crudForm","ngForm"],["class","modal-backdrop",3,"click",4,"ngIf"],[1,"modal-backdrop",3,"click"],["role","dialog","aria-modal","true",1,"modal",3,"click"],[1,"modal-header"],[1,"modal-kicker"],[1,"modal-title"],["type","button",1,"btn","ghost",3,"click"],["class","status error",4,"ngIf"],["class","status success",4,"ngIf"],["class","modal-note",4,"ngIf"],[1,"form-grid",3,"ngSubmit"],[4,"ngIf"],["type","text","name","title","placeholder","Titulo",3,"ngModelChange","required","disabled","ngModel"],["class","field-error",4,"ngIf"],["type","url","name","url","placeholder","https://",3,"ngModelChange","required","disabled","ngModel"],["type","text","name","icon","placeholder","Icono",3,"ngModelChange","disabled","ngModel"],[1,"span-2"],["rows","3","name","description","placeholder","Descripcion",3,"ngModelChange","disabled","ngModel"],[1,"tags-input"],["type","text","name","tags","placeholder","Escribe un tag y presiona Enter",3,"ngModelChange","keydown","disabled","ngModel"],["type","button",1,"btn","ghost",3,"click","disabled"],["class","tag-pills",4,"ngIf"],[1,"modal-actions","span-2"],["class","btn primary","type","submit",3,"disabled",4,"ngIf"],["class","btn secondary","type","submit",3,"disabled",4,"ngIf"],["class","btn danger","type","submit",3,"disabled",4,"ngIf"],["class","btn ghost","type","button",3,"disabled","click",4,"ngIf"],[1,"status","error"],[1,"status","success"],[1,"modal-note"],["type","text","name","id","required","","placeholder","ID del bookmark","readonly","",3,"ngModelChange","ngModel"],[1,"field-error"],[1,"tag-pills"],["class","tag-pill",4,"ngFor","ngForOf"],[1,"tag-pill"],["type","button",1,"tag-remove",3,"click","disabled"],["type","submit",1,"btn","primary",3,"disabled"],["type","submit",1,"btn","secondary",3,"disabled"],["type","submit",1,"btn","danger",3,"disabled"]],template:function(e,t){e&1&&he(0,ru,44,29,"div",1),e&2&&v("ngIf",t.open)},dependencies:[Gt,rl,Nn,hl,Un,Ln,zn,Bn,pl,ml,jn],styles:["[_nghost-%COMP%]{--ink: var(--app-text-strong);--muted: var(--app-text-soft);--primary: var(--app-brand-primary);--primary-dark: var(--app-brand-primary-dark);--accent: var(--app-brand-accent);--danger: var(--app-status-error);--border: var(--app-border-soft);--surface: var(--app-text-inverse);--surface-alt: var(--app-background-soft)}.crud-container[_ngcontent-%COMP%]{font-family:IBM Plex Sans,Segoe UI,sans-serif;color:var(--ink);max-width:1100px;margin:0 auto;padding:24px}.crud-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.crud-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:26px;letter-spacing:-.02em}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.btn[_ngcontent-%COMP%]{border:none;border-radius:8px;padding:10px 18px;font-size:14px;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}.btn.primary[_ngcontent-%COMP%]{background:var(--primary);color:#fff}.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-dark);box-shadow:0 8px 16px #1a6dff33;transform:translateY(-1px)}.btn.secondary[_ngcontent-%COMP%]{background:var(--accent);color:#fff}.btn.secondary[_ngcontent-%COMP%]:hover:not(:disabled){box-shadow:0 8px 16px #0f9d5833;transform:translateY(-1px)}.btn.danger[_ngcontent-%COMP%]{background:var(--danger);color:#fff}.btn.ghost[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--border);color:var(--ink)}.status[_ngcontent-%COMP%]{margin:12px 0;padding:12px 16px;border-radius:10px;background:var(--surface-alt);color:var(--muted)}.status.error[_ngcontent-%COMP%]{background:#fdecea;color:#b11b12}.status.success[_ngcontent-%COMP%]{background:#e6f4ea;color:#1e7a3f}.form-card[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]{margin-top:20px;padding:20px;border-radius:12px;background:var(--surface);border:1px solid var(--border);box-shadow:0 12px 30px #1118270a}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--app-overlay-backdrop);display:flex;align-items:center;justify-content:center;padding:24px;z-index:999;animation:_ngcontent-%COMP%_fadeIn .2s ease}.modal[_ngcontent-%COMP%]{width:min(820px,100%);background:var(--surface);border-radius:14px;border:1px solid var(--border);box-shadow:0 28px 80px #0b0f1759;padding:24px;animation:_ngcontent-%COMP%_slideUp .25s ease}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px}.modal-kicker[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}.modal-title[_ngcontent-%COMP%]{margin:6px 0 0;font-size:20px}.modal-note[_ngcontent-%COMP%]{margin:0 0 12px;color:var(--muted);font-size:13px}.modal-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;margin-top:8px}.field-error[_ngcontent-%COMP%]{color:var(--danger);font-size:12px}.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;font-size:18px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:16px 0 20px}.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)}.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:14px;color:var(--ink);background:#fff}.form-grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical}.tags-input[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.tags-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1}.tags-input.disabled[_ngcontent-%COMP%]{opacity:.6}.tag-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.tag-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;background:var(--surface-alt);border:1px solid var(--border);border-radius:999px;padding:4px 10px;font-size:12px;color:var(--ink)}.tag-remove[_ngcontent-%COMP%]{border:none;background:transparent;color:var(--danger);cursor:pointer;font-size:12px;line-height:1}.span-2[_ngcontent-%COMP%]{grid-column:span 2}.list-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:var(--muted);font-size:14px;margin-bottom:12px}.list[_ngcontent-%COMP%]{display:grid;gap:12px}.list-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--surface-alt)}.list-item[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{font-size:12px;color:var(--muted)}.list-empty[_ngcontent-%COMP%]{color:var(--muted);font-size:14px}.debug[_ngcontent-%COMP%]{margin-top:20px;font-size:12px;color:var(--muted);border-top:1px dashed var(--border);padding-top:12px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media(max-width:760px){.crud-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.span-2[_ngcontent-%COMP%]{grid-column:span 1}}"]})};function yn(i){return i.buttons===0||i.detail===0}function xn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Da;function mc(){if(Da==null){let i=typeof document<"u"?document.head:null;Da=!!(i&&(i.createShadowRoot||i.attachShadow))}return Da}function Fa(i){if(mc()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Na(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function je(i){return i.composedPath?i.composedPath()[0]:i.target}var La;try{La=typeof Intl<"u"&&Intl.v8BreakIterator}catch{La=!1}var ce=(()=>{class i{_platformId=d(Ne);isBrowser=this._platformId?Le(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||La)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ji;function pc(){if(ji==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ji=!0}))}finally{ji=ji||!1}return ji}function ni(i){return pc()?i:!!i.capture}function ct(i){return i instanceof j?i.nativeElement:i}var uc=new P("cdk-input-modality-detector-options"),hc={ignoreKeys:[18,17,224,91,16]},fc=650,za={passive:!0,capture:!0},gc=(()=>{class i{_platform=d(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new We(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=je(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<fc||(this._modality.next(yn(e)?"keyboard":"mouse"),this._mostRecentTarget=je(e))};_onTouchstart=e=>{if(xn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=je(e)};constructor(){let e=d(H),t=d(ue),o=d(uc,{optional:!0});if(this._options=b(b({},hc),o),this.modalityDetected=this._modality.pipe(po(1)),this.modalityChanged=this.modalityDetected.pipe(Wr()),this._platform.isBrowser){let r=d(it).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,za),r.listen(t,"mousedown",this._onMousedown,za),r.listen(t,"touchstart",this._onTouchstart,za)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ui=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Ui||{}),vc=new P("cdk-focus-monitor-default-options"),Jo=ni({passive:!0,capture:!0}),Kt=(()=>{class i{_ngZone=d(H);_platform=d(ce);_inputModalityDetector=d(gc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(ue);_stopInputModalityDetector=new R;constructor(){let e=d(vc,{optional:!0});this._detectionMode=e?.detectionMode||Ui.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=je(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=ct(e);if(!this._platform.isBrowser||o.nodeType!==1)return T();let r=Fa(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new R,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=ct(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=ct(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,u])=>this._originChanged(s,t,u)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ui.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Ui.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?fc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=je(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Jo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Jo)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(oe(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Jo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Jo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ft(i){return Array.isArray(i)?i:[i]}var bc=new Set,Cn,er=(()=>{class i{_platform=d(ce);_nonce=d(Ls,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):su}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&au(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function au(i,n){if(!bc.has(i))try{Cn||(Cn=document.createElement("style"),n&&Cn.setAttribute("nonce",n),Cn.setAttribute("type","text/css"),document.head.appendChild(Cn)),Cn.sheet&&(Cn.sheet.insertRule(`@media ${i} {body{ }}`,0),bc.add(i))}catch(e){console.error(e)}}function su(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Ba=(()=>{class i{_mediaMatcher=d(er);_zone=d(H);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return _c(Ft(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=_c(Ft(e)).map(a=>this._registerQuery(a).observable),r=so(o);return r=On(r.pipe(dt(1)),r.pipe(po(1),co(0))),r.pipe(ne(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:h})=>{s.matches=s.matches||u,s.breakpoints[h]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new tt(a=>{let s=u=>this._zone.run(()=>a.next(u));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Fe(t),ne(({matches:a})=>({query:e,matches:a})),oe(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _c(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var lu=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var yc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({providers:[lu]})}return i})();var cu=200,tr=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:cu;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ue(e=>this._pressedLetters.push(e)),co(n),de(()=>this._pressedLetters.length>0),ne(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function et(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ii=class{_items;_activeItemIndex=x(-1);_activeItem=x(null);_wrap=!1;_typeaheadSubscription=Oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof sn?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):cn(n)&&(this._effectRef=wt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new tr(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||et(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+n*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return cn(this._items)?this._items():this._items instanceof sn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Vi=class extends ii{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var wn=class extends ii{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Va={},ye=class i{_appId=d(Ns);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Va.hasOwnProperty(n)||(Va[n]=0),`${n}${e?i._infix+"-":""}${Va[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var xc=" ";function Ha(i,n,e){let t=Cc(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(xc)))}function ir(i,n,e){let t=Cc(i,n);e=e.trim();let o=t.filter(r=>r!==e);o.length?i.setAttribute(n,o.join(xc)):i.removeAttribute(n)}function Cc(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var yt=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(yt||{}),or,Sn;function rr(){if(Sn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Sn=!1,Sn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Sn=!0;else{let i=Element.prototype.scrollTo;i?Sn=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Sn=!1}}return Sn}function ri(){if(typeof document!="object"||!document)return yt.NORMAL;if(or==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),or=yt.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,or=i.scrollLeft===0?yt.NEGATED:yt.INVERTED),i.remove()}return or}function Ga(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ai,wc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function $a(){if(ai)return ai;if(typeof document!="object"||!document)return ai=new Set(wc),ai;let i=document.createElement("input");return ai=new Set(wc.filter(n=>(i.setAttribute("type",n),i.type===n))),ai}var Sc={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var du=new P("MATERIAL_ANIMATIONS"),kc=null;function mu(){return d(du,{optional:!0})?.animationsDisabled||d(fo,{optional:!0})==="NoopAnimations"?"di-disabled":(kc??=d(er).matchMedia("(prefers-reduced-motion)").matches,kc?"reduced-motion":"enabled")}function De(){return mu()!=="enabled"}function xe(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Nt(i){return i!=null&&`${i}`!="false"}var vt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(vt||{}),qa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=vt.HIDDEN;constructor(n,e,t,o=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ec=ni({passive:!0,capture:!0}),Wa=class{_events=new Map;addHandler(n,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ec)})}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ec)))}_delegateEventHandler=n=>{let e=je(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(n))})}},Hi={enterDuration:225,exitDuration:150},pu=800,Ic=ni({passive:!0,capture:!0}),Oc=["mousedown","touchstart"],Pc=["mouseup","mouseleave","touchend","touchcancel"],uu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Gi=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Wa;constructor(n,e,t,o,r){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=ct(t)),r&&r.get(ze).load(uu)}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=b(b({},Hi),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||hu(n,e,o),s=n-o.left,u=e-o.top,h=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(f);let _=window.getComputedStyle(f),A=_.transitionProperty,$=_.transitionDuration,W=A==="none"||$==="0s"||$==="0s, 0s"||o.width===0&&o.height===0,Y=new qa(this,f,t,W);f.style.transform="scale3d(1, 1, 1)",Y.state=vt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Y);let Ce=null;return!W&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let jt=()=>{Ce&&(Ce.fallbackTimer=null),clearTimeout(an),this._finishRippleTransition(Y)},Et=()=>this._destroyRipple(Y),an=setTimeout(Et,h+100);f.addEventListener("transitionend",jt),f.addEventListener("transitioncancel",Et),Ce={onTransitionEnd:jt,onTransitionCancel:Et,fallbackTimer:an}}),this._activeRipples.set(Y,Ce),(W||!h)&&this._finishRippleTransition(Y),Y}fadeOutRipple(n){if(n.state===vt.FADING_OUT||n.state===vt.HIDDEN)return;let e=n.element,t=b(b({},Hi),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=vt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ct(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Oc.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Pc.forEach(e=>{this._triggerElement.addEventListener(e,this,Ic)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===vt.FADING_IN?this._startFadeOutTransition(n):n.state===vt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=vt.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=vt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=yn(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+pu;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!xn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===vt.VISIBLE||n.config.terminateOnPointerUp&&n.state===vt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Oc.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Pc.forEach(e=>n.removeEventListener(e,this,Ic)),this._pointerUpEventsRegistered=!1))}};function hu(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o)}var $i=new P("mat-ripple-global-options"),ar=(()=>{class i{_elementRef=d(j);_animationsDisabled=De();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(H),t=d(ce),o=d($i,{optional:!0}),r=d(pe);this._globalOptions=o||{},this._rippleRenderer=new Gi(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,b(b({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&O("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var fu={capture:!0},gu=["focus","mousedown","mouseenter","touchstart"],Ya="mat-ripple-loader-uninitialized",Za="mat-ripple-loader-class-name",Rc="mat-ripple-loader-centered",sr="mat-ripple-loader-disabled",lr=(()=>{class i{_document=d(ue);_animationsDisabled=De();_globalRippleOptions=d($i,{optional:!0});_platform=d(ce);_ngZone=d(H);_injector=d(pe);_eventCleanups;_hosts=new Map;constructor(){let e=d(it).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>gu.map(t=>e.listen(this._document,t,this._onInteraction,fu)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ya,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Za))&&e.setAttribute(Za,t.className||""),t.centered&&e.setAttribute(Rc,""),t.disabled&&e.setAttribute(sr,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(sr,""):e.removeAttribute(sr)}_onInteraction=e=>{let t=je(e);if(t instanceof HTMLElement){let o=t.closest(`[${Ya}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Za)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Hi.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Hi.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(sr),rippleConfig:{centered:e.hasAttribute(Rc),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},u=new Gi(s,this._ngZone,t,this._platform,this._injector),h=!s.rippleDisabled;h&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:h}),e.removeAttribute(Ya)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Lt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var vu=new P("MAT_BUTTON_CONFIG");function Tc(i){return i==null?void 0:xi(i)}var Ac=(()=>{class i{_elementRef=d(j);_ngZone=d(H);_animationsDisabled=De();_config=d(vu,{optional:!0});_focusMonitor=d(Kt);_cleanupClick;_renderer=d(ke);_rippleLoader=d(lr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(ze).load(Lt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(D("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Xe(o.color?"mat-"+o.color:""),O("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",Tc],_tabindex:[2,"tabindex","_tabindex",Tc]}})}return i})();var Qt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[le]})}return i})();var bu=["matButton",""],_u=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],yu=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Dc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Fc=(()=>{class i extends Ac{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=xu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?Dc.get(this._appearance):null,r=Dc.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ut],attrs:bu,ngContentSelectors:yu,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(be(_u),ht(0,"span",0),V(1),ve(2,"span",1),V(3,1),Me(),V(4,2),ht(5,"span",2)(6,"span",3)),t&2&&O("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function xu(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Nc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[Qt,le]})}return i})();var wu=(i,n)=>n.id;function Su(i,n){i&1&&(l(0,"mat-icon"),m(1,"hourglass_bottom"),c())}function ku(i,n){i&1&&(l(0,"mat-icon"),m(1,"find_in_page"),c())}function Mu(i,n){i&1&&(l(0,"div",8),m(1," Cargando bookmarks... "),c())}function Eu(i,n){if(i&1&&(l(0,"div",9),m(1),l(2,"details",12)(3,"summary"),m(4,"Ver Diagn\xF3stico"),c(),l(5,"div",13)(6,"p")(7,"strong"),m(8,"URL API:"),c(),m(9),c(),l(10,"p")(11,"strong"),m(12,"Token configurado:"),c(),m(13),c(),l(14,"p")(15,"strong"),m(16,"Header esperado:"),c(),m(17," X-API-Token"),c(),S(18,"hr"),l(19,"p",14)(20,"strong"),m(21,"Posibles causas del error 401:"),c(),S(22,"br"),m(23),S(24,"br"),m(25," 2. El servidor espera un token diferente"),S(26,"br"),m(27," 3. El formato del header es incorrecto"),S(28,"br"),m(29," 4. Verifica con el administrador de la API el token correcto "),c()()()()),i&2){let e=g();p(),X(" ",e.error_msg," "),p(8),X(" ",e.apiUrl),p(4),X(" ",e.apiToken),p(10),X(' 1. El token "',e.apiToken,'" no es v\xE1lido')}}function Iu(i,n){if(i&1&&(l(0,"span",29),m(1),c()),i&2){let e=n.$implicit;p(),I(e)}}function Ou(i,n){if(i&1&&(l(0,"div",22),re(1,Iu,2,1,"span",29,Ht),c()),i&2){let e=g().$implicit;p(),ae(e.tags)}}function Pu(i,n){if(i&1){let e=ie();l(0,"div",18)(1,"div",19)(2,"mat-icon"),m(3,"bookmark"),c(),l(4,"h4"),m(5),c()(),l(6,"p",20),m(7),c(),l(8,"a",21)(9,"mat-icon"),m(10,"link"),c(),m(11),c(),k(12,Ou,3,0,"div",22),l(13,"div",23)(14,"small"),m(15),Dn(16,"date"),c(),l(17,"small"),m(18),Dn(19,"date"),c()(),l(20,"div",24)(21,"small"),m(22),c()(),l(23,"div",25)(24,"button",26),C("click",function(){let o=F(e).$implicit,r=g(2);return N(r.openCrudUpdate(o))}),l(25,"mat-icon"),m(26,"edit"),c(),m(27," Editar "),c(),l(28,"button",27),C("click",function(){let o=F(e).$implicit,r=g(2);return N(r.openCrudDelete(o))}),l(29,"mat-icon"),m(30,"remove_circle"),c(),m(31," Desactivar "),c(),l(32,"button",28),C("click",function(){let o=F(e).$implicit,r=g(2);return N(r.openCrudFavorite(o))}),l(33,"mat-icon"),m(34,"favorite"),c(),m(35," Favorito "),c()()()}if(i&2){let e=n.$implicit;p(5),I(e.title),p(2),I(e.description),p(),v("href",e.url,Vt),p(3),X(" ",e.url," "),p(),M(e.tags.length>0?12:-1),p(3),X("Creado: ",ia(16,8,e.createdAt,"short")),p(3),X("Actualizado: ",ia(19,11,e.updatedAt,"short")),p(4),X("ID: ",e.id)}}function Ru(i,n){if(i&1&&(l(0,"div",15)(1,"h3"),m(2,"Bookmarks Disponibles"),c(),l(3,"span",16),m(4),c()(),l(5,"div",17),re(6,Pu,36,14,"div",18,wu),c()),i&2){let e=g();p(4),X("Total: ",e.totalCount),p(2),ae(e.bookmarks())}}function Tu(i,n){i&1&&(l(0,"div",10)(1,"p"),m(2,'No hay bookmarks. Presiona "Consultar" para cargar.'),c()())}var qi=class i{constructor(n,e){this.staticsApiSvc=n;this.sessionAppSvc=e}staticsApiSvc;sessionAppSvc;api_controller="bookmarks";bookmarks=x([]);totalCount=0;loadingApi=x(!1);error=x(!1);crudModalOpen=x(!1);crudMode=x("create");selectedBookmark=x(null);apiUrl=Ie.STATICS_API_URL;apiToken=Ie.STATICS_API_TOKEN;error_msg=null;ngOnInit(){this.cargarSesion()}cargarSesion(){return this.sessionAppSvc.cargarSesion().then(()=>{})}openCrudCreate(){this.crudMode.set("create"),this.selectedBookmark.set(null),this.crudModalOpen.set(!0)}openCrudUpdate(n){this.crudMode.set("update"),this.selectedBookmark.set(n),this.crudModalOpen.set(!0)}openCrudDelete(n){this.crudMode.set("delete"),this.selectedBookmark.set(n),this.crudModalOpen.set(!0)}openCrudFavorite(n){let e=Array.isArray(n.tags)?[...n.tags]:[],o=e.some(r=>typeof r=="string"&&r.toLowerCase()==="favorito")?n:te(b({},n),{tags:[...e,"favorito"]});this.crudMode.set("favorite"),this.selectedBookmark.set(o),this.crudModalOpen.set(!0)}closeCrudModal(){this.crudModalOpen.set(!1),this.selectedBookmark.set(null)}onCrudCompleted(){this.loadBookmarks()}loadBookmarks(){this.loadingApi.set(!0),this.error.set(!1),this.error_msg=null,this.bookmarks.set([]),this.staticsApiSvc.get(this.api_controller).subscribe({next:n=>{n.success?(this.bookmarks.set(n.data),this.totalCount=n.count,this.loadingApi.set(!1),this.error.set(!1)):(this.error_msg="La respuesta no fue exitosa",this.loadingApi.set(!1),this.error.set(!0))},error:n=>{n.status===401?this.error_msg=`Error 401: ${n.error?.message||"Token de autenticaci\xF3n inv\xE1lido"}`:n.status===404?this.error_msg="Error 404: Endpoint no encontrado":n.status===0?this.error_msg="Error de red: No se pudo conectar con el servidor":this.error_msg=`Error ${n.status}: ${n.error?.message||n.message||"Error desconocido"}`,this.loadingApi.set(!1),this.error.set(!0)}})}clearBookmarks(){this.bookmarks.set([]),this.totalCount=0,this.loadingApi.set(!1),this.error.set(!1),this.error_msg=null}static \u0275fac=function(e){return new(e||i)(q(Mt),q(ee))};static \u0275cmp=y({type:i,selectors:[["app-statics-example"]],decls:25,vars:11,consts:[[1,"statics-container"],[1,"statics-container-icon"],[1,"query-section"],[1,"query-left"],["mat-raised-button","","aria-label","Consultar bookmarks",1,"btn-primary",3,"click","disabled"],[1,"query-right"],["mat-raised-button","","aria-label","Nuevo bookmark",1,"btn-secondary",3,"click"],["mat-raised-button","","aria-label","Limpiar bookmarks",1,"btn-primary",3,"click","disabled"],[1,"loading"],[1,"error"],[1,"empty-state"],[3,"closed","completed","open","mode","bookmark"],[1,"error-diag"],[1,"error-diag-content"],[2,"font-size","12px"],[1,"info-header"],[1,"count-badge"],[1,"form-card-grid"],[1,"form-card"],[1,"form-card-header"],[1,"description"],["target","_blank","rel","noopener",1,"form-card-url",3,"href"],[1,"tags"],[1,"metadata"],[1,"form-card-id"],[1,"form-card-actions"],["mat-raised-button","","id","btnBookmark_edit","aria-label","Editar bookmark",1,"btn-secondary",3,"click"],["mat-raised-button","","aria-label","Desactivar bookmark",1,"btn-default",3,"click"],["mat-raised-button","","aria-label","Marcar como favorito",1,"btn-default",3,"click"],[1,"tag"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"h2")(2,"mat-icon",1),m(3,"bookmarks"),c(),m(4," Statics API - Bookmarks"),c(),l(5,"div",2)(6,"div",3)(7,"button",4),C("click",function(){return t.loadBookmarks()}),k(8,Su,2,0,"mat-icon")(9,ku,2,0,"mat-icon"),m(10),c()(),l(11,"div",5)(12,"button",6),C("click",function(){return t.openCrudCreate()}),l(13,"mat-icon"),m(14,"bookmark_add"),c(),m(15," Nuevo bookmark "),c(),l(16,"button",7),C("click",function(){return t.clearBookmarks()}),l(17,"mat-icon"),m(18,"cleaning_services"),c(),m(19," Limpiar bookmarks "),c()()(),k(20,Mu,2,0,"div",8),k(21,Eu,30,4,"div",9),k(22,Ru,8,1),k(23,Tu,3,0,"div",10),c(),l(24,"app-statics-bookmarks-crud",11),C("closed",function(){return t.closeCrudModal()})("completed",function(){return t.onCrudCompleted()}),c()),e&2&&(p(7),v("disabled",t.loadingApi()),p(),M(t.loadingApi()?8:9),p(2),X(" ",t.loadingApi()?" Consultando...":" Consultar Bookmarks"," "),p(6),v("disabled",t.loadingApi()||t.bookmarks().length===0),p(4),M(t.loadingApi()?20:-1),p(),M(t.error()?21:-1),p(),M(!t.loadingApi()&&t.bookmarks().length>0?22:-1),p(),M(!t.loadingApi()&&!t.error()&&t.bookmarks().length===0?23:-1),p(),v("open",t.crudModalOpen())("mode",t.crudMode())("bookmark",t.selectedBookmark()))},dependencies:[Qo,$t,Qe,Nc,Fc,sl],styles:[".statics-container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto;font-family:inherit}.statics-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 20px;color:var(--app-text-strong);font-size:28px}.statics-container-icon[_ngcontent-%COMP%]{color:var(--app-brand-danger);vertical-align:middle;margin-right:6px}.query-section[_ngcontent-%COMP%]{margin:20px 0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}.query-left[_ngcontent-%COMP%], .query-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.query-right[_ngcontent-%COMP%]{margin-left:auto;justify-content:flex-end}.btn-primary[_ngcontent-%COMP%]{padding:12px 24px;border:none;border-radius:6px;cursor:pointer;background-color:var(--app-brand-primary);color:var(--app-button-text);font-size:16px;font-weight:500;transition:all .3s ease;box-shadow:0 2px 4px #0000001a}.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-brand-primary-dark);box-shadow:0 4px 8px #00000026;transform:translateY(-1px)}.btn-primary[_ngcontent-%COMP%]:disabled{background-color:var(--app-border-soft);cursor:not-allowed;transform:none}.btn-secondary[_ngcontent-%COMP%]{padding:12px 24px;border:none;border-radius:6px;cursor:pointer;background-color:var(--app-text-soft);color:var(--app-button-text);font-size:16px;font-weight:500;transition:all .3s ease;box-shadow:0 2px 4px #0000001a}.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-text-muted-light);box-shadow:0 4px 8px #00000026;transform:translateY(-1px)}.btn-secondary[_ngcontent-%COMP%]:disabled{background-color:var(--app-border-soft);cursor:not-allowed;transform:none;opacity:.6}.btn-default[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-text-soft);border:1px solid var(--app-border-soft);padding:12px 24px;border-radius:6px;cursor:pointer;font-size:16px;font-weight:500;transition:all .3s ease}.btn-default[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-chip-background-strong);border-color:var(--app-border-default)}.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]{padding:20px;margin:20px 0;border-radius:8px;text-align:center}.loading[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-brand-primary);font-size:16px}.error[_ngcontent-%COMP%]{background-color:var(--app-danger-background);color:var(--app-status-error);font-size:16px;font-weight:500}.empty-state[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-text-soft);font-size:16px}.info-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:20px 0;padding-bottom:10px;border-bottom:2px solid var(--app-brand-primary)}.info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:var(--app-text-strong);font-size:22px}.count-badge[_ngcontent-%COMP%]{background:var(--app-brand-primary);color:var(--app-text-on-accent);padding:6px 16px;border-radius:20px;font-size:14px;font-weight:600}.form-card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;margin:20px 0}.form-card[_ngcontent-%COMP%]{border:1px solid var(--app-border-soft);border-radius:12px;padding:20px;background:var(--app-background-surface);box-shadow:0 2px 8px #00000014;transition:all .3s ease}.form-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px #0000001f;transform:translateY(-2px)}.form-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.form-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--app-brand-primary);font-size:28px;width:28px;height:28px}.form-card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;color:var(--app-text-primary);font-size:20px;font-weight:600}.description[_ngcontent-%COMP%]{color:var(--app-text-soft);margin:10px 0;line-height:1.5;font-size:14px}.form-card-url[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--app-link-text);text-decoration:none;margin:10px 0;padding:8px 12px;background:var(--app-background-soft);border-radius:6px;font-size:13px;word-break:break-all;transition:background .2s ease}.form-card-url[_ngcontent-%COMP%]:hover{background:var(--app-chip-background-strong);text-decoration:underline}.form-card-url[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;flex-shrink:0}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin:15px 0}.tag[_ngcontent-%COMP%]{background:var(--app-chip-background);color:var(--app-text-primary);padding:4px 12px;border-radius:16px;font-size:12px;font-weight:500;border:1px solid var(--app-border-soft)}.metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;margin-top:15px;padding-top:15px;border-top:1px solid var(--app-border-soft)}.metadata[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:12px}.form-card-id[_ngcontent-%COMP%]{margin-top:10px}.form-card-id[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:11px;font-family:Courier New,monospace}.form-card-actions[_ngcontent-%COMP%]{margin-top:12px;display:flex;flex-wrap:wrap;gap:8px}.error-diag[_ngcontent-%COMP%]{margin-top:15px;text-align:left}.error-diag[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:700}.error-diag-content[_ngcontent-%COMP%]{margin-top:10px;background:var(--app-background-soft);padding:15px;border-radius:4px;color:var(--app-text-primary)}.error-diag-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0}.error-diag-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:none;border-top:1px solid var(--app-border-soft);margin:10px 0}"]})};var Lc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[le]})}return i})();var cr=class i{constructor(n,e){this.sessionAppSvc=n;this.router=e}sessionAppSvc;router;ngOnInit(){if(this.sessionAppSvc.hasSession()){this.router.navigate(["/secure"]);return}this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||i)(q(ee),q(fe))};static \u0275cmp=y({type:i,selectors:[["app-session-entry"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};var Wi=class i{constructor(n,e){this.sessionAppSvc=n;this.router=e}sessionAppSvc;router;canActivate(){return this.sessionAppSvc.hasSession()?this.router.parseUrl("/secure/home"):!0}static \u0275fac=function(e){return new(e||i)(Se(ee),Se(fe))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Yi=class i{constructor(n){this.sessionAppSvc=n}sessionAppSvc;canMatch(n,e){return this.sessionAppSvc.hasSession()}static \u0275fac=function(e){return new(e||i)(Se(ee))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var kn=class i{constructor(n,e){this.router=n;this.sessionAppSvc=e}router;sessionAppSvc;canActivate(){return this.validateSession()}canActivateChild(){return this.validateSession()}validateSession(){return this.sessionAppSvc.hasSession()?!0:(this.router.navigate(["/login"]),!1)}static \u0275fac=function(e){return new(e||i)(Se(fe),Se(ee))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Zi=class i{constructor(n){this.sessionAppSvc=n}sessionAppSvc;canMatch(n,e){return!this.sessionAppSvc.hasSession()}static \u0275fac=function(e){return new(e||i)(Se(ee))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ki=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Xa=class extends Ki{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,o,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Jt=class extends Ki{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Qa=class extends Ki{element;constructor(n){super(),this.element=n instanceof j?n.nativeElement:n}},Ja=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Xa)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Jt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Qa)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Xi=class extends Ja{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(Bs,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=n.injector||this._defaultInjector||pe.NULL,r=o.get(Ke,t.injector);e=nl(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var zc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({})}return i})();var Au=20,Qi=(()=>{class i{_ngZone=d(H);_platform=d(ce);_renderer=d(it).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Au){return this._platform.isBrowser?new tt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(qr(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):T()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(de(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=ct(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yy=(()=>{class i{elementRef=d(j);scrollDispatcher=d(Qi);ngZone=d(H);dir=d(ft,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=d(ke);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&ri()!=yt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ri()==yt.INVERTED?e.left=e.right:ri()==yt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;rr()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:t:e=="end"&&(e=a?t:o),a&&ri()==yt.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&ri()==yt.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Du=20,en=(()=>{class i{_platform=d(ce);_listeners;_viewportSize=null;_change=new R;_document=d(ue);constructor(){let e=d(H),t=d(it).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=Du){return e>0?this._change.pipe(qr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var si=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({})}return i})(),es=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[le,si,le,si]})}return i})();var Bc=rr();function qc(i){return new dr(i.get(en),i.get(ue))}var dr=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=xe(-this._previousScrollPosition.left),n.style.top=xe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Bc&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Bc&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Wc(i,n){return new mr(i.get(Qi),i.get(H),i.get(en),n)}var mr=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(de(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ji=class{enable(){}disable(){}attach(){}};function ts(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return t||o||r||a})}function jc(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return t||o||r||a})}function li(i,n){return new pr(i.get(Qi),i.get(en),i.get(H),n)}var pr=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();ts(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Yc=(()=>{class i{_injector=d(pe);constructor(){}noop=()=>new Ji;close=e=>Wc(this._injector,e);block=()=>qc(this._injector);reposition=e=>li(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),tn=class{positionStrategy;scrollStrategy=new Ji;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var ur=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Zc=(()=>{class i{_attachedOverlays=[];_document=d(ue);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Kc=(()=>{class i extends Zc{_ngZone=d(H);_renderer=d(it).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xc=(()=>{class i extends Zc{_platform=d(ce);_ngZone=d(H);_renderer=d(it).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=je(e)};_clickListener=e=>{let t=je(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],u=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,u))){if(Uc(s.overlayElement,t)||Uc(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>u.next(e)):u.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Uc(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Qc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Jc=(()=>{class i{_platform=d(ce);_containerElement;_document=d(ue);_styleLoader=d(ze);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ga()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Ga()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Qc)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ns=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function is(i){return i&&i.nodeType===1}var hr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=Oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,t,o,r,a,s,u,h,f=!1,_,A){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=u,this._outsideClickDispatcher=h,this._animationsDisabled=f,this._injector=_,this._renderer=A,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=b(b({},this._config),n),this._updateElementSize()}setDirection(n){this._config=te(b({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=xe(this._config.width),n.height=xe(this._config.height),n.minWidth=xe(this._config.minWidth),n.minHeight=xe(this._config.minHeight),n.maxWidth=xe(this._config.maxWidth),n.maxHeight=xe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;is(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ns(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let o=Ft(e||[]).filter(r=>!!r);o.length&&(t?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=pt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Vc="cdk-overlay-connected-position-bounding-box",Fu=/([A-Za-z%]+)$/;function ci(i,n){return new fr(n,i.get(en),i.get(ue),i.get(ce),i.get(Jc))}var fr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=Oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Vc),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let u=this._getOriginPoint(n,o,s),h=this._getOverlayPoint(u,e,s),f=this._getOverlayFit(h,e,t,s);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,u);return}if(this._canFitWithFlexibleDimensions(f,h,t)){r.push({position:s,origin:u,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(u,s)});continue}(!a||a.overlayFit.visibleArea<f.visibleArea)&&(a={overlayFit:f,overlayPoint:h,originPoint:u,position:s,overlayRect:e})}if(r.length){let s=null,u=-1;for(let h of r){let f=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);f>u&&(u=f,s=h)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Mn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Vc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:is(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;o=t.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=n.top+n.height/2:r=t.originY=="top"?n.top:n.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,e,t,o){let r=Gc(e),{x:a,y:s}=n,u=this._getOffset(o,"x"),h=this._getOffset(o,"y");u&&(a+=u),h&&(s+=h);let f=0-a,_=a+r.width-t.width,A=0-s,$=s+r.height-t.height,W=this._subtractOverflows(r.width,f,_),Y=this._subtractOverflows(r.height,A,$),Ce=W*Y;return{visibleArea:Ce,isCompletelyWithinViewport:r.width*r.height===Ce,fitsInViewportVertically:Y===r.height,fitsInViewportHorizontally:W==r.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Hc(this._overlayRef.getConfig().minHeight),s=Hc(this._overlayRef.getConfig().minWidth),u=n.fitsInViewportVertically||a!=null&&a<=o,h=n.fitsInViewportHorizontally||s!=null&&s<=r;return u&&h}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Gc(e),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),s=Math.max(n.y+o.height-r.height,0),u=Math.max(r.top-t.top-n.y,0),h=Math.max(r.left-t.left-n.x,0),f=0,_=0;return o.width<=r.width?f=h||-a:f=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,o.height<=r.height?_=u||-s:_=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:f,y:_},{x:n.x+f,y:n.y+_}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Nu(this._lastScrollVisibility,t)){let o=new ur(n,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=n.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-s+this._getViewportMarginTop();else{let $=Math.min(t.bottom-n.y+t.top,n.y),W=this._lastBoundingBoxSize.height;r=$*2,a=n.y-$,r>W&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-W/2)}let u=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,h=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,f,_,A;if(h)A=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=n.x-this._getViewportMarginStart();else if(u)_=n.x,f=t.right-n.x-this._getViewportMarginEnd();else{let $=Math.min(t.right-n.x+t.left,n.x),W=this._lastBoundingBoxSize.width;f=$*2,_=n.x-$,f>W&&!this._isInitialRender&&!this._growAfterOpen&&(_=n.x-W/2)}return{top:a,left:_,bottom:s,right:A,width:f,height:r}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=xe(t.width),o.height=xe(t.height),o.top=xe(t.top)||"auto",o.bottom=xe(t.bottom)||"auto",o.left=xe(t.left)||"auto",o.right=xe(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=xe(r)),a&&(o.maxWidth=xe(a))}this._lastBoundingBoxSize=t,Mn(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Mn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Mn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let f=this._viewportRuler.getViewportScrollPosition();Mn(t,this._getExactOverlayY(e,n,f)),Mn(t,this._getExactOverlayX(e,n,f))}else t.position="static";let s="",u=this._getOffset(e,"x"),h=this._getOffset(e,"y");u&&(s+=`translateX(${u}px) `),h&&(s+=`translateY(${h}px)`),t.transform=s.trim(),a.maxHeight&&(o?t.maxHeight=xe(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=xe(a.maxWidth):r&&(t.maxWidth="")),Mn(this._pane.style,t)}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=xe(r.y);return o}_getExactOverlayX(n,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=xe(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:jc(n,t),isOriginOutsideView:ts(n,t),isOverlayClipped:jc(e,t),isOverlayOutsideView:ts(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ft(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof j)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Mn(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Hc(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(Fu);return!e||e==="px"?parseFloat(n):null}return i||null}function Gc(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Nu(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var $c="cdk-global-overlay-wrapper";function ed(i){return new gr}var gr=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add($c),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=t,u=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),h=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),f=this._xPosition,_=this._xOffset,A=this._overlayRef.getConfig().direction==="rtl",$="",W="",Y="";u?Y="flex-start":f==="center"?(Y="center",A?W=_:$=_):A?f==="left"||f==="end"?(Y="flex-end",$=_):(f==="right"||f==="start")&&(Y="flex-start",W=_):f==="left"||f==="start"?(Y="flex-start",$=_):(f==="right"||f==="end")&&(Y="flex-end",W=_),n.position=this._cssPosition,n.marginLeft=u?"0":$,n.marginTop=h?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=u?"0":W,e.justifyContent=Y,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove($c),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},td=(()=>{class i{_injector=d(pe);constructor(){}global(){return ed()}flexibleConnectedTo(e){return ci(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),nd=new P("OVERLAY_DEFAULT_CONFIG");function di(i,n){i.get(ze).load(Qc);let e=i.get(Jc),t=i.get(ue),o=i.get(ye),r=i.get(Tn),a=i.get(ft),s=i.get(ke,null,{optional:!0})||i.get(it).createRenderer(null,null),u=new tn(n),h=i.get(nd,null,{optional:!0})?.usePopover??!0;u.direction=u.direction||a.value,"showPopover"in t.body?u.usePopover=n?.usePopover??h:u.usePopover=!1;let f=t.createElement("div"),_=t.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),_.appendChild(f),u.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let A=u.usePopover?u.positionStrategy?.getPopoverInsertionPoint?.():null;return is(A)?A.after(_):A?.type==="parent"?A.element.appendChild(_):e.getContainerElement().appendChild(_),new hr(new Xi(f,r,i),_,f,u,i.get(H),i.get(Kc),t,i.get(Fn),i.get(Xc),n?.disableAnimations??i.get(fo,null,{optional:!0})==="NoopAnimations",i.get(Ke),s)}var id=(()=>{class i{scrollStrategies=d(Yc);_positionBuilder=d(td);_injector=d(pe);constructor(){}create(e){return di(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var eo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({providers:[id],imports:[le,zc,es,es]})}return i})();var Lu=["mat-menu-item",""],zu=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bu=["mat-icon, [matMenuItemIcon]","*"];function ju(i,n){i&1&&(Re(),l(0,"svg",2),S(1,"polygon",3),c())}var Uu=["*"];function Vu(i,n){if(i&1){let e=ie();ve(0,"div",0),Gs("click",function(){F(e);let o=g();return N(o.closed.emit("click"))})("animationstart",function(o){F(e);let r=g();return N(r._onAnimationStart(o.animationName))})("animationend",function(o){F(e);let r=g();return N(r._onAnimationDone(o.animationName))})("animationcancel",function(o){F(e);let r=g();return N(r._onAnimationDone(o.animationName))}),ve(1,"div",1),V(2),Me()()}if(i&2){let e=g();Xe(e._classList),O("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),He("id",e.panelId),D("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var rs=new P("MAT_MENU_PANEL"),En=(()=>{class i{_elementRef=d(j);_document=d(ue);_focusMonitor=d(Kt);_parentMenu=d(rs,{optional:!0});_changeDetectorRef=d(Ee);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new R;_focused=new R;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(ze).load(Lt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<t.length;o++)t[o].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,o){t&1&&C("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),t&2&&(D("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),O("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",U],disableRipple:[2,"disableRipple","disableRipple",U]},exportAs:["matMenuItem"],attrs:Lu,ngContentSelectors:Bu,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,o){t&1&&(be(zu),V(0),l(1,"span",0),V(2,1),c(),S(3,"div",1),k(4,ju,2,0,":svg:svg",2)),t&2&&(p(3),v("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),p(),M(o._triggersSubmenu?4:-1))},dependencies:[ar],encapsulation:2,changeDetection:0})}return i})();var Hu=new P("MatMenuContent");var Gu=new P("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),os="_mat-menu-enter",vr="_mat-menu-exit",nn=(()=>{class i{_elementRef=d(j);_changeDetectorRef=d(Ee);_injector=d(pe);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=De();_allItems;_directDescendantItems=new sn;_classList={};_panelAnimationState="void";_animationDone=new R;_isAnimating=x(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,o=b({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Q;close=this.closed;panelId=d(ye).getId("mat-menu-panel-");constructor(){let e=d(Gu);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new wn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Fe(this._directDescendantItems),we(e=>Ze(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let o=e.toArray(),r=Math.max(0,Math.min(o.length-1,t.activeItemIndex||0));o[r]&&!o[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Fe(this._directDescendantItems),we(t=>Ze(...t.map(o=>o._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,o=this._keyManager;switch(t){case 27:et(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=pt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(e).setFirstItemActive(),!o.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=te(b({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===vr;(t||e===os)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===os||e===vr)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(vr),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?os:vr)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Fe(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-menu"]],contentQueries:function(t,o,r){if(t&1&&ot(r,Hu,5)(r,En,5)(r,En,4),t&2){let a;L(a=z())&&(o.lazyContent=a.first),L(a=z())&&(o._allItems=a),L(a=z())&&(o.items=a)}},viewQuery:function(t,o){if(t&1&&Ge(ln,5),t&2){let r;L(r=z())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(t,o){t&2&&D("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",U],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:U(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Te([{provide:rs,useExisting:i}])],ngContentSelectors:Uu,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,o){t&1&&(be(),go(0,Vu,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),$u=new P("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(pe);return()=>li(i)}});var mi=new WeakMap,qu=(()=>{class i{_canHaveBackdrop;_element=d(j);_viewContainerRef=d(Rt);_menuItemInstance=d(En,{optional:!0,self:!0});_dir=d(ft,{optional:!0});_focusMonitor=d(Kt);_ngZone=d(H);_injector=d(pe);_scrollStrategy=d($u);_changeDetectorRef=d(Ee);_animationsDisabled=De();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Oe.EMPTY;_menuCloseSubscription=Oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=d(rs,{optional:!0});this._parentMaterialMenu=t instanceof nn?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&mi.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let o=mi.get(t);mi.set(t,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(t),a=r.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof nn&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(oe(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,o=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof nn&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(dt(1)).subscribe(()=>{t.detach(),mi.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(t.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&mi.delete(o),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=di(this._injector,t),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof nn&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(e){return new tn({positionStrategy:ci(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,a)})})}_setPosition(e,t){let[o,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,h]=[a,s],[f,_]=[o,r],A=0;if(this._triggersSubmenu()){if(_=o=e.xPosition==="before"?"start":"end",r=f=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let $=this._parentMaterialMenu.items.first;this._parentInnerPadding=$?$._getHostElement().offsetTop:0}A=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=a==="top"?"bottom":"top",h=s==="top"?"bottom":"top");t.withPositions([{originX:o,originY:u,overlayX:f,overlayY:a,offsetY:A},{originX:r,originY:u,overlayX:_,overlayY:a,offsetY:A},{originX:o,originY:h,overlayX:f,overlayY:s,offsetY:-A},{originX:r,originY:h,overlayX:_,overlayY:s,offsetY:-A}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:T(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(de(a=>this._menuOpen&&a!==this._menuItemInstance)):T();return Ze(e,o,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Jt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return mi.get(e)===this}_triggerIsAriaDisabled(){return U(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Xr()};static \u0275dir=G({type:i})}return i})(),_r=(()=>{class i extends qu{_cleanupTouchstart;_hoverSubscription=Oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Q;onMenuOpen=this.menuOpened;menuClosed=new Q;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d(ke);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{xn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){yn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,o){t&1&&C("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&D("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu==null?null:o.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ut]})}return i})();var yr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[Qt,eo,le,si]})}return i})();var rd=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=Nt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Nt(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(D("aria-orientation",o.vertical?"vertical":"horizontal"),O("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Wu=(i,n)=>n.url;function Yu(i,n){if(i&1&&(l(0,"mat-icon"),m(1),c()),i&2){let e=g(2).$implicit;p(),I(e.icon)}}function Zu(i,n){if(i&1&&(l(0,"span",4),k(1,Yu,2,1,"mat-icon"),m(2),c()),i&2){let e=g().$implicit;p(),M(e.icon?1:-1),p(),X(" ",e.label," ")}}function Ku(i,n){if(i&1&&(l(0,"mat-icon"),m(1),c()),i&2){let e=g(2).$implicit;p(),I(e.icon)}}function Xu(i,n){if(i&1&&(l(0,"a",5),k(1,Ku,2,1,"mat-icon"),m(2),c()),i&2){let e=g().$implicit;v("routerLink",e.url),p(),M(e.icon?1:-1),p(),X(" ",e.label," ")}}function Qu(i,n){if(i&1&&(l(0,"li",3),k(1,Zu,3,2,"span",4)(2,Xu,3,3,"a",5),c()),i&2){let e=n.$implicit,t=g();O("is-active",e.active)("is-active--guest",e.active&&t.status==="guest")("is-active--session",e.active&&t.status==="session"),p(),M(e.active?1:2)}}var xr=class i{constructor(n,e){this.router=n;this.activatedRoute=e}router;activatedRoute;homeLabel="Home";homeUrl="/home";showHome=!0;status="";breadcrumbs=[];destroy$=new R;ngOnInit(){this.rebuildBreadcrumbs(),this.router.events.pipe(de(n=>n instanceof lt),oe(this.destroy$)).subscribe(()=>this.rebuildBreadcrumbs())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}rebuildBreadcrumbs(){let n=this.homeLabel.trim().toLocaleLowerCase(),e=[],t=this.activatedRoute.root,o="";for(;t;){let h=t.children.find(Ce=>Ce.outlet==="primary");if(!h)break;let f=h.snapshot.url.map(Ce=>Ce.path).join("/");f&&(o+=`/${f}`);let _=h.snapshot.data.breadcrumb??h.snapshot.data.title,A=typeof _=="string"&&_.trim().length>0?_.trim():void 0,$=h.snapshot.data.icon,W=typeof $=="string"&&$.trim().length>0?$.trim():void 0,Y=A?.toLocaleLowerCase()===n;A&&o&&!Y&&e.push({label:A,url:o,icon:W}),t=h}let r=this.showHome&&this.homeUrl.trim()!=="",a={label:this.homeLabel,url:this.normalizeUrl(this.homeUrl),icon:"home"},s=r?[a,...e]:e,u=[];for(let h of s){let f=te(b({},h),{url:this.normalizeUrl(h.url)});u.some(A=>A.url===f.url)||u.push(f)}this.breadcrumbs=u.map((h,f)=>te(b({},h),{icon:h.icon,active:f===u.length-1})),this.breadcrumbs.length===0&&r&&(this.breadcrumbs=[{label:this.homeLabel,url:this.normalizeUrl(this.homeUrl),active:!0,icon:"home"}])}normalizeUrl(n){if(!n)return"/";let e=n.startsWith("/")?n:`/${n}`;return e.length>1?e.replace(/\/+$/,""):e}static \u0275fac=function(e){return new(e||i)(q(fe),q(_t))};static \u0275cmp=y({type:i,selectors:[["app-route-breadcrumbs"]],inputs:{homeLabel:"homeLabel",homeUrl:"homeUrl",showHome:"showHome",status:"status"},decls:4,vars:0,consts:[["aria-label","Migas de pan",1,"breadcrumbs"],[1,"breadcrumbs-list"],[1,"breadcrumbs-item",3,"is-active","is-active--guest","is-active--session"],[1,"breadcrumbs-item"],[1,"breadcrumbs-link"],[1,"breadcrumbs-link",3,"routerLink"]],template:function(e,t){e&1&&(l(0,"nav",0)(1,"ol",1),re(2,Qu,3,7,"li",2,Wu),c()()),e&2&&(p(2),ae(t.breadcrumbs))},dependencies:[Gt,Je,Qe],styles:['[_nghost-%COMP%]{display:block}.breadcrumbs[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;max-width:calc(100vw - 3rem);justify-content:flex-start;align-items:center;gap:.5rem;pointer-events:none}.breadcrumbs-list[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;list-style:none;margin:0;padding:0}.breadcrumbs-item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;pointer-events:none}.breadcrumbs-item[_ngcontent-%COMP%] + .breadcrumbs-item[_ngcontent-%COMP%]:before{content:"\\2022";margin-inline:.45rem;color:var(--app-chip-text);opacity:.55}.breadcrumbs-link[_ngcontent-%COMP%]{height:var(--app-pills-height);padding-inline:var(--app-pills-padding-inline);border-radius:var(--app-pills-radius);font-size:var(--app-pills-font-size);display:inline-flex;align-items:center;gap:.35rem;background:var(--app-chip-background);color:var(--app-chip-text);border:1px solid var(--app-chip-border);box-sizing:border-box;font-weight:600;pointer-events:auto;opacity:.7;text-decoration:none;transition:opacity .2s ease,background-color .2s ease,color .2s ease,border-color .2s ease}.breadcrumbs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);line-height:1;height:var(--app-icon-size);width:var(--app-icon-size);vertical-align:middle}.breadcrumbs-link[_ngcontent-%COMP%]:hover, .breadcrumbs-link[_ngcontent-%COMP%]:focus-within{opacity:1;background:var(--app-chip-background-strong)}.breadcrumbs-item.is-active[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{font-weight:700;opacity:1}.breadcrumbs-item.is-active--guest[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{border-color:var(--app-status-error)}.breadcrumbs-item.is-active--session[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{border-color:var(--app-status-success)}']})};var Cr=["default","darkdev","daydev","retrodev","pasteldev"],ad="droguier_cookies_template",wr=class i{sessionAppSvc=d(ee);doc=d(ue);platformId=d(Ne);template=x(this.resolve());templates=Cr;constructor(){this.apply(this.template())}setTemplate(n){Cr.includes(n)&&(this.isBrowser()&&localStorage.setItem(ad,n),this.template.set(n),this.apply(n))}resolve(){if(this.isBrowser()){let e=localStorage.getItem(ad);if(e&&Cr.includes(e))return e}let n=this.sessionAppSvc.sessionUser()?.template;return Cr.includes(n)?n:"default"}apply(n){this.doc.documentElement.setAttribute("data-template",n)}isBrowser(){return Le(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ju=(i,n)=>n.key;function eh(i,n){if(i&1){let e=ie();l(0,"button",4),C("click",function(){let o=F(e).$implicit,r=g();return N(r.setTemplate(o.key))}),l(1,"mat-icon"),m(2),c(),l(3,"span"),m(4),c()()}if(i&2){let e=n.$implicit,t=g();O("active",t.current()===e.key),p(2),I(t.current()===e.key?"check":""),p(2),I(e.label)}}var th={default:"Default",darkdev:"Dark",daydev:"Day",retrodev:"Retro",pasteldev:"Pastel"},Sr=class i{templateService=d(wr);current=this.templateService.template;templateOptions=this.templateService.templates.map(n=>({key:n,label:th[n]}));setTemplate(n){this.templateService.setTemplate(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-template-switcher"]],decls:7,vars:1,consts:[["templateMenu","matMenu"],["type","button","aria-label","Cambiar template","title","Cambiar template",1,"template-switcher-trigger",3,"matMenuTriggerFor"],["xPosition","before",1,"template-switcher-menu"],["mat-menu-item","",3,"active"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1&&(l(0,"button",1)(1,"mat-icon"),m(2,"palette"),c()(),l(3,"mat-menu",2,0),re(5,eh,5,4,"button",3,Ju),c()),e&2){let o=rt(4);v("matMenuTriggerFor",o),p(5),ae(t.templateOptions)}},dependencies:[yr,nn,En,_r,$t,Qe],styles:[".template-switcher-trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:2.6rem;height:2.6rem;padding:0 var(--app-pills-padding-inline);border:0;border-radius:var(--app-pills-radius);appearance:none;-webkit-appearance:none;box-sizing:border-box;background:var(--app-chip-background);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:var(--app-text-primary);cursor:pointer;opacity:1;flex-shrink:0;pointer-events:auto;transition:opacity .2s ease,background-color .2s ease,color .2s ease}.template-switcher-trigger[_ngcontent-%COMP%]:hover, .template-switcher-trigger[_ngcontent-%COMP%]:focus-visible{opacity:1}.template-switcher-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);width:var(--app-icon-size);height:var(--app-icon-size);line-height:1}"]})};var nh=()=>["/"],ih=()=>({exact:!0}),oh=()=>["/public/eirl_services"],rh=()=>["/public/resume"],ah=()=>["/public/contact-us"],sh=i=>[i],lh=(i,n)=>n.label,ch=(i,n)=>n.link;function dh(i,n){if(i&1&&(l(0,"a",16)(1,"mat-icon"),m(2),c(),l(3,"span"),m(4),c()()),i&2){let e=n.$implicit;v("routerLink",Ws(3,sh,e.link)),p(2),I((e.icon==null?null:e.icon.name)??""),p(2),I(e.name)}}function mh(i,n){i&1&&S(0,"mat-divider")}function ph(i,n){if(i&1&&(l(0,"span",15),m(1),c(),re(2,dh,5,5,"a",16,ch),k(4,mh,1,0,"mat-divider")),i&2){let e=n.$implicit,t=n.$index,o=n.$count;p(),I(e.label),p(),ae(e.items),p(2),M(t!==o-1?4:-1)}}var ui=class i{mode="guest";router=d(fe);sessionAppSvc=d(ee);staticsAppSvc=d(on);get isSession(){return this.mode==="session"}get homeUrl(){return this.mode==="session"?"/secure/home":"/home"}get modeLabel(){return this.mode==="session"?"Modo sesi\xF3n activa":"Modo sin sesi\xF3n"}get brandName(){return Ie.app_name}get brandInitial(){return Ie.app_name.replace(/[^A-Za-z0-9]/g,"").charAt(0).toUpperCase()||"D"}get menuItems(){let n=this.staticsAppSvc.getMenuNavigationApp(),e=[],t=n.filter(o=>o.visible&&!o.secure);if(t.length>0&&e.push({label:"P\xFAblico",items:t}),this.isSession){let o=n.filter(r=>r.visible&&r.secure);o.length>0&&e.push({label:"Seguro",items:o})}return e}async onAction(){if(this.mode==="session"){this.sessionAppSvc.clearSession(),await this.router.navigate(["/home"]);return}await this.goToLoginOrRevalidate()}async goToLoginOrRevalidate(){if(this.sessionAppSvc.hasSession()){await this.router.navigate(["/revalidar-sesion"]);return}await this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-topbar"]],inputs:{mode:"mode"},decls:44,vars:42,consts:[["appMenu","matMenu"],["xPosition","before",1,"topbar-menu"],["mat-menu-item","","type","button",3,"click"],[1,"topbar-left"],["type","button","aria-label","Abrir men\xFA de navegaci\xF3n",1,"topbar-menu-btn",3,"matMenuTriggerFor"],["routerLinkActive","topbar-brand--active","aria-label","Ir al inicio",1,"topbar-brand",3,"routerLink","routerLinkActiveOptions"],["aria-hidden","true",1,"topbar-brand-mark"],[1,"topbar-brand-name"],[3,"showHome","status"],[1,"topbar-right"],["routerLinkActive","is-active","aria-label","Ir a servicios",1,"topbar-button",3,"routerLink"],["routerLinkActive","is-active","aria-label","Ir a resumen",1,"topbar-button",3,"routerLink"],["routerLinkActive","is-active","aria-label","Ir a contacto",1,"topbar-button",3,"routerLink"],["aria-live","polite",1,"mode-pill"],["type","button",1,"topbar-action",3,"click"],[1,"topbar-menu-group"],["mat-menu-item","","routerLinkActive","is-active",3,"routerLink"]],template:function(e,t){if(e&1&&(l(0,"mat-menu",1,0),re(2,ph,5,2,null,null,lh),S(4,"mat-divider"),l(5,"button",2),C("click",function(){return t.onAction()}),l(6,"mat-icon"),m(7),c(),l(8,"span"),m(9),c()()(),l(10,"div",3)(11,"button",4)(12,"mat-icon"),m(13,"menu"),c(),l(14,"span"),m(15,"Men\xFA"),c()(),l(16,"a",5)(17,"span",6),m(18),c(),l(19,"span",7),m(20),c()(),S(21,"app-route-breadcrumbs",8),c(),l(22,"div",9)(23,"a",10)(24,"mat-icon"),m(25,"storefront"),c(),l(26,"span"),m(27,"Servicios"),c()(),l(28,"a",11)(29,"mat-icon"),m(30,"description"),c(),l(31,"span"),m(32,"Resumen"),c()(),l(33,"a",12)(34,"mat-icon"),m(35,"mail"),c(),l(36,"span"),m(37,"Contacto"),c()(),l(38,"span",13),m(39),c(),S(40,"app-template-switcher"),l(41,"button",14),C("click",function(){return t.onAction()}),l(42,"mat-icon"),m(43),c()()()),e&2){let o=rt(1);p(2),ae(t.menuItems),p(5),I(t.isSession?"logout":"login"),p(2),I(t.isSession?"Cerrar sesi\xF3n":"Iniciar sesi\xF3n"),p(),O("topbar-left--guest",!t.isSession)("topbar-left--session",t.isSession),p(),v("matMenuTriggerFor",o),p(5),v("routerLink",An(37,nh))("routerLinkActiveOptions",An(38,ih)),p(2),I(t.brandInitial),p(2),I(t.brandName),p(),v("showHome",!1)("status",t.mode),p(),O("topbar-right--guest",!t.isSession)("topbar-right--session",t.isSession),p(),O("is-active--guest",!t.isSession)("is-active--session",t.isSession),v("routerLink",An(39,oh)),p(5),O("is-active--guest",!t.isSession)("is-active--session",t.isSession),v("routerLink",An(40,rh)),p(5),O("is-active--guest",!t.isSession)("is-active--session",t.isSession),v("routerLink",An(41,ah)),p(6),I(t.modeLabel),p(2),O("topbar-action--logout",t.isSession),D("aria-label",t.isSession?"Cerrar sesi\xF3n":"Iniciar sesi\xF3n"),p(2),I(t.isSession?"logout":"login")}},dependencies:[Je,Aa,Qe,yr,nn,En,_r,rd,xr,Sr],styles:["[_nghost-%COMP%]{display:contents}.topbar-left[_ngcontent-%COMP%]{z-index:2000;position:fixed;top:1rem;left:1.5rem;display:flex;align-items:center;gap:.5rem;box-sizing:border-box;padding:.35rem .5rem;border-radius:var(--app-pills-radius);background:transparent;pointer-events:none}.topbar-left--guest[_ngcontent-%COMP%]{border-radius:var(--app-pills-radius);box-shadow:0 0 0 2px var(--app-status-error)}.topbar-left--session[_ngcontent-%COMP%]{border-radius:var(--app-pills-radius);box-shadow:0 0 0 2px var(--app-status-success)}.topbar-brand[_ngcontent-%COMP%], .topbar-menu-btn[_ngcontent-%COMP%], .topbar-button[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%], .mode-pill[_ngcontent-%COMP%]{height:2.6rem;display:inline-flex;align-items:center;gap:.5rem;padding:.3rem .75rem .3rem .35rem;border:1px solid var(--app-border-inverse);border-radius:var(--app-pills-radius);appearance:none;-webkit-appearance:none;background:color-mix(in srgb,var(--app-background-header) 55%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:var(--app-text-primary);box-sizing:border-box;font-size:var(--app-pills-font-size);font-weight:600;pointer-events:auto;opacity:1;flex-shrink:0;box-shadow:0 4px 18px -6px var(--app-shadow-strong);transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,border-color .2s ease,transform .2s ease}.topbar-brand[_ngcontent-%COMP%]:hover, .topbar-brand[_ngcontent-%COMP%]:focus-visible, .topbar-menu-btn[_ngcontent-%COMP%]:hover, .topbar-menu-btn[_ngcontent-%COMP%]:focus-visible, .topbar-button[_ngcontent-%COMP%]:hover, .topbar-button[_ngcontent-%COMP%]:focus-visible, .topbar-action[_ngcontent-%COMP%]:hover, .topbar-action[_ngcontent-%COMP%]:focus-visible, .mode-pill[_ngcontent-%COMP%]:hover, .mode-pill[_ngcontent-%COMP%]:focus-visible{background:color-mix(in srgb,var(--app-background-header) 80%,transparent);border-color:var(--app-border-inverse-strong);box-shadow:0 8px 24px -8px var(--app-shadow-strong);transform:translateY(-1px)}.topbar-brand[_ngcontent-%COMP%]{text-decoration:none}.topbar-brand--active[_ngcontent-%COMP%]   .topbar-brand-mark[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-success)}.topbar-brand-mark[_ngcontent-%COMP%]{width:2rem;height:2rem;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700;color:var(--app-text-on-accent);background:var(--app-gradient-primary)}.topbar-brand-name[_ngcontent-%COMP%]{font-weight:600;font-size:var(--app-pills-font-size)}.topbar-menu-btn[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;justify-content:center;padding-inline:.55rem;background:color-mix(in srgb,var(--app-chip-background) 60%,transparent)}.topbar-right[_ngcontent-%COMP%]{z-index:2000;position:fixed;top:1rem;right:1.5rem;display:flex;justify-content:flex-end;align-items:center;box-sizing:border-box;gap:.5rem;padding:.35rem .5rem;border-radius:var(--app-pills-radius);background:transparent;pointer-events:none}.topbar-right--guest[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-error)}.topbar-right--session[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-success)}.topbar-button[_ngcontent-%COMP%]{text-decoration:none}.topbar-button.is-active.is-active--guest[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-chip-background-strong) 80%,transparent);box-shadow:inset 0 0 0 2px var(--app-status-error),0 4px 18px -6px var(--app-shadow-strong)}.topbar-button.is-active.is-active--session[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-chip-background-strong) 80%,transparent);box-shadow:inset 0 0 0 2px var(--app-status-success),0 4px 18px -6px var(--app-shadow-strong)}.topbar-action[_ngcontent-%COMP%]{justify-content:center;padding-inline:.6rem;cursor:pointer}.mode-pill[_ngcontent-%COMP%]{justify-content:center;padding-inline:.55rem}.topbar-action--logout[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-danger-background) 82%,transparent);color:var(--app-danger-text);box-shadow:0 6px 16px var(--app-shadow)}.topbar-action--logout[_ngcontent-%COMP%]:hover, .topbar-action--logout[_ngcontent-%COMP%]:focus-visible{background:var(--app-danger-background-hover)}.topbar-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .topbar-menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);width:var(--app-icon-size);height:var(--app-icon-size);line-height:var(--app-icon-size)}@media(max-width:1024px){.topbar-right[_ngcontent-%COMP%]{top:.75rem;right:.75rem}.topbar-button[_ngcontent-%COMP%], .mode-pill[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%]{display:none}}@media(max-width:650px){.topbar-left[_ngcontent-%COMP%]{top:.75rem;left:.75rem;flex-wrap:wrap;row-gap:.35rem;max-width:calc(100vw - 1.5rem)}.topbar-brand-name[_ngcontent-%COMP%]{display:none}}"]})};var hi=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-guest-layout"]],decls:4,vars:0,consts:[[1,"guest-layout"],["mode","guest"],[1,"guest-content"]],template:function(e,t){e&1&&(l(0,"section",0),S(1,"app-topbar",1),l(2,"div",2),S(3,"router-outlet"),c()())},dependencies:[bn,ui],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.guest-layout[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;box-sizing:border-box;background-color:transparent}.guest-content[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:5rem}@media(max-width:1024px){.guest-content[_ngcontent-%COMP%]{padding-top:6.5rem}}"]})};var fi=class i{constructor(n){this.sessionService=n}sessionService;ngOnInit(){this.cargarSesion()}async cargarSesion(){await this.sessionService.cargarSesion()}static \u0275fac=function(e){return new(e||i)(q(ee))};static \u0275cmp=y({type:i,selectors:[["app-session-layout"]],decls:4,vars:0,consts:[[1,"session-layout"],["mode","session"],[1,"session-content"]],template:function(e,t){e&1&&(l(0,"section",0),S(1,"app-topbar",1),l(2,"div",2),S(3,"router-outlet"),c()())},dependencies:[bn,ui],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.session-layout[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;box-sizing:border-box;background-color:transparent}.session-content[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:5rem}@media(max-width:1024px){.session-content[_ngcontent-%COMP%]{padding-top:6.5rem}}"]})};var kr=class i{staticsAppSvc=d(on);staticTexts=this.staticsAppSvc.getStaticTexts();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-not-found"]],decls:8,vars:2,consts:[[1,"not-found"],["src","./assets/icons/fav_icon.png","alt","Icono",2,"width","80px","margin-bottom","16px"],["href","/"]],template:function(e,t){e&1&&(ve(0,"div",0),ht(1,"img",1),ve(2,"h1"),m(3,"404"),Me(),ve(4,"p"),m(5),Me(),ve(6,"a",2),m(7),Me()()),e&2&&(p(5),I(t.staticTexts.notFound.pageNotFound),p(2),I(t.staticTexts.notFound.backToHome))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh;width:100vw;overflow:hidden}.not-found[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{font-size:6rem;color:#1976d2}p[_ngcontent-%COMP%]{font-size:1.5rem}a[_ngcontent-%COMP%]{color:#1976d2;text-decoration:underline}"]})};var Mr=class i{isInitialized=x(!1);loadingPromise=null;currentCallback=null;get googleIdApi(){return window.google?.accounts?.id}waitForGoogleApi(){return this.loadingPromise?this.loadingPromise:(this.loadingPromise=new Promise((n,e)=>{if(typeof window>"u"){e(new Error("Window no esta disponible (SSR)"));return}if(this.googleIdApi){n();return}let t=0,o=100,r=()=>{if(t++,this.googleIdApi){n();return}if(t>=o){e(new Error("Timeout: Google API no se pudo cargar"));return}setTimeout(r,100)};r()}).catch(n=>{throw this.loadingPromise=null,n}),this.loadingPromise)}async initGoogleSignIn(n){if(typeof window>"u")return;let e=Ie.GOOGLE_CLIENT_ID?.trim();if(!e)throw new Error("GOOGLE_CLIENT_ID no esta configurado");let t=n??this.currentCallback??(()=>{});if(this.isInitialized()&&this.currentCallback===t)return;await this.waitForGoogleApi();let o=this.googleIdApi;if(!o)throw new Error("Google API no esta disponible");o.initialize({client_id:e,callback:t,auto_select:!1,cancel_on_tap_outside:!0}),this.currentCallback=t,this.isInitialized.set(!0)}async signIn(){if(typeof window>"u")throw new Error("Google Sign-In no esta disponible en SSR");return new Promise(async(n,e)=>{let t=!1,o=a=>{t||(t=!0,n(a))},r=(a,s)=>{t||(t=!0,e(s instanceof Error?s:new Error(a)))};try{await this.initGoogleSignIn(o);let a=this.googleIdApi;if(!a){r("Google API no esta disponible");return}a.prompt(s=>{t||(s.isNotDisplayed()||s.isSkippedMoment()||s.isDismissedMoment())&&r("Google Sign-In fue cancelado o no se pudo mostrar")})}catch(a){r("Error al mostrar dialogo de Google Sign-In",a)}})}decodeJwtResponse(n){try{let e=n.split(".");if(e.length<2||!e[1])return null;let t=e[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(t).split("").map(r=>`%${`00${r.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));return JSON.parse(o)}catch{return null}}validateGoogleSessionFromResponse(n){let e=this.hasCookie("g_state"),t=this.decodeJwtResponse(n?.credential??"");if(!t)return{valid:!1,hasGoogleStateCookie:e,reason:"No se pudo decodificar la credencial de Google."};if(!t.sub||!t.email)return{valid:!1,hasGoogleStateCookie:e,reason:"La credencial de Google no incluye los datos minimos esperados.",user:t};let o=Ie.GOOGLE_CLIENT_ID?.trim();if(o&&t.aud&&t.aud!==o)return{valid:!1,hasGoogleStateCookie:e,reason:"La audiencia (aud) del token no coincide con el Client ID configurado.",user:t};let r=Math.floor(Date.now()/1e3);return typeof t.nbf=="number"&&t.nbf>r?{valid:!1,hasGoogleStateCookie:e,reason:"La sesion de Google aun no es valida (nbf).",user:t}:typeof t.exp=="number"&&t.exp<=r?{valid:!1,hasGoogleStateCookie:e,reason:"La sesion de Google ha expirado.",user:t}:{valid:!0,hasGoogleStateCookie:e,user:t}}hasCookie(n){if(typeof document>"u")return!1;let e=document.cookie?document.cookie.split(";"):[],t=`${n}=`;return e.some(o=>o.trim().startsWith(t))}async renderButton(n,e,t){if(typeof window>"u")return;await this.initGoogleSignIn(t);let o=this.googleIdApi;if(!o)throw new Error("Google API no disponible para renderizar boton");let r={theme:"outline",size:"large",text:"signin_with",shape:"rectangular",logo_alignment:"left",width:"100%"};o.renderButton(n,b(b({},r),e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var hh=["googleButtonContainer"];function fh(i,n){i&1&&(l(0,"span",21),m(1," Ingresa tu usuario. "),c())}function gh(i,n){i&1&&(Re(),l(0,"svg",22),S(1,"path",23),c())}function vh(i,n){i&1&&(Re(),l(0,"svg",24),S(1,"path",25),c())}function bh(i,n){i&1&&(l(0,"span",21),m(1," Ingresa tu clave. "),c())}function _h(i,n){if(i&1&&(l(0,"div",26),Re(),l(1,"svg",27),S(2,"circle",28)(3,"line",29)(4,"line",30),c(),Ot(),l(5,"span"),m(6),c()()),i&2){let e=g();p(6),I(e.errorMessage())}}var Er=class i{constructor(n,e,t,o){this.sesionApiSvc=n;this.sessionAppSvc=e;this.router=t;this.googleAuthService=o}sesionApiSvc;sessionAppSvc;router;googleAuthService;googleButtonContainer;isLoading=x(!1);errorMessage=x("");showPassword=x(!1);fb=d(xo);platformId=d(Ne);isBrowser=Le(this.platformId);syncInitialLoader=wt(()=>{this.isBrowser&&this.setInitialLoaderVisible(this.isLoading())});form=this.fb.group({usuario:["",[$e.required,$e.email]],clave:["",$e.required]});ngOnInit(){}ngOnDestroy(){this.setInitialLoaderVisible(!1)}ngAfterViewInit(){Le(this.platformId)&&this.googleButtonContainer?.nativeElement&&this.initializeGoogleButton()}async initializeGoogleButton(){try{await this.googleAuthService.renderButton(this.googleButtonContainer.nativeElement,{theme:"outline",size:"large",text:"signin_with",width:"100%"},n=>this.handleGoogleSignIn(n)),console.log("Bot\xF3n de Google inicializado correctamente con callback")}catch(n){console.error("Error al inicializar bot\xF3n de Google:",n)}}handleGoogleSignIn(n){this.isLoading.set(!0),this.errorMessage.set("");try{let e=this.googleAuthService.validateGoogleSessionFromResponse(n);if(!e.valid||!e.user){this.errorMessage.set(e.reason??"No se pudo validar la sesi\xF3n de Google."),this.isLoading.set(!1);return}let t=e.user;if(!(t?.email??"")){this.errorMessage.set("No se pudo obtener el email del usuario de Google."),this.isLoading.set(!1);return}let r={iss:t?.iss,azp:t?.azp,aud:t?.aud,sub:t?.sub,email:t?.email,email_verified:t?.email_verified?1:0,nbf:t?.nbf,name:t?.name,picture:t?.picture,given_name:t?.given_name,family_name:t?.family_name,iat:t?.iat,exp:t?.exp,jti:t?.jti},a=this.encryptSesionData(JSON.stringify(r),Ie.STATICS_API_TOKEN);this.sesionApiSvc.validarGoogleAuth({credential:a}).subscribe({next:s=>{this.sessionAppSvc.setSession(s),this.router.navigate(["/secure"])},error:s=>{console.error("Error al validar sesi\xF3n con Google:",s),this.errorMessage.set(this.resolveHttpErrorMessage(s)),this.isLoading.set(!1)},complete:()=>{this.isLoading.set(!1)}})}catch(e){console.error("Error al procesar autenticaci\xF3n de Google:",e),this.errorMessage.set("Error al procesar la autenticaci\xF3n de Google."),this.isLoading.set(!1)}}validarSesion(){if(this.isLoading.set(!0),this.form.invalid){this.form.markAllAsTouched(),this.isLoading.set(!1);return}this.submit("validar")}registrarSesion(){if(this.isLoading.set(!0),this.form.invalid){this.form.markAllAsTouched(),this.isLoading.set(!1);return}this.submit("registrar")}togglePasswordVisibility(){this.showPassword.update(n=>!n)}preventPasswordPaste(n){n.preventDefault()}submit(n){this.isLoading.set(!0),this.errorMessage.set("");let e=this.form.getRawValue();if(!e.usuario||this.form.controls.usuario.hasError("email")){this.errorMessage.set("El usuario debe ser un correo v\xE1lido."),this.isLoading.set(!1);return}(n==="validar"?this.sesionApiSvc.validarSesion({email:e.usuario}):this.sesionApiSvc.registrarSesion({email:e.usuario,pass:this.encryptPasswordWithTokenAndEmail(e.clave??"",e.usuario)})).subscribe({next:o=>{this.sessionAppSvc.setSession(o),this.router.navigate(["/secure"])},error:o=>{console.error("Error en respuesta de sesi\xF3n:",o),this.errorMessage.set(this.resolveHttpErrorMessage(o)),this.isLoading.set(!1)}})}resolveHttpErrorMessage(n){switch(Number(n?.status??0)){case 400:return"La solicitud no es v\xE1lida. Revisa los datos ingresados e intenta nuevamente.";case 403:return"No tienes permisos para realizar esta acci\xF3n.";case 500:return"Ocurri\xF3 un error interno del servidor. Intenta nuevamente m\xE1s tarde.";case 0:return"No se pudo conectar con el servidor. Verifica tu conexi\xF3n e intenta de nuevo.";default:return"No fue posible completar la solicitud. Intenta nuevamente."}}encryptPasswordWithTokenAndEmail(n,e){let t=String(e??"").trim().toLowerCase(),o=`${Ie.STATICS_API_TOKEN}:${t}`;return this.encryptSesionData(n,o)}encryptSesionData(n,e){if(!e)return n;let t=new TextEncoder().encode(n),o=new TextEncoder().encode(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s+=1)r[s]=t[s]^o[s%o.length];let a="";for(let s of r)a+=String.fromCharCode(s);return btoa(a)}decryptSesionData(n,e){if(!e)return n;let t=atob(n),o=new Uint8Array(t.length);for(let s=0;s<t.length;s+=1)o[s]=t.charCodeAt(s);let r=new TextEncoder().encode(e),a=new Uint8Array(o.length);for(let s=0;s<o.length;s+=1)a[s]=o[s]^r[s%r.length];return new TextDecoder().decode(a)}setInitialLoaderVisible(n){if(!this.isBrowser)return;let e=document.getElementById("initial-loader");e&&e.classList.toggle("hidden",!n)}static \u0275fac=function(e){return new(e||i)(q(ei),q(ee),q(fe),q(Mr))};static \u0275cmp=y({type:i,selectors:[["app-login"]],viewQuery:function(e,t){if(e&1&&Ge(hh,5,j),e&2){let o;L(o=z())&&(t.googleButtonContainer=o.first)}},decls:38,vars:11,consts:[["googleButtonContainer",""],[1,"login-container"],[1,"login-card"],[1,"login-header"],[1,"google-signin-section"],[1,"google-button-container"],[1,"separator"],[1,"login-form",3,"ngSubmit","formGroup"],["type","text","formControlName","usuario","placeholder","usuario"],["class","error",4,"ngIf"],[1,"password-input-wrapper"],["formControlName","clave","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022",3,"paste","type"],["type","button",1,"password-toggle-btn",3,"click"],["class","password-eye-icon password-eye-open","viewBox","0 0 24 24","aria-hidden","true","focusable","false",4,"ngIf"],["class","password-eye-icon password-eye-closed","viewBox","0 0 24 24","aria-hidden","true","focusable","false",4,"ngIf"],[1,"actions"],["type","submit",3,"disabled"],["type","button",1,"secondary",3,"click","disabled"],["class","error-alert",4,"ngIf"],[1,"helper"],["routerLink","/home"],[1,"error"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false",1,"password-eye-icon","password-eye-open"],["fill","currentColor","d","M12 5c-5.5 0-9.5 4.2-10.7 6.2a1.5 1.5 0 0 0 0 1.6C2.5 14.8 6.5 19 12 19s9.5-4.2 10.7-6.2a1.5 1.5 0 0 0 0-1.6C21.5 9.2 17.5 5 12 5Zm0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false",1,"password-eye-icon","password-eye-closed"],["fill","currentColor","d","m3.3 2 18.7 18.7-1.4 1.4-3-3A12.7 12.7 0 0 1 12 20c-5.5 0-9.5-4.2-10.7-6.2a1.5 1.5 0 0 1 0-1.6A18 18 0 0 1 6.7 7L1.9 2.2 3.3.8Zm5 8.8a3.8 3.8 0 0 0 4.9 4.9l-4.9-4.9ZM12 5c5.5 0 9.5 4.2 10.7 6.2a1.5 1.5 0 0 1 0 1.6 18.8 18.8 0 0 1-3.4 3.8l-1.5-1.5a16 16 0 0 0 2.3-2.6C18.8 10.5 15.7 7 12 7c-.8 0-1.6.2-2.3.4L8.1 5.8c1.2-.5 2.5-.8 3.9-.8Zm0 3a4 4 0 0 1 4 4c0 .7-.2 1.3-.5 1.9l-5.4-5.4c.6-.3 1.2-.5 1.9-.5Z"],[1,"error-alert"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","8","x2","12","y2","12"],["x1","12","y1","16","x2","12.01","y2","16"]],template:function(e,t){e&1&&(l(0,"section",1)(1,"div",2)(2,"header",3)(3,"h1"),m(4,"Acceso"),c(),l(5,"p"),m(6,"Inicia tu sesi\xF3n para acceder a las rutas privadas."),c()(),l(7,"div",4),S(8,"div",5,0),c(),l(10,"div",6)(11,"span"),m(12,"o contin\xFAa con email"),c()(),l(13,"form",7),C("ngSubmit",function(){return t.validarSesion()}),l(14,"label")(15,"span"),m(16,"Usuario"),c(),S(17,"input",8),c(),he(18,fh,2,0,"span",9),l(19,"label")(20,"span"),m(21,"Clave"),c(),l(22,"div",10)(23,"input",11),C("paste",function(r){return t.preventPasswordPaste(r)}),c(),l(24,"button",12),C("click",function(){return t.togglePasswordVisibility()}),he(25,gh,2,0,"svg",13)(26,vh,2,0,"svg",14),c()()(),he(27,bh,2,0,"span",9),l(28,"div",15)(29,"button",16),m(30,"Validar sesi\xF3n"),c(),l(31,"button",17),C("click",function(){return t.registrarSesion()}),m(32,"Registrar sesi\xF3n"),c()(),he(33,_h,7,1,"div",18),l(34,"p",19),m(35," \xBFSolo quieres navegar rutas p\xFAblicas? "),l(36,"a",20),m(37,"Ir al inicio"),c()()()()()),e&2&&(p(13),v("formGroup",t.form),p(5),v("ngIf",t.form.controls.usuario.touched&&t.form.controls.usuario.invalid),p(5),v("type",t.showPassword()?"text":"password"),p(),D("aria-label",t.showPassword()?"Ocultar clave":"Mostrar clave")("title",t.showPassword()?"Ocultar clave":"Mostrar clave"),p(),v("ngIf",t.showPassword()),p(),v("ngIf",!t.showPassword()),p(),v("ngIf",t.form.controls.clave.touched&&t.form.controls.clave.invalid),p(2),v("disabled",t.isLoading()),p(2),v("disabled",t.isLoading()),p(2),v("ngIf",t.errorMessage()))},dependencies:[Gt,Nn,Co,Un,Ln,zn,Bn,qt,yo,Je],styles:['[_nghost-%COMP%]{display:block}.login-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:70vh;padding:1rem}.login-card[_ngcontent-%COMP%]{width:min(420px,100%);background:var(--app-text-inverse);border-radius:16px;box-shadow:0 20px 40px var(--app-shadow);padding:2rem;display:flex;flex-direction:column;gap:1.5rem}.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.75rem;font-weight:700;color:var(--app-text-strong)}.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:var(--app-text-muted-light)}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem;font-weight:600;color:var(--app-text-strong)}input[_ngcontent-%COMP%]{border:1px solid var(--app-border-soft);border-radius:10px;padding:.75rem .9rem;font-size:.95rem;transition:border-color .2s ease,box-shadow .2s ease}input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--app-brand-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--app-brand-primary) 10%,transparent)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:var(--app-status-error)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 3px color-mix(in srgb,var(--app-status-error) 10%,transparent)}.password-input-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}.password-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-right:5.25rem;box-sizing:border-box}.password-toggle-btn[_ngcontent-%COMP%]{position:absolute;top:50%;right:.35rem;width:2.25rem;height:2.25rem;transform:translateY(-50%);border:none;background:transparent;color:var(--app-brand-primary);padding:0;border-radius:8px;display:inline-flex;align-items:center;justify-content:center}.password-eye-icon[_ngcontent-%COMP%]{width:1.1rem;height:1.1rem}.password-eye-open[_ngcontent-%COMP%]{color:var(--app-brand-secondary)}.password-eye-closed[_ngcontent-%COMP%]{color:var(--app-brand-accent)}.password-toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:color-mix(in srgb,var(--app-brand-primary) 12%,transparent);transform:translateY(-50%)}.actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.5rem}button[_ngcontent-%COMP%]{border:none;background:var(--app-brand-primary);color:var(--app-text-inverse);padding:.75rem 1rem;border-radius:10px;font-weight:600;cursor:pointer;transition:opacity .2s ease,transform .1s ease}button[_ngcontent-%COMP%]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}button.secondary[_ngcontent-%COMP%]{background:var(--app-background-soft);color:var(--app-text-strong)}button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.error[_ngcontent-%COMP%]{color:var(--app-status-error);font-size:.8rem;margin:0;display:block;margin-top:.25rem}.error-alert[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem;padding:.875rem 1rem;margin-top:1rem;background-color:color-mix(in srgb,var(--app-status-error) 8%,transparent);border:1px solid color-mix(in srgb,var(--app-status-error) 30%,transparent);border-radius:10px;color:var(--app-status-error);font-size:.875rem;line-height:1.5;animation:_ngcontent-%COMP%_slideDown .3s ease-out}.error-alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{flex-shrink:0;color:var(--app-status-error);margin-top:.125rem}.error-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;font-weight:500}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.helper[_ngcontent-%COMP%]{margin:.5rem 0 0;color:var(--app-text-muted-light);font-size:.85rem}.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--app-brand-primary);font-weight:600;text-decoration:none}.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.google-signin-section[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}.google-button-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;min-height:44px}.google-redirect-button[_ngcontent-%COMP%]{width:100%;display:inline-flex;justify-content:center;align-items:center;gap:.625rem;min-height:44px;background:color-mix(in srgb,var(--app-text-inverse) 96%,transparent);color:#3c4043;border:1px solid #dadce0;border-radius:10px;font-weight:600;font-size:.95rem;letter-spacing:.01em;box-shadow:0 1px 2px #3c40431f,0 1px 3px #3c404314;transition:background-color .2s ease,box-shadow .2s ease,transform .12s ease}.google-redirect-button[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{width:1.125rem;height:1.125rem;flex-shrink:0}.google-redirect-button[_ngcontent-%COMP%]   .google-label[_ngcontent-%COMP%]{line-height:1}.google-redirect-button[_ngcontent-%COMP%]:hover:not(:disabled){background:#f8f9fa;box-shadow:0 2px 6px #3c404333,0 1px 2px #3c40431a}.google-redirect-button[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(1px)}.google-redirect-button[_ngcontent-%COMP%]:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}.google-redirect-button[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.separator[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;margin:1rem 0;position:relative}.separator[_ngcontent-%COMP%]:before, .separator[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid var(--app-border-soft)}.separator[_ngcontent-%COMP%]:not(:empty):before{margin-right:.75rem}.separator[_ngcontent-%COMP%]:not(:empty):after{margin-left:.75rem}.separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:.875rem;font-weight:500}']})};var to=class i{router=d(fe);sessionAppSvc=d(ee);async ngOnInit(){if(!this.sessionAppSvc.hasSession()){await this.router.navigate(["/login"]);return}if(!await this.sessionAppSvc.revalidateSessionToken()){this.sessionAppSvc.clearSession(),await this.router.navigate(["/login"]);return}await this.sessionAppSvc.cargarSesion(!0),await this.router.navigate(["/secure/home"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-session-revalidate"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};var Ir="droguier_cookies_consent",Or="droguier_cookies_notice_ok",Pr=class i{platformId=d(Ne);consent=x(this.resolve());accept(){this.persist("accepted"),this.consent.set("accepted")}reject(){this.persist("rejected"),this.consent.set("rejected")}revoke(){this.isBrowser()&&(localStorage.removeItem(Ir),localStorage.removeItem(Or)),this.consent.set(null)}canLoadThirdParty(){return this.consent()==="accepted"}resolve(){if(!this.isBrowser())return null;let n=localStorage.getItem(Ir);return n==="accepted"||n==="rejected"?n:localStorage.getItem(Or)==="1"?(localStorage.setItem(Ir,"accepted"),localStorage.removeItem(Or),"accepted"):null}persist(n){this.isBrowser()&&(localStorage.setItem(Ir,n),localStorage.removeItem(Or))}isBrowser(){return Le(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function yh(i,n){if(i&1){let e=ie();l(0,"button",6),C("click",function(){F(e);let o=g();return N(o.revokeConsent())}),m(1," Revocar mi consentimiento "),c()}}function xh(i,n){i&1&&(l(0,"p",3),m(1," Actualmente no has tomado una decisi\xF3n: se muestran las cookies necesarias y de preferencias, y no se cargan servicios de terceros. "),c())}var Rr=class i{consentService=d(Pr);consent=this.consentService.consent;revokeConsent(){this.consentService.revoke()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-cookies"]],decls:72,vars:1,consts:[[1,"cookies-page"],[1,"cookies-table"],["type","button",1,"cookies-revoke-btn"],[1,"cookies-no-decision"],[1,"cookies-back"],["routerLink","/"],["type","button",1,"cookies-revoke-btn",3,"click"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h1"),m(2,"Pol\xEDtica de cookies"),c(),l(3,"p"),m(4," Este sitio web utiliza cookies y mecanismos de almacenamiento local del navegador (localStorage) para que el servicio funcione correctamente y para recordar tus preferencias. Con tu consentimiento, adem\xE1s, se cargan servicios de terceros como Google Sign-In, YouTube y herramientas de anal\xEDtica. "),c(),l(5,"h2"),m(6,"1. Qu\xE9 son las cookies"),c(),l(7,"p"),m(8," Una cookie es un peque\xF1o archivo que se guarda en tu dispositivo al visitar un sitio web. Su finalidad puede ser t\xE9cnica (necesaria para el funcionamiento), de preferencias o de an\xE1lisis y publicidad. La normativa aplicable es el RGPD (UE) 2016/679 y, en Espa\xF1a, la Ley 34/2002 de servicios de la sociedad de la informaci\xF3n (LSSI), art\xEDculo 22.2. "),c(),l(9,"h2"),m(10,"2. Cookies y almacenamiento utilizados"),c(),l(11,"table",1)(12,"thead")(13,"tr")(14,"th"),m(15,"Identificador"),c(),l(16,"th"),m(17,"Tipo"),c(),l(18,"th"),m(19,"Finalidad"),c()()(),l(20,"tbody")(21,"tr")(22,"td"),m(23,"droguier_session"),c(),l(24,"td"),m(25,"Necesaria"),c(),l(26,"td"),m(27,"Mantener tu sesi\xF3n iniciada. Se elimina al cerrar sesi\xF3n."),c()(),l(28,"tr")(29,"td"),m(30,"droguier_cookies_template"),c(),l(31,"td"),m(32,"Preferencia"),c(),l(33,"td"),m(34,"Recordar el template visual que has elegido (Default, Dark, Day, Retro, Pastel)."),c()(),l(35,"tr")(36,"td"),m(37,"droguier_cookies_consent"),c(),l(38,"td"),m(39,"Preferencia"),c(),l(40,"td"),m(41,"Guardar tu decisi\xF3n sobre el uso de cookies (accepted / rejected)."),c()(),l(42,"tr")(43,"td"),m(44,"Google Sign-In"),c(),l(45,"td"),m(46,"Terceros"),c(),l(47,"td"),m(48,"Solo si aceptas: autenticaci\xF3n con cuenta de Google."),c()(),l(49,"tr")(50,"td"),m(51,"YouTube"),c(),l(52,"td"),m(53,"Terceros"),c(),l(54,"td"),m(55,"Solo si aceptas: reproducci\xF3n de videos incrustados y sus propias cookies."),c()(),l(56,"tr")(57,"td"),m(58,"Google Analytics"),c(),l(59,"td"),m(60,"Anal\xEDtica"),c(),l(61,"td"),m(62,"Solo si aceptas: estad\xEDsticas an\xF3nimas de uso del sitio."),c()()()(),l(63,"h2"),m(64,"3. Tu decisi\xF3n"),c(),l(65,"p"),m(66," Puedes aceptar o rechazar las cookies de terceros en cualquier momento. Rechazarlas no impide el uso del sitio: solo se desactivan los servicios no esenciales. Tambi\xE9n puedes borrar el consentimiento guardado pulsando el bot\xF3n de abajo, lo que volver\xE1 a mostrarte el aviso. "),c(),k(67,yh,2,0,"button",2)(68,xh,2,0,"p",3),l(69,"p",4)(70,"a",5),m(71,"Volver al inicio"),c()()()),e&2&&(p(67),M(t.consent()!==null?67:68))},dependencies:[Je],styles:[".cookies-page[_ngcontent-%COMP%]{max-width:52rem;margin:0 auto;padding:2rem 1.25rem 3rem;color:var(--app-text-primary);line-height:1.55}.cookies-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.6rem;margin:0 0 1rem}.cookies-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.15rem;margin:1.6rem 0 .6rem}.cookies-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem}.cookies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .cookies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--app-border-strong, rgba(255, 255, 255, .15));padding:.55rem .7rem;text-align:left;vertical-align:top}.cookies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--app-background-header, #11131c)}.cookies-revoke-btn[_ngcontent-%COMP%]{margin:.5rem 0 1rem;padding:.6rem 1.2rem;border-radius:12px;border:1px solid var(--app-border-strong, rgba(255, 255, 255, .15));background:transparent;color:var(--app-text-primary);font-weight:600;cursor:pointer;transition:transform .2s ease,background .2s ease}.cookies-revoke-btn[_ngcontent-%COMP%]:hover{background:var(--app-button-background, #4f8cff);color:var(--app-button-text, #ffffff)}.cookies-no-decision[_ngcontent-%COMP%]{font-style:italic}.cookies-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--app-button-background, #4f8cff)}"]})};var sd=()=>import("./chunk-JDZVKAHV.js").then(i=>i.postsRoutes),Ch=()=>import("./chunk-4XCR6RZ5.js").then(i=>i.secureRoutes),ld=()=>import("./chunk-PBEOVBZL.js").then(i=>i.publicRoutes),cd=[{path:"",pathMatch:"full",component:cr},{path:"",component:hi,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"home",component:ti,data:{title:"Home",public:!0},canActivate:[Wi]},{path:"login",component:Er,data:{title:"Iniciar sesi\xF3n",public:!0},canActivate:[Wi]},{path:"revalidar-sesion",component:to,data:{title:"Revalidar sesi\xF3n",public:!0}},{path:"session/revalidate",component:to,data:{title:"Revalidar sesi\xF3n",public:!0}}]},{path:"secure",component:fi,canActivate:[kn],canActivateChild:[kn],providers:[ee],children:[{path:"",loadChildren:Ch}]},{path:"posts",data:{title:"Posts",icon:"search"},children:[{path:"",component:fi,canMatch:[Yi],canActivateChild:[kn],children:[{path:"",loadChildren:sd}]},{path:"",component:hi,canMatch:[Zi],children:[{path:"",loadChildren:sd}]}]},{path:"public",children:[{path:"",component:fi,canMatch:[Yi],canActivateChild:[kn],providers:[ee],children:[{path:"",loadChildren:ld}]},{path:"",component:hi,canMatch:[Zi],children:[{path:"",loadChildren:ld}]}]},{path:"Home",redirectTo:"secure/home",pathMatch:"full"},{path:"cookies",component:Rr,data:{title:"Pol\xEDtica de cookies",icon:"cookie"}},{path:"**",component:kr,data:{title:"No encontrado"}}];var on=class i{static STATIC_TEXTS={notFound:{pageNotFound:"P\xE1gina no encontrada",backToHome:"Volver al inicio"},home:{legendTitle:"Hook's revenge"},elRichardYutu:{watchOnYoutube:"Ver en YouTube"}};static POSTS_SPECIAL=[{id:"richard",title:"El universo en una copa de vino",excerpt:"Video destacado sobre ciencia, curiosidad y belleza cotidiana.",tags:["ciencia","video","feynman","youtube"],href:"/posts/richard",dateLabel:"11 Mar 2018",kind:"Video"}];static LIST_MENU_MAIN=[{title:"CLI Docs",name:"CLI Docs",link:"https://angular.dev/tools/cli",short_desc:"CLIDocs",visible:!1,new:!1},{title:"Angular Language Service",name:"Angular Language Service",link:"https://angular.dev/tools/language-service",short_desc:"ALS",visible:!1,new:!1},{title:"Angular DevTools",name:"Angular DevTools",link:"https://angular.dev/tools/devtools",short_desc:"AngDevTools",visible:!0,new:!1},{title:"Mark Poole's Website",name:"Mark Poole",link:"https://markpoole.com/",short_desc:"MarkPoole",visible:!0,new:!1},{title:"Stack Overflow",name:"Stack Overflow",link:"https://stackoverflow.com/",short_desc:"StackOverflow",visible:!1,new:!1},{title:"Cloudflare",name:"Cloudflare",link:"https://www.cloudflare.com/",short_desc:"Cloudflare",visible:!0,new:!0},{title:"Posts",name:"Posts",link:"/posts/home",short_desc:"Posts",visible:!0,new:!1}];static buildAppMenuRoutes(){let n=[],e=(t,o)=>{if(!o||typeof o!="object")return;let r=o,a=typeof r.title=="string"?r.title.trim():"",s=typeof r.icon=="string"?r.icon.trim():"";!a||!s||n.push({title:a,name:a,link:t,short_desc:a,icon:{name:s,url:""},visible:!0,secure:r.secure===!0,new:!1})};for(let t of cd)typeof t.path=="string"&&!t.path.includes(":")&&t.data&&e(`/${t.path}`,t.data);for(let t of fl)t.data&&e(`/public/${t.path}`,t.data);for(let t of dd)t.data&&e(`/secure/${t.path}`,t.data);return n.sort((t,o)=>t.title.localeCompare(o.title,"es"))}getMenuNavigationMain(){return[...i.LIST_MENU_MAIN]}getMenuNavigationApp(){return i.buildAppMenuRoutes()}getStaticTexts(){return{notFound:b({},i.STATIC_TEXTS.notFound),home:b({},i.STATIC_TEXTS.home),elRichardYutu:b({},i.STATIC_TEXTS.elRichardYutu)}}getStaticPostsSpecial(){return i.POSTS_SPECIAL.map(n=>te(b({},n),{tags:[...n.tags]}))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Sh=(i,n)=>n.text+"-"+i,kh=(i,n)=>n.id;function Mh(i,n){i&1&&(Re(),S(0,"path",7))}function Eh(i,n){i&1&&(Re(),S(0,"path",8))}function Ih(i,n){if(i&1&&(l(0,"span",43),m(1),c()),i&2){let e=n.$implicit;Tt("font-size",e.size,"px")("font-weight",e.emphasized?700:500),p(),I(e.text)}}function Oh(i,n){if(i&1){let e=ie();l(0,"div",41)(1,"button",44),C("click",function(){F(e);let o=g();return N(o.goPrevPage())}),l(2,"mat-icon"),m(3,"chevron_left"),c()(),l(4,"span",45)(5,"mat-icon",46),m(6),c(),l(7,"span",47),m(8),c()(),l(9,"button",48),C("click",function(){F(e);let o=g();return N(o.goNextPage())}),l(10,"mat-icon"),m(11,"chevron_right"),c()()()}if(i&2){let e=g();p(6),I(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].icon),p(2),I(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].label)}}function Ph(i,n){if(i&1&&(l(0,"a",49)(1,"span"),m(2),c(),Re(),l(3,"svg",51),S(4,"path",52),c()()),i&2){let e=g().$implicit;v("routerLink",e.link),p(2),I(e.title)}}function Rh(i,n){if(i&1&&(l(0,"a",50)(1,"span"),m(2),c(),Re(),l(3,"svg",51),S(4,"path",52),c()()),i&2){let e=g().$implicit;v("href",e.link,Vt),p(2),I(e.title)}}function Th(i,n){if(i&1&&k(0,Ph,5,2,"a",49)(1,Rh,5,2,"a",50),i&2){let e=n.$implicit;M(e.isRouter?0:1)}}function Ah(i,n){if(i&1&&re(0,Th,2,1,null,null,kh),i&2){let e=g();ae(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].items)}}function Dh(i,n){i&1&&(l(0,"p",42),m(1,"Sin elementos en esta p\xE1gina"),c())}function Fh(i,n){if(i&1){let e=ie();S(0,"div",19),l(1,"div",41)(2,"button",44),C("click",function(){F(e);let o=g();return N(o.goPrevPage())}),l(3,"mat-icon"),m(4,"chevron_left"),c()(),l(5,"span",53)(6,"mat-icon",46),m(7),c()(),l(8,"button",48),C("click",function(){F(e);let o=g();return N(o.goNextPage())}),l(9,"mat-icon"),m(10,"chevron_right"),c()()()}if(i&2){let e=g();p(7),I(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].icon)}}var Tr=class i{constructor(n,e,t){this.sessionAppSvc=n;this.staticsAppSvc=e;this.staticsApiSvc=t;this.staticTexts=this.staticsAppSvc.getStaticTexts()}sessionAppSvc;staticsAppSvc;staticsApiSvc;api_controller="bookmarks";greetingSizeOptions=[50,30,24,12];greetingTemplates=[{key:"es",lang:"es",anonymous:"Hola, Bienvenido",withName:n=>`Bienvenido, ${n}`},{key:"en",lang:"en",anonymous:"Hello, Welcome",withName:n=>`Welcome, ${n}`},{key:"pt",lang:"pt",anonymous:"Ola, Bem-vindo",withName:n=>`Bem-vindo, ${n}`},{key:"fr",lang:"fr",anonymous:"Bonjour, Bienvenue",withName:n=>`Bienvenue, ${n}`},{key:"it",lang:"it",anonymous:"Ciao, Benvenuto",withName:n=>`Benvenuto, ${n}`},{key:"de",lang:"de",anonymous:"Hallo, Willkommen",withName:n=>`Willkommen, ${n}`},{key:"ja",lang:"ja",anonymous:"Konnichiwa, Yokoso",withName:n=>`Yokoso, ${n}`},{key:"pal",lang:"ast",anonymous:"Hola, Bienveniu",withName:n=>`Bienveniu, ${n}`},{key:"ru",lang:"ru",anonymous:"Privet, Dobro pozhalovat",withName:n=>`Dobro pozhalovat, ${n}`}];currentUserName=null;isMenuOpen=!1;mobilePanel=x("left");greetingLines=x([]);bookmarks=x([]);bookmarksFavorites=x([]);bookmarksMainMenu=x([]);bookmarksAppMenu=x([]);staticTexts;homeCarouselPageMap=x({carouselPages:[],currentPage:0});async ngOnInit(){this.updateGreetingPresentation(),this.cargarMainMenu(),await this.sessionAppSvc.cargarSesion().then(()=>{this.greet(),this.cargarAppMenu(),this.cargarBookmarksFavoritos()}),this.cargarBookmarks()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}refreshGreetings(){this.updateGreetingPresentation()}toggleMobilePanel(){this.mobilePanel.update(n=>n==="left"?"right":"left")}goPrevPage(){let n=this.homeCarouselPageMap().carouselPages.length;n<=0||(this.homeCarouselPageMap().currentPage=(this.homeCarouselPageMap().currentPage-1+n)%n)}goNextPage(){let n=this.homeCarouselPageMap().carouselPages.length;n<=0||(this.homeCarouselPageMap().currentPage=(this.homeCarouselPageMap().currentPage+1)%n)}normalizeCurrentPage(){let n=this.homeCarouselPageMap().carouselPages.length-1;if(n<0){this.homeCarouselPageMap().currentPage=0;return}this.homeCarouselPageMap().currentPage>n&&(this.homeCarouselPageMap().currentPage=n)}upsertCarouselPage(n){this.homeCarouselPageMap.update(e=>{let t=e.carouselPages.findIndex(r=>r.key===n.key);if(t===-1)return te(b({},e),{carouselPages:[...e.carouselPages,n]});let o=[...e.carouselPages];return o[t]=n,te(b({},e),{carouselPages:o})}),this.normalizeCurrentPage()}greet(){let n=this.sessionAppSvc.sessionUser();if(!n||!n.full_name){this.currentUserName=null,this.updateGreetingPresentation();return}this.currentUserName=n.full_name,this.updateGreetingPresentation()}updateGreetingPresentation(){let n=this.getPreferredGreetingTemplate(),e=this.greetingTemplates.filter(f=>f.key!==n.key),t=this.getShuffledItems(e),o=this.greetingSizeOptions[0],r=this.greetingSizeOptions.slice(1),a=30,h=[t.shift()??n,n,...t].map((f,_)=>({text:this.currentUserName?f.withName(this.currentUserName):f.anonymous,size:_===0?o:_===1?a:this.getRandomItem(r.length>0?r:this.greetingSizeOptions),emphasized:_===1}));this.greetingLines.set(h)}getPreferredGreetingTemplate(){let n=this.getUserLanguageCode();return this.greetingTemplates.find(e=>e.lang===n)??this.greetingTemplates[1]}getUserLanguageCode(){return typeof navigator>"u"||!navigator.language?"es":navigator.language.toLowerCase().split("-")[0]}getRandomItem(n){let e=Math.floor(Math.random()*n.length);return n[e]}getShuffledItems(n){let e=[...n];for(let t=e.length-1;t>0;t--){let o=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[o],e[o]=r}return e}cargarBookmarksFavoritos(){let n=this.sessionAppSvc.sessionUser();if(!n){this.bookmarksFavorites.set([]),this.upsertCarouselPage({key:"favorites",label:"Favoritos",icon:"favorite",items:[]}),this.normalizeCurrentPage();return}var e=[];let t=n.bookmarks_favorites;e=Array.isArray(t)?t:[];let o=new Set(e),r=this.bookmarks().filter(a=>o.has(a.id));this.bookmarksFavorites.set(r),this.upsertCarouselPage({key:"favorites",label:"Favoritos",icon:"favorite",items:r.map(a=>({id:`favorite-${a.id}`,title:a.title,link:a.url,isRouter:!1}))}),this.normalizeCurrentPage()}cargarBookmarks(){if(!this.sessionAppSvc.session()){this.bookmarks.set([]),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:[]}),this.normalizeCurrentPage();return}this.staticsApiSvc.get(this.api_controller).subscribe({next:e=>{let t=e?.success?e.data:[];this.bookmarks.set(t),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:t.map(o=>({id:`bookmark-${o.id}`,title:o.title,link:o.url,isRouter:!1}))}),this.cargarBookmarksFavoritos(),this.normalizeCurrentPage()},error:()=>{this.bookmarks.set([]),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:[]}),this.normalizeCurrentPage()}})}cargarMainMenu(){try{let n=this.staticsAppSvc.getMenuNavigationMain().filter(e=>e.visible);this.bookmarksMainMenu.set(n),this.upsertCarouselPage({key:"main-menu",label:"Men\xFA Principal",icon:"menu",items:n.filter(e=>!!e.link).map(e=>({id:`main-${e.title}`,title:e.title,link:e.link,isRouter:!1}))}),this.normalizeCurrentPage()}catch(n){this.bookmarksMainMenu.set([]),this.upsertCarouselPage({key:"main-menu",label:"Men\xFA Principal",icon:"menu",items:[]}),this.normalizeCurrentPage(),console.error("Error al cargar el men\xFA principal:",n)}}cargarAppMenu(){try{if(!this.sessionAppSvc.session()){this.bookmarksAppMenu.set([]),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:[]}),this.normalizeCurrentPage();return}let e=this.staticsAppSvc.getMenuNavigationApp().filter(t=>t.visible);this.bookmarksAppMenu.set(e),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:e.filter(t=>!!t.link).map(t=>({id:`app-${t.title}`,title:t.title,link:t.link,isRouter:!0}))}),this.normalizeCurrentPage()}catch(n){this.bookmarksAppMenu.set([]),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:[]}),this.normalizeCurrentPage(),console.error("Error al cargar el men\xFA de la app:",n)}}static \u0275fac=function(e){return new(e||i)(q(ee),q(on),q(Mt))};static \u0275cmp=y({type:i,selectors:[["app-desktop"]],decls:57,vars:18,consts:[[1,"home-bg"],[1,"home-legend"],[1,"legend-title"],[1,"legend-owner"],["href","https://markpoole.com/","target","_blank","rel","noopener"],[1,"btn_menu_flotante",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M3 12h18M3 6h18M3 18h18"],["d","M18 6L6 18M6 6l12 12"],[1,"main"],[1,"box-overlay"],[1,"content"],["type","button",1,"mobile-side-toggle",3,"click"],[1,"left-side"],[1,"greeting-header"],[1,"greeting-stack"],[1,"greeting-line",3,"fontSize","fontWeight"],["type","button","aria-label","Reordenar saludos","title","Reordenar saludos",1,"greeting-refresh-btn",3,"click"],[1,"greeting-footer"],["role","separator","aria-label","Divider",1,"divider-horizontal"],[1,"greeting-footer-content"],["id","social-links","aria-label","Enlaces a redes sociales",1,"social-links"],["href","https://github.com","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://mail.google.com/mail/u/0/#inbox","aria-label","Gmail","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Gmail"],["d","M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"],["href","https://dash.cloudflare.com","aria-label","Cloudflare","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Cloudflare"],["d","M16.5088 16.8446c.1473-.504.2285-1.0394.2285-1.5898 0-3.5898-2.9102-6.5-6.5-6.5-1.0898 0-2.1094.2734-3 .7422-.4609-.8789-1.3906-1.4844-2.4414-1.4844-1.5508 0-2.8086 1.2578-2.8086 2.8086 0 .2656.0469.5156.1211.75C1.2852 12.6484 0 14.5586 0 16.8446 0 19.6055 2.2383 21.8438 5 21.8438h14c2.7617 0 5-2.2383 5-5 0-2.6602-2.0938-4.8164-4.6719-4.9844l.1807-.0148z"],["href","https://x.com/echoes_daniel","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],[1,"right-side-page-title"],[1,"right-side-pager"],[1,"right-side-empty"],[1,"greeting-line"],["type","button","aria-label","P\xE1gina anterior",1,"right-side-pager-btn",3,"click"],["aria-label","Tipo de p\xE1gina activa",1,"page-type-chip"],[1,"page-type-icon"],[1,"page-type-label"],["type","button","aria-label","P\xE1gina siguiente",1,"right-side-pager-btn",3,"click"],[1,"pill",3,"routerLink"],["target","_blank","rel","noopener",1,"pill",3,"href"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"],["aria-label","P\xE1gina activa",1,"page-type-chip","page-type-chip--pager"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"span",2),m(3),c(),l(4,"span",3)(5,"a",4),m(6,"https://markpoole.com/"),c()()(),l(7,"button",5),C("click",function(){return t.toggleMenu()}),Re(),l(8,"svg",6),k(9,Mh,1,0,":svg:path",7)(10,Eh,1,0,":svg:path",8),c()(),Ot(),l(11,"main",9),S(12,"div",10),l(13,"div",11)(14,"button",12),C("click",function(){return t.toggleMobilePanel()}),l(15,"mat-icon"),m(16,"swap_horiz"),c(),l(17,"span"),m(18),c()(),l(19,"div",13)(20,"div",14)(21,"h1",15),re(22,Ih,2,5,"span",16,Sh),c(),l(24,"button",17),C("click",function(){return t.refreshGreetings()}),l(25,"mat-icon"),m(26,"refresh"),c()()(),l(27,"div",18),S(28,"div",19),l(29,"div",20)(30,"p"),m(31,"Congratulations! Your app starts here. \u{1F389}!!!"),c(),l(32,"div",21)(33,"a",22),Re(),l(34,"svg",23),S(35,"path",24),c()(),Ot(),l(36,"a",25),Re(),l(37,"svg",26),S(38,"path",27),c()(),Ot(),l(39,"a",28),Re(),l(40,"svg",29),S(41,"path",30),c()(),Ot(),l(42,"a",31),Re(),l(43,"svg",32),S(44,"path",33),c()(),Ot(),l(45,"a",34),Re(),l(46,"svg",35),S(47,"path",36),c()()()()()(),Ot(),S(48,"div",37),l(49,"div",38)(50,"div",39)(51,"div",40),k(52,Oh,12,2,"div",41),c(),S(53,"div",19),k(54,Ah,2,0)(55,Dh,2,0,"p",42),k(56,Fh,11,1),c()()()()()),e&2&&(p(3),I(t.staticTexts.home.legendTitle),p(4),D("aria-label",t.isMenuOpen?"Cerrar men\xFA":"Abrir men\xFA"),p(2),M(t.isMenuOpen?10:9),p(2),O("menu-open",t.isMenuOpen),p(),O("show",t.isMenuOpen),p(),O("show",t.isMenuOpen)("mobile-show-left",t.mobilePanel()==="left")("mobile-show-right",t.mobilePanel()==="right"),p(),D("aria-label",t.mobilePanel()==="left"?"Mostrar men\xFA derecho":"Mostrar saludo izquierdo"),p(4),I(t.mobilePanel()==="left"?"Ver men\xFA derecho":"Ver saludo izquierdo"),p(4),ae(t.greetingLines()),p(30),M(t.homeCarouselPageMap().carouselPages.length>1?52:-1),p(2),M(t.homeCarouselPageMap().carouselPages.length>0?54:55),p(2),M(t.homeCarouselPageMap().carouselPages.length>1?56:-1))},dependencies:[Lc,Je,Qe],styles:['[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh;--home-right-offset: clamp(1rem, 8vw, 4rem)}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--app-text-strong);font-weight:500;line-height:100%;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}.greeting-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.15rem}.greeting-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.35rem;align-self:stretch;min-height:0;justify-content:center}.greeting-refresh-btn[_ngcontent-%COMP%]{margin-top:0;width:1.6rem;height:1.6rem;border-radius:999px;border:1px solid var(--app-border-inverse);background:color-mix(in srgb,var(--app-text-strong) 35%,transparent);color:var(--app-text-inverse);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:transform .2s ease,background .2s ease}.greeting-refresh-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);background:color-mix(in srgb,var(--app-text-strong) 50%,transparent)}.greeting-refresh-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:.8rem;width:.8rem;height:.8rem;line-height:.8rem}.greeting-line[_ngcontent-%COMP%]{display:block;line-height:1.05}p[_ngcontent-%COMP%]{margin:0;color:var(--app-text-soft)}.home-bg[_ngcontent-%COMP%]{position:fixed;inset:0;min-height:100vh;width:100%;background:url("./media/hooks-revenge-AYJBKCNC.jpg") no-repeat center center fixed;background-size:cover;background-position:center;background-repeat:no-repeat;flex-direction:row;align-items:flex-start;justify-content:center;display:flex;z-index:0}.home-legend[_ngcontent-%COMP%]{width:auto;max-width:18rem;background:var(--app-text-strong);color:var(--app-text-inverse);padding:.5rem .875rem;margin:85vh 2rem 1.5rem 2.5rem;border-radius:50px;font-size:.75rem;box-shadow:0 4px 20px var(--app-shadow-strong);opacity:.25;display:flex;align-items:center;gap:.5rem;transition:opacity .3s ease}.home-legend[_ngcontent-%COMP%]:hover{opacity:1}.legend-title[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-weight:600;font-size:.7rem;color:var(--app-inverse-soft);display:inline-flex;align-items:center;margin:0;padding-right:.5rem;border-right:1px solid var(--app-border-inverse-strong);-webkit-text-stroke:0;text-shadow:none;line-height:1}.legend-title[_ngcontent-%COMP%]:before{content:"\\1f5bc\\fe0f";margin-right:.35rem;font-size:.8rem}.legend-owner[_ngcontent-%COMP%]{width:auto;white-space:nowrap;word-break:normal}.legend-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline;color:var(--app-accent-blue-soft);font-size:.75rem;font-weight:500;text-decoration:none;transition:color .2s ease}.legend-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--app-brand-primary);text-decoration:underline}main[_ngcontent-%COMP%]{width:100%;max-width:750px;min-height:0;height:80vh;margin:auto;display:flex;justify-content:center;align-items:stretch;padding:1rem;box-sizing:border-box;position:relative;overflow:hidden;border-radius:50px}main.menu-open[_ngcontent-%COMP%]{overflow:hidden}.btn_menu_flotante[_ngcontent-%COMP%]{position:fixed;right:2rem;top:50%;transform:translateY(-50%);width:3.5rem;height:3.5rem;background:transparent;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--app-border-inverse);border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--app-border-inverse);transition:all .3s ease;z-index:1000;color:var(--app-text-inverse)}.btn_menu_flotante[_ngcontent-%COMP%]:hover{transform:translateY(-50%) scale(1.05);box-shadow:0 6px 16px var(--app-border-inverse)}.btn_menu_flotante[_ngcontent-%COMP%]:active{transform:translateY(-50%) scale(.95)}.btn_menu_flotante[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:transform .3s ease}.box-overlay[_ngcontent-%COMP%]{display:flex;justify-content:space-around;position:absolute;top:0;left:0;right:var(--home-right-offset);width:100%;min-height:100%;background:var(--app-text-inverse);opacity:0;border-radius:16px;pointer-events:none;transition:opacity .3s ease}.box-overlay.show[_ngcontent-%COMP%]{opacity:.5;pointer-events:auto}.content[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:stretch;gap:1rem;width:calc(100% - var(--home-right-offset));max-width:800px;height:100%;min-height:0;margin-bottom:3rem;box-sizing:border-box;overflow:hidden;opacity:0;transform:translateY(-20px);pointer-events:none;transition:all .3s ease}.left-side[_ngcontent-%COMP%]{flex:0 0 52%;max-width:52%;display:grid;grid-template-rows:minmax(0,1fr) auto;align-items:stretch;min-height:0;height:100%}.greeting-footer[_ngcontent-%COMP%]{align-self:stretch;padding-bottom:.5rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;max-width:32rem;text-align:left;line-height:1.05;text-wrap:balance}.right-side[_ngcontent-%COMP%]{width:36%;flex:0 0 36%;max-width:36%;min-width:0;max-height:100%;overflow:hidden;display:flex;align-items:stretch;justify-content:flex-start}.right-side-page-title[_ngcontent-%COMP%]{margin:0;width:100%;display:flex;justify-content:flex-start}.right-side-pager[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}.right-side-pager-btn[_ngcontent-%COMP%], .page-type-chip[_ngcontent-%COMP%]{height:2.25rem;box-sizing:border-box}.right-side-pager-btn[_ngcontent-%COMP%]{min-width:3.141594rem;padding:0 .4rem;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:#fff!important;background-color:var(--app-brand-navy-5)!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;border:1px solid var(--app-border-inverse)!important;border-radius:12px;transition:all .3s ease!important}.right-side-pager-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);background-color:var(--app-accent-blue-soft)!important;border-color:var(--app-border-inverse-strong)!important;box-shadow:0 4px 12px var(--app-shadow)!important}.right-side-pager-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.45}.right-side-pager-indicator[_ngcontent-%COMP%]{font-size:.75rem;color:var(--app-text-inverse);opacity:.9}.content.show[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);pointer-events:auto}.mobile-side-toggle[_ngcontent-%COMP%]{display:none}.mobile-side-toggle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;line-height:1rem}.mobile-side-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;letter-spacing:.02em}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1.5px;background:var(--app-gradient-accent);margin-inline:.5rem}.divider-horizontal[_ngcontent-%COMP%]{height:1.5px;width:90%;background:var(--app-gradient-primary);margin-block:1.5rem;margin-left:auto;margin-right:auto}.pill-group[_ngcontent-%COMP%]   .divider-horizontal[_ngcontent-%COMP%]:nth-of-type(2n){background:var(--app-gradient-primary-reverse)}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:nowrap;width:100%;min-width:0;min-height:100%;gap:1.25rem;overflow-x:hidden}.right-side-empty[_ngcontent-%COMP%]{margin:0;font-size:.8rem;color:var(--app-inverse-soft);background-color:var(--app-overlay-backdrop);border-radius:112px;padding:.22rem .55rem}.page-type-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;padding:0 .55rem;border-radius:112px;border:1px solid var(--app-border-inverse);background:var(--app-brand-navy-5);color:var(--app-text-inverse);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}.page-type-icon[_ngcontent-%COMP%]{font-size:1.414213rem;width:1.414213rem;height:1.414213rem;line-height:1.414213rem;color:var(--app-brand-navy-75)}.page-type-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;line-height:1;letter-spacing:.03em;text-transform:uppercase}.right-side[_ngcontent-%COMP%]   .pill-group[_ngcontent-%COMP%] > .divider-horizontal[_ngcontent-%COMP%]{margin-top:auto}.pill[_ngcontent-%COMP%]{max-width:100%;box-sizing:border-box;display:flex;align-items:center;--pill-accent: var(--app-brand-primary);color:var(--app-text-strong);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;background:color-mix(in srgb,var(--pill-accent) 30%,transparent);transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 50%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+3){--pill-accent: var(--app-brand-accent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+1){--pill-accent: var(--app-brand-primary)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+2){--pill-accent: var(--app-brand-secondary)}.pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:0;overflow-wrap:anywhere}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem;flex-shrink:0}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;gap:1rem;margin-top:1.5rem;width:100%;max-width:min(16rem,100%);margin-inline:auto}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--app-text-muted-light)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--app-text-strong)}@media screen and (max-width:1024px){.home-legend[_ngcontent-%COMP%]{margin:85vh 1rem 1.5rem 1rem}.btn_menu_flotante[_ngcontent-%COMP%]{right:.5rem}.content[_ngcontent-%COMP%]{flex-direction:column;width:calc(100% - var(--home-right-offset));height:auto;margin-bottom:1rem}.content.show[_ngcontent-%COMP%]{width:calc(100% - var(--home-right-offset))}.mobile-side-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;align-self:center;border:1px solid var(--app-border-inverse);border-radius:999px;background:color-mix(in srgb,var(--app-text-strong) 30%,transparent);color:var(--app-text-inverse);padding:.35rem .75rem;margin-bottom:.75rem;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:100%}.content.mobile-show-left[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .content.mobile-show-left[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{display:none}.right-side[_ngcontent-%COMP%]{max-height:none;overflow:visible}.pill-group[_ngcontent-%COMP%]{min-height:0;gap:1rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:100%;text-align:center}}@media screen and (max-width:650px){main[_ngcontent-%COMP%]{height:auto;min-height:100vh;overflow:visible}.box-overlay[_ngcontent-%COMP%], .box-overlay.show[_ngcontent-%COMP%]{opacity:.5;pointer-events:auto}.home-legend[_ngcontent-%COMP%], .btn_menu_flotante[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%], .content.show[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);pointer-events:auto}.content[_ngcontent-%COMP%]{flex-direction:column;width:calc(100% - var(--home-right-offset));height:auto;margin-bottom:1rem;padding-top:2rem}.mobile-side-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;align-self:center;border:1px solid var(--app-border-inverse);border-radius:999px;background:color-mix(in srgb,var(--app-text-strong) 30%,transparent);color:var(--app-text-inverse);padding:.35rem .75rem;margin-bottom:.75rem;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.content.show[_ngcontent-%COMP%]{width:calc(100% - var(--home-right-offset))}.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:100%}.content.mobile-show-left[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .content.mobile-show-left[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{display:none}.right-side[_ngcontent-%COMP%]{max-height:none;overflow:visible}.pill-group[_ngcontent-%COMP%]{min-height:0;gap:1rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:100%;text-align:center}.divider[_ngcontent-%COMP%]{height:1.5px;width:90%;background:var(--app-gradient-primary);margin-block:1.5rem;margin-left:auto;margin-right:auto}.right-side-pager[_ngcontent-%COMP%]{justify-content:center;flex-wrap:wrap;position:sticky;bottom:.5rem;border-radius:999px;border:1px solid var(--app-border-inverse);max-width:99%;margin-inline:auto;overflow:hidden;background-clip:padding-box;padding-block:.35rem;background:color-mix(in srgb,var(--app-text-inverse) 10%,transparent);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.greeting-footer-content[_ngcontent-%COMP%]{border-radius:22px;border:1px solid var(--app-border-inverse);overflow:hidden;background-clip:padding-box;padding:.75rem;background:color-mix(in srgb,var(--app-text-inverse) 10%,transparent);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}}']})};function no(i){i||(i=d(Ct));let n=new tt(e=>{if(i.destroyed){e.next();return}return i.onDestroy(e.next.bind(e))});return e=>e.pipe(oe(n))}var as=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new tt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(de(e=>e.some(t=>t.target===n)),Kr({bufferSize:1,refCount:!0}),oe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},md=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=d(H);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new as(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Nh=["notch"],Lh=["matFormFieldNotchedOutline",""],zh=["*"],pd=["iconPrefixContainer"],ud=["textPrefixContainer"],hd=["iconSuffixContainer"],fd=["textSuffixContainer"],Bh=["textField"],jh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Uh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Vh(i,n){i&1&&S(0,"span",21)}function Hh(i,n){if(i&1&&(l(0,"label",20),V(1,1),k(2,Vh,1,0,"span",21),c()),i&2){let e=g(2);v("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),D("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),M(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Gh(i,n){if(i&1&&k(0,Hh,3,5,"label",20),i&2){let e=g();M(e._hasFloatingLabel()?0:-1)}}function $h(i,n){i&1&&S(0,"div",7)}function qh(i,n){}function Wh(i,n){if(i&1&&he(0,qh,0,0,"ng-template",13),i&2){g(2);let e=rt(1);v("ngTemplateOutlet",e)}}function Yh(i,n){if(i&1&&(l(0,"div",9),k(1,Wh,1,1,null,13),c()),i&2){let e=g();v("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),M(e._forceDisplayInfixLabel()?-1:1)}}function Zh(i,n){i&1&&(l(0,"div",10,2),V(2,2),c())}function Kh(i,n){i&1&&(l(0,"div",11,3),V(2,3),c())}function Xh(i,n){}function Qh(i,n){if(i&1&&he(0,Xh,0,0,"ng-template",13),i&2){g();let e=rt(1);v("ngTemplateOutlet",e)}}function Jh(i,n){i&1&&(l(0,"div",14,4),V(2,4),c())}function ef(i,n){i&1&&(l(0,"div",15,5),V(2,5),c())}function tf(i,n){i&1&&S(0,"div",16)}function nf(i,n){i&1&&(l(0,"div",18),V(1,6),c())}function of(i,n){if(i&1&&(l(0,"mat-hint",22),m(1),c()),i&2){let e=g(2);v("id",e._hintLabelId),p(),I(e.hintLabel)}}function rf(i,n){if(i&1&&(l(0,"div",19),k(1,of,2,2,"mat-hint",22),V(2,7),S(3,"div",23),V(4,8),c()),i&2){let e=g();p(),M(e.hintLabel?1:-1)}}var zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["mat-label"]]})}return i})(),Cd=new P("MatError"),ls=(()=>{class i{id=d(ye).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&He("id",o.id)},inputs:{id:"id"},features:[Te([{provide:Cd,useExisting:i}])]})}return i})(),ss=(()=>{class i{align="start";id=d(ye).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(He("id",o.id),D("align",null),O("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),wd=new P("MatPrefix"),cs=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[Te([{provide:wd,useExisting:i}])]})}return i})(),af=new P("MatSuffix");var Sd=new P("FloatingLabelParent"),gd=(()=>{class i{_elementRef=d(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(md);_ngZone=d(H);_parent=d(Sd);_resizeSubscription=new Oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return sf(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&O("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function sf(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var vd="mdc-line-ripple--active",Ar="mdc-line-ripple--deactivating",bd=(()=>{class i{_elementRef=d(j);_cleanupTransitionEnd;constructor(){let e=d(H),t=d(ke);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ar),e.add(vd)}deactivate(){this._elementRef.nativeElement.classList.add(Ar)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(Ar);e.propertyName==="opacity"&&o&&t.remove(vd,Ar)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),_d=(()=>{class i{_elementRef=d(j);_ngZone=d(H);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&Ge(Nh,5),t&2){let r;L(r=z())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&O("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Lh,ngContentSelectors:zh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(be(),ht(0,"div",1),ve(1,"div",2,0),V(3),Me(),ht(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),io=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i})}return i})();var In=new P("MatFormField"),lf=new P("MAT_FORM_FIELD_DEFAULT_OPTIONS"),yd="fill",cf="auto",xd="fixed",df="translateY(-50%)",rn=(()=>{class i{_elementRef=d(j);_changeDetectorRef=d(Ee);_platform=d(ce);_idGenerator=d(ye);_ngZone=d(H);_defaults=d(lf,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=yi("iconPrefixContainer");_textPrefixContainerSignal=yi("textPrefixContainer");_iconSuffixContainerSignal=yi("iconSuffixContainer");_textSuffixContainerSignal=yi("textSuffixContainer");_prefixSuffixContainers=se(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Js(zt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Nt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||cf}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||yd;this._appearanceSignal.set(t)}_appearanceSignal=x(yd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||xd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=De();constructor(){let e=this._defaults,t=d(ft);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),wt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=se(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Fe([void 0,void 0]),ne(()=>[t.errorState,t.userAriaDescribedBy]),Zr(),de(([[r,a],[s,u]])=>r!==s||a!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(oe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ze(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){tl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=se(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,$=`calc(${f} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${df} translateX(${$}))`,Y=a+s+u+h;return[W,Y]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&($s(r,o._labelChild,zt,5),ot(r,io,5)(r,wd,5)(r,af,5)(r,Cd,5)(r,ss,5)),t&2){Jr();let a;L(a=z())&&(o._formFieldControl=a.first),L(a=z())&&(o._prefixChildren=a),L(a=z())&&(o._suffixChildren=a),L(a=z())&&(o._errorChildren=a),L(a=z())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(qs(o._iconPrefixContainerSignal,pd,5)(o._textPrefixContainerSignal,ud,5)(o._iconSuffixContainerSignal,hd,5)(o._textSuffixContainerSignal,fd,5),Ge(Bh,5)(pd,5)(ud,5)(hd,5)(fd,5)(gd,5)(_d,5)(bd,5)),t&2){Jr(4);let r;L(r=z())&&(o._textField=r.first),L(r=z())&&(o._iconPrefixContainer=r.first),L(r=z())&&(o._textPrefixContainer=r.first),L(r=z())&&(o._iconSuffixContainer=r.first),L(r=z())&&(o._textSuffixContainer=r.first),L(r=z())&&(o._floatingLabel=r.first),L(r=z())&&(o._notchedOutline=r.first),L(r=z())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&O("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:In,useExisting:i},{provide:Sd,useExisting:i}])],ngContentSelectors:Uh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(be(jh),he(0,Gh,1,1,"ng-template",null,0,Ys),l(2,"div",6,1),C("click",function(a){return o._control.onContainerClick(a)}),k(4,$h,1,0,"div",7),l(5,"div",8),k(6,Yh,2,2,"div",9),k(7,Zh,3,0,"div",10),k(8,Kh,3,0,"div",11),l(9,"div",12),k(10,Qh,1,1,null,13),V(11),c(),k(12,Jh,3,0,"div",14),k(13,ef,3,0,"div",15),c(),k(14,tf,1,0,"div",16),c(),l(15,"div",17),k(16,nf,2,0,"div",18)(17,rf,5,1,"div",19),c()),t&2){let r;p(2),O("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),p(2),M(!o._hasOutline()&&!o._control.disabled?4:-1),p(2),M(o._hasOutline()?6:-1),p(),M(o._hasIconPrefix?7:-1),p(),M(o._hasTextPrefix?8:-1),p(2),M(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),p(2),M(o._hasTextSuffix?12:-1),p(),M(o._hasIconSuffix?13:-1),p(),M(o._hasOutline()?-1:14),p(),O("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();p(),M((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[gd,_d,al,bd,ss],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[yc,rn,le]})}return i})();var mf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),pf={passive:!0},kd=(()=>{class i{_platform=d(ce);_ngZone=d(H);_renderer=d(it).createRenderer(null,null);_styleLoader=d(ze);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ye;this._styleLoader.load(mf);let t=ct(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new R,a="cdk-text-field-autofilled",s=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,pf)));return this._monitoredElements.set(t,{subject:r,unlisten:u}),r}stopMonitoring(e){let t=ct(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Md=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({})}return i})();var Ed=new P("MAT_INPUT_VALUE_ACCESSOR");var oo=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,o,r){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var uf=["button","checkbox","file","hidden","image","radio","range","reset","submit"],hf=new P("MAT_INPUT_CONFIG"),Dr=(()=>{class i{_elementRef=d(j);_platform=d(ce);ngControl=d(_o,{optional:!0,self:!0});_autofillMonitor=d(kd);_ngZone=d(H);_formField=d(In,{optional:!0});_renderer=d(ke);_uid=d(ye).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(hf,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Nt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator($e.required)??!1}set required(e){this._required=Nt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&$a().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Nt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>$a().has(e));constructor(){let e=d(jn,{optional:!0}),t=d(qt,{optional:!0}),o=d(oo),r=d(Ed,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?cn(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new gi(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&wt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){uf.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&C("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(He("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),D("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),O("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",U]},exportAs:["matInput"],features:[Te([{provide:io,useExisting:i}]),Ve]})}return i})(),vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[Bt,Bt,Md,le]})}return i})();var ms=[{id:1,title:"Fase 01 - Mejoras en HOME",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:7,title:"Fase 02 - Mejoras en componentes generales (topbar/header/footer y shell)",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:13,title:"Fase 03 - Auditoria y migracion de tokens de diseno (--app-*)",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:17,title:"Fase 04 - Refinamientos topbar/shell y pagina contact-us",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:24,title:"Fase 05 - Mejoras layouts, topbar y footer",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:29,title:"Fase 06 - Navegacion, topbar, footer y bookmarks",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:35,title:"Fase 07 - Reemplazo de curriculum-vitae con contenido de Home",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:37,title:"Fase 08 - Creacion de componentes de animacion y mejora FRONT",priority:"high",status:"in_review",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:46,title:"Fase 09 - Mejoras al mundo POSTS",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:53,title:"Fase 10 - Content tier y fuentes de datos estaticas",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:62,title:"Fase 00 - Agrupacion de issues sueltos",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:94,title:"Fase 11 - Crear componente/pagina recepcion sponsor, publico, validar confirmacion de pago",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-09-09T00:00:00.000Z",tags:["riesgo-alto"]},{id:2,parentId:1,title:"Fix animacion de barras de timelapse_piramid en recarga/SSR: disparo del grow en cliente post-hidratacion (afterNextRender + Web Animations API); SSR a altura final",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:3,parentId:1,title:"Limpieza de CSS legacy con verificacion de uso: bloque #item1..#item7/.data y duplicados flotantes en timelapse_piramid.scss; reglas muertas en home.scss (#twitter, line-height .3em)",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:4,parentId:1,title:"Responsive y accesibilidad del Home: overflow horizontal, stacking movil, aria en decorativos, contraste",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:5,parentId:1,title:"Apariencia del Home: hero con avatar + name/title/short_desc + link web + CTA Cont\xE1ctame (sin telefonos)",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:6,parentId:1,title:"Actualizar specs del Home: home.spec.ts y timelapse_piramid.spec.ts",priority:"medium",status:"done",category:"tests",createdAt:"2026-08-16T00:00:00.000Z"},{id:78,parentId:1,title:"POC test-template: nuevo dise\xF1o Home cliente",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:79,parentId:1,title:"Tests de componentes del Home hasta est\xE1ndar deseable",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:80,parentId:1,title:"Mejorar apariencia/funcionalidad del Home p\xFAblico",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:83,parentId:1,title:"Traspaso a HOME: corregir animaci\xF3n de barras de timelapse_piramid en recarga/SSR (CSS keyframes)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:84,parentId:1,title:"Traspaso a HOME: limpieza de basura/redundancia en Home/home.scss",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:85,parentId:1,title:"Traspaso a HOME: responsive y accesibilidad del Home",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:8,parentId:7,title:"Branding en topbar: logo/inicial + app_name con link a /",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:9,parentId:7,title:"Menu movil en topbar (mat-menu): colapsar controles en pantallas chicas y desplegar items de LIST_MENU_APP con session activa (getMenuNavigationApp)",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:10,parentId:7,title:"Active state en topbar: routerLinkActive en Servicios y exact:true en el brand",priority:"low",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:11,parentId:7,title:"SEO: crear seo.service.ts (Title+Meta+NavigationEnd), eliminar app-mainhead (muerto), mover tags de <head> a index.html y quitar script de jQuery",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:12,parentId:7,title:"Footer: fix CSS position:bottom, simplificar toggle (solo clase .hidden) y rediseno del boton como pill etiquetado (oculto por defecto)",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:16,parentId:7,title:"Componente contact-us reutilizable: formulario de contacto extraido de eirl_services y usado en el Home (CTA Cont\xE1ctame)",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:14,parentId:13,title:"Migrar hardcodes a --app-*: footer.component.css (white hacia --app-text-on-accent), form-card-style.css, styles.css (#000 hacia --color-neutral-black); verificar tokens en los 4 temas y cerrar con ng test + build",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:18,parentId:17,title:"P\xE1gina p\xFAblica /public/contact-us: ruta, breadcrumb (\xEDcono mail), CTA Cont\xE1ctame a pesta\xF1a nueva y contact-us.spec.ts",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:19,parentId:17,title:"Breadcrumbs: separador entre nodos, chip .breadcrumbs-link e item activo neutro + borde de sesi\xF3n",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:20,parentId:17,title:"Men\xFAs mat-menu: hover/foco/activo en items y fondo del panel (styles.css global, v\xE1lido por template)",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:21,parentId:17,title:"Refinamiento topbar (pills): glass unificado, is-active por sesi\xF3n, template-switcher como pill y pills legibles",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:22,parentId:17,title:"Responsive topbar + layouts: barra derecha colapsa \u22641024px y padding-top 5rem/6.5rem (fix overlap)",priority:"low",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:23,parentId:17,title:"Tests: topbar.component.spec.ts (is-active por sesi\xF3n) y contact-us.spec.ts",priority:"medium",status:"done",category:"tests",createdAt:"2026-08-16T00:00:00.000Z"},{id:25,parentId:24,title:"T1: --app-background-page per-template",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:26,parentId:24,title:"T2: .session-layout sin background-color",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:27,parentId:24,title:"T3: Footer toggle button position:fixed superpone contenido",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:28,parentId:24,title:"T4: Footer .copyright font color no actualiza per-template",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:45,parentId:24,title:"Reajustar FOOTER y estilos de layouts",priority:"low",status:"backlog",category:"design",createdAt:"2026-09-01T00:00:00.000Z"},{id:65,parentId:24,title:"Validar temas legales de cookies e implementar confirmaci\xF3n de cookies",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:70,parentId:24,title:"Unificar barra superior en TopbarComponent compartido (guest/session)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:73,parentId:24,title:"Tokens de tama\xF1o --app-pills-* y --app-icon-size en variables.css",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:76,parentId:24,title:"Tests de topbar/template-switcher y layouts adelgazados",priority:"medium",status:"in_review",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:93,parentId:24,title:"Mejora de Topbar",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:30,parentId:29,title:"T1: ItemNavigation.secure - atributo booleano en interface",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:31,parentId:29,title:"T2: Topbar derecho - agregar link Contact Us",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:32,parentId:29,title:"T3: Topbar izquierdo mat-menu - paginas completas",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:33,parentId:29,title:"T4: Footer - indicador estado cookies",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:34,parentId:29,title:"T5: Bookmarks - redise\xF1o con tokens --app-*",priority:"medium",status:"backlog",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:74,parentId:29,title:"breadcrumbs.component.spec.ts (iconos, dedupe, estado activo, normalizeUrl)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:36,parentId:35,title:"Reemplazar contenido (ts/html/css) de CurriculumVitaeComponent con el dise\xF1o del Home y crear ruta p\xFAblica /resume",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:38,parentId:37,title:"Webcomponent base plane-grid: plano cuadriculado CSS Grid con celdas diferenciables",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:39,parentId:37,title:"Webcomponent lienzo: area blanca dentro del plano como espacio de diseno",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:40,parentId:37,title:"Webcomponent animacion beach (playa): plano estatico sobre lienzo, base dimension+plano",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:41,parentId:37,title:"POC secure/animationA: pagina que consume el webcomponent beach",priority:"medium",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:42,parentId:37,title:"Webcomponent animacion logo + POC secure/animationB",priority:"medium",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:43,parentId:37,title:"Modelo 3D: profundidad, perspectiva y orbita sobre el plano (Three.js)",priority:"low",status:"backlog",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:44,parentId:37,title:"Juego propio tipo Arkanoid (Canvas 2D)",priority:"low",status:"backlog",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:47,parentId:46,title:"PostsHomeComponent: reemplazar el array est\xE1tico posts por una lista din\xE1mica derivada de los posts Markdown (posts/markdown/*.md, con import.meta.glob +?raw) m\xE1s los posts especiales por componente (el-richard-yutu)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:48,parentId:46,title:"Sistema de autor\xEDa Markdown para posts: directorio posts/markdown con archivos .md (front-matter: title, date, tags, kind, slug) que soporten elementos variados (im\xE1genes, videos, links); registro expl\xEDcito v\xEDa imports est\xE1ticos en PostsService (loader .md a text) por compatibilidad con SSR",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:49,parentId:46,title:"Template de renderizado de post: componente /posts/:slug que parsea el .md con marked, sanitiza el HTML (DomSanitizer) y renderiza con estructura/estilo consistente (metadatos + body con img/video/link)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:50,parentId:46,title:"Rutas de posts: integrar posts/markdown v\xEDa :slug y conservar el post especial el-richard-yutu como ruta fija de componente (convivencia Markdown + componente)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:51,parentId:46,title:"Migrar las publicaciones example (hoy est\xE1ticas en posts.ts: ecos-codigo, mapa-aprendizaje, micro-habitos) a archivos .md en posts/markdown y enlazarlas; crear posts/markdown/richard-poem-wine como versi\xF3n Markdown del post el-richard-yutu (video via HTML/iframe) para comparar ambos enfoques",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-04T00:00:00.000Z"},{id:52,parentId:46,title:"Tests de PostsHomeComponent y del template de post: Markdown \u2192 render, ruta por slug, y coexistencia con el post especial el-richard-yutu",priority:"low",status:"done",category:"tests",createdAt:"2026-09-04T00:00:00.000Z"},{id:54,parentId:53,title:"Migrar posts Markdown a core/content/posts/*.md + PostsService (repositorio dinamico), registrados via imports estaticos (SSR)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:55,parentId:53,title:"Migrar CV a core/content/profile/cv-personal.json + CurriculumVitaeService (hidratacion ISO\u2192Date) y ruta publica /resume",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:56,parentId:53,title:"Migrar TODO_TASKS_V3 a core/content/todo/todos.json + TodoService (fuente estatica que puede migrar de origen)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:57,parentId:53,title:"Migrar skills a core/content/profile/skills.json + SkillsService (datos de CV/Resume)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:58,parentId:53,title:"Criterio content: solo fuentes de datos estaticas (no copy de UI); STATIC_TEXTS se mantiene en StaticsAppService",priority:"low",status:"done",category:"design",createdAt:"2026-09-08T00:00:00.000Z"},{id:59,parentId:53,title:"Menu topbar agrupado en secciones Publico/Seguro (getters por visible+secure, headers + divisores)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:60,parentId:53,title:"Topbar derecho: agregar pill Resumen (/public/resume) entre Servicios y Contacto",priority:"low",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:61,parentId:53,title:"Traspaso real de TODO a GitHub (proyecto/issues); hoy github-api simula el plan localmente",priority:"low",status:"backlog",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:15,parentId:62,title:"Traspasar tareas de TODO_TASKS_V3 a GitHub segun corresponda",priority:"low",status:"done",category:"config",createdAt:"2026-08-16T00:00:00.000Z"},{id:63,parentId:62,title:"Complementar ToDoTask.ts con las tareas pendientes",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:64,parentId:62,title:"Corregir gaps CSS: --inter-font y --color-gray-500 no definidos",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:66,parentId:62,title:"Migrar colores de los componentes de la app a variables --app-* (rest-api, gugol-analitycs, statics-bookmarks-crud, login, desktop, form-card-style, todo-task, el-richard-yutu, posts, eirl_services, session-layout, cookie-consent, breadcrumbs, footer, timelapse_piramid, yutu-player, home, guest-layout)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:67,parentId:62,title:"Migrar colores de los 4 temas a variables --app-* (darkdev/daydev/retrodev/pasteldev)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:68,parentId:62,title:"Migrar colores de variables.css / template default a variables --app-*",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:69,parentId:62,title:"Eliminar bloques legacy (html, body) y tokens muertos en variables.css",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:71,parentId:62,title:"Corregir overlap del contenido con pills fijos (desktop/responsive)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:72,parentId:62,title:"Borde de estado conectado/desconectado en barra superior (pill modo + item activo breadcrumbs)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:75,parentId:62,title:"Evaluar barra superior en p\xE1gina /cookies (queda fuera de todo layout)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:77,parentId:62,title:"Mejoras en la p\xE1gina Todo Task",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:81,parentId:65,title:"Auditar almacenamiento/cookies usados (localStorage sesi\xF3n+template, YouTube API, GA)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:82,parentId:65,title:"Implementar banner global + popup resumen + p\xE1gina /cookies + gating de terceros",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:86,parentId:77,title:"Agregar colapsar/expandir subtareas: click en el t\xEDtulo de la tarea expande sus subtareas; un nuevo click colapsa",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:95,parentId:77,title:"Mejoras en el filtro de estado de secure/github-tasks (multi-estado)",priority:"high",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:87,parentId:78,title:"Crear webcomponent timelapse_piramid + integrarlo en test-template",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:88,parentId:78,title:"Corregir animaci\xF3n de barras en recarga/SSR (CSS keyframes)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:89,parentId:78,title:"Migrar colores de test-template a variables --app-* (template default)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:90,parentId:78,title:"Limpieza de basura en test-template (IDs duplicados, reglas muertas, HTML inv\xE1lido)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:91,parentId:78,title:"Concepto CssTemplate/TEMPLATES + asignaci\xF3n per-usuario (template_id en PartnersEnv)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:92,parentId:78,title:"Responsive y accesibilidad de test-template",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:96,parentId:1,title:"Update de contenido de HOME",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-18T00:00:00.000Z"}];var Fr=class i{constructor(n){this.staticsApi=n}staticsApi;static GITHUB_TASKS_ENDPOINT="github/tasks";getTasks(n=!0){return n||!this.staticsApi.baseUrl?(console.log("Using local todos.json for tasks. This is intended for development/testing purposes only."),T(this.fromToDo(ms.map(e=>b({},e))))):T(this.fromToDo(ms.map(e=>b({},e))))}getGithubTasks(){return this.staticsApi.get(i.GITHUB_TASKS_ENDPOINT).pipe(ne(n=>n),Rn(()=>this.getTasks()))}fromToDo(n){let e=n.filter(o=>o.parentId===void 0||o.parentId===null),t=o=>n.filter(r=>r.parentId===o).map(r=>this.toGithubTask(r,t(r.id)));return{project:{number:0,title:"Plan local (todos.json)",url:""},repo:"droguier_v66595",generatedAt:new Date().toISOString(),source:"local",tasks:e.map(o=>this.toGithubTask(o,t(o.id)))}}flatten(n){let e=[],t=(o,r)=>{for(let a of o)e.push({id:a.number,title:a.title,category:a.labels[0]==="bug"?"bugfix":"feature",status:this.toStatus(a.state),priority:this.toPriority(a.priority),parentId:r,createdAt:""}),t(a.subtasks,a.number)};return t(n.tasks),e}toStatus(n){switch(n){case"open":return"pending";case"done":return"done";case"pending":return"in_progress";case"blocked":return"blocked";case"closed":return"done";case"cancelled":return"cancelled";default:return"backlog"}}toPriority(n){switch((n??"medium").toLowerCase()){case"high":return"high";case"critical":return"critical";case"low":return"low";default:return"medium"}}toGithubTask(n,e){return{number:n.id,title:n.title,labels:[n.category],state:n.status,url:"",priority:n.priority,subtasks:e}}static \u0275fac=function(e){return new(e||i)(Se(Mt))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var Od=(()=>{class i{_animationsDisabled=De();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&O("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var gf=["text"],vf=[[["mat-icon"]],"*"],bf=["mat-icon","*"];function _f(i,n){if(i&1&&S(0,"mat-pseudo-checkbox",1),i&2){let e=g();v("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function yf(i,n){if(i&1&&S(0,"mat-pseudo-checkbox",3),i&2){let e=g();v("disabled",e.disabled)}}function xf(i,n){if(i&1&&(l(0,"span",4),m(1),c()),i&2){let e=g();p(),X("(",e.group.label,")")}}var ps=new P("MAT_OPTION_PARENT_COMPONENT"),us=new P("MatOptgroup");var ro=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},bi=(()=>{class i{_element=d(j);_changeDetectorRef=d(Ee);_parent=d(ps,{optional:!0});group=d(us,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(ye).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Q;_text;_stateChanges=new R;constructor(){let e=d(ze);e.load(Lt),e.load(bo),this._signalDisableRipple=!!this._parent&&cn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!et(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ro(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&Ge(gf,7),t&2){let r;L(r=z())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&C("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(He("id",o.id),D("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),O("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",U]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:bf,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(be(vf),k(0,_f,1,2,"mat-pseudo-checkbox",1),V(1),l(2,"span",2,0),V(4,1),c(),k(5,yf,1,1,"mat-pseudo-checkbox",3),k(6,xf,2,1,"span",4),S(7,"div",5)),t&2&&(M(o.multiple?0:-1),p(5),M(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),p(),M(o.group&&o.group._inert?6:-1),p(),v("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Od,ar],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Pd(i,n,e){if(e.length){let t=n.toArray(),o=e.toArray(),r=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function Rd(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var Td=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[le]})}return i})();var hs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[Qt,Td,bi,le]})}return i})();var Cf=["panel"],wf=["*"];function Sf(i,n){if(i&1&&(ve(0,"div",1,0),V(2),Me()),i&2){let e=n.id,t=g();Xe(t._classList),O("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),He("id",t.id),D("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var fs=class{source;option;constructor(n,e){this.source=n,this.option=e}},Ad=new P("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Dd=(()=>{class i{_changeDetectorRef=d(Ee);_elementRef=d(j);_defaults=d(Ad);_animationsDisabled=De();_activeOptionChanges=Oe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Q;opened=new Q;closed=new Q;optionActivated=new Q;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=d(ye).getId("mat-autocomplete-");inertGroups;constructor(){let e=d(ce);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Vi(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new fs(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(t,o,r){if(t&1&&ot(r,bi,5)(r,us,5),t&2){let a;L(a=z())&&(o.options=a),L(a=z())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&Ge(ln,7)(Cf,5),t&2){let r;L(r=z())&&(o.template=r.first),L(r=z())&&(o.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",U],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",U],requireSelection:[2,"requireSelection","requireSelection",U],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",U],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",U]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Te([{provide:ps,useExisting:i}])],ngContentSelectors:wf,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,o){t&1&&(be(),go(0,Sf,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})();var kf={provide:oa,useExisting:uo(()=>gs),multi:!0};var Mf=new P("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(pe);return()=>li(i)}}),gs=(()=>{class i{_environmentInjector=d(Ke);_element=d(j);_injector=d(pe);_viewContainerRef=d(Rt);_zone=d(H);_changeDetectorRef=d(Ee);_dir=d(ft,{optional:!0});_formField=d(In,{optional:!0,host:!0});_viewportRuler=d(en);_scrollStrategy=d(Mf);_renderer=d(ke);_animationsDisabled=De();_defaults=d(Ad,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Oe.EMPTY;_breakpointObserver=d(Ba);_handsetLandscapeSubscription=Oe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Ft(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ir(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ze(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(de(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(de(()=>this._overlayAttached)):T()).pipe(ne(e=>e instanceof ro?e:null))}optionSelections=Pn(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Fe(e),we(()=>Ze(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(we(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new tt(e=>{let t=r=>{let a=je(r),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,u=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!u||!u.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(r)},o=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{o.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,o=t.keyCode,r=et(t);if(o===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=o===38||o===40;o===9||s&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(a=>a.selected);if(r){let a=this._getDisplayValue(r.value);o!==a&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Na()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new tt(o=>{pt(()=>{o.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Ue(()=>this._positionStrategy.reapplyLastPosition()),mo(0))??T();return Ze(e,t).pipe(we(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),dt(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;Ha(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Jt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=di(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Sc.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!et(e)||e.keyCode===38&&et(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new tn({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ci(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],a;this.position==="above"?a=r:this.position==="below"?a=t:a=[...t,...r],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,o=Pd(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let a=r._getHostElement(),s=Rd(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&ir(this._trackedModal,"aria-owns",t),Ha(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ir(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&C("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(a){return o._handleInput(a)})("keydown",function(a){return o._handleKeydown(a)})("click",function(){return o._handleClick()}),t&2&&D("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen||o.autocomplete==null?null:o.autocomplete.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",U]},exportAs:["matAutocompleteTrigger"],features:[Te([kf]),Ve]})}return i})(),Fd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({imports:[eo,hs,si,hs,le]})}return i})();var Of=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Pf=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Rf(i,n){i&1&&(l(0,"span",3),V(1,1),c())}function Tf(i,n){i&1&&(l(0,"span",6),V(1,2),c())}var Af=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,Df=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ff=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Nf(i,n){i&1&&S(0,"span",0)}function Lf(i,n){i&1&&(l(0,"span",1),V(1),c())}function zf(i,n){i&1&&(l(0,"span",3),V(1,1),c())}function Bf(i,n){i&1&&V(0,2)}function jf(i,n){i&1&&S(0,"span",7)}function Uf(i,n){if(i&1&&k(0,Bf,1,0)(1,jf,1,0,"span",7),i&2){let e=g();M(e.contentEditInput?0:1)}}function Vf(i,n){i&1&&V(0,3)}function Hf(i,n){i&1&&(l(0,"span",6),V(1,4),c())}var jd=["*"],Gf=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,Ud=new P("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Nd=new P("MatChipAvatar"),Ld=new P("MatChipTrailingIcon"),zd=new P("MatChipEdit"),bs=new P("MatChipRemove"),xs=new P("MatChip"),Vd=(()=>{class i{_elementRef=d(j);_parentChip=d(xs);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(ze).load(Lt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,o){t&2&&(D("disabled",o._getDisabledAttribute())("aria-disabled",o.disabled),O("mdc-evolution-chip__action--primary",o._isPrimary)("mdc-evolution-chip__action--secondary",!o._isPrimary)("mdc-evolution-chip__action--trailing",!o._isPrimary&&!o._isLeading))},inputs:{disabled:[2,"disabled","disabled",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:xi(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),Cs=(()=>{class i extends Vd{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275dir=G({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,o){t&1&&C("click",function(a){return o._handleClick(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(D("tabindex",o._getTabindex()),O("mdc-evolution-chip__action--presentational",!1))},features:[ut]})}return i})();var Hd=(()=>{class i extends Cs{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Pt(i)))(o||i)}})();static \u0275dir=G({type:i,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,o){t&2&&D("aria-hidden",null)},features:[Te([{provide:bs,useExisting:i}]),ut]})}return i})(),_s=(()=>{class i{_changeDetectorRef=d(Ee);_elementRef=d(j);_tagName=d(Qs);_ngZone=d(H);_focusMonitor=d(Kt);_globalRippleOptions=d($i,{optional:!0});_document=d(ue);_onFocus=new R;_onBlur=new R;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=De();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(ye).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Q;destroyed=new Q;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(lr);_injector=d(pe);constructor(){let e=d(ze);e.load(Lt),e.load(bo),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ze(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let o=t._elementRef.nativeElement;return o===e||o.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,o,r){if(t&1&&ot(r,Nd,5)(r,zd,5)(r,Ld,5)(r,bs,5)(r,Nd,5)(r,Ld,5)(r,zd,5)(r,bs,5),t&2){let a;L(a=z())&&(o.leadingIcon=a.first),L(a=z())&&(o.editIcon=a.first),L(a=z())&&(o.trailingIcon=a.first),L(a=z())&&(o.removeIcon=a.first),L(a=z())&&(o._allLeadingIcons=a),L(a=z())&&(o._allTrailingIcons=a),L(a=z())&&(o._allEditIcons=a),L(a=z())&&(o._allRemoveIcons=a)}},viewQuery:function(t,o){if(t&1&&Ge(Cs,5),t&2){let r;L(r=z())&&(o.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,o){t&1&&C("keydown",function(a){return o._handleKeydown(a)}),t&2&&(He("id",o.id),D("role",o.role)("aria-label",o.ariaLabel),Xe("mat-"+(o.color||"primary")),O("mdc-evolution-chip",!o._isBasicChip)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-basic-chip",o._isBasicChip)("mat-mdc-standard-chip",!o._isBasicChip)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon())("_mat-animation-noopable",o._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",U],highlighted:[2,"highlighted","highlighted",U],disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Te([{provide:xs,useExisting:i}])],ngContentSelectors:Pf,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,o){t&1&&(be(Of),S(0,"span",0),l(1,"span",1)(2,"span",2),k(3,Rf,2,0,"span",3),l(4,"span",4),V(5),S(6,"span",5),c()()(),k(7,Tf,2,0,"span",6)),t&2&&(p(3),M(o.leadingIcon?3:-1),p(4),M(o._hasTrailingIcon()?7:-1))},dependencies:[Vd],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var vs=(()=>{class i{_elementRef=d(j);_document=d(ue);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return i})(),ws=(()=>{class i extends _s{basicChipAttrName="mat-basic-chip-row";_renderer=d(ke);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new Q;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(oe(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,pt(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,o,r){if(t&1&&ot(r,vs,5),t&2){let a;L(a=z())&&(o.contentEditInput=a.first)}},viewQuery:function(t,o){if(t&1&&Ge(vs,5),t&2){let r;L(r=z())&&(o.defaultEditInput=r.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,o){t&1&&C("focus",function(){return o._handleFocus()})("click",function(a){return o._hasInteractiveActions()?o._handleClick(a):null})("dblclick",function(a){return o._handleDoubleclick(a)}),t&2&&(He("id",o.id),D("tabindex",o.disabled?null:-1)("aria-label",null)("aria-description",null)("role",o.role),O("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-chip-editing",o._isEditing)("mat-mdc-chip-editable",o.editable)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-leading-action",o._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[Te([{provide:_s,useExisting:i},{provide:xs,useExisting:i}]),ut],ngContentSelectors:Ff,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,o){t&1&&(be(Df),k(0,Nf,1,0,"span",0),k(1,Lf,2,0,"span",1),l(2,"span",2),k(3,zf,2,0,"span",3),l(4,"span",4),k(5,Uf,2,1)(6,Vf,1,0),S(7,"span",5),c()(),k(8,Hf,2,0,"span",6)),t&2&&(M(o._isEditing?-1:0),p(),M(o._hasLeadingActionIcon()?1:-1),p(),v("disabled",o.disabled),D("aria-description",o.ariaDescription)("aria-label",o.ariaLabel),p(),M(o.leadingIcon?3:-1),p(2),M(o._isEditing?5:6),p(3),M(o._hasTrailingIcon()?8:-1))},dependencies:[Cs,vs],styles:[Af],encapsulation:2,changeDetection:0})}return i})(),$f=(()=>{class i{_elementRef=d(j);_changeDetectorRef=d(Ee);_dir=d(ft,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new R;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new sn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Fe(null),we(()=>Ze(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Fe(this._chips)).subscribe(e=>{let t=[];e.forEach(o=>o._getActions().forEach(r=>t.push(r))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new wn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(oe(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(oe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Fe(null),oe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(oe(this._destroyed)).subscribe(e=>{let o=this._chips.toArray().indexOf(e.chip),r=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=r||a;this._isValidIndex(o)&&s&&(this._lastDestroyedFocusedChipIndex=o)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-set"]],contentQueries:function(t,o,r){if(t&1&&ot(r,_s,5),t&2){let a;L(a=z())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,o){t&1&&C("keydown",function(a){return o._handleKeydown(a)}),t&2&&D("role",o.role)},inputs:{disabled:[2,"disabled","disabled",U],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xi(e)]},ngContentSelectors:jd,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(be(),ve(0,"div",0),V(1),Me())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var ys=class{source;value;constructor(n,e){this.source=n,this.value=e}},Gd=(()=>{class i extends $f{ngControl=d(_o,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=d(ye).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator($e.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new Q;valueChange=new Q;_chips=void 0;stateChanges=new R;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=d(jn,{optional:!0}),t=d(qt,{optional:!0}),o=d(oo);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new gi(o,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(oe(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Ze(this.chipFocusChanges,this._chips.changes).pipe(oe(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,o=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&et(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),o?this._keyManager.setActiveItem(o):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&o){let r=this._chipActions.filter(u=>u._isPrimary===o._isPrimary&&!this._skipPredicate(u)),a=r.indexOf(o),s=e.keyCode===38?-1:1;e.preventDefault(),a>-1&&this._isValidIndex(a+s)&&this._keyManager.setActiveItem(r[a+s])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new ys(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-grid"]],contentQueries:function(t,o,r){if(t&1&&ot(r,ws,5),t&2){let a;L(a=z())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,o){t&1&&C("focus",function(){return o.focus()})("blur",function(){return o._blur()}),t&2&&(D("role",o.role)("tabindex",o.disabled||o._chips&&o._chips.length===0?-1:o.tabIndex)("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState),O("mat-mdc-chip-list-disabled",o.disabled)("mat-mdc-chip-list-invalid",o.errorState)("mat-mdc-chip-list-required",o.required))},inputs:{disabled:[2,"disabled","disabled",U],placeholder:"placeholder",required:[2,"required","required",U],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[Te([{provide:io,useExisting:i}]),ut],ngContentSelectors:jd,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(be(),ve(0,"div",0),V(1),Me())},styles:[Gf],encapsulation:2,changeDetection:0})}return i})(),$d=(()=>{class i{_elementRef=d(j);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new Q;placeholder="";id=d(ye).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=d(Ud),t=d(In,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let o,r;typeof t=="number"?(o=t,r=null):(o=t.keyCode,r=t.modifiers);let a=r?.length?et(e,...r):!et(e);if(o===e.keyCode&&a)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,o){t&1&&C("keydown",function(a){return o._keydown(a)})("blur",function(){return o._blur()})("focus",function(){return o._focus()})("input",function(){return o._onInput()}),t&2&&(He("id",o.id),D("disabled",o.disabled&&!o.disabledInteractive?"":null)("placeholder",o.placeholder||null)("aria-invalid",o._chipGrid&&o._chipGrid.ngControl?o._chipGrid.ngControl.invalid:null)("aria-required",o._chipGrid&&o._chipGrid.required||null)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("readonly",o._getReadonlyAttribute())("required",o._chipGrid&&o._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",U],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",U],readonly:[2,"readonly","readonly",U],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",U]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[Ve]})}return i})();var qd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=K({type:i});static \u0275inj=Z({providers:[oo,{provide:Ud,useValue:{separatorKeyCodes:[13]}}],imports:[Qt,le]})}return i})();var Wd=(i,n)=>n.value;function Wf(i,n){if(i&1){let e=ie();l(0,"mat-chip-row",9),C("removed",function(){let o=F(e).$implicit,r=g();return N(r.remove(o.value))}),m(1),l(2,"button",10)(3,"mat-icon"),m(4,"cancel"),c()()()}if(i&2){let e=n.$implicit;v("removable",!0),D("aria-label",e.label),p(),X(" ",e.label," "),p(),D("aria-label","Quitar "+e.label)}}function Yf(i,n){if(i&1&&(l(0,"mat-option",7),m(1),c()),i&2){let e=n.$implicit;v("value",e.value),p(),I(e.label)}}function Zf(i,n){i&1&&(l(0,"mat-option",8),m(1,"Sin opciones para agregar"),c())}var Nr=class i{options=me([]);label=me("Filtrar");placeholder=me("");fieldClass=me("form-field form-field--third");panelClass=me("gh-autocomplete-panel");value=el([]);search=x("");selectedOptions=se(()=>this.value().map(n=>this.options().find(e=>e.value===n)).filter(n=>!!n));selectedValues=se(()=>new Set(this.value()));filteredOptions=se(()=>{let n=this.search().trim().toLowerCase(),e=this.selectedValues(),t=this.options().filter(o=>!e.has(o.value));return n===""?t:t.filter(o=>o.label.toLowerCase().includes(n)||o.value.toLowerCase().includes(n))});onFocus(){this.search.set("")}onSearch(n){this.search.set(n.target.value)}onSelected(n){this.select(n.option.value),this.search.set("")}onTokenEnd(n){let e=(n.value??"").trim();if(n.chipInput.clear(),this.search.set(""),e==="")return;let t=this.options().find(o=>o.label.toLowerCase()===e.toLowerCase()||o.value.toLowerCase()===e.toLowerCase());t&&this.select(t.value)}remove(n){this.value.update(e=>e.filter(t=>t!==n))}select(n){this.selectedValues().has(n)||this.value.update(e=>[...e,n])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-multiselect-list"]],inputs:{options:[1,"options"],label:[1,"label"],placeholder:[1,"placeholder"],fieldClass:[1,"fieldClass"],panelClass:[1,"panelClass"],value:[1,"value"]},outputs:{value:"valueChange"},decls:14,vars:11,consts:[["chipGrid",""],["inputRef",""],["auto","matAutocomplete"],["appearance","fill","floatLabel","always"],[3,"removable"],["type","text",3,"focus","input","matChipInputTokenEnd","value","placeholder","matChipInputFor","matAutocomplete"],[3,"optionSelected"],[3,"value"],["disabled",""],[3,"removed","removable"],["matChipRemove",""]],template:function(e,t){if(e&1&&(l(0,"mat-form-field",3)(1,"mat-label"),m(2),c(),l(3,"mat-chip-grid",null,0),re(5,Wf,5,4,"mat-chip-row",4,Wd),l(7,"input",5,1),C("focus",function(){return t.onFocus()})("input",function(r){return t.onSearch(r)})("matChipInputTokenEnd",function(r){return t.onTokenEnd(r)}),c()(),l(9,"mat-autocomplete",6,2),C("optionSelected",function(r){return t.onSelected(r)}),re(11,Yf,2,2,"mat-option",7,Wd),k(13,Zf,2,0,"mat-option",8),c()()),e&2){let o=rt(4),r=rt(10);Xe(t.fieldClass()),p(2),I(t.label()),p(),D("aria-label",t.label()),p(2),ae(t.selectedOptions()),p(2),v("value",t.search())("placeholder",t.value().length>0?"":t.placeholder())("matChipInputFor",o)("matAutocomplete",r),p(2),Xe(t.panelClass()),p(2),ae(t.filteredOptions()),p(2),M(t.filteredOptions().length===0?13:-1)}},dependencies:[Bt,rn,zt,vi,Fd,Dd,bi,gs,qd,Gd,$d,Hd,ws,$t,Qe],styles:["[_nghost-%COMP%]{display:block}  .mat-mdc-form-field-subscript-wrapper{display:none}  .mat-mdc-chip-input{flex:1 1 auto;min-width:7rem}"]})};var Ss=[{value:"open",label:"Open"},{value:"closed",label:"Closed"},{value:"pending",label:"Pending"},{value:"in_progress",label:"In progress"},{value:"done",label:"Done"},{value:"in_review",label:"In review"},{value:"backlog",label:"Backlog"},{value:"blocked",label:"Blocked"},{value:"cancelled",label:"Cancelled"}],Yd=["feature","refactor","bugfix","design","tests","infra","config"];var Kf=(i,n)=>n.label,Xf=(i,n)=>n.task.number;function Qf(i,n){if(i&1&&m(0),i&2){let e=g().$implicit;ea(" \xB7 ",e.count," ",e.label.toLowerCase()," ")}}function Jf(i,n){if(i&1&&k(0,Qf,1,2),i&2){let e=n.$implicit;M(e.count>0?0:-1)}}function eg(i,n){if(i&1&&(l(0,"span",2),m(1),re(2,Jf,1,1,null,null,Kf),c()),i&2){let e=g();p(),ea("",n.project.title," \xB7 ",e.totalCount()," tasks "),p(),ae(e.stateCounts())}}function tg(i,n){i&1&&(l(0,"div",4),m(1,"Cargando tareas\u2026"),c())}function ng(i,n){i&1&&(l(0,"div",5),m(1),c()),i&2&&(p(),I(n))}function ig(i,n){if(i&1){let e=ie();l(0,"div",12)(1,"mat-form-field",16)(2,"mat-label"),m(3,"Nombre"),c(),l(4,"input",17),C("input",function(o){F(e);let r=g(2);return N(r.onFilterText(o))}),c()(),l(5,"app-multiselect-list",18),C("valueChange",function(o){F(e);let r=g(2);return N(r.setStates(o))}),c(),l(6,"button",19),C("click",function(){F(e);let o=g(2);return N(o.clearFilters())}),m(7,"Limpiar"),c()()}if(i&2){let e=g(2);D("aria-hidden",!e.filtersExpanded()),p(4),v("value",e.filterText()),D("maxlength",e.titleMaxLength),p(),v("options",e.stateOptions)("value",e.selectedStates())}}function og(i,n){if(i&1&&(l(0,"span",29),m(1,"\u25B8"),c()),i&2){let e=g().$implicit,t=g(2);O("is-expanded",t.expandedIds().has(e.task.number))}}function rg(i,n){if(i&1&&(l(0,"span",27),m(1),c()),i&2){let e=g().$implicit;p(),I(e.task.priority)}}function ag(i,n){if(i&1&&(l(0,"span"),m(1),c()),i&2){let e=n.$implicit,t=g(3);Xe(ta("gh-badge gh-badge--label ",t.categoryClass(e))),p(),I(e)}}function sg(i,n){if(i&1){let e=ie();l(0,"li",20)(1,"a",21),m(2),c(),l(3,"div",22)(4,"div",23)(5,"h3",24),C("click",function(){let o=F(e).$implicit,r=g(2);return N(o.hasSubtasks&&r.toggleExpand(o.task.number))}),k(6,og,2,2,"span",25),m(7),c()(),l(8,"div",26),k(9,rg,2,1,"span",27),re(10,ag,2,4,"span",28,Ht),c()(),l(12,"span"),m(13),c()()}if(i&2){let e=n.$implicit,t=g(2);Tt("--depth",e.depth),O("gh-item--child",e.depth>0),p(),v("href",e.task.url,Vt)("title","Abrir issue #"+e.task.number),p(),X("#",e.task.number),p(3),O("gh-title--expandable",e.hasSubtasks),D("aria-expanded",e.hasSubtasks?t.expandedIds().has(e.task.number):null),p(),M(e.hasSubtasks?6:-1),p(),X(" ",e.task.title," "),p(2),M(e.task.priority?9:-1),p(),ae(e.task.labels),p(2),Xe(ta("gh-state gh-state--",e.task.state)),p(),I(e.task.state)}}function lg(i,n){i&1&&(l(0,"li",15),m(1,"Sin tareas que coincidan con el filtro."),c())}function cg(i,n){if(i&1){let e=ie();l(0,"section",7)(1,"header",8)(2,"button",9),C("click",function(){F(e);let o=g();return N(o.toggleFilters())}),l(3,"span",10),m(4,"\u25B8"),c(),l(5,"span",11),m(6,"Filtro"),c()()(),k(7,ig,8,5,"div",12),c(),l(8,"ul",13),re(9,sg,14,17,"li",14,Xf,!1,lg,2,0,"li",15),c()}if(i&2){let e=g();p(2),D("aria-expanded",e.filtersExpanded())("aria-controls","gh-filter-row"),p(),O("is-expanded",e.filtersExpanded()),p(4),M(e.filtersExpanded()?7:-1),p(2),ae(e.rows())}}function dg(i,n){i&1&&(l(0,"div",6),m(1,"Sin tareas para mostrar."),c())}var mg=150,Lr=class i{toDoApi=d(Fr);platformId=d(Ne);destroyRef=d(Ct);data=x(null);loading=x(!0);error=x(null);expandedIds=x(new Set);filterText=x("");filtersExpanded=x(!1);selectedStates=x([]);titleMaxLength=mg;stateOptions=Ss;categoryColorClasses=new Set(Yd.map(n=>`gh-badge--label-${n}`));categoryClass(n){let e=`gh-badge--label-${n.toLowerCase()}`;return this.categoryColorClasses.has(e)?e:"gh-badge--label"}rows=se(()=>{let n=this.data();if(!n)return[];let e=this.filterText().toLowerCase().trim(),t=this.selectedStates(),o=e!==""||t.length>0;return this.collectRows(n.tasks,e,t,o,this.expandedIds())});counts=se(()=>this.aggregateCounts(this.data()?.tasks??[]));totalCount=se(()=>this.counts().total);stateCounts=se(()=>Ss.map(n=>({label:n.label,count:this.counts().byState[n.value]})));constructor(){if(cl(this.platformId)){this.loading.set(!1);return}this.load()}toggleExpand(n){this.expandedIds.update(e=>{let t=new Set(e);return t.has(n)?t.delete(n):t.add(n),t})}onFilterText(n){this.filterText.set(n.target.value)}setStates(n){this.selectedStates.set(n)}clearFilters(){this.filterText.set(""),this.selectedStates.set([])}toggleFilters(){this.filtersExpanded.update(n=>!n)}collectRows(n,e,t,o,r){let a=[],s=(u,h,f)=>{let _=u.subtasks.length>0,A=e===""||u.title.toLowerCase().includes(e),$=t.length===0||t.includes(u.state),W=A&&$,Y=[],Ce=!1;if(o||r.has(u.number))for(let jt of u.subtasks)s(jt,h+1,Y)&&(Ce=!0);return o&&!(W||Ce)?!1:(f.push({task:u,depth:h,hasSubtasks:_}),f.push(...Y),!0)};for(let u of n)s(u,0,a);return a}aggregateCounts(n){let e={open:0,closed:0,pending:0,in_progress:0,done:0,blocked:0,cancelled:0,in_review:0,backlog:0},t=0,o=r=>{for(let a of r)t+=1,e[a.state]+=1,o(a.subtasks)};return o(n),{total:t,byState:e}}load(){this.toDoApi.getTasks().pipe(no(this.destroyRef)).subscribe({next:n=>{this.data.set(n),this.loading.set(!1)},error:()=>{this.error.set("No se pudo cargar las tareas de GitHub"),this.loading.set(!1)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-github-tasks"]],decls:10,vars:2,consts:[[1,"gh-panel"],[1,"gh-head"],[1,"gh-summary"],["id","selectFilter"],["role","status",1,"gh-skeleton"],["role","status",1,"gh-error"],["role","status",1,"gh-empty"],["aria-label","Filtro",1,"gh-filter","glass-panel"],[1,"gh-filter-header"],["type","button",1,"gh-filter-toggle",3,"click"],[1,"gh-filter-chevron"],[1,"gh-filter-title"],["id","gh-filter-row",1,"gh-filter-row"],[1,"gh-list"],[1,"gh-item",3,"gh-item--child","--depth"],["role","status",1,"gh-empty-item"],["appearance","fill","floatLabel","always",1,"form-field","form-field--full"],["matInput","","type","text","placeholder","Buscar por t\xEDtulo\u2026",3,"input","value"],["label","Estado","placeholder","Buscar por estado\u2026","fieldClass","form-field form-field--third","panelClass","gh-autocomplete-panel",3,"valueChange","options","value"],["type","button","aria-label","Limpiar filtros",1,"form-button","glass-panel",3,"click"],[1,"gh-item"],["target","_blank","rel","noopener",1,"gh-id",3,"href","title"],[1,"gh-body"],[1,"gh-title-line"],[1,"gh-title",3,"click"],[1,"gh-chevron",3,"is-expanded"],[1,"gh-badges"],[1,"gh-badge","gh-badge--priority"],[3,"class"],[1,"gh-chevron"]],template:function(e,t){if(e&1&&(l(0,"section",0)(1,"header",1)(2,"h2"),m(3,"Proyecto GitHub"),c(),k(4,eg,4,2,"span",2),c(),l(5,"div",3),k(6,tg,2,0,"div",4)(7,ng,2,1,"div",5)(8,cg,12,6)(9,dg,2,0,"div",6),c()()),e&2){let o,r;p(4),M((o=t.data())?4:-1,o),p(2),M(t.loading()?6:(r=t.error())?7:(r=t.data())?8:9,r)}},dependencies:[Bt,rn,zt,vi,Dr,Nr],styles:['[_nghost-%COMP%]{display:block;min-height:100vh;box-sizing:border-box;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-sans, "Bitter", Helvetica)}.gh-panel[_ngcontent-%COMP%]{max-width:950px;margin-inline:auto;padding:2.25rem 1.5rem 3rem}.gh-head[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.5rem 1rem;margin-bottom:1.5rem}.gh-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.4rem;font-weight:700;color:var(--app-text-primary);letter-spacing:.01em}.gh-summary[_ngcontent-%COMP%]{font-size:.8rem;color:var(--app-text-secondary)}.gh-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem;padding:.55rem 1rem;border-radius:.7rem;box-sizing:border-box;margin-bottom:1.1rem}.gh-filter-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.gh-filter-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;border:0;background:transparent;cursor:pointer;padding:.2rem .3rem;border-radius:var(--app-pills-radius);color:var(--app-text-primary);box-sizing:border-box}.gh-filter-toggle[_ngcontent-%COMP%]:hover, .gh-filter-toggle[_ngcontent-%COMP%]:focus-visible{background:var(--app-chip-background)}.gh-filter-chevron[_ngcontent-%COMP%]{display:inline-block;font-size:.85rem;line-height:1;color:var(--app-accent-tertiary);transition:transform .2s ease}.gh-filter-chevron.is-expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.gh-filter-title[_ngcontent-%COMP%]{font-size:var(--app-pills-font-size);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--app-text-primary);white-space:nowrap}.gh-filter-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem .9rem}.gh-empty-item[_ngcontent-%COMP%]{padding:1rem;border-radius:.6rem;border:1px dashed color-mix(in srgb,var(--app-text-primary) 25%,transparent);color:var(--app-text-secondary)}.gh-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.7rem}.gh-item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.65rem .8rem;padding:.75rem 1rem;border-radius:.6rem;background:color-mix(in srgb,var(--app-background-base) 55%,var(--app-chart-series-7));border:1px solid color-mix(in srgb,var(--app-text-primary) 12%,transparent);padding-left:calc(1rem + var(--depth, 0) * 1.6rem);position:relative;box-shadow:inset calc(var(--depth, 0) * -3px) 0 0 0 var(--app-accent-tertiary)}.gh-item--child[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-accent-tertiary) 28%,var(--app-background-base))}.gh-id[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:var(--app-accent-primary);white-space:nowrap;text-decoration:none}.gh-id[_ngcontent-%COMP%]:hover{text-decoration:underline}.gh-body[_ngcontent-%COMP%]{flex:1 1 260px;min-width:0}.gh-title-line[_ngcontent-%COMP%]{display:flex;align-items:baseline;flex-wrap:wrap;gap:.6rem}.gh-title[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;line-height:1.35;color:var(--app-text-primary)}.gh-title--expandable[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.gh-chevron[_ngcontent-%COMP%]{display:inline-block;margin-right:.35rem;font-size:.85rem;line-height:1;color:var(--app-accent-tertiary);transition:transform .2s ease}.gh-chevron.is-expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.gh-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.35rem}.gh-badge[_ngcontent-%COMP%]{font-size:.68rem;font-weight:600;text-transform:capitalize;letter-spacing:.03em;padding:.22em .7em;border-radius:999px;border:1px solid currentColor;white-space:nowrap}.gh-badge--status[_ngcontent-%COMP%]{color:var(--app-status-info)}.gh-badge--priority[_ngcontent-%COMP%]{color:var(--app-status-warning)}.gh-badge--label[_ngcontent-%COMP%]{color:var(--app-status-neutral)}.gh-badge--label-feature[_ngcontent-%COMP%]{color:var(--app-status-success)}.gh-badge--label-refactor[_ngcontent-%COMP%]{color:var(--app-status-primary)}.gh-badge--label-bugfix[_ngcontent-%COMP%]{color:var(--app-status-error)}.gh-badge--label-design[_ngcontent-%COMP%]{color:var(--app-accent-violet)}.gh-badge--label-tests[_ngcontent-%COMP%]{color:var(--app-status-accent)}.gh-badge--label-infra[_ngcontent-%COMP%]{color:var(--app-accent-hot-red)}.gh-badge--label-config[_ngcontent-%COMP%]{color:var(--app-accent-blue-soft)}.gh-state[_ngcontent-%COMP%]{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:.18em .65em;border-radius:999px;border:1px solid currentColor;white-space:nowrap;margin-left:auto;align-self:flex-start;margin-top:.35rem}.gh-state--open[_ngcontent-%COMP%]{color:var(--app-status-info)}.gh-state--closed[_ngcontent-%COMP%]{color:var(--app-status-muted)}.gh-state--pending[_ngcontent-%COMP%]{color:var(--app-status-pending)}.gh-state--in_progress[_ngcontent-%COMP%]{color:var(--app-status-warning)}.gh-state--done[_ngcontent-%COMP%]{color:var(--app-status-success)}.gh-state--blocked[_ngcontent-%COMP%]{color:var(--app-status-danger)}.gh-state--cancelled[_ngcontent-%COMP%]{color:var(--app-status-disabled)}.gh-state--in_review[_ngcontent-%COMP%]{color:var(--app-status-accent)}.gh-state--backlog[_ngcontent-%COMP%]{color:var(--app-status-neutral)}.gh-skeleton[_ngcontent-%COMP%], .gh-error[_ngcontent-%COMP%], .gh-empty[_ngcontent-%COMP%]{padding:1rem;border-radius:.6rem;border:1px dashed color-mix(in srgb,var(--app-text-primary) 25%,transparent);color:var(--app-text-secondary)}.gh-error[_ngcontent-%COMP%]{color:var(--app-status-error)}']})};function pg(i,n){i&1&&ht(0,"div",1)}var zr=class i{rows=me(12);cols=me(16);cellSize=me(40);gridColumns=se(()=>["repeat("+this.cols()+", "+this.cellSize()+"px)"].join(" "));cells=se(()=>{let n=Math.max(0,this.rows()*this.cols());return Array.from({length:n},(e,t)=>t)});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-plane-grid"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:3,vars:4,consts:[["role","grid","aria-label","Plano de dise\xF1o",1,"plane-grid"],["role","gridcell",1,"plane-cell"]],template:function(e,t){e&1&&(ve(0,"div",0),re(1,pg,1,0,"div",1,Ht),Me()),e&2&&(Tt("grid-template-columns",t.gridColumns())("grid-template-rows","repeat("+t.rows()+", "+t.cellSize()+"px)"),p(),ae(t.cells()))},styles:["[_nghost-%COMP%]{display:inline-block}.plane-grid[_ngcontent-%COMP%]{display:grid;gap:1px;background-color:var(--app-border-default);border:1px solid var(--app-border-default);padding:1px;width:max-content;box-sizing:border-box}.plane-cell[_ngcontent-%COMP%]{background-color:var(--app-background-base);transition:background-color .2s ease}.plane-cell[_ngcontent-%COMP%]:nth-child(2n){background-color:color-mix(in srgb,var(--app-background-base) 92%,var(--app-accent-primary))}"]})};var ug=["*"],_i=class i{rows=me(12);cols=me(16);cellSize=me(40);canvasColumns=se(()=>["repeat("+this.cols()+", "+this.cellSize()+"px)"].join(" "));static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-scene-canvas"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},ngContentSelectors:ug,decls:4,vars:5,consts:[["role","region","aria-label","Lienzo de dise\xF1o",1,"scene-canvas"],[1,"scene-canvas-grid",3,"rows","cols","cellSize"],[1,"scene-canvas-lienzo"]],template:function(e,t){e&1&&(be(),l(0,"div",0),S(1,"app-plane-grid",1),l(2,"div",2),V(3),c()()),e&2&&(p(),v("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize()),p(),Tt("grid-template-columns",t.canvasColumns()))},dependencies:[zr],styles:["[_nghost-%COMP%]{display:inline-block}.scene-canvas[_ngcontent-%COMP%]{position:relative;display:inline-block;line-height:0}.scene-canvas-grid[_ngcontent-%COMP%]{display:block}.scene-canvas-lienzo[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:max-content;height:max-content;display:grid;place-items:center;background-color:var(--app-chip-background);border:2px solid var(--app-border-strong);box-shadow:0 0 0 1px var(--app-shadow);box-sizing:border-box}"]})};var Br=class i{rows=me(14);cols=me(20);cellSize=me(36);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-beach"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:7,vars:3,consts:[[3,"rows","cols","cellSize"],["role","img","aria-label","Escena de playa",1,"beach-scene"],[1,"beach-sky"],[1,"beach-sun"],[1,"beach-sea"],[1,"beach-sand"],[1,"beach-wave"]],template:function(e,t){e&1&&(l(0,"app-scene-canvas",0)(1,"div",1),S(2,"div",2)(3,"div",3)(4,"div",4),l(5,"div",5),S(6,"div",6),c()()()),e&2&&v("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize())},dependencies:[_i],styles:[".beach-scene[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-width:240px;min-height:160px;overflow:hidden}.beach-sky[_ngcontent-%COMP%]{position:absolute;inset:0 0 45%;background:linear-gradient(to bottom,var(--app-chart-series-4),var(--app-chart-series-3))}.beach-sun[_ngcontent-%COMP%]{position:absolute;top:12%;right:14%;width:14%;aspect-ratio:1;border-radius:50%;background:var(--app-chart-series-2)}.beach-sea[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:55%;height:22%;background:var(--app-chart-series-3);border-top:2px solid var(--app-chart-series-5)}.beach-sand[_ngcontent-%COMP%]{position:absolute;inset:auto 0 0;height:30%;background:var(--app-chart-series-2)}.beach-wave[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:6px;background:#ffffff59}"]})};var jr=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-animation-a"]],decls:6,vars:0,consts:[[1,"animation-page"],[1,"animation-caption"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h2"),m(2,"Animaci\xF3n \xB7 Playa"),c(),l(3,"p",1),m(4,"Escena plana sobre el lienzo dentro del plano de dise\xF1o."),c(),S(5,"app-beach"),c())},dependencies:[Br],styles:[".animation-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.animation-caption[_ngcontent-%COMP%]{color:var(--app-text-muted);margin:0}"]})};var Ur=class i{rows=me(10);cols=me(16);cellSize=me(40);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-logo-animation"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:6,vars:3,consts:[[3,"rows","cols","cellSize"],["role","img","aria-label","Logo droguier",1,"logo-mark"],[1,"logo-glyph"],[1,"logo-name"]],template:function(e,t){e&1&&(l(0,"app-scene-canvas",0)(1,"div",1)(2,"span",2),m(3,"d"),c(),l(4,"span",3),m(5,"droguier"),c()()()),e&2&&v("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize())},dependencies:[_i],styles:['.logo-mark[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem 2.5rem;background-color:var(--app-accent-primary);border-radius:8px}.logo-glyph[_ngcontent-%COMP%]{font-family:var(--app-font-display, "Bitter", Georgia, serif);font-size:3rem;font-weight:700;line-height:1;color:var(--app-text-on-accent)}.logo-name[_ngcontent-%COMP%]{font-family:var(--app-font-display, "Bitter", Georgia, serif);font-size:1.1rem;letter-spacing:.2rem;text-transform:uppercase;color:var(--app-text-on-accent)}']})};var Vr=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-animation-b"]],decls:6,vars:0,consts:[[1,"animation-page"],[1,"animation-caption"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h2"),m(2,"Animaci\xF3n \xB7 Logo"),c(),l(3,"p",1),m(4,"Logo plano sobre el lienzo dentro del plano de dise\xF1o."),c(),S(5,"app-logo-animation"),c())},dependencies:[Ur],styles:[".animation-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.animation-caption[_ngcontent-%COMP%]{color:var(--app-text-muted);margin:0}"]})};var hg="DRO-SPN",fg=new P("PAYMENT_CONFIRM_DELAY_MS",{providedIn:"root",factory:()=>3e3}),Zd=0;function gg(){Zd+=1;let i=new Date().toISOString().slice(0,10).replace(/-/g,""),n=Math.random().toString(36).slice(2,6).toUpperCase();return`${hg}-${i}-${Zd}-${n}`}var ks=class{provider="mock";isCompatible(n){return!0}confirm(n,e,t){return{reference:e,provider:this.provider,sponsorName:n.sponsorName,currency:n.currency,amount:n.amount,status:t,createdAt:new Date().toISOString(),message:t==="pending"?"Validando la confirmaci\xF3n de pago\u2026":t==="confirmed"?"Pago confirmado por el servicio integrado (proveedor mock \xB7 pr\xF3xima integraci\xF3n real).":"El servicio de pago rechaz\xF3 la operaci\xF3n (proveedor mock)."}}},Hr=class i{confirmDelayMs=d(fg);platformId=d(Ne);adapters=[new ks];failNext=x(!1);createPayment(n){let e=this.resolveAdapter(n),t=gg(),o=e.confirm(n,t,"pending");return Le(this.platformId)?On(T(o),T(o).pipe(mo(this.confirmDelayMs),ne(()=>{let r=this.failNext();return this.failNext.set(!1),e.confirm(n,t,r?"failed":"confirmed")}))):T(o)}failNextPaymentOnce(){this.failNext.set(!0)}resolveAdapter(n){let e=this.adapters.find(t=>t.isCompatible(n));if(!e)throw new Error("No hay ning\xFAn proveedor de pago configurado para esta solicitud.");return e}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var vg=(i,n)=>n.code;function bg(i,n){i&1&&(l(0,"div",4)(1,"mat-icon",7),m(2,"hourglass_top"),c(),l(3,"h2"),m(4,"Procesando pago\u2026"),c(),l(5,"p"),m(6," Estamos validando la confirmaci\xF3n de tu pago con el servicio integrado. Esto puede tardar unos segundos. "),c()())}function _g(i,n){i&1&&(l(0,"mat-icon",13),m(1,"verified"),c(),l(2,"h2"),m(3,"Pago confirmado"),c())}function yg(i,n){i&1&&(l(0,"mat-icon",13),m(1,"error_outline"),c(),l(2,"h2"),m(3,"Pago no confirmado"),c())}function xg(i,n){if(i&1){let e=ie();l(0,"button",14),C("click",function(){F(e);let o=g(2);return N(o.retry())}),l(1,"mat-icon",15),m(2,"refresh"),c(),l(3,"span"),m(4,"Reintentar"),c()()}}function Cg(i,n){if(i&1){let e=ie();l(0,"button",14),C("click",function(){F(e);let o=g(2);return N(o.retry())}),l(1,"mat-icon",15),m(2,"favorite"),c(),l(3,"span"),m(4,"Nuevo patrocinio"),c()()}}function wg(i,n){if(i&1&&(l(0,"div",8),k(1,_g,4,0)(2,yg,4,0),l(3,"p",9),m(4),c(),l(5,"dl",10)(6,"div",11)(7,"dt"),m(8,"Referencia"),c(),l(9,"dd"),m(10),c()(),l(11,"div",11)(12,"dt"),m(13,"Monto"),c(),l(14,"dd"),m(15),c()(),l(16,"div",11)(17,"dt"),m(18,"Proveedor"),c(),l(19,"dd"),m(20),c()(),l(21,"div",11)(22,"dt"),m(23,"Patrocinante"),c(),l(24,"dd"),m(25),c()()(),k(26,xg,5,0,"button",12)(27,Cg,5,0,"button",12),c()),i&2){let e,t,o,r,a,s,u,h=g();O("status-card--confirmed",((e=h.response())==null?null:e.status)==="confirmed")("status-card--failed",((t=h.response())==null?null:t.status)==="failed"),p(),M(((o=h.response())==null?null:o.status)==="confirmed"?1:2),p(3),I((r=h.response())==null?null:r.message),p(6),I((a=h.response())==null?null:a.reference),p(5),I(h.formatAmount(h.response().currency,h.response().amount)),p(5),I(h.providerLabel()),p(5),I((s=h.response())==null?null:s.sponsorName),p(),M(((u=h.response())==null?null:u.status)==="failed"?26:27)}}function Sg(i,n){if(i&1&&(l(0,"mat-error"),m(1),c()),i&2){let e=g(2);p(),I(e.fieldError("sponsorName"))}}function kg(i,n){if(i&1&&(l(0,"mat-error"),m(1),c()),i&2){let e=g(2);p(),I(e.fieldError("email"))}}function Mg(i,n){if(i&1){let e=ie();l(0,"button",31),C("click",function(){let o=F(e).$implicit,r=g(2);return N(r.selectCurrency(o))}),m(1),c()}if(i&2){let e=n.$implicit,t=g(2);O("is-active",t.isCurrencyActive(e.code)),p(),X(" ",e.label," ")}}function Eg(i,n){if(i&1&&(l(0,"mat-error"),m(1),c()),i&2){let e=g(2);p(),I(e.fieldError("amount"))}}function Ig(i,n){if(i&1){let e=ie();l(0,"button",32),C("click",function(){let o=F(e).$implicit,r=g(2);return N(r.selectAmount(o))}),m(1),c()}if(i&2){let e=n.$implicit,t=g(2);p(),X(" ",t.formatAmount(t.currentCurrency().code,e)," ")}}function Og(i,n){if(i&1&&(l(0,"mat-error"),m(1),c()),i&2){let e=g(2);p(),I(e.fieldError("message"))}}function Pg(i,n){if(i&1){let e=ie();l(0,"form",16),C("ngSubmit",function(){F(e);let o=g();return N(o.submit())}),l(1,"h2"),m(2,"Realizar un aporte"),c(),l(3,"mat-form-field",17)(4,"mat-label"),m(5,"Tu nombre"),c(),l(6,"mat-icon",18),m(7,"person"),c(),S(8,"input",19),k(9,Sg,2,1,"mat-error"),c(),l(10,"mat-form-field",17)(11,"mat-label"),m(12,"Tu correo (opcional)"),c(),l(13,"mat-icon",18),m(14,"mail"),c(),S(15,"input",20),k(16,kg,2,1,"mat-error"),c(),l(17,"fieldset",21)(18,"legend"),m(19,"Moneda"),c(),l(20,"div",22),re(21,Mg,2,3,"button",23,vg),c()(),l(23,"mat-form-field",17)(24,"mat-label"),m(25,"Monto"),c(),l(26,"span",24),m(27),c(),l(28,"input",25),C("input",function(o){F(e);let r=g();return N(r.onAmountInput(o))}),c(),k(29,Eg,2,1,"mat-error"),c(),l(30,"div",26)(31,"span",27),m(32,"Sugeridos:"),c(),re(33,Ig,2,1,"button",28,Ht),c(),l(35,"mat-form-field",17)(36,"mat-label"),m(37,"Mensaje (opcional)"),c(),l(38,"mat-icon",18),m(39,"message"),c(),S(40,"textarea",29),k(41,Og,2,1,"mat-error"),c(),l(42,"button",30)(43,"mat-icon",15),m(44,"verified"),c(),l(45,"span"),m(46,"Enviar y confirmar pago"),c()()()}if(i&2){let e=g();v("formGroup",e.form),p(9),M(e.fieldError("sponsorName")?9:-1),p(7),M(e.fieldError("email")?16:-1),p(5),ae(e.currencyOptions),p(6),I(e.currency()),p(2),M(e.fieldError("amount")?29:-1),p(4),ae(e.currentCurrency().suggestions),p(7),v("maxlength",500),p(),M(e.fieldError("message")?41:-1),p(),v("disabled",e.form.invalid)}}var Rg=[{code:"CLP",label:"CLP \xB7 Peso chileno",suggestions:[1e3,2500,5e3,1e4]},{code:"USD",label:"USD \xB7 D\xF3lar",suggestions:[1,3,5,10]},{code:"PEN",label:"PEN \xB7 Sol peruano",suggestions:[1,3,5,10,20]}];function Kd(i){if(typeof i=="number")return i;let n=parseFloat(String(i??"").replace(",","."));return Number.isFinite(n)?n:0}function Tg(i){let n=i.value;if(n==null||n==="")return null;let e=Kd(n);return Number.isFinite(e)&&e>=.01?null:{min:{min:.01,actual:e}}}var Gr=class i{destroyRef=d(Ct);fb=d(xo);paymentSvc=d(Hr);platformId=d(Ne);currencyOptions=Rg;currency=x("CLP");phase=x("form");response=x(null);form=this.fb.group({sponsorName:["",[$e.required,$e.minLength(2)]],email:["",[$e.email]],currency:["CLP"],amount:["",[$e.required,$e.pattern(/^\d*([.,]\d+)?$/),Tg]],message:["",[$e.maxLength(500)]]});currentCurrency=se(()=>this.currencyOptions.find(n=>n.code===this.currency())??this.currencyOptions[0]);providerLabel=se(()=>{let n=this.response()?.provider??"mock";return{mock:"Servicio integrado (mock \xB7 pr\xF3xima integraci\xF3n real)"}[n]??n});constructor(){Le(this.platformId)&&this.form.controls.currency.valueChanges.pipe(no(this.destroyRef)).subscribe(n=>this.currency.set(n??"CLP"))}selectCurrency(n){this.form.controls.currency.setValue(n.code)}selectAmount(n){this.form.controls.amount.setValue(String(n)),this.form.controls.amount.markAsTouched()}onAmountInput(n){let e=n.target,t=this.cleanAmountText(e.value);e.value!==t&&this.form.controls.amount.setValue(t)}cleanAmountText(n){let e="",t=!1;for(let o of n)o>="0"&&o<="9"?e+=o:(o==="."||o===",")&&!t&&(e+=".",t=!0);return e}isCurrencyActive(n){return this.currency()===n}formatAmount(n,e){if(n==="UF")return`${e.toLocaleString("es-CL",{minimumFractionDigits:0,maximumFractionDigits:2})} ${n}`;let t={CLP:"es-CL",USD:"en-US",PEN:"es-PE"};return new Intl.NumberFormat(t[n],{style:"currency",currency:n,minimumFractionDigits:n==="CLP"?0:2,maximumFractionDigits:n==="CLP"?0:2}).format(e)}submit(){if(!Le(this.platformId))return;if(this.form.invalid){this.form.markAllAsTouched();return}let n=this.form.getRawValue(),e={sponsorName:n.sponsorName??"",email:n.email||void 0,currency:n.currency??"CLP",amount:Kd(n.amount),message:n.message||void 0};this.phase.set("processing"),this.paymentSvc.createPayment(e).pipe(no(this.destroyRef)).subscribe({next:t=>{t.status!=="pending"&&(this.response.set(t),this.phase.set("done"))},error:()=>{this.phase.set("form")}})}retry(){this.phase.set("form"),this.response.set(null)}fieldError(n){let e=this.form.controls[n];return!e.touched||!e.errors?"":e.errors.required?"Este campo es obligatorio.":e.errors.email?"Ingresa un correo v\xE1lido.":e.errors.min?"El monto debe ser mayor a 0.":e.errors.pattern?"Solo puedes ingresar n\xFAmeros.":e.errors.minlength?"El contenido es demasiado corto.":e.errors.maxlength?"El contenido excede el largo permitido.":"Campo inv\xE1lido."}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=y({type:i,selectors:[["app-sponsor"]],decls:11,vars:1,consts:[[1,"sponsor-page"],[1,"hero"],[1,"eyebrow"],[1,"summary"],["role","status",1,"status-card","status-card--processing","glass-panel"],[1,"status-card","glass-panel",3,"status-card--confirmed","status-card--failed"],["novalidate","",1,"sponsor-form","glass-panel",3,"formGroup"],["aria-hidden","true",1,"processing-icon"],[1,"status-card","glass-panel"],[1,"status-message"],[1,"receipt"],[1,"receipt-item"],["type","button",1,"action-button"],["aria-hidden","true",1,"status-icon"],["type","button",1,"action-button",3,"click"],["aria-hidden","true"],["novalidate","",1,"sponsor-form","glass-panel",3,"ngSubmit","formGroup"],["appearance","fill","floatLabel","always",1,"sponsor-field"],["matIconPrefix","","aria-hidden","true"],["matInput","","formControlName","sponsorName","placeholder","Ej.: Ana Flores"],["matInput","","formControlName","email","type","email","placeholder","tucorreo@dominio.cl"],[1,"currency-fieldset"],[1,"currency-options"],["type","button",1,"currency-option",3,"is-active"],["matTextPrefix","",1,"currency-prefix"],["matInput","","type","text","inputmode","decimal","autocomplete","off","formControlName","amount","placeholder","0",3,"input"],[1,"suggestions"],[1,"suggestions-label"],["type","button",1,"suggestion-chip"],["matInput","","formControlName","message","rows","3","placeholder","Unas palabras de apoyo\u2026",3,"maxlength"],["type","submit",1,"action-button",3,"disabled"],["type","button",1,"currency-option",3,"click"],["type","button",1,"suggestion-chip",3,"click"]],template:function(e,t){if(e&1&&(l(0,"section",0)(1,"header",1)(2,"p",2),m(3,"Apoya el proyecto"),c(),l(4,"h1"),m(5,"Patrocina droguier_v66595"),c(),l(6,"p",3),m(7," Tu aporte voluntario ayuda a sostener el desarrollo, la infraestructura y el contenido de este proyecto. El flujo de pago se valida mediante un servicio integrado (actualmente simulado). "),c()(),k(8,bg,7,0,"div",4)(9,wg,28,11,"div",5)(10,Pg,47,8,"form",6),c()),e&2){let o;p(8),M((o=t.phase())==="processing"?8:o==="done"?9:10)}},dependencies:[Co,Un,Ln,zn,Bn,ul,qt,yo,Bt,rn,zt,ls,cs,vi,Dr,$t,Qe],styles:['[_nghost-%COMP%]{display:block;font-family:var(--app-font-sans, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)}.sponsor-page[_ngcontent-%COMP%]{display:grid;gap:1.6rem;max-width:760px;margin:0 auto;padding:1.2rem 1rem 2.8rem;color:var(--app-text-strong);background:radial-gradient(circle at 0% 0%,color-mix(in srgb,var(--app-pastel-blue) 35%,transparent) 0%,transparent 42%),radial-gradient(circle at 100% 12%,color-mix(in srgb,var(--app-pastel-yellow) 38%,transparent) 0%,transparent 38%)}.hero[_ngcontent-%COMP%]{padding:1.7rem;border-radius:20px;background:linear-gradient(135deg,color-mix(in srgb,var(--app-pastel-blue) 70%,var(--app-text-inverse)),color-mix(in srgb,var(--app-pastel-yellow) 75%,var(--app-text-inverse)));border:1px solid color-mix(in srgb,var(--app-pastel-blue) 35%,var(--app-text-inverse));box-shadow:0 14px 30px color-mix(in srgb,var(--app-text-strong) 12%,transparent)}.eyebrow[_ngcontent-%COMP%]{margin:0;font-weight:700;text-transform:uppercase;font-size:.75rem;letter-spacing:.08em;color:color-mix(in srgb,var(--app-pastel-brown) 72%,var(--app-text-strong))}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.45rem 0;font-family:var(--app-font-display, "Bitter", Georgia, serif);font-size:clamp(1.7rem,4vw,2.4rem);line-height:1.1}.summary[_ngcontent-%COMP%]{margin:0;max-width:65ch;color:var(--app-text-soft)}.sponsor-form[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid color-mix(in srgb,var(--app-pastel-blue) 40%,transparent);box-shadow:0 10px 24px var(--app-shadow, color-mix(in srgb, var(--app-text-strong) 7%, transparent));padding:1.1rem}.sponsor-field[_ngcontent-%COMP%]{width:100%}.currency-prefix[_ngcontent-%COMP%]{color:var(--app-text-soft, var(--app-text-secondary));font-weight:600}.sponsor-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--app-font-display, "Bitter", Georgia, serif)}.sponsor-form[_ngcontent-%COMP%]{display:grid;gap:1rem}.sponsor-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.25rem}.currency-fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0;display:grid;gap:.55rem}.currency-fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--app-text-soft)}.currency-options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.currency-option[_ngcontent-%COMP%]{border:1px solid color-mix(in srgb,var(--app-pastel-blue) 48%,var(--app-text-inverse));border-radius:999px;background:color-mix(in srgb,var(--app-text-inverse) 82%,var(--app-pastel-yellow));color:var(--app-text-strong);padding:.45rem .8rem;font-size:.86rem;font-weight:500;cursor:pointer;transition:opacity .2s ease,background-color .2s ease,border-color .2s ease,transform .2s ease}.currency-option[_ngcontent-%COMP%]:hover{opacity:.85;background:color-mix(in srgb,var(--app-pastel-blue) 30%,var(--app-text-inverse));transform:translateY(-1px)}.currency-option.is-active[_ngcontent-%COMP%]{font-weight:700;background:color-mix(in srgb,var(--app-pastel-blue) 46%,var(--app-text-inverse));border-color:color-mix(in srgb,var(--app-pastel-blue) 75%,var(--app-text-strong))}.suggestions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.suggestions-label[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--app-text-soft)}.suggestion-chip[_ngcontent-%COMP%]{border:1px solid color-mix(in srgb,var(--app-pastel-green) 55%,var(--app-text-inverse));border-radius:999px;background:color-mix(in srgb,var(--app-pastel-green) 30%,var(--app-text-inverse));color:var(--app-text-strong);padding:.4rem .75rem;font-size:.84rem;font-weight:500;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.suggestion-chip[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--app-pastel-green) 48%,var(--app-text-inverse));transform:translateY(-1px)}.action-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;border:none;border-radius:999px;padding:.7rem 1.2rem;font-size:.95rem;font-weight:700;cursor:pointer;color:var(--app-text-inverse);background:linear-gradient(135deg,color-mix(in srgb,var(--app-pastel-blue) 72%,var(--app-text-strong)),color-mix(in srgb,var(--app-pastel-green) 62%,var(--app-text-strong)));transition:transform .2s ease,opacity .2s ease}.action-button[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);opacity:.92}.action-button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.status-card[_ngcontent-%COMP%]{display:grid;justify-items:center;text-align:center;gap:.6rem}.status-card--processing[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--app-pastel-yellow) 70%,var(--app-text-inverse))}.status-card--confirmed[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--app-pastel-green) 70%,var(--app-text-inverse))}.status-card--failed[_ngcontent-%COMP%]{border-color:color-mix(in srgb,#d9534f 55%,var(--app-text-inverse))}.status-icon[_ngcontent-%COMP%]{font-size:3rem;width:3rem;height:3rem;color:var(--app-pastel-green)}.status-card--failed[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#d9534f}.processing-icon[_ngcontent-%COMP%]{font-size:2.8rem;width:2.8rem;height:2.8rem;color:color-mix(in srgb,var(--app-pastel-yellow) 80%,var(--app-text-strong));animation:_ngcontent-%COMP%_spin 1.2s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.status-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.3rem}.status-message[_ngcontent-%COMP%]{margin:0;max-width:48ch;color:var(--app-text-soft)}.receipt[_ngcontent-%COMP%]{display:grid;gap:.45rem;margin:.4rem 0 .8rem;padding:.85rem;width:100%;border-radius:12px;background:color-mix(in srgb,var(--app-pastel-blue) 16%,var(--app-text-inverse))}.receipt-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}.receipt-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:var(--app-text-soft);font-size:.82rem;font-weight:600}.receipt-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;font-weight:700;text-align:right;word-break:break-word}@media(max-width:650px){.sponsor-page[_ngcontent-%COMP%]{padding:.65rem .6rem 1.8rem;gap:1.2rem}.hero[_ngcontent-%COMP%], .sponsor-form[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%]{padding:.9rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,8vw,2rem)}.receipt-item[_ngcontent-%COMP%]{flex-direction:column;gap:.15rem}.receipt-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{text-align:left}}']})};var dd=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:ti,data:{title:"Home"}},{path:"desktop",component:Tr,data:{title:"Desktop",icon:"desktop_windows",secure:!0}},{path:"dashboard",component:Ko,data:{title:"Dashboard",icon:"dashboard",secure:!0}},{path:"bookmarks",component:qi,data:{title:"Bookmarks",icon:"bookmark",secure:!0}},{path:"googleauthlog",component:qi,data:{title:"Google Auth Log",icon:"key",secure:!0}},{path:"github-tasks",component:Lr,data:{title:"Tareas GitHub",icon:"task_alt",secure:!0}},{path:"animationA",component:jr,data:{title:"Animaci\xF3n Playa",icon:"web",secure:!0}},{path:"animationB",component:Vr,data:{title:"Animaci\xF3n Logo",icon:"web",secure:!0}},{path:"sponsor",component:Gr,data:{title:"Patrocinio",icon:"volunteer_activism",secure:!0}}];export{lt as a,_t as b,bn as c,fe as d,Je as e,Ip as f,ee as g,yy as h,Fc as i,Nc as j,zt as k,rn as l,Bt as m,Dr as n,vi as o,bi as p,Dd as q,gs as r,Fd as s,dd as t,on as u,wr as v,Pr as w,cd as x};
