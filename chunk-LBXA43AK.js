import{$ as U,$a as b,$b as Gs,A as io,Aa as ct,Ab as te,Ac as pt,B as at,Ba as tn,Bb as qr,Bc as ie,C as vs,Ca as Je,Cb as on,Cc as ut,D as Br,Da as Se,Db as rn,Dc as Tn,E as bs,Ea as q,Eb as an,Ec as Kr,F as Lt,Fa as Hr,Fb as Wr,Fc as po,G as jr,Ga as Et,Gb as Fe,Gc as jt,H as Ur,Ha as Is,Hb as En,Hc as uo,I as Vr,Ia as Es,Ib as Fs,Ic as ho,J as oo,Ja as Gr,Jb as On,Jc as fo,K as De,Ka as y,Kb as Yr,Kc as An,L as Ce,La as K,Lb as Zr,Lc as Js,M as ne,Ma as G,Mb as Ls,Mc as go,N as Be,Na as dt,Nb as Ns,Nc as el,O as Pe,Oa as pe,Ob as _e,Oc as Dn,P as _s,Pa as lo,Pb as ve,Pc as tl,Q as ro,Qa as Os,Qb as zs,Qc as nl,R as C,Ra as nn,Rb as Bs,Rc as il,S as Z,Sa as Ps,Sb as js,Sc as ol,T as ys,Ta as Rs,Tb as ce,Tc as rl,U as P,Ua as Mn,Ub as ui,V as we,Va as D,Vb as Us,W as d,Wa as M,Wb as Vs,X as xs,Xa as I,Xb as Ie,Y as qe,Ya as In,Yb as B,Z as st,Za as se,Zb as hi,_ as j,_a as le,_b as Hs,a as g,aa as Re,ab as l,ac as $s,b as ee,ba as Mt,bb as c,bc as Pn,c as Oe,ca as de,cb as w,d as us,da as me,db as he,dc as qs,e as Xe,ea as Nt,eb as ke,ec as Ws,f as O,fa as Cs,fb as mt,fc as Rn,g as He,ga as X,gb as fe,gc as Ys,h as Ge,ha as H,hb as We,hc as Zs,i as Qe,ia as ao,ib as S,ic as Ks,j as A,jb as Ts,jc as Bt,k as hs,ka as x,kb as v,kc as gt,l as Qi,la as xt,lb as ge,lc as Xs,m as fs,ma as je,mb as V,n as gs,na as It,nb as et,o as re,oa as ws,ob as Ue,oc as co,p as Ji,pa as z,pb as F,q as kt,qa as en,qb as L,r as Nr,ra as Ss,rb as As,s as eo,sa as lt,sb as Ds,t as kn,ta as so,tb as $r,tc as Qs,ua as ks,ub as tt,v as $e,vb as Ot,w as ae,wa as zt,wb as E,x as zr,xa as Ms,xb as Ye,xc as Ee,y as to,yb as p,yc as Le,z as no,za as m,zb as T,zc as mo}from"./chunk-AC3EYKSQ.js";var N="primary",Oi=Symbol("RouteTitle"),ta=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ln(n){return new ta(n)}function Xr(n,i,e){for(let t=0;t<n.length;t++){let o=n[t],r=i[t];if(o[0]===":")e[o.substring(1)]=r;else if(o!==r.path)return!1}return!0}function pl(n,i,e){let t=e.path.split("/"),o=t.indexOf("**");if(o===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let u={},h=n.slice(0,t.length);return Xr(t,h,u)?{consumed:h,posParams:u}:null}if(o!==t.lastIndexOf("**"))return null;let r=t.slice(0,o),a=t.slice(o+1);if(r.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Xr(r,n.slice(0,r.length),s)||!Xr(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Co(n){return new Promise((i,e)=>{n.pipe(Lt()).subscribe({next:t=>i(t),error:t=>e(t)})})}function jd(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Ct(n[e],i[e]))return!1;return!0}function Ct(n,i){let e=n?na(n):void 0,t=i?na(i):void 0;if(!e||!t||e.length!=t.length)return!1;let o;for(let r=0;r<e.length;r++)if(o=e[r],!ul(n[o],i[o]))return!1;return!0}function na(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function ul(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((o,r)=>t[r]===o)}else return n===i}function Ud(n){return n.length>0?n[n.length-1]:null}function mn(n){return Qi(n)?n:Ps(n)?Qe(Promise.resolve(n)):A(n)}function hl(n){return Qi(n)?Co(n):Promise.resolve(n)}var Vd={exact:gl,subset:vl},fl={exact:Hd,subset:Gd,ignored:()=>!0},ga={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},yi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function va(n,i,e){let t=n instanceof Ve?n:i.parseUrl(n);return ve(()=>ia(i.lastSuccessfulNavigation()?.finalUrl??new Ve,t,g(g({},yi),e)))}function ia(n,i,e){return Vd[e.paths](n.root,i.root,e.matrixParams)&&fl[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Hd(n,i){return Ct(n,i)}function gl(n,i,e){if(!sn(n.segments,i.segments)||!_o(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!gl(n.children[t],i.children[t],e))return!1;return!0}function Gd(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>ul(n[e],i[e]))}function vl(n,i,e){return bl(n,i,i.segments,e)}function bl(n,i,e,t){if(n.segments.length>e.length){let o=n.segments.slice(0,e.length);return!(!sn(o,e)||i.hasChildren()||!_o(o,e,t))}else if(n.segments.length===e.length){if(!sn(n.segments,e)||!_o(n.segments,e,t))return!1;for(let o in i.children)if(!n.children[o]||!vl(n.children[o],i.children[o],t))return!1;return!0}else{let o=e.slice(0,n.segments.length),r=e.slice(n.segments.length);return!sn(n.segments,o)||!_o(n.segments,o,t)||!n.children[N]?!1:bl(n.children[N],i,r,t)}}function _o(n,i,e){return i.every((t,o)=>fl[e](n[o].parameters,t.parameters))}var Ve=class{root;queryParams;fragment;_queryParamMap;constructor(i=new Q([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ln(this.queryParams),this._queryParamMap}toString(){return Wd.serialize(this)}},Q=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yo(this)}},Ut=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ln(this.parameters),this._parameterMap}toString(){return yl(this)}};function $d(n,i){return sn(n,i)&&n.every((e,t)=>Ct(e.parameters,i[t].parameters))}function sn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function qd(n,i){let e=[];return Object.entries(n.children).forEach(([t,o])=>{t===N&&(e=e.concat(i(o,t)))}),Object.entries(n.children).forEach(([t,o])=>{t!==N&&(e=e.concat(i(o,t)))}),e}var Hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>new Vt,providedIn:"root"})}return n})(),Vt=class{parse(i){let e=new ra(i);return new Ve(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${fi(i.root,!0)}`,t=Kd(i.queryParams),o=typeof i.fragment=="string"?`#${Yd(i.fragment)}`:"";return`${e}${t}${o}`}},Wd=new Vt;function yo(n){return n.segments.map(i=>yl(i)).join("/")}function fi(n,i){if(!n.hasChildren())return yo(n);if(i){let e=n.children[N]?fi(n.children[N],!1):"",t=[];return Object.entries(n.children).forEach(([o,r])=>{o!==N&&t.push(`${o}:${fi(r,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=qd(n,(t,o)=>o===N?[fi(n.children[N],!1)]:[`${o}:${fi(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[N]!=null?`${yo(n)}/${e[0]}`:`${yo(n)}/(${e.join("//")})`}}function _l(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vo(n){return _l(n).replace(/%3B/gi,";")}function Yd(n){return encodeURI(n)}function oa(n){return _l(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function xo(n){return decodeURIComponent(n)}function al(n){return xo(n.replace(/\+/g,"%20"))}function yl(n){return`${oa(n.path)}${Zd(n.parameters)}`}function Zd(n){return Object.entries(n).map(([i,e])=>`;${oa(i)}=${oa(e)}`).join("")}function Kd(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(o=>`${vo(e)}=${vo(o)}`).join("&"):`${vo(e)}=${vo(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Xd=/^[^\/()?;#]+/;function Qr(n){let i=n.match(Xd);return i?i[0]:""}var Qd=/^[^\/()?;=#]+/;function Jd(n){let i=n.match(Qd);return i?i[0]:""}var em=/^[^=?&#]+/;function tm(n){let i=n.match(em);return i?i[0]:""}var nm=/^[^&#]+/;function im(n){let i=n.match(nm);return i?i[0]:""}var ra=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new Pe(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(o[N]=new Q(e,t)),o}parseSegment(){let i=Qr(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new Pe(4009,!1);return this.capture(i),new Ut(xo(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Jd(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=Qr(this.remaining);o&&(t=o,this.capture(t))}i[xo(e)]=xo(t)}parseQueryParam(i){let e=tm(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=im(this.remaining);a&&(t=a,this.capture(t))}let o=al(e),r=al(t);if(i.hasOwnProperty(o)){let a=i[o];Array.isArray(a)||(a=[a],i[o]=a),a.push(r)}else i[o]=r}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Qr(this.remaining),r=this.remaining[o.length];if(r!=="/"&&r!==")"&&r!==";")throw new Pe(4010,!1);let a;o.indexOf(":")>-1?(a=o.slice(0,o.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=N);let s=this.parseChildren(e+1);t[a??N]=Object.keys(s).length===1&&s[N]?s[N]:new Q([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new Pe(4011,!1)}};function xl(n){return n.segments.length>0?new Q([],{[N]:n}):n}function Cl(n){let i={};for(let[t,o]of Object.entries(n.children)){let r=Cl(o);if(t===N&&r.segments.length===0&&r.hasChildren())for(let[a,s]of Object.entries(r.children))i[a]=s;else(r.segments.length>0||r.hasChildren())&&(i[t]=r)}let e=new Q(n.segments,i);return om(e)}function om(n){if(n.numberOfChildren===1&&n.children[N]){let i=n.children[N];return new Q(n.segments.concat(i.segments),i.children)}return n}function Ht(n){return n instanceof Ve}function wl(n,i,e=null,t=null,o=new Vt){let r=Sl(n);return kl(r,i,e,t,o)}function Sl(n){let i;function e(r){let a={};for(let u of r.children){let h=e(u);a[u.outlet]=h}let s=new Q(r.url,a);return r===n&&(i=s),s}let t=e(n.root),o=xl(t);return i??o}function kl(n,i,e,t,o){let r=n;for(;r.parent;)r=r.parent;if(i.length===0)return Jr(r,r,r,e,t,o);let a=rm(i);if(a.toRoot())return Jr(r,r,new Q([],{}),e,t,o);let s=am(a,r,n),u=s.processChildren?vi(s.segmentGroup,s.index,a.commands):Il(s.segmentGroup,s.index,a.commands);return Jr(r,s.segmentGroup,u,e,t,o)}function wo(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function xi(n){return typeof n=="object"&&n!=null&&n.outlets}function sl(n,i,e){n||="\u0275";let t=new Ve;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Jr(n,i,e,t,o,r){let a={};for(let[h,f]of Object.entries(t??{}))a[h]=Array.isArray(f)?f.map(_=>sl(h,_,r)):sl(h,f,r);let s;n===i?s=e:s=Ml(n,i,e);let u=xl(Cl(s));return new Ve(u,a,o)}function Ml(n,i,e){let t={};return Object.entries(n.children).forEach(([o,r])=>{r===i?t[o]=e:t[o]=Ml(r,i,e)}),new Q(n.segments,t)}var So=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&wo(t[0]))throw new Pe(4003,!1);let o=t.find(xi);if(o&&o!==Ud(t))throw new Pe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function rm(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new So(!0,0,n);let i=0,e=!1,t=n.reduce((o,r,a)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let s={};return Object.entries(r.outlets).forEach(([u,h])=>{s[u]=typeof h=="string"?h.split("/"):h}),[...o,{outlets:s}]}if(r.segmentPath)return[...o,r.segmentPath]}return typeof r!="string"?[...o,r]:a===0?(r.split("/").forEach((s,u)=>{u==0&&s==="."||(u==0&&s===""?e=!0:s===".."?i++:s!=""&&o.push(s))}),o):[...o,r]},[]);return new So(e,i,t)}var Ln=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function am(n,i,e){if(n.isAbsolute)return new Ln(i,!0,0);if(!e)return new Ln(i,!1,NaN);if(e.parent===null)return new Ln(e,!0,0);let t=wo(n.commands[0])?0:1,o=e.segments.length-1+t;return sm(e,o,n.numberOfDoubleDots)}function sm(n,i,e){let t=n,o=i,r=e;for(;r>o;){if(r-=o,t=t.parent,!t)throw new Pe(4005,!1);o=t.segments.length}return new Ln(t,!1,o-r)}function lm(n){return xi(n[0])?n[0].outlets:{[N]:n}}function Il(n,i,e){if(n??=new Q([],{}),n.segments.length===0&&n.hasChildren())return vi(n,i,e);let t=cm(n,i,e),o=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let r=new Q(n.segments.slice(0,t.pathIndex),{});return r.children[N]=new Q(n.segments.slice(t.pathIndex),n.children),vi(r,0,o)}else return t.match&&o.length===0?new Q(n.segments,{}):t.match&&!n.hasChildren()?aa(n,i,e):t.match?vi(n,0,o):aa(n,i,e)}function vi(n,i,e){if(e.length===0)return new Q(n.segments,{});{let t=lm(e),o={};if(Object.keys(t).some(r=>r!==N)&&n.children[N]&&n.numberOfChildren===1&&n.children[N].segments.length===0){let r=vi(n.children[N],i,e);return new Q(n.segments,r.children)}return Object.entries(t).forEach(([r,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(o[r]=Il(n.children[r],i,a))}),Object.entries(n.children).forEach(([r,a])=>{t[r]===void 0&&(o[r]=a)}),new Q(n.segments,o)}}function cm(n,i,e){let t=0,o=i,r={match:!1,pathIndex:0,commandIndex:0};for(;o<n.segments.length;){if(t>=e.length)return r;let a=n.segments[o],s=e[t];if(xi(s))break;let u=`${s}`,h=t<e.length-1?e[t+1]:null;if(o>0&&u===void 0)break;if(u&&h&&typeof h=="object"&&h.outlets===void 0){if(!cl(u,h,a))return r;t+=2}else{if(!cl(u,{},a))return r;t++}o++}return{match:!0,pathIndex:o,commandIndex:t}}function aa(n,i,e){let t=n.segments.slice(0,i),o=0;for(;o<e.length;){let r=e[o];if(xi(r)){let u=dm(r.outlets);return new Q(t,u)}if(o===0&&wo(e[0])){let u=n.segments[i];t.push(new Ut(u.path,ll(e[0]))),o++;continue}let a=xi(r)?r.outlets[N]:`${r}`,s=o<e.length-1?e[o+1]:null;a&&s&&wo(s)?(t.push(new Ut(a,ll(s))),o+=2):(t.push(new Ut(a,{})),o++)}return new Q(t,{})}function dm(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=aa(new Q([],{}),0,t))}),i}function ll(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function cl(n,i,e){return n==e.path&&Ct(i,e.parameters)}var bi="imperative",Te=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Te||{}),it=class{id;url;constructor(i,e){this.id=i,this.url=e}},cn=class extends it{type=Te.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",o=null){super(i,e),this.navigationTrigger=t,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ot=class extends it{urlAfterRedirects;type=Te.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ne=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ne||{}),Ci=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Ci||{}),ht=class extends it{reason;code;type=Te.NavigationCancel;constructor(i,e,t,o){super(i,e),this.reason=t,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function El(n){return n instanceof ht&&(n.code===Ne.Redirect||n.code===Ne.SupersededByNewNavigation)}var Rt=class extends it{reason;code;type=Te.NavigationSkipped;constructor(i,e,t,o){super(i,e),this.reason=t,this.code=o}},dn=class extends it{error;target;type=Te.NavigationError;constructor(i,e,t,o){super(i,e),this.error=t,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},wi=class extends it{urlAfterRedirects;state;type=Te.RoutesRecognized;constructor(i,e,t,o){super(i,e),this.urlAfterRedirects=t,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ko=class extends it{urlAfterRedirects;state;type=Te.GuardsCheckStart;constructor(i,e,t,o){super(i,e),this.urlAfterRedirects=t,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mo=class extends it{urlAfterRedirects;state;shouldActivate;type=Te.GuardsCheckEnd;constructor(i,e,t,o,r){super(i,e),this.urlAfterRedirects=t,this.state=o,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Io=class extends it{urlAfterRedirects;state;type=Te.ResolveStart;constructor(i,e,t,o){super(i,e),this.urlAfterRedirects=t,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eo=class extends it{urlAfterRedirects;state;type=Te.ResolveEnd;constructor(i,e,t,o){super(i,e),this.urlAfterRedirects=t,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oo=class{route;type=Te.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Po=class{route;type=Te.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ro=class{snapshot;type=Te.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},To=class{snapshot;type=Te.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ao=class{snapshot;type=Te.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Do=class{snapshot;type=Te.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var zn=class{},Si=class{},Bn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function mm(n){return!(n instanceof zn)&&!(n instanceof Bn)&&!(n instanceof Si)}var Fo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Gn(this.rootInjector)}},Gn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let o=this.getOrCreateContext(e);o.outlet=t,this.contexts.set(e,o)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Fo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(we(qe))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=sa(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=sa(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=la(i,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==i)}pathFromRoot(i){return la(i,this._root).map(e=>e.value)}};function sa(n,i){if(n===i.value)return i;for(let e of i.children){let t=sa(n,e);if(t)return t}return null}function la(n,i){if(n===i.value)return[i];for(let e of i.children){let t=la(n,e);if(t.length)return t.unshift(i),t}return[]}var nt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Fn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var ki=class extends Lo{snapshot;constructor(i,e){super(i),this.snapshot=e,_a(this,i)}toString(){return this.snapshot.toString()}};function Ol(n,i){let e=pm(n,i),t=new He([new Ut("",{})]),o=new He({}),r=new He({}),a=new He({}),s=new He(""),u=new bt(t,o,a,s,r,N,n,e.root);return u.snapshot=e.root,new ki(new nt(u,[]),e)}function pm(n,i){let e={},t={},o={},a=new jn([],e,o,"",t,N,n,null,{},i);return new Mi("",new nt(a,[]))}var bt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,o,r,a,s,u){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=o,this.dataSubject=r,this.outlet=a,this.component=s,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(re(h=>h[Oi]))??A(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=o,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(re(i=>ln(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(re(i=>ln(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ba(n,i,e="emptyOnly"){let t,{routeConfig:o}=n;return i!==null&&(e==="always"||o?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:g(g({},i.params),n.params),data:g(g({},i.data),n.data),resolve:g(g(g(g({},n.data),i.data),o?.data),n._resolvedData)}:t={params:g({},n.params),data:g({},n.data),resolve:g(g({},n.data),n._resolvedData??{})},o&&Rl(o)&&(t.resolve[Oi]=o.title),t}var jn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Oi]}constructor(i,e,t,o,r,a,s,u,h,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=o,this.data=r,this.outlet=a,this.component=s,this.routeConfig=u,this._resolve=h,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ln(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ln(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Mi=class extends Lo{url;constructor(i,e){super(e),this.url=i,_a(this,e)}toString(){return Pl(this._root)}};function _a(n,i){i.value._routerState=n,i.children.forEach(e=>_a(n,e))}function Pl(n){let i=n.children.length>0?` { ${n.children.map(Pl).join(", ")} } `:"";return`${n.value}${i}`}function ea(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Ct(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Ct(i.params,e.params)||n.paramsSubject.next(e.params),jd(i.url,e.url)||n.urlSubject.next(e.url),Ct(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ca(n,i){let e=Ct(n.params,i.params)&&$d(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||ca(n.parent,i.parent))}function Rl(n){return typeof n.title=="string"||n.title===null}var Tl=new P(""),pn=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=N;activateEvents=new X;deactivateEvents=new X;attachEvents=new X;detachEvents=new X;routerOutletData=ce();parentContexts=d(Gn);location=d(Et);changeDetector=d(Ie);inputBinder=d(jo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:o}=e.name;if(t)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Pe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Pe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Pe(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Pe(4013,!1);this._activatedRoute=e;let o=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,u=new da(e,s,o.injector,this.routerOutletData);this.activated=o.createComponent(a,{index:o.length,injector:u,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[je]})}return n})(),da=class{route;childContexts;parent;outletData;constructor(i,e,t,o){this.route=i,this.childContexts=e,this.parent=t,this.outletData=o}get(i,e){return i===bt?this.route:i===Gn?this.childContexts:i===Tl?this.outletData:this.parent.get(i,e)}},jo=new P("");var ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,o){t&1&&w(0,"router-outlet")},dependencies:[pn],encapsulation:2})}return n})();function xa(n){let i=n.children&&n.children.map(xa),e=i?ee(g({},n),{children:i}):g({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==N&&(e.component=ya),e}function um(n,i,e){let t=Ii(n,i._root,e?e._root:void 0);return new ki(t,i)}function Ii(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let o=hm(n,i,e);return new nt(t,o)}else{if(n.shouldAttach(i.value)){let r=n.retrieve(i.value);if(r!==null){let a=r.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Ii(n,s)),a}}let t=fm(i.value),o=i.children.map(r=>Ii(n,r));return new nt(t,o)}}function hm(n,i,e){return i.children.map(t=>{for(let o of e.children)if(n.shouldReuseRoute(t.value,o.value.snapshot))return Ii(n,t,o);return Ii(n,t)})}function fm(n){return new bt(new He(n.url),new He(n.params),new He(n.queryParams),new He(n.fragment),new He(n.data),n.outlet,n.component,n)}var Un=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Al="ngNavigationCancelingError";function No(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Ht(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,o=Dl(!1,Ne.Redirect);return o.url=e,o.navigationBehaviorOptions=t,o}function Dl(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Al]=!0,e.cancellationCode=i,e}function gm(n){return Fl(n)&&Ht(n.url)}function Fl(n){return!!n&&n[Al]}var ma=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,o,r){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=o,this.inputBindingEnabled=r}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),ea(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let o=Fn(e);i.children.forEach(r=>{let a=r.value.outlet;this.deactivateRoutes(r,o[a],t),delete o[a]}),Object.values(o).forEach(r=>{this.deactivateRouteAndItsChildren(r,t)})}deactivateRoutes(i,e,t){let o=i.value,r=e?e.value:null;if(o===r)if(o.component){let a=t.getContext(o.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else r&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),o=t&&i.value.component?t.children:e,r=Fn(i);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),o=t&&i.value.component?t.children:e,r=Fn(i);for(let a of Object.values(r))this.deactivateRouteAndItsChildren(a,o);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let o=Fn(e);i.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],t),this.forwardEvent(new Do(r.value.snapshot))}),i.children.length&&this.forwardEvent(new To(i.value.snapshot))}activateRoutes(i,e,t){let o=i.value,r=e?e.value:null;if(ea(o),o===r)if(o.component){let a=t.getOrCreateContext(o.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(o.component){let a=t.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let s=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),ea(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=o,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},zo=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Nn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function vm(n,i,e){let t=n._root,o=i?i._root:null;return gi(t,o,e,[t.value])}function bm(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function $n(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!ys(n)?n:i.get(n):t}function gi(n,i,e,t,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=Fn(i);return n.children.forEach(a=>{_m(a,r[a.value.outlet],e,t.concat([a.value]),o),delete r[a.value.outlet]}),Object.entries(r).forEach(([a,s])=>_i(s,e.getContext(a),o)),o}function _m(n,i,e,t,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&r.routeConfig===a.routeConfig){let u=ym(a,r,r.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new zo(t)):(r.data=a.data,r._resolvedData=a._resolvedData),r.component?gi(n,i,s?s.children:null,t,o):gi(n,i,e,t,o),u&&s&&s.outlet&&s.outlet.isActivated&&o.canDeactivateChecks.push(new Nn(s.outlet.component,a))}else a&&_i(i,s,o),o.canActivateChecks.push(new zo(t)),r.component?gi(n,null,s?s.children:null,t,o):gi(n,null,e,t,o);return o}function ym(n,i,e){if(typeof e=="function")return st(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!sn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!sn(n.url,i.url)||!Ct(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ca(n,i)||!Ct(n.queryParams,i.queryParams);default:return!ca(n,i)}}function _i(n,i,e){let t=Fn(n),o=n.value;Object.entries(t).forEach(([r,a])=>{o.component?i?_i(a,i.children.getContext(r),e):_i(a,null,e):_i(a,i,e)}),o.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Nn(i.outlet.component,o)):e.canDeactivateChecks.push(new Nn(null,o)):e.canDeactivateChecks.push(new Nn(null,o))}function Pi(n){return typeof n=="function"}function xm(n){return typeof n=="boolean"}function Cm(n){return n&&Pi(n.canLoad)}function wm(n){return n&&Pi(n.canActivate)}function Sm(n){return n&&Pi(n.canActivateChild)}function km(n){return n&&Pi(n.canDeactivate)}function Mm(n){return n&&Pi(n.canMatch)}function Ll(n){return n instanceof fs||n?.name==="EmptyError"}var bo=Symbol("INITIAL_VALUE");function Vn(){return Ce(n=>Ji(n.map(i=>i.pipe(at(1),De(bo)))).pipe(re(i=>{for(let e of i)if(e!==!0){if(e===bo)return bo;if(e===!1||Im(e))return e}return!0}),ae(i=>i!==bo),at(1)))}function Im(n){return Ht(n)||n instanceof Un}function Nl(n){return n.aborted?A(void 0).pipe(at(1)):new Xe(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function zl(n){return ne(Nl(n))}function Em(n){return kt(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:o,canDeactivateChecks:r}}=i;return r.length===0&&o.length===0?A(ee(g({},i),{guardsResult:!0})):Om(r,e,t).pipe(kt(a=>a&&xm(a)?Pm(e,o,n):A(a)),re(a=>ee(g({},i),{guardsResult:a})))})}function Om(n,i,e){return Qe(n).pipe(kt(t=>Fm(t.component,t.route,e,i)),Lt(t=>t!==!0,!0))}function Pm(n,i,e){return Qe(i).pipe(no(t=>eo(Tm(t.route.parent,e),Rm(t.route,e),Dm(n,t.path),Am(n,t.route))),Lt(t=>t!==!0,!0))}function Rm(n,i){return n!==null&&i&&i(new Ao(n)),A(!0)}function Tm(n,i){return n!==null&&i&&i(new Ro(n)),A(!0)}function Am(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return A(!0);let t=e.map(o=>kn(()=>{let r=i._environmentInjector,a=$n(o,r),s=wm(a)?a.canActivate(i,n):st(r,()=>a(i,n));return mn(s).pipe(Lt())}));return A(t).pipe(Vn())}function Dm(n,i){let e=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(r=>bm(r)).filter(r=>r!==null).map(r=>kn(()=>{let a=r.guards.map(s=>{let u=r.node._environmentInjector,h=$n(s,u),f=Sm(h)?h.canActivateChild(e,n):st(u,()=>h(e,n));return mn(f).pipe(Lt())});return A(a).pipe(Vn())}));return A(o).pipe(Vn())}function Fm(n,i,e,t){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return A(!0);let r=o.map(a=>{let s=i._environmentInjector,u=$n(a,s),h=km(u)?u.canDeactivate(n,i,e,t):st(s,()=>u(n,i,e,t));return mn(h).pipe(Lt())});return A(r).pipe(Vn())}function Lm(n,i,e,t,o){let r=i.canLoad;if(r===void 0||r.length===0)return A(!0);let a=r.map(s=>{let u=$n(s,n),h=Cm(u)?u.canLoad(i,e):st(n,()=>u(i,e)),f=mn(h);return o?f.pipe(zl(o)):f});return A(a).pipe(Vn(),Bl(t))}function Bl(n){return us(Be(i=>{if(typeof i!="boolean")throw No(n,i)}),re(i=>i===!0))}function Nm(n,i,e,t,o,r){let a=i.canMatch;if(!a||a.length===0)return A(!0);let s=a.map(u=>{let h=$n(u,n),f=Mm(h)?h.canMatch(i,e,o):st(n,()=>h(i,e,o));return mn(f).pipe(zl(r))});return A(s).pipe(Vn(),Bl(t))}var Pt=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Ei=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function zm(n){throw new Pe(4e3,!1)}function Bm(n){throw Dl(!1,Ne.GuardRejected)}var pa=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],o=e.root;for(;;){if(t=t.concat(o.segments),o.numberOfChildren===0)return t;if(o.numberOfChildren>1||!o.children[N])throw zm(`${i.redirectTo}`);o=o.children[N]}}async applyRedirectCommands(i,e,t,o,r){let a=await jm(e,o,r);if(a instanceof Ve)throw new Ei(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new Ei(s);return s}applyRedirectCreateUrlTree(i,e,t,o){let r=this.createSegmentGroup(i,e.root,t,o);return new Ve(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([o,r])=>{if(typeof r=="string"&&r[0]===":"){let s=r.substring(1);t[o]=e[s]}else t[o]=r}),t}createSegmentGroup(i,e,t,o){let r=this.createSegments(i,e.segments,t,o),a={};return Object.entries(e.children).forEach(([s,u])=>{a[s]=this.createSegmentGroup(i,u,t,o)}),new Q(r,a)}createSegments(i,e,t,o){return e.map(r=>r.path[0]===":"?this.findPosParam(i,r,o):this.findOrReturn(r,t))}findPosParam(i,e,t){let o=t[e.path.substring(1)];if(!o)throw new Pe(4001,!1);return o}findOrReturn(i,e){let t=0;for(let o of e){if(o.path===i.path)return e.splice(t),o;t++}return i}};function jm(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Co(mn(st(e,()=>t(i))))}function Um(n,i){return n.providers&&!n._injector&&(n._injector=Gr(n.providers,i,`Route: ${n.path}`)),n._injector??i}function vt(n){return n.outlet||N}function Vm(n,i){let e=n.filter(t=>vt(t)===i);return e.push(...n.filter(t=>vt(t)!==i)),e}var ua={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Hm(n,i,e,t,o,r,a){let s=Ul(n,i,e);if(!s.matched)return A(s);let u=jl(r(s));return t=Um(i,t),Nm(t,i,e,o,u,a).pipe(re(h=>h===!0?s:g({},ua)))}function Ul(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?g({},ua):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(i.matcher||pl)(e,n,i);if(!o)return g({},ua);let r={};Object.entries(o.posParams??{}).forEach(([s,u])=>{r[s]=u.path});let a=o.consumed.length>0?g(g({},r),o.consumed[o.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:a,positionalParamSegments:o.posParams??{}}}function dl(n,i,e,t,o){return e.length>0&&qm(n,e,t,o)?{segmentGroup:new Q(i,$m(t,new Q(e,n.children))),slicedSegments:[]}:e.length===0&&Wm(n,e,t)?{segmentGroup:new Q(n.segments,Gm(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new Q(n.segments,n.children),slicedSegments:e}}function Gm(n,i,e,t){let o={};for(let r of e)if(Uo(n,i,r)&&!t[vt(r)]){let a=new Q([],{});o[vt(r)]=a}return g(g({},t),o)}function $m(n,i){let e={};e[N]=i;for(let t of n)if(t.path===""&&vt(t)!==N){let o=new Q([],{});e[vt(t)]=o}return e}function qm(n,i,e,t){return e.some(o=>!Uo(n,i,o)||!(vt(o)!==N)?!1:!(t!==void 0&&vt(o)===t))}function Wm(n,i,e){return e.some(t=>Uo(n,i,t))}function Uo(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ym(n,i,e){return i.length===0&&!n.children[e]}var ha=class{};async function Zm(n,i,e,t,o,r,a="emptyOnly",s){return new fa(n,i,e,t,o,a,r,s).recognize()}var Km=31,fa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,o,r,a,s,u){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=o,this.urlTree=r,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=u,this.applyRedirects=new pa(this.urlSerializer,this.urlTree)}noMatchError(i){return new Pe(4002,`'${i.segmentGroup}'`)}async recognize(){let i=dl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),o=new nt(t,e),r=new Mi("",o),a=wl(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(a),{state:r,tree:a}}async match(i){let e=new jn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),N,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,N,e),rootSnapshot:e}}catch(t){if(t instanceof Ei)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Pt?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,o,r){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,r);let a=await this.processSegment(i,e,t,t.segments,o,!0,r);return a instanceof nt?[a]:[]}async processChildren(i,e,t,o){let r=[];for(let u of Object.keys(t.children))u==="primary"?r.unshift(u):r.push(u);let a=[];for(let u of r){let h=t.children[u],f=Vm(e,u),_=await this.processSegmentGroup(i,f,h,u,o);a.push(..._)}let s=Vl(a);return Xm(s),s}async processSegment(i,e,t,o,r,a,s){for(let u of e)try{return await this.processSegmentAgainstRoute(u._injector??i,e,u,t,o,r,a,s)}catch(h){if(h instanceof Pt||Ll(h))continue;throw h}if(Ym(t,o,r))return new ha;throw new Pt(t)}async processSegmentAgainstRoute(i,e,t,o,r,a,s,u){if(vt(t)!==a&&(a===N||!Uo(o,r,t)))throw new Pt(o);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,o,t,r,a,u);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,o,e,t,r,a,u);throw new Pt(o)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,o,r,a,s){let{matched:u,parameters:h,consumedSegments:f,positionalParamSegments:_,remainingSegments:R}=Ul(e,o,r);if(!u)throw new Pt(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Km&&(this.allowRedirects=!1));let $=this.createSnapshot(i,o,r,h,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(f,o.redirectTo,_,jl($),i),Y=await this.applyRedirects.lineralizeSegments(o,W);return this.processSegment(i,t,e,Y.concat(R),a,!1,s)}createSnapshot(i,e,t,o,r){let a=new jn(t,o,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Jm(e),vt(e),e.component??e._loadedComponent??null,e,ep(e),i),s=ba(a,r,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,o,r,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Jt=>this.createSnapshot(i,t,Jt.consumedSegments,Jt.parameters,a),u=await Co(Hm(e,t,o,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!u?.matched)throw new Pt(e);i=t._injector??i;let{routes:h}=await this.getChildConfig(i,t,o),f=t._loadedInjector??i,{parameters:_,consumedSegments:R,remainingSegments:$}=u,W=this.createSnapshot(i,t,R,_,a),{segmentGroup:Y,slicedSegments:xe}=dl(e,R,$,h,r);if(xe.length===0&&Y.hasChildren()){let Jt=await this.processChildren(f,h,Y,W);return new nt(W,Jt)}if(h.length===0&&xe.length===0)return new nt(W,[]);let Ft=vt(t)===r,St=await this.processSegment(f,h,Y,xe,Ft?N:r,!0,W);return new nt(W,St instanceof nt?[St]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let r=e._loadedNgModuleFactory;return r&&!e._loadedInjector&&(e._loadedInjector=r.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Co(Lm(i,e,t,this.urlSerializer,this.abortSignal))){let r=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,r}throw Bm(e)}return{routes:[],injector:i}}};function Xm(n){n.sort((i,e)=>i.value.outlet===N?-1:e.value.outlet===N?1:i.value.outlet.localeCompare(e.value.outlet))}function Qm(n){let i=n.value.routeConfig;return i&&i.path===""}function Vl(n){let i=[],e=new Set;for(let t of n){if(!Qm(t)){i.push(t);continue}let o=i.find(r=>t.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...t.children),e.add(o)):i.push(t)}for(let t of e){let o=Vl(t.children);i.push(new nt(t.value,o))}return i.filter(t=>!e.has(t))}function Jm(n){return n.data||{}}function ep(n){return n.resolve||{}}function tp(n,i,e,t,o,r,a){return kt(async s=>{let{state:u,tree:h}=await Zm(n,i,e,t,s.extractedUrl,o,r,a);return ee(g({},s),{targetSnapshot:u,urlAfterRedirects:h})})}function np(n){return kt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return A(i);let o=new Set(t.map(s=>s.route)),r=new Set;for(let s of o)if(!r.has(s))for(let u of Hl(s))r.add(u);let a=0;return Qe(r).pipe(no(s=>o.has(s)?ip(s,e,n):(s.data=ba(s,s.parent,n).resolve,A(void 0))),Be(()=>a++),jr(1),kt(s=>a===r.size?A(i):Ge))})}function Hl(n){let i=n.children.map(e=>Hl(e)).flat();return[n,...i]}function ip(n,i,e){let t=n.routeConfig,o=n._resolve;return t?.title!==void 0&&!Rl(t)&&(o[Oi]=t.title),kn(()=>(n.data=ba(n,n.parent,e).resolve,op(o,n,i).pipe(re(r=>(n._resolvedData=r,n.data=g(g({},n.data),r),null)))))}function op(n,i,e){let t=na(n);if(t.length===0)return A({});let o={};return Qe(t).pipe(kt(r=>rp(n[r],i,e).pipe(Lt(),Be(a=>{if(a instanceof Un)throw No(new Vt,a);o[r]=a}))),jr(1),re(()=>o),to(r=>Ll(r)?Ge:hs(r)))}function rp(n,i,e){let t=i._environmentInjector,o=$n(n,t),r=o.resolve?o.resolve(i,e):st(t,()=>o(i,e));return mn(r)}function ml(n){return Ce(i=>{let e=n(i);return e?Qe(e).pipe(re(()=>i)):A(i)})}var Ca=(()=>{class n{buildTitle(e){let t,o=e.root;for(;o!==void 0;)t=this.getResolvedTitleForRoute(o)??t,o=o.children.find(r=>r.outlet===N);return t}getResolvedTitleForRoute(e){return e.data[Oi]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>d(Gl),providedIn:"root"})}return n})(),Gl=(()=>{class n extends Ca{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(we(Qs))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qn=new P("",{factory:()=>({})}),Ri=new P(""),$l=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Ns);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let o=(async()=>{try{let r=await hl(st(e,()=>t.loadComponent())),a=await Yl(Wl(r));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,o),o}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let o=(async()=>{try{let r=await ql(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=r.routes,t._loadedInjector=r.injector,t._loadedNgModuleFactory=r.factory,r}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function ql(n,i,e,t){let o=await hl(st(e,()=>n.loadChildren())),r=await Yl(Wl(o)),a;r instanceof Es||Array.isArray(r)?a=r:a=await i.compileModuleAsync(r),t&&t(n);let s,u,h=!1,f;return Array.isArray(a)?(u=a,h=!0):(s=a.create(e).injector,f=a,u=s.get(Ri,[],{optional:!0,self:!0}).flat()),{routes:u.map(xa),injector:s,factory:f}}function ap(n){return n&&typeof n=="object"&&"default"in n}function Wl(n){return ap(n)?n.default:n}async function Yl(n){return n}var Vo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>d(sp),providedIn:"root"})}return n})(),sp=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zl=new P("");var lp=()=>{},Kl=new P(""),Xl=(()=>{class n{currentNavigation=x(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=x(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=d($l);environmentInjector=d(qe);destroyRef=d(Nt);urlSerializer=d(Hn);rootContexts=d(Gn);location=d(Pn);inputBindingEnabled=d(jo,{optional:!0})!==null;titleStrategy=d(Ca);options=d(qn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Vo);createViewTransition=d(Zl,{optional:!0});navigationErrorHandler=d(Kl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>A(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new Oo(o)),t=o=>this.events.next(new Po(o));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;_e(()=>{this.transitions?.next(ee(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new He(null),this.transitions.pipe(ae(t=>t!==null),Ce(t=>{let o=!1,r=new AbortController,a=()=>!o&&this.currentTransition?.id===t.id;return A(t).pipe(Ce(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),Ge;this.currentTransition=t;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?ee(g({},u),{previousNavigation:null}):null,abort:()=>r.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&f!=="reload")return this.events.next(new Rt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ci.IgnoredSameUrlNavigation)),s.resolve(!1),Ge;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return A(s).pipe(Ce(_=>(this.events.next(new cn(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?Ge:Promise.resolve(_))),tp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,r.signal),Be(_=>{t.targetSnapshot=_.targetSnapshot,t.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(R=>(R.finalUrl=_.urlAfterRedirects,R)),this.events.next(new Si)}),Ce(_=>Qe(t.routesRecognizeHandler.deferredHandle??A(void 0)).pipe(re(()=>_))),Be(()=>{let _=new wi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:R,source:$,restoredState:W,extras:Y}=s,xe=new cn(_,this.urlSerializer.serialize(R),$,W);this.events.next(xe);let Ft=Ol(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ee(g({},s),{targetSnapshot:Ft,urlAfterRedirects:R,extras:ee(g({},Y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(St=>(St.finalUrl=R,St)),A(t)}else return this.events.next(new Rt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ci.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ge}),re(s=>{let u=new ko(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=t=ee(g({},s),{guards:vm(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Em(s=>this.events.next(s)),Ce(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw No(this.urlSerializer,s.guardsResult);let u=new Mo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!a())return Ge;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ne.GuardRejected),Ge;if(s.guards.canActivateChecks.length===0)return A(s);let h=new Io(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!a())return Ge;let f=!1;return A(s).pipe(np(this.paramsInheritanceStrategy),Be({next:()=>{f=!0;let _=new Eo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{f||this.cancelNavigationTransition(s,"",Ne.NoDataFromResolver)}}))}),ml(s=>{let u=f=>{let _=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let R=f._environmentInjector;_.push(this.configLoader.loadComponent(R,f.routeConfig).then($=>{f.component=$}))}for(let R of f.children)_.push(...u(R));return _},h=u(s.targetSnapshot.root);return h.length===0?A(s):Qe(Promise.all(h).then(()=>s))}),ml(()=>this.afterPreactivation()),Ce(()=>{let{currentSnapshot:s,targetSnapshot:u}=t,h=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return h?Qe(h).pipe(re(()=>t)):A(t)}),at(1),Ce(s=>{let u=um(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=ee(g({},s),{targetRouterState:u}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),this.events.next(new zn);let h=t.beforeActivateHandler.deferredHandle;return h?Qe(h.then(()=>s)):A(s)}),Be(s=>{new ma(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a()&&(o=!0,this.currentNavigation.update(u=>(u.abort=lp,u)),this.lastSuccessfulNavigation.set(_e(this.currentNavigation)),this.events.next(new ot(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ne(Nl(r.signal).pipe(ae(()=>!o&&!t.targetRouterState),Be(()=>{this.cancelNavigationTransition(t,r.signal.reason+"",Ne.Aborted)}))),Be({complete:()=>{o=!0}}),ne(this.transitionAbortWithErrorSubject.pipe(Be(s=>{throw s}))),bs(()=>{r.abort(),o||this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),to(s=>{if(o=!0,this.destroyed)return t.resolve(!1),Ge;if(Fl(s))this.events.next(new ht(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),gm(s)?this.events.next(new Bn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let u=new dn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let h=st(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(h instanceof Un){let{message:f,cancellationCode:_}=No(this.urlSerializer,h);this.events.next(new ht(t.id,this.urlSerializer.serialize(t.extractedUrl),f,_)),this.events.next(new Bn(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(h){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(h)}}return Ge}))}))}cancelNavigationTransition(e,t,o){let r=new ht(e.id,this.urlSerializer.serialize(e.extractedUrl),t,o);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=_e(this.currentNavigation),o=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==o?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function cp(n){return n!==bi}var Ql=new P("");var Jl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>d(dp),providedIn:"root"})}return n})(),Bo=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},dp=(()=>{class n extends Bo{static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ho=(()=>{class n{urlSerializer=d(Hn);options=d(qn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Pn);urlHandlingStrategy=d(Vo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ve;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:o}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=o??r;return a instanceof Ve?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:o}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,o),this.routerState=e):this.rawUrlTree=o}routerState=Ol(null,d(qe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:()=>d(mp),providedIn:"root"})}return n})(),mp=(()=>{class n extends Ho{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof cn?this.updateStateMemento():e instanceof Rt?this.commitTransition(t):e instanceof wi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof zn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ht&&!El(e)?this.restoreHistory(t):e instanceof dn?this.restoreHistory(t,!0):e instanceof ot&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:o,id:r}=t,{replaceUrl:a,state:s}=o;if(this.location.isCurrentPathEqualTo(e)||a){let u=this.browserPageId,h=g(g({},s),this.generateNgRouterState(r,u,t));this.location.replaceState(e,"",h)}else{let u=g(g({},s),this.generateNgRouterState(r,this.browserPageId+1,t));this.location.go(e,"",u)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,r=this.currentPageId-o;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,o){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:t},this.routerUrlState(o)):g({navigationId:e},this.routerUrlState(o))}static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wa(n,i){n.events.pipe(ae(e=>e instanceof ot||e instanceof ht||e instanceof dn||e instanceof Rt),re(e=>e instanceof ot||e instanceof Rt?0:(e instanceof ht?e.code===Ne.Redirect||e.code===Ne.SupersededByNewNavigation:!1)?2:1),ae(e=>e!==2),at(1)).subscribe(()=>{i()})}var ue=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Os);stateManager=d(Ho);options=d(qn,{optional:!0})||{};pendingTasks=d(Cs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Xl);urlSerializer=d(Hn);location=d(Pn);urlHandlingStrategy=d(Vo);injector=d(qe);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Jl);injectorCleanup=d(Ql,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ri,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(jo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Oe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let o=this.navigationTransitions.currentTransition,r=_e(this.navigationTransitions.currentNavigation);if(o!==null&&r!==null){if(this.stateManager.handleRouterEvent(t,r),t instanceof ht&&t.code!==Ne.Redirect&&t.code!==Ne.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ot)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Bn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,o.currentRawUrl),u=g({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||cp(o.source)},a);this.scheduleNavigation(s,bi,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}mm(t)&&this._events.next(t)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,o,r)=>{this.navigateToSyncWithBrowser(e,o,t,r)})}navigateToSyncWithBrowser(e,t,o,r){let a=o?.navigationId?o:null,s=o?.\u0275routerUrl??e;if(o?.\u0275routerUrl&&(r=ee(g({},r),{browserUrl:e})),o){let h=g({},o);delete h.navigationId,delete h.\u0275routerPageId,delete h.\u0275routerUrl,Object.keys(h).length!==0&&(r.state=h)}let u=this.parseUrl(s);this.scheduleNavigation(u,t,a,r).catch(h=>{this.disposed||this.injector.get(ao)(h)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return _e(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(xa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:o,queryParams:r,fragment:a,queryParamsHandling:s,preserveFragment:u}=t,h=u?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=g(g({},this.currentUrlTree.queryParams),r);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=r||null}f!==null&&(f=this.removeEmptyProps(f));let _;try{let R=o?o.snapshot:this.routerState.snapshot.root;_=Sl(R)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return kl(_,e,f,h??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let o=Ht(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(r,bi,null,t)}navigate(e,t={skipLocationChange:!1}){return pp(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(_s(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let o;if(t===!0?o=g({},ga):t===!1?o=g({},yi):o=g(g({},yi),t),Ht(e))return ia(this.currentUrlTree,e,o);let r=this.parseUrl(e);return ia(this.currentUrlTree,r,o)}removeEmptyProps(e){return Object.entries(e).reduce((t,[o,r])=>(r!=null&&(t[o]=r),t),{})}scheduleNavigation(e,t,o,r,a){if(this.disposed)return Promise.resolve(!1);let s,u,h;a?(s=a.resolve,u=a.reject,h=a.promise):h=new Promise((_,R)=>{s=_,u=R});let f=this.pendingTasks.add();return wa(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:s,reject:u,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pp(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new Pe(4008,!1)}var hp=(()=>{class n{router=d(ue);stateManager=d(Ho);fragment=x("");queryParams=x({});path=x("");serializer=d(Hn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ot&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:o}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(o),this.path.set(this.serializer.serialize(new Ve(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ze=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Bs("href"),{optional:!0});reactiveHref=zs(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return _e(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return _e(this._target)}_target=x(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return _e(this._queryParams)}_queryParams=x(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return _e(this._fragment)}_fragment=x(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return _e(this._queryParamsHandling)}_queryParamsHandling=x(void 0);set state(e){this._state.set(e)}get state(){return _e(this._state)}_state=x(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return _e(this._info)}_info=x(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return _e(this._relativeTo)}_relativeTo=x(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return _e(this._preserveFragment)}_preserveFragment=x(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return _e(this._skipLocationChange)}_skipLocationChange=x(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return _e(this._replaceUrl)}_replaceUrl=x(!1);isAnchorElement;onChanges=new O;applicationErrorHandler=d(ao);options=d(qn,{optional:!0});reactiveRouterState=d(hp);constructor(e,t,o,r,a,s){this.router=e,this.route=t,this.tabIndexAttribute=o,this.renderer=r,this.el=a,this.locationStrategy=s;let u=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=x(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ht(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,o,r,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||o||r||a||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,u)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let o=this.renderer,r=this.el.nativeElement;t!==null?o.setAttribute(r,e,t):o.removeAttribute(r,e)}_urlTree=ve(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=o=>o==="preserve"||o==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Ht(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return _e(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(q(ue),q(bt),ws("tabindex"),q(Se),q(z),q($s))};static \u0275dir=G({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,o){t&1&&S("click",function(a){return o.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&D("href",o.reactiveHref(),Ms)("target",o._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",B],skipLocationChange:[2,"skipLocationChange","skipLocationChange",B],replaceUrl:[2,"replaceUrl","replaceUrl",B],routerLink:"routerLink"},features:[je]})}return n})(),ka=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new X;link=d(Ze,{optional:!0});constructor(e,t,o,r){this.router=e,this.element=t,this.renderer=o,this.cdr=r,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof ot&&this.update()})}ngAfterContentInit(){A(this.links.changes,A(null)).pipe(Nr()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=Qe(e).pipe(Nr()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(o=>!!o)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=fp(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?g({},ga):g({},yi);return o=>{let r=o.urlTree;return r?_e(va(r,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||n)(q(ue),q(z),q(Se),q(Ie))};static \u0275dir=G({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(t,o,r){if(t&1&&et(r,Ze,5),t&2){let a;F(a=L())&&(o.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[je]})}return n})();function fp(n){let i=n;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var gp=new P("");function vp(n,...i){return xs([{provide:Ri,multi:!0,useValue:n},[],{provide:bt,useFactory:bp},{provide:Rs,multi:!0,useFactory:_p},i.map(e=>e.\u0275providers)])}function bp(){return d(ue).routerState.root}function _p(){let n=d(de);return i=>{let e=n.get(Mn);if(i!==e.components[0])return;let t=n.get(ue),o=n.get(yp);n.get(xp)===1&&t.initialNavigation(),n.get(Cp,null,{optional:!0})?.setUpPreloading(),n.get(gp,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var yp=new P("",{factory:()=>new O}),xp=new P("",{factory:()=>1});var Cp=new P("");var Wn=class n{constructor(i){this.http=i}http;baseUrl=Ee.STATICS_API_URL;apiResource="session";registrarSesion(i,e){return this.http.post(`${this.baseUrl}${this.apiResource}/registrar`,i,e)}validarSesion(i,e){return this.http.post(`${this.baseUrl}${this.apiResource}/validar`,i,e)}getSesion(i,e){return this.http.post(`${this.baseUrl}${this.apiResource}/getSesion`,i,e)}validarGoogleAuth(i,e){return this.http.post(`${this.baseUrl}${this.apiResource}/google-auth`,i,e)}static \u0275fac=function(e){return new(e||n)(we(co))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var un="droguier_session",J=class n{platformId=d(lt);router=d(ue);sessionApiSvc=d(Wn);sessionSignal=x(null);sessionUserSignal=x(null);constructor(){if(this.isBrowser()){let i=localStorage.getItem(un);if(i)try{let e=JSON.parse(i);this.sessionSignal.set(e),this.sessionUserSignal.set(null)}catch{localStorage.removeItem(un)}}}get session(){return this.sessionSignal.asReadonly()}get sessionUser(){return this.sessionUserSignal.asReadonly()}hasSession(){if(!this.isBrowser())return!!this.sessionSignal();let i=localStorage.getItem(un),e=!!i;if(!e)return(this.sessionSignal()||this.sessionUserSignal())&&(this.sessionSignal.set(null),this.sessionUserSignal.set(null)),!1;if(e&&!this.sessionSignal())try{let t=JSON.parse(i);this.sessionSignal.set(t)}catch{return localStorage.removeItem(un),this.sessionSignal.set(null),this.sessionUserSignal.set(null),!1}return e}getToken(){if(!this.isBrowser())return null;let i=localStorage.getItem(un);if(!i)return null;try{let e=JSON.parse(i),t=e?.token??e?.accessToken??e?.data?.token??null;return typeof t=="string"&&t.trim().length>0?t:null}catch{return null}}setSession(i){this.isBrowser()&&i!==void 0&&(localStorage.setItem(un,JSON.stringify(i)),this.sessionSignal.set(i),this.sessionUserSignal.set(null))}setSessionUser(i){this.sessionUserSignal.set(this.deserializeSessionUser(i))}async cargarSesion(i=!1){let e=this.sessionUserSignal();if(!i&&e)return e;let t=this.sessionSignal();if(!t)return this.sessionUserSignal.set(null),null;try{let o=await this.getSesionWithSubscribe({data:t?.data},"initial");if(this.isSessionExpiredMessage(o?.message)&&await this.revalidateSessionToken()){let s=this.sessionSignal();o=await this.getSesionWithSubscribe({data:s?.data},"after-refresh")}if(o?.success===!1||this.isSessionExpiredMessage(o?.message))return this.clearSession(),this.redirectToPublicHome(),null;let r=this.deserializeSessionUser(o?.data??null);return this.sessionUserSignal.set(r),r}catch{return this.clearSession(),this.redirectToPublicHome(),null}}getSesionWithSubscribe(i,e){return new Promise((t,o)=>{this.sessionApiSvc.getSesion(i).subscribe({next:r=>{t(r)},error:r=>{if(r?.status===403){let a={success:!1,message:r?.error?.message??r?.statusText??"Forbidden",status:403,data:r?.error??null};t(a)}else o(r)}})})}async revalidateSessionToken(){let i=this.sessionSignal();try{let e=await gs(this.sessionApiSvc.validarSesion(null));if(e?.success===!1||!e?.token)return!1;let t=ee(g(g({},i??{}),e),{data:e?.data??i?.data});return this.setSession(t),!0}catch{return!1}}clearSession(){this.isBrowser()&&(localStorage.removeItem(un),this.sessionSignal.set(null),this.sessionUserSignal.set(null))}deserializeSessionUser(i){if(!i)return null;if(typeof i=="object")return i;if(typeof i!="string")return null;try{let e=JSON.parse(i);if(typeof e=="string"){let t=JSON.parse(e);return t&&typeof t=="object"?t:null}return e&&typeof e=="object"?e:null}catch{return null}}isSessionExpiredMessage(i){return typeof i!="string"?!1:i.toLowerCase().includes("session has expired")}redirectToPublicHome(){this.isBrowser()&&this.router.navigate(["/home"])}isBrowser(){return gt(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};function kp(n,i){if(n&1&&(l(0,"p"),p(1),c()),n&2){let e=i.ngIf;m(),te(" Expiraci\xF3n de sesi\xF3n: ",e," ")}}function Mp(n,i){if(n&1&&(l(0,"p"),p(1),c()),n&2){let e=i.ngIf;m(),te(" Expiraci\xF3n de refresh: ",e," ")}}function Ip(n,i){if(n&1&&(l(0,"div",2)(1,"h3"),p(2,"Sesi\xF3n activa"),c(),pe(3,kp,2,1,"p",3)(4,Mp,2,1,"p",3),l(5,"pre"),p(6),On(7,"json"),c()()),n&2){let e=i.ngIf,t=v();m(3),b("ngIf",t.formatSessionDate(e,"#sym:expiration_date","expiration_date")),m(),b("ngIf",t.formatSessionDate(e,"#sym:refresh_expiration_date","refresh_expiration_date")),m(2),T(Yr(7,3,e))}}function Ep(n,i){if(n&1&&(l(0,"p"),p(1),c()),n&2){let e=i.ngIf;m(),te(" Expiraci\xF3n de sesi\xF3n: ",e," ")}}function Op(n,i){if(n&1&&(l(0,"p"),p(1),c()),n&2){let e=i.ngIf;m(),te(" Expiraci\xF3n de refresh: ",e," ")}}function Pp(n,i){if(n&1&&(l(0,"div",2)(1,"h3"),p(2,"Sesi\xF3n activa"),c(),pe(3,Ep,2,1,"p",3)(4,Op,2,1,"p",3),l(5,"pre"),p(6),On(7,"json"),c()()),n&2){let e=i.ngIf,t=v();m(3),b("ngIf",t.formatSessionDate(e,"#sym:expiration_date","expiration_date")),m(),b("ngIf",t.formatSessionDate(e,"#sym:refresh_expiration_date","refresh_expiration_date")),m(2),T(Yr(7,3,e))}}var Go=class n{constructor(i){this.sessionService=i;this.session.set(this.sessionService.session()),this.sessionUser.set(this.sessionService.sessionUser())}sessionService;session=x("");sessionUser=x(null);ngOnInit(){this.cargarSesion()}cargarSesion(){return this.sessionService.cargarSesion().then(i=>{this.sessionUser.set(this.sessionService.sessionUser())})}formatSessionDate(i,e,t){if(!i||typeof i!="object")return null;let o=i,r=o[e]??(t?o[t]:null);return r==null?null:this.toReadableDate(r)}toReadableDate(i){let e=null;if(typeof i=="number")e=new Date(i<1e12?i*1e3:i);else if(typeof i=="string"){let t=Number(i);!Number.isNaN(t)&&i.trim()!==""?e=new Date(t<1e12?t*1e3:t):e=new Date(i)}return!e||Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-CL",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}static \u0275fac=function(e){return new(e||n)(q(J))};static \u0275cmp=y({type:n,selectors:[["app-dashboard"]],decls:7,vars:2,consts:[[1,"dashboard"],["class","session-box",4,"ngIf"],[1,"session-box"],[4,"ngIf"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h1"),p(2,"Panel privado"),c(),l(3,"p"),p(4,"Est\xE1s navegando en modo sesi\xF3n activa."),c(),pe(5,Ip,8,5,"div",1)(6,Pp,8,5,"div",1),c()),e&2&&(m(5),b("ngIf",t.session()),m(),b("ngIf",t.sessionUser()))},dependencies:[Bt,Rn,Ks],styles:["[_nghost-%COMP%]{display:block}.dashboard[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:2rem;box-shadow:0 14px 30px #0f172a1a}.dashboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;color:#111827}.session-box[_ngcontent-%COMP%]{margin-top:1.25rem;background:#f8fafc;border-radius:12px;padding:1rem;border:1px solid #e2e8f0}pre[_ngcontent-%COMP%]{margin:0;white-space:pre-wrap;word-break:break-word;font-size:.85rem}"]})};var Rp=(n,i)=>i.src;function Tp(n,i){if(n&1&&(l(0,"li",4)(1,"span",5),w(2,"img",6),c(),l(3,"span",7),p(4),c()()),n&2){let e=i.$implicit;D("aria-label",e.name),m(2),b("src",e.src,zt)("alt",e.alt),m(2),T(e.name)}}var Yn=class n{techIcons=[{src:"assets/icons/javascript.svg",alt:"Logo de JavaScript",name:"JavaScript"},{src:"assets/icons/typescript.svg",alt:"Logo de TypeScript",name:"TypeScript"},{src:"assets/icons/angular.svg",alt:"Logo de Angular",name:"Angular"},{src:"assets/icons/nodejs.svg",alt:"Logo de Node.js",name:"Node.js"},{src:"assets/icons/expressjs.svg",alt:"Logo de Express",name:"Express"},{src:"assets/icons/html5.svg",alt:"Logo de HTML5",name:"HTML5"},{src:"assets/icons/css3.svg",alt:"Logo de CSS3",name:"CSS3"},{src:"assets/icons/npm.svg",alt:"Logo de npm",name:"npm"},{src:"assets/icons/cloudflare.svg",alt:"Logo de Cloudflare",name:"Cloudflare"},{src:"assets/icons/git.svg",alt:"Logo de Git",name:"Git"},{src:"assets/icons/github.svg",alt:"Logo de GitHub",name:"GitHub"},{src:"assets/icons/vscode.svg",alt:"Logo de VS Code",name:"VS Code"},{src:"assets/icons/opencode.svg",alt:"Logo de OpenCode",name:"OpenCode"},{src:"assets/icons/ollama.svg",alt:"Logo de Ollama",name:"Ollama"}];gridColumns=Math.ceil(Math.sqrt(this.techIcons.length));static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-home"]],decls:7,vars:1,consts:[["aria-label","Tecnolog\xEDas usadas en esta web",1,"home-hero"],[1,"home-content"],[1,"home-title"],[1,"icon-grid",3,"ngClass"],["tabindex","0",1,"icon-card"],[1,"icon-tile"],["loading","lazy","width","50","height","50",1,"icon-logo",3,"src","alt"],["role","tooltip",1,"icon-tooltip"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),p(3,"Created with"),c(),l(4,"ul",3),se(5,Tp,5,4,"li",4,Rp),c()()()),e&2&&(m(4),b("ngClass","cols-"+t.gridColumns),m(),le(t.techIcons))},dependencies:[qs],styles:['[_nghost-%COMP%]{display:block;flex:1 1 auto;min-height:100%;overflow:hidden;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-display, "Bitter", Georgia, serif)}.home-hero[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;box-sizing:border-box;overflow-y:auto}.home-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.home-title[_ngcontent-%COMP%]{font-family:"Electrolize",var(--app-font-sans, "Inter", sans-serif);font-size:.85rem;font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-transform:uppercase;letter-spacing:.08em;align-self:flex-start;margin:0 0 1.25rem;color:var(--app-text-primary)}.icon-grid[_ngcontent-%COMP%]{list-style:none;display:grid;gap:clamp(.6rem,1.5vw,1rem);justify-content:center;padding:0;margin:0}.icon-grid.cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,7rem)}.icon-grid.cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,6.5rem)}.icon-card[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border-radius:var(--app-pills-radius);border:1px solid var(--app-border-strong);background:var(--app-chip-background-strong);cursor:default;transition:border-color .2s ease,box-shadow .2s ease}.icon-card[_ngcontent-%COMP%]:hover, .icon-card[_ngcontent-%COMP%]:focus-visible{border-color:var(--app-status-primary);box-shadow:0 0 8px var(--app-status-primary);outline:none}.icon-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:calc(var(--app-pills-radius) - 4px);background:color-mix(in srgb,var(--color-neutral-white, #ffffff) 85%,transparent);padding:.4rem;box-sizing:border-box}.icon-logo[_ngcontent-%COMP%]{width:62%;height:62%;object-fit:contain}.icon-tooltip[_ngcontent-%COMP%]{position:absolute;bottom:calc(100% + .5rem);left:50%;transform:translate(-50%);background:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-sans, "Inter", sans-serif);font-size:.7rem;font-weight:600;padding:.3rem .65rem;border:1px solid var(--app-border-strong);border-radius:var(--app-pills-radius);box-shadow:0 4px 10px var(--app-shadow);white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .15s ease,visibility .15s ease;pointer-events:none}.icon-tooltip[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:5px solid transparent;border-top-color:var(--app-border-strong)}.icon-card[_ngcontent-%COMP%]:hover   .icon-tooltip[_ngcontent-%COMP%], .icon-card[_ngcontent-%COMP%]:focus-visible   .icon-tooltip[_ngcontent-%COMP%]{opacity:1;visibility:visible}@media(max-width:48rem){.home-hero[_ngcontent-%COMP%]{padding:1.5rem .5rem}.home-title[_ngcontent-%COMP%]{font-size:.75rem}.icon-grid.cols-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,5.5rem)}.icon-grid.cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,4.5rem)}.icon-tile[_ngcontent-%COMP%]{padding:.3rem}}']})};var Gt=class n{constructor(i){this.http=i}http;baseUrl=Ee.STATICS_API_URL;get(i,e){let t=`${this.baseUrl}${i}`;return this.http.get(t,e)}post(i,e,t){return this.http.post(`${this.baseUrl}${i}`,e,t)}put(i,e,t){return this.http.put(`${this.baseUrl}${i}`,e,t)}delete(i,e){return this.http.delete(`${this.baseUrl}${i}`,e)}patch(i,e,t){return this.http.patch(`${this.baseUrl}${i}`,e,t)}static \u0275fac=function(e){return new(e||n)(we(co))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};function Dp(n,i){if(n&1&&(l(0,"div",28),p(1),c()),n&2){let e=v(2);m(),te(" ",e.error_msg," ")}}function Fp(n,i){if(n&1&&(l(0,"div",29),p(1),c()),n&2){let e=v(2);m(),te(" ",e.success_msg," ")}}function Lp(n,i){n&1&&(l(0,"p",30),p(1," Esta accion desactivara el bookmark (soft delete). "),c())}function Np(n,i){n&1&&(l(0,"p",30),p(1,' Esta accion agregara el tag "favorito" al bookmark. '),c())}function zp(n,i){n&1&&(l(0,"small",32),p(1,"ID requerido."),c())}function Bp(n,i){if(n&1){let e=fe();l(0,"label"),p(1," ID * "),l(2,"input",31),an("ngModelChange",function(o){j(e);let r=v(2);return rn(r.formModel.id,o)||(r.formModel.id=o),U(o)}),c(),pe(3,zp,2,0,"small",14),c()}if(n&2){v();let e=tt(15),t=v();m(2),on("ngModel",t.formModel.id),m(),b("ngIf",t.formSubmitted&&(e.controls.id==null?null:e.controls.id.invalid))}}function jp(n,i){n&1&&(l(0,"small",32),p(1,"Titulo requerido."),c())}function Up(n,i){n&1&&(l(0,"small",32),p(1,"URL requerida."),c())}function Vp(n,i){if(n&1){let e=fe();l(0,"span",35)(1,"span"),p(2),c(),l(3,"button",36),S("click",function(){let o=j(e).$implicit,r=v(3);return U(r.removeTag(o))}),p(4," x "),c()()}if(n&2){let e=i.$implicit,t=v(3);m(2),T(e),m(),b("disabled",t.mode==="delete")}}function Hp(n,i){if(n&1&&(l(0,"div",33),pe(1,Vp,5,2,"span",34),c()),n&2){let e=v(2);m(),b("ngForOf",e.bookmarkTags())}}function Gp(n,i){if(n&1&&(l(0,"button",37),p(1,"Crear"),c()),n&2){let e=v(2);b("disabled",e.loadingApi())}}function $p(n,i){if(n&1&&(l(0,"button",38),p(1,"Actualizar"),c()),n&2){let e=v(2);b("disabled",e.loadingApi())}}function qp(n,i){if(n&1&&(l(0,"button",38),p(1,"Marcar favorito"),c()),n&2){let e=v(2);b("disabled",e.loadingApi())}}function Wp(n,i){if(n&1&&(l(0,"button",39),p(1,"Desactivar"),c()),n&2){let e=v(2);b("disabled",e.loadingApi())}}function Yp(n,i){if(n&1){let e=fe();l(0,"button",21),S("click",function(){j(e);let o=v(2);return U(o.clearForm(!0))}),p(1,"Limpiar formulario"),c()}if(n&2){let e=v(2);b("disabled",e.loadingApi())}}function Zp(n,i){if(n&1){let e=fe();l(0,"div",2),S("click",function(){j(e);let o=v();return U(o.closeModal())}),l(1,"div",3),S("click",function(o){return o.stopPropagation()}),l(2,"div",4)(3,"div")(4,"p",5),p(5,"Formulario"),c(),l(6,"h3",6),p(7),c()(),l(8,"button",7),S("click",function(){j(e);let o=v();return U(o.closeModal())}),p(9,"Cerrar"),c()(),pe(10,Dp,2,1,"div",8)(11,Fp,2,1,"div",9)(12,Lp,2,0,"p",10)(13,Np,2,0,"p",10),l(14,"form",11,0),S("ngSubmit",function(){j(e);let o=v();return U(o.submitForm())}),pe(16,Bp,4,2,"label",12),l(17,"label"),p(18," Titulo * "),l(19,"input",13),an("ngModelChange",function(o){j(e);let r=v();return rn(r.formModel.title,o)||(r.formModel.title=o),U(o)}),c(),pe(20,jp,2,0,"small",14),c(),l(21,"label"),p(22," URL * "),l(23,"input",15),an("ngModelChange",function(o){j(e);let r=v();return rn(r.formModel.url,o)||(r.formModel.url=o),U(o)}),c(),pe(24,Up,2,0,"small",14),c(),l(25,"label"),p(26," Icono "),l(27,"input",16),an("ngModelChange",function(o){j(e);let r=v();return rn(r.formModel.icon,o)||(r.formModel.icon=o),U(o)}),c()(),l(28,"label",17),p(29," Descripcion "),l(30,"textarea",18),an("ngModelChange",function(o){j(e);let r=v();return rn(r.formModel.description,o)||(r.formModel.description=o),U(o)}),c()(),l(31,"label",17),p(32," Tags "),l(33,"div",19)(34,"input",20),an("ngModelChange",function(o){j(e);let r=v();return rn(r.bookmarkTagsInput,o)||(r.bookmarkTagsInput=o),U(o)}),S("keydown",function(o){j(e);let r=v();return U(r.handleTagKeydown(o))}),c(),l(35,"button",21),S("click",function(){j(e);let o=v();return U(o.addTagFromInput())}),p(36," Agregar "),c()(),pe(37,Hp,2,1,"div",22),c(),l(38,"div",23),pe(39,Gp,2,1,"button",24)(40,$p,2,1,"button",25)(41,qp,2,1,"button",25)(42,Wp,2,1,"button",26)(43,Yp,2,1,"button",27),c()()()()}if(n&2){let e=tt(15),t=v();m(7),te("",t.mode==="create"?"Crear":t.mode==="update"?"Actualizar":t.mode==="favorite"?"Marcar favorito":"Desactivar"," bookmark"),m(3),b("ngIf",t.error()),m(),b("ngIf",t.success_msg&&!t.loadingApi()),m(),b("ngIf",t.mode==="delete"),m(),b("ngIf",t.mode==="favorite"),m(3),b("ngIf",t.mode!=="create"),m(3),b("required",t.mode!=="delete")("disabled",t.mode==="delete"),on("ngModel",t.formModel.title),m(),b("ngIf",t.formSubmitted&&t.mode!=="delete"&&(e.controls.title==null?null:e.controls.title.invalid)),m(3),b("required",t.mode!=="delete")("disabled",t.mode==="delete"),on("ngModel",t.formModel.url),m(),b("ngIf",t.formSubmitted&&t.mode!=="delete"&&(e.controls.url==null?null:e.controls.url.invalid)),m(3),b("disabled",t.mode==="delete"),on("ngModel",t.formModel.icon),m(3),b("disabled",t.mode==="delete"),on("ngModel",t.formModel.description),m(3),E("disabled",t.mode==="delete"),m(),b("disabled",t.mode==="delete"),on("ngModel",t.bookmarkTagsInput),m(),b("disabled",t.mode==="delete"),m(2),b("ngIf",t.bookmarkTags().length>0),m(2),b("ngIf",t.mode==="create"),m(),b("ngIf",t.mode==="update"),m(),b("ngIf",t.mode==="favorite"),m(),b("ngIf",t.mode==="delete"),m(),b("ngIf",t.mode!=="delete")}}var $o=class n{constructor(i){this.staticsApi=i}staticsApi;api_controller="bookmarks";api_fav_controller="partners/bookmarks";loadingApi=x(!1);error=x(!1);error_msg=null;success_msg=null;apiUrl=Ee.STATICS_API_URL;apiToken=Ee.STATICS_API_TOKEN;formModel={id:"",title:"",url:"",icon:"",description:"",tags:[]};bookmarkTags=x([]);bookmarkTagsInput="";formSubmitted=!1;open=!1;mode="create";bookmark=null;standardLoadTimeMs=typeof globalThis.STANDARD_LOAD_TIME_MS=="number"?globalThis.STANDARD_LOAD_TIME_MS:800;closed=new X;completed=new X;ngOnChanges(i){i.open?.currentValue&&this.prepareForm()}submitForm(){if(this.mode==="create"){this.createBookmark();return}if(this.mode==="update"){this.updateBookmark();return}if(this.mode==="favorite"){this.favoriteBookmark();return}if(this.mode==="delete"){this.deleteBookmark();return}}clearForm(i=!1){if(this.loadingApi.set(!1),i&&(this.mode==="update"||this.mode==="favorite")&&this.bookmark){this.selectBookmark(this.bookmark);return}this.formModel={id:"",title:"",url:"",icon:"",description:"",tags:[]},this.bookmarkTags.set([]),this.bookmarkTagsInput=""}closeModal(){this.formSubmitted=!1,this.closed.emit()}createBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("create"))return;this.resetStatus(),this.loadingApi.set(!0);let i=this.buildPayload();this.staticsApi.post(this.api_controller,i).subscribe({next:e=>{e.success?(this.success_msg="Bookmark creado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo crear el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:e=>this.handleError(e)})}updateBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("update"))return;this.resetStatus(),this.loadingApi.set(!0);let i=this.buildPayload(),e=encodeURIComponent(this.formModel.id);this.staticsApi.put(`${this.api_controller}/${e}`,i).subscribe({next:t=>{t.success?(this.success_msg="Bookmark actualizado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo actualizar el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:t=>this.handleError(t)})}deleteBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("delete"))return;if(!this.hasActiveTag()){this.error_msg='El bookmark ya esta desactivado (sin tag "activo").',this.error.set(!0);return}this.resetStatus(),this.loadingApi.set(!0);let i=encodeURIComponent(this.formModel.id);this.staticsApi.delete(`${this.api_controller}/${i}`).subscribe({next:e=>{e.success?(this.success_msg=e.message||"Bookmark desactivado correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo desactivar el bookmark.",this.error.set(!0),this.loadingApi.set(!1))},error:e=>this.handleError(e)})}favoriteBookmark(){if(this.formSubmitted=!0,!this.validateFormForMode("favorite"))return;this.resetStatus(),this.loadingApi.set(!0);let i=this.buildFavoritePayload(),e=encodeURIComponent(this.formModel.id);this.staticsApi.put(`${this.api_fav_controller}`,i).subscribe({next:t=>{t.success?(this.success_msg="Bookmark marcado como favorito correctamente.",this.clearForm(),this.completed.emit(),this.closeModal()):(this.error_msg="No se pudo marcar el bookmark como favorito.",this.error.set(!0),this.loadingApi.set(!1))},error:t=>this.handleError(t)})}selectBookmark(i){this.formModel={id:i.id,title:i.title,url:i.url,icon:i.icon,description:i.description,tags:i.tags||[]},this.bookmarkTags.set([...i.tags||[]]),this.bookmarkTagsInput="",this.success_msg="Bookmark cargado en el formulario.",this.error.set(!1)}buildPayload(){this.addTagFromInput();let i=this.bookmarkTags();return{id:this.formModel.id,title:this.formModel.title,url:this.formModel.url,icon:this.formModel.icon||"",description:this.formModel.description||"",tags:i}}buildFavoritePayload(){this.addTagFromInput();let i=this.bookmarkTags(),t=i.some(o=>o.toLowerCase()==="favorito")?i:[...i,"favorito"];return this.bookmarkTags.set(t),{id:this.formModel.id,title:this.formModel.title,url:this.formModel.url,icon:this.formModel.icon||"",description:this.formModel.description||"",tags:t}}validateFormForMode(i){return this.resetStatus(),i!=="create"&&!this.formModel.id?(this.error_msg="El ID es obligatorio para esta accion.",this.error.set(!0),!1):i!=="delete"&&(!this.formModel.title||!this.formModel.url)?(this.error_msg="Titulo y URL son obligatorios.",this.error.set(!0),!1):!0}addTagFromInput(){let i=this.bookmarkTagsInput.trim();if(!i)return;let e=i.split(",").map(a=>a.trim()).filter(a=>a.length>0);if(e.length===0)return;let t=this.bookmarkTags(),o=new Set(t.map(a=>a.toLowerCase())),r=[...t];e.forEach(a=>{o.has(a.toLowerCase())||(r.push(a),o.add(a.toLowerCase()))}),this.bookmarkTags.set(r),this.bookmarkTagsInput=""}removeTag(i){let e=this.bookmarkTags().filter(t=>t!==i);this.bookmarkTags.set(e)}handleTagKeydown(i){(i.key==="Enter"||i.key===",")&&(i.preventDefault(),this.addTagFromInput())}prepareForm(){if(this.formSubmitted=!1,this.loadingApi.set(!1),this.resetStatus(),this.mode==="create"){this.clearForm();return}if(this.bookmark){this.selectBookmark(this.bookmark);return}this.clearForm(),this.error_msg="Selecciona un bookmark para continuar.",this.error.set(!0)}hasActiveTag(){return this.bookmarkTags().some(e=>e.toLowerCase()==="activo")}resetStatus(){this.error.set(!1),this.error_msg=null,this.success_msg=null}handleError(i){i?.status===401?this.error_msg=`Error 401: ${i.error?.message||"Token de autenticacion invalido"}`:i?.status===404?this.error_msg="Error 404: Endpoint no encontrado":i?.status===0?this.error_msg="Error de red: No se pudo conectar con el servidor":this.error_msg=`Error ${i?.status||""}: ${i?.error?.message||i?.message||"Error desconocido"}`,this.error.set(!0),this.loadingApi.set(!1)}static \u0275fac=function(e){return new(e||n)(q(Gt))};static \u0275cmp=y({type:n,selectors:[["app-statics-bookmarks-crud"]],inputs:{open:"open",mode:"mode",bookmark:"bookmark",standardLoadTimeMs:"standardLoadTimeMs"},outputs:{closed:"closed",completed:"completed"},features:[je],decls:1,vars:1,consts:[["crudForm","ngForm"],["class","modal-backdrop",3,"click",4,"ngIf"],[1,"modal-backdrop",3,"click"],["role","dialog","aria-modal","true",1,"modal",3,"click"],[1,"modal-header"],[1,"modal-kicker"],[1,"modal-title"],["type","button",1,"btn","ghost",3,"click"],["class","status error",4,"ngIf"],["class","status success",4,"ngIf"],["class","modal-note",4,"ngIf"],[1,"form-grid",3,"ngSubmit"],[4,"ngIf"],["type","text","name","title","placeholder","Titulo",3,"ngModelChange","required","disabled","ngModel"],["class","field-error",4,"ngIf"],["type","url","name","url","placeholder","https://",3,"ngModelChange","required","disabled","ngModel"],["type","text","name","icon","placeholder","Icono",3,"ngModelChange","disabled","ngModel"],[1,"span-2"],["rows","3","name","description","placeholder","Descripcion",3,"ngModelChange","disabled","ngModel"],[1,"tags-input"],["type","text","name","tags","placeholder","Escribe un tag y presiona Enter",3,"ngModelChange","keydown","disabled","ngModel"],["type","button",1,"btn","ghost",3,"click","disabled"],["class","tag-pills",4,"ngIf"],[1,"modal-actions","span-2"],["class","btn primary","type","submit",3,"disabled",4,"ngIf"],["class","btn secondary","type","submit",3,"disabled",4,"ngIf"],["class","btn danger","type","submit",3,"disabled",4,"ngIf"],["class","btn ghost","type","button",3,"disabled","click",4,"ngIf"],[1,"status","error"],[1,"status","success"],[1,"modal-note"],["type","text","name","id","required","","placeholder","ID del bookmark","readonly","",3,"ngModelChange","ngModel"],[1,"field-error"],[1,"tag-pills"],["class","tag-pill",4,"ngFor","ngForOf"],[1,"tag-pill"],["type","button",1,"tag-remove",3,"click","disabled"],["type","submit",1,"btn","primary",3,"disabled"],["type","submit",1,"btn","secondary",3,"disabled"],["type","submit",1,"btn","danger",3,"disabled"]],template:function(e,t){e&1&&pe(0,Zp,44,29,"div",1),e&2&&b("ngIf",t.open)},dependencies:[Bt,Ws,Rn,il,go,po,ho,fo,tl,Js,An],styles:["[_nghost-%COMP%]{--ink: var(--app-text-strong);--muted: var(--app-text-soft);--primary: var(--app-brand-primary);--primary-dark: var(--app-brand-primary-dark);--accent: var(--app-brand-accent);--danger: var(--app-status-error);--border: var(--app-border-soft);--surface: var(--app-text-inverse);--surface-alt: var(--app-background-soft)}.crud-container[_ngcontent-%COMP%]{font-family:IBM Plex Sans,Segoe UI,sans-serif;color:var(--ink);max-width:1100px;margin:0 auto;padding:24px}.crud-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.crud-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:26px;letter-spacing:-.02em}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.btn[_ngcontent-%COMP%]{border:none;border-radius:8px;padding:10px 18px;font-size:14px;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}.btn.primary[_ngcontent-%COMP%]{background:var(--primary);color:#fff}.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--primary-dark);box-shadow:0 8px 16px #1a6dff33;transform:translateY(-1px)}.btn.secondary[_ngcontent-%COMP%]{background:var(--accent);color:#fff}.btn.secondary[_ngcontent-%COMP%]:hover:not(:disabled){box-shadow:0 8px 16px #0f9d5833;transform:translateY(-1px)}.btn.danger[_ngcontent-%COMP%]{background:var(--danger);color:#fff}.btn.ghost[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--border);color:var(--ink)}.status[_ngcontent-%COMP%]{margin:12px 0;padding:12px 16px;border-radius:10px;background:var(--surface-alt);color:var(--muted)}.status.error[_ngcontent-%COMP%]{background:#fdecea;color:#b11b12}.status.success[_ngcontent-%COMP%]{background:#e6f4ea;color:#1e7a3f}.form-card[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]{margin-top:20px;padding:20px;border-radius:12px;background:var(--surface);border:1px solid var(--border);box-shadow:0 12px 30px #1118270a}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--app-overlay-backdrop);display:flex;align-items:center;justify-content:center;padding:24px;z-index:999;animation:_ngcontent-%COMP%_fadeIn .2s ease}.modal[_ngcontent-%COMP%]{width:min(820px,100%);background:var(--surface);border-radius:14px;border:1px solid var(--border);box-shadow:0 28px 80px #0b0f1759;padding:24px;animation:_ngcontent-%COMP%_slideUp .25s ease}.modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px}.modal-kicker[_ngcontent-%COMP%]{margin:0;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}.modal-title[_ngcontent-%COMP%]{margin:6px 0 0;font-size:20px}.modal-note[_ngcontent-%COMP%]{margin:0 0 12px;color:var(--muted);font-size:13px}.modal-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;margin-top:8px}.field-error[_ngcontent-%COMP%]{color:var(--danger);font-size:12px}.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;font-size:18px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:16px 0 20px}.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)}.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:14px;color:var(--ink);background:#fff}.form-grid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical}.tags-input[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.tags-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1}.tags-input.disabled[_ngcontent-%COMP%]{opacity:.6}.tag-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.tag-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;background:var(--surface-alt);border:1px solid var(--border);border-radius:999px;padding:4px 10px;font-size:12px;color:var(--ink)}.tag-remove[_ngcontent-%COMP%]{border:none;background:transparent;color:var(--danger);cursor:pointer;font-size:12px;line-height:1}.span-2[_ngcontent-%COMP%]{grid-column:span 2}.list-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:var(--muted);font-size:14px;margin-bottom:12px}.list[_ngcontent-%COMP%]{display:grid;gap:12px}.list-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--surface-alt)}.list-item[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{font-size:12px;color:var(--muted)}.list-empty[_ngcontent-%COMP%]{color:var(--muted);font-size:14px}.debug[_ngcontent-%COMP%]{margin-top:20px;font-size:12px;color:var(--muted);border-top:1px dashed var(--border);padding-top:12px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media(max-width:760px){.crud-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.span-2[_ngcontent-%COMP%]{grid-column:span 1}}"]})};function hn(n){return n.buttons===0||n.detail===0}function fn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ia;function ec(){if(Ia==null){let n=typeof document<"u"?document.head:null;Ia=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ia}function Ea(n){if(ec()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Oa(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ze(n){return n.composedPath?n.composedPath()[0]:n.target}var Pa;try{Pa=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Pa=!1}var oe=(()=>{class n{_platformId=d(lt);isBrowser=this._platformId?gt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Pa)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ai;function tc(){if(Ai==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ai=!0}))}finally{Ai=Ai||!1}return Ai}function Zn(n){return tc()?n:!!n.capture}function rt(n){return n instanceof z?n.nativeElement:n}var nc=new P("cdk-input-modality-detector-options"),ic={ignoreKeys:[18,17,224,91,16]},oc=650,Ra={passive:!0,capture:!0},rc=(()=>{class n{_platform=d(oe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new He(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ze(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<oc||(this._modality.next(hn(e)?"keyboard":"mouse"),this._mostRecentTarget=ze(e))};_onTouchstart=e=>{if(fn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ze(e)};constructor(){let e=d(H),t=d(me),o=d(nc,{optional:!0});if(this._options=g(g({},ic),o),this.modalityDetected=this._modality.pipe(oo(1)),this.modalityChanged=this.modalityDetected.pipe(Br()),this._platform.isBrowser){let r=d(Je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Ra),r.listen(t,"mousedown",this._onMousedown,Ra),r.listen(t,"touchstart",this._onTouchstart,Ra)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Di=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Di||{}),ac=new P("cdk-focus-monitor-default-options"),qo=Zn({passive:!0,capture:!0}),$t=(()=>{class n{_ngZone=d(H);_platform=d(oe);_inputModalityDetector=d(rc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(me);_stopInputModalityDetector=new O;constructor(){let e=d(ac,{optional:!0});this._detectionMode=e?.detectionMode||Di.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ze(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=rt(e);if(!this._platform.isBrowser||o.nodeType!==1)return A();let r=Ea(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new O,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=rt(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=rt(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,u])=>this._originChanged(s,t,u)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Di.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Di.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?oc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=ze(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,qo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,qo)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ne(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,qo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,qo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tt(n){return Array.isArray(n)?n:[n]}var sc=new Set,gn,Wo=(()=>{class n{_platform=d(oe);_nonce=d(ks,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Xp}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Kp(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Kp(n,i){if(!sc.has(n))try{gn||(gn=document.createElement("style"),i&&gn.setAttribute("nonce",i),gn.setAttribute("type","text/css"),document.head.appendChild(gn)),gn.sheet&&(gn.sheet.insertRule(`@media ${n} {body{ }}`,0),sc.add(n))}catch(e){console.error(e)}}function Xp(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ta=(()=>{class n{_mediaMatcher=d(Wo);_zone=d(H);_queries=new Map;_destroySubject=new O;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return lc(Tt(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=lc(Tt(e)).map(a=>this._registerQuery(a).observable),r=Ji(o);return r=eo(r.pipe(at(1)),r.pipe(oo(1),io(0))),r.pipe(re(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:h})=>{s.matches=s.matches||u,s.breakpoints[h]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Xe(a=>{let s=u=>this._zone.run(()=>a.next(u));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(De(t),re(({matches:a})=>({query:e,matches:a})),ne(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lc(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Qp=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({providers:[Qp]})}return n})();var Jp=200,Yo=class{_letterKeyStream=new O;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new O;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Jp;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Be(e=>this._pressedLetters.push(e)),io(i),ae(()=>this._pressedLetters.length>0),re(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ke(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Kn=class{_items;_activeItemIndex=x(-1);_activeItem=x(null);_wrap=!1;_typeaheadSubscription=Oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof en?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):nn(i)&&(this._effectRef=xt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new O;change=new O;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Yo(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Ke(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return nn(this._items)?this._items():this._items instanceof en?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Fi=class extends Kn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var vn=class extends Kn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Fa={},Me=class n{_appId=d(Ss);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Fa.hasOwnProperty(i)||(Fa[i]=0),`${i}${e?n._infix+"-":""}${Fa[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var dc=" ";function La(n,i,e){let t=mc(n,i);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(dc)))}function Ko(n,i,e){let t=mc(n,i);e=e.trim();let o=t.filter(r=>r!==e);o.length?n.setAttribute(i,o.join(dc)):n.removeAttribute(i)}function mc(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var _t=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(_t||{}),Xo,bn;function Qo(){if(bn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return bn=!1,bn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)bn=!0;else{let n=Element.prototype.scrollTo;n?bn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):bn=!1}}return bn}function Qn(){if(typeof document!="object"||!document)return _t.NORMAL;if(Xo==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Xo=_t.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Xo=n.scrollLeft===0?_t.NEGATED:_t.INVERTED),n.remove()}return Xo}function Na(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Jn,pc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function za(){if(Jn)return Jn;if(typeof document!="object"||!document)return Jn=new Set(pc),Jn;let n=document.createElement("input");return Jn=new Set(pc.filter(i=>(n.setAttribute("type",i),n.type===i))),Jn}var uc={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var eu=new P("MATERIAL_ANIMATIONS"),hc=null;function tu(){return d(eu,{optional:!0})?.animationsDisabled||d(so,{optional:!0})==="NoopAnimations"?"di-disabled":(hc??=d(Wo).matchMedia("(prefers-reduced-motion)").matches,hc?"reduced-motion":"enabled")}function Ae(){return tu()!=="enabled"}function ye(n){return n==null?"":typeof n=="string"?n:`${n}px`}function At(n){return n!=null&&`${n}`!="false"}var ft=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ft||{}),Ba=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ft.HIDDEN;constructor(i,e,t,o=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},gc=Zn({passive:!0,capture:!0}),ja=class{_events=new Map;addHandler(i,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,gc)})}removeHandler(i,e,t){let o=this._events.get(i);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,gc)))}_delegateEventHandler=i=>{let e=ze(i);e&&this._events.get(i.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},Li={enterDuration:225,exitDuration:150},nu=800,vc=Zn({passive:!0,capture:!0}),bc=["mousedown","touchstart"],_c=["mouseup","mouseleave","touchend","touchcancel"],iu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ni=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ja;constructor(i,e,t,o,r){this._target=i,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=rt(t)),r&&r.get(Le).load(iu)}fadeInRipple(i,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=g(g({},Li),t.animation);t.centered&&(i=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||ou(i,e,o),s=i-o.left,u=e-o.top,h=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(f);let _=window.getComputedStyle(f),R=_.transitionProperty,$=_.transitionDuration,W=R==="none"||$==="0s"||$==="0s, 0s"||o.width===0&&o.height===0,Y=new Ba(this,f,t,W);f.style.transform="scale3d(1, 1, 1)",Y.state=ft.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Y);let xe=null;return!W&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ft=()=>{xe&&(xe.fallbackTimer=null),clearTimeout(Jt),this._finishRippleTransition(Y)},St=()=>this._destroyRipple(Y),Jt=setTimeout(St,h+100);f.addEventListener("transitionend",Ft),f.addEventListener("transitioncancel",St),xe={onTransitionEnd:Ft,onTransitionCancel:St,fallbackTimer:Jt}}),this._activeRipples.set(Y,xe),(W||!h)&&this._finishRippleTransition(Y),Y}fadeOutRipple(i){if(i.state===ft.FADING_OUT||i.state===ft.HIDDEN)return;let e=i.element,t=g(g({},Li),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ft.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=rt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,bc.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_c.forEach(e=>{this._triggerElement.addEventListener(e,this,vc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ft.FADING_IN?this._startFadeOutTransition(i):i.state===ft.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ft.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ft.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=hn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+nu;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!fn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ft.VISIBLE||i.config.terminateOnPointerUp&&i.state===ft.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(bc.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(_c.forEach(e=>i.removeEventListener(e,this,vc)),this._pointerUpEventsRegistered=!1))}};function ou(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+o*o)}var zi=new P("mat-ripple-global-options"),Jo=(()=>{class n{_elementRef=d(z);_animationsDisabled=Ae();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(H),t=d(oe),o=d(zi,{optional:!0}),r=d(de);this._globalOptions=o||{},this._rippleRenderer=new Ni(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,g(g({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&E("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var ru={capture:!0},au=["focus","mousedown","mouseenter","touchstart"],Ua="mat-ripple-loader-uninitialized",Va="mat-ripple-loader-class-name",yc="mat-ripple-loader-centered",er="mat-ripple-loader-disabled",tr=(()=>{class n{_document=d(me);_animationsDisabled=Ae();_globalRippleOptions=d(zi,{optional:!0});_platform=d(oe);_ngZone=d(H);_injector=d(de);_eventCleanups;_hosts=new Map;constructor(){let e=d(Je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>au.map(t=>e.listen(this._document,t,this._onInteraction,ru)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ua,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Va))&&e.setAttribute(Va,t.className||""),t.centered&&e.setAttribute(yc,""),t.disabled&&e.setAttribute(er,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(er,""):e.removeAttribute(er)}_onInteraction=e=>{let t=ze(e);if(t instanceof HTMLElement){let o=t.closest(`[${Ua}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Va)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Li.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Li.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(er),rippleConfig:{centered:e.hasAttribute(yc),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},u=new Ni(s,this._ngZone,t,this._platform,this._injector),h=!s.rippleDisabled;h&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:h}),e.removeAttribute(Ua)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var su=new P("MAT_BUTTON_CONFIG");function xc(n){return n==null?void 0:hi(n)}var Cc=(()=>{class n{_elementRef=d(z);_ngZone=d(H);_animationsDisabled=Ae();_config=d(su,{optional:!0});_focusMonitor=d($t);_cleanupClick;_renderer=d(Se);_rippleLoader=d(tr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Le).load(Dt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(D("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Ye(o.color?"mat-"+o.color:""),E("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B],ariaDisabled:[2,"aria-disabled","ariaDisabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B],tabIndex:[2,"tabIndex","tabIndex",xc],_tabindex:[2,"tabindex","_tabindex",xc]}})}return n})();var Wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[ie]})}return n})();var lu=["matButton",""],cu=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],du=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var wc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Sc=(()=>{class n extends Cc{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=mu(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?wc.get(this._appearance):null,r=wc.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[dt],attrs:lu,ngContentSelectors:du,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(ge(cu),mt(0,"span",0),V(1),he(2,"span",1),V(3,1),ke(),V(4,2),mt(5,"span",2)(6,"span",3)),t&2&&E("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function mu(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var kc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Wt,ie]})}return n})();var uu=(n,i)=>i.id;function hu(n,i){n&1&&(l(0,"mat-icon"),p(1,"hourglass_bottom"),c())}function fu(n,i){n&1&&(l(0,"mat-icon"),p(1,"find_in_page"),c())}function gu(n,i){n&1&&(l(0,"div",8),p(1," Cargando bookmarks... "),c())}function vu(n,i){if(n&1&&(l(0,"div",9),p(1),l(2,"details",12)(3,"summary"),p(4,"Ver Diagn\xF3stico"),c(),l(5,"div",13)(6,"p")(7,"strong"),p(8,"URL API:"),c(),p(9),c(),l(10,"p")(11,"strong"),p(12,"Token configurado:"),c(),p(13),c(),l(14,"p")(15,"strong"),p(16,"Header esperado:"),c(),p(17," X-API-Token"),c(),w(18,"hr"),l(19,"p",14)(20,"strong"),p(21,"Posibles causas del error 401:"),c(),w(22,"br"),p(23),w(24,"br"),p(25," 2. El servidor espera un token diferente"),w(26,"br"),p(27," 3. El formato del header es incorrecto"),w(28,"br"),p(29," 4. Verifica con el administrador de la API el token correcto "),c()()()()),n&2){let e=v();m(),te(" ",e.error_msg," "),m(8),te(" ",e.apiUrl),m(4),te(" ",e.apiToken),m(10),te(' 1. El token "',e.apiToken,'" no es v\xE1lido')}}function bu(n,i){if(n&1&&(l(0,"span",29),p(1),c()),n&2){let e=i.$implicit;m(),T(e)}}function _u(n,i){if(n&1&&(l(0,"div",22),se(1,bu,2,1,"span",29,In),c()),n&2){let e=v().$implicit;m(),le(e.tags)}}function yu(n,i){if(n&1){let e=fe();l(0,"div",18)(1,"div",19)(2,"mat-icon"),p(3,"bookmark"),c(),l(4,"h4"),p(5),c()(),l(6,"p",20),p(7),c(),l(8,"a",21)(9,"mat-icon"),p(10,"link"),c(),p(11),c(),M(12,_u,3,0,"div",22),l(13,"div",23)(14,"small"),p(15),On(16,"date"),c(),l(17,"small"),p(18),On(19,"date"),c()(),l(20,"div",24)(21,"small"),p(22),c()(),l(23,"div",25)(24,"button",26),S("click",function(){let o=j(e).$implicit,r=v(2);return U(r.openCrudUpdate(o))}),l(25,"mat-icon"),p(26,"edit"),c(),p(27," Editar "),c(),l(28,"button",27),S("click",function(){let o=j(e).$implicit,r=v(2);return U(r.openCrudDelete(o))}),l(29,"mat-icon"),p(30,"remove_circle"),c(),p(31," Desactivar "),c(),l(32,"button",28),S("click",function(){let o=j(e).$implicit,r=v(2);return U(r.openCrudFavorite(o))}),l(33,"mat-icon"),p(34,"favorite"),c(),p(35," Favorito "),c()()()}if(n&2){let e=i.$implicit;m(5),T(e.title),m(2),T(e.description),m(),b("href",e.url,zt),m(3),te(" ",e.url," "),m(),I(e.tags.length>0?12:-1),m(3),te("Creado: ",Zr(16,8,e.createdAt,"short")),m(3),te("Actualizado: ",Zr(19,11,e.updatedAt,"short")),m(4),te("ID: ",e.id)}}function xu(n,i){if(n&1&&(l(0,"div",15)(1,"h3"),p(2,"Bookmarks Disponibles"),c(),l(3,"span",16),p(4),c()(),l(5,"div",17),se(6,yu,36,14,"div",18,uu),c()),n&2){let e=v();m(4),te("Total: ",e.totalCount),m(2),le(e.bookmarks())}}function Cu(n,i){n&1&&(l(0,"div",10)(1,"p"),p(2,'No hay bookmarks. Presiona "Consultar" para cargar.'),c()())}var Bi=class n{constructor(i,e){this.staticsApiSvc=i;this.sessionAppSvc=e}staticsApiSvc;sessionAppSvc;api_controller="bookmarks";bookmarks=x([]);totalCount=0;loadingApi=x(!1);error=x(!1);crudModalOpen=x(!1);crudMode=x("create");selectedBookmark=x(null);apiUrl=Ee.STATICS_API_URL;apiToken=Ee.STATICS_API_TOKEN;error_msg=null;ngOnInit(){this.cargarSesion()}cargarSesion(){return this.sessionAppSvc.cargarSesion().then(()=>{})}openCrudCreate(){this.crudMode.set("create"),this.selectedBookmark.set(null),this.crudModalOpen.set(!0)}openCrudUpdate(i){this.crudMode.set("update"),this.selectedBookmark.set(i),this.crudModalOpen.set(!0)}openCrudDelete(i){this.crudMode.set("delete"),this.selectedBookmark.set(i),this.crudModalOpen.set(!0)}openCrudFavorite(i){let e=Array.isArray(i.tags)?[...i.tags]:[],o=e.some(r=>typeof r=="string"&&r.toLowerCase()==="favorito")?i:ee(g({},i),{tags:[...e,"favorito"]});this.crudMode.set("favorite"),this.selectedBookmark.set(o),this.crudModalOpen.set(!0)}closeCrudModal(){this.crudModalOpen.set(!1),this.selectedBookmark.set(null)}onCrudCompleted(){this.loadBookmarks()}loadBookmarks(){this.loadingApi.set(!0),this.error.set(!1),this.error_msg=null,this.bookmarks.set([]),this.staticsApiSvc.get(this.api_controller).subscribe({next:i=>{i.success?(this.bookmarks.set(i.data),this.totalCount=i.count,this.loadingApi.set(!1),this.error.set(!1)):(this.error_msg="La respuesta no fue exitosa",this.loadingApi.set(!1),this.error.set(!0))},error:i=>{i.status===401?this.error_msg=`Error 401: ${i.error?.message||"Token de autenticaci\xF3n inv\xE1lido"}`:i.status===404?this.error_msg="Error 404: Endpoint no encontrado":i.status===0?this.error_msg="Error de red: No se pudo conectar con el servidor":this.error_msg=`Error ${i.status}: ${i.error?.message||i.message||"Error desconocido"}`,this.loadingApi.set(!1),this.error.set(!0)}})}clearBookmarks(){this.bookmarks.set([]),this.totalCount=0,this.loadingApi.set(!1),this.error.set(!1),this.error_msg=null}static \u0275fac=function(e){return new(e||n)(q(Gt),q(J))};static \u0275cmp=y({type:n,selectors:[["app-statics-example"]],decls:25,vars:11,consts:[[1,"statics-container"],[1,"statics-container-icon"],[1,"query-section"],[1,"query-left"],["mat-raised-button","","aria-label","Consultar bookmarks",1,"btn-primary",3,"click","disabled"],[1,"query-right"],["mat-raised-button","","aria-label","Nuevo bookmark",1,"btn-secondary",3,"click"],["mat-raised-button","","aria-label","Limpiar bookmarks",1,"btn-primary",3,"click","disabled"],[1,"loading"],[1,"error"],[1,"empty-state"],[3,"closed","completed","open","mode","bookmark"],[1,"error-diag"],[1,"error-diag-content"],[2,"font-size","12px"],[1,"info-header"],[1,"count-badge"],[1,"form-card-grid"],[1,"form-card"],[1,"form-card-header"],[1,"description"],["target","_blank","rel","noopener",1,"form-card-url",3,"href"],[1,"tags"],[1,"metadata"],[1,"form-card-id"],[1,"form-card-actions"],["mat-raised-button","","id","btnBookmark_edit","aria-label","Editar bookmark",1,"btn-secondary",3,"click"],["mat-raised-button","","aria-label","Desactivar bookmark",1,"btn-default",3,"click"],["mat-raised-button","","aria-label","Marcar como favorito",1,"btn-default",3,"click"],[1,"tag"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"h2")(2,"mat-icon",1),p(3,"bookmarks"),c(),p(4," Statics API - Bookmarks"),c(),l(5,"div",2)(6,"div",3)(7,"button",4),S("click",function(){return t.loadBookmarks()}),M(8,hu,2,0,"mat-icon")(9,fu,2,0,"mat-icon"),p(10),c()(),l(11,"div",5)(12,"button",6),S("click",function(){return t.openCrudCreate()}),l(13,"mat-icon"),p(14,"bookmark_add"),c(),p(15," Nuevo bookmark "),c(),l(16,"button",7),S("click",function(){return t.clearBookmarks()}),l(17,"mat-icon"),p(18,"cleaning_services"),c(),p(19," Limpiar bookmarks "),c()()(),M(20,gu,2,0,"div",8),M(21,vu,30,4,"div",9),M(22,xu,8,1),M(23,Cu,3,0,"div",10),c(),l(24,"app-statics-bookmarks-crud",11),S("closed",function(){return t.closeCrudModal()})("completed",function(){return t.onCrudCompleted()}),c()),e&2&&(m(7),b("disabled",t.loadingApi()),m(),I(t.loadingApi()?8:9),m(2),te(" ",t.loadingApi()?" Consultando...":" Consultar Bookmarks"," "),m(6),b("disabled",t.loadingApi()||t.bookmarks().length===0),m(4),I(t.loadingApi()?20:-1),m(),I(t.error()?21:-1),m(),I(!t.loadingApi()&&t.bookmarks().length>0?22:-1),m(),I(!t.loadingApi()&&!t.error()&&t.bookmarks().length===0?23:-1),m(),b("open",t.crudModalOpen())("mode",t.crudMode())("bookmark",t.selectedBookmark()))},dependencies:[$o,Tn,ut,kc,Sc,Zs],styles:[".statics-container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto;font-family:inherit}.statics-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 20px;color:var(--app-text-strong);font-size:28px}.statics-container-icon[_ngcontent-%COMP%]{color:var(--app-brand-danger);vertical-align:middle;margin-right:6px}.query-section[_ngcontent-%COMP%]{margin:20px 0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}.query-left[_ngcontent-%COMP%], .query-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.query-right[_ngcontent-%COMP%]{margin-left:auto;justify-content:flex-end}.btn-primary[_ngcontent-%COMP%]{padding:12px 24px;border:none;border-radius:6px;cursor:pointer;background-color:var(--app-brand-primary);color:var(--app-button-text);font-size:16px;font-weight:500;transition:all .3s ease;box-shadow:0 2px 4px #0000001a}.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-brand-primary-dark);box-shadow:0 4px 8px #00000026;transform:translateY(-1px)}.btn-primary[_ngcontent-%COMP%]:disabled{background-color:var(--app-border-soft);cursor:not-allowed;transform:none}.btn-secondary[_ngcontent-%COMP%]{padding:12px 24px;border:none;border-radius:6px;cursor:pointer;background-color:var(--app-text-soft);color:var(--app-button-text);font-size:16px;font-weight:500;transition:all .3s ease;box-shadow:0 2px 4px #0000001a}.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-text-muted-light);box-shadow:0 4px 8px #00000026;transform:translateY(-1px)}.btn-secondary[_ngcontent-%COMP%]:disabled{background-color:var(--app-border-soft);cursor:not-allowed;transform:none;opacity:.6}.btn-default[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-text-soft);border:1px solid var(--app-border-soft);padding:12px 24px;border-radius:6px;cursor:pointer;font-size:16px;font-weight:500;transition:all .3s ease}.btn-default[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--app-chip-background-strong);border-color:var(--app-border-default)}.loading[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]{padding:20px;margin:20px 0;border-radius:8px;text-align:center}.loading[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-brand-primary);font-size:16px}.error[_ngcontent-%COMP%]{background-color:var(--app-danger-background);color:var(--app-status-error);font-size:16px;font-weight:500}.empty-state[_ngcontent-%COMP%]{background-color:var(--app-background-soft);color:var(--app-text-soft);font-size:16px}.info-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:20px 0;padding-bottom:10px;border-bottom:2px solid var(--app-brand-primary)}.info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:var(--app-text-strong);font-size:22px}.count-badge[_ngcontent-%COMP%]{background:var(--app-brand-primary);color:var(--app-text-on-accent);padding:6px 16px;border-radius:20px;font-size:14px;font-weight:600}.form-card-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;margin:20px 0}.form-card[_ngcontent-%COMP%]{border:1px solid var(--app-border-soft);border-radius:12px;padding:20px;background:var(--app-background-surface);box-shadow:0 2px 8px #00000014;transition:all .3s ease}.form-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px #0000001f;transform:translateY(-2px)}.form-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.form-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--app-brand-primary);font-size:28px;width:28px;height:28px}.form-card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;color:var(--app-text-primary);font-size:20px;font-weight:600}.description[_ngcontent-%COMP%]{color:var(--app-text-soft);margin:10px 0;line-height:1.5;font-size:14px}.form-card-url[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--app-link-text);text-decoration:none;margin:10px 0;padding:8px 12px;background:var(--app-background-soft);border-radius:6px;font-size:13px;word-break:break-all;transition:background .2s ease}.form-card-url[_ngcontent-%COMP%]:hover{background:var(--app-chip-background-strong);text-decoration:underline}.form-card-url[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;flex-shrink:0}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin:15px 0}.tag[_ngcontent-%COMP%]{background:var(--app-chip-background);color:var(--app-text-primary);padding:4px 12px;border-radius:16px;font-size:12px;font-weight:500;border:1px solid var(--app-border-soft)}.metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px;margin-top:15px;padding-top:15px;border-top:1px solid var(--app-border-soft)}.metadata[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:12px}.form-card-id[_ngcontent-%COMP%]{margin-top:10px}.form-card-id[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:11px;font-family:Courier New,monospace}.form-card-actions[_ngcontent-%COMP%]{margin-top:12px;display:flex;flex-wrap:wrap;gap:8px}.error-diag[_ngcontent-%COMP%]{margin-top:15px;text-align:left}.error-diag[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:700}.error-diag-content[_ngcontent-%COMP%]{margin-top:10px;background:var(--app-background-soft);padding:15px;border-radius:4px;color:var(--app-text-primary)}.error-diag-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0}.error-diag-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:none;border-top:1px solid var(--app-border-soft);margin:10px 0}"]})};var Ic=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[ie]})}return n})();var nr=class n{constructor(i,e){this.sessionAppSvc=i;this.router=e}sessionAppSvc;router;ngOnInit(){if(this.sessionAppSvc.hasSession()){this.router.navigate(["/secure"]);return}this.router.navigate(["/home"])}static \u0275fac=function(e){return new(e||n)(q(J),q(ue))};static \u0275cmp=y({type:n,selectors:[["app-session-entry"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};var ji=class n{constructor(i,e){this.sessionAppSvc=i;this.router=e}sessionAppSvc;router;canActivate(){return this.sessionAppSvc.hasSession()?this.router.parseUrl("/secure/home"):!0}static \u0275fac=function(e){return new(e||n)(we(J),we(ue))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ui=class n{constructor(i){this.sessionAppSvc=i}sessionAppSvc;canMatch(i,e){return this.sessionAppSvc.hasSession()}static \u0275fac=function(e){return new(e||n)(we(J))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var _n=class n{constructor(i,e){this.router=i;this.sessionAppSvc=e}router;sessionAppSvc;canActivate(){return this.validateSession()}canActivateChild(){return this.validateSession()}validateSession(){return this.sessionAppSvc.hasSession()?!0:(this.router.navigate(["/login"]),!1)}static \u0275fac=function(e){return new(e||n)(we(ue),we(J))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Vi=class n{constructor(i){this.sessionAppSvc=i}sessionAppSvc;canMatch(i,e){return!this.sessionAppSvc.hasSession()}static \u0275fac=function(e){return new(e||n)(we(J))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hi=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ha=class extends Hi{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Yt=class extends Hi{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ga=class extends Hi{element;constructor(i){super(),this.element=i instanceof z?i.nativeElement:i}},$a=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ha)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Yt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ga)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Gi=class extends $a{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(Is,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||de.NULL,r=o.get(qe,t.injector);e=Gs(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Ec=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({})}return n})();var wu=20,$i=(()=>{class n{_ngZone=d(H);_platform=d(oe);_renderer=d(Je).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new O;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=wu){return this._platform.isBrowser?new Xe(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(zr(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):A()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ae(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=rt(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Z0=(()=>{class n{elementRef=d(z);scrollDispatcher=d($i);ngZone=d(H);dir=d(pt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new O;_renderer=d(Se);_cleanupScroll;_elementScrolled=new O;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&Qn()!=_t.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Qn()==_t.INVERTED?e.left=e.right:Qn()==_t.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Qo()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:t:e=="end"&&(e=a?t:o),a&&Qn()==_t.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Qn()==_t.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Su=20,Zt=(()=>{class n{_platform=d(oe);_listeners;_viewportSize=null;_change=new O;_document=d(me);constructor(){let e=d(H),t=d(Je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=Su){return e>0?this._change.pipe(zr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ei=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({})}return n})(),qa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[ie,ei,ie,ei]})}return n})();var Oc=Qo();function Lc(n){return new ir(n.get(Zt),n.get(me))}var ir=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ye(-this._previousScrollPosition.left),i.style.top=ye(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Oc&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Oc&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Nc(n,i){return new or(n.get($i),n.get(H),n.get(Zt),i)}var or=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var qi=class{enable(){}disable(){}attach(){}};function Wa(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||o||r||a})}function Pc(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||o||r||a})}function ti(n,i){return new rr(n.get($i),n.get(Zt),n.get(H),i)}var rr=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Wa(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},zc=(()=>{class n{_injector=d(de);constructor(){}noop=()=>new qi;close=e=>Nc(this._injector,e);block=()=>Lc(this._injector);reposition=e=>ti(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kt=class{positionStrategy;scrollStrategy=new qi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var ar=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Bc=(()=>{class n{_attachedOverlays=[];_document=d(me);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jc=(()=>{class n extends Bc{_ngZone=d(H);_renderer=d(Je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Uc=(()=>{class n extends Bc{_platform=d(oe);_ngZone=d(H);_renderer=d(Je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ze(e)};_clickListener=e=>{let t=ze(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],u=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,u))){if(Rc(s.overlayElement,t)||Rc(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>u.next(e)):u.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Rc(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Vc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return n})(),Hc=(()=>{class n{_platform=d(oe);_containerElement;_document=d(me);_styleLoader=d(Le);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Na()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Na()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Vc)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ya=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Za(n){return n&&n.nodeType===1}var sr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=Oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(i,e,t,o,r,a,s,u,h,f=!1,_,R){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=u,this._outsideClickDispatcher=h,this._animationsDisabled=f,this._injector=_,this._renderer=R,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ct(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=g(g({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ee(g({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ye(this._config.width),i.height=ye(this._config.height),i.minWidth=ye(this._config.minWidth),i.minHeight=ye(this._config.minHeight),i.maxWidth=ye(this._config.maxWidth),i.maxHeight=ye(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Za(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ya(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=Tt(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=ct(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Tc="cdk-overlay-connected-position-bounding-box",ku=/([A-Za-z%]+)$/;function ni(n,i){return new lr(i,n.get(Zt),n.get(me),n.get(oe),n.get(Hc))}var lr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=Oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Tc),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let u=this._getOriginPoint(i,o,s),h=this._getOverlayPoint(u,e,s),f=this._getOverlayFit(h,e,t,s);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,u);return}if(this._canFitWithFlexibleDimensions(f,h,t)){r.push({position:s,origin:u,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(u,s)});continue}(!a||a.overlayFit.visibleArea<f.visibleArea)&&(a={overlayFit:f,overlayPoint:h,originPoint:u,position:s,overlayRect:e})}if(r.length){let s=null,u=-1;for(let h of r){let f=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);f>u&&(u=f,s=h)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&yn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Tc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof z?this._origin.nativeElement:Za(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;o=t.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=Dc(e),{x:a,y:s}=i,u=this._getOffset(o,"x"),h=this._getOffset(o,"y");u&&(a+=u),h&&(s+=h);let f=0-a,_=a+r.width-t.width,R=0-s,$=s+r.height-t.height,W=this._subtractOverflows(r.width,f,_),Y=this._subtractOverflows(r.height,R,$),xe=W*Y;return{visibleArea:xe,isCompletelyWithinViewport:r.width*r.height===xe,fitsInViewportVertically:Y===r.height,fitsInViewportHorizontally:W==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Ac(this._overlayRef.getConfig().minHeight),s=Ac(this._overlayRef.getConfig().minWidth),u=i.fitsInViewportVertically||a!=null&&a<=o,h=i.fitsInViewportHorizontally||s!=null&&s<=r;return u&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=Dc(e),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),s=Math.max(i.y+o.height-r.height,0),u=Math.max(r.top-t.top-i.y,0),h=Math.max(r.left-t.left-i.x,0),f=0,_=0;return o.width<=r.width?f=h||-a:f=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?_=u||-s:_=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:f,y:_},{x:i.x+f,y:i.y+_}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Mu(this._lastScrollVisibility,t)){let o=new ar(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=i.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-s+this._getViewportMarginTop();else{let $=Math.min(t.bottom-i.y+t.top,i.y),W=this._lastBoundingBoxSize.height;r=$*2,a=i.y-$,r>W&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-W/2)}let u=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,h=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,f,_,R;if(h)R=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(u)_=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let $=Math.min(t.right-i.x+t.left,i.x),W=this._lastBoundingBoxSize.width;f=$*2,_=i.x-$,f>W&&!this._isInitialRender&&!this._growAfterOpen&&(_=i.x-W/2)}return{top:a,left:_,bottom:s,right:R,width:f,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ye(t.width),o.height=ye(t.height),o.top=ye(t.top)||"auto",o.bottom=ye(t.bottom)||"auto",o.left=ye(t.left)||"auto",o.right=ye(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ye(r)),a&&(o.maxWidth=ye(a))}this._lastBoundingBoxSize=t,yn(this._boundingBox.style,o)}_resetBoundingBoxStyles(){yn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){yn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let f=this._viewportRuler.getViewportScrollPosition();yn(t,this._getExactOverlayY(e,i,f)),yn(t,this._getExactOverlayX(e,i,f))}else t.position="static";let s="",u=this._getOffset(e,"x"),h=this._getOffset(e,"y");u&&(s+=`translateX(${u}px) `),h&&(s+=`translateY(${h}px)`),t.transform=s.trim(),a.maxHeight&&(o?t.maxHeight=ye(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=ye(a.maxWidth):r&&(t.maxWidth="")),yn(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ye(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=ye(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Pc(i,t),isOriginOutsideView:Wa(i,t),isOverlayClipped:Pc(e,t),isOverlayOutsideView:Wa(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Tt(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof z)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function yn(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Ac(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(ku);return!e||e==="px"?parseFloat(i):null}return n||null}function Dc(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Mu(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Fc="cdk-global-overlay-wrapper";function Gc(n){return new cr}var cr=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Fc),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=t,u=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),h=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),f=this._xPosition,_=this._xOffset,R=this._overlayRef.getConfig().direction==="rtl",$="",W="",Y="";u?Y="flex-start":f==="center"?(Y="center",R?W=_:$=_):R?f==="left"||f==="end"?(Y="flex-end",$=_):(f==="right"||f==="start")&&(Y="flex-start",W=_):f==="left"||f==="start"?(Y="flex-start",$=_):(f==="right"||f==="end")&&(Y="flex-end",W=_),i.position=this._cssPosition,i.marginLeft=u?"0":$,i.marginTop=h?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=u?"0":W,e.justifyContent=Y,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Fc),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},$c=(()=>{class n{_injector=d(de);constructor(){}global(){return Gc()}flexibleConnectedTo(e){return ni(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qc=new P("OVERLAY_DEFAULT_CONFIG");function ii(n,i){n.get(Le).load(Vc);let e=n.get(Hc),t=n.get(me),o=n.get(Me),r=n.get(Mn),a=n.get(pt),s=n.get(Se,null,{optional:!0})||n.get(Je).createRenderer(null,null),u=new Kt(i),h=n.get(qc,null,{optional:!0})?.usePopover??!0;u.direction=u.direction||a.value,"showPopover"in t.body?u.usePopover=i?.usePopover??h:u.usePopover=!1;let f=t.createElement("div"),_=t.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),_.appendChild(f),u.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let R=u.usePopover?u.positionStrategy?.getPopoverInsertionPoint?.():null;return Za(R)?R.after(_):R?.type==="parent"?R.element.appendChild(_):e.getContainerElement().appendChild(_),new sr(new Gi(f,r,n),_,f,u,n.get(H),n.get(jc),t,n.get(Pn),n.get(Uc),i?.disableAnimations??n.get(so,null,{optional:!0})==="NoopAnimations",n.get(qe),s)}var Wc=(()=>{class n{scrollStrategies=d(zc);_positionBuilder=d($c);_injector=d(de);constructor(){}create(e){return ii(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({providers:[Wc],imports:[ie,Ec,qa,qa]})}return n})();var Iu=["mat-menu-item",""],Eu=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ou=["mat-icon, [matMenuItemIcon]","*"];function Pu(n,i){n&1&&(Re(),l(0,"svg",2),w(1,"polygon",3),c())}var Ru=["*"];function Tu(n,i){if(n&1){let e=fe();he(0,"div",0),Ts("click",function(){j(e);let o=v();return U(o.closed.emit("click"))})("animationstart",function(o){j(e);let r=v();return U(r._onAnimationStart(o.animationName))})("animationend",function(o){j(e);let r=v();return U(r._onAnimationDone(o.animationName))})("animationcancel",function(o){j(e);let r=v();return U(r._onAnimationDone(o.animationName))}),he(1,"div",1),V(2),ke()()}if(n&2){let e=v();Ye(e._classList),E("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),We("id",e.panelId),D("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Xa=new P("MAT_MENU_PANEL"),xn=(()=>{class n{_elementRef=d(z);_document=d(me);_focusMonitor=d($t);_parentMenu=d(Xa,{optional:!0});_changeDetectorRef=d(Ie);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new O;_focused=new O;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(Le).load(Dt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<t.length;o++)t[o].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,o){t&1&&S("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),t&2&&(D("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),E("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B]},exportAs:["matMenuItem"],attrs:Iu,ngContentSelectors:Ou,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,o){t&1&&(ge(Eu),V(0),l(1,"span",0),V(2,1),c(),w(3,"div",1),M(4,Pu,2,0,":svg:svg",2)),t&2&&(m(3),b("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),m(),I(o._triggersSubmenu?4:-1))},dependencies:[Jo],encapsulation:2,changeDetection:0})}return n})();var Au=new P("MatMenuContent");var Du=new P("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ka="_mat-menu-enter",dr="_mat-menu-exit",Xt=(()=>{class n{_elementRef=d(z);_changeDetectorRef=d(Ie);_injector=d(de);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ae();_allItems;_directDescendantItems=new en;_classList={};_panelAnimationState="void";_animationDone=new O;_isAnimating=x(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,o=g({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new X;close=this.closed;panelId=d(Me).getId("mat-menu-panel-");constructor(){let e=d(Du);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(De(this._directDescendantItems),Ce(e=>$e(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let o=e.toArray(),r=Math.max(0,Math.min(o.length-1,t.activeItemIndex||0));o[r]&&!o[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(De(this._directDescendantItems),Ce(t=>$e(...t.map(o=>o._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,o=this._keyManager;switch(t){case 27:Ke(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ct(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(e).setFirstItemActive(),!o.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ee(g({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===dr;(t||e===Ka)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Ka||e===dr)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(dr),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Ka:dr)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(De(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-menu"]],contentQueries:function(t,o,r){if(t&1&&et(r,Au,5)(r,xn,5)(r,xn,4),t&2){let a;F(a=L())&&(o.lazyContent=a.first),F(a=L())&&(o._allItems=a),F(a=L())&&(o.items=a)}},viewQuery:function(t,o){if(t&1&&Ue(tn,5),t&2){let r;F(r=L())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(t,o){t&2&&D("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",B],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:B(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Fe([{provide:Xa,useExisting:n}])],ngContentSelectors:Ru,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,o){t&1&&(ge(),lo(0,Tu,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),Fu=new P("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(de);return()=>ti(n)}});var oi=new WeakMap,Lu=(()=>{class n{_canHaveBackdrop;_element=d(z);_viewContainerRef=d(Et);_menuItemInstance=d(xn,{optional:!0,self:!0});_dir=d(pt,{optional:!0});_focusMonitor=d($t);_ngZone=d(H);_injector=d(de);_scrollStrategy=d(Fu);_changeDetectorRef=d(Ie);_animationsDisabled=Ae();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Oe.EMPTY;_menuCloseSubscription=Oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=d(Xa,{optional:!0});this._parentMaterialMenu=t instanceof Xt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&oi.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let o=oi.get(t);oi.set(t,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(t),a=r.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Xt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ne(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,o=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof Xt&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(at(1)).subscribe(()=>{t.detach(),oi.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(t.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&oi.delete(o),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ii(this._injector,t),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof Xt&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(e){return new Kt({positionStrategy:ni(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,a)})})}_setPosition(e,t){let[o,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,h]=[a,s],[f,_]=[o,r],R=0;if(this._triggersSubmenu()){if(_=o=e.xPosition==="before"?"start":"end",r=f=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let $=this._parentMaterialMenu.items.first;this._parentInnerPadding=$?$._getHostElement().offsetTop:0}R=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=a==="top"?"bottom":"top",h=s==="top"?"bottom":"top");t.withPositions([{originX:o,originY:u,overlayX:f,overlayY:a,offsetY:R},{originX:r,originY:u,overlayX:_,overlayY:a,offsetY:R},{originX:o,originY:h,overlayX:f,overlayY:s,offsetY:-R},{originX:r,originY:h,overlayX:_,overlayY:s,offsetY:-R}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:A(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ae(a=>this._menuOpen&&a!==this._menuItemInstance)):A();return $e(e,o,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Yt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return oi.get(e)===this}_triggerIsAriaDisabled(){return B(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Hr()};static \u0275dir=G({type:n})}return n})(),pr=(()=>{class n extends Lu{_cleanupTouchstart;_hoverSubscription=Oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new X;onMenuOpen=this.menuOpened;menuClosed=new X;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d(Se);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{fn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){hn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,o){t&1&&S("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&D("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu==null?null:o.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[dt]})}return n})();var ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Wt,Wi,ie,ei]})}return n})();var Zc=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=At(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=At(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(D("aria-orientation",o.vertical?"vertical":"horizontal"),E("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})();var Nu=(n,i)=>i.url;function zu(n,i){if(n&1&&(l(0,"mat-icon"),p(1),c()),n&2){let e=v(2).$implicit;m(),T(e.icon)}}function Bu(n,i){if(n&1&&(l(0,"span",4),M(1,zu,2,1,"mat-icon"),p(2),c()),n&2){let e=v().$implicit;m(),I(e.icon?1:-1),m(),te(" ",e.label," ")}}function ju(n,i){if(n&1&&(l(0,"mat-icon"),p(1),c()),n&2){let e=v(2).$implicit;m(),T(e.icon)}}function Uu(n,i){if(n&1&&(l(0,"a",5),M(1,ju,2,1,"mat-icon"),p(2),c()),n&2){let e=v().$implicit;b("routerLink",e.url),m(),I(e.icon?1:-1),m(),te(" ",e.label," ")}}function Vu(n,i){if(n&1&&(l(0,"li",3),M(1,Bu,3,2,"span",4)(2,Uu,3,3,"a",5),c()),n&2){let e=i.$implicit,t=v();E("is-active",e.active)("is-active--guest",e.active&&t.status==="guest")("is-active--session",e.active&&t.status==="session"),m(),I(e.active?1:2)}}var hr=class n{constructor(i,e){this.router=i;this.activatedRoute=e}router;activatedRoute;homeLabel="Home";homeUrl="/home";showHome=!0;status="";breadcrumbs=[];destroy$=new O;ngOnInit(){this.rebuildBreadcrumbs(),this.router.events.pipe(ae(i=>i instanceof ot),ne(this.destroy$)).subscribe(()=>this.rebuildBreadcrumbs())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}rebuildBreadcrumbs(){let i=this.homeLabel.trim().toLocaleLowerCase(),e=[],t=this.activatedRoute.root,o="";for(;t;){let h=t.children.find(xe=>xe.outlet==="primary");if(!h)break;let f=h.snapshot.url.map(xe=>xe.path).join("/");f&&(o+=`/${f}`);let _=h.snapshot.data.breadcrumb??h.snapshot.data.title,R=typeof _=="string"&&_.trim().length>0?_.trim():void 0,$=h.snapshot.data.icon,W=typeof $=="string"&&$.trim().length>0?$.trim():void 0,Y=R?.toLocaleLowerCase()===i;R&&o&&!Y&&e.push({label:R,url:o,icon:W}),t=h}let r=this.showHome&&this.homeUrl.trim()!=="",a={label:this.homeLabel,url:this.normalizeUrl(this.homeUrl),icon:"home"},s=r?[a,...e]:e,u=[];for(let h of s){let f=ee(g({},h),{url:this.normalizeUrl(h.url)});u.some(R=>R.url===f.url)||u.push(f)}this.breadcrumbs=u.map((h,f)=>ee(g({},h),{icon:h.icon,active:f===u.length-1})),this.breadcrumbs.length===0&&r&&(this.breadcrumbs=[{label:this.homeLabel,url:this.normalizeUrl(this.homeUrl),active:!0,icon:"home"}])}normalizeUrl(i){if(!i)return"/";let e=i.startsWith("/")?i:`/${i}`;return e.length>1?e.replace(/\/+$/,""):e}static \u0275fac=function(e){return new(e||n)(q(ue),q(bt))};static \u0275cmp=y({type:n,selectors:[["app-route-breadcrumbs"]],inputs:{homeLabel:"homeLabel",homeUrl:"homeUrl",showHome:"showHome",status:"status"},decls:4,vars:0,consts:[["aria-label","Migas de pan",1,"breadcrumbs"],[1,"breadcrumbs-list"],[1,"breadcrumbs-item",3,"is-active","is-active--guest","is-active--session"],[1,"breadcrumbs-item"],[1,"breadcrumbs-link"],[1,"breadcrumbs-link",3,"routerLink"]],template:function(e,t){e&1&&(l(0,"nav",0)(1,"ol",1),se(2,Vu,3,7,"li",2,Nu),c()()),e&2&&(m(2),le(t.breadcrumbs))},dependencies:[Bt,Ze,ut],styles:['[_nghost-%COMP%]{display:block}.breadcrumbs[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;max-width:calc(100vw - 3rem);justify-content:flex-start;align-items:center;gap:.5rem;pointer-events:none}.breadcrumbs-list[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;list-style:none;margin:0;padding:0}.breadcrumbs-item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;pointer-events:none}.breadcrumbs-item[_ngcontent-%COMP%] + .breadcrumbs-item[_ngcontent-%COMP%]:before{content:"\\2022";margin-inline:.45rem;color:var(--app-chip-text);opacity:.55}.breadcrumbs-link[_ngcontent-%COMP%]{height:var(--app-pills-height);padding-inline:var(--app-pills-padding-inline);border-radius:var(--app-pills-radius);font-size:var(--app-pills-font-size);display:inline-flex;align-items:center;gap:.35rem;background:var(--app-chip-background);color:var(--app-chip-text);border:1px solid var(--app-chip-border);box-sizing:border-box;font-weight:600;pointer-events:auto;opacity:.7;text-decoration:none;transition:opacity .2s ease,background-color .2s ease,color .2s ease,border-color .2s ease}.breadcrumbs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);line-height:1;height:var(--app-icon-size);width:var(--app-icon-size);vertical-align:middle}.breadcrumbs-link[_ngcontent-%COMP%]:hover, .breadcrumbs-link[_ngcontent-%COMP%]:focus-within{opacity:1;background:var(--app-chip-background-strong)}.breadcrumbs-item.is-active[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{font-weight:700;opacity:1}.breadcrumbs-item.is-active--guest[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{border-color:var(--app-status-error)}.breadcrumbs-item.is-active--session[_ngcontent-%COMP%]   .breadcrumbs-link[_ngcontent-%COMP%]{border-color:var(--app-status-success)}']})};var fr=["default","darkdev","daydev","retrodev","pasteldev"],Kc="droguier_cookies_template",gr=class n{sessionAppSvc=d(J);doc=d(me);platformId=d(lt);template=x(this.resolve());templates=fr;constructor(){this.apply(this.template())}setTemplate(i){fr.includes(i)&&(this.isBrowser()&&localStorage.setItem(Kc,i),this.template.set(i),this.apply(i))}resolve(){if(this.isBrowser()){let e=localStorage.getItem(Kc);if(e&&fr.includes(e))return e}let i=this.sessionAppSvc.sessionUser()?.template;return fr.includes(i)?i:"default"}apply(i){this.doc.documentElement.setAttribute("data-template",i)}isBrowser(){return gt(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hu=(n,i)=>i.key;function Gu(n,i){if(n&1){let e=fe();l(0,"button",4),S("click",function(){let o=j(e).$implicit,r=v();return U(r.setTemplate(o.key))}),l(1,"mat-icon"),p(2),c(),l(3,"span"),p(4),c()()}if(n&2){let e=i.$implicit,t=v();E("active",t.current()===e.key),m(2),T(t.current()===e.key?"check":""),m(2),T(e.label)}}var $u={default:"Default",darkdev:"Dark",daydev:"Day",retrodev:"Retro",pasteldev:"Pastel"},vr=class n{templateService=d(gr);current=this.templateService.template;templateOptions=this.templateService.templates.map(i=>({key:i,label:$u[i]}));setTemplate(i){this.templateService.setTemplate(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-template-switcher"]],decls:7,vars:1,consts:[["templateMenu","matMenu"],["type","button","aria-label","Cambiar template","title","Cambiar template",1,"template-switcher-trigger",3,"matMenuTriggerFor"],["xPosition","before",1,"template-switcher-menu"],["mat-menu-item","",3,"active"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1&&(l(0,"button",1)(1,"mat-icon"),p(2,"palette"),c()(),l(3,"mat-menu",2,0),se(5,Gu,5,4,"button",3,Hu),c()),e&2){let o=tt(4);b("matMenuTriggerFor",o),m(5),le(t.templateOptions)}},dependencies:[ur,Xt,xn,pr,Tn,ut],styles:[".template-switcher-trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:2.6rem;height:2.6rem;padding:0 var(--app-pills-padding-inline);border:0;border-radius:var(--app-pills-radius);appearance:none;-webkit-appearance:none;box-sizing:border-box;background:var(--app-chip-background);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:var(--app-text-primary);cursor:pointer;opacity:1;flex-shrink:0;pointer-events:auto;transition:opacity .2s ease,background-color .2s ease,color .2s ease}.template-switcher-trigger[_ngcontent-%COMP%]:hover, .template-switcher-trigger[_ngcontent-%COMP%]:focus-visible{opacity:1}.template-switcher-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);width:var(--app-icon-size);height:var(--app-icon-size);line-height:1}"]})};var qu=()=>["/"],Wu=()=>({exact:!0}),Yu=()=>["/public/eirl_services"],Zu=()=>["/public/resume"],Ku=()=>["/public/contact-us"],Xu=n=>[n],Qu=(n,i)=>i.label,Ju=(n,i)=>i.link;function eh(n,i){if(n&1&&(l(0,"a",16)(1,"mat-icon"),p(2),c(),l(3,"span"),p(4),c()()),n&2){let e=i.$implicit;b("routerLink",Fs(3,Xu,e.link)),m(2),T((e.icon==null?null:e.icon.name)??""),m(2),T(e.name)}}function th(n,i){n&1&&w(0,"mat-divider")}function nh(n,i){if(n&1&&(l(0,"span",15),p(1),c(),se(2,eh,5,5,"a",16,Ju),M(4,th,1,0,"mat-divider")),n&2){let e=i.$implicit,t=i.$index,o=i.$count;m(),T(e.label),m(),le(e.items),m(2),I(t!==o-1?4:-1)}}var ai=class n{mode="guest";router=d(ue);sessionAppSvc=d(J);staticsAppSvc=d(Qt);get isSession(){return this.mode==="session"}get homeUrl(){return this.mode==="session"?"/secure/home":"/home"}get modeLabel(){return this.mode==="session"?"Modo sesi\xF3n activa":"Modo sin sesi\xF3n"}get brandName(){return Ee.app_name}get brandInitial(){return Ee.app_name.replace(/[^A-Za-z0-9]/g,"").charAt(0).toUpperCase()||"D"}get menuItems(){let i=this.staticsAppSvc.getMenuNavigationApp(),e=[],t=i.filter(o=>o.visible&&!o.secure);if(t.length>0&&e.push({label:"P\xFAblico",items:t}),this.isSession){let o=i.filter(r=>r.visible&&r.secure);o.length>0&&e.push({label:"Seguro",items:o})}return e}async onAction(){if(this.mode==="session"){this.sessionAppSvc.clearSession(),await this.router.navigate(["/home"]);return}await this.goToLoginOrRevalidate()}async goToLoginOrRevalidate(){if(this.sessionAppSvc.hasSession()){await this.router.navigate(["/revalidar-sesion"]);return}await this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-topbar"]],inputs:{mode:"mode"},decls:44,vars:42,consts:[["appMenu","matMenu"],["xPosition","before",1,"topbar-menu"],["mat-menu-item","","type","button",3,"click"],[1,"topbar-left"],["type","button","aria-label","Abrir men\xFA de navegaci\xF3n",1,"topbar-menu-btn",3,"matMenuTriggerFor"],["routerLinkActive","topbar-brand--active","aria-label","Ir al inicio",1,"topbar-brand",3,"routerLink","routerLinkActiveOptions"],["aria-hidden","true",1,"topbar-brand-mark"],[1,"topbar-brand-name"],[3,"showHome","status"],[1,"topbar-right"],["routerLinkActive","is-active","aria-label","Ir a servicios",1,"topbar-button",3,"routerLink"],["routerLinkActive","is-active","aria-label","Ir a resumen",1,"topbar-button",3,"routerLink"],["routerLinkActive","is-active","aria-label","Ir a contacto",1,"topbar-button",3,"routerLink"],["aria-live","polite",1,"mode-pill"],["type","button",1,"topbar-action",3,"click"],[1,"topbar-menu-group"],["mat-menu-item","","routerLinkActive","is-active",3,"routerLink"]],template:function(e,t){if(e&1&&(l(0,"mat-menu",1,0),se(2,nh,5,2,null,null,Qu),w(4,"mat-divider"),l(5,"button",2),S("click",function(){return t.onAction()}),l(6,"mat-icon"),p(7),c(),l(8,"span"),p(9),c()()(),l(10,"div",3)(11,"button",4)(12,"mat-icon"),p(13,"menu"),c(),l(14,"span"),p(15,"Men\xFA"),c()(),l(16,"a",5)(17,"span",6),p(18),c(),l(19,"span",7),p(20),c()(),w(21,"app-route-breadcrumbs",8),c(),l(22,"div",9)(23,"a",10)(24,"mat-icon"),p(25,"storefront"),c(),l(26,"span"),p(27,"Servicios"),c()(),l(28,"a",11)(29,"mat-icon"),p(30,"description"),c(),l(31,"span"),p(32,"Resumen"),c()(),l(33,"a",12)(34,"mat-icon"),p(35,"mail"),c(),l(36,"span"),p(37,"Contacto"),c()(),l(38,"span",13),p(39),c(),w(40,"app-template-switcher"),l(41,"button",14),S("click",function(){return t.onAction()}),l(42,"mat-icon"),p(43),c()()()),e&2){let o=tt(1);m(2),le(t.menuItems),m(5),T(t.isSession?"logout":"login"),m(2),T(t.isSession?"Cerrar sesi\xF3n":"Iniciar sesi\xF3n"),m(),E("topbar-left--guest",!t.isSession)("topbar-left--session",t.isSession),m(),b("matMenuTriggerFor",o),m(5),b("routerLink",En(37,qu))("routerLinkActiveOptions",En(38,Wu)),m(2),T(t.brandInitial),m(2),T(t.brandName),m(),b("showHome",!1)("status",t.mode),m(),E("topbar-right--guest",!t.isSession)("topbar-right--session",t.isSession),m(),E("is-active--guest",!t.isSession)("is-active--session",t.isSession),b("routerLink",En(39,Yu)),m(5),E("is-active--guest",!t.isSession)("is-active--session",t.isSession),b("routerLink",En(40,Zu)),m(5),E("is-active--guest",!t.isSession)("is-active--session",t.isSession),b("routerLink",En(41,Ku)),m(6),T(t.modeLabel),m(2),E("topbar-action--logout",t.isSession),D("aria-label",t.isSession?"Cerrar sesi\xF3n":"Iniciar sesi\xF3n"),m(2),T(t.isSession?"logout":"login")}},dependencies:[Ze,ka,ut,ur,Xt,xn,pr,Zc,hr,vr],styles:["[_nghost-%COMP%]{display:contents}.topbar-left[_ngcontent-%COMP%]{z-index:2000;position:fixed;top:1rem;left:1.5rem;display:flex;align-items:center;gap:.5rem;box-sizing:border-box;padding:.35rem .5rem;border-radius:var(--app-pills-radius);background:transparent;pointer-events:none}.topbar-left--guest[_ngcontent-%COMP%]{border-radius:var(--app-pills-radius);box-shadow:0 0 0 2px var(--app-status-error)}.topbar-left--session[_ngcontent-%COMP%]{border-radius:var(--app-pills-radius);box-shadow:0 0 0 2px var(--app-status-success)}.topbar-brand[_ngcontent-%COMP%], .topbar-menu-btn[_ngcontent-%COMP%], .topbar-button[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%], .mode-pill[_ngcontent-%COMP%]{height:2.6rem;display:inline-flex;align-items:center;gap:.5rem;padding:.3rem .75rem .3rem .35rem;border:1px solid var(--app-border-inverse);border-radius:var(--app-pills-radius);appearance:none;-webkit-appearance:none;background:color-mix(in srgb,var(--app-background-header) 55%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:var(--app-text-primary);box-sizing:border-box;font-size:var(--app-pills-font-size);font-weight:600;pointer-events:auto;opacity:1;flex-shrink:0;box-shadow:0 4px 18px -6px var(--app-shadow-strong);transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,border-color .2s ease,transform .2s ease}.topbar-brand[_ngcontent-%COMP%]:hover, .topbar-brand[_ngcontent-%COMP%]:focus-visible, .topbar-menu-btn[_ngcontent-%COMP%]:hover, .topbar-menu-btn[_ngcontent-%COMP%]:focus-visible, .topbar-button[_ngcontent-%COMP%]:hover, .topbar-button[_ngcontent-%COMP%]:focus-visible, .topbar-action[_ngcontent-%COMP%]:hover, .topbar-action[_ngcontent-%COMP%]:focus-visible, .mode-pill[_ngcontent-%COMP%]:hover, .mode-pill[_ngcontent-%COMP%]:focus-visible{background:color-mix(in srgb,var(--app-background-header) 80%,transparent);border-color:var(--app-border-inverse-strong);box-shadow:0 8px 24px -8px var(--app-shadow-strong);transform:translateY(-1px)}.topbar-brand[_ngcontent-%COMP%]{text-decoration:none}.topbar-brand--active[_ngcontent-%COMP%]   .topbar-brand-mark[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-success)}.topbar-brand-mark[_ngcontent-%COMP%]{width:2rem;height:2rem;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700;color:var(--app-text-on-accent);background:var(--app-gradient-primary)}.topbar-brand-name[_ngcontent-%COMP%]{font-weight:600;font-size:var(--app-pills-font-size)}.topbar-menu-btn[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;justify-content:center;padding-inline:.55rem;background:color-mix(in srgb,var(--app-chip-background) 60%,transparent)}.topbar-right[_ngcontent-%COMP%]{z-index:2000;position:fixed;top:1rem;right:1.5rem;display:flex;justify-content:flex-end;align-items:center;box-sizing:border-box;gap:.5rem;padding:.35rem .5rem;border-radius:var(--app-pills-radius);background:transparent;pointer-events:none}.topbar-right--guest[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-error)}.topbar-right--session[_ngcontent-%COMP%]{box-shadow:0 0 0 2px var(--app-status-success)}.topbar-button[_ngcontent-%COMP%]{text-decoration:none}.topbar-button.is-active.is-active--guest[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-chip-background-strong) 80%,transparent);box-shadow:inset 0 0 0 2px var(--app-status-error),0 4px 18px -6px var(--app-shadow-strong)}.topbar-button.is-active.is-active--session[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-chip-background-strong) 80%,transparent);box-shadow:inset 0 0 0 2px var(--app-status-success),0 4px 18px -6px var(--app-shadow-strong)}.topbar-action[_ngcontent-%COMP%]{justify-content:center;padding-inline:.6rem;cursor:pointer}.mode-pill[_ngcontent-%COMP%]{justify-content:center;padding-inline:.55rem}.topbar-action--logout[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-danger-background) 82%,transparent);color:var(--app-danger-text);box-shadow:0 6px 16px var(--app-shadow)}.topbar-action--logout[_ngcontent-%COMP%]:hover, .topbar-action--logout[_ngcontent-%COMP%]:focus-visible{background:var(--app-danger-background-hover)}.topbar-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .topbar-menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);width:var(--app-icon-size);height:var(--app-icon-size);line-height:var(--app-icon-size)}@media(max-width:1024px){.topbar-right[_ngcontent-%COMP%]{top:.75rem;right:.75rem}.topbar-button[_ngcontent-%COMP%], .mode-pill[_ngcontent-%COMP%], .topbar-action[_ngcontent-%COMP%]{display:none}}@media(max-width:650px){.topbar-left[_ngcontent-%COMP%]{top:.75rem;left:.75rem;flex-wrap:wrap;row-gap:.35rem;max-width:calc(100vw - 1.5rem)}.topbar-brand-name[_ngcontent-%COMP%]{display:none}}"]})};var si=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-guest-layout"]],decls:4,vars:0,consts:[[1,"guest-layout"],["mode","guest"],[1,"guest-content"]],template:function(e,t){e&1&&(l(0,"section",0),w(1,"app-topbar",1),l(2,"div",2),w(3,"router-outlet"),c()())},dependencies:[pn,ai],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.guest-layout[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;box-sizing:border-box;background-color:transparent}.guest-content[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:5rem}@media(max-width:1024px){.guest-content[_ngcontent-%COMP%]{padding-top:6.5rem}}"]})};var li=class n{constructor(i){this.sessionService=i}sessionService;ngOnInit(){this.cargarSesion()}async cargarSesion(){await this.sessionService.cargarSesion()}static \u0275fac=function(e){return new(e||n)(q(J))};static \u0275cmp=y({type:n,selectors:[["app-session-layout"]],decls:4,vars:0,consts:[[1,"session-layout"],["mode","session"],[1,"session-content"]],template:function(e,t){e&1&&(l(0,"section",0),w(1,"app-topbar",1),l(2,"div",2),w(3,"router-outlet"),c()())},dependencies:[pn,ai],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.session-layout[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;box-sizing:border-box;background-color:transparent}.session-content[_ngcontent-%COMP%]{flex:1;min-height:0;display:flex;flex-direction:column;padding-top:5rem}@media(max-width:1024px){.session-content[_ngcontent-%COMP%]{padding-top:6.5rem}}"]})};var br=class n{staticsAppSvc=d(Qt);staticTexts=this.staticsAppSvc.getStaticTexts();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-not-found"]],decls:8,vars:2,consts:[[1,"not-found"],["src","./assets/icons/fav_icon.png","alt","Icono",2,"width","80px","margin-bottom","16px"],["href","/"]],template:function(e,t){e&1&&(he(0,"div",0),mt(1,"img",1),he(2,"h1"),p(3,"404"),ke(),he(4,"p"),p(5),ke(),he(6,"a",2),p(7),ke()()),e&2&&(m(5),T(t.staticTexts.notFound.pageNotFound),m(2),T(t.staticTexts.notFound.backToHome))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh;width:100vw;overflow:hidden}.not-found[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{font-size:6rem;color:#1976d2}p[_ngcontent-%COMP%]{font-size:1.5rem}a[_ngcontent-%COMP%]{color:#1976d2;text-decoration:underline}"]})};var _r=class n{isInitialized=x(!1);loadingPromise=null;currentCallback=null;get googleIdApi(){return window.google?.accounts?.id}waitForGoogleApi(){return this.loadingPromise?this.loadingPromise:(this.loadingPromise=new Promise((i,e)=>{if(typeof window>"u"){e(new Error("Window no esta disponible (SSR)"));return}if(this.googleIdApi){i();return}let t=0,o=100,r=()=>{if(t++,this.googleIdApi){i();return}if(t>=o){e(new Error("Timeout: Google API no se pudo cargar"));return}setTimeout(r,100)};r()}).catch(i=>{throw this.loadingPromise=null,i}),this.loadingPromise)}async initGoogleSignIn(i){if(typeof window>"u")return;let e=Ee.GOOGLE_CLIENT_ID?.trim();if(!e)throw new Error("GOOGLE_CLIENT_ID no esta configurado");let t=i??this.currentCallback??(()=>{});if(this.isInitialized()&&this.currentCallback===t)return;await this.waitForGoogleApi();let o=this.googleIdApi;if(!o)throw new Error("Google API no esta disponible");o.initialize({client_id:e,callback:t,auto_select:!1,cancel_on_tap_outside:!0}),this.currentCallback=t,this.isInitialized.set(!0)}async signIn(){if(typeof window>"u")throw new Error("Google Sign-In no esta disponible en SSR");return new Promise(async(i,e)=>{let t=!1,o=a=>{t||(t=!0,i(a))},r=(a,s)=>{t||(t=!0,e(s instanceof Error?s:new Error(a)))};try{await this.initGoogleSignIn(o);let a=this.googleIdApi;if(!a){r("Google API no esta disponible");return}a.prompt(s=>{t||(s.isNotDisplayed()||s.isSkippedMoment()||s.isDismissedMoment())&&r("Google Sign-In fue cancelado o no se pudo mostrar")})}catch(a){r("Error al mostrar dialogo de Google Sign-In",a)}})}decodeJwtResponse(i){try{let e=i.split(".");if(e.length<2||!e[1])return null;let t=e[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(t).split("").map(r=>`%${`00${r.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));return JSON.parse(o)}catch{return null}}validateGoogleSessionFromResponse(i){let e=this.hasCookie("g_state"),t=this.decodeJwtResponse(i?.credential??"");if(!t)return{valid:!1,hasGoogleStateCookie:e,reason:"No se pudo decodificar la credencial de Google."};if(!t.sub||!t.email)return{valid:!1,hasGoogleStateCookie:e,reason:"La credencial de Google no incluye los datos minimos esperados.",user:t};let o=Ee.GOOGLE_CLIENT_ID?.trim();if(o&&t.aud&&t.aud!==o)return{valid:!1,hasGoogleStateCookie:e,reason:"La audiencia (aud) del token no coincide con el Client ID configurado.",user:t};let r=Math.floor(Date.now()/1e3);return typeof t.nbf=="number"&&t.nbf>r?{valid:!1,hasGoogleStateCookie:e,reason:"La sesion de Google aun no es valida (nbf).",user:t}:typeof t.exp=="number"&&t.exp<=r?{valid:!1,hasGoogleStateCookie:e,reason:"La sesion de Google ha expirado.",user:t}:{valid:!0,hasGoogleStateCookie:e,user:t}}hasCookie(i){if(typeof document>"u")return!1;let e=document.cookie?document.cookie.split(";"):[],t=`${i}=`;return e.some(o=>o.trim().startsWith(t))}async renderButton(i,e,t){if(typeof window>"u")return;await this.initGoogleSignIn(t);let o=this.googleIdApi;if(!o)throw new Error("Google API no disponible para renderizar boton");let r={theme:"outline",size:"large",text:"signin_with",shape:"rectangular",logo_alignment:"left",width:"100%"};o.renderButton(i,g(g({},r),e))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var oh=["googleButtonContainer"];function rh(n,i){n&1&&(l(0,"span",21),p(1," Ingresa tu usuario. "),c())}function ah(n,i){n&1&&(Re(),l(0,"svg",22),w(1,"path",23),c())}function sh(n,i){n&1&&(Re(),l(0,"svg",24),w(1,"path",25),c())}function lh(n,i){n&1&&(l(0,"span",21),p(1," Ingresa tu clave. "),c())}function ch(n,i){if(n&1&&(l(0,"div",26),Re(),l(1,"svg",27),w(2,"circle",28)(3,"line",29)(4,"line",30),c(),Mt(),l(5,"span"),p(6),c()()),n&2){let e=v();m(6),T(e.errorMessage())}}var yr=class n{constructor(i,e,t,o){this.sesionApiSvc=i;this.sessionAppSvc=e;this.router=t;this.googleAuthService=o}sesionApiSvc;sessionAppSvc;router;googleAuthService;googleButtonContainer;isLoading=x(!1);errorMessage=x("");showPassword=x(!1);fb=d(nl);platformId=d(lt);isBrowser=gt(this.platformId);syncInitialLoader=xt(()=>{this.isBrowser&&this.setInitialLoaderVisible(this.isLoading())});form=this.fb.group({usuario:["",[jt.required,jt.email]],clave:["",jt.required]});ngOnInit(){}ngOnDestroy(){this.setInitialLoaderVisible(!1)}ngAfterViewInit(){gt(this.platformId)&&this.googleButtonContainer?.nativeElement&&this.initializeGoogleButton()}async initializeGoogleButton(){try{await this.googleAuthService.renderButton(this.googleButtonContainer.nativeElement,{theme:"outline",size:"large",text:"signin_with",width:"100%"},i=>this.handleGoogleSignIn(i)),console.log("Bot\xF3n de Google inicializado correctamente con callback")}catch(i){console.error("Error al inicializar bot\xF3n de Google:",i)}}handleGoogleSignIn(i){this.isLoading.set(!0),this.errorMessage.set("");try{let e=this.googleAuthService.validateGoogleSessionFromResponse(i);if(!e.valid||!e.user){this.errorMessage.set(e.reason??"No se pudo validar la sesi\xF3n de Google."),this.isLoading.set(!1);return}let t=e.user;if(!(t?.email??"")){this.errorMessage.set("No se pudo obtener el email del usuario de Google."),this.isLoading.set(!1);return}let r={iss:t?.iss,azp:t?.azp,aud:t?.aud,sub:t?.sub,email:t?.email,email_verified:t?.email_verified?1:0,nbf:t?.nbf,name:t?.name,picture:t?.picture,given_name:t?.given_name,family_name:t?.family_name,iat:t?.iat,exp:t?.exp,jti:t?.jti},a=this.encryptSesionData(JSON.stringify(r),Ee.STATICS_API_TOKEN);this.sesionApiSvc.validarGoogleAuth({credential:a}).subscribe({next:s=>{this.sessionAppSvc.setSession(s),this.router.navigate(["/secure"])},error:s=>{console.error("Error al validar sesi\xF3n con Google:",s),this.errorMessage.set(this.resolveHttpErrorMessage(s)),this.isLoading.set(!1)},complete:()=>{this.isLoading.set(!1)}})}catch(e){console.error("Error al procesar autenticaci\xF3n de Google:",e),this.errorMessage.set("Error al procesar la autenticaci\xF3n de Google."),this.isLoading.set(!1)}}validarSesion(){if(this.isLoading.set(!0),this.form.invalid){this.form.markAllAsTouched(),this.isLoading.set(!1);return}this.submit("validar")}registrarSesion(){if(this.isLoading.set(!0),this.form.invalid){this.form.markAllAsTouched(),this.isLoading.set(!1);return}this.submit("registrar")}togglePasswordVisibility(){this.showPassword.update(i=>!i)}preventPasswordPaste(i){i.preventDefault()}submit(i){this.isLoading.set(!0),this.errorMessage.set("");let e=this.form.getRawValue();if(!e.usuario||this.form.controls.usuario.hasError("email")){this.errorMessage.set("El usuario debe ser un correo v\xE1lido."),this.isLoading.set(!1);return}(i==="validar"?this.sesionApiSvc.validarSesion({email:e.usuario}):this.sesionApiSvc.registrarSesion({email:e.usuario,pass:this.encryptPasswordWithTokenAndEmail(e.clave??"",e.usuario)})).subscribe({next:o=>{this.sessionAppSvc.setSession(o),this.router.navigate(["/secure"])},error:o=>{console.error("Error en respuesta de sesi\xF3n:",o),this.errorMessage.set(this.resolveHttpErrorMessage(o)),this.isLoading.set(!1)}})}resolveHttpErrorMessage(i){switch(Number(i?.status??0)){case 400:return"La solicitud no es v\xE1lida. Revisa los datos ingresados e intenta nuevamente.";case 403:return"No tienes permisos para realizar esta acci\xF3n.";case 500:return"Ocurri\xF3 un error interno del servidor. Intenta nuevamente m\xE1s tarde.";case 0:return"No se pudo conectar con el servidor. Verifica tu conexi\xF3n e intenta de nuevo.";default:return"No fue posible completar la solicitud. Intenta nuevamente."}}encryptPasswordWithTokenAndEmail(i,e){let t=String(e??"").trim().toLowerCase(),o=`${Ee.STATICS_API_TOKEN}:${t}`;return this.encryptSesionData(i,o)}encryptSesionData(i,e){if(!e)return i;let t=new TextEncoder().encode(i),o=new TextEncoder().encode(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s+=1)r[s]=t[s]^o[s%o.length];let a="";for(let s of r)a+=String.fromCharCode(s);return btoa(a)}decryptSesionData(i,e){if(!e)return i;let t=atob(i),o=new Uint8Array(t.length);for(let s=0;s<t.length;s+=1)o[s]=t.charCodeAt(s);let r=new TextEncoder().encode(e),a=new Uint8Array(o.length);for(let s=0;s<o.length;s+=1)a[s]=o[s]^r[s%r.length];return new TextDecoder().decode(a)}setInitialLoaderVisible(i){if(!this.isBrowser)return;let e=document.getElementById("initial-loader");e&&e.classList.toggle("hidden",!i)}static \u0275fac=function(e){return new(e||n)(q(Wn),q(J),q(ue),q(_r))};static \u0275cmp=y({type:n,selectors:[["app-login"]],viewQuery:function(e,t){if(e&1&&Ue(oh,5,z),e&2){let o;F(o=L())&&(t.googleButtonContainer=o.first)}},decls:38,vars:11,consts:[["googleButtonContainer",""],[1,"login-container"],[1,"login-card"],[1,"login-header"],[1,"google-signin-section"],[1,"google-button-container"],[1,"separator"],[1,"login-form",3,"ngSubmit","formGroup"],["type","text","formControlName","usuario","placeholder","usuario"],["class","error",4,"ngIf"],[1,"password-input-wrapper"],["formControlName","clave","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022",3,"paste","type"],["type","button",1,"password-toggle-btn",3,"click"],["class","password-eye-icon password-eye-open","viewBox","0 0 24 24","aria-hidden","true","focusable","false",4,"ngIf"],["class","password-eye-icon password-eye-closed","viewBox","0 0 24 24","aria-hidden","true","focusable","false",4,"ngIf"],[1,"actions"],["type","submit",3,"disabled"],["type","button",1,"secondary",3,"click","disabled"],["class","error-alert",4,"ngIf"],[1,"helper"],["routerLink","/home"],[1,"error"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false",1,"password-eye-icon","password-eye-open"],["fill","currentColor","d","M12 5c-5.5 0-9.5 4.2-10.7 6.2a1.5 1.5 0 0 0 0 1.6C2.5 14.8 6.5 19 12 19s9.5-4.2 10.7-6.2a1.5 1.5 0 0 0 0-1.6C21.5 9.2 17.5 5 12 5Zm0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false",1,"password-eye-icon","password-eye-closed"],["fill","currentColor","d","m3.3 2 18.7 18.7-1.4 1.4-3-3A12.7 12.7 0 0 1 12 20c-5.5 0-9.5-4.2-10.7-6.2a1.5 1.5 0 0 1 0-1.6A18 18 0 0 1 6.7 7L1.9 2.2 3.3.8Zm5 8.8a3.8 3.8 0 0 0 4.9 4.9l-4.9-4.9ZM12 5c5.5 0 9.5 4.2 10.7 6.2a1.5 1.5 0 0 1 0 1.6 18.8 18.8 0 0 1-3.4 3.8l-1.5-1.5a16 16 0 0 0 2.3-2.6C18.8 10.5 15.7 7 12 7c-.8 0-1.6.2-2.3.4L8.1 5.8c1.2-.5 2.5-.8 3.9-.8Zm0 3a4 4 0 0 1 4 4c0 .7-.2 1.3-.5 1.9l-5.4-5.4c.6-.3 1.2-.5 1.9-.5Z"],[1,"error-alert"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","8","x2","12","y2","12"],["x1","12","y1","16","x2","12.01","y2","16"]],template:function(e,t){e&1&&(l(0,"section",1)(1,"div",2)(2,"header",3)(3,"h1"),p(4,"Acceso"),c(),l(5,"p"),p(6,"Inicia tu sesi\xF3n para acceder a las rutas privadas."),c()(),l(7,"div",4),w(8,"div",5,0),c(),l(10,"div",6)(11,"span"),p(12,"o contin\xFAa con email"),c()(),l(13,"form",7),S("ngSubmit",function(){return t.validarSesion()}),l(14,"label")(15,"span"),p(16,"Usuario"),c(),w(17,"input",8),c(),pe(18,rh,2,0,"span",9),l(19,"label")(20,"span"),p(21,"Clave"),c(),l(22,"div",10)(23,"input",11),S("paste",function(r){return t.preventPasswordPaste(r)}),c(),l(24,"button",12),S("click",function(){return t.togglePasswordVisibility()}),pe(25,ah,2,0,"svg",13)(26,sh,2,0,"svg",14),c()()(),pe(27,lh,2,0,"span",9),l(28,"div",15)(29,"button",16),p(30,"Validar sesi\xF3n"),c(),l(31,"button",17),S("click",function(){return t.registrarSesion()}),p(32,"Registrar sesi\xF3n"),c()(),pe(33,ch,7,1,"div",18),l(34,"p",19),p(35," \xBFSolo quieres navegar rutas p\xFAblicas? "),l(36,"a",20),p(37,"Ir al inicio"),c()()()()()),e&2&&(m(13),b("formGroup",t.form),m(5),b("ngIf",t.form.controls.usuario.touched&&t.form.controls.usuario.invalid),m(5),b("type",t.showPassword()?"text":"password"),m(),D("aria-label",t.showPassword()?"Ocultar clave":"Mostrar clave")("title",t.showPassword()?"Ocultar clave":"Mostrar clave"),m(),b("ngIf",t.showPassword()),m(),b("ngIf",!t.showPassword()),m(),b("ngIf",t.form.controls.clave.touched&&t.form.controls.clave.invalid),m(2),b("disabled",t.isLoading()),m(2),b("disabled",t.isLoading()),m(2),b("ngIf",t.errorMessage()))},dependencies:[Bt,Rn,ol,go,po,ho,fo,Dn,el,Ze],styles:['[_nghost-%COMP%]{display:block}.login-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:70vh;padding:1rem}.login-card[_ngcontent-%COMP%]{width:min(420px,100%);background:var(--app-text-inverse);border-radius:16px;box-shadow:0 20px 40px var(--app-shadow);padding:2rem;display:flex;flex-direction:column;gap:1.5rem}.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.75rem;font-weight:700;color:var(--app-text-strong)}.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:var(--app-text-muted-light)}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem;font-weight:600;color:var(--app-text-strong)}input[_ngcontent-%COMP%]{border:1px solid var(--app-border-soft);border-radius:10px;padding:.75rem .9rem;font-size:.95rem;transition:border-color .2s ease,box-shadow .2s ease}input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--app-brand-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--app-brand-primary) 10%,transparent)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:var(--app-status-error)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 3px color-mix(in srgb,var(--app-status-error) 10%,transparent)}.password-input-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}.password-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-right:5.25rem;box-sizing:border-box}.password-toggle-btn[_ngcontent-%COMP%]{position:absolute;top:50%;right:.35rem;width:2.25rem;height:2.25rem;transform:translateY(-50%);border:none;background:transparent;color:var(--app-brand-primary);padding:0;border-radius:8px;display:inline-flex;align-items:center;justify-content:center}.password-eye-icon[_ngcontent-%COMP%]{width:1.1rem;height:1.1rem}.password-eye-open[_ngcontent-%COMP%]{color:var(--app-brand-secondary)}.password-eye-closed[_ngcontent-%COMP%]{color:var(--app-brand-accent)}.password-toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:color-mix(in srgb,var(--app-brand-primary) 12%,transparent);transform:translateY(-50%)}.actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.5rem}button[_ngcontent-%COMP%]{border:none;background:var(--app-brand-primary);color:var(--app-text-inverse);padding:.75rem 1rem;border-radius:10px;font-weight:600;cursor:pointer;transition:opacity .2s ease,transform .1s ease}button[_ngcontent-%COMP%]:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}button.secondary[_ngcontent-%COMP%]{background:var(--app-background-soft);color:var(--app-text-strong)}button[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.error[_ngcontent-%COMP%]{color:var(--app-status-error);font-size:.8rem;margin:0;display:block;margin-top:.25rem}.error-alert[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem;padding:.875rem 1rem;margin-top:1rem;background-color:color-mix(in srgb,var(--app-status-error) 8%,transparent);border:1px solid color-mix(in srgb,var(--app-status-error) 30%,transparent);border-radius:10px;color:var(--app-status-error);font-size:.875rem;line-height:1.5;animation:_ngcontent-%COMP%_slideDown .3s ease-out}.error-alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{flex-shrink:0;color:var(--app-status-error);margin-top:.125rem}.error-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;font-weight:500}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.helper[_ngcontent-%COMP%]{margin:.5rem 0 0;color:var(--app-text-muted-light);font-size:.85rem}.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--app-brand-primary);font-weight:600;text-decoration:none}.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.google-signin-section[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}.google-button-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;min-height:44px}.google-redirect-button[_ngcontent-%COMP%]{width:100%;display:inline-flex;justify-content:center;align-items:center;gap:.625rem;min-height:44px;background:color-mix(in srgb,var(--app-text-inverse) 96%,transparent);color:#3c4043;border:1px solid #dadce0;border-radius:10px;font-weight:600;font-size:.95rem;letter-spacing:.01em;box-shadow:0 1px 2px #3c40431f,0 1px 3px #3c404314;transition:background-color .2s ease,box-shadow .2s ease,transform .12s ease}.google-redirect-button[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{width:1.125rem;height:1.125rem;flex-shrink:0}.google-redirect-button[_ngcontent-%COMP%]   .google-label[_ngcontent-%COMP%]{line-height:1}.google-redirect-button[_ngcontent-%COMP%]:hover:not(:disabled){background:#f8f9fa;box-shadow:0 2px 6px #3c404333,0 1px 2px #3c40431a}.google-redirect-button[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(1px)}.google-redirect-button[_ngcontent-%COMP%]:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}.google-redirect-button[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.separator[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;margin:1rem 0;position:relative}.separator[_ngcontent-%COMP%]:before, .separator[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid var(--app-border-soft)}.separator[_ngcontent-%COMP%]:not(:empty):before{margin-right:.75rem}.separator[_ngcontent-%COMP%]:not(:empty):after{margin-left:.75rem}.separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--app-text-muted-light);font-size:.875rem;font-weight:500}']})};var Yi=class n{router=d(ue);sessionAppSvc=d(J);async ngOnInit(){if(!this.sessionAppSvc.hasSession()){await this.router.navigate(["/login"]);return}if(!await this.sessionAppSvc.revalidateSessionToken()){this.sessionAppSvc.clearSession(),await this.router.navigate(["/login"]);return}await this.sessionAppSvc.cargarSesion(!0),await this.router.navigate(["/secure/home"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-session-revalidate"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};var xr="droguier_cookies_consent",Cr="droguier_cookies_notice_ok",wr=class n{platformId=d(lt);consent=x(this.resolve());accept(){this.persist("accepted"),this.consent.set("accepted")}reject(){this.persist("rejected"),this.consent.set("rejected")}revoke(){this.isBrowser()&&(localStorage.removeItem(xr),localStorage.removeItem(Cr)),this.consent.set(null)}canLoadThirdParty(){return this.consent()==="accepted"}resolve(){if(!this.isBrowser())return null;let i=localStorage.getItem(xr);return i==="accepted"||i==="rejected"?i:localStorage.getItem(Cr)==="1"?(localStorage.setItem(xr,"accepted"),localStorage.removeItem(Cr),"accepted"):null}persist(i){this.isBrowser()&&(localStorage.setItem(xr,i),localStorage.removeItem(Cr))}isBrowser(){return gt(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};function dh(n,i){if(n&1){let e=fe();l(0,"button",6),S("click",function(){j(e);let o=v();return U(o.revokeConsent())}),p(1," Revocar mi consentimiento "),c()}}function mh(n,i){n&1&&(l(0,"p",3),p(1," Actualmente no has tomado una decisi\xF3n: se muestran las cookies necesarias y de preferencias, y no se cargan servicios de terceros. "),c())}var Sr=class n{consentService=d(wr);consent=this.consentService.consent;revokeConsent(){this.consentService.revoke()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-cookies"]],decls:72,vars:1,consts:[[1,"cookies-page"],[1,"cookies-table"],["type","button",1,"cookies-revoke-btn"],[1,"cookies-no-decision"],[1,"cookies-back"],["routerLink","/"],["type","button",1,"cookies-revoke-btn",3,"click"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h1"),p(2,"Pol\xEDtica de cookies"),c(),l(3,"p"),p(4," Este sitio web utiliza cookies y mecanismos de almacenamiento local del navegador (localStorage) para que el servicio funcione correctamente y para recordar tus preferencias. Con tu consentimiento, adem\xE1s, se cargan servicios de terceros como Google Sign-In, YouTube y herramientas de anal\xEDtica. "),c(),l(5,"h2"),p(6,"1. Qu\xE9 son las cookies"),c(),l(7,"p"),p(8," Una cookie es un peque\xF1o archivo que se guarda en tu dispositivo al visitar un sitio web. Su finalidad puede ser t\xE9cnica (necesaria para el funcionamiento), de preferencias o de an\xE1lisis y publicidad. La normativa aplicable es el RGPD (UE) 2016/679 y, en Espa\xF1a, la Ley 34/2002 de servicios de la sociedad de la informaci\xF3n (LSSI), art\xEDculo 22.2. "),c(),l(9,"h2"),p(10,"2. Cookies y almacenamiento utilizados"),c(),l(11,"table",1)(12,"thead")(13,"tr")(14,"th"),p(15,"Identificador"),c(),l(16,"th"),p(17,"Tipo"),c(),l(18,"th"),p(19,"Finalidad"),c()()(),l(20,"tbody")(21,"tr")(22,"td"),p(23,"droguier_session"),c(),l(24,"td"),p(25,"Necesaria"),c(),l(26,"td"),p(27,"Mantener tu sesi\xF3n iniciada. Se elimina al cerrar sesi\xF3n."),c()(),l(28,"tr")(29,"td"),p(30,"droguier_cookies_template"),c(),l(31,"td"),p(32,"Preferencia"),c(),l(33,"td"),p(34,"Recordar el template visual que has elegido (Default, Dark, Day, Retro, Pastel)."),c()(),l(35,"tr")(36,"td"),p(37,"droguier_cookies_consent"),c(),l(38,"td"),p(39,"Preferencia"),c(),l(40,"td"),p(41,"Guardar tu decisi\xF3n sobre el uso de cookies (accepted / rejected)."),c()(),l(42,"tr")(43,"td"),p(44,"Google Sign-In"),c(),l(45,"td"),p(46,"Terceros"),c(),l(47,"td"),p(48,"Solo si aceptas: autenticaci\xF3n con cuenta de Google."),c()(),l(49,"tr")(50,"td"),p(51,"YouTube"),c(),l(52,"td"),p(53,"Terceros"),c(),l(54,"td"),p(55,"Solo si aceptas: reproducci\xF3n de videos incrustados y sus propias cookies."),c()(),l(56,"tr")(57,"td"),p(58,"Google Analytics"),c(),l(59,"td"),p(60,"Anal\xEDtica"),c(),l(61,"td"),p(62,"Solo si aceptas: estad\xEDsticas an\xF3nimas de uso del sitio."),c()()()(),l(63,"h2"),p(64,"3. Tu decisi\xF3n"),c(),l(65,"p"),p(66," Puedes aceptar o rechazar las cookies de terceros en cualquier momento. Rechazarlas no impide el uso del sitio: solo se desactivan los servicios no esenciales. Tambi\xE9n puedes borrar el consentimiento guardado pulsando el bot\xF3n de abajo, lo que volver\xE1 a mostrarte el aviso. "),c(),M(67,dh,2,0,"button",2)(68,mh,2,0,"p",3),l(69,"p",4)(70,"a",5),p(71,"Volver al inicio"),c()()()),e&2&&(m(67),I(t.consent()!==null?67:68))},dependencies:[Ze],styles:[".cookies-page[_ngcontent-%COMP%]{max-width:52rem;margin:0 auto;padding:2rem 1.25rem 3rem;color:var(--app-text-primary);line-height:1.55}.cookies-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.6rem;margin:0 0 1rem}.cookies-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.15rem;margin:1.6rem 0 .6rem}.cookies-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem}.cookies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .cookies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--app-border-strong, rgba(255, 255, 255, .15));padding:.55rem .7rem;text-align:left;vertical-align:top}.cookies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--app-background-header, #11131c)}.cookies-revoke-btn[_ngcontent-%COMP%]{margin:.5rem 0 1rem;padding:.6rem 1.2rem;border-radius:12px;border:1px solid var(--app-border-strong, rgba(255, 255, 255, .15));background:transparent;color:var(--app-text-primary);font-weight:600;cursor:pointer;transition:transform .2s ease,background .2s ease}.cookies-revoke-btn[_ngcontent-%COMP%]:hover{background:var(--app-button-background, #4f8cff);color:var(--app-button-text, #ffffff)}.cookies-no-decision[_ngcontent-%COMP%]{font-style:italic}.cookies-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--app-button-background, #4f8cff)}"]})};var Xc=()=>import("./chunk-FAUBWUXR.js").then(n=>n.postsRoutes),ph=()=>import("./chunk-FZZQP47L.js").then(n=>n.secureRoutes),Qc=()=>import("./chunk-VHJ7SAPG.js").then(n=>n.publicRoutes),Jc=[{path:"",pathMatch:"full",component:nr},{path:"",component:si,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"home",component:Yn,data:{title:"Home",public:!0},canActivate:[ji]},{path:"login",component:yr,data:{title:"Iniciar sesi\xF3n",public:!0},canActivate:[ji]},{path:"revalidar-sesion",component:Yi,data:{title:"Revalidar sesi\xF3n",public:!0}},{path:"session/revalidate",component:Yi,data:{title:"Revalidar sesi\xF3n",public:!0}}]},{path:"secure",component:li,canActivate:[_n],canActivateChild:[_n],providers:[J],children:[{path:"",loadChildren:ph}]},{path:"posts",data:{title:"Posts",icon:"search"},children:[{path:"",component:li,canMatch:[Ui],canActivateChild:[_n],children:[{path:"",loadChildren:Xc}]},{path:"",component:si,canMatch:[Vi],children:[{path:"",loadChildren:Xc}]}]},{path:"public",children:[{path:"",component:li,canMatch:[Ui],canActivateChild:[_n],providers:[J],children:[{path:"",loadChildren:Qc}]},{path:"",component:si,canMatch:[Vi],children:[{path:"",loadChildren:Qc}]}]},{path:"Home",redirectTo:"secure/home",pathMatch:"full"},{path:"cookies",component:Sr,data:{title:"Pol\xEDtica de cookies",icon:"cookie"}},{path:"**",component:br,data:{title:"No encontrado"}}];var Qt=class n{static STATIC_TEXTS={notFound:{pageNotFound:"P\xE1gina no encontrada",backToHome:"Volver al inicio"},home:{legendTitle:"Hook's revenge"},elRichardYutu:{watchOnYoutube:"Ver en YouTube"}};static POSTS_SPECIAL=[{id:"richard",title:"El universo en una copa de vino",excerpt:"Video destacado sobre ciencia, curiosidad y belleza cotidiana.",tags:["ciencia","video","feynman","youtube"],href:"/posts/richard",dateLabel:"11 Mar 2018",kind:"Video"}];static LIST_MENU_MAIN=[{title:"CLI Docs",name:"CLI Docs",link:"https://angular.dev/tools/cli",short_desc:"CLIDocs",visible:!1,new:!1},{title:"Angular Language Service",name:"Angular Language Service",link:"https://angular.dev/tools/language-service",short_desc:"ALS",visible:!1,new:!1},{title:"Angular DevTools",name:"Angular DevTools",link:"https://angular.dev/tools/devtools",short_desc:"AngDevTools",visible:!0,new:!1},{title:"Mark Poole's Website",name:"Mark Poole",link:"https://markpoole.com/",short_desc:"MarkPoole",visible:!0,new:!1},{title:"Stack Overflow",name:"Stack Overflow",link:"https://stackoverflow.com/",short_desc:"StackOverflow",visible:!1,new:!1},{title:"Cloudflare",name:"Cloudflare",link:"https://www.cloudflare.com/",short_desc:"Cloudflare",visible:!0,new:!0},{title:"Posts",name:"Posts",link:"/posts/home",short_desc:"Posts",visible:!0,new:!1}];static buildAppMenuRoutes(){let i=[],e=(t,o)=>{if(!o||typeof o!="object")return;let r=o,a=typeof r.title=="string"?r.title.trim():"",s=typeof r.icon=="string"?r.icon.trim():"";!a||!s||i.push({title:a,name:a,link:t,short_desc:a,icon:{name:s,url:""},visible:!0,secure:r.secure===!0,new:!1})};for(let t of Jc)typeof t.path=="string"&&!t.path.includes(":")&&t.data&&e(`/${t.path}`,t.data);for(let t of rl)t.data&&e(`/public/${t.path}`,t.data);for(let t of ed)t.data&&e(`/secure/${t.path}`,t.data);return i.sort((t,o)=>t.title.localeCompare(o.title,"es"))}getMenuNavigationMain(){return[...n.LIST_MENU_MAIN]}getMenuNavigationApp(){return n.buildAppMenuRoutes()}getStaticTexts(){return{notFound:g({},n.STATIC_TEXTS.notFound),home:g({},n.STATIC_TEXTS.home),elRichardYutu:g({},n.STATIC_TEXTS.elRichardYutu)}}getStaticPostsSpecial(){return n.POSTS_SPECIAL.map(i=>ee(g({},i),{tags:[...i.tags]}))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var hh=(n,i)=>i.text+"-"+n,fh=(n,i)=>i.id;function gh(n,i){n&1&&(Re(),w(0,"path",7))}function vh(n,i){n&1&&(Re(),w(0,"path",8))}function bh(n,i){if(n&1&&(l(0,"span",43),p(1),c()),n&2){let e=i.$implicit;Ot("font-size",e.size,"px")("font-weight",e.emphasized?700:500),m(),T(e.text)}}function _h(n,i){if(n&1){let e=fe();l(0,"div",41)(1,"button",44),S("click",function(){j(e);let o=v();return U(o.goPrevPage())}),l(2,"mat-icon"),p(3,"chevron_left"),c()(),l(4,"span",45)(5,"mat-icon",46),p(6),c(),l(7,"span",47),p(8),c()(),l(9,"button",48),S("click",function(){j(e);let o=v();return U(o.goNextPage())}),l(10,"mat-icon"),p(11,"chevron_right"),c()()()}if(n&2){let e=v();m(6),T(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].icon),m(2),T(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].label)}}function yh(n,i){if(n&1&&(l(0,"a",49)(1,"span"),p(2),c(),Re(),l(3,"svg",51),w(4,"path",52),c()()),n&2){let e=v().$implicit;b("routerLink",e.link),m(2),T(e.title)}}function xh(n,i){if(n&1&&(l(0,"a",50)(1,"span"),p(2),c(),Re(),l(3,"svg",51),w(4,"path",52),c()()),n&2){let e=v().$implicit;b("href",e.link,zt),m(2),T(e.title)}}function Ch(n,i){if(n&1&&M(0,yh,5,2,"a",49)(1,xh,5,2,"a",50),n&2){let e=i.$implicit;I(e.isRouter?0:1)}}function wh(n,i){if(n&1&&se(0,Ch,2,1,null,null,fh),n&2){let e=v();le(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].items)}}function Sh(n,i){n&1&&(l(0,"p",42),p(1,"Sin elementos en esta p\xE1gina"),c())}function kh(n,i){if(n&1){let e=fe();w(0,"div",19),l(1,"div",41)(2,"button",44),S("click",function(){j(e);let o=v();return U(o.goPrevPage())}),l(3,"mat-icon"),p(4,"chevron_left"),c()(),l(5,"span",53)(6,"mat-icon",46),p(7),c()(),l(8,"button",48),S("click",function(){j(e);let o=v();return U(o.goNextPage())}),l(9,"mat-icon"),p(10,"chevron_right"),c()()()}if(n&2){let e=v();m(7),T(e.homeCarouselPageMap().carouselPages[e.homeCarouselPageMap().currentPage].icon)}}var kr=class n{constructor(i,e,t){this.sessionAppSvc=i;this.staticsAppSvc=e;this.staticsApiSvc=t;this.staticTexts=this.staticsAppSvc.getStaticTexts()}sessionAppSvc;staticsAppSvc;staticsApiSvc;api_controller="bookmarks";greetingSizeOptions=[50,30,24,12];greetingTemplates=[{key:"es",lang:"es",anonymous:"Hola, Bienvenido",withName:i=>`Bienvenido, ${i}`},{key:"en",lang:"en",anonymous:"Hello, Welcome",withName:i=>`Welcome, ${i}`},{key:"pt",lang:"pt",anonymous:"Ola, Bem-vindo",withName:i=>`Bem-vindo, ${i}`},{key:"fr",lang:"fr",anonymous:"Bonjour, Bienvenue",withName:i=>`Bienvenue, ${i}`},{key:"it",lang:"it",anonymous:"Ciao, Benvenuto",withName:i=>`Benvenuto, ${i}`},{key:"de",lang:"de",anonymous:"Hallo, Willkommen",withName:i=>`Willkommen, ${i}`},{key:"ja",lang:"ja",anonymous:"Konnichiwa, Yokoso",withName:i=>`Yokoso, ${i}`},{key:"pal",lang:"ast",anonymous:"Hola, Bienveniu",withName:i=>`Bienveniu, ${i}`},{key:"ru",lang:"ru",anonymous:"Privet, Dobro pozhalovat",withName:i=>`Dobro pozhalovat, ${i}`}];currentUserName=null;isMenuOpen=!1;mobilePanel=x("left");greetingLines=x([]);bookmarks=x([]);bookmarksFavorites=x([]);bookmarksMainMenu=x([]);bookmarksAppMenu=x([]);staticTexts;homeCarouselPageMap=x({carouselPages:[],currentPage:0});async ngOnInit(){this.updateGreetingPresentation(),this.cargarMainMenu(),await this.sessionAppSvc.cargarSesion().then(()=>{this.greet(),this.cargarAppMenu(),this.cargarBookmarksFavoritos()}),this.cargarBookmarks()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}refreshGreetings(){this.updateGreetingPresentation()}toggleMobilePanel(){this.mobilePanel.update(i=>i==="left"?"right":"left")}goPrevPage(){let i=this.homeCarouselPageMap().carouselPages.length;i<=0||(this.homeCarouselPageMap().currentPage=(this.homeCarouselPageMap().currentPage-1+i)%i)}goNextPage(){let i=this.homeCarouselPageMap().carouselPages.length;i<=0||(this.homeCarouselPageMap().currentPage=(this.homeCarouselPageMap().currentPage+1)%i)}normalizeCurrentPage(){let i=this.homeCarouselPageMap().carouselPages.length-1;if(i<0){this.homeCarouselPageMap().currentPage=0;return}this.homeCarouselPageMap().currentPage>i&&(this.homeCarouselPageMap().currentPage=i)}upsertCarouselPage(i){this.homeCarouselPageMap.update(e=>{let t=e.carouselPages.findIndex(r=>r.key===i.key);if(t===-1)return ee(g({},e),{carouselPages:[...e.carouselPages,i]});let o=[...e.carouselPages];return o[t]=i,ee(g({},e),{carouselPages:o})}),this.normalizeCurrentPage()}greet(){let i=this.sessionAppSvc.sessionUser();if(!i||!i.full_name){this.currentUserName=null,this.updateGreetingPresentation();return}this.currentUserName=i.full_name,this.updateGreetingPresentation()}updateGreetingPresentation(){let i=this.getPreferredGreetingTemplate(),e=this.greetingTemplates.filter(f=>f.key!==i.key),t=this.getShuffledItems(e),o=this.greetingSizeOptions[0],r=this.greetingSizeOptions.slice(1),a=30,h=[t.shift()??i,i,...t].map((f,_)=>({text:this.currentUserName?f.withName(this.currentUserName):f.anonymous,size:_===0?o:_===1?a:this.getRandomItem(r.length>0?r:this.greetingSizeOptions),emphasized:_===1}));this.greetingLines.set(h)}getPreferredGreetingTemplate(){let i=this.getUserLanguageCode();return this.greetingTemplates.find(e=>e.lang===i)??this.greetingTemplates[1]}getUserLanguageCode(){return typeof navigator>"u"||!navigator.language?"es":navigator.language.toLowerCase().split("-")[0]}getRandomItem(i){let e=Math.floor(Math.random()*i.length);return i[e]}getShuffledItems(i){let e=[...i];for(let t=e.length-1;t>0;t--){let o=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[o],e[o]=r}return e}cargarBookmarksFavoritos(){let i=this.sessionAppSvc.sessionUser();if(!i){this.bookmarksFavorites.set([]),this.upsertCarouselPage({key:"favorites",label:"Favoritos",icon:"favorite",items:[]}),this.normalizeCurrentPage();return}var e=[];let t=i.bookmarks_favorites;e=Array.isArray(t)?t:[];let o=new Set(e),r=this.bookmarks().filter(a=>o.has(a.id));this.bookmarksFavorites.set(r),this.upsertCarouselPage({key:"favorites",label:"Favoritos",icon:"favorite",items:r.map(a=>({id:`favorite-${a.id}`,title:a.title,link:a.url,isRouter:!1}))}),this.normalizeCurrentPage()}cargarBookmarks(){if(!this.sessionAppSvc.session()){this.bookmarks.set([]),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:[]}),this.normalizeCurrentPage();return}this.staticsApiSvc.get(this.api_controller).subscribe({next:e=>{let t=e?.success?e.data:[];this.bookmarks.set(t),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:t.map(o=>({id:`bookmark-${o.id}`,title:o.title,link:o.url,isRouter:!1}))}),this.cargarBookmarksFavoritos(),this.normalizeCurrentPage()},error:()=>{this.bookmarks.set([]),this.upsertCarouselPage({key:"bookmarks",label:"Bookmarks",icon:"bookmark",items:[]}),this.normalizeCurrentPage()}})}cargarMainMenu(){try{let i=this.staticsAppSvc.getMenuNavigationMain().filter(e=>e.visible);this.bookmarksMainMenu.set(i),this.upsertCarouselPage({key:"main-menu",label:"Men\xFA Principal",icon:"menu",items:i.filter(e=>!!e.link).map(e=>({id:`main-${e.title}`,title:e.title,link:e.link,isRouter:!1}))}),this.normalizeCurrentPage()}catch(i){this.bookmarksMainMenu.set([]),this.upsertCarouselPage({key:"main-menu",label:"Men\xFA Principal",icon:"menu",items:[]}),this.normalizeCurrentPage(),console.error("Error al cargar el men\xFA principal:",i)}}cargarAppMenu(){try{if(!this.sessionAppSvc.session()){this.bookmarksAppMenu.set([]),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:[]}),this.normalizeCurrentPage();return}let e=this.staticsAppSvc.getMenuNavigationApp().filter(t=>t.visible);this.bookmarksAppMenu.set(e),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:e.filter(t=>!!t.link).map(t=>({id:`app-${t.title}`,title:t.title,link:t.link,isRouter:!0}))}),this.normalizeCurrentPage()}catch(i){this.bookmarksAppMenu.set([]),this.upsertCarouselPage({key:"app-menu",label:"Men\xFA App",icon:"apps",items:[]}),this.normalizeCurrentPage(),console.error("Error al cargar el men\xFA de la app:",i)}}static \u0275fac=function(e){return new(e||n)(q(J),q(Qt),q(Gt))};static \u0275cmp=y({type:n,selectors:[["app-desktop"]],decls:57,vars:18,consts:[[1,"home-bg"],[1,"home-legend"],[1,"legend-title"],[1,"legend-owner"],["href","https://markpoole.com/","target","_blank","rel","noopener"],[1,"btn_menu_flotante",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M3 12h18M3 6h18M3 18h18"],["d","M18 6L6 18M6 6l12 12"],[1,"main"],[1,"box-overlay"],[1,"content"],["type","button",1,"mobile-side-toggle",3,"click"],[1,"left-side"],[1,"greeting-header"],[1,"greeting-stack"],[1,"greeting-line",3,"fontSize","fontWeight"],["type","button","aria-label","Reordenar saludos","title","Reordenar saludos",1,"greeting-refresh-btn",3,"click"],[1,"greeting-footer"],["role","separator","aria-label","Divider",1,"divider-horizontal"],[1,"greeting-footer-content"],["id","social-links","aria-label","Enlaces a redes sociales",1,"social-links"],["href","https://github.com","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://mail.google.com/mail/u/0/#inbox","aria-label","Gmail","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Gmail"],["d","M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"],["href","https://dash.cloudflare.com","aria-label","Cloudflare","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Cloudflare"],["d","M16.5088 16.8446c.1473-.504.2285-1.0394.2285-1.5898 0-3.5898-2.9102-6.5-6.5-6.5-1.0898 0-2.1094.2734-3 .7422-.4609-.8789-1.3906-1.4844-2.4414-1.4844-1.5508 0-2.8086 1.2578-2.8086 2.8086 0 .2656.0469.5156.1211.75C1.2852 12.6484 0 14.5586 0 16.8446 0 19.6055 2.2383 21.8438 5 21.8438h14c2.7617 0 5-2.2383 5-5 0-2.6602-2.0938-4.8164-4.6719-4.9844l.1807-.0148z"],["href","https://x.com/echoes_daniel","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],[1,"right-side-page-title"],[1,"right-side-pager"],[1,"right-side-empty"],[1,"greeting-line"],["type","button","aria-label","P\xE1gina anterior",1,"right-side-pager-btn",3,"click"],["aria-label","Tipo de p\xE1gina activa",1,"page-type-chip"],[1,"page-type-icon"],[1,"page-type-label"],["type","button","aria-label","P\xE1gina siguiente",1,"right-side-pager-btn",3,"click"],[1,"pill",3,"routerLink"],["target","_blank","rel","noopener",1,"pill",3,"href"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"],["aria-label","P\xE1gina activa",1,"page-type-chip","page-type-chip--pager"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"span",2),p(3),c(),l(4,"span",3)(5,"a",4),p(6,"https://markpoole.com/"),c()()(),l(7,"button",5),S("click",function(){return t.toggleMenu()}),Re(),l(8,"svg",6),M(9,gh,1,0,":svg:path",7)(10,vh,1,0,":svg:path",8),c()(),Mt(),l(11,"main",9),w(12,"div",10),l(13,"div",11)(14,"button",12),S("click",function(){return t.toggleMobilePanel()}),l(15,"mat-icon"),p(16,"swap_horiz"),c(),l(17,"span"),p(18),c()(),l(19,"div",13)(20,"div",14)(21,"h1",15),se(22,bh,2,5,"span",16,hh),c(),l(24,"button",17),S("click",function(){return t.refreshGreetings()}),l(25,"mat-icon"),p(26,"refresh"),c()()(),l(27,"div",18),w(28,"div",19),l(29,"div",20)(30,"p"),p(31,"Congratulations! Your app starts here. \u{1F389}!!!"),c(),l(32,"div",21)(33,"a",22),Re(),l(34,"svg",23),w(35,"path",24),c()(),Mt(),l(36,"a",25),Re(),l(37,"svg",26),w(38,"path",27),c()(),Mt(),l(39,"a",28),Re(),l(40,"svg",29),w(41,"path",30),c()(),Mt(),l(42,"a",31),Re(),l(43,"svg",32),w(44,"path",33),c()(),Mt(),l(45,"a",34),Re(),l(46,"svg",35),w(47,"path",36),c()()()()()(),Mt(),w(48,"div",37),l(49,"div",38)(50,"div",39)(51,"div",40),M(52,_h,12,2,"div",41),c(),w(53,"div",19),M(54,wh,2,0)(55,Sh,2,0,"p",42),M(56,kh,11,1),c()()()()()),e&2&&(m(3),T(t.staticTexts.home.legendTitle),m(4),D("aria-label",t.isMenuOpen?"Cerrar men\xFA":"Abrir men\xFA"),m(2),I(t.isMenuOpen?10:9),m(2),E("menu-open",t.isMenuOpen),m(),E("show",t.isMenuOpen),m(),E("show",t.isMenuOpen)("mobile-show-left",t.mobilePanel()==="left")("mobile-show-right",t.mobilePanel()==="right"),m(),D("aria-label",t.mobilePanel()==="left"?"Mostrar men\xFA derecho":"Mostrar saludo izquierdo"),m(4),T(t.mobilePanel()==="left"?"Ver men\xFA derecho":"Ver saludo izquierdo"),m(4),le(t.greetingLines()),m(30),I(t.homeCarouselPageMap().carouselPages.length>1?52:-1),m(2),I(t.homeCarouselPageMap().carouselPages.length>0?54:55),m(2),I(t.homeCarouselPageMap().carouselPages.length>1?56:-1))},dependencies:[Ic,Ze,ut],styles:['[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh;--home-right-offset: clamp(1rem, 8vw, 4rem)}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--app-text-strong);font-weight:500;line-height:100%;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}.greeting-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.15rem}.greeting-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.35rem;align-self:stretch;min-height:0;justify-content:center}.greeting-refresh-btn[_ngcontent-%COMP%]{margin-top:0;width:1.6rem;height:1.6rem;border-radius:999px;border:1px solid var(--app-border-inverse);background:color-mix(in srgb,var(--app-text-strong) 35%,transparent);color:var(--app-text-inverse);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:transform .2s ease,background .2s ease}.greeting-refresh-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);background:color-mix(in srgb,var(--app-text-strong) 50%,transparent)}.greeting-refresh-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:.8rem;width:.8rem;height:.8rem;line-height:.8rem}.greeting-line[_ngcontent-%COMP%]{display:block;line-height:1.05}p[_ngcontent-%COMP%]{margin:0;color:var(--app-text-soft)}.home-bg[_ngcontent-%COMP%]{position:fixed;inset:0;min-height:100vh;width:100%;background:url("./media/hooks-revenge-AYJBKCNC.jpg") no-repeat center center fixed;background-size:cover;background-position:center;background-repeat:no-repeat;flex-direction:row;align-items:flex-start;justify-content:center;display:flex;z-index:0}.home-legend[_ngcontent-%COMP%]{width:auto;max-width:18rem;background:var(--app-text-strong);color:var(--app-text-inverse);padding:.5rem .875rem;margin:85vh 2rem 1.5rem 2.5rem;border-radius:50px;font-size:.75rem;box-shadow:0 4px 20px var(--app-shadow-strong);opacity:.25;display:flex;align-items:center;gap:.5rem;transition:opacity .3s ease}.home-legend[_ngcontent-%COMP%]:hover{opacity:1}.legend-title[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,serif;font-weight:600;font-size:.7rem;color:var(--app-inverse-soft);display:inline-flex;align-items:center;margin:0;padding-right:.5rem;border-right:1px solid var(--app-border-inverse-strong);-webkit-text-stroke:0;text-shadow:none;line-height:1}.legend-title[_ngcontent-%COMP%]:before{content:"\\1f5bc\\fe0f";margin-right:.35rem;font-size:.8rem}.legend-owner[_ngcontent-%COMP%]{width:auto;white-space:nowrap;word-break:normal}.legend-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline;color:var(--app-accent-blue-soft);font-size:.75rem;font-weight:500;text-decoration:none;transition:color .2s ease}.legend-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--app-brand-primary);text-decoration:underline}main[_ngcontent-%COMP%]{width:100%;max-width:750px;min-height:0;height:80vh;margin:auto;display:flex;justify-content:center;align-items:stretch;padding:1rem;box-sizing:border-box;position:relative;overflow:hidden;border-radius:50px}main.menu-open[_ngcontent-%COMP%]{overflow:hidden}.btn_menu_flotante[_ngcontent-%COMP%]{position:fixed;right:2rem;top:50%;transform:translateY(-50%);width:3.5rem;height:3.5rem;background:transparent;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--app-border-inverse);border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--app-border-inverse);transition:all .3s ease;z-index:1000;color:var(--app-text-inverse)}.btn_menu_flotante[_ngcontent-%COMP%]:hover{transform:translateY(-50%) scale(1.05);box-shadow:0 6px 16px var(--app-border-inverse)}.btn_menu_flotante[_ngcontent-%COMP%]:active{transform:translateY(-50%) scale(.95)}.btn_menu_flotante[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:transform .3s ease}.box-overlay[_ngcontent-%COMP%]{display:flex;justify-content:space-around;position:absolute;top:0;left:0;right:var(--home-right-offset);width:100%;min-height:100%;background:var(--app-text-inverse);opacity:0;border-radius:16px;pointer-events:none;transition:opacity .3s ease}.box-overlay.show[_ngcontent-%COMP%]{opacity:.5;pointer-events:auto}.content[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:stretch;gap:1rem;width:calc(100% - var(--home-right-offset));max-width:800px;height:100%;min-height:0;margin-bottom:3rem;box-sizing:border-box;overflow:hidden;opacity:0;transform:translateY(-20px);pointer-events:none;transition:all .3s ease}.left-side[_ngcontent-%COMP%]{flex:0 0 52%;max-width:52%;display:grid;grid-template-rows:minmax(0,1fr) auto;align-items:stretch;min-height:0;height:100%}.greeting-footer[_ngcontent-%COMP%]{align-self:stretch;padding-bottom:.5rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;max-width:32rem;text-align:left;line-height:1.05;text-wrap:balance}.right-side[_ngcontent-%COMP%]{width:36%;flex:0 0 36%;max-width:36%;min-width:0;max-height:100%;overflow:hidden;display:flex;align-items:stretch;justify-content:flex-start}.right-side-page-title[_ngcontent-%COMP%]{margin:0;width:100%;display:flex;justify-content:flex-start}.right-side-pager[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}.right-side-pager-btn[_ngcontent-%COMP%], .page-type-chip[_ngcontent-%COMP%]{height:2.25rem;box-sizing:border-box}.right-side-pager-btn[_ngcontent-%COMP%]{min-width:3.141594rem;padding:0 .4rem;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:#fff!important;background-color:var(--app-brand-navy-5)!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;border:1px solid var(--app-border-inverse)!important;border-radius:12px;transition:all .3s ease!important}.right-side-pager-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);background-color:var(--app-accent-blue-soft)!important;border-color:var(--app-border-inverse-strong)!important;box-shadow:0 4px 12px var(--app-shadow)!important}.right-side-pager-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.45}.right-side-pager-indicator[_ngcontent-%COMP%]{font-size:.75rem;color:var(--app-text-inverse);opacity:.9}.content.show[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);pointer-events:auto}.mobile-side-toggle[_ngcontent-%COMP%]{display:none}.mobile-side-toggle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;line-height:1rem}.mobile-side-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;letter-spacing:.02em}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1.5px;background:var(--app-gradient-accent);margin-inline:.5rem}.divider-horizontal[_ngcontent-%COMP%]{height:1.5px;width:90%;background:var(--app-gradient-primary);margin-block:1.5rem;margin-left:auto;margin-right:auto}.pill-group[_ngcontent-%COMP%]   .divider-horizontal[_ngcontent-%COMP%]:nth-of-type(2n){background:var(--app-gradient-primary-reverse)}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:nowrap;width:100%;min-width:0;min-height:100%;gap:1.25rem;overflow-x:hidden}.right-side-empty[_ngcontent-%COMP%]{margin:0;font-size:.8rem;color:var(--app-inverse-soft);background-color:var(--app-overlay-backdrop);border-radius:112px;padding:.22rem .55rem}.page-type-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;padding:0 .55rem;border-radius:112px;border:1px solid var(--app-border-inverse);background:var(--app-brand-navy-5);color:var(--app-text-inverse);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}.page-type-icon[_ngcontent-%COMP%]{font-size:1.414213rem;width:1.414213rem;height:1.414213rem;line-height:1.414213rem;color:var(--app-brand-navy-75)}.page-type-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;line-height:1;letter-spacing:.03em;text-transform:uppercase}.right-side[_ngcontent-%COMP%]   .pill-group[_ngcontent-%COMP%] > .divider-horizontal[_ngcontent-%COMP%]{margin-top:auto}.pill[_ngcontent-%COMP%]{max-width:100%;box-sizing:border-box;display:flex;align-items:center;--pill-accent: var(--app-brand-primary);color:var(--app-text-strong);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;background:color-mix(in srgb,var(--pill-accent) 30%,transparent);transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 50%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+3){--pill-accent: var(--app-brand-accent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+1){--pill-accent: var(--app-brand-primary)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(3n+2){--pill-accent: var(--app-brand-secondary)}.pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:0;overflow-wrap:anywhere}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem;flex-shrink:0}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;gap:1rem;margin-top:1.5rem;width:100%;max-width:min(16rem,100%);margin-inline:auto}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--app-text-muted-light)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--app-text-strong)}@media screen and (max-width:1024px){.home-legend[_ngcontent-%COMP%]{margin:85vh 1rem 1.5rem 1rem}.btn_menu_flotante[_ngcontent-%COMP%]{right:.5rem}.content[_ngcontent-%COMP%]{flex-direction:column;width:calc(100% - var(--home-right-offset));height:auto;margin-bottom:1rem}.content.show[_ngcontent-%COMP%]{width:calc(100% - var(--home-right-offset))}.mobile-side-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;align-self:center;border:1px solid var(--app-border-inverse);border-radius:999px;background:color-mix(in srgb,var(--app-text-strong) 30%,transparent);color:var(--app-text-inverse);padding:.35rem .75rem;margin-bottom:.75rem;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:100%}.content.mobile-show-left[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .content.mobile-show-left[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{display:none}.right-side[_ngcontent-%COMP%]{max-height:none;overflow:visible}.pill-group[_ngcontent-%COMP%]{min-height:0;gap:1rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:100%;text-align:center}}@media screen and (max-width:650px){main[_ngcontent-%COMP%]{height:auto;min-height:100vh;overflow:visible}.box-overlay[_ngcontent-%COMP%], .box-overlay.show[_ngcontent-%COMP%]{opacity:.5;pointer-events:auto}.home-legend[_ngcontent-%COMP%], .btn_menu_flotante[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%], .content.show[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);pointer-events:auto}.content[_ngcontent-%COMP%]{flex-direction:column;width:calc(100% - var(--home-right-offset));height:auto;margin-bottom:1rem;padding-top:2rem}.mobile-side-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;align-self:center;border:1px solid var(--app-border-inverse);border-radius:999px;background:color-mix(in srgb,var(--app-text-strong) 30%,transparent);color:var(--app-text-inverse);padding:.35rem .75rem;margin-bottom:.75rem;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.content.show[_ngcontent-%COMP%]{width:calc(100% - var(--home-right-offset))}.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:100%}.content.mobile-show-left[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .content.mobile-show-left[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .content.mobile-show-right[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{display:none}.right-side[_ngcontent-%COMP%]{max-height:none;overflow:visible}.pill-group[_ngcontent-%COMP%]{min-height:0;gap:1rem}.left-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:100%;text-align:center}.divider[_ngcontent-%COMP%]{height:1.5px;width:90%;background:var(--app-gradient-primary);margin-block:1.5rem;margin-left:auto;margin-right:auto}.right-side-pager[_ngcontent-%COMP%]{justify-content:center;flex-wrap:wrap;position:sticky;bottom:.5rem;border-radius:999px;border:1px solid var(--app-border-inverse);max-width:99%;margin-inline:auto;overflow:hidden;background-clip:padding-box;padding-block:.35rem;background:color-mix(in srgb,var(--app-text-inverse) 10%,transparent);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.greeting-footer-content[_ngcontent-%COMP%]{border-radius:22px;border:1px solid var(--app-border-inverse);overflow:hidden;background-clip:padding-box;padding:.75rem;background:color-mix(in srgb,var(--app-text-inverse) 10%,transparent);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}}']})};function td(n){n||(n=d(Nt));let i=new Xe(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(ne(i))}var Qa=class{_box;_destroyed=new O;_resizeSubject=new O;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Xe(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ae(e=>e.some(t=>t.target===i)),Vr({bufferSize:1,refCount:!0}),ne(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},nd=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=d(H);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Qa(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mh=["notch"],Ih=["matFormFieldNotchedOutline",""],Eh=["*"],id=["iconPrefixContainer"],od=["textPrefixContainer"],rd=["iconSuffixContainer"],ad=["textSuffixContainer"],Oh=["textField"],Ph=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Rh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Th(n,i){n&1&&w(0,"span",21)}function Ah(n,i){if(n&1&&(l(0,"label",20),V(1,1),M(2,Th,1,0,"span",21),c()),n&2){let e=v(2);b("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),D("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),I(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Dh(n,i){if(n&1&&M(0,Ah,3,5,"label",20),n&2){let e=v();I(e._hasFloatingLabel()?0:-1)}}function Fh(n,i){n&1&&w(0,"div",7)}function Lh(n,i){}function Nh(n,i){if(n&1&&pe(0,Lh,0,0,"ng-template",13),n&2){v(2);let e=tt(1);b("ngTemplateOutlet",e)}}function zh(n,i){if(n&1&&(l(0,"div",9),M(1,Nh,1,1,null,13),c()),n&2){let e=v();b("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),I(e._forceDisplayInfixLabel()?-1:1)}}function Bh(n,i){n&1&&(l(0,"div",10,2),V(2,2),c())}function jh(n,i){n&1&&(l(0,"div",11,3),V(2,3),c())}function Uh(n,i){}function Vh(n,i){if(n&1&&pe(0,Uh,0,0,"ng-template",13),n&2){v();let e=tt(1);b("ngTemplateOutlet",e)}}function Hh(n,i){n&1&&(l(0,"div",14,4),V(2,4),c())}function Gh(n,i){n&1&&(l(0,"div",15,5),V(2,5),c())}function $h(n,i){n&1&&w(0,"div",16)}function qh(n,i){n&1&&(l(0,"div",18),V(1,6),c())}function Wh(n,i){if(n&1&&(l(0,"mat-hint",22),p(1),c()),n&2){let e=v(2);b("id",e._hintLabelId),m(),T(e.hintLabel)}}function Yh(n,i){if(n&1&&(l(0,"div",19),M(1,Wh,2,2,"mat-hint",22),V(2,7),w(3,"div",23),V(4,8),c()),n&2){let e=v();m(),I(e.hintLabel?1:-1)}}var Cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["mat-label"]]})}return n})(),Zh=new P("MatError");var Ja=(()=>{class n{align="start";id=d(Me).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(We("id",o.id),D("align",null),E("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Kh=new P("MatPrefix");var Xh=new P("MatSuffix");var ud=new P("FloatingLabelParent"),sd=(()=>{class n{_elementRef=d(z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(nd);_ngZone=d(H);_parent=d(ud);_resizeSubscription=new Oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Qh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&E("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Qh(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ld="mdc-line-ripple--active",Mr="mdc-line-ripple--deactivating",cd=(()=>{class n{_elementRef=d(z);_cleanupTransitionEnd;constructor(){let e=d(H),t=d(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Mr),e.add(ld)}deactivate(){this._elementRef.nativeElement.classList.add(Mr)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(Mr);e.propertyName==="opacity"&&o&&t.remove(ld,Mr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),dd=(()=>{class n{_elementRef=d(z);_ngZone=d(H);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&Ue(Mh,5),t&2){let r;F(r=L())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&E("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ih,ngContentSelectors:Eh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(ge(),mt(0,"div",1),he(1,"div",2,0),V(3),ke(),mt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Zi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n})}return n})();var wn=new P("MatFormField"),Jh=new P("MAT_FORM_FIELD_DEFAULT_OPTIONS"),md="fill",ef="auto",pd="fixed",tf="translateY(-50%)",ci=(()=>{class n{_elementRef=d(z);_changeDetectorRef=d(Ie);_platform=d(oe);_idGenerator=d(Me);_ngZone=d(H);_defaults=d(Jh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ui("iconPrefixContainer");_textPrefixContainerSignal=ui("textPrefixContainer");_iconSuffixContainerSignal=ui("iconSuffixContainer");_textSuffixContainerSignal=ui("textSuffixContainer");_prefixSuffixContainers=ve(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Us(Cn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=At(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ef}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||md;this._appearanceSignal.set(t)}_appearanceSignal=x(md);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||pd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||pd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new O;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ae();constructor(){let e=this._defaults,t=d(pt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),xt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ve(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(De([void 0,void 0]),re(()=>[t.errorState,t.userAriaDescribedBy]),Ur(),ae(([[r,a],[s,u]])=>r!==s||a!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ne(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),$e(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Hs({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ve(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,$=`calc(${f} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${tf} translateX(${$}))`,Y=a+s+u+h;return[W,Y]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(As(r,o._labelChild,Cn,5),et(r,Zi,5)(r,Kh,5)(r,Xh,5)(r,Zh,5)(r,Ja,5)),t&2){$r();let a;F(a=L())&&(o._formFieldControl=a.first),F(a=L())&&(o._prefixChildren=a),F(a=L())&&(o._suffixChildren=a),F(a=L())&&(o._errorChildren=a),F(a=L())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(Ds(o._iconPrefixContainerSignal,id,5)(o._textPrefixContainerSignal,od,5)(o._iconSuffixContainerSignal,rd,5)(o._textSuffixContainerSignal,ad,5),Ue(Oh,5)(id,5)(od,5)(rd,5)(ad,5)(sd,5)(dd,5)(cd,5)),t&2){$r(4);let r;F(r=L())&&(o._textField=r.first),F(r=L())&&(o._iconPrefixContainer=r.first),F(r=L())&&(o._textPrefixContainer=r.first),F(r=L())&&(o._iconSuffixContainer=r.first),F(r=L())&&(o._textSuffixContainer=r.first),F(r=L())&&(o._floatingLabel=r.first),F(r=L())&&(o._notchedOutline=r.first),F(r=L())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&E("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Fe([{provide:wn,useExisting:n},{provide:ud,useExisting:n}])],ngContentSelectors:Rh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(ge(Ph),pe(0,Dh,1,1,"ng-template",null,0,Ls),l(2,"div",6,1),S("click",function(a){return o._control.onContainerClick(a)}),M(4,Fh,1,0,"div",7),l(5,"div",8),M(6,zh,2,2,"div",9),M(7,Bh,3,0,"div",10),M(8,jh,3,0,"div",11),l(9,"div",12),M(10,Vh,1,1,null,13),V(11),c(),M(12,Hh,3,0,"div",14),M(13,Gh,3,0,"div",15),c(),M(14,$h,1,0,"div",16),c(),l(15,"div",17),M(16,qh,2,0,"div",18)(17,Yh,5,1,"div",19),c()),t&2){let r;m(2),E("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),m(2),I(!o._hasOutline()&&!o._control.disabled?4:-1),m(2),I(o._hasOutline()?6:-1),m(),I(o._hasIconPrefix?7:-1),m(),I(o._hasTextPrefix?8:-1),m(2),I(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),m(2),I(o._hasTextSuffix?12:-1),m(),I(o._hasIconSuffix?13:-1),m(),I(o._hasOutline()?-1:14),m(),E("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();m(),I((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[sd,dd,Ys,cd,Ja],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[cc,ci,ie]})}return n})();var nf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),of={passive:!0},fd=(()=>{class n{_platform=d(oe);_ngZone=d(H);_renderer=d(Je).createRenderer(null,null);_styleLoader=d(Le);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ge;this._styleLoader.load(nf);let t=rt(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new O,a="cdk-text-field-autofilled",s=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,of)));return this._monitoredElements.set(t,{subject:r,unlisten:u}),r}stopMonitoring(e){let t=rt(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({})}return n})();var vd=new P("MAT_INPUT_VALUE_ACCESSOR");var Ki=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var di=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,o,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var rf=["button","checkbox","file","hidden","image","radio","range","reset","submit"],af=new P("MAT_INPUT_CONFIG"),bd=(()=>{class n{_elementRef=d(z);_platform=d(oe);ngControl=d(uo,{optional:!0,self:!0});_autofillMonitor=d(fd);_ngZone=d(H);_formField=d(wn,{optional:!0});_renderer=d(Se);_uid=d(Me).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(af,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new O;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=At(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(jt.required)??!1}set required(e){this._required=At(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&za().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=At(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>za().has(e));constructor(){let e=d(An,{optional:!0}),t=d(Dn,{optional:!0}),o=d(Ki),r=d(vd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?nn(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new di(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&xt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){rf.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&S("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(We("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),D("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),E("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},exportAs:["matInput"],features:[Fe([{provide:Zi,useExisting:n}]),je]})}return n})(),Ir=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Sn,Sn,gd,ie]})}return n})();var _d=[{id:1,title:"Fase 01 - Mejoras en HOME",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:7,title:"Fase 02 - Mejoras en componentes generales (topbar/header/footer y shell)",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:13,title:"Fase 03 - Auditoria y migracion de tokens de diseno (--app-*)",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:17,title:"Fase 04 - Refinamientos topbar/shell y pagina contact-us",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:24,title:"Fase 05 - Mejoras layouts, topbar y footer",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:29,title:"Fase 06 - Navegacion, topbar, footer y bookmarks",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:35,title:"Fase 07 - Reemplazo de curriculum-vitae con contenido de Home",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:37,title:"Fase 08 - Creacion de componentes de animacion y mejora FRONT",priority:"high",status:"in_review",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:46,title:"Fase 09 - Mejoras al mundo POSTS",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:53,title:"Fase 10 - Content tier y fuentes de datos estaticas",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:62,title:"Fase 00 - Agrupacion de issues sueltos",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:94,title:"Fase 11 - Crear componente/pagina recepcion sponsor, publico, validar confirmacion de pago",priority:"high",status:"in_progress",category:"feature",createdAt:"2026-09-09T00:00:00.000Z",tags:["riesgo-alto"]},{id:2,parentId:1,title:"Fix animacion de barras de timelapse_piramid en recarga/SSR: disparo del grow en cliente post-hidratacion (afterNextRender + Web Animations API); SSR a altura final",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:3,parentId:1,title:"Limpieza de CSS legacy con verificacion de uso: bloque #item1..#item7/.data y duplicados flotantes en timelapse_piramid.scss; reglas muertas en home.scss (#twitter, line-height .3em)",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:4,parentId:1,title:"Responsive y accesibilidad del Home: overflow horizontal, stacking movil, aria en decorativos, contraste",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:5,parentId:1,title:"Apariencia del Home: hero con avatar + name/title/short_desc + link web + CTA Cont\xE1ctame (sin telefonos)",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:6,parentId:1,title:"Actualizar specs del Home: home.spec.ts y timelapse_piramid.spec.ts",priority:"medium",status:"done",category:"tests",createdAt:"2026-08-16T00:00:00.000Z"},{id:78,parentId:1,title:"POC test-template: nuevo dise\xF1o Home cliente",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:79,parentId:1,title:"Tests de componentes del Home hasta est\xE1ndar deseable",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:80,parentId:1,title:"Mejorar apariencia/funcionalidad del Home p\xFAblico",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:83,parentId:1,title:"Traspaso a HOME: corregir animaci\xF3n de barras de timelapse_piramid en recarga/SSR (CSS keyframes)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:84,parentId:1,title:"Traspaso a HOME: limpieza de basura/redundancia en Home/home.scss",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:85,parentId:1,title:"Traspaso a HOME: responsive y accesibilidad del Home",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:8,parentId:7,title:"Branding en topbar: logo/inicial + app_name con link a /",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:9,parentId:7,title:"Menu movil en topbar (mat-menu): colapsar controles en pantallas chicas y desplegar items de LIST_MENU_APP con session activa (getMenuNavigationApp)",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:10,parentId:7,title:"Active state en topbar: routerLinkActive en Servicios y exact:true en el brand",priority:"low",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:11,parentId:7,title:"SEO: crear seo.service.ts (Title+Meta+NavigationEnd), eliminar app-mainhead (muerto), mover tags de <head> a index.html y quitar script de jQuery",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:12,parentId:7,title:"Footer: fix CSS position:bottom, simplificar toggle (solo clase .hidden) y rediseno del boton como pill etiquetado (oculto por defecto)",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:16,parentId:7,title:"Componente contact-us reutilizable: formulario de contacto extraido de eirl_services y usado en el Home (CTA Cont\xE1ctame)",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:14,parentId:13,title:"Migrar hardcodes a --app-*: footer.component.css (white hacia --app-text-on-accent), form-card-style.css, styles.css (#000 hacia --color-neutral-black); verificar tokens en los 4 temas y cerrar con ng test + build",priority:"medium",status:"done",category:"refactor",createdAt:"2026-08-16T00:00:00.000Z"},{id:18,parentId:17,title:"P\xE1gina p\xFAblica /public/contact-us: ruta, breadcrumb (\xEDcono mail), CTA Cont\xE1ctame a pesta\xF1a nueva y contact-us.spec.ts",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:19,parentId:17,title:"Breadcrumbs: separador entre nodos, chip .breadcrumbs-link e item activo neutro + borde de sesi\xF3n",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:20,parentId:17,title:"Men\xFAs mat-menu: hover/foco/activo en items y fondo del panel (styles.css global, v\xE1lido por template)",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:21,parentId:17,title:"Refinamiento topbar (pills): glass unificado, is-active por sesi\xF3n, template-switcher como pill y pills legibles",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:22,parentId:17,title:"Responsive topbar + layouts: barra derecha colapsa \u22641024px y padding-top 5rem/6.5rem (fix overlap)",priority:"low",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:23,parentId:17,title:"Tests: topbar.component.spec.ts (is-active por sesi\xF3n) y contact-us.spec.ts",priority:"medium",status:"done",category:"tests",createdAt:"2026-08-16T00:00:00.000Z"},{id:25,parentId:24,title:"T1: --app-background-page per-template",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:26,parentId:24,title:"T2: .session-layout sin background-color",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:27,parentId:24,title:"T3: Footer toggle button position:fixed superpone contenido",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:28,parentId:24,title:"T4: Footer .copyright font color no actualiza per-template",priority:"high",status:"done",category:"bugfix",createdAt:"2026-08-16T00:00:00.000Z"},{id:45,parentId:24,title:"Reajustar FOOTER y estilos de layouts",priority:"low",status:"backlog",category:"design",createdAt:"2026-09-01T00:00:00.000Z"},{id:65,parentId:24,title:"Validar temas legales de cookies e implementar confirmaci\xF3n de cookies",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:70,parentId:24,title:"Unificar barra superior en TopbarComponent compartido (guest/session)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:73,parentId:24,title:"Tokens de tama\xF1o --app-pills-* y --app-icon-size en variables.css",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:76,parentId:24,title:"Tests de topbar/template-switcher y layouts adelgazados",priority:"medium",status:"in_review",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:93,parentId:24,title:"Mejora de Topbar",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:30,parentId:29,title:"T1: ItemNavigation.secure - atributo booleano en interface",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:31,parentId:29,title:"T2: Topbar derecho - agregar link Contact Us",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:32,parentId:29,title:"T3: Topbar izquierdo mat-menu - paginas completas",priority:"high",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:33,parentId:29,title:"T4: Footer - indicador estado cookies",priority:"medium",status:"done",category:"feature",createdAt:"2026-08-16T00:00:00.000Z"},{id:34,parentId:29,title:"T5: Bookmarks - redise\xF1o con tokens --app-*",priority:"medium",status:"backlog",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:74,parentId:29,title:"breadcrumbs.component.spec.ts (iconos, dedupe, estado activo, normalizeUrl)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:36,parentId:35,title:"Reemplazar contenido (ts/html/css) de CurriculumVitaeComponent con el dise\xF1o del Home y crear ruta p\xFAblica /resume",priority:"medium",status:"done",category:"design",createdAt:"2026-08-16T00:00:00.000Z"},{id:38,parentId:37,title:"Webcomponent base plane-grid: plano cuadriculado CSS Grid con celdas diferenciables",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:39,parentId:37,title:"Webcomponent lienzo: area blanca dentro del plano como espacio de diseno",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:40,parentId:37,title:"Webcomponent animacion beach (playa): plano estatico sobre lienzo, base dimension+plano",priority:"high",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:41,parentId:37,title:"POC secure/animationA: pagina que consume el webcomponent beach",priority:"medium",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:42,parentId:37,title:"Webcomponent animacion logo + POC secure/animationB",priority:"medium",status:"in_progress",category:"design",createdAt:"2026-08-28T00:00:00.000Z"},{id:43,parentId:37,title:"Modelo 3D: profundidad, perspectiva y orbita sobre el plano (Three.js)",priority:"low",status:"backlog",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:44,parentId:37,title:"Juego propio tipo Arkanoid (Canvas 2D)",priority:"low",status:"backlog",category:"feature",createdAt:"2026-08-28T00:00:00.000Z"},{id:47,parentId:46,title:"PostsHomeComponent: reemplazar el array est\xE1tico posts por una lista din\xE1mica derivada de los posts Markdown (posts/markdown/*.md, con import.meta.glob +?raw) m\xE1s los posts especiales por componente (el-richard-yutu)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:48,parentId:46,title:"Sistema de autor\xEDa Markdown para posts: directorio posts/markdown con archivos .md (front-matter: title, date, tags, kind, slug) que soporten elementos variados (im\xE1genes, videos, links); registro expl\xEDcito v\xEDa imports est\xE1ticos en PostsService (loader .md a text) por compatibilidad con SSR",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:49,parentId:46,title:"Template de renderizado de post: componente /posts/:slug que parsea el .md con marked, sanitiza el HTML (DomSanitizer) y renderiza con estructura/estilo consistente (metadatos + body con img/video/link)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:50,parentId:46,title:"Rutas de posts: integrar posts/markdown v\xEDa :slug y conservar el post especial el-richard-yutu como ruta fija de componente (convivencia Markdown + componente)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-04T00:00:00.000Z"},{id:51,parentId:46,title:"Migrar las publicaciones example (hoy est\xE1ticas en posts.ts: ecos-codigo, mapa-aprendizaje, micro-habitos) a archivos .md en posts/markdown y enlazarlas; crear posts/markdown/richard-poem-wine como versi\xF3n Markdown del post el-richard-yutu (video via HTML/iframe) para comparar ambos enfoques",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-04T00:00:00.000Z"},{id:52,parentId:46,title:"Tests de PostsHomeComponent y del template de post: Markdown \u2192 render, ruta por slug, y coexistencia con el post especial el-richard-yutu",priority:"low",status:"done",category:"tests",createdAt:"2026-09-04T00:00:00.000Z"},{id:54,parentId:53,title:"Migrar posts Markdown a core/content/posts/*.md + PostsService (repositorio dinamico), registrados via imports estaticos (SSR)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:55,parentId:53,title:"Migrar CV a core/content/profile/cv-personal.json + CurriculumVitaeService (hidratacion ISO\u2192Date) y ruta publica /resume",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:56,parentId:53,title:"Migrar TODO_TASKS_V3 a core/content/todo/todos.json + TodoService (fuente estatica que puede migrar de origen)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:57,parentId:53,title:"Migrar skills a core/content/profile/skills.json + SkillsService (datos de CV/Resume)",priority:"low",status:"done",category:"refactor",createdAt:"2026-09-08T00:00:00.000Z"},{id:58,parentId:53,title:"Criterio content: solo fuentes de datos estaticas (no copy de UI); STATIC_TEXTS se mantiene en StaticsAppService",priority:"low",status:"done",category:"design",createdAt:"2026-09-08T00:00:00.000Z"},{id:59,parentId:53,title:"Menu topbar agrupado en secciones Publico/Seguro (getters por visible+secure, headers + divisores)",priority:"low",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:60,parentId:53,title:"Topbar derecho: agregar pill Resumen (/public/resume) entre Servicios y Contacto",priority:"low",status:"done",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:61,parentId:53,title:"Traspaso real de TODO a GitHub (proyecto/issues); hoy github-api simula el plan localmente",priority:"low",status:"backlog",category:"feature",createdAt:"2026-09-08T00:00:00.000Z"},{id:15,parentId:62,title:"Traspasar tareas de TODO_TASKS_V3 a GitHub segun corresponda",priority:"low",status:"done",category:"config",createdAt:"2026-08-16T00:00:00.000Z"},{id:63,parentId:62,title:"Complementar ToDoTask.ts con las tareas pendientes",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:64,parentId:62,title:"Corregir gaps CSS: --inter-font y --color-gray-500 no definidos",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:66,parentId:62,title:"Migrar colores de los componentes de la app a variables --app-* (rest-api, gugol-analitycs, statics-bookmarks-crud, login, desktop, form-card-style, todo-task, el-richard-yutu, posts, eirl_services, session-layout, cookie-consent, breadcrumbs, footer, timelapse_piramid, yutu-player, home, guest-layout)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:67,parentId:62,title:"Migrar colores de los 4 temas a variables --app-* (darkdev/daydev/retrodev/pasteldev)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:68,parentId:62,title:"Migrar colores de variables.css / template default a variables --app-*",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:69,parentId:62,title:"Eliminar bloques legacy (html, body) y tokens muertos en variables.css",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:71,parentId:62,title:"Corregir overlap del contenido con pills fijos (desktop/responsive)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:72,parentId:62,title:"Borde de estado conectado/desconectado en barra superior (pill modo + item activo breadcrumbs)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:75,parentId:62,title:"Evaluar barra superior en p\xE1gina /cookies (queda fuera de todo layout)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:77,parentId:62,title:"Mejoras en la p\xE1gina Todo Task",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:81,parentId:65,title:"Auditar almacenamiento/cookies usados (localStorage sesi\xF3n+template, YouTube API, GA)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:82,parentId:65,title:"Implementar banner global + popup resumen + p\xE1gina /cookies + gating de terceros",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:86,parentId:77,title:"Agregar colapsar/expandir subtareas: click en el t\xEDtulo de la tarea expande sus subtareas; un nuevo click colapsa",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:95,parentId:77,title:"Mejoras en el filtro de estado de secure/github-tasks (multi-estado)",priority:"high",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:87,parentId:78,title:"Crear webcomponent timelapse_piramid + integrarlo en test-template",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:88,parentId:78,title:"Corregir animaci\xF3n de barras en recarga/SSR (CSS keyframes)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:89,parentId:78,title:"Migrar colores de test-template a variables --app-* (template default)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:90,parentId:78,title:"Limpieza de basura en test-template (IDs duplicados, reglas muertas, HTML inv\xE1lido)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:91,parentId:78,title:"Concepto CssTemplate/TEMPLATES + asignaci\xF3n per-usuario (template_id en PartnersEnv)",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:92,parentId:78,title:"Responsive y accesibilidad de test-template",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-09T00:00:00.000Z"},{id:96,parentId:1,title:"Update de contenido de HOME",priority:"medium",status:"done",category:"feature",createdAt:"2026-09-18T00:00:00.000Z"}];var Er=class n{getTasks(){return _d.map(i=>g({},i))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var Or=class n{constructor(i){this.todoService=i}todoService;getTasks(i=!0){return i?A(this.fromToDo(this.todoService.getTasks())):A(this.buildEmpty())}fromToDo(i){let e=i.filter(o=>o.parentId===void 0||o.parentId===null),t=o=>i.filter(r=>r.parentId===o).map(r=>this.toGithubTask(r,t(r.id)));return{project:{number:0,title:"Plan local (todos.json)",url:""},repo:"droguier_v66595",generatedAt:new Date().toISOString(),tasks:e.map(o=>this.toGithubTask(o,t(o.id)))}}toGithubTask(i,e){return{number:i.id,title:i.title,labels:[i.category],state:i.status,url:"",priority:i.priority,subtasks:e}}buildEmpty(){return{project:{number:0,title:"Plan local (todos.json)",url:""},repo:"droguier_v66595",generatedAt:new Date().toISOString(),tasks:[]}}static \u0275fac=function(e){return new(e||n)(we(Er))};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};var yd=(()=>{class n{_animationsDisabled=Ae();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&E("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var df=["text"],mf=[[["mat-icon"]],"*"],pf=["mat-icon","*"];function uf(n,i){if(n&1&&w(0,"mat-pseudo-checkbox",1),n&2){let e=v();b("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function hf(n,i){if(n&1&&w(0,"mat-pseudo-checkbox",3),n&2){let e=v();b("disabled",e.disabled)}}function ff(n,i){if(n&1&&(l(0,"span",4),p(1),c()),n&2){let e=v();m(),te("(",e.group.label,")")}}var es=new P("MAT_OPTION_PARENT_COMPONENT"),ts=new P("MatOptgroup");var Xi=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},mi=(()=>{class n{_element=d(z);_changeDetectorRef=d(Ie);_parent=d(es,{optional:!0});group=d(ts,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Me).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=x(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new X;_text;_stateChanges=new O;constructor(){let e=d(Le);e.load(Dt),e.load(mo),this._signalDisableRipple=!!this._parent&&nn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ke(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Xi(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&Ue(df,7),t&2){let r;F(r=L())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&S("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(We("id",o.id),D("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),E("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",B]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:pf,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(ge(mf),M(0,uf,1,2,"mat-pseudo-checkbox",1),V(1),l(2,"span",2,0),V(4,1),c(),M(5,hf,1,1,"mat-pseudo-checkbox",3),M(6,ff,2,1,"span",4),w(7,"div",5)),t&2&&(I(o.multiple?0:-1),m(5),I(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),m(),I(o.group&&o.group._inert?6:-1),m(),b("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[yd,Jo],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function xd(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function Cd(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var wd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[ie]})}return n})();var ns=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Wt,wd,mi,ie]})}return n})();var gf=["panel"],vf=["*"];function bf(n,i){if(n&1&&(he(0,"div",1,0),V(2),ke()),n&2){let e=i.id,t=v();Ye(t._classList),E("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),We("id",t.id),D("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var is=class{source;option;constructor(i,e){this.source=i,this.option=e}},Sd=new P("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),kd=(()=>{class n{_changeDetectorRef=d(Ie);_elementRef=d(z);_defaults=d(Sd);_animationsDisabled=Ae();_activeOptionChanges=Oe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new X;opened=new X;closed=new X;optionActivated=new X;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=d(Me).getId("mat-autocomplete-");inertGroups;constructor(){let e=d(oe);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Fi(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new is(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,o,r){if(t&1&&et(r,mi,5)(r,ts,5),t&2){let a;F(a=L())&&(o.options=a),F(a=L())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&Ue(tn,7)(gf,5),t&2){let r;F(r=L())&&(o.template=r.first),F(r=L())&&(o.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",B],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",B],requireSelection:[2,"requireSelection","requireSelection",B],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",B],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Fe([{provide:es,useExisting:n}])],ngContentSelectors:vf,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,o){t&1&&(ge(),lo(0,bf,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return n})();var _f={provide:Kr,useExisting:ro(()=>os),multi:!0};var yf=new P("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(de);return()=>ti(n)}}),os=(()=>{class n{_environmentInjector=d(qe);_element=d(z);_injector=d(de);_viewContainerRef=d(Et);_zone=d(H);_changeDetectorRef=d(Ie);_dir=d(pt,{optional:!0});_formField=d(wn,{optional:!0,host:!0});_viewportRuler=d(Zt);_scrollStrategy=d(yf);_renderer=d(Se);_animationsDisabled=Ae();_defaults=d(Sd,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new O;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Oe.EMPTY;_breakpointObserver=d(Ta);_handsetLandscapeSubscription=Oe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new O;_overlayPanelClass=Tt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Ko(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return $e(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ae(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ae(()=>this._overlayAttached)):A()).pipe(re(e=>e instanceof Xi?e:null))}optionSelections=kn(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(De(e),Ce(()=>$e(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ce(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Xe(e=>{let t=r=>{let a=ze(r),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,u=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!u||!u.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(r)},o=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{o.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,o=t.keyCode,r=Ke(t);if(o===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&o===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=o===38||o===40;o===9||s&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(a=>a.selected);if(r){let a=this._getDisplayValue(r.value);o!==a&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Oa()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Xe(o=>{ct(()=>{o.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Be(()=>this._positionStrategy.reapplyLastPosition()),vs(0))??A();return $e(e,t).pipe(Ce(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),at(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;La(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Yt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=ii(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(uc.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Ke(e)||e.keyCode===38&&Ke(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Kt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ni(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],a;this.position==="above"?a=r:this.position==="below"?a=t:a=[...t,...r],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,o=xd(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let a=r._getHostElement(),s=Cd(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&Ko(this._trackedModal,"aria-owns",t),La(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Ko(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&S("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(a){return o._handleInput(a)})("keydown",function(a){return o._handleKeydown(a)})("click",function(){return o._handleClick()}),t&2&&D("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen||o.autocomplete==null?null:o.autocomplete.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",B]},exportAs:["matAutocompleteTrigger"],features:[Fe([_f]),je]})}return n})(),Md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({imports:[Wi,ns,ei,ns,ie]})}return n})();var wf=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Sf=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function kf(n,i){n&1&&(l(0,"span",3),V(1,1),c())}function Mf(n,i){n&1&&(l(0,"span",6),V(1,2),c())}var If=`.mdc-evolution-chip,
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
`,Ef=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Of=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Pf(n,i){n&1&&w(0,"span",0)}function Rf(n,i){n&1&&(l(0,"span",1),V(1),c())}function Tf(n,i){n&1&&(l(0,"span",3),V(1,1),c())}function Af(n,i){n&1&&V(0,2)}function Df(n,i){n&1&&w(0,"span",7)}function Ff(n,i){if(n&1&&M(0,Af,1,0)(1,Df,1,0,"span",7),n&2){let e=v();I(e.contentEditInput?0:1)}}function Lf(n,i){n&1&&V(0,3)}function Nf(n,i){n&1&&(l(0,"span",6),V(1,4),c())}var Rd=["*"],zf=`.mat-mdc-chip-set {
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
`,Td=new P("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Id=new P("MatChipAvatar"),Ed=new P("MatChipTrailingIcon"),Od=new P("MatChipEdit"),as=new P("MatChipRemove"),cs=new P("MatChip"),Ad=(()=>{class n{_elementRef=d(z);_parentChip=d(cs);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(Le).load(Dt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,o){t&2&&(D("disabled",o._getDisabledAttribute())("aria-disabled",o.disabled),E("mdc-evolution-chip__action--primary",o._isPrimary)("mdc-evolution-chip__action--secondary",!o._isPrimary)("mdc-evolution-chip__action--trailing",!o._isPrimary&&!o._isLeading))},inputs:{disabled:[2,"disabled","disabled",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:hi(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),ds=(()=>{class n extends Ad{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275dir=G({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,o){t&1&&S("click",function(a){return o._handleClick(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(D("tabindex",o._getTabindex()),E("mdc-evolution-chip__action--presentational",!1))},features:[dt]})}return n})();var Dd=(()=>{class n extends ds{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=It(n)))(o||n)}})();static \u0275dir=G({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,o){t&2&&D("aria-hidden",null)},features:[Fe([{provide:as,useExisting:n}]),dt]})}return n})(),ss=(()=>{class n{_changeDetectorRef=d(Ie);_elementRef=d(z);_tagName=d(js);_ngZone=d(H);_focusMonitor=d($t);_globalRippleOptions=d(zi,{optional:!0});_document=d(me);_onFocus=new O;_onBlur=new O;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ae();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(Me).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new X;destroyed=new X;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(tr);_injector=d(de);constructor(){let e=d(Le);e.load(Dt),e.load(mo),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=$e(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let o=t._elementRef.nativeElement;return o===e||o.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,o,r){if(t&1&&et(r,Id,5)(r,Od,5)(r,Ed,5)(r,as,5)(r,Id,5)(r,Ed,5)(r,Od,5)(r,as,5),t&2){let a;F(a=L())&&(o.leadingIcon=a.first),F(a=L())&&(o.editIcon=a.first),F(a=L())&&(o.trailingIcon=a.first),F(a=L())&&(o.removeIcon=a.first),F(a=L())&&(o._allLeadingIcons=a),F(a=L())&&(o._allTrailingIcons=a),F(a=L())&&(o._allEditIcons=a),F(a=L())&&(o._allRemoveIcons=a)}},viewQuery:function(t,o){if(t&1&&Ue(ds,5),t&2){let r;F(r=L())&&(o.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,o){t&1&&S("keydown",function(a){return o._handleKeydown(a)}),t&2&&(We("id",o.id),D("role",o.role)("aria-label",o.ariaLabel),Ye("mat-"+(o.color||"primary")),E("mdc-evolution-chip",!o._isBasicChip)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-basic-chip",o._isBasicChip)("mat-mdc-standard-chip",!o._isBasicChip)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon())("_mat-animation-noopable",o._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",B],highlighted:[2,"highlighted","highlighted",B],disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Fe([{provide:cs,useExisting:n}])],ngContentSelectors:Sf,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,o){t&1&&(ge(wf),w(0,"span",0),l(1,"span",1)(2,"span",2),M(3,kf,2,0,"span",3),l(4,"span",4),V(5),w(6,"span",5),c()()(),M(7,Mf,2,0,"span",6)),t&2&&(m(3),I(o.leadingIcon?3:-1),m(4),I(o._hasTrailingIcon()?7:-1))},dependencies:[Ad],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return n})();var rs=(()=>{class n{_elementRef=d(z);_document=d(me);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),ms=(()=>{class n extends ss{basicChipAttrName="mat-basic-chip-row";_renderer=d(Se);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new X;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(ne(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,ct(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,o,r){if(t&1&&et(r,rs,5),t&2){let a;F(a=L())&&(o.contentEditInput=a.first)}},viewQuery:function(t,o){if(t&1&&Ue(rs,5),t&2){let r;F(r=L())&&(o.defaultEditInput=r.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,o){t&1&&S("focus",function(){return o._handleFocus()})("click",function(a){return o._hasInteractiveActions()?o._handleClick(a):null})("dblclick",function(a){return o._handleDoubleclick(a)}),t&2&&(We("id",o.id),D("tabindex",o.disabled?null:-1)("aria-label",null)("aria-description",null)("role",o.role),E("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-chip-editing",o._isEditing)("mat-mdc-chip-editable",o.editable)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-leading-action",o._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[Fe([{provide:ss,useExisting:n},{provide:cs,useExisting:n}]),dt],ngContentSelectors:Of,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,o){t&1&&(ge(Ef),M(0,Pf,1,0,"span",0),M(1,Rf,2,0,"span",1),l(2,"span",2),M(3,Tf,2,0,"span",3),l(4,"span",4),M(5,Ff,2,1)(6,Lf,1,0),w(7,"span",5),c()(),M(8,Nf,2,0,"span",6)),t&2&&(I(o._isEditing?-1:0),m(),I(o._hasLeadingActionIcon()?1:-1),m(),b("disabled",o.disabled),D("aria-description",o.ariaDescription)("aria-label",o.ariaLabel),m(),I(o.leadingIcon?3:-1),m(2),I(o._isEditing?5:6),m(3),I(o._hasTrailingIcon()?8:-1))},dependencies:[ds,rs],styles:[If],encapsulation:2,changeDetection:0})}return n})(),Bf=(()=>{class n{_elementRef=d(z);_changeDetectorRef=d(Ie);_dir=d(pt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new O;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new en;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(De(null),Ce(()=>$e(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(De(this._chips)).subscribe(e=>{let t=[];e.forEach(o=>o._getActions().forEach(r=>t.push(r))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new vn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(ne(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(ne(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(De(null),ne(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(ne(this._destroyed)).subscribe(e=>{let o=this._chips.toArray().indexOf(e.chip),r=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=r||a;this._isValidIndex(o)&&s&&(this._lastDestroyedFocusedChipIndex=o)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,o,r){if(t&1&&et(r,ss,5),t&2){let a;F(a=L())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,o){t&1&&S("keydown",function(a){return o._handleKeydown(a)}),t&2&&D("role",o.role)},inputs:{disabled:[2,"disabled","disabled",B],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:hi(e)]},ngContentSelectors:Rd,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(ge(),he(0,"div",0),V(1),ke())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return n})();var ls=class{source;value;constructor(i,e){this.source=i,this.value=e}},Fd=(()=>{class n extends Bf{ngControl=d(uo,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=d(Me).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(jt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new X;valueChange=new X;_chips=void 0;stateChanges=new O;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=d(An,{optional:!0}),t=d(Dn,{optional:!0}),o=d(Ki);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new di(o,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(ne(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),$e(this.chipFocusChanges,this._chips.changes).pipe(ne(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,o=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&Ke(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),o?this._keyManager.setActiveItem(o):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&o){let r=this._chipActions.filter(u=>u._isPrimary===o._isPrimary&&!this._skipPredicate(u)),a=r.indexOf(o),s=e.keyCode===38?-1:1;e.preventDefault(),a>-1&&this._isValidIndex(a+s)&&this._keyManager.setActiveItem(r[a+s])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new ls(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,o,r){if(t&1&&et(r,ms,5),t&2){let a;F(a=L())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,o){t&1&&S("focus",function(){return o.focus()})("blur",function(){return o._blur()}),t&2&&(D("role",o.role)("tabindex",o.disabled||o._chips&&o._chips.length===0?-1:o.tabIndex)("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState),E("mat-mdc-chip-list-disabled",o.disabled)("mat-mdc-chip-list-invalid",o.errorState)("mat-mdc-chip-list-required",o.required))},inputs:{disabled:[2,"disabled","disabled",B],placeholder:"placeholder",required:[2,"required","required",B],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[Fe([{provide:Zi,useExisting:n}]),dt],ngContentSelectors:Rd,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(ge(),he(0,"div",0),V(1),ke())},styles:[zf],encapsulation:2,changeDetection:0})}return n})(),Ld=(()=>{class n{_elementRef=d(z);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new X;placeholder="";id=d(Me).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=d(Td),t=d(wn,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let o,r;typeof t=="number"?(o=t,r=null):(o=t.keyCode,r=t.modifiers);let a=r?.length?Ke(e,...r):!Ke(e);if(o===e.keyCode&&a)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=G({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,o){t&1&&S("keydown",function(a){return o._keydown(a)})("blur",function(){return o._blur()})("focus",function(){return o._focus()})("input",function(){return o._onInput()}),t&2&&(We("id",o.id),D("disabled",o.disabled&&!o.disabledInteractive?"":null)("placeholder",o.placeholder||null)("aria-invalid",o._chipGrid&&o._chipGrid.ngControl?o._chipGrid.ngControl.invalid:null)("aria-required",o._chipGrid&&o._chipGrid.required||null)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("readonly",o._getReadonlyAttribute())("required",o._chipGrid&&o._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",B],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",B],readonly:[2,"readonly","readonly",B],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",B]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[je]})}return n})();var Nd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=K({type:n});static \u0275inj=Z({providers:[Ki,{provide:Td,useValue:{separatorKeyCodes:[13]}}],imports:[Wt,ie]})}return n})();var zd=(n,i)=>i.value;function Uf(n,i){if(n&1){let e=fe();l(0,"mat-chip-row",9),S("removed",function(){let o=j(e).$implicit,r=v();return U(r.remove(o.value))}),p(1),l(2,"button",10)(3,"mat-icon"),p(4,"cancel"),c()()()}if(n&2){let e=i.$implicit;b("removable",!0),D("aria-label",e.label),m(),te(" ",e.label," "),m(),D("aria-label","Quitar "+e.label)}}function Vf(n,i){if(n&1&&(l(0,"mat-option",7),p(1),c()),n&2){let e=i.$implicit;b("value",e.value),m(),T(e.label)}}function Hf(n,i){n&1&&(l(0,"mat-option",8),p(1,"Sin opciones para agregar"),c())}var Pr=class n{options=ce([]);label=ce("Filtrar");placeholder=ce("");fieldClass=ce("form-field form-field--third");panelClass=ce("gh-autocomplete-panel");value=Vs([]);search=x("");selectedOptions=ve(()=>this.value().map(i=>this.options().find(e=>e.value===i)).filter(i=>!!i));selectedValues=ve(()=>new Set(this.value()));filteredOptions=ve(()=>{let i=this.search().trim().toLowerCase(),e=this.selectedValues(),t=this.options().filter(o=>!e.has(o.value));return i===""?t:t.filter(o=>o.label.toLowerCase().includes(i)||o.value.toLowerCase().includes(i))});onFocus(){this.search.set("")}onSearch(i){this.search.set(i.target.value)}onSelected(i){this.select(i.option.value),this.search.set("")}onTokenEnd(i){let e=(i.value??"").trim();if(i.chipInput.clear(),this.search.set(""),e==="")return;let t=this.options().find(o=>o.label.toLowerCase()===e.toLowerCase()||o.value.toLowerCase()===e.toLowerCase());t&&this.select(t.value)}remove(i){this.value.update(e=>e.filter(t=>t!==i))}select(i){this.selectedValues().has(i)||this.value.update(e=>[...e,i])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-multiselect-list"]],inputs:{options:[1,"options"],label:[1,"label"],placeholder:[1,"placeholder"],fieldClass:[1,"fieldClass"],panelClass:[1,"panelClass"],value:[1,"value"]},outputs:{value:"valueChange"},decls:14,vars:11,consts:[["chipGrid",""],["inputRef",""],["auto","matAutocomplete"],["appearance","fill","floatLabel","always"],[3,"removable"],["type","text",3,"focus","input","matChipInputTokenEnd","value","placeholder","matChipInputFor","matAutocomplete"],[3,"optionSelected"],[3,"value"],["disabled",""],[3,"removed","removable"],["matChipRemove",""]],template:function(e,t){if(e&1&&(l(0,"mat-form-field",3)(1,"mat-label"),p(2),c(),l(3,"mat-chip-grid",null,0),se(5,Uf,5,4,"mat-chip-row",4,zd),l(7,"input",5,1),S("focus",function(){return t.onFocus()})("input",function(r){return t.onSearch(r)})("matChipInputTokenEnd",function(r){return t.onTokenEnd(r)}),c()(),l(9,"mat-autocomplete",6,2),S("optionSelected",function(r){return t.onSelected(r)}),se(11,Vf,2,2,"mat-option",7,zd),M(13,Hf,2,0,"mat-option",8),c()()),e&2){let o=tt(4),r=tt(10);Ye(t.fieldClass()),m(2),T(t.label()),m(),D("aria-label",t.label()),m(2),le(t.selectedOptions()),m(2),b("value",t.search())("placeholder",t.value().length>0?"":t.placeholder())("matChipInputFor",o)("matAutocomplete",r),m(2),Ye(t.panelClass()),m(2),le(t.filteredOptions()),m(2),I(t.filteredOptions().length===0?13:-1)}},dependencies:[Sn,ci,Cn,Ir,Md,kd,mi,os,Nd,Fd,Ld,Dd,ms,Tn,ut],styles:["[_nghost-%COMP%]{display:block}  .mat-mdc-form-field-subscript-wrapper{display:none}  .mat-mdc-chip-input{flex:1 1 auto;min-width:7rem}"]})};var ps=[{value:"open",label:"Open"},{value:"closed",label:"Closed"},{value:"pending",label:"Pending"},{value:"in_progress",label:"In progress"},{value:"done",label:"Done"},{value:"in_review",label:"In review"},{value:"backlog",label:"Backlog"},{value:"blocked",label:"Blocked"},{value:"cancelled",label:"Cancelled"}],Bd=["feature","refactor","bugfix","design","tests","infra","config"];var Gf=(n,i)=>i.label,$f=(n,i)=>i.task.number;function qf(n,i){if(n&1&&p(0),n&2){let e=v().$implicit;qr(" \xB7 ",e.count," ",e.label.toLowerCase()," ")}}function Wf(n,i){if(n&1&&M(0,qf,1,2),n&2){let e=i.$implicit;I(e.count>0?0:-1)}}function Yf(n,i){if(n&1&&(l(0,"span",2),p(1),se(2,Wf,1,1,null,null,Gf),c()),n&2){let e=v();m(),qr("",i.project.title," \xB7 ",e.totalCount()," tasks "),m(),le(e.stateCounts())}}function Zf(n,i){n&1&&(l(0,"div",4),p(1,"Cargando tareas\u2026"),c())}function Kf(n,i){n&1&&(l(0,"div",5),p(1),c()),n&2&&(m(),T(i))}function Xf(n,i){if(n&1){let e=fe();l(0,"div",12)(1,"mat-form-field",16)(2,"mat-label"),p(3,"Nombre"),c(),l(4,"input",17),S("input",function(o){j(e);let r=v(2);return U(r.onFilterText(o))}),c()(),l(5,"app-multiselect-list",18),S("valueChange",function(o){j(e);let r=v(2);return U(r.setStates(o))}),c(),l(6,"button",19),S("click",function(){j(e);let o=v(2);return U(o.clearFilters())}),p(7,"Limpiar"),c()()}if(n&2){let e=v(2);D("aria-hidden",!e.filtersExpanded()),m(4),b("value",e.filterText()),D("maxlength",e.titleMaxLength),m(),b("options",e.stateOptions)("value",e.selectedStates())}}function Qf(n,i){if(n&1&&(l(0,"span",29),p(1,"\u25B8"),c()),n&2){let e=v().$implicit,t=v(2);E("is-expanded",t.expandedIds().has(e.task.number))}}function Jf(n,i){if(n&1&&(l(0,"span",27),p(1),c()),n&2){let e=v().$implicit;m(),T(e.task.priority)}}function eg(n,i){if(n&1&&(l(0,"span"),p(1),c()),n&2){let e=i.$implicit,t=v(3);Ye(Wr("gh-badge gh-badge--label ",t.categoryClass(e))),m(),T(e)}}function tg(n,i){if(n&1){let e=fe();l(0,"li",20)(1,"a",21),p(2),c(),l(3,"div",22)(4,"div",23)(5,"h3",24),S("click",function(){let o=j(e).$implicit,r=v(2);return U(o.hasSubtasks&&r.toggleExpand(o.task.number))}),M(6,Qf,2,2,"span",25),p(7),c()(),l(8,"div",26),M(9,Jf,2,1,"span",27),se(10,eg,2,4,"span",28,In),c()(),l(12,"span"),p(13),c()()}if(n&2){let e=i.$implicit,t=v(2);Ot("--depth",e.depth),E("gh-item--child",e.depth>0),m(),b("href",e.task.url,zt)("title","Abrir issue #"+e.task.number),m(),te("#",e.task.number),m(3),E("gh-title--expandable",e.hasSubtasks),D("aria-expanded",e.hasSubtasks?t.expandedIds().has(e.task.number):null),m(),I(e.hasSubtasks?6:-1),m(),te(" ",e.task.title," "),m(2),I(e.task.priority?9:-1),m(),le(e.task.labels),m(2),Ye(Wr("gh-state gh-state--",e.task.state)),m(),T(e.task.state)}}function ng(n,i){n&1&&(l(0,"li",15),p(1,"Sin tareas que coincidan con el filtro."),c())}function ig(n,i){if(n&1){let e=fe();l(0,"section",7)(1,"header",8)(2,"button",9),S("click",function(){j(e);let o=v();return U(o.toggleFilters())}),l(3,"span",10),p(4,"\u25B8"),c(),l(5,"span",11),p(6,"Filtro"),c()()(),M(7,Xf,8,5,"div",12),c(),l(8,"ul",13),se(9,tg,14,17,"li",14,$f,!1,ng,2,0,"li",15),c()}if(n&2){let e=v();m(2),D("aria-expanded",e.filtersExpanded())("aria-controls","gh-filter-row"),m(),E("is-expanded",e.filtersExpanded()),m(4),I(e.filtersExpanded()?7:-1),m(2),le(e.rows())}}function og(n,i){n&1&&(l(0,"div",6),p(1,"Sin tareas para mostrar."),c())}var rg=150,Rr=class n{githubApi=d(Or);platformId=d(lt);destroyRef=d(Nt);data=x(null);loading=x(!0);error=x(null);expandedIds=x(new Set);filterText=x("");filtersExpanded=x(!1);selectedStates=x([]);titleMaxLength=rg;stateOptions=ps;categoryColorClasses=new Set(Bd.map(i=>`gh-badge--label-${i}`));categoryClass(i){let e=`gh-badge--label-${i.toLowerCase()}`;return this.categoryColorClasses.has(e)?e:"gh-badge--label"}rows=ve(()=>{let i=this.data();if(!i)return[];let e=this.filterText().toLowerCase().trim(),t=this.selectedStates(),o=e!==""||t.length>0;return this.collectRows(i.tasks,e,t,o,this.expandedIds())});counts=ve(()=>this.aggregateCounts(this.data()?.tasks??[]));totalCount=ve(()=>this.counts().total);stateCounts=ve(()=>ps.map(i=>({label:i.label,count:this.counts().byState[i.value]})));constructor(){if(Xs(this.platformId)){this.loading.set(!1);return}this.load()}toggleExpand(i){this.expandedIds.update(e=>{let t=new Set(e);return t.has(i)?t.delete(i):t.add(i),t})}onFilterText(i){this.filterText.set(i.target.value)}setStates(i){this.selectedStates.set(i)}clearFilters(){this.filterText.set(""),this.selectedStates.set([])}toggleFilters(){this.filtersExpanded.update(i=>!i)}collectRows(i,e,t,o,r){let a=[],s=(u,h,f)=>{let _=u.subtasks.length>0,R=e===""||u.title.toLowerCase().includes(e),$=t.length===0||t.includes(u.state),W=R&&$,Y=[],xe=!1;if(o||r.has(u.number))for(let Ft of u.subtasks)s(Ft,h+1,Y)&&(xe=!0);return o&&!(W||xe)?!1:(f.push({task:u,depth:h,hasSubtasks:_}),f.push(...Y),!0)};for(let u of i)s(u,0,a);return a}aggregateCounts(i){let e={open:0,closed:0,pending:0,in_progress:0,done:0,blocked:0,cancelled:0,in_review:0,backlog:0},t=0,o=r=>{for(let a of r)t+=1,e[a.state]+=1,o(a.subtasks)};return o(i),{total:t,byState:e}}load(){this.githubApi.getTasks().pipe(td(this.destroyRef)).subscribe({next:i=>{this.data.set(i),this.loading.set(!1)},error:()=>{this.error.set("No se pudo cargar las tareas de GitHub"),this.loading.set(!1)}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-github-tasks"]],decls:10,vars:2,consts:[[1,"gh-panel"],[1,"gh-head"],[1,"gh-summary"],["id","selectFilter"],["role","status",1,"gh-skeleton"],["role","status",1,"gh-error"],["role","status",1,"gh-empty"],["aria-label","Filtro",1,"gh-filter","glass-panel"],[1,"gh-filter-header"],["type","button",1,"gh-filter-toggle",3,"click"],[1,"gh-filter-chevron"],[1,"gh-filter-title"],["id","gh-filter-row",1,"gh-filter-row"],[1,"gh-list"],[1,"gh-item",3,"gh-item--child","--depth"],["role","status",1,"gh-empty-item"],["appearance","fill","floatLabel","always",1,"form-field","form-field--full"],["matInput","","type","text","placeholder","Buscar por t\xEDtulo\u2026",3,"input","value"],["label","Estado","placeholder","Buscar por estado\u2026","fieldClass","form-field form-field--third","panelClass","gh-autocomplete-panel",3,"valueChange","options","value"],["type","button","aria-label","Limpiar filtros",1,"form-button","glass-panel",3,"click"],[1,"gh-item"],["target","_blank","rel","noopener",1,"gh-id",3,"href","title"],[1,"gh-body"],[1,"gh-title-line"],[1,"gh-title",3,"click"],[1,"gh-chevron",3,"is-expanded"],[1,"gh-badges"],[1,"gh-badge","gh-badge--priority"],[3,"class"],[1,"gh-chevron"]],template:function(e,t){if(e&1&&(l(0,"section",0)(1,"header",1)(2,"h2"),p(3,"Proyecto GitHub"),c(),M(4,Yf,4,2,"span",2),c(),l(5,"div",3),M(6,Zf,2,0,"div",4)(7,Kf,2,1,"div",5)(8,ig,12,6)(9,og,2,0,"div",6),c()()),e&2){let o,r;m(4),I((o=t.data())?4:-1,o),m(2),I(t.loading()?6:(r=t.error())?7:(r=t.data())?8:9,r)}},dependencies:[Sn,ci,Cn,Ir,bd,Pr],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;box-sizing:border-box;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:Bitter,Helvetica}.gh-panel[_ngcontent-%COMP%]{max-width:950px;margin-inline:auto;padding:2.25rem 1.5rem 3rem}.gh-head[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.5rem 1rem;margin-bottom:1.5rem}.gh-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.4rem;font-weight:700;color:var(--app-text-primary);letter-spacing:.01em}.gh-summary[_ngcontent-%COMP%]{font-size:.8rem;color:var(--app-text-secondary)}.gh-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem;padding:.55rem 1rem;border-radius:.7rem;box-sizing:border-box;margin-bottom:1.1rem}.gh-filter-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.gh-filter-toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;border:0;background:transparent;cursor:pointer;padding:.2rem .3rem;border-radius:var(--app-pills-radius);color:var(--app-text-primary);box-sizing:border-box}.gh-filter-toggle[_ngcontent-%COMP%]:hover, .gh-filter-toggle[_ngcontent-%COMP%]:focus-visible{background:var(--app-chip-background)}.gh-filter-chevron[_ngcontent-%COMP%]{display:inline-block;font-size:.85rem;line-height:1;color:var(--app-accent-tertiary);transition:transform .2s ease}.gh-filter-chevron.is-expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.gh-filter-title[_ngcontent-%COMP%]{font-size:var(--app-pills-font-size);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--app-text-primary);white-space:nowrap}.gh-filter-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem .9rem}.gh-empty-item[_ngcontent-%COMP%]{padding:1rem;border-radius:.6rem;border:1px dashed color-mix(in srgb,var(--app-text-primary) 25%,transparent);color:var(--app-text-secondary)}.gh-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.7rem}.gh-item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.65rem .8rem;padding:.75rem 1rem;border-radius:.6rem;background:color-mix(in srgb,var(--app-background-base) 55%,var(--app-chart-series-7));border:1px solid color-mix(in srgb,var(--app-text-primary) 12%,transparent);padding-left:calc(1rem + var(--depth, 0) * 1.6rem);position:relative;box-shadow:inset calc(var(--depth, 0) * -3px) 0 0 0 var(--app-accent-tertiary)}.gh-item--child[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--app-accent-tertiary) 28%,var(--app-background-base))}.gh-id[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:var(--app-accent-primary);white-space:nowrap;text-decoration:none}.gh-id[_ngcontent-%COMP%]:hover{text-decoration:underline}.gh-body[_ngcontent-%COMP%]{flex:1 1 260px;min-width:0}.gh-title-line[_ngcontent-%COMP%]{display:flex;align-items:baseline;flex-wrap:wrap;gap:.6rem}.gh-title[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;line-height:1.35;color:var(--app-text-primary)}.gh-title--expandable[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.gh-chevron[_ngcontent-%COMP%]{display:inline-block;margin-right:.35rem;font-size:.85rem;line-height:1;color:var(--app-accent-tertiary);transition:transform .2s ease}.gh-chevron.is-expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.gh-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.35rem}.gh-badge[_ngcontent-%COMP%]{font-size:.68rem;font-weight:600;text-transform:capitalize;letter-spacing:.03em;padding:.22em .7em;border-radius:999px;border:1px solid currentColor;white-space:nowrap}.gh-badge--status[_ngcontent-%COMP%]{color:var(--app-status-info)}.gh-badge--priority[_ngcontent-%COMP%]{color:var(--app-status-warning)}.gh-badge--label[_ngcontent-%COMP%]{color:var(--app-status-neutral)}.gh-badge--label-feature[_ngcontent-%COMP%]{color:var(--app-status-success)}.gh-badge--label-refactor[_ngcontent-%COMP%]{color:var(--app-status-primary)}.gh-badge--label-bugfix[_ngcontent-%COMP%]{color:var(--app-status-error)}.gh-badge--label-design[_ngcontent-%COMP%]{color:var(--app-accent-violet)}.gh-badge--label-tests[_ngcontent-%COMP%]{color:var(--app-status-accent)}.gh-badge--label-infra[_ngcontent-%COMP%]{color:var(--app-accent-hot-red)}.gh-badge--label-config[_ngcontent-%COMP%]{color:var(--app-accent-blue-soft)}.gh-state[_ngcontent-%COMP%]{font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:.18em .65em;border-radius:999px;border:1px solid currentColor;white-space:nowrap;margin-left:auto;align-self:flex-start;margin-top:.35rem}.gh-state--open[_ngcontent-%COMP%]{color:var(--app-status-info)}.gh-state--closed[_ngcontent-%COMP%]{color:var(--app-status-muted)}.gh-state--pending[_ngcontent-%COMP%]{color:var(--app-status-pending)}.gh-state--in_progress[_ngcontent-%COMP%]{color:var(--app-status-warning)}.gh-state--done[_ngcontent-%COMP%]{color:var(--app-status-success)}.gh-state--blocked[_ngcontent-%COMP%]{color:var(--app-status-danger)}.gh-state--cancelled[_ngcontent-%COMP%]{color:var(--app-status-disabled)}.gh-state--in_review[_ngcontent-%COMP%]{color:var(--app-status-accent)}.gh-state--backlog[_ngcontent-%COMP%]{color:var(--app-status-neutral)}.gh-skeleton[_ngcontent-%COMP%], .gh-error[_ngcontent-%COMP%], .gh-empty[_ngcontent-%COMP%]{padding:1rem;border-radius:.6rem;border:1px dashed color-mix(in srgb,var(--app-text-primary) 25%,transparent);color:var(--app-text-secondary)}.gh-error[_ngcontent-%COMP%]{color:var(--app-status-error)}"]})};function ag(n,i){n&1&&mt(0,"div",1)}var Tr=class n{rows=ce(12);cols=ce(16);cellSize=ce(40);gridColumns=ve(()=>["repeat("+this.cols()+", "+this.cellSize()+"px)"].join(" "));cells=ve(()=>{let i=Math.max(0,this.rows()*this.cols());return Array.from({length:i},(e,t)=>t)});static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-plane-grid"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:3,vars:4,consts:[["role","grid","aria-label","Plano de dise\xF1o",1,"plane-grid"],["role","gridcell",1,"plane-cell"]],template:function(e,t){e&1&&(he(0,"div",0),se(1,ag,1,0,"div",1,In),ke()),e&2&&(Ot("grid-template-columns",t.gridColumns())("grid-template-rows","repeat("+t.rows()+", "+t.cellSize()+"px)"),m(),le(t.cells()))},styles:["[_nghost-%COMP%]{display:inline-block}.plane-grid[_ngcontent-%COMP%]{display:grid;gap:1px;background-color:var(--app-border-default);border:1px solid var(--app-border-default);padding:1px;width:max-content;box-sizing:border-box}.plane-cell[_ngcontent-%COMP%]{background-color:var(--app-background-base);transition:background-color .2s ease}.plane-cell[_ngcontent-%COMP%]:nth-child(2n){background-color:color-mix(in srgb,var(--app-background-base) 92%,var(--app-accent-primary))}"]})};var sg=["*"],pi=class n{rows=ce(12);cols=ce(16);cellSize=ce(40);canvasColumns=ve(()=>["repeat("+this.cols()+", "+this.cellSize()+"px)"].join(" "));static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-scene-canvas"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},ngContentSelectors:sg,decls:4,vars:5,consts:[["role","region","aria-label","Lienzo de dise\xF1o",1,"scene-canvas"],[1,"scene-canvas-grid",3,"rows","cols","cellSize"],[1,"scene-canvas-lienzo"]],template:function(e,t){e&1&&(ge(),l(0,"div",0),w(1,"app-plane-grid",1),l(2,"div",2),V(3),c()()),e&2&&(m(),b("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize()),m(),Ot("grid-template-columns",t.canvasColumns()))},dependencies:[Tr],styles:["[_nghost-%COMP%]{display:inline-block}.scene-canvas[_ngcontent-%COMP%]{position:relative;display:inline-block;line-height:0}.scene-canvas-grid[_ngcontent-%COMP%]{display:block}.scene-canvas-lienzo[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:max-content;height:max-content;display:grid;place-items:center;background-color:var(--app-chip-background);border:2px solid var(--app-border-strong);box-shadow:0 0 0 1px var(--app-shadow);box-sizing:border-box}"]})};var Ar=class n{rows=ce(14);cols=ce(20);cellSize=ce(36);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-beach"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:7,vars:3,consts:[[3,"rows","cols","cellSize"],["role","img","aria-label","Escena de playa",1,"beach-scene"],[1,"beach-sky"],[1,"beach-sun"],[1,"beach-sea"],[1,"beach-sand"],[1,"beach-wave"]],template:function(e,t){e&1&&(l(0,"app-scene-canvas",0)(1,"div",1),w(2,"div",2)(3,"div",3)(4,"div",4),l(5,"div",5),w(6,"div",6),c()()()),e&2&&b("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize())},dependencies:[pi],styles:[".beach-scene[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-width:240px;min-height:160px;overflow:hidden}.beach-sky[_ngcontent-%COMP%]{position:absolute;inset:0 0 45%;background:linear-gradient(to bottom,var(--app-chart-series-4),var(--app-chart-series-3))}.beach-sun[_ngcontent-%COMP%]{position:absolute;top:12%;right:14%;width:14%;aspect-ratio:1;border-radius:50%;background:var(--app-chart-series-2)}.beach-sea[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:55%;height:22%;background:var(--app-chart-series-3);border-top:2px solid var(--app-chart-series-5)}.beach-sand[_ngcontent-%COMP%]{position:absolute;inset:auto 0 0;height:30%;background:var(--app-chart-series-2)}.beach-wave[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:6px;background:#ffffff59}"]})};var Dr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-animation-a"]],decls:6,vars:0,consts:[[1,"animation-page"],[1,"animation-caption"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h2"),p(2,"Animaci\xF3n \xB7 Playa"),c(),l(3,"p",1),p(4,"Escena plana sobre el lienzo dentro del plano de dise\xF1o."),c(),w(5,"app-beach"),c())},dependencies:[Ar],styles:[".animation-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.animation-caption[_ngcontent-%COMP%]{color:var(--app-text-muted);margin:0}"]})};var Fr=class n{rows=ce(10);cols=ce(16);cellSize=ce(40);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-logo-animation"]],inputs:{rows:[1,"rows"],cols:[1,"cols"],cellSize:[1,"cellSize"]},decls:6,vars:3,consts:[[3,"rows","cols","cellSize"],["role","img","aria-label","Logo droguier",1,"logo-mark"],[1,"logo-glyph"],[1,"logo-name"]],template:function(e,t){e&1&&(l(0,"app-scene-canvas",0)(1,"div",1)(2,"span",2),p(3,"d"),c(),l(4,"span",3),p(5,"droguier"),c()()()),e&2&&b("rows",t.rows())("cols",t.cols())("cellSize",t.cellSize())},dependencies:[pi],styles:['.logo-mark[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem 2.5rem;background-color:var(--app-accent-primary);border-radius:8px}.logo-glyph[_ngcontent-%COMP%]{font-family:var(--app-font-display, "Bitter", Georgia, serif);font-size:3rem;font-weight:700;line-height:1;color:var(--app-text-on-accent)}.logo-name[_ngcontent-%COMP%]{font-family:var(--app-font-display, "Bitter", Georgia, serif);font-size:1.1rem;letter-spacing:.2rem;text-transform:uppercase;color:var(--app-text-on-accent)}']})};var Lr=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-animation-b"]],decls:6,vars:0,consts:[[1,"animation-page"],[1,"animation-caption"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"h2"),p(2,"Animaci\xF3n \xB7 Logo"),c(),l(3,"p",1),p(4,"Logo plano sobre el lienzo dentro del plano de dise\xF1o."),c(),w(5,"app-logo-animation"),c())},dependencies:[Fr],styles:[".animation-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.animation-caption[_ngcontent-%COMP%]{color:var(--app-text-muted);margin:0}"]})};var ed=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Yn,data:{title:"Home"}},{path:"desktop",component:kr,data:{title:"Desktop",icon:"desktop_windows",secure:!0}},{path:"dashboard",component:Go,data:{title:"Dashboard",icon:"dashboard",secure:!0}},{path:"bookmarks",component:Bi,data:{title:"Bookmarks",icon:"bookmark",secure:!0}},{path:"googleauthlog",component:Bi,data:{title:"Google Auth Log",icon:"key",secure:!0}},{path:"github-tasks",component:Rr,data:{title:"Tareas GitHub",icon:"task_alt",secure:!0}},{path:"animationA",component:Dr,data:{title:"Animaci\xF3n Playa",icon:"web",secure:!0}},{path:"animationB",component:Lr,data:{title:"Animaci\xF3n Logo",icon:"web",secure:!0}}];export{ot as a,bt as b,pn as c,ue as d,Ze as e,vp as f,J as g,Z0 as h,Sc as i,kc as j,Cn as k,ci as l,Sn as m,bd as n,Ir as o,mi as p,kd as q,os as r,Md as s,ed as t,Qt as u,gr as v,wr as w,Jc as x};
