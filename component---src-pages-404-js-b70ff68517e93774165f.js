(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4Etg":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a("vOnD"),i=a("ZMKu"),o=(Object(n.d)(i.b.div).withConfig({displayName:"videoCaptionStyles__Title",componentId:"sc-1fiqcw7-0"})([""]),Object(n.d)(i.b.div).withConfig({displayName:"videoCaptionStyles__Image",componentId:"sc-1fiqcw7-1"})(["--height:70vh;height:var(--height);width:100%;&::before{content:'';position:absolute;height:var(--height);width:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);}img{height:var(--height);width:100%;object-fit:cover;}"])),r=Object(n.d)(i.b.div).withConfig({displayName:"videoCaptionStyles__Video",componentId:"sc-1fiqcw7-2"})(["height:80vh;&::before{content:'';position:absolute;height:80vh;width:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);}video{object-position:center;object-fit:cover;}"]),c=Object(n.d)(i.b.div).withConfig({displayName:"videoCaptionStyles__BriefContainer",componentId:"sc-1fiqcw7-3"})(["color:",";"],(function(e){return e.theme.defaultWhite})),l=Object(n.d)(i.b.div).withConfig({displayName:"videoCaptionStyles__BriefBackground",componentId:"sc-1fiqcw7-4"})(["background:black;"])},Cqcx:function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),i=a.n(n),o=a("ZMKu"),r=a("vOnD"),c=Object(r.d)(o.b.div).withConfig({displayName:"contactUsStyles__ContactContainer",componentId:"sc-2zopmp-0"})(["color:",";height:100%;width:100%;background-color:",";"],(function(e){return e.theme.defaultBlack}),(function(e){return e.theme.red})),l=Object(r.d)(o.b.div).withConfig({displayName:"contactUsStyles__FormGroup",componentId:"sc-2zopmp-1"})(["display:flex;flex-direction:column;input,textarea{font-size:16px;height:30px;width:100%;border-radius:8px;border:1px solid ",";margin-bottom:10px;&:focus{box-shadow:0px 0px 1px 1px rgba(0,0,0,0.75);}}textarea{height:150px;}"],(function(e){return e.theme.defaultBlack})),s=a("G3kJ"),d=a("ob4f"),m=a("tpVG"),u=a("Wcq6"),p=a.n(u);p.a.apps.length||p.a.initializeApp({apiKey:"AIzaSyCpUnp6Q3J4ASWAb0eSLOVZqDRyYsa6lT8",authDomain:"pathfinder-designs.firebaseapp.com",databaseURL:"https://pathfinder-designs.firebaseio.com",projectId:"pathfinder-designs",storageBucket:"pathfinder-designs.appspot.com",messagingSenderId:"241203238141",appId:"1:241203238141:web:768ef1cd0bf183da005a94",measurementId:void 0});var f=p.a;t.a=function(){var e=Object(o.c)(),t=Object(d.a)({triggerOnce:!0,rootMargin:"-100px"}),a=t[0],r=t[1];return Object(n.useEffect)((function(){r&&e.start("visible");var t;(t=document.querySelector("form")).addEventListener("submit",(function(e){console.log(t.name.value),console.log(t.email.value),console.log(t.message.value),f.firestore().collection("emails").add({name:t.name.value,email:t.email.value,message:t.message.value,time:new Date(Date.now())}).then((function(){alert("Submetido com sucesso! Iremos contactar o mais brevemente possível!"),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value="",window.location.href="https://rodrigorochadev.github.io/pathfinderdesigns/"})).catch((function(){alert("Erro ao submeter. Por favor tente novamente. Se o erro persistir, tente mais tarde, ou contacte-nos.")})),e.preventDefault(),e.stopImmediatePropagation()}))}),[e,r]),i.a.createElement(c,null,i.a.createElement(s.c,{ref:a,animate:e,initial:"hidden",variants:m.c},i.a.createElement(s.f,null,i.a.createElement(i.a.Fragment,null),i.a.createElement(s.d,{black:!0},i.a.createElement(o.b.h1,{variants:m.a},"Fale connosco."),i.a.createElement(o.b.p,{variants:m.a},"Tire dúvidas, proponha ideias. Teremos todo o gosto em ajudar e responderemos o mais rapidamente possível."),i.a.createElement(o.b.p,{variants:m.a},"Caso prefira, pode também comunicar pelas nossas redes sociais."),i.a.createElement("br",null)),i.a.createElement(o.b.form,{variants:m.a,id:"form"},i.a.createElement(l,null,i.a.createElement("label",{htmlFor:"name"},i.a.createElement("p",null,"Nome"),i.a.createElement("input",{type:"text",id:"name",required:!0}))),i.a.createElement(l,{className:"form-group"},i.a.createElement("label",{htmlFor:"name"},i.a.createElement("p",null,"Email"),i.a.createElement("input",{type:"email",id:"email",required:!0}))),i.a.createElement(l,{className:"form-group"},i.a.createElement("label",{htmlFor:"name"},i.a.createElement("p",null,"Mensagem"),i.a.createElement("textarea",{type:"text",id:"message",required:!0}))),i.a.createElement(s.b,null,i.a.createElement("button",null,"Enviar"))))))}},IPIt:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("ZMKu"),r=a("4Etg"),c=a("G3kJ"),l=a("ob4f"),s=a("tpVG");t.a=function(e){var t=Object(o.c)(),a=Object(l.a)({triggerOnce:!0,rootMargin:"-100px"}),d=a[0],m=a[1];return Object(n.useEffect)((function(){m&&t.start("visible")}),[t,m]),i.a.createElement(r.a,null,i.a.createElement(r.d,null,i.a.createElement("video",{height:"100%",width:"100%",muted:!0,loop:!0,autoPlay:!0,src:e.video})),i.a.createElement(c.c,{ref:d,variants:s.c,initial:"hidden",animate:t},i.a.createElement(c.f,null,i.a.createElement(r.b,null,i.a.createElement(c.d,null,i.a.createElement(o.b.h1,{variants:s.a},e.caption))))))}},JRGZ:function(e,t,a){e.exports=a.p+"static/404-3ff99271965807d8cb99026d34108aed.mp4"},Wcq6:function(e,t,a){"use strict";var n,i=(n=a("wj3C"))&&"object"==typeof n&&"default"in n?n.default:n;i.registerVersion("firebase","7.17.1","app"),e.exports=i},buKs:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("vOnD"),r=a("ZMKu"),c=Object(o.d)(r.b.div).withConfig({displayName:"pageTitleStyles__HeroContainer",componentId:"qy3jur-0"})(["padding-top:35vh;"]),l=Object(o.d)(r.b.div).withConfig({displayName:"pageTitleStyles__Title",componentId:"qy3jur-1"})(["p{margin-bottom:0;}color:",";h1{transition:0.4s ease;font-size:40px;}@media screen and (min-width:360px){h1{font-size:44px;}}@media screen and (min-width:568px){h1{font-size:48px;}}@media screen and (min-width:768px){h1{font-size:64px;}}@media screen and (min-width:1244px){h1{font-size:72px;}}"],(function(e){return e.theme.text})),s=a("G3kJ"),d=a("ob4f"),m=a("tpVG");t.a=function(e){var t=Object(r.c)(),a=Object(d.a)({triggerOnce:!0}),o=a[0],u=a[1];return Object(n.useEffect)((function(){u&&t.start("visible")}),[t,u]),i.a.createElement(c,null,i.a.createElement(s.c,null,i.a.createElement(l,{ref:o,animate:t,initial:"hidden",variants:m.b},i.a.createElement("p",null,e.leading),i.a.createElement("h1",null,e.title))))}},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("Bl7J"),r=a("vrFN"),c=a("buKs"),l=a("IPIt"),s=a("Cqcx"),d=a("JRGZ"),m=a.n(d);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"404: Not found"}),i.a.createElement(c.a,{title:"pagina não existe.",leading:"@pathfinderdesigns"}),i.a.createElement(l.a,{video:m.a,caption:"A pagina pretendida não existe."}),i.a.createElement(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-b70ff68517e93774165f.js.map