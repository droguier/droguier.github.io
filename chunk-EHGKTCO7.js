import{d as Ie}from"./chunk-CWL6S257.js";import{a as Me,b as wt,d as Et,e as Ce,f as Te,t as ke}from"./chunk-X7D3LVFY.js";import{$ as Ot,$a as W,Aa as ge,B as ie,Ca as _t,D as re,Da as ve,Ea as _e,I as se,Ka as w,L as ce,La as yt,M as de,Ma as ot,Na as Pt,Nb as h,Q as _,Qb as z,R as ht,Ra as Nt,Sb as rt,T as N,Tb as we,U as me,V as r,Va as F,Wa as H,Xa as G,Ya as Rt,Za as L,_a as U,a as b,aa as le,ab as u,b as Xt,ba as gt,bb as m,c as Jt,ca as at,cb as q,db as E,dc as xt,eb as C,f as P,fb as T,g as te,ga as k,hc as Ee,j as ee,ka as j,kb as B,la as ue,lb as Ft,mb as it,n as ne,o as ae,pa as R,qa as Dt,qc as Ae,ra as pe,sa as vt,sb as K,ta as be,tb as S,ua as fe,ub as ye,vb as l,wa as he,wb as y,x as oe,yb as xe,za as d}from"./chunk-PBSJGRYK.js";var Se=(a,n)=>n.id;function an(a,n){if(a&1&&(T(0,"div",5),E(1,"span",6),l(2),C()),a&2){let t=n.$implicit,e=n.$index;K("left",t.leftPct,"%")("width",t.widthPct,"%")("--bar-height",t.height,"px")("opacity",t.opacity),S("tl-bar--alt",e%2!==0),F("data-id",t.id)("aria-label",t.title+" \u2014 "+t.date.getFullYear()),d(),K("--bar-height",t.height,"px")("--bar-center-pct",t.centerPct,"%"),d(),xe("",t.dateEnd?t.dateEnd.getFullYear():"actual"," - ",t.title)}}function on(a,n){if(a&1&&(E(0,"span",7),l(1),C()),a&2){let t=n.$implicit;K("--bar-left-pct",t.leftPct,"%"),d(),y(t.date.getFullYear())}}function rn(a,n){if(a&1&&(E(0,"section",0)(1,"div",1),L(2,an,3,18,null,null,Se),C(),T(4,"hr",2),E(5,"div",3),L(6,on,2,3,"span",4,Se),C()()),a&2){let t=B();d(),K("height",t.maxHeight()+t.labelSpace,"px"),d(),U(t.piramidItems()),d(4),U(t.piramidItems())}}var sn=864e5,st=[15,45,75,100,200],cn=36,dn=88,Lt=a=>Math.round(((a.dateEnd??new Date).getTime()-a.date.getTime())/sn),Oe=a=>`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`,It=class a{items=z([]);order=z("asc");labelSpace=dn;hostEl=r(R);constructor(){ge(()=>this.animateBars())}animateBars(){let n=Array.from(this.hostEl.nativeElement.querySelectorAll(".tl-bar"));!n.length||typeof n[0].animate!="function"||typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||n.forEach((t,e)=>{let o=t.style.getPropertyValue("--bar-height").trim()||"0px";t.animate([{height:"0px"},{height:o}],{duration:1e3,delay:e*90,easing:"ease-out",fill:"forwards"})})}processedItems=h(()=>{let n=this.items()??[],t=[];for(let c of n){if(!(c.date instanceof Date)||Number.isNaN(c.date.getTime())){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 fecha de inicio inv\xE1lida`);continue}let p=c.dateEnd??new Date;if(Number.isNaN(p.getTime())){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 fecha de fin inv\xE1lida`);continue}if(p.getTime()<c.date.getTime()){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 date_end anterior a date_begin`);continue}t.push({id:c.id,title:c.title,date:c.date,dateEnd:c.dateEnd})}let e=[...t].sort((c,p)=>Lt(p)-Lt(c)),o=[],i=new Set,s=new Set;for(let c of e){let p=Oe(c.date),f=c.dateEnd?Oe(c.dateEnd):void 0;i.has(p)||f!==void 0&&s.has(f)||(i.add(p),f!==void 0&&s.add(f),o.push(c))}return o});piramidItems=h(()=>{let n=this.order()==="desc"?-1:1,t=[...this.processedItems()].sort((v,D)=>(v.date.getTime()-D.date.getTime())*n),e=t.map(Lt),o=e.length?Math.min(...e):0,s=(e.length?Math.max(...e):0)-o,c=Math.max(t.length-1,1),p=new Date,f=t.length?Math.min(...t.map(v=>v.date.getTime())):0,g=t.length?Math.max(...t.map(v=>(v.dateEnd??p).getTime())):1,et=Math.max(g-f,1),bt=-1;return t.map((v,D)=>{let I=s===0?st[st.length-1]:st[Math.min(st.length-1,Math.round((e[D]-o)/s*(st.length-1)))];I===bt&&(I+=cn),bt=I;let V=v.date.getTime(),ft=(v.dateEnd??p).getTime(),X=(V-f)/et*100,nt=(ft-V)/et*100;return{id:v.id,title:v.title,date:v.date,dateEnd:v.dateEnd,height:I,index:D,opacity:.55+D/c*.45,leftPct:X,widthPct:nt,centerPct:X+nt/2}})});count=h(()=>this.piramidItems().length);maxHeight=h(()=>this.piramidItems().reduce((n,t)=>Math.max(n,t.height),0));static \u0275fac=function(t){return new(t||a)};static \u0275cmp=w({type:a,selectors:[["app-timelapse-piramid"]],inputs:{items:[1,"items"],order:[1,"order"]},decls:1,vars:1,consts:[["id","timelapse_experience_content",1,"tl-piramid"],[1,"tl-bars"],[1,"tl-base"],[1,"tl-years"],[1,"tl-year","tl-year--start",3,"--bar-left-pct"],[1,"tl-bar"],[1,"tl-title"],[1,"tl-year","tl-year--start"]],template:function(t,e){t&1&&H(0,rn,8,2,"section",0),t&2&&G(e.piramidItems().length?0:-1)},styles:['[_nghost-%COMP%]{display:block;width:100%;min-width:0}.tl-piramid[_ngcontent-%COMP%]{box-sizing:border-box;display:block;width:100%;min-width:0;overflow-x:auto;margin-bottom:2em;padding:1.5em 1.5em .75em;border:2px solid var(--app-border-default)}.tl-bars[_ngcontent-%COMP%]{position:relative;width:100%;min-width:0;margin-bottom:.75em}.tl-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;left:var(--bar-left-pct, 0%);width:var(--bar-width-pct, 10%);height:var(--bar-height, 0px);background:var(--app-accent-primary);clip-path:polygon(50% 0,100% 100%,0 100%)}.tl-bar.tl-bar--alt[_ngcontent-%COMP%]{background:var(--app-text-primary)}.tl-title[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--bar-height, 0px) + 6px + 2em);white-space:nowrap;border-bottom:2px solid var(--app-border-default);left:var(--bar-center-pct, 50%);transform:translate(-50%);font-size:.8em;color:var(--app-text-primary);padding-bottom:.15em}.tl-title[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:5px;height:2em;background:var(--app-text-primary)}.tl-base[_ngcontent-%COMP%]{border:2px solid var(--app-border-default);margin:0 0 .5em}.tl-years[_ngcontent-%COMP%]{position:relative;width:100%;min-width:0;height:1.2em}.tl-year[_ngcontent-%COMP%]{position:absolute;left:var(--bar-left-pct, 0%);transform:translate(-50%);font-size:.8em;white-space:nowrap}.tl-year--start[_ngcontent-%COMP%]{bottom:0;border-top:2px solid var(--app-border-default);padding-top:.15em;transform:none;color:var(--app-text-primary)}.tl-year--start[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:5px;height:1em;background:var(--app-text-primary)}']})};var Pe=(a,n)=>n.id;function mn(a,n){if(a&1&&(Ot(),T(0,"circle",6)),a&2){let t=n.$implicit,e=B(2);K("stroke",t.color),F("cx",e.size()/2)("cy",e.size()/2)("r",e.radius())("stroke-width",e.thickness())("stroke-dasharray",e.circumference()*t.pct/100+" "+e.circumference())("stroke-dashoffset",-e.circumference()*t.offset/100)("aria-label",t.title+" \u2014 "+t.pct.toFixed(1)+"%")}}function ln(a,n){if(a&1&&(E(0,"li"),T(1,"span",7),E(2,"span",8),l(3),C()()),a&2){let t=n.$implicit;d(),K("background-color",t.color),d(2),y(t.title)}}function un(a,n){if(a&1&&(E(0,"div",1),Ot(),E(1,"svg",2)(2,"g"),T(3,"circle",3),L(4,mn,1,9,":svg:circle",4,Pe),C()(),le(),E(6,"ul",5),L(7,ln,4,3,"li",null,Pe),C()()),a&2){let t=B();S("gc-legend-right",t.legendSide()==="right"),d(),F("width",t.size())("height",t.size())("viewBox","0 0 "+t.size()+" "+t.size()),d(),F("transform","rotate(-90 "+t.size()/2+" "+t.size()/2+")"),d(),F("cx",t.size()/2)("cy",t.size()/2)("r",t.radius())("stroke-width",t.thickness()),d(),U(t.slices()),d(3),U(t.slices())}}var pn=["var(--app-chart-series-1)","var(--app-chart-series-2)","var(--app-chart-series-3)","var(--app-chart-series-4)","var(--app-chart-series-5)","var(--app-chart-series-6)","var(--app-chart-series-7)"],Mt=class a{items=z([]);colors=z([]);size=z(180);thickness=z(50);legendSide=z("left");slices=h(()=>{let n=this.items()??[],t=[];for(let s of n){if(typeof s.value!="number"||!Number.isFinite(s.value)){console.warn(`GraphCircle: "${s.title}" descartado \u2014 valor inv\xE1lido`);continue}t.push(s)}let e=t.reduce((s,c)=>s+c.value,0),o=this.colors().length?this.colors():pn,i=0;return t.map((s,c)=>{let p=e?s.value/e*100:0,f={id:s.id,title:s.title,value:s.value,color:o[c%o.length],pct:p,offset:i};return i+=p,f})});radius=h(()=>(this.size()-this.thickness())/2);circumference=h(()=>2*Math.PI*this.radius());static \u0275fac=function(t){return new(t||a)};static \u0275cmp=w({type:a,selectors:[["app-graph-circle"]],inputs:{items:[1,"items"],colors:[1,"colors"],size:[1,"size"],thickness:[1,"thickness"],legendSide:[1,"legendSide"]},decls:1,vars:1,consts:[[1,"gc",3,"gc-legend-right"],[1,"gc"],[1,"gc-svg"],["fill","none",1,"gc-track"],["fill","none",1,"gc-slice",3,"stroke"],[1,"gc-legend"],["fill","none",1,"gc-slice"],[1,"gc-dot"],[1,"gc-label"]],template:function(t,e){t&1&&H(0,un,9,10,"div",0),t&2&&G(e.slices().length?0:-1)},styles:["[_nghost-%COMP%]{display:block}.gc[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:1em;font-family:Bitter,Helvetica}.gc-svg[_ngcontent-%COMP%]{flex:0 0 auto;display:block;order:1}.gc-legend[_ngcontent-%COMP%]{flex:0 1 auto;min-width:0;order:0}.gc-legend-right[_ngcontent-%COMP%]   .gc-svg[_ngcontent-%COMP%]{order:0}.gc-legend-right[_ngcontent-%COMP%]   .gc-legend[_ngcontent-%COMP%]{order:1}.gc-track[_ngcontent-%COMP%]{stroke:var(--app-chart-track, #4b5859)}.gc-slice[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gc-grow 1s ease-out forwards}.gc-legend[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.gc-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5em;padding:.25em 0}.gc-dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;flex-shrink:0;margin-top:.25em}.gc-label[_ngcontent-%COMP%]{font-size:.85em;line-height:1.3;text-align:left}.gc-pct[_ngcontent-%COMP%]{margin-left:auto;font-size:.85em;color:var(--app-chart-legend-text, #4b5859)}@keyframes _ngcontent-%COMP%_gc-grow{0%{stroke-dasharray:0 9999}}@media(prefers-reduced-motion:reduce){.gc-slice[_ngcontent-%COMP%]{animation:none}}"]})};function bn(a,n){if(a&1&&(u(0,"h2",3),l(1),m()),a&2){let t,e=B();d(),y((t=e.cvInformation())==null?null:t.title)}}function fn(a,n){if(a&1&&(u(0,"p",4),l(1),m()),a&2){let t,e=B();d(),y((t=e.cvInformation())==null?null:t.short_desc)}}function hn(a,n){if(a&1&&(u(0,"a",6)(1,"mat-icon"),l(2,"language"),m(),u(3,"span"),l(4),m()()),a&2){let t,e=B();W("href",e.cvInformation().web,he),d(4),y((t=e.cvInformation())==null?null:t.web)}}function gn(a,n){if(a&1&&(u(0,"li",14)(1,"span",23),l(2),m(),u(3,"span",24),l(4),m()()),a&2){let t=n.$implicit;d(2),y(t.title),d(2),y(t.short_desc)}}function vn(a,n){if(a&1&&(u(0,"div",14)(1,"span",23),l(2),m(),u(3,"span",24),l(4),m()()),a&2){let t=n.$implicit;d(2),y(t.title),d(2),y(t.short_desc)}}var Ne=class a{constructor(n){this.staticsAppSvc=n;this.cvInformation.set(this.staticsAppSvc.getDroguierCV())}staticsAppSvc;cvInformation=j(void 0);initials=h(()=>(this.cvInformation()?.name?.trim()??"").split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]?.toUpperCase()??"").join(""));experience=h(()=>(this.cvInformation()?.laboral_experience??[]).slice(0,7));education=h(()=>this.cvInformation()?.education??[]);interests=h(()=>this.cvInformation()?.interest??[]);degree_awards=h(()=>this.cvInformation()?.degree_awards??[]);lapseExperienceItems=h(()=>(this.cvInformation()?.laboral_experience??[]).map((n,t)=>({id:t+1,title:n.title,date:n.date_begin,dateEnd:n.date_end})));lapseEducationItems=h(()=>(this.cvInformation()?.education??[]).map((n,t)=>({id:t+1,title:n.title,date:n.date_begin,dateEnd:n.date_end})));skill1Items=[{id:1,title:"C#",value:8},{id:2,title:"JavaScript",value:6},{id:3,title:"TypeScript",value:5},{id:4,title:"SQL",value:9},{id:5,title:"Java",value:7},{id:6,title:"PowerShell",value:4},{id:7,title:"C++",value:4}];skill2Items=[{id:1,title:".NET Framework",value:8},{id:2,title:"NET Core",value:8},{id:3,title:"Angular",value:6},{id:4,title:"NodeJS",value:5},{id:5,title:"MS SQL",value:7},{id:6,title:"GIT",value:6},{id:7,title:"Message Queuing",value:6}];static \u0275fac=function(t){return new(t||a)(_e(Ae))};static \u0275cmp=w({type:a,selectors:[["app-home"]],decls:51,vars:10,consts:[[1,"home-hero"],["aria-hidden","true",1,"home-avatar"],[1,"home-hero-info"],[1,"home-hero-role"],[1,"home-hero-tagline"],[1,"home-hero-contact"],["rel","nofollow",1,"home-hero-link",3,"href"],["href","/public/contact-us","target","_blank","rel","noopener",1,"home-hero-cta"],["id","timelapse_experience",1,"xp","qual","full-qual"],[3,"items"],["id","qualifications"],["id","timelapse_education",1,"qual","third-qual"],["id","awards_description",1,"qual","quarter-qual"],[1,"awards-list"],[1,"award-card"],["id","skills-sets",1,"sknex"],["id","skills-interest",1,"skills-text"],["id","skills-details",1,"skills-vis"],["id","skill1"],["legendSide","right",3,"items"],["id","skill2"],["id","contacto","aria-label","Formulario de contacto",1,"home-contact"],[3,"subject"],[1,"award-title"],[1,"award-desc"]],template:function(t,e){if(t&1&&(u(0,"section")(1,"header",0)(2,"span",1),l(3),m(),u(4,"div",2)(5,"h1"),l(6),m(),H(7,bn,2,1,"h2",3),H(8,fn,2,1,"p",4),u(9,"div",5),H(10,hn,5,2,"a",6),u(11,"a",7)(12,"mat-icon"),l(13,"mail"),m(),u(14,"span"),l(15,"Cont\xE1ctame"),m()()()()(),q(16,"hr"),u(17,"div",8)(18,"h2"),l(19,"Experience"),m(),q(20,"app-timelapse-piramid",9),m(),u(21,"div",10)(22,"div",11)(23,"h2"),l(24,"Education"),m(),q(25,"app-timelapse-piramid",9),m(),u(26,"div",12)(27,"h2"),l(28,"Awards & Honors"),m(),u(29,"ul",13),L(30,gn,5,2,"li",14,Rt),m()()(),u(32,"div",15)(33,"div",16)(34,"h2"),l(35,"Skills & Expertise"),m(),L(36,vn,5,2,"div",14,Rt),m(),u(38,"div",17)(39,"h2"),l(40,"TI Tools Graph"),m(),u(41,"div",18)(42,"h3"),l(43,"Lenguajes"),m(),q(44,"app-graph-circle",19),m(),u(45,"div",20)(46,"h3"),l(47,"Herramientas y Frameworks"),m(),q(48,"app-graph-circle",9),m()()(),u(49,"section",21),q(50,"app-contact-us",22),m()()),t&2){let o,i,s,c;d(3),y(e.initials()),d(3),y((o=e.cvInformation())==null?null:o.name),d(),G((i=e.cvInformation())!=null&&i.title&&((i=e.cvInformation())==null?null:i.title)!==((i=e.cvInformation())==null?null:i.name)?7:-1),d(),G((s=e.cvInformation())!=null&&s.short_desc?8:-1),d(2),G((c=e.cvInformation())!=null&&c.web?10:-1),d(10),W("items",e.lapseExperienceItems()),d(5),W("items",e.lapseEducationItems()),d(5),U(e.degree_awards()),d(6),U(e.interests()),d(8),W("items",e.skill1Items),d(4),W("items",e.skill2Items),d(2),W("subject","Consulta desde droguier.cl")}},dependencies:[It,Mt,Te,Ce,ke],styles:['[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-display, "Bitter", Georgia, serif)}h2[_ngcontent-%COMP%]{border:2px solid var(--app-border-default);padding:.5em;display:inline-block}h3[_ngcontent-%COMP%]{line-height:1.2}.home-hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5rem;padding:1.5rem 0}.home-hero[_ngcontent-%COMP%]   .home-avatar[_ngcontent-%COMP%]{flex:0 0 auto;width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700;color:var(--app-text-on-accent);background:var(--app-gradient-primary);border:2px solid var(--app-border-default)}.home-hero[_ngcontent-%COMP%]   .home-hero-info[_ngcontent-%COMP%]{min-width:0}.home-hero[_ngcontent-%COMP%]   .home-hero-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.home-hero[_ngcontent-%COMP%]   .home-hero-role[_ngcontent-%COMP%]{display:block;margin:.25rem 0 0;border:none;padding:0;color:var(--app-accent-tertiary)}.home-hero[_ngcontent-%COMP%]   .home-hero-tagline[_ngcontent-%COMP%]{margin:.5rem 0 0;color:var(--app-text-muted)}.home-hero[_ngcontent-%COMP%]   .home-hero-contact[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:.75rem}.home-hero[_ngcontent-%COMP%]   .home-hero-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;color:var(--app-link-text);text-decoration:none}.home-hero[_ngcontent-%COMP%]   .home-hero-link[_ngcontent-%COMP%]:hover, .home-hero[_ngcontent-%COMP%]   .home-hero-link[_ngcontent-%COMP%]:focus-visible{color:var(--app-link-hover);text-decoration:underline}.home-hero[_ngcontent-%COMP%]   .home-hero-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.home-hero[_ngcontent-%COMP%]   .home-hero-cta[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;height:var(--app-pills-height);padding-inline:var(--app-pills-padding-inline);border-radius:var(--app-pills-radius);border:1px solid var(--app-border-strong);background:var(--app-button-background);color:var(--app-button-text);font-size:var(--app-pills-font-size);font-weight:600;text-decoration:none;opacity:.85;transition:opacity .2s ease,background-color .2s ease,color .2s ease,border-color .2s ease}.home-hero[_ngcontent-%COMP%]   .home-hero-cta[_ngcontent-%COMP%]:hover, .home-hero[_ngcontent-%COMP%]   .home-hero-cta[_ngcontent-%COMP%]:focus-visible{opacity:1;border-color:var(--app-status-success);background:var(--app-chip-background-strong);color:var(--app-chip-text-strong)}.home-hero[_ngcontent-%COMP%]   .home-hero-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--app-icon-size);width:var(--app-icon-size);height:var(--app-icon-size)}section[_ngcontent-%COMP%]{max-width:950px;width:100%;margin:0 auto}.home-contact[_ngcontent-%COMP%]{margin-top:1.5rem;scroll-margin-top:5rem}hr[_ngcontent-%COMP%]{border:1px solid var(--app-border-default)}.full-qual[_ngcontent-%COMP%]{width:100%;margin:0 auto}.qual[_ngcontent-%COMP%]{margin-bottom:40px}#qualifications[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.5rem}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%]{flex:0 0 70%}#qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%]{flex:1 1 30%}.awards-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.75rem}.award-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.75rem 1rem;border:1px solid var(--app-border-inverse);border-left:3px solid var(--app-accent-primary);border-radius:8px;background:var(--app-chip-background);box-sizing:border-box;transition:background-color .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease}.award-card[_ngcontent-%COMP%]:hover, .award-card[_ngcontent-%COMP%]:focus-visible{background:var(--app-chip-background-strong);border-color:var(--app-accent-tertiary);transform:translateY(-2px);box-shadow:0 4px 12px var(--app-shadow)}.award-title[_ngcontent-%COMP%]{color:var(--app-accent-tertiary);font-weight:600;font-size:.9rem;line-height:1.3}.award-desc[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--app-text-primary) 65%,var(--app-text-muted));font-size:.8rem;line-height:1.6}.sknex[_ngcontent-%COMP%]{margin-bottom:2em;display:flex;align-items:flex-start;gap:1.5rem}.sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%]{flex:1 1 30%;display:flex;flex-direction:column;gap:.75rem}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:0 0 70%;display:flex;flex-wrap:wrap;align-items:flex-start;gap:1.5rem}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{flex:1 1 100%}#skill1[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]{flex:1 1 calc(50% - .75rem);min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center}#skill1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:1.2;margin:0 0 1rem;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:2px;color:var(--app-text-primary)}@media(max-width:1024px){section[_ngcontent-%COMP%]{width:100%;padding:0 1.5em;box-sizing:border-box}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%]{flex:0 0 60%}#qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%], .sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%]{flex:1 1 40%}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:0 0 60%}}@media(max-width:650px){section[_ngcontent-%COMP%]{padding:0 1em;overflow-x:hidden}.home-hero[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center}#qualifications[_ngcontent-%COMP%]{flex-direction:column}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%], #qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%]{flex:1 1 100%;width:100%;float:none}.sknex[_ngcontent-%COMP%]{flex-direction:column}.sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%], .sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:1 1 100%;width:100%;float:none;margin-right:0}#skill1[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]{flex:1 1 100%;width:100%}}']})};var Ct=class a{constructor(n){this.http=n}http;baseUrl=Me.STATICS_API_URL;apiResource="session";registrarSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/registrar`,n,t)}validarSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/validar`,n,t)}getSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/getSesion`,n,t)}validarGoogleAuth(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/google-auth`,n,t)}static \u0275fac=function(t){return new(t||a)(me(Ee))};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})};var Y="droguier_session",Re=class a{platformId=r(vt);router=r(Ie);sessionApiSvc=r(Ct);sessionSignal=j(null);sessionUserSignal=j(null);constructor(){if(this.isBrowser()){let n=localStorage.getItem(Y);if(n)try{let t=JSON.parse(n);this.sessionSignal.set(t),this.sessionUserSignal.set(null)}catch{localStorage.removeItem(Y)}}}get session(){return this.sessionSignal.asReadonly()}get sessionUser(){return this.sessionUserSignal.asReadonly()}hasSession(){if(!this.isBrowser())return!!this.sessionSignal();let n=localStorage.getItem(Y),t=!!n;if(!t)return(this.sessionSignal()||this.sessionUserSignal())&&(this.sessionSignal.set(null),this.sessionUserSignal.set(null)),!1;if(t&&!this.sessionSignal())try{let e=JSON.parse(n);this.sessionSignal.set(e)}catch{return localStorage.removeItem(Y),this.sessionSignal.set(null),this.sessionUserSignal.set(null),!1}return t}getToken(){if(!this.isBrowser())return null;let n=localStorage.getItem(Y);if(!n)return null;try{let t=JSON.parse(n),e=t?.token??t?.accessToken??t?.data?.token??null;return typeof e=="string"&&e.trim().length>0?e:null}catch{return null}}setSession(n){this.isBrowser()&&n!==void 0&&(localStorage.setItem(Y,JSON.stringify(n)),this.sessionSignal.set(n),this.sessionUserSignal.set(null))}setSessionUser(n){this.sessionUserSignal.set(this.deserializeSessionUser(n))}async cargarSesion(n=!1){let t=this.sessionUserSignal();if(!n&&t)return t;let e=this.sessionSignal();if(!e)return this.sessionUserSignal.set(null),null;try{let o=await this.getSesionWithSubscribe({data:e?.data},"initial");if(this.isSessionExpiredMessage(o?.message)&&await this.revalidateSessionToken()){let c=this.sessionSignal();o=await this.getSesionWithSubscribe({data:c?.data},"after-refresh")}if(o?.success===!1||this.isSessionExpiredMessage(o?.message))return this.clearSession(),this.redirectToPublicHome(),null;let i=this.deserializeSessionUser(o?.data??null);return this.sessionUserSignal.set(i),i}catch{return this.clearSession(),this.redirectToPublicHome(),null}}getSesionWithSubscribe(n,t){return new Promise((e,o)=>{this.sessionApiSvc.getSesion(n).subscribe({next:i=>{e(i)},error:i=>{if(i?.status===403){let s={success:!1,message:i?.error?.message??i?.statusText??"Forbidden",status:403,data:i?.error??null};e(s)}else o(i)}})})}async revalidateSessionToken(){let n=this.sessionSignal();try{let t=await ne(this.sessionApiSvc.validarSesion(null));if(t?.success===!1||!t?.token)return!1;let e=Xt(b(b({},n??{}),t),{data:t?.data??n?.data});return this.setSession(e),!0}catch{return!1}}clearSession(){this.isBrowser()&&(localStorage.removeItem(Y),this.sessionSignal.set(null),this.sessionUserSignal.set(null))}deserializeSessionUser(n){if(!n)return null;if(typeof n=="object")return n;if(typeof n!="string")return null;try{let t=JSON.parse(n);if(typeof t=="string"){let e=JSON.parse(t);return e&&typeof e=="object"?e:null}return t&&typeof t=="object"?t:null}catch{return null}}isSessionExpiredMessage(n){return typeof n!="string"?!1:n.toLowerCase().includes("session has expired")}redirectToPublicHome(){this.isBrowser()&&this.router.navigate(["/home"])}isBrowser(){return xt(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(t){return new(t||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})};function ct(a){return a.buttons===0||a.detail===0}function dt(a){let n=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Ut;function Fe(){if(Ut==null){let a=typeof document<"u"?document.head:null;Ut=!!(a&&(a.createShadowRoot||a.attachShadow))}return Ut}function Bt(a){if(Fe()){let n=a.getRootNode?a.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function A(a){return a.composedPath?a.composedPath()[0]:a.target}var zt;try{zt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zt=!1}var O=(()=>{class a{_platformId=r(vt);isBrowser=this._platformId?xt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var mt;function Le(){if(mt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>mt=!0}))}finally{mt=mt||!1}return mt}function J(a){return Le()?a:!!a.capture}function $(a){return a instanceof R?a.nativeElement:a}var Ue=new N("cdk-input-modality-detector-options"),Be={ignoreKeys:[18,17,224,91,16]},ze=650,jt={passive:!0,capture:!0},je=(()=>{class a{_platform=r(O);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new te(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=A(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ze||(this._modality.next(ct(t)?"keyboard":"mouse"),this._mostRecentTarget=A(t))};_onTouchstart=t=>{if(dt(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=A(t)};constructor(){let t=r(k),e=r(at),o=r(Ue,{optional:!0});if(this._options=b(b({},Be),o),this.modalityDetected=this._modality.pipe(se(1)),this.modalityChanged=this.modalityDetected.pipe(re()),this._platform.isBrowser){let i=r(_t).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,jt),i.listen(e,"mousedown",this._onMousedown,jt),i.listen(e,"touchstart",this._onTouchstart,jt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),lt=(function(a){return a[a.IMMEDIATE=0]="IMMEDIATE",a[a.EVENTUAL=1]="EVENTUAL",a})(lt||{}),He=new N("cdk-focus-monitor-default-options"),Tt=J({passive:!0,capture:!0}),Ht=(()=>{class a{_ngZone=r(k);_platform=r(O);_inputModalityDetector=r(je);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(at);_stopInputModalityDetector=new P;constructor(){let t=r(He,{optional:!0});this._detectionMode=t?.detectionMode||lt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=A(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=$(t);if(!this._platform.isBrowser||o.nodeType!==1)return ee();let i=Bt(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let c={checkChildren:e,subject:new P,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=$(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let i=$(t),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([c,p])=>this._originChanged(c,e,p)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===lt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===lt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?ze:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),i=A(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Tt),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Tt)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ce(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Tt),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Tt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ra(a){return Array.isArray(a)?a:[a]}var Ge=new Set,Z,Gt=(()=>{class a{_platform=r(O);_nonce=r(fe,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):yn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&_n(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function _n(a,n){if(!Ge.has(a))try{Z||(Z=document.createElement("style"),n&&Z.setAttribute("nonce",n),Z.setAttribute("type","text/css"),document.head.appendChild(Z)),Z.sheet&&(Z.sheet.insertRule(`@media ${a} {body{ }}`,0),Ge.add(a))}catch(t){console.error(t)}}function yn(a){return{matches:a==="all"||a==="",media:a,addListener:()=>{},removeListener:()=>{}}}var xn=200,At=class{_letterKeyStream=new P;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new P;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:xn;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(de(t=>this._pressedLetters.push(t)),ie(n),oe(()=>this._pressedLetters.length>0),ae(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Ke(a,...n){return n.length?n.some(t=>a[t]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var kt=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=Jt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Dt?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):Nt(n)&&(this._effectRef=ue(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new P;change=new P;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new At(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!n[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||Ke(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n=="number"?n:t.indexOf(n),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+n*e+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return Nt(this._items)?this._items():this._items instanceof Dt?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Kt=class extends kt{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var $t={},Vt=class a{_appId=r(pe);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),$t.hasOwnProperty(n)||($t[n]=0),`${n}${t?a._infix+"-":""}${$t[n]++}`}static \u0275fac=function(t){return new(t||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})};var Q;function xo(){if(Q==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Q=!1,Q;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Q=!0;else{let a=Element.prototype.scrollTo;a?Q=!/\{\s*\[native code\]\s*\}/.test(a.toString()):Q=!1}}return Q}function Eo(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var wn=new N("MATERIAL_ANIMATIONS"),$e=null;function En(){return r(wn,{optional:!0})?.animationsDisabled||r(be,{optional:!0})==="NoopAnimations"?"di-disabled":($e??=r(Gt).matchMedia("(prefers-reduced-motion)").matches,$e?"reduced-motion":"enabled")}function tt(){return En()!=="enabled"}function Fo(a){return a==null?"":typeof a=="string"?a:`${a}px`}function zo(a){return a!=null&&`${a}`!="false"}var M=(function(a){return a[a.FADING_IN=0]="FADING_IN",a[a.VISIBLE=1]="VISIBLE",a[a.FADING_OUT=2]="FADING_OUT",a[a.HIDDEN=3]="HIDDEN",a})(M||{}),Wt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=M.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ve=J({passive:!0,capture:!0}),qt=class{_events=new Map;addHandler(n,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ve)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ve)))}_delegateEventHandler=n=>{let t=A(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(n))})}},ut={enterDuration:225,exitDuration:150},In=800,We=J({passive:!0,capture:!0}),qe=["mousedown","touchstart"],Ye=["mouseup","mouseleave","touchend","touchcancel"],Mn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return a})(),pt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new qt;constructor(n,t,e,o,i){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=$(e)),i&&i.get(wt).load(Mn)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=b(b({},ut),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||Cn(n,t,o),c=n-o.left,p=t-o.top,f=i.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${c-s}px`,g.style.top=`${p-s}px`,g.style.height=`${s*2}px`,g.style.width=`${s*2}px`,e.color!=null&&(g.style.backgroundColor=e.color),g.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(g);let et=window.getComputedStyle(g),bt=et.transitionProperty,v=et.transitionDuration,D=bt==="none"||v==="0s"||v==="0s, 0s"||o.width===0&&o.height===0,I=new Wt(this,g,e,D);g.style.transform="scale3d(1, 1, 1)",I.state=M.FADING_IN,e.persistent||(this._mostRecentTransientRipple=I);let V=null;return!D&&(f||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ft=()=>{V&&(V.fallbackTimer=null),clearTimeout(nt),this._finishRippleTransition(I)},X=()=>this._destroyRipple(I),nt=setTimeout(X,f+100);g.addEventListener("transitionend",ft),g.addEventListener("transitioncancel",X),V={onTransitionEnd:ft,onTransitionCancel:X,fallbackTimer:nt}}),this._activeRipples.set(I,V),(D||!f)&&this._finishRippleTransition(I),I}fadeOutRipple(n){if(n.state===M.FADING_OUT||n.state===M.HIDDEN)return;let t=n.element,e=b(b({},ut),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=M.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=$(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,qe.forEach(e=>{a._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ye.forEach(t=>{this._triggerElement.addEventListener(t,this,We)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===M.FADING_IN?this._startFadeOutTransition(n):n.state===M.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=M.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=M.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ct(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+In;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!dt(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===M.VISIBLE||n.config.terminateOnPointerUp&&n.state===M.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(qe.forEach(t=>a._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Ye.forEach(t=>n.removeEventListener(t,this,We)),this._pointerUpEventsRegistered=!1))}};function Cn(a,n,t){let e=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var Yt=new N("mat-ripple-global-options"),ti=(()=>{class a{_elementRef=r(R);_animationsDisabled=tt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=r(k),e=r(O),o=r(Yt,{optional:!0}),i=r(gt);this._globalOptions=o||{},this._rippleRenderer=new pt(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,b(b({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=ot({type:a,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return a})();var Tn={capture:!0},An=["focus","mousedown","mouseenter","touchstart"],Zt="mat-ripple-loader-uninitialized",Qt="mat-ripple-loader-class-name",Ze="mat-ripple-loader-centered",St="mat-ripple-loader-disabled",Qe=(()=>{class a{_document=r(at);_animationsDisabled=tt();_globalRippleOptions=r(Yt,{optional:!0});_platform=r(O);_ngZone=r(k);_injector=r(gt);_eventCleanups;_hosts=new Map;constructor(){let t=r(_t).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>An.map(e=>t.listen(this._document,e,this._onInteraction,Tn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Zt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Qt))&&t.setAttribute(Qt,e.className||""),e.centered&&t.setAttribute(Ze,""),e.disabled&&t.setAttribute(St,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(St,""):t.removeAttribute(St)}_onInteraction=t=>{let e=A(t);if(e instanceof HTMLElement){let o=e.closest(`[${Zt}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Qt)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??ut.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??ut.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(St),rippleConfig:{centered:t.hasAttribute(Ze),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},p=new pt(c,this._ngZone,e,this._platform,this._injector),f=!c.rippleDisabled;f&&p.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:p,hasSetUpEvents:f}),t.removeAttribute(Zt)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Xe=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return a})();var kn=new N("MAT_BUTTON_CONFIG");function Je(a){return a==null?void 0:we(a)}var tn=(()=>{class a{_elementRef=r(R);_ngZone=r(k);_animationsDisabled=tt();_config=r(kn,{optional:!0});_focusMonitor=r(Ht);_cleanupClick;_renderer=r(ve);_rippleLoader=r(Qe);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){r(wt).load(Xe);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=ot({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(F("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ye(o.color?"mat-"+o.color:""),S("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",rt],disabled:[2,"disabled","disabled",rt],ariaDisabled:[2,"aria-disabled","ariaDisabled",rt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",rt],tabIndex:[2,"tabIndex","tabIndex",Je],_tabindex:[2,"tabindex","_tabindex",Je]}})}return a})();var en=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=yt({type:a});static \u0275inj=ht({imports:[Et]})}return a})();var Sn=["matButton",""],On=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Dn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var nn=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ai=(()=>{class a extends tn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Pn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?nn.get(this._appearance):null,i=nn.get(t);o&&e.remove(...o),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=w({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Pt],attrs:Sn,ngContentSelectors:Dn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(Ft(On),T(0,"span",0),it(1),E(2,"span",1),it(3,1),C(),it(4,2),T(5,"span",2)(6,"span",3)),e&2&&S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return a})();function Pn(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}var ki=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=yt({type:a});static \u0275inj=ht({imports:[en,Et]})}return a})();export{Ct as a,Re as b,ct as c,dt as d,A as e,O as f,$ as g,Ht as h,Ra as i,Ke as j,Kt as k,Vt as l,Xe as m,xo as n,Eo as o,Fo as p,zo as q,tt as r,ti as s,en as t,Ne as u,Ai as v,ki as w};
