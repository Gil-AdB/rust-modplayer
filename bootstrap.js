(()=>{var e,t,r,n,o,i,a,s,c,u,p,l,d,f,b,m={59:(e,t,r)=>{Promise.all([r.e(176),r.e(928)]).then(r.bind(r,928)).catch((e=>console.error("Error importing `index.js`:",e)))}},g={};function _(e){var t=g[e];if(void 0!==t)return t.exports;var r=g[e]={id:e,exports:{}};return m[e](r,r.exports,_),r.exports}_.m=m,_.c=g,_.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return _.d(t,{a:t}),t},_.d=(e,t)=>{for(var r in t)_.o(t,r)&&!_.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((t,r)=>(_.f[r](e,t),t)),[])),_.u=e=>e+".bootstrap.js",_.miniCssF=e=>{},_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="modplayer-wasm-app:",_.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+o){a=p;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,_.nc&&a.setAttribute("nonce",_.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var l=(t,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var t=_.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),(()=>{var e={547:0};_.f.j=(t,r)=>{var n=_.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=_.p+_.u(t),a=new Error;_.l(i,(r=>{if(_.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in a)_.o(a,n)&&(_.m[n]=a[n]);s&&s(_)}for(t&&t(r);c<i.length;c++)o=i[c],_.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmodplayer_wasm_app=self.webpackChunkmodplayer_wasm_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),_.nc=void 0,d={},f={463:function(){return{"./modplayer_wasm_bg.js":{__wbg_termwriteln_032ae93befe14b77:function(e,t){return void 0===r&&(r=_.c[844].exports),r.Uq(e,t)},__wbg_termwritelnwithbackground_ec70d4f7bb6b4041:function(e,t,r){return void 0===n&&(n=_.c[844].exports),n.zC(e,t,r)},__wbindgen_copy_to_typed_array:function(e,t,r){return void 0===i&&(i=_.c[844].exports),i.U6(e,t,r)},__wbindgen_is_string:function(e){return void 0===a&&(a=_.c[844].exports),a.Gu(e)},__wbg_get_b9b93047fe3cf45b:function(e,t){return void 0===s&&(s=_.c[844].exports),s.RK(e,t)},__wbg_length_e2d2a49132c1b256:function(e){return void 0===c&&(c=_.c[844].exports),c.Ry(e)},__wbindgen_string_get:function(e,t){return void 0===u&&(u=_.c[844].exports),u.qN(e,t)},__wbindgen_throw:function(e,t){return void 0===p&&(p=_.c[844].exports),p.Qn(e,t)},__wbindgen_init_externref_table:function(){return void 0===l&&(l=_.c[844].exports),l.bL()}},"./snippets/modplayer-wasm-6a97d0ec565c7eee/inline0.js":{performance_now:function(){return void 0===o&&(o=_.c[761].exports),o.G()}}}}},b={928:[463]},_.w={},_.f.wasm=function(e,t){(b[e]||[]).forEach((function(r,n){var o=d[r];if(o)t.push(o);else{var i,a=f[r](),s=fetch(_.p+""+{928:{463:"91df495cb54d9876e443"}}[e][r]+".module.wasm");i=a&&"function"==typeof a.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(s),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,a):s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)})),t.push(d[r]=i.then((function(e){return _.w[r]=(e.instance||e).exports})))}}))},_(59)})();