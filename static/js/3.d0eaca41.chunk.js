(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(274),c=n.n(o);t.a=function(e){var t=e.children,n=e.className,a=e.style,o=e.title,i=e.placement;return void 0===o?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(c.a,{title:o,placement:i,className:n,style:a},t)}},271:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(32),c=n(65),i=n(383),l=n(66),u=n(9),m=n(286),s=n.n(m),p=n(287),d=n.n(p),b=n(288),f=n.n(b),E=n(48),g=n(69),v=n(67),h=n(7),j=n.n(h),O=n(272),k=n.n(O),C=Object(u.b)(function(e){return{root:{width:48,height:48,color:"white"}}});function x(e){var t=e.icon,n=e.tooltip,a=e.onClick,o=e.className,c=e.style,i=e.tooltipComponent,l=C(),u=j()(l.root,o);return r.a.createElement(i,{title:n,placement:"bottom"},r.a.createElement(k.a,{onClick:a,className:u,style:c},r.a.createElement(t,null)))}x.components={tooltipComponent:"Tooltip"};var N=x,y=n(261),B=Object(v.a)({Tooltip:y.a})(N),w=n(285),I=n.n(w),S=n(251),z=n.n(S),G=n(14),P=n.n(G),T=n(264),W=n.n(T);function F(e){var t=e.children,n=e.buttonName,o=e.buttonComponent,i=e.popoverComponent,l=Object(a.useState)(null),u=Object(c.a)(l,2),m=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{onClick:function(e){return s(e.currentTarget)}},n),r.a.createElement(i,{open:Boolean(m),anchorEl:m,onClose:function(){return s(null)}},t))}F.components={buttonComponent:"Button",popoverComponent:"Popover"};var H=F,A=Object(v.a)({Button:W.a,Popover:function(e){return r.a.createElement(z.a,{onClose:e.onClose,open:e.open,anchorEl:e.anchorEl,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e.children)}})(H),J=n(248),M=n.n(J),D=n(49),K=n.n(D),R=Object(u.b)(function(e){return{root:{padding:e.spacing.unit},img:{width:64,height:64,padding:e.spacing.unit}}});var q=function(e){var t=e.name,n=e.alt,a=e.src,o=e.href,c=e.className,i=e.style,l=R(),u=j()(l.root,c);return r.a.createElement("div",{className:u,style:i},r.a.createElement(M.a,{component:"a",href:o},r.a.createElement(P.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement("img",{className:l.img,style:i,alt:n,src:a}),r.a.createElement(K.a,null,t))))},L=Object(u.b)(function(e){return{card:{margin:e.spacing.unit,minWidth:180,minHeight:60}}});var Q=function(e){var t=L(),n=Object(l.b)(),a=Object(c.a)(n,1)[0];return r.a.createElement(A,{buttonComponent:function(e){return r.a.createElement(B,{icon:I.a,tooltip:e.children,onClick:e.onClick})},popoverComponent:function(e){return r.a.createElement(z.a,{onClose:e.onClose,open:e.open,anchorEl:e.anchorEl,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e.children)},buttonName:a("Slide Projects")},r.a.createElement(P.a,{container:!0,direction:"row",jusitfy:"flex-start",alignItems:"flex-start",className:t.card},E.apps.map(function(e){return r.a.createElement(q,{key:e.name,alt:a(e.name),name:a(e.name),src:e.icon,href:e.link})})))},U=Object(u.b)(function(e){return{grow:{flexGrow:1}}});var V=Object(i.a)(function(e){var t=U(),n=Object(l.b)(),a=Object(c.a)(n,1)[0],o=e.history,i=e.onBack;return r.a.createElement(g.a,null,void 0!==i&&r.a.createElement(B,{icon:s.a,tooltip:a("back"),onClick:i}),r.a.createElement("div",{className:t.grow}),r.a.createElement(Q,null),r.a.createElement(B,{icon:d.a,tooltip:a("Introduction"),onClick:function(){o.push("/introduction/me")}}),r.a.createElement(B,{icon:f.a,tooltip:a("GitHub Repo"),onClick:function(){window.location=E.repo}}))}),X=n(70),Y=n(289),Z=n.n(Y),$=n(291),_=n.n($),ee=Object(u.b)(function(e){return{button:{color:"white"}}});var te=function(e){var t=ee(),n=Object(l.b)(),a=Object(c.a)(n,1)[0];return r.a.createElement(A,{buttonComponent:function(e){return r.a.createElement(W.a,{onClick:e.onClick,className:t.button},e.children)},popoverComponent:function(e){return r.a.createElement(z.a,{onClose:e.onClose,open:e.open,anchorEl:e.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},e.children)},buttonName:a("Old Website")},r.a.createElement(Z.a,null,E.oldWebs.map(function(e){return r.a.createElement(_.a,{key:e.name,component:"a",href:e.link},a(e.name))})))},ne=Object(u.b)(function(e){return{text:{color:"white"}}});var ae=function(e){var t=ne();return r.a.createElement(X.a,null,r.a.createElement(P.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(K.a,{className:t.text},"\xa9 2018 ballfish"),r.a.createElement(te,null)))};t.a=function(e){return r.a.createElement(o.a,Object.assign({appBarComponent:V,footerComponent:ae},e))}},385:function(e,t,n){"use strict";n.r(t);var a=n(65),r=n(0),o=n.n(r),c=n(383),i=n(9),l=n(362),u=n.n(l),m=n(364),s=n.n(m),p=n(365),d=n.n(p),b=n(67),f=n(349),E=n.n(f),g=n(357),v=n(14),h=n.n(v),j=Object(i.b)(function(e){return{leftButton:{zIndex:e.zIndex.mobileStepper,position:"relative",left:-20},rightButton:{zIndex:e.zIndex.mobileStepper,position:"relative",right:-20}}}),O=Object(g.bindKeyboard)(E.a);function k(e){var t=j(),n=Object(r.useState)(0),c=Object(a.a)(n,2),i=c[0],l=c[1],u=e.children,m=e.index,s=void 0===m?i:m,p=e.onChangeIndex,d=void 0===p?l:p,b=e.onBack,f=e.frameComponent,E=e.nextButtonComponent,g=e.prevButtonComponent;return o.a.createElement(f,{onBack:b},o.a.createElement(h.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},o.a.createElement(h.a,{container:!0,item:!0,xs:1,justify:"flex-start"},o.a.createElement(g,{className:t.leftButton,onClick:function(){var e=s-1;d(e<0?u.length-1:e)}})),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(O,{index:s,onChangeIndex:d,enableMouseEvents:!0},u)),o.a.createElement(h.a,{container:!0,item:!0,xs:1,justify:"flex-end"},o.a.createElement(E,{className:t.rightButton,onClick:function(){return d((s+1)%u.length)}}))))}k.components={frameComponent:"Frame",nextButtonComponent:"NextButton",prevButtonComponent:"PrevButton"};var C=k,x=n(32),N=Object(i.b)(function(e){return{root:{background:e.palette.background.paper,boxShadow:e.shadows[3]}}}),y=function(e){return function(t){var n=N(),a=t.className,r=t.onClick;return o.a.createElement("div",{className:a},o.a.createElement(u.a,{size:"small",className:n.root,onClick:r},o.a.createElement(e,null)))}},B=Object(b.a)({Frame:x.a,PrevButton:y(s.a),NextButton:y(d.a)})(C),w=n(271);var I=function(e){return o.a.createElement(B,Object.assign({frameComponent:w.a},e))},S=n(7),z=n.n(S),G=n(66),P=n(49),T=n.n(P),W=Object(i.b)(function(e){return{root:{paddingTop:3*e.spacing.unit,paddingBottom:e.spacing.unit}}});var F=function(e){var t=W(),n=e.children;return o.a.createElement(T.a,{className:t.root,variant:"h4"},n)},H=n(48),A=Object(i.b)(function(e){return{padding:{padding:e.spacing.unit},img:{background:'no-repeat center/cover url("'.concat(H.personAvatar,'")'),minHeight:360,marginTop:e.spacing.unit,marginBottom:e.spacing.unit},text:{paddingBottom:2*e.spacing.unit}}});var J=function(e){var t=Object(G.b)(),n=Object(a.a)(t,1)[0],r=A();return o.a.createElement(h.a,{container:!0,direction:"column"},o.a.createElement(F,null,n("About Me")),o.a.createElement(h.a,{className:r.img}),o.a.createElement(T.a,{className:z()(r.padding,r.text),variant:"body1"},n(H.content)))},M=n(269),D=n.n(M),K=n(270),R=n.n(K),q=Object(i.b)(function(e){return{padding:{padding:e.spacing.unit}}});var L=function(e){var t=q(),n=Object(G.b)(),r=Object(a.a)(n,1)[0],c=e.title,i=e.description;return o.a.createElement("section",{className:t.padding},o.a.createElement(T.a,{variant:"h6"},r(c)),o.a.createElement(T.a,{className:t.padding,variant:"body2"},r(i)))},Q=Object(i.b)(function(e){return{padding:{padding:e.spacing.unit}}});var U=function(e){var t=Q(),n=e.items;return o.a.createElement("section",{className:t.padding},n.map(function(e,t){var n=e.title,a=e.description;return o.a.createElement(L,{key:t,title:n,description:a})}))};var V=function(e){var t=Object(G.b)(),n=Object(a.a)(t,1)[0],c=Object(r.useState)(0),i=Object(a.a)(c,2),l=i[0],u=i[1],m=H.skillGroups[l].items;return o.a.createElement(h.a,{container:!0,direction:"column"},o.a.createElement(F,null,n("Skill Tree")),o.a.createElement(D.a,{value:l,onChange:function(e,t){return u(t)},fullWidth:!0},H.skillGroups.map(function(e){var t=e.title;return o.a.createElement(R.a,{key:t,label:n(t)})})),o.a.createElement(U,{items:m}))};var X=function(e){var t=Object(G.b)(),n=Object(a.a)(t,1)[0],c=Object(r.useState)(0),i=Object(a.a)(c,2),l=i[0],u=i[1],m=H.experienceGroups[l].items;return o.a.createElement(h.a,{container:!0,direction:"column"},o.a.createElement(F,null,n("Experience")),o.a.createElement(D.a,{value:l,onChange:function(e,t){return u(t)},fullWidth:!0},H.experienceGroups.map(function(e){var t=e.title;return o.a.createElement(R.a,{key:t,label:n(t)})})),o.a.createElement(U,{items:m}))},Y=Object(i.b)(function(e){var t={padding:{padding:e.spacing.unit},link:{textDecoration:"none",color:e.palette.secondary.main},text:{paddingBottom:2*e.spacing.unit}};return H.apps.forEach(function(n){t[n.name]={background:'no-repeat center/contain url("'.concat(n.icon,'")'),minHeight:200,margin:e.spacing.unit}}),t});var Z=function(e){var t=Y(),n=Object(G.b)(),c=Object(a.a)(n,1)[0],i=Object(r.useState)(0),l=Object(a.a)(i,2),u=l[0],m=l[1],s=H.apps[u];return o.a.createElement(h.a,{container:!0,direction:"column"},o.a.createElement(F,null,c("Side Projects")),o.a.createElement(D.a,{value:u,onChange:function(e,t){return m(t)},fullWidth:!0},H.apps.map(function(e){var t=e.name;return o.a.createElement(R.a,{key:t,label:c(t)})})),o.a.createElement(h.a,{className:t[s.name]}),o.a.createElement(T.a,{className:t.padding,variant:"h6"},o.a.createElement("a",{className:t.link,href:s.link},s.link)),o.a.createElement(T.a,{className:z()(t.padding,t.text),variant:"body1"},c(s.description)))},$=[{name:"me",slide:o.a.createElement(J,{key:"me"})},{name:"skills",slide:o.a.createElement(V,{key:"skills"})},{name:"experience",slide:o.a.createElement(X,{key:"experience"})},{name:"side-projects",slide:o.a.createElement(Z,{key:"side-projects"})}];t.default=Object(c.a)(function(e){var t=$.map(function(e){return e.slide}),n=e.match,c=e.history,i=$.findIndex(function(e){return e.name===n.params.description}),l=i<0?Object(r.useState)(0):Object(r.useState)(i),u=Object(a.a)(l,2),m=u[0],s=u[1];return o.a.createElement(I,{index:m,onChangeIndex:function(e){c.push("/introduction/".concat($[e].name)),s(e)},onBack:function(){c.push("/")}},t)})}}]);
//# sourceMappingURL=3.d0eaca41.chunk.js.map