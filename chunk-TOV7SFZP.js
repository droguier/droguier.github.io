import{d as Ie}from"./chunk-DNO7KZTI.js";import{a as Ee,b as It,d as Et}from"./chunk-XSYKXYOY.js";import{$ as ue,$a as _,$b as Mt,A as se,Ba as gt,C as ce,Ca as ve,Da as _e,H as de,Ja as y,K as me,Ka as vt,Kb as f,L as le,La as nt,Ma as _t,Nb as U,P as v,Pb as Z,Q as bt,Qa as Rt,Qb as we,S as T,T as pe,U as r,Ua as R,Va as yt,Wa as xt,Xa as Ft,Ya as F,Za as L,_ as St,_a as at,a as u,aa as ft,ab as l,b as te,ba as et,bb as Y,c as ee,cb as x,cc as Me,db as E,eb as M,f as N,fa as P,g as ne,j as ae,ja as B,jb as ot,ka as be,kb as wt,kc as Ce,lb as z,n as oe,o as ie,oa as K,pa as Nt,qa as fe,ra as ht,rb as j,sa as he,sb as O,ta as ge,tb as ye,ub as p,vb as A,w as re,xb as xe,ya as d}from"./chunk-IBQKRGWX.js";var Te=(a,n)=>n.id;function en(a,n){if(a&1&&(M(0,"div",5),x(1,"span",6),p(2),E()),a&2){let t=n.$implicit,e=n.$index;j("left",t.leftPct,"%")("width",t.widthPct,"%")("--bar-height",t.height,"px")("--bar-delay",e*90,"ms")("opacity",t.opacity),O("tl-bar--alt",e%2!==0),R("data-id",t.id)("aria-label",t.title+" \u2014 "+t.date.getFullYear()),d(),j("--bar-height",t.height,"px")("--bar-center-pct",t.centerPct,"%"),d(),xe("",t.dateEnd?t.dateEnd.getFullYear():"actual"," - ",t.title)}}function nn(a,n){if(a&1&&(x(0,"span",7),p(1),E()),a&2){let t=n.$implicit;j("--bar-left-pct",t.leftPct,"%"),d(),A(t.date.getFullYear())}}function an(a,n){if(a&1&&(x(0,"section",0)(1,"div",1),F(2,en,3,20,null,null,Te),E(),M(4,"hr",2),x(5,"div",3),F(6,nn,2,3,"span",4,Te),E()()),a&2){let t=ot();d(),j("height",t.maxHeight()+t.labelSpace,"px"),d(),L(t.piramidItems()),d(4),L(t.piramidItems())}}var on=864e5,it=[15,45,75,100,200],rn=36,sn=88,Lt=a=>Math.round(((a.dateEnd??new Date).getTime()-a.date.getTime())/on),Oe=a=>`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`,Ct=class a{items=U([]);order=U("asc");labelSpace=sn;processedItems=f(()=>{let n=this.items()??[],t=[];for(let c of n){if(!(c.date instanceof Date)||Number.isNaN(c.date.getTime())){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 fecha de inicio inv\xE1lida`);continue}let m=c.dateEnd??new Date;if(Number.isNaN(m.getTime())){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 fecha de fin inv\xE1lida`);continue}if(m.getTime()<c.date.getTime()){console.warn(`TimelapsePiramid: "${c.title}" descartado \u2014 date_end anterior a date_begin`);continue}t.push({id:c.id,title:c.title,date:c.date,dateEnd:c.dateEnd})}let e=[...t].sort((c,m)=>Lt(m)-Lt(c)),o=[],i=new Set,s=new Set;for(let c of e){let m=Oe(c.date),b=c.dateEnd?Oe(c.dateEnd):void 0;i.has(m)||b!==void 0&&s.has(b)||(i.add(m),b!==void 0&&s.add(b),o.push(c))}return o});piramidItems=f(()=>{let n=this.order()==="desc"?-1:1,t=[...this.processedItems()].sort((g,S)=>(g.date.getTime()-S.date.getTime())*n),e=t.map(Lt),o=e.length?Math.min(...e):0,s=(e.length?Math.max(...e):0)-o,c=Math.max(t.length-1,1),m=new Date,b=t.length?Math.min(...t.map(g=>g.date.getTime())):0,h=t.length?Math.max(...t.map(g=>(g.dateEnd??m).getTime())):1,J=Math.max(h-b,1),pt=-1;return t.map((g,S)=>{let I=s===0?it[it.length-1]:it[Math.min(it.length-1,Math.round((e[S]-o)/s*(it.length-1)))];I===pt&&(I+=rn),pt=I;let G=g.date.getTime(),ut=(g.dateEnd??m).getTime(),W=(G-b)/J*100,tt=(ut-G)/J*100;return{id:g.id,title:g.title,date:g.date,dateEnd:g.dateEnd,height:I,index:S,opacity:.55+S/c*.45,leftPct:W,widthPct:tt,centerPct:W+tt/2}})});count=f(()=>this.piramidItems().length);maxHeight=f(()=>this.piramidItems().reduce((n,t)=>Math.max(n,t.height),0));static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-timelapse-piramid"]],inputs:{items:[1,"items"],order:[1,"order"]},decls:1,vars:1,consts:[["id","timelapse_experience_content",1,"tl-piramid"],[1,"tl-bars"],[1,"tl-base"],[1,"tl-years"],[1,"tl-year","tl-year--start",3,"--bar-left-pct"],[1,"tl-bar"],[1,"tl-title"],[1,"tl-year","tl-year--start"]],template:function(t,e){t&1&&yt(0,an,8,2,"section",0),t&2&&xt(e.piramidItems().length?0:-1)},styles:['[_nghost-%COMP%]{display:block;width:100%;min-width:0}.tl-piramid[_ngcontent-%COMP%]{box-sizing:border-box;display:block;width:100%;min-width:0;overflow-x:auto;margin-bottom:2em;padding:1.5em 1.5em .75em;border:2px solid var(--app-border-default)}.tl-bars[_ngcontent-%COMP%]{position:relative;width:100%;min-width:0;margin-bottom:.75em}.tl-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;left:var(--bar-left-pct, 0%);width:var(--bar-width-pct, 10%);height:0;background:var(--app-accent-primary);clip-path:polygon(50% 0,100% 100%,0 100%);animation:_ngcontent-%COMP%_tl-grow 1s ease-out forwards;animation-delay:var(--bar-delay, 0ms)}.tl-bar.tl-bar--alt[_ngcontent-%COMP%]{background:var(--app-text-primary)}.tl-title[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--bar-height, 0px) + 6px + 2em);white-space:nowrap;border-bottom:2px solid var(--app-border-default);left:var(--bar-center-pct, 50%);transform:translate(-50%);font-size:.8em;color:var(--app-text-primary);padding-bottom:.15em}.tl-title[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:5px;height:2em;background:var(--app-text-primary)}.tl-base[_ngcontent-%COMP%]{border:2px solid var(--app-border-default);margin:0 0 .5em}.tl-years[_ngcontent-%COMP%]{position:relative;width:100%;min-width:0;height:1.2em}.tl-year[_ngcontent-%COMP%]{position:absolute;left:var(--bar-left-pct, 0%);transform:translate(-50%);font-size:.8em;white-space:nowrap}.tl-year--start[_ngcontent-%COMP%]{bottom:0;border-top:2px solid var(--app-border-default);padding-top:.15em;transform:none;color:var(--app-text-primary)}.tl-year--start[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:100%;left:50%;transform:translate(-50%);width:5px;height:1em;background:var(--app-text-primary)}.full-qual[_ngcontent-%COMP%]{width:100%;margin:0 auto}.third-qual[_ngcontent-%COMP%]{width:70%;float:left}.quarter-qual[_ngcontent-%COMP%]{width:25%;float:left}.qual[_ngcontent-%COMP%]{margin-bottom:40px}.qual[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:0 auto;width:100%}.data[_ngcontent-%COMP%]{height:200px;position:relative;width:100%;margin-bottom:10px}.data[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]{position:absolute;width:0;height:0;bottom:0;animation:item-grow 1s ease forwards}.data[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{position:absolute;bottom:10px;white-space:nowrap;border-bottom:2px solid var(--app-border-default)}.data[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:13px;border-left:2px solid var(--app-border-default)}#item1[_ngcontent-%COMP%]{z-index:1;right:0;border-left:400px solid transparent;border-right:400px solid transparent;border-bottom:var(--item-height) solid var(--app-chart-series-3);--item-height: 200px}#item2[_ngcontent-%COMP%]{z-index:5;right:50px;border-left:100px solid transparent;border-right:100px solid transparent;opacity:.5;border-bottom:var(--item-height) solid var(--app-chart-series-1);--item-height: 50px}#item3[_ngcontent-%COMP%]{z-index:5;left:60px;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:var(--item-height) solid var(--app-chart-series-3);--item-height: 15px}#item3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{position:absolute;left:-65px}#item4[_ngcontent-%COMP%]{z-index:5;left:150px;border-left:75px solid transparent;border-right:75px solid transparent;opacity:.5;border-bottom:var(--item-height) solid var(--app-chart-series-1);--item-height: 37.5px}#item4[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{position:absolute;left:-65px}#item5[_ngcontent-%COMP%]{z-index:5;left:300px;border-left:75px solid transparent;border-right:75px solid transparent;opacity:.5;border-bottom:var(--item-height) solid var(--app-chart-series-1);--item-height: 37.5px}#item5[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:right;position:absolute;left:-65px;bottom:70px}#item5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:80px}#item6[_ngcontent-%COMP%]{z-index:5;left:400px;border-left:200px solid transparent;border-right:200px solid transparent;opacity:.5;border-bottom:var(--item-height) solid var(--app-chart-series-1);--item-height: 100px}#item6[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{position:absolute;bottom:70px}#item6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:80px}#item7[_ngcontent-%COMP%]{z-index:10;left:450px;border-left:125px solid transparent;border-right:125px solid transparent;border-bottom:var(--item-height) solid var(--app-chart-series-1);--item-height: 62.5px}#item7[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:right;position:absolute;left:-67px;bottom:30px}#item7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:40px}@keyframes _ngcontent-%COMP%_tl-grow{0%{height:0}to{height:var(--bar-height, 0px)}}@media(prefers-reduced-motion:reduce){.tl-bar[_ngcontent-%COMP%]{animation:none;height:var(--bar-height, 0px)}}']})};var ke=(a,n)=>n.id;function cn(a,n){if(a&1&&(St(),M(0,"circle",6)),a&2){let t=n.$implicit,e=ot(2);j("stroke",t.color),R("cx",e.size()/2)("cy",e.size()/2)("r",e.radius())("stroke-width",e.thickness())("stroke-dasharray",e.circumference()*t.pct/100+" "+e.circumference())("stroke-dashoffset",-e.circumference()*t.offset/100)("aria-label",t.title+" \u2014 "+t.pct.toFixed(1)+"%")}}function dn(a,n){if(a&1&&(x(0,"li"),M(1,"span",7),x(2,"span",8),p(3),E()()),a&2){let t=n.$implicit;d(),j("background-color",t.color),d(2),A(t.title)}}function mn(a,n){if(a&1&&(x(0,"div",1),St(),x(1,"svg",2)(2,"g"),M(3,"circle",3),F(4,cn,1,9,":svg:circle",4,ke),E()(),ue(),x(6,"ul",5),F(7,dn,4,3,"li",null,ke),E()()),a&2){let t=ot();O("gc-legend-right",t.legendSide()==="right"),d(),R("width",t.size())("height",t.size())("viewBox","0 0 "+t.size()+" "+t.size()),d(),R("transform","rotate(-90 "+t.size()/2+" "+t.size()/2+")"),d(),R("cx",t.size()/2)("cy",t.size()/2)("r",t.radius())("stroke-width",t.thickness()),d(),L(t.slices()),d(3),L(t.slices())}}var ln=["var(--app-chart-series-1)","var(--app-chart-series-2)","var(--app-chart-series-3)","var(--app-chart-series-4)","var(--app-chart-series-5)","var(--app-chart-series-6)","var(--app-chart-series-7)"],Tt=class a{items=U([]);colors=U([]);size=U(180);thickness=U(50);legendSide=U("left");slices=f(()=>{let n=this.items()??[],t=[];for(let s of n){if(typeof s.value!="number"||!Number.isFinite(s.value)){console.warn(`GraphCircle: "${s.title}" descartado \u2014 valor inv\xE1lido`);continue}t.push(s)}let e=t.reduce((s,c)=>s+c.value,0),o=this.colors().length?this.colors():ln,i=0;return t.map((s,c)=>{let m=e?s.value/e*100:0,b={id:s.id,title:s.title,value:s.value,color:o[c%o.length],pct:m,offset:i};return i+=m,b})});radius=f(()=>(this.size()-this.thickness())/2);circumference=f(()=>2*Math.PI*this.radius());static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["app-graph-circle"]],inputs:{items:[1,"items"],colors:[1,"colors"],size:[1,"size"],thickness:[1,"thickness"],legendSide:[1,"legendSide"]},decls:1,vars:1,consts:[[1,"gc",3,"gc-legend-right"],[1,"gc"],[1,"gc-svg"],["fill","none",1,"gc-track"],["fill","none",1,"gc-slice",3,"stroke"],[1,"gc-legend"],["fill","none",1,"gc-slice"],[1,"gc-dot"],[1,"gc-label"]],template:function(t,e){t&1&&yt(0,mn,9,10,"div",0),t&2&&xt(e.slices().length?0:-1)},styles:["[_nghost-%COMP%]{display:block}.gc[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:1em;font-family:Bitter,Helvetica}.gc-svg[_ngcontent-%COMP%]{flex:0 0 auto;display:block;order:1}.gc-legend[_ngcontent-%COMP%]{flex:0 1 auto;min-width:0;order:0}.gc-legend-right[_ngcontent-%COMP%]   .gc-svg[_ngcontent-%COMP%]{order:0}.gc-legend-right[_ngcontent-%COMP%]   .gc-legend[_ngcontent-%COMP%]{order:1}.gc-track[_ngcontent-%COMP%]{stroke:var(--app-chart-track, #4b5859)}.gc-slice[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gc-grow 1s ease-out forwards}.gc-legend[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.gc-legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5em;padding:.25em 0}.gc-dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;flex-shrink:0;margin-top:.25em}.gc-label[_ngcontent-%COMP%]{font-size:.85em;line-height:1.3;text-align:left}.gc-pct[_ngcontent-%COMP%]{margin-left:auto;font-size:.85em;color:var(--app-chart-legend-text, #4b5859)}@keyframes _ngcontent-%COMP%_gc-grow{0%{stroke-dasharray:0 9999}}@media(prefers-reduced-motion:reduce){.gc-slice[_ngcontent-%COMP%]{animation:none}}"]})};function pn(a,n){if(a&1&&(_(0,"li",7)(1,"span",14),p(2),l(),_(3,"span",15),p(4),l()()),a&2){let t=n.$implicit;d(2),A(t.title),d(2),A(t.short_desc)}}function un(a,n){if(a&1&&(_(0,"div",7)(1,"span",14),p(2),l(),_(3,"span",15),p(4),l()()),a&2){let t=n.$implicit;d(2),A(t.title),d(2),A(t.short_desc)}}var Pe=class a{constructor(n){this.staticsAppSvc=n;this.cvInformation.set(this.staticsAppSvc.getDroguierCV())}staticsAppSvc;cvInformation=B(void 0);experience=f(()=>(this.cvInformation()?.laboral_experience??[]).slice(0,7));education=f(()=>this.cvInformation()?.education??[]);interests=f(()=>this.cvInformation()?.interest??[]);degree_awards=f(()=>this.cvInformation()?.degree_awards??[]);lapseExperienceItems=f(()=>(this.cvInformation()?.laboral_experience??[]).map((n,t)=>({id:t+1,title:n.title,date:n.date_begin,dateEnd:n.date_end})));lapseEducationItems=f(()=>(this.cvInformation()?.education??[]).map((n,t)=>({id:t+1,title:n.title,date:n.date_begin,dateEnd:n.date_end})));skill1Items=[{id:1,title:"C#",value:8},{id:2,title:"JavaScript",value:6},{id:3,title:"TypeScript",value:5},{id:4,title:"SQL",value:9},{id:5,title:"Java",value:7},{id:6,title:"PowerShell",value:4},{id:7,title:"C++",value:4}];skill2Items=[{id:1,title:".NET Framework",value:8},{id:2,title:"NET Core",value:8},{id:3,title:"Angular",value:6},{id:4,title:"NodeJS",value:5},{id:5,title:"MS SQL",value:7},{id:6,title:"GIT",value:6},{id:7,title:"Message Queuing",value:6}];static \u0275fac=function(t){return new(t||a)(_e(Ce))};static \u0275cmp=y({type:a,selectors:[["app-home"]],decls:39,vars:6,consts:[["id","personalwebsite"],["id","timelapse_experience",1,"xp","qual","full-qual"],[3,"items"],["id","qualifications"],["id","timelapse_education",1,"qual","third-qual"],["id","awards_description",1,"qual","quarter-qual"],[1,"awards-list"],[1,"award-card"],["id","skills-sets",1,"sknex"],["id","skills-interest",1,"skills-text"],["id","skills-details",1,"skills-vis"],["id","skill1"],["legendSide","right",3,"items"],["id","skill2"],[1,"award-title"],[1,"award-desc"]],template:function(t,e){if(t&1&&(_(0,"section")(1,"header")(2,"h3",0),p(3),l(),_(4,"h1"),p(5),l()(),Y(6,"hr"),_(7,"div",1)(8,"h2"),p(9,"Experience"),l(),Y(10,"app-timelapse-piramid",2),l(),_(11,"div",3)(12,"div",4)(13,"h2"),p(14,"Education"),l(),Y(15,"app-timelapse-piramid",2),l(),_(16,"div",5)(17,"h2"),p(18,"Awards & Honors"),l(),_(19,"ul",6),F(20,pn,5,2,"li",7,Ft),l()()(),_(22,"div",8)(23,"div",9)(24,"h2"),p(25,"Skills & Expertise"),l(),F(26,un,5,2,"div",7,Ft),l(),_(28,"div",10)(29,"h2"),p(30,"TI Tools Graph"),l(),_(31,"div",11)(32,"h3"),p(33,"Lenguajes"),l(),Y(34,"app-graph-circle",12),l(),_(35,"div",13)(36,"h3"),p(37,"Herramientas y Frameworks"),l(),Y(38,"app-graph-circle",2),l()()()()),t&2){let o,i;d(3),A((o=e.cvInformation())==null?null:o.web),d(2),A((i=e.cvInformation())==null?null:i.name),d(5),at("items",e.lapseExperienceItems()),d(5),at("items",e.lapseEducationItems()),d(5),L(e.degree_awards()),d(6),L(e.interests()),d(8),at("items",e.skill1Items),d(4),at("items",e.skill2Items)}},dependencies:[Ct,Tt],styles:['[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--app-background-base);color:var(--app-text-primary);font-family:var(--app-font-display, "Bitter", Georgia, serif)}h2[_ngcontent-%COMP%]{border:2px solid var(--app-border-default);padding:.5em;display:inline-block}h3[_ngcontent-%COMP%]{line-height:.3em}header[_ngcontent-%COMP%]{overflow:hidden}header[_ngcontent-%COMP%]   #personalwebsite[_ngcontent-%COMP%]{float:right;margin-top:45px}header[_ngcontent-%COMP%]   #twitter[_ngcontent-%COMP%]{float:right;margin-top:45px}section[_ngcontent-%COMP%]{width:950px;margin:0 auto}hr[_ngcontent-%COMP%]{border:1px solid var(--app-border-default)}.full-qual[_ngcontent-%COMP%]{width:100%;margin:0 auto}.qual[_ngcontent-%COMP%]{margin-bottom:40px}#qualifications[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.5rem}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%]{flex:0 0 70%}#qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%]{flex:1 1 30%}.awards-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.75rem}.award-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.75rem 1rem;border:1px solid var(--app-border-inverse);border-left:3px solid var(--app-accent-primary);border-radius:8px;background:var(--app-chip-background);box-sizing:border-box;transition:background-color .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease}.award-card[_ngcontent-%COMP%]:hover, .award-card[_ngcontent-%COMP%]:focus-visible{background:var(--app-chip-background-strong);border-color:var(--app-accent-tertiary);transform:translateY(-2px);box-shadow:0 4px 12px var(--app-shadow)}.award-title[_ngcontent-%COMP%]{color:var(--app-accent-tertiary);font-weight:600;font-size:.9rem;line-height:1.3}.award-desc[_ngcontent-%COMP%]{color:color-mix(in srgb,var(--app-text-primary) 65%,var(--app-text-muted));font-size:.8rem;line-height:1.6}.sknex[_ngcontent-%COMP%]{margin-bottom:2em;display:flex;align-items:flex-start;gap:1.5rem}.sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%]{flex:1 1 30%;display:flex;flex-direction:column;gap:.75rem}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:0 0 70%;display:flex;flex-wrap:wrap;align-items:flex-start;gap:1.5rem}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{flex:1 1 100%}#skill1[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]{flex:1 1 calc(50% - .75rem);min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center}#skill1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:1.2;margin:0 0 1rem;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:2px;color:var(--app-text-primary)}@media(max-width:1024px){section[_ngcontent-%COMP%]{width:100%;padding:0 1.5em;box-sizing:border-box}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%]{flex:0 0 60%}#qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%], .sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%]{flex:1 1 40%}.sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:0 0 60%}}@media(max-width:650px){section[_ngcontent-%COMP%]{padding:0 1em;overflow-x:hidden}header[_ngcontent-%COMP%]   #personalwebsite[_ngcontent-%COMP%]{float:none;margin-top:0}#qualifications[_ngcontent-%COMP%]{flex-direction:column}#qualifications[_ngcontent-%COMP%]   .third-qual[_ngcontent-%COMP%], #qualifications[_ngcontent-%COMP%]   .quarter-qual[_ngcontent-%COMP%]{flex:1 1 100%;width:100%;float:none}.sknex[_ngcontent-%COMP%]{flex-direction:column}.sknex[_ngcontent-%COMP%]   .skills-text[_ngcontent-%COMP%], .sknex[_ngcontent-%COMP%]   .skills-vis[_ngcontent-%COMP%]{flex:1 1 100%;width:100%;float:none;margin-right:0}#skill1[_ngcontent-%COMP%], #skill2[_ngcontent-%COMP%]{flex:1 1 100%;width:100%}}']})};var Ot=class a{constructor(n){this.http=n}http;baseUrl=Ee.STATICS_API_URL;apiResource="session";registrarSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/registrar`,n,t)}validarSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/validar`,n,t)}getSesion(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/getSesion`,n,t)}validarGoogleAuth(n,t){return this.http.post(`${this.baseUrl}${this.apiResource}/google-auth`,n,t)}static \u0275fac=function(t){return new(t||a)(pe(Me))};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})};var $="droguier_session",De=class a{platformId=r(ht);router=r(Ie);sessionApiSvc=r(Ot);sessionSignal=B(null);sessionUserSignal=B(null);constructor(){if(this.isBrowser()){let n=localStorage.getItem($);if(n)try{let t=JSON.parse(n);this.sessionSignal.set(t),this.sessionUserSignal.set(null)}catch{localStorage.removeItem($)}}}get session(){return this.sessionSignal.asReadonly()}get sessionUser(){return this.sessionUserSignal.asReadonly()}hasSession(){if(!this.isBrowser())return!!this.sessionSignal();let n=localStorage.getItem($),t=!!n;if(!t)return(this.sessionSignal()||this.sessionUserSignal())&&(this.sessionSignal.set(null),this.sessionUserSignal.set(null)),!1;if(t&&!this.sessionSignal())try{let e=JSON.parse(n);this.sessionSignal.set(e)}catch{return localStorage.removeItem($),this.sessionSignal.set(null),this.sessionUserSignal.set(null),!1}return t}getToken(){if(!this.isBrowser())return null;let n=localStorage.getItem($);if(!n)return null;try{let t=JSON.parse(n),e=t?.token??t?.accessToken??t?.data?.token??null;return typeof e=="string"&&e.trim().length>0?e:null}catch{return null}}setSession(n){this.isBrowser()&&n!==void 0&&(localStorage.setItem($,JSON.stringify(n)),this.sessionSignal.set(n),this.sessionUserSignal.set(null))}setSessionUser(n){this.sessionUserSignal.set(this.deserializeSessionUser(n))}async cargarSesion(n=!1){let t=this.sessionUserSignal();if(!n&&t)return t;let e=this.sessionSignal();if(!e)return this.sessionUserSignal.set(null),null;try{let o=await this.getSesionWithSubscribe({data:e?.data},"initial");if(this.isSessionExpiredMessage(o?.message)&&await this.revalidateSessionToken()){let c=this.sessionSignal();o=await this.getSesionWithSubscribe({data:c?.data},"after-refresh")}if(o?.success===!1||this.isSessionExpiredMessage(o?.message))return this.clearSession(),this.redirectToPublicHome(),null;let i=this.deserializeSessionUser(o?.data??null);return this.sessionUserSignal.set(i),i}catch{return this.clearSession(),this.redirectToPublicHome(),null}}getSesionWithSubscribe(n,t){return new Promise((e,o)=>{this.sessionApiSvc.getSesion(n).subscribe({next:i=>{e(i)},error:i=>{if(i?.status===403){let s={success:!1,message:i?.error?.message??i?.statusText??"Forbidden",status:403,data:i?.error??null};e(s)}else o(i)}})})}async revalidateSessionToken(){let n=this.sessionSignal();try{let t=await oe(this.sessionApiSvc.validarSesion(null));if(t?.success===!1||!t?.token)return!1;let e=te(u(u({},n??{}),t),{data:t?.data??n?.data});return this.setSession(e),!0}catch{return!1}}clearSession(){this.isBrowser()&&(localStorage.removeItem($),this.sessionSignal.set(null),this.sessionUserSignal.set(null))}deserializeSessionUser(n){if(!n)return null;if(typeof n=="object")return n;if(typeof n!="string")return null;try{let t=JSON.parse(n);if(typeof t=="string"){let e=JSON.parse(t);return e&&typeof e=="object"?e:null}return t&&typeof t=="object"?t:null}catch{return null}}isSessionExpiredMessage(n){return typeof n!="string"?!1:n.toLowerCase().includes("session has expired")}redirectToPublicHome(){this.isBrowser()&&this.router.navigate(["/home"])}isBrowser(){return Mt(this.platformId)||typeof window<"u"&&typeof window.localStorage<"u"}static \u0275fac=function(t){return new(t||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})};function rt(a){return a.buttons===0||a.detail===0}function st(a){let n=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Ut;function Se(){if(Ut==null){let a=typeof document<"u"?document.head:null;Ut=!!(a&&(a.createShadowRoot||a.attachShadow))}return Ut}function Bt(a){if(Se()){let n=a.getRootNode?a.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function k(a){return a.composedPath?a.composedPath()[0]:a.target}var zt;try{zt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zt=!1}var D=(()=>{class a{_platformId=r(ht);isBrowser=this._platformId?Mt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ct;function Ne(){if(ct==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ct=!0}))}finally{ct=ct||!1}return ct}function Q(a){return Ne()?a:!!a.capture}function H(a){return a instanceof K?a.nativeElement:a}var Re=new T("cdk-input-modality-detector-options"),Fe={ignoreKeys:[18,17,224,91,16]},Le=650,jt={passive:!0,capture:!0},Ue=(()=>{class a{_platform=r(D);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ne(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=k(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Le||(this._modality.next(rt(t)?"keyboard":"mouse"),this._mostRecentTarget=k(t))};_onTouchstart=t=>{if(st(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=k(t)};constructor(){let t=r(P),e=r(et),o=r(Re,{optional:!0});if(this._options=u(u({},Fe),o),this.modalityDetected=this._modality.pipe(de(1)),this.modalityChanged=this.modalityDetected.pipe(ce()),this._platform.isBrowser){let i=r(gt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,jt),i.listen(e,"mousedown",this._onMousedown,jt),i.listen(e,"touchstart",this._onTouchstart,jt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),dt=(function(a){return a[a.IMMEDIATE=0]="IMMEDIATE",a[a.EVENTUAL=1]="EVENTUAL",a})(dt||{}),Be=new T("cdk-focus-monitor-default-options"),At=Q({passive:!0,capture:!0}),Ht=(()=>{class a{_ngZone=r(P);_platform=r(D);_inputModalityDetector=r(Ue);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(et);_stopInputModalityDetector=new N;constructor(){let t=r(Be,{optional:!0});this._detectionMode=t?.detectionMode||dt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=k(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=H(t);if(!this._platform.isBrowser||o.nodeType!==1)return ae();let i=Bt(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let c={checkChildren:e,subject:new N,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=H(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let i=H(t),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([c,m])=>this._originChanged(c,e,m)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===dt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===dt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Le:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),i=k(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,At),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,At)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(me(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,At),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,At),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Oa(a){return Array.isArray(a)?a:[a]}var ze=new Set,V,Gt=(()=>{class a{_platform=r(D);_nonce=r(ge,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):fn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&bn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function bn(a,n){if(!ze.has(a))try{V||(V=document.createElement("style"),n&&V.setAttribute("nonce",n),V.setAttribute("type","text/css"),document.head.appendChild(V)),V.sheet&&(V.sheet.insertRule(`@media ${a} {body{ }}`,0),ze.add(a))}catch(t){console.error(t)}}function fn(a){return{matches:a==="all"||a==="",media:a,addListener:()=>{},removeListener:()=>{}}}var hn=200,kt=class{_letterKeyStream=new N;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new N;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:hn;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(le(t=>this._pressedLetters.push(t)),se(n),re(()=>this._pressedLetters.length>0),ie(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function je(a,...n){return n.length?n.some(t=>a[t]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var Pt=class{_items;_activeItemIndex=B(-1);_activeItem=B(null);_wrap=!1;_typeaheadSubscription=ee.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Nt?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):Rt(n)&&(this._effectRef=be(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new N;change=new N;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new kt(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!n[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||je(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n=="number"?n:t.indexOf(n),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+n*e+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return Rt(this._items)?this._items():this._items instanceof Nt?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Kt=class extends Pt{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var $t={},Vt=class a{_appId=r(fe);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),$t.hasOwnProperty(n)||($t[n]=0),`${n}${t?a._infix+"-":""}${$t[n]++}`}static \u0275fac=function(t){return new(t||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})};var q;function bo(){if(q==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return q=!1,q;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)q=!0;else{let a=Element.prototype.scrollTo;a?q=!/\{\s*\[native code\]\s*\}/.test(a.toString()):q=!1}}return q}function ho(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var gn=new T("MATERIAL_ANIMATIONS"),He=null;function vn(){return r(gn,{optional:!0})?.animationsDisabled||r(he,{optional:!0})==="NoopAnimations"?"di-disabled":(He??=r(Gt).matchMedia("(prefers-reduced-motion)").matches,He?"reduced-motion":"enabled")}function X(){return vn()!=="enabled"}function Ao(a){return a==null?"":typeof a=="string"?a:`${a}px`}var C=(function(a){return a[a.FADING_IN=0]="FADING_IN",a[a.VISIBLE=1]="VISIBLE",a[a.FADING_OUT=2]="FADING_OUT",a[a.HIDDEN=3]="HIDDEN",a})(C||{}),qt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=C.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ge=Q({passive:!0,capture:!0}),Wt=class{_events=new Map;addHandler(n,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ge)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ge)))}_delegateEventHandler=n=>{let t=k(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(n))})}},mt={enterDuration:225,exitDuration:150},_n=800,Ke=Q({passive:!0,capture:!0}),$e=["mousedown","touchstart"],Ve=["mouseup","mouseleave","touchend","touchcancel"],yn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return a})(),lt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Wt;constructor(n,t,e,o,i){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=H(e)),i&&i.get(It).load(yn)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=u(u({},mt),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||xn(n,t,o),c=n-o.left,m=t-o.top,b=i.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${c-s}px`,h.style.top=`${m-s}px`,h.style.height=`${s*2}px`,h.style.width=`${s*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(h);let J=window.getComputedStyle(h),pt=J.transitionProperty,g=J.transitionDuration,S=pt==="none"||g==="0s"||g==="0s, 0s"||o.width===0&&o.height===0,I=new qt(this,h,e,S);h.style.transform="scale3d(1, 1, 1)",I.state=C.FADING_IN,e.persistent||(this._mostRecentTransientRipple=I);let G=null;return!S&&(b||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ut=()=>{G&&(G.fallbackTimer=null),clearTimeout(tt),this._finishRippleTransition(I)},W=()=>this._destroyRipple(I),tt=setTimeout(W,b+100);h.addEventListener("transitionend",ut),h.addEventListener("transitioncancel",W),G={onTransitionEnd:ut,onTransitionCancel:W,fallbackTimer:tt}}),this._activeRipples.set(I,G),(S||!b)&&this._finishRippleTransition(I),I}fadeOutRipple(n){if(n.state===C.FADING_OUT||n.state===C.HIDDEN)return;let t=n.element,e=u(u({},mt),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=C.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=H(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,$e.forEach(e=>{a._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ve.forEach(t=>{this._triggerElement.addEventListener(t,this,Ke)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===C.FADING_IN?this._startFadeOutTransition(n):n.state===C.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=C.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=C.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=rt(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+_n;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!st(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===C.VISIBLE||n.config.terminateOnPointerUp&&n.state===C.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&($e.forEach(t=>a._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Ve.forEach(t=>n.removeEventListener(t,this,Ke)),this._pointerUpEventsRegistered=!1))}};function xn(a,n,t){let e=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var Yt=new T("mat-ripple-global-options"),Vo=(()=>{class a{_elementRef=r(K);_animationsDisabled=X();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=r(P),e=r(D),o=r(Yt,{optional:!0}),i=r(ft);this._globalOptions=o||{},this._rippleRenderer=new lt(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,u(u({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=nt({type:a,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&O("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return a})();var wn={capture:!0},Mn=["focus","mousedown","mouseenter","touchstart"],Zt="mat-ripple-loader-uninitialized",Qt="mat-ripple-loader-class-name",qe="mat-ripple-loader-centered",Dt="mat-ripple-loader-disabled",We=(()=>{class a{_document=r(et);_animationsDisabled=X();_globalRippleOptions=r(Yt,{optional:!0});_platform=r(D);_ngZone=r(P);_injector=r(ft);_eventCleanups;_hosts=new Map;constructor(){let t=r(gt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Mn.map(e=>t.listen(this._document,e,this._onInteraction,wn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Zt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Qt))&&t.setAttribute(Qt,e.className||""),e.centered&&t.setAttribute(qe,""),e.disabled&&t.setAttribute(Dt,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Dt,""):t.removeAttribute(Dt)}_onInteraction=t=>{let e=k(t);if(e instanceof HTMLElement){let o=e.closest(`[${Zt}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Qt)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??mt.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??mt.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Dt),rippleConfig:{centered:t.hasAttribute(qe),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},m=new lt(c,this._ngZone,e,this._platform,this._injector),b=!c.rippleDisabled;b&&m.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:m,hasSetUpEvents:b}),t.removeAttribute(Zt)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=v({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ye=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return a})();var In=new T("MAT_BUTTON_CONFIG");function Ze(a){return a==null?void 0:we(a)}var Xt=(()=>{class a{_elementRef=r(K);_ngZone=r(P);_animationsDisabled=X();_config=r(In,{optional:!0});_focusMonitor=r(Ht);_cleanupClick;_renderer=r(ve);_rippleLoader=r(We);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){r(It).load(Ye);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||a)};static \u0275dir=nt({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(R("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ye(o.color?"mat-"+o.color:""),O("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",Ze],_tabindex:[2,"tabindex","_tabindex",Ze]}})}return a})();var Qe=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=vt({type:a});static \u0275inj=bt({imports:[Et]})}return a})();var En=["matButton",""],Je=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],tn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Cn=["mat-mini-fab",""],Tn=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,Xe=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ci=(()=>{class a extends Xt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=On(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Xe.get(this._appearance):null,i=Xe.get(t);o&&e.remove(...o),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[_t],attrs:En,ngContentSelectors:tn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(wt(Je),M(0,"span",0),z(1),x(2,"span",1),z(3,1),E(),z(4,2),M(5,"span",2)(6,"span",3)),e&2&&O("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return a})();function On(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}var An=new T("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Jt}),Jt={color:"accent"};var Ti=(()=>{class a extends Xt{_options=r(An,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Jt,this.color=this._options.color||Jt.color}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=y({type:a,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[_t],attrs:Cn,ngContentSelectors:tn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(wt(Je),M(0,"span",0),z(1),x(2,"span",1),z(3,1),E(),z(4,2),M(5,"span",2)(6,"span",3)),e&2&&O("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[Tn],encapsulation:2,changeDetection:0})}return a})();var Oi=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=vt({type:a});static \u0275inj=bt({imports:[Qe,Et]})}return a})();export{Ot as a,De as b,rt as c,st as d,k as e,D as f,H as g,Ht as h,Oa as i,je as j,Kt as k,Vt as l,Ye as m,bo as n,ho as o,Ao as p,X as q,Vo as r,Qe as s,Ci as t,Ti as u,Oi as v,Pe as w};
