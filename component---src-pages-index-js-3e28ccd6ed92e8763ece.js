(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3GGS":function(e,t,a){e.exports=a.p+"static/homepage-f6d24ca0fb78cf6048ac55ea3175292b.mp4"},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),c=i(a("q1tI")),l=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+o+a+i+t+n+r+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},q=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(A,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?c.default.createElement("picture",null,r(i),o):o})),A=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:l,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,d.default)({opacity:R?1:0,transition:V?"opacity "+v+"ms":"none"},o),L="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&C,o,f),W={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:S};if(g){var T=g,H=m(g);return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),L&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&C)}),H.base64&&c.default.createElement(q,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:W,imageVariants:T,generateSources:x}),H.tracedSVG&&c.default.createElement(q,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:W,imageVariants:T,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(A,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},H,{imageVariants:T}))}}))}if(h){var M=h,P=m(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete G.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},L&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:L,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&C)}),P.base64&&c.default.createElement(q,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:M,generateSources:x}),P.tracedSVG&&c.default.createElement(q,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:M,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(M),c.default.createElement(A,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:M}))}}))}return null},t}(c.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),L=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});V.propTypes={resolutions:j,sizes:L,fixed:l.default.oneOfType([j,l.default.arrayOf(j)]),fluid:l.default.oneOfType([L,l.default.arrayOf(L)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var C=V;t.default=C},JRGZ:function(e,t,a){e.exports=a.p+"static/404-3ff99271965807d8cb99026d34108aed.mp4"},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=(a("Wbzz"),a("Bl7J")),s=(a("edhK"),a("9eSz"),a("vrFN")),o=a("buKs"),d=a("IPIt"),c=a("vOnD"),l=a("ZMKu"),u=Object(c.d)(l.b.div).withConfig({displayName:"introductionStyles__IntroductionContainer",componentId:"sc-10330j9-0"})(["color:",";"],(function(e){return e.theme.text})),f=a("G3kJ"),p=a("ob4f"),m=a("tpVG"),g=function(){var e=Object(l.c)(),t=Object(p.a)({triggerOnce:!0,rootMargin:"-100px"}),a=t[0],n=t[1];return Object(i.useEffect)((function(){n&&e.start("visible")}),[e,n]),r.a.createElement(f.c,null,r.a.createElement(u,{ref:a,variants:m.c,initial:"hidden",animate:e},r.a.createElement(f.f,null,r.a.createElement(f.d,{black:!0},r.a.createElement(l.b.h1,{variants:m.a},"Destaque-se."),r.a.createElement(l.b.p,{variants:m.a},"A sua marca, grande ou pequena, tem um superpoder. Tudo o que ela faz tem o potencial de criar boas experiências e sensações na mente dos seus clientes. Todas as ações, por mais pequenas que sejam, têm impacto nessa percepção. Assim, é importante que tais ações estejam cobertas com uma boa idêntidade. A mesma aparência, a mesma tonalidade e o mesmo tom de voz. Uma boa identidade, tem o poder de tornar a sua marca, algo especial aos olhos da sua audiência. Vamos criá-la juntos?")))))},h=a("MDnQ"),b=a("pU2W"),v=(Object(c.d)(l.b.div).withConfig({displayName:"servicesVideoStyles__ServiceVideo",componentId:"oieqo3-0"})(["height:200px;width:90vw;grid-area:grid-video;video{object-fit:cover;object-position:center;}"]),Object(c.d)(l.b.div).withConfig({displayName:"servicesVideoStyles__DescriptionContainer",componentId:"oieqo3-1"})(["grid-area:grid-desc;color:",";"],(function(e){return e.theme.defaultWhite})),Object(c.d)(l.b.div).withConfig({displayName:"servicesVideoStyles__CardGrid",componentId:"oieqo3-2"})(["width:200px;display:flex;flex-wrap:wrap;column-gap:50px;row-gap:20px;justify-content:space-between;justify-content:center;&:nth-child(even){}"]),a("xBXc")),y=a.n(v),S=a("4Etg"),E=function(e){var t=Object(l.c)(),a=Object(p.a)({triggerOnce:!0,rootMargin:"-100px"}),n=a[0],s=a[1];return Object(i.useEffect)((function(){s&&t.start("visible")}),[t,s]),r.a.createElement(S.a,null,r.a.createElement(S.c,null,r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement(f.c,{ref:n,animate:t,initial:"hidden",variants:m.c},r.a.createElement(f.f,null,r.a.createElement(S.b,null,r.a.createElement(f.d,null,r.a.createElement(l.b.h1,{variants:m.a},e.caption),r.a.createElement(l.b.p,{variants:m.a},e.desc))))))},w=a("QUTq"),O=a.n(w),x=a("RPab"),I=a.n(x),R=a("Q6Pv"),z=a.n(R),q=a("JRGZ"),A=a.n(q),V=a("q0nr"),j=a.n(V),L=[{id:0,title:"Websites e apps.",desc:"Quer mostrar o potêncial da sua empresa ou criar um portfólio pessoal? Faremos as suas ideias, uma realidade. Desenhamos e criamos websites e apps adaptáveis a qualquer tipo de dispositivos.",video:A.a,image:O.a},{id:1,title:"Design Gráfico.",desc:"Acreditamos que ter uma identidade forte e reconhecível é a chave para um negócio com sucesso. Assim, ajudamos pessoas e empresas a tomar decisões corretas, um passo de cada vez.",video:A.a,image:z.a},{id:2,title:"UI/UX Design",desc:"Encontramos o melhor design para o vosso website ou aplicação móvel. A interção com o utilizador é sempre prioridade, e é com esse pensamento que desenhamos todos os nossos projetos.",video:j.a,image:I.a}],C=function(){var e=Object(l.c)(),t=Object(p.a)({triggerOnce:!0,rootMargin:"-100px"}),a=(t[0],t[1]);return Object(i.useEffect)((function(){a&&e.start("visible")}),[e,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"torne ideias realidade.",leading:""}),r.a.createElement(E,{image:y.a,caption:"O que fazemos?",desc:"Acreditamos que ter uma identidade forte e reconhecível é a chave para um negócio com sucesso. Assim, ajudamos pessoas e empresas a tomar decisões corretas, um passo de cada vez."}),r.a.createElement(f.a,null,r.a.createElement(f.c,null,r.a.createElement(h.a,null,L.map((function(e){return r.a.createElement(b.a,{key:e.id,title:e.title,desc:e.desc,image:e.image})}))))))},N=a("Cqcx"),W=a("3GGS"),T=a.n(W);t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(s.a,{title:"Bem Vindo!"}),r.a.createElement(o.a,{title:"find your path.",leading:"@pathfinderdesigns"}),r.a.createElement(d.a,{video:T.a,caption:"Elevamos o seu projeto ao próximo nível com uma melhor experiência digital."}),r.a.createElement(g,null),r.a.createElement(C,null),r.a.createElement(N.a,null))}},edhK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},q0nr:function(e,t,a){e.exports=a.p+"static/portfolio-6e3daaaa1b97bc16e6280e80b26d923f.mp4"},xBXc:function(e,t,a){e.exports=a.p+"static/experience-17ca2b91a566da2397c94cf6eabffbf5.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3e28ccd6ed92e8763ece.js.map