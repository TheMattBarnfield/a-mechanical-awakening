var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,n,e){t.$$.on_destroy.push(s(n,e))}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=l(n,e,o,u);t.p(r,s)}}function p(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function $(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function b(){return g("")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let v;function w(t){v=t}function _(){if(!v)throw new Error("Function called outside component initialization");return v}function k(t,n){_().$$.context.set(t,n)}function E(t){return _().$$.context.get(t)}const A=[],O=[],S=[],R=[],j=Promise.resolve();let L=!1;function M(t){S.push(t)}let N=!1;const C=new Set;function P(){if(!N){N=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];w(n),B(n.$$)}for(w(null),A.length=0;O.length;)O.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];C.has(n)||(C.add(n),n())}S.length=0}while(A.length);for(;R.length;)R.pop()();L=!1,N=!1,C.clear()}}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const I=new Set;let K;function H(){K={r:0,c:[],p:K}}function T(){K.r||r(K.c),K=K.p}function U(t,n){t&&t.i&&(I.delete(t),t.i(n))}function D(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),K.c.push((()=>{I.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function q(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,n,o){const{fragment:u,on_mount:s,on_destroy:i,after_update:a}=t.$$;u&&u.m(n,o),M((()=>{const n=s.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(M)}function W(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(A.push(t),L||(L=!0,j.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,e,c,u,s,i,a=[-1]){const l=v;w(n);const f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&G(n,t)),e})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!u&&u(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();e.intro&&U(n.$$.fragment),F(n,e.target,e.anchor),P()}w(l)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function X(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!V.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),V.push(e,n)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const i=[u,s];return r.push(i),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Y(n,e,o){const u=!Array.isArray(n),i=u?[n]:n,a=e.length<2;return{subscribe:X(o,(n=>{let o=!1;const l=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=e(u?l[0]:l,n);a?n(o):p=c(o)?o:t},d=i.map(((t,n)=>s(t,(t=>{l[n]=t,f&=~(1<<n),o&&$()}),(()=>{f|=1<<n}))));return o=!0,$(),function(){r(d),p()}})).subscribe}}const Z={},tt={};function nt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const et=function(t,n){const e=[];let o=nt(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=nt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[c?"replace":"assign"](n)}o=nt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,c){const[u,s=""]=c.split("?");n++,e.push({pathname:u,search:s}),o.push(t)},replaceState(t,r,c){const[u,s=""]=c.split("?");e[n]={pathname:u,search:s},o[n]=t}}}}()),{navigate:ot}=et,rt=/^:(.+)/;function ct(t){return"*"===t[0]}function ut(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function st(t){return t.replace(/(^\/+|\/+$)/g,"")}function it(t,n){return{route:t,score:t.default?0:ut(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return rt.test(t)}(n)?ct(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function at(t,n){let e,o;const[r]=n.split("?"),c=ut(r),u=""===c[0],s=function(t){return t.map(it).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=s.length;t<r;t++){const r=s[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:n};continue}const a=ut(r.path),l={},f=Math.max(c.length,a.length);let p=0;for(;p<f;p++){const t=a[p],n=c[p];if(void 0!==t&&ct(t)){l["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===n){i=!0;break}let e=rt.exec(t);if(e&&!u){const t=decodeURIComponent(n);l[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e={route:r,params:l,uri:"/"+c.slice(0,p).join("/")};break}}return e||o||null}function lt(t,n){return`${st("/"===n?t:`${st(t)}/${st(n)}`)}/`}function ft(t){let n;const e=t[9].default,o=a(e,t,t[8],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[n]){o&&o.p&&256&n&&f(o,e,t,t[8],n,null,null)},i(t){n||(U(o,t),n=!0)},o(t){D(o,t),n=!1},d(t){o&&o.d(t)}}}function pt(t,n,e){let o,r,c,{$$slots:u={},$$scope:s}=n,{basepath:a="/"}=n,{url:l=null}=n;const f=E(Z),p=E(tt),$=X([]);i(t,$,(t=>e(7,c=t)));const d=X(null);let h=!1;const m=f||X(l?{pathname:l}:et.location);i(t,m,(t=>e(6,r=t)));const g=p?p.routerBase:X({path:a,uri:a});i(t,g,(t=>e(5,o=t)));const y=Y([g,d],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var b;return f||(b=()=>et.listen((t=>{m.set(t.location)})),_().$$.on_mount.push(b),k(Z,m)),k(tt,{activeRoute:d,base:g,routerBase:y,registerRoute:function(t){const{path:n}=o;let{path:e}=t;if(t._path=e,t.path=lt(n,e),"undefined"==typeof window){if(h)return;const n=function(t,n){return at([t],n)}(t,r.pathname);n&&(d.set(n),h=!0)}else $.update((n=>(n.push(t),n)))},unregisterRoute:function(t){$.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,a=t.basepath),"url"in t&&e(4,l=t.url),"$$scope"in t&&e(8,s=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=o;$.update((n=>(n.forEach((n=>n.path=lt(t,n._path))),n)))}if(192&t.$$.dirty){const t=at(c,r.pathname);d.set(t)}},[$,m,g,a,l,o,r,c,s,u]}class $t extends Q{constructor(t){super(),J(this,t,pt,ft,u,{basepath:3,url:4})}}const dt=t=>({params:4&t,location:16&t}),ht=t=>({params:t[2],location:t[4]});function mt(t){let n,e,o,r;const c=[yt,gt],u=[];function s(t,n){return null!==t[0]?0:1}return n=s(t),e=u[n]=c[n](t),{c(){e.c(),o=b()},m(t,e){u[n].m(t,e),d(t,o,e),r=!0},p(t,r){let i=n;n=s(t),n===i?u[n].p(t,r):(H(),D(u[i],1,1,(()=>{u[i]=null})),T(),e=u[n],e?e.p(t,r):(e=u[n]=c[n](t),e.c()),U(e,1),e.m(o.parentNode,o))},i(t){r||(U(e),r=!0)},o(t){D(e),r=!1},d(t){u[n].d(t),t&&h(o)}}}function gt(t){let n;const e=t[10].default,o=a(e,t,t[9],ht);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){o&&o.p&&532&n&&f(o,e,t,t[9],n,dt,ht)},i(t){n||(U(o,t),n=!0)},o(t){D(o,t),n=!1},d(t){o&&o.d(t)}}}function yt(t){let e,o,r;const c=[{location:t[4]},t[2],t[3]];var u=t[0];function s(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return u&&(e=new u(s())),{c(){e&&z(e.$$.fragment),o=b()},m(t,n){e&&F(e,t,n),d(t,o,n),r=!0},p(t,n){const r=28&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(c,[16&n&&{location:t[4]},4&n&&q(t[2]),8&n&&q(t[3])]):{};if(u!==(u=t[0])){if(e){H();const t=e;D(t.$$.fragment,1,0,(()=>{W(t,1)})),T()}u?(e=new u(s()),z(e.$$.fragment),U(e.$$.fragment,1),F(e,o.parentNode,o)):e=null}else u&&e.$set(r)},i(t){r||(e&&U(e.$$.fragment,t),r=!0)},o(t){e&&D(e.$$.fragment,t),r=!1},d(t){t&&h(o),e&&W(e,t)}}}function bt(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&mt(t);return{c(){o&&o.c(),n=b()},m(t,r){o&&o.m(t,r),d(t,n,r),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&U(o,1)):(o=mt(t),o.c(),U(o,1),o.m(n.parentNode,n)):o&&(H(),D(o,1,1,(()=>{o=null})),T())},i(t){e||(U(o),e=!0)},o(t){D(o),e=!1},d(t){o&&o.d(t),t&&h(n)}}}function xt(t,e,o){let r,c,{$$slots:u={},$$scope:s}=e,{path:a=""}=e,{component:l=null}=e;const{registerRoute:f,unregisterRoute:$,activeRoute:d}=E(tt);i(t,d,(t=>o(1,r=t)));const h=E(Z);i(t,h,(t=>o(4,c=t)));const m={path:a,default:""===a};let g={},y={};var b;return f(m),"undefined"!=typeof window&&(b=()=>{$(m)},_().$$.on_destroy.push(b)),t.$$set=t=>{o(13,e=n(n({},e),p(t))),"path"in t&&o(8,a=t.path),"component"in t&&o(0,l=t.component),"$$scope"in t&&o(9,s=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:n,...r}=e;o(3,y=r)}},e=p(e),[l,r,g,y,c,d,h,m,a,s,u]}class vt extends Q{constructor(t){super(),J(this,t,xt,bt,u,{path:8,component:0})}}function wt(t){function n(t){const n=t.currentTarget;""===n.target&&function(t){const n=location.host;return t.host==n||0===t.href.indexOf(`https://${n}`)||0===t.href.indexOf(`http://${n}`)}(n)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),ot(n.pathname+n.search,{replace:n.hasAttribute("replace")}))}return t.addEventListener("click",n),{destroy(){t.removeEventListener("click",n)}}}function _t(){return"localhost"===location.hostname?"/":"/a-mechanical-awakening"}function kt(n){let e,o,r,u,s,i;return{c(){e=m("header"),o=m("nav"),r=m("a"),u=g("A Mechanical Awakening"),x(r,"class","home-link svelte-e6e3m2"),x(r,"href",_t()),x(e,"class","svelte-e6e3m2")},m(n,a){var l;d(n,e,a),$(e,o),$(o,r),$(r,u),s||(l=wt.call(null,r),i=l&&c(l.destroy)?l.destroy:t,s=!0)},p:t,i:t,o:t,d(t){t&&h(e),s=!1,i()}}}class Et extends Q{constructor(t){super(),J(this,t,null,kt,u,{})}}function At(n){let e,o,r;return{c(){e=m("h1"),e.textContent="A Mechanical Awakening",o=y(),r=m("p"),r.innerHTML="Welcome to the official site of <em>A Mechanical Awakening</em>!\n    Here you&#39;ll be able to find all sorts of resources about your adventures in Eberron!"},m(t,n){d(t,e,n),d(t,o,n),d(t,r,n)},p:t,i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(r)}}}class Ot extends Q{constructor(t){super(),J(this,t,null,At,u,{})}}function St(t){let n,e;return n=new Ot({}),{c(){z(n.$$.fragment)},m(t,o){F(n,t,o),e=!0},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function Rt(t){let n;return{c(){n=g("other")},m(t,e){d(t,n,e)},d(t){t&&h(n)}}}function jt(t){let n,e,o,r,c,u,s;return n=new Et({}),r=new vt({props:{path:"/",$$slots:{default:[St]},$$scope:{ctx:t}}}),u=new vt({props:{path:"other",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment),e=y(),o=m("main"),z(r.$$.fragment),c=y(),z(u.$$.fragment)},m(t,i){F(n,t,i),d(t,e,i),d(t,o,i),F(r,o,null),$(o,c),F(u,o,null),s=!0},p(t,n){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),u.$set(o)},i(t){s||(U(n.$$.fragment,t),U(r.$$.fragment,t),U(u.$$.fragment,t),s=!0)},o(t){D(n.$$.fragment,t),D(r.$$.fragment,t),D(u.$$.fragment,t),s=!1},d(t){W(n,t),t&&h(e),t&&h(o),W(r),W(u)}}}function Lt(t){let n,e;return n=new $t({props:{basepath:_t(),$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){z(n.$$.fragment)},m(t,o){F(n,t,o),e=!0},p(t,[e]){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function Mt(t){const n=localStorage.getItem("path");return n&&(localStorage.removeItem("path"),ot(n)),[]}return new class extends Q{constructor(t){super(),J(this,t,Mt,Lt,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
