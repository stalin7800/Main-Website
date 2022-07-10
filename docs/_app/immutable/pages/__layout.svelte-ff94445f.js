import{S as N,i as F,s as Y,e as b,t as L,k as x,c as h,a as y,h as T,d as s,m as E,b as g,g as k,F as p,E as S,G as K,w as B,l as I,x as C,y as P,q as A,o as H,B as j,H as J,I as V,J as D,K as M,L as Q}from"../chunks/index-00f759cf.js";import{w as W}from"../chunks/index-815bd4d0.js";const q=W("light");function Z(c){let e,r,l,o,u,f,d,i,$,w,a,n,m;return{c(){e=b("nav"),r=b("ul"),l=b("li"),o=b("a"),u=L("Home"),f=x(),d=b("li"),i=b("a"),$=L("About"),w=x(),a=b("li"),n=b("a"),m=L("Contact"),this.h()},l(_){e=h(_,"NAV",{class:!0});var t=y(e);r=h(t,"UL",{class:!0});var v=y(r);l=h(v,"LI",{});var z=y(l);o=h(z,"A",{href:!0,class:!0});var O=y(o);u=T(O,"Home"),O.forEach(s),z.forEach(s),f=E(v),d=h(v,"LI",{});var R=y(d);i=h(R,"A",{href:!0,class:!0});var U=y(i);$=T(U,"About"),U.forEach(s),R.forEach(s),w=E(v),a=h(v,"LI",{});var X=y(a);n=h(X,"A",{href:!0,class:!0});var G=y(n);m=T(G,"Contact"),G.forEach(s),X.forEach(s),v.forEach(s),t.forEach(s),this.h()},h(){g(o,"href","/"),g(o,"class","svelte-1kdvnv7"),g(i,"href","/about"),g(i,"class","svelte-1kdvnv7"),g(n,"href","/contact"),g(n,"class","svelte-1kdvnv7"),g(r,"class","svelte-1kdvnv7"),g(e,"class","svelte-1kdvnv7")},m(_,t){k(_,e,t),p(e,r),p(r,l),p(l,o),p(o,u),p(r,f),p(r,d),p(d,i),p(i,$),p(r,w),p(r,a),p(a,n),p(n,m)},p:S,i:S,o:S,d(_){_&&s(e)}}}class ee extends N{constructor(e){super(),F(this,e,null,Z,Y,{})}}function te(c){let e,r,l,o,u,f;return{c(){e=b("label"),r=b("input"),l=x(),o=b("span"),this.h()},l(d){e=h(d,"LABEL",{class:!0});var i=y(e);r=h(i,"INPUT",{type:!0,class:!0}),l=E(i),o=h(i,"SPAN",{class:!0}),y(o).forEach(s),i.forEach(s),this.h()},h(){g(r,"type","checkbox"),g(r,"class","svelte-noyf3i"),g(o,"class","slider round svelte-noyf3i"),g(e,"class","switch svelte-noyf3i")},m(d,i){k(d,e,i),p(e,r),p(e,l),p(e,o),u||(f=K(e,"change",c[0]),u=!0)},p:S,i:S,o:S,d(d){d&&s(e),u=!1,f()}}}function re(c){return[()=>{q.update(r=>r=="light"?"dark":"light"),console.log("updated")}]}class le extends N{constructor(e){super(),F(this,e,re,te,Y,{})}}function oe(c){let e,r;return{c(){e=b("style"),r=L(`footer {\r
            background-color: black !important;\r
            border-color: white !important;\r
            color: white !important;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`footer {\r
            background-color: black !important;\r
            border-color: white !important;\r
            color: white !important;\r
        }`),o.forEach(s)},m(l,o){k(l,e,o),p(e,r)},d(l){l&&s(e)}}}function ne(c){let e,r;return{c(){e=b("style"),r=L(`footer {\r
            background-color: white !important;\r
            border-color: black !important;\r
            color: black !important;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`footer {\r
            background-color: white !important;\r
            border-color: black !important;\r
            color: black !important;\r
        }`),o.forEach(s)},m(l,o){k(l,e,o),p(e,r)},d(l){l&&s(e)}}}function se(c){let e,r,l,o,u,f,d,i;u=new le({});function $(n,m){return n[0]=="light"?ne:oe}let w=$(c),a=w(c);return{c(){e=b("footer"),r=b("p"),l=L("Test Thing"),o=x(),B(u.$$.fragment),f=x(),a.c(),d=I(),this.h()},l(n){e=h(n,"FOOTER",{class:!0});var m=y(e);r=h(m,"P",{});var _=y(r);l=T(_,"Test Thing"),_.forEach(s),o=E(m),C(u.$$.fragment,m),m.forEach(s),f=E(n),a.l(n),d=I(),this.h()},h(){g(e,"class","svelte-14zn0k8")},m(n,m){k(n,e,m),p(e,r),p(r,l),p(e,o),P(u,e,null),k(n,f,m),a.m(n,m),k(n,d,m),i=!0},p(n,[m]){w!==(w=$(n))&&(a.d(1),a=w(n),a&&(a.c(),a.m(d.parentNode,d)))},i(n){i||(A(u.$$.fragment,n),i=!0)},o(n){H(u.$$.fragment,n),i=!1},d(n){n&&s(e),j(u),n&&s(f),a.d(n),n&&s(d)}}}function ae(c,e,r){let l;return J(c,q,o=>r(0,l=o)),[l]}class ie extends N{constructor(e){super(),F(this,e,ae,se,Y,{})}}function ce(c){let e,r;return{c(){e=b("style"),r=L(`:root {\r
            --col: white;\r
            --bgc: black;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`:root {\r
            --col: white;\r
            --bgc: black;\r
        }`),o.forEach(s)},m(l,o){k(l,e,o),p(e,r)},d(l){l&&s(e)}}}function fe(c){let e,r;return{c(){e=b("style"),r=L(`:root {\r
            --col: black;\r
            --bgc: white;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`:root {\r
            --col: black;\r
            --bgc: white;\r
        }`),o.forEach(s)},m(l,o){k(l,e,o),p(e,r)},d(l){l&&s(e)}}}function ue(c){let e,r,l,o,u,f,d,i,$;e=new ee({});const w=c[2].default,a=V(w,c,c[1],null);f=new ie({});function n(t,v){return t[0]=="light"?fe:ce}let m=n(c),_=m(c);return{c(){B(e.$$.fragment),r=x(),l=b("br"),o=x(),a&&a.c(),u=x(),B(f.$$.fragment),d=x(),_.c(),i=I()},l(t){C(e.$$.fragment,t),r=E(t),l=h(t,"BR",{}),o=E(t),a&&a.l(t),u=E(t),C(f.$$.fragment,t),d=E(t),_.l(t),i=I()},m(t,v){P(e,t,v),k(t,r,v),k(t,l,v),k(t,o,v),a&&a.m(t,v),k(t,u,v),P(f,t,v),k(t,d,v),_.m(t,v),k(t,i,v),$=!0},p(t,[v]){a&&a.p&&(!$||v&2)&&D(a,w,t,t[1],$?Q(w,t[1],v,null):M(t[1]),null),m!==(m=n(t))&&(_.d(1),_=m(t),_&&(_.c(),_.m(i.parentNode,i)))},i(t){$||(A(e.$$.fragment,t),A(a,t),A(f.$$.fragment,t),$=!0)},o(t){H(e.$$.fragment,t),H(a,t),H(f.$$.fragment,t),$=!1},d(t){j(e,t),t&&s(r),t&&s(l),t&&s(o),a&&a.d(t),t&&s(u),j(f,t),t&&s(d),_.d(t),t&&s(i)}}}function de(c,e,r){let l;J(c,q,f=>r(0,l=f));let{$$slots:o={},$$scope:u}=e;return c.$$set=f=>{"$$scope"in f&&r(1,u=f.$$scope)},[l,u,o]}class me extends N{constructor(e){super(),F(this,e,de,ue,Y,{})}}export{me as default};
