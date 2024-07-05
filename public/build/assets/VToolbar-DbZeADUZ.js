import{m as g,F as k,i as _,H as R,J as D,n as E,u as I,N as F,O as w,s as z,D as A,V as m,G}from"./VSheet-BncI0I_P.js";import{B as v,aw as J,ax as O,ay as U,p as C,H as a,A as $,F as j,D as q,E as K,s as L,c as V,ae as M,a as r}from"./app-BBF9j33d.js";function ee(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return v()({name:t??J(O(e.replace(/__/g,"-"))),props:{tag:{type:String,default:o},...g()},setup(l,n){let{slots:s}=n;return()=>{var i;return U(l.tag,{class:[e,l.class],style:l.style},(i=s.default)==null?void 0:i.call(s))}}})}const Q=C({text:String,...g(),...k()},"VToolbarTitle"),W=v()({name:"VToolbarTitle",props:Q(),setup(e,o){let{slots:t}=o;return _(()=>{const l=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[l&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),X=[null,"prominent","default","comfortable","compact"],Y=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>X.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...g(),...D(),...E(),...k({tag:"header"}),...$()},"VToolbar"),te=v()({name:"VToolbar",props:Y(),setup(e,o){var b;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:n}=I(j(e,"color")),{borderClasses:s}=F(e),{elevationClasses:i}=w(e),{roundedClasses:B}=z(e),{themeClasses:S}=q(e),{rtlClasses:P}=K(),u=L(!!(e.extended||(b=t.extension)!=null&&b.call(t))),d=V(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=V(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return M({VBtn:{variant:"text"}}),_(()=>{var h;const N=!!(e.title||t.title),H=!!(t.image||e.image),f=(h=t.extension)==null?void 0:h.call(t);return u.value=!!(e.extended||f),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,s.value,i.value,B.value,S.value,P.value,e.class],style:[n.value,e.style]},{default:()=>[H&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(m,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(A,{key:"image-img",cover:!0,src:e.image},null)]),a(m,{defaults:{VTabs:{height:r(d.value)}}},{default:()=>{var y,x,T;return[a("div",{class:"v-toolbar__content",style:{height:r(d.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),N&&a(W,{key:"title",text:e.title},{text:t.title}),(x=t.default)==null?void 0:x.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])])]}}),a(m,{defaults:{VTabs:{height:r(c.value)}}},{default:()=>[a(G,null,{default:()=>[u.value&&a("div",{class:"v-toolbar__extension",style:{height:r(c.value)}},[f])]})]})]})}),{contentHeight:d,extensionHeight:c}}});export{te as V,W as a,ee as c};