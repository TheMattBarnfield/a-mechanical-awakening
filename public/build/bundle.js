var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}let l;function f(t){l=t}const d=[],h=[],p=[],$=[],m=Promise.resolve();let g=!1;function b(t){p.push(t)}let y=!1;const _=new Set;function x(){if(!y){y=!0;do{for(let t=0;t<d.length;t+=1){const e=d[t];f(e),k(e.$$)}for(f(null),d.length=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];_.has(e)||(_.add(e),e())}p.length=0}while(d.length);for(;$.length;)$.pop()();g=!1,y=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const v=new Set;function w(t,e){t&&t.i&&(v.delete(t),t.i(e))}function A(t,n,c){const{fragment:a,on_mount:u,on_destroy:i,after_update:s}=t.$$;a&&a.m(n,c),b((()=>{const n=u.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(b)}function E(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,c,a,i,s,d=[-1]){const h=l;f(e);const p=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let $=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&M(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&w(e.$$.fragment),A(e,r.target,r.anchor),x()}f(h)}class H{$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n;return{c(){var t,e,o;n=i("header"),n.innerHTML='<a class="home-link svelte-13a0z9m" href="/">A Mechanical Awakening</a>',t=n,e="class",null==(o="svelte-13a0z9m")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class O extends H{constructor(t){super(),j(this,t,null,N,c,{})}}function T(e){let n,o,r,c;return n=new O({}),{c(){var t;(t=n.$$.fragment)&&t.c(),o=s(),r=i("main"),r.innerHTML="<h1>A Mechanical Awakening</h1> \n\t<p>Welcome to the official site of <em>A Mechanical Awakening</em>!\n\t\tHere you&#39;ll be able to find all sorts of resources about your adventures in Eberron!</p>"},m(t,e){A(n,t,e),a(t,o,e),a(t,r,e),c=!0},p:t,i(t){c||(w(n.$$.fragment,t),c=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(v.has(t))return;v.add(t),(void 0).c.push((()=>{v.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(n.$$.fragment,t),c=!1},d(t){E(n,t),t&&u(o),t&&u(r)}}}return new class extends H{constructor(t){super(),j(this,t,null,T,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
