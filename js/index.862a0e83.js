(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a451e23d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-anime-practice-ts/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2a9a":function(e,t,n){},bb74:function(e,t,n){"use strict";n("2a9a")},cb1c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o={id:"nav"},c=Object(r["h"])("Manga"),a=Object(r["h"])(" | "),i=Object(r["h"])("Anime");function u(e,t){const n=Object(r["y"])("router-link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["i"])(n,{to:"/"},{default:Object(r["E"])(()=>[c]),_:1}),a,Object(r["i"])(n,{to:"/about"},{default:Object(r["E"])(()=>[i]),_:1})]),Object(r["i"])(u)],64)}n("da19");var s=n("6b0d"),l=n.n(s);const b={},f=l()(b,[["render",u]]);var d=f,p=n("9483");Object(p["a"])("/vue-anime-practice-ts/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var j=n("6c02"),v=function(e){return Object(r["u"])("data-v-c9a98b80"),e=e(),Object(r["s"])(),e},h={class:"home"},O=v((function(){return Object(r["g"])("h1",null,"Vue Manga with Typescript",-1)}));function g(e,t,n,o,c,a){var i=Object(r["y"])("Mangas");return Object(r["r"])(),Object(r["f"])("div",h,[O,Object(r["i"])(i)])}var m=function(e){return Object(r["u"])("data-v-ca64ebb8"),e=e(),Object(r["s"])(),e},y={class:"hello"},w=m((function(){return Object(r["g"])("button",{type:"submit"},"Search",-1)})),k={key:0},_={key:1},M={key:2},P={class:"mangas"};function x(e,t,n,o,c,a){var i=Object(r["y"])("WibuCard");return Object(r["r"])(),Object(r["f"])("div",y,[Object(r["g"])("form",{onSubmit:t[1]||(t[1]=Object(r["G"])((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.fetchData&&e.fetchData.apply(e,t)}),["prevent"]))},[Object(r["F"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[r["C"],e.title]]),w],32),e.loading?(Object(r["r"])(),Object(r["f"])("h1",k,"Loading...")):e.noData?(Object(r["r"])(),Object(r["f"])("h1",_,"No manga found!")):e.error?(Object(r["r"])(),Object(r["f"])("h1",M,"Unfortunately, an error occured!")):Object(r["e"])("",!0),Object(r["g"])("div",P,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.mangas,(function(e){return Object(r["r"])(),Object(r["d"])(i,{key:e.mal_id,content:e},null,8,["content"])})),128))])])}var A=n("9ab4"),S=n("bc3a"),C=n.n(S),D=function(e){return Object(A["a"])(void 0,void 0,Promise,(function(){var t,n;return Object(A["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,C.a.get("https://api.jikan.moe/v4/manga?q="+e)];case 1:return t=r.sent(),[2,t.data.data];case 2:throw n=r.sent(),console.log(n),n;case 3:return[2]}}))}))},E={class:"card"},T=["href"],N=["src","alt"];function q(e,t,n,o,c,a){var i,u,s,l,b;return Object(r["r"])(),Object(r["f"])("div",E,[Object(r["g"])("h3",null,[Object(r["g"])("a",{target:"_blank",href:null===(i=e.content)||void 0===i?void 0:i.url},Object(r["A"])(null===(u=e.content)||void 0===u?void 0:u.title),9,T)]),Object(r["g"])("p",null," rank: "+Object(r["A"])(null===(s=e.content)||void 0===s?void 0:s.rank),1),Object(r["g"])("img",{src:null===(l=e.content)||void 0===l?void 0:l.images.webp.image_url,alt:null===(b=e.content)||void 0===b?void 0:b.title},null,8,N)])}var F=Object(r["j"])({name:"WibuCard",props:{content:{type:Object}}});n("bb74");const I=l()(F,[["render",q],["__scopeId","data-v-6f622c7b"]]);var L=I,W=Object(r["j"])({name:"Mangas",data:function(){return{mangas:[],loading:!0,noData:!1,error:!1,title:""}},components:{WibuCard:L},methods:{fetchData:function(){return Object(A["a"])(this,void 0,Promise,(function(){var e;return Object(A["b"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),this.loading=!0,e=this,[4,D(this.title)];case 1:return e.mangas=t.sent(),0===this.mangas.length&&(this.noData=!0),[3,4];case 2:return t.sent(),this.error=!0,[3,4];case 3:return this.loading=!1,[7];case 4:return[2]}}))}))}},created:function(){return Object(A["a"])(this,void 0,void 0,(function(){return Object(A["b"])(this,(function(e){switch(e.label){case 0:return[4,this.fetchData()];case 1:return e.sent(),[2]}}))}))}});n("f3bd");const J=l()(W,[["render",x],["__scopeId","data-v-ca64ebb8"]]);var U=J,V=Object(r["j"])({name:"Manga",components:{Mangas:U}});n("f2c9");const B=l()(V,[["render",g],["__scopeId","data-v-c9a98b80"]]);var G=B,z=[{path:"/",name:"Manga",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"8c21"))}}],H=Object(j["a"])({history:Object(j["b"])("/vue-anime-practice-ts/"),routes:z}),K=H;Object(r["c"])(d).use(K).mount("#app")},da19:function(e,t,n){"use strict";n("cb1c")},ec39:function(e,t,n){},f2c9:function(e,t,n){"use strict";n("ec39")},f3bd:function(e,t,n){"use strict";n("ffa9")},ffa9:function(e,t,n){}});
//# sourceMappingURL=index.862a0e83.js.map