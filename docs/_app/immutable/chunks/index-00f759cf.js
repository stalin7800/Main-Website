function x(){}const Q=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function G(){return Object.create(null)}function b(t){t.forEach(W)}function B(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Pt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Tt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,u){if(r){const c=U(e,n,i,u);t.p(c,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window!="undefined";let X=V?()=>window.performance.now():()=>Date.now(),L=V?t=>requestAnimationFrame(t):x;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&L(Y)}function Z(t){let e;return g.size===0&&L(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ht(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[s],f)}}function pt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=et("style");return gt(tt(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function xt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Gt(){return F("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Wt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Ut(t){return Et(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const M=new Map;let R=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:yt(e),rules:{}};return M.set(t,n),n}function it(t,e,n,i,r,u,c,o=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const N=e+(n-e)*u(m);l+=m*100+`%{${c(N,1-N)}}
`}const f=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${o}`,_=tt(t),{stylesheet:d,rules:h}=M.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,R+=1,a}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||At())}function At(){L(()=>{R||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function H(){if(!E)throw new Error("Function called outside component initialization");return E}function Yt(t){H().$$.on_mount.push(t)}function Zt(t){H().$$.after_update.push(t)}function te(t,e){return H().$$.context.set(t,e),e}const w=[],J=[],C=[],K=[],rt=Promise.resolve();let z=!1;function st(){z||(z=!0,rt.then(ct))}function ee(){return st(),rt}function k(t){C.push(t)}const q=new Set;let A=0;function ct(){const t=E;do{for(;A<w.length;){const e=w[A];A++,v(e),Ct(e.$$)}for(v(null),w.length=0,A=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];q.has(n)||(q.add(n),n())}C.length=0}while(w.length);for(;K.length;)K.pop()();z=!1,q.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function ot(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function D(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function ne(){y={r:0,c:[],p:y}}function ie(){y.r||b(y.c),y=y.p}function St(t,e){t&&t.i&&(S.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const lt={duration:0};function se(t,e,n){let i=e(t,n),r=!1,u,c,o=0;function s(){u&&T(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=Q,tick:h=x,css:p}=i||lt;p&&(u=it(t,0,1,_,a,d,p,o++)),h(0,1);const m=X()+a,N=m+_;c&&c.abort(),r=!0,k(()=>D(t,!0,"start")),c=Z(P=>{if(r){if(P>=N)return h(1,0),D(t,!0,"end"),s(),r=!1;if(P>=m){const I=d((P-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,T(t),B(i)?(i=i(),ot().then(l)):l())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function ce(t,e,n){let i=e(t,n),r=!0,u;const c=y;c.r+=1;function o(){const{delay:s=0,duration:l=300,easing:f=Q,tick:a=x,css:_}=i||lt;_&&(u=it(t,1,0,l,s,f,_));const d=X()+s,h=d+l;k(()=>D(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),D(t,!1,"end"),--c.r||b(c.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return B(i)?ot().then(()=>{i=i(),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&T(t,u),r=!1)}}}function oe(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[u]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||k(()=>{const s=u.map(W).filter(B);c?c.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,u,c,o=[-1]){const s=E;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Dt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){_t();const a=$t(e.target);l.fragment&&l.fragment.l(a),a.forEach(bt)}else l.fragment&&l.fragment.c();e.intro&&St(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),dt(),ct()}v(s)}class _e{$destroy(){Rt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,Rt as B,ut as C,ee as D,x as E,xt as F,Jt as G,qt as H,Tt as I,Bt as J,Lt as K,zt as L,Ht as M,b as N,Kt as O,Pt as P,k as Q,se as R,_e as S,ce as T,$t as a,Qt as b,Wt as c,bt as d,et as e,Xt as f,Ft as g,Et as h,fe as i,Vt as j,It as k,Gt as l,Ut as m,ne as n,re as o,ie as p,St as q,te as r,Ot as s,F as t,Zt as u,Yt as v,ue as w,ae as x,Mt as y,oe as z};