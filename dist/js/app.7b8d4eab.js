(function(){"use strict";var t={5338:function(t,e,r){var o=r(6369),n=r(3822),i=r(2631),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"center-center"},[e("HeaderComponent"),e("router-view"),e("FooterComponent")],1)},c=[],s=function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"footer"},[e("div",{staticClass:"block-1"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"block-1__logomain"},[e("img",{staticClass:"block-1__logomain__img",attrs:{src:r(6497),alt:"logo"}}),e("h3",[t._v("Interno")])])]),t._m(0),t._m(1)],1),e("div",{staticClass:"block-2"},[e("h5",[t._v("Pages")]),e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"project"}},[t._v("Project")]),e("router-link",{attrs:{to:"blog"}},[t._v("Blog")])],1),t._m(2)])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-1__paragraph"},[e("p",[t._v(" It is a long established fact that a reader will be distracted lookings. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-1__social"},[e("img",{staticClass:"block-1__twitter",attrs:{src:r(6509),alt:"twitter_logo"}}),e("img",{staticClass:"block-1__linkedIn",attrs:{src:r(3492),alt:"linkedIn_logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"block-3"},[e("h5",[t._v("Contacts")]),e("p",[t._v("55 East Birchwood Ave. Brooklyn, New York 11201")]),e("a",{staticClass:"block-3__link",attrs:{href:"mailto:contact@interno.com"}},[t._v("contact@interno.com")]),e("a",{staticClass:"block-3__link",attrs:{href:"tel:+1234567890"}},[t._v("(123) 456 - 7890")])])}],u={name:"FooterComponent"},d=u,m=r(1001),p=(0,m.Z)(d,s,l,!1,null,"7baa82b0",null),g=p.exports,f=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header__logoAndName"},[e("img",{staticClass:"interno-logo",attrs:{src:r(6497),alt:"Interno logo"}}),e("h1",{staticClass:"header__heading"},[t._v("Interno")])])]),e("nav",{staticClass:"header__nav"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"project"}},[t._v("Project")]),e("router-link",{attrs:{to:"blog"}},[t._v("Blog")])],1)],1)},v=[],_={name:"HeaderComponent",data(){return{}},computed:{},props:{}},h=_,b=(0,m.Z)(h,f,v,!1,null,"60a2ca0f",null),j=b.exports,P={name:"App",components:{FooterComponent:g,HeaderComponent:j}},y=P,C=(0,m.Z)(y,a,c,!1,null,null,null),k=C.exports;const T={projects:[{id:1,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_1.jpg",categoryTag:"Bedroom"},{id:2,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_3.jpg",categoryTag:"Bedroom"},{id:3,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_5.jpg",categoryTag:"Bedroom"},{id:4,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_7.jpg",categoryTag:"Bedroom"},{id:5,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_2.jpg",categoryTag:"Bedroom"},{id:6,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_4.jpg",categoryTag:"Bedroom"},{id:7,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_6.jpg",categoryTag:"Bedroom"},{id:8,title:"Minimal Bedroom",category:"Decor / Architecture",imageUrl:"/img/projectPage/project_8.jpg",categoryTag:"Bedroom"}],selectedCategory:null},E={setCategory(t,e){t.selectedCategory=e}},O={setCategory({commit:t},e){t("setCategory",e)}},x={filteredProjects:t=>t.selectedCategory?t.projects.filter((e=>e.categoryTag===t.selectedCategory)):t.projects,selectedCategory:t=>t.selectedCategory};var A={namespaced:!0,state:T,mutations:E,actions:O,getters:x};const S={currentIndex:0,detailsOfProject:[{id:1,name:"Minimal Look Bedrooms",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem\n\t\t\t\t\t\t\t\t\t\tvitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel\n\t\t\t\t\t\t\t\t\t\tmaximus purus posuere in...",imageSrc:"./img/projectdetailspage/photo_1.jpg"},{id:2,name:"PROJETC - 2",description:"Далеко-далеко за словесными горами в стране гласных и согласных живут \n\t\t\t\t\t\t\t\t\t\tрыбные тексты. Правилами семантика пустился рукопись, гор там проектах ведущими великий.\n\t\t\t\t\t\t\t\t\t\tГрамматики безопасную, журчит путь сноваподзаголовок однажды лучше ему текст даже!.",imageSrc:"./img/projectdetailspage/photo_1.jpg"},{id:3,name:"PROJETC - 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem\n\t\t\t\t\t\t\t\t\t\tvitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel\n\t\t\t\t\t\t\t\t\t\tmaximus purus posuere in...",imageSrc:"./img/projectdetailspage/photo_1.jpg"},{id:4,name:"PROJETC - 4",description:"Далеко-далеко за словесными горами в стране гласных и согласных живут \n\t\t\t\t\t\t\t\t\t\tрыбные тексты. Правилами семантика пустился рукопись, гор там проектах ведущими великий.\n\t\t\t\t\t\t\t\t\t\tГрамматики безопасную, журчит путь сноваподзаголовок однажды лучше ему текст даже!.",imageSrc:"./img/projectdetailspage/photo_1.jpg"},{id:5,name:"PROJETC - 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem\n\t\t\t\t\t\t\t\t\t\tvitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel\n\t\t\t\t\t\t\t\t\t\tmaximus purus posuere in...",imageSrc:"./img/projectdetailspage/photo_1.jpg"}]},w={SET_NEXT_PROJECT(t){t.currentIndex=(t.currentIndex+1)%t.detailsOfProject.length},SET_PREV_PROJECT(t){t.currentIndex=(t.currentIndex-1+t.detailsOfProject.length)%t.detailsOfProject.length},SET_CURRENT_INDEX(t,e){t.currentIndex=e}},B={nextProject({commit:t}){t("SET_NEXT_PROJECT")},prevProject({commit:t}){t("SET_PREV_PROJECT")},selectProject({commit:t},e){t("SET_CURRENT_INDEX",e)}},I={currentProject(t){return t.detailsOfProject[t.currentIndex]||{}},currentIndex:()=>t=>t.currentIndex};var N={namespaced:!0,state:S,mutations:w,actions:B,getters:I};o.ZP.use(n.ZP);var R={state:{products:[]},actions:{fetchProductsData({commit:t}){setTimeout((()=>{t("SET_PRODUCTS",[{id:1,name:"Product name 1",price:10.99,available:!0},{id:2,name:"Product name 2",price:13.99,available:!0},{id:3,name:"Product name 3",price:3.99,available:!1},{id:4,name:"Product name 4",price:35.99,available:!0},{id:5,name:"Product name 5",price:1.99,available:!1}])}),2e3)}},getters:{allProducts(t){return t.products},formattedPrice:()=>t=>`$${t.price}`},mutations:{SET_PRODUCTS(t,e){t.products=e}},modules:{projects:A,detailsOfProject:N}};o.ZP.use(i.ZP);const D=[{path:"/",name:"home",component:()=>r.e(976).then(r.bind(r,6976))},{path:"/blog_details",name:"blog_details",component:()=>r.e(363).then(r.bind(r,7363))},{path:"/blog",name:"blog",component:()=>r.e(802).then(r.bind(r,1802))},{path:"/project",name:"project",component:()=>r.e(335).then(r.bind(r,5335))},{path:"/project_details",name:"project_details",component:()=>r.e(686).then(r.bind(r,1686))},{path:"*",name:"notFound",component:()=>r.e(994).then(r.bind(r,1994))}],Z=new i.ZP({mode:"history",base:"/",routes:D});var U=Z;o.ZP.use(i.ZP,n.ZP),o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(k),store:new n.ZP.Store(R),router:U}).$mount("#app")},6497:function(t,e,r){t.exports=r.p+"img/header_logo.cbdb00be.svg"},3492:function(t,e,r){t.exports=r.p+"img/linkedIn_logo.e55dfc92.svg"},6509:function(t,e,r){t.exports=r.p+"img/twitter_logo.ad8ca39d.svg"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,o){return r.f[o](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{335:"4e07b3d8",363:"e9fd4fae",686:"fd462e3d",802:"0c7414b3",976:"8ca4dca5",994:"6e37a15d"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{335:"55463f43",363:"e04bedcd",686:"7d8c41f8",802:"a35628d8",976:"76d32dca",994:"790b63e6"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="slava_project:";r.l=function(o,n,i,a){if(t[o])t[o].push(n);else{var c,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",e+i),c.src=o),t[o]=[n];var m=function(e,r){c.onerror=c.onload=null,clearTimeout(p);var n=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(r){if(i.onerror=i.onload=null,"load"===r.type)o();else{var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode&&i.parentNode.removeChild(i),n(s)}};return i.onerror=i.onload=a,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],i=n.getAttribute("data-href");if(i===t||i===e)return n}},o=function(o){return new Promise((function(n,i){var a=r.miniCssF(o),c=r.p+a;if(e(a,c))return n();t(o,c,null,n,i)}))},n={143:0};r.f.miniCss=function(t,e){var r={335:1,363:1,686:1,802:1,976:1,994:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=o(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={143:0};r.f.j=function(e,o){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(r,o){n=t[e]=[r,o]}));o.push(n[2]=i);var a=r.p+r.u(e),c=new Error,s=function(o){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}};r.l(a,s,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],c=o[1],s=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(e&&e(o);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},o=self["webpackChunkslava_project"]=self["webpackChunkslava_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5338)}));o=r.O(o)})();
//# sourceMappingURL=app.7b8d4eab.js.map