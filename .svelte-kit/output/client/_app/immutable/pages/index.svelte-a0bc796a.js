import{S as q,i as z,s as H,e as w,t as D,k as T,c as k,a as E,h as I,d as x,m as j,P as G,b as F,g as P,F as p,j as A,Q as Y,R as J,T as K,w as X,x as Z,y as ee,G as O,q as B,o as C,B as te,N as ae,l as U,n as se,p as ne,E as oe}from"../chunks/index-00f759cf.js";const ie=[{title:"Machine Learning",gendesc:"A basic machine learning projectI created in my data science 2010 class. This project provided an overview of machine learning, and the differences between various machine learning models",tabs:[{name:"Data Overview",img:"url",description:`
            Our dataset is a collection of samples of different wines, and the rating given to them by a professional wine taster in a range from zero to ten. The predictor variables given to us in our dataset were: Fixed Acidity, Volatile Acidity, Citric  Acid, Residual Sugar, Free Sugar Dioxide, Chlorides, Total Sulfur Dioxide, Density, pH, Sulphates, Alcohol`},{name:"Unfiltered Linear Model",img:"url2",description:`
                dfdsf
                
                `}]}];function re(s){const e=s-1;return e*e*e+1}function V(s,{delay:e=0,duration:r=400,easing:t=re,x:a=0,y:o=0,opacity:d=0}={}){const i=getComputedStyle(s),h=+i.opacity,m=i.transform==="none"?"":i.transform,f=h*(1-d);return{delay:e,duration:r,easing:t,css:(g,y)=>`
			transform: ${m} translate(${(1-g)*a}px, ${(1-g)*o}px);
			opacity: ${h-f*y}`}}function le(s,{delay:e=0,duration:r=400,easing:t=re}={}){const a=getComputedStyle(s),o=+a.opacity,d=parseFloat(a.height),i=parseFloat(a.paddingTop),h=parseFloat(a.paddingBottom),m=parseFloat(a.marginTop),f=parseFloat(a.marginBottom),g=parseFloat(a.borderTopWidth),y=parseFloat(a.borderBottomWidth);return{delay:e,duration:r,easing:t,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*o};height: ${_*d}px;padding-top: ${_*i}px;padding-bottom: ${_*h}px;margin-top: ${_*m}px;margin-bottom: ${_*f}px;border-top-width: ${_*g}px;border-bottom-width: ${_*y}px;`}}function ce(s){let e,r,t=s[0].name+"",a,o,d,i,h,m,f=s[0].description+"",g,y,_,l;return{c(){e=w("div"),r=w("h1"),a=D(t),o=T(),d=w("img"),h=T(),m=w("p"),g=D(f),this.h()},l(n){e=k(n,"DIV",{class:!0});var c=E(e);r=k(c,"H1",{});var S=E(r);a=I(S,t),S.forEach(x),o=j(c),d=k(c,"IMG",{src:!0,alt:!0}),h=j(c),m=k(c,"P",{});var M=E(m);g=I(M,f),M.forEach(x),c.forEach(x),this.h()},h(){G(d.src,i=s[0].url)||F(d,"src",i),F(d,"alt",""),F(e,"class","cont svelte-mbd5t1")},m(n,c){P(n,e,c),p(e,r),p(r,a),p(e,o),p(e,d),p(e,h),p(e,m),p(m,g),l=!0},p(n,[c]){(!l||c&1)&&t!==(t=n[0].name+"")&&A(a,t),(!l||c&1&&!G(d.src,i=n[0].url))&&F(d,"src",i),(!l||c&1)&&f!==(f=n[0].description+"")&&A(g,f)},i(n){l||(Y(()=>{_&&_.end(1),y=J(e,V,{delay:300,duration:300}),y.start()}),l=!0)},o(n){y&&y.invalidate(),_=K(e,le,{duration:300}),l=!1},d(n){n&&x(e),n&&_&&_.end()}}}function de(s,e,r){let{tab:t}=e;return s.$$set=a=>{"tab"in a&&r(0,t=a.tab)},[t]}class fe extends q{constructor(e){super(),z(this,e,de,ce,H,{tab:0})}}function W(s){let e,r,t,a,o,d,i,h,m,f,g,y,_;return o=new fe({props:{tab:s[0].tabs[s[2]]}}),{c(){e=w("div"),r=w("p"),t=D("\u2190"),a=T(),X(o.$$.fragment),d=T(),i=w("p"),h=D("\u2192"),this.h()},l(l){e=k(l,"DIV",{class:!0});var n=E(e);r=k(n,"P",{class:!0});var c=E(r);t=I(c,"\u2190"),c.forEach(x),a=j(n),Z(o.$$.fragment,n),d=j(n),i=k(n,"P",{class:!0});var S=E(i);h=I(S,"\u2192"),S.forEach(x),n.forEach(x),this.h()},h(){F(r,"class","svelte-1exfgdy"),F(i,"class","svelte-1exfgdy"),F(e,"class","tabviewer svelte-1exfgdy")},m(l,n){P(l,e,n),p(e,r),p(r,t),p(e,a),ee(o,e,null),p(e,d),p(e,i),p(i,h),g=!0,y||(_=[O(r,"click",s[4]),O(i,"click",s[5])],y=!0)},p(l,n){const c={};n&5&&(c.tab=l[0].tabs[l[2]]),o.$set(c)},i(l){g||(B(o.$$.fragment,l),Y(()=>{f&&f.end(1),m=J(e,V,{y:-500,duration:300}),m.start()}),g=!0)},o(l){C(o.$$.fragment,l),m&&m.invalidate(),f=K(e,V,{y:-500,duration:300}),g=!1},d(l){l&&x(e),te(o),l&&f&&f.end(),y=!1,ae(_)}}}function Q(s){let e,r;return{c(){e=w("style"),r=D(`.interest {\r
        height: 250%;\r
    }`)},l(t){e=k(t,"STYLE",{});var a=E(e);r=I(a,`.interest {\r
        height: 250%;\r
    }`),a.forEach(x)},m(t,a){P(t,e,a),p(e,r)},d(t){t&&x(e)}}}function ue(s){let e,r,t=s[0].title+"",a,o,d,i=s[0].gendesc+"",h,m,f,g=s[1]==!1?"Expand":"Minimize",y,_,l,n,c,S,M,v=s[1]&&W(s),$=s[1]&&Q();return{c(){e=w("div"),r=w("h1"),a=D(t),o=T(),d=w("p"),h=D(i),m=T(),f=w("button"),y=D(g),_=T(),v&&v.c(),l=T(),$&&$.c(),n=U(),this.h()},l(u){e=k(u,"DIV",{class:!0});var b=E(e);r=k(b,"H1",{});var L=E(r);a=I(L,t),L.forEach(x),o=j(b),d=k(b,"P",{});var N=E(d);h=I(N,i),N.forEach(x),m=j(b),f=k(b,"BUTTON",{class:!0});var R=E(f);y=I(R,g),R.forEach(x),_=j(b),v&&v.l(b),b.forEach(x),l=j(u),$&&$.l(u),n=U(),this.h()},h(){F(f,"class","svelte-1exfgdy"),F(e,"class","interest svelte-1exfgdy")},m(u,b){P(u,e,b),p(e,r),p(r,a),p(e,o),p(e,d),p(d,h),p(e,m),p(e,f),p(f,y),p(e,_),v&&v.m(e,null),P(u,l,b),$&&$.m(u,b),P(u,n,b),c=!0,S||(M=O(f,"click",s[3]),S=!0)},p(u,[b]){(!c||b&1)&&t!==(t=u[0].title+"")&&A(a,t),(!c||b&1)&&i!==(i=u[0].gendesc+"")&&A(h,i),(!c||b&2)&&g!==(g=u[1]==!1?"Expand":"Minimize")&&A(y,g),u[1]?v?(v.p(u,b),b&2&&B(v,1)):(v=W(u),v.c(),B(v,1),v.m(e,null)):v&&(se(),C(v,1,1,()=>{v=null}),ne()),u[1]?$||($=Q(),$.c(),$.m(n.parentNode,n)):$&&($.d(1),$=null)},i(u){c||(B(v),c=!0)},o(u){C(v),c=!1},d(u){u&&x(e),v&&v.d(),u&&x(l),$&&$.d(u),u&&x(n),S=!1,M()}}}function pe(s,e,r){let{cat:t}=e,a=!1,o=0;const d=()=>{r(1,a=!a)},i=()=>{o==0?r(2,o=t.tabs.length-1):r(2,o-=1)},h=()=>{o==t.tabs.length-1?r(2,o=0):r(2,o+=1)};return s.$$set=m=>{"cat"in m&&r(0,t=m.cat)},[t,a,o,d,i,h]}class me extends q{constructor(e){super(),z(this,e,pe,ue,H,{cat:0})}}function _e(s){let e,r;return e=new me({props:{cat:ie[0]}}),{c(){X(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,a){ee(e,t,a),r=!0},p:oe,i(t){r||(B(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){te(e,t)}}}class ve extends q{constructor(e){super(),z(this,e,null,_e,H,{})}}export{ve as default};
