"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3388],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(a),s=r,h=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(h,i(i({ref:e},o),{},{components:a})):n.createElement(h,i({ref:e},o))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3011:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return k}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=a(8658),p=["components"],d={title:"Spritebatch"},m=void 0,o={unversionedId:"graphics-advanced/spritebatch",id:"graphics-advanced/spritebatch",title:"Spritebatch",description:"Allows drawing a batch of sprites (quads (regions)) from an image in a single call.",source:"@site/docs/graphics-advanced/spritebatch.md",sourceDirName:"graphics-advanced",slug:"/graphics-advanced/spritebatch",permalink:"/docs/graphics-advanced/spritebatch",editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/graphics-advanced/spritebatch.md",tags:[],version:"current",frontMatter:{title:"Spritebatch"},sidebar:"tutorialSidebar",previous:{title:"Quad",permalink:"/docs/graphics-advanced/quad"},next:{title:"SpriteSheet",permalink:"/docs/graphics-advanced/spritesheet"}},u={},k=[{value:"Methods",id:"methods",level:2},{value:"<code>spriteBatch:add</code>",id:"spritebatchadd",level:3},{value:"<code>spriteBatch:set</code>",id:"spritebatchset",level:3},{value:"<code>spriteBatch:clear</code>",id:"spritebatchclear",level:3},{value:"<code>spriteBatch:draw</code>",id:"spritebatchdraw",level:3},{value:"<code>spriteBatch:flush</code>",id:"spritebatchflush",level:3},{value:"<code>spriteBatch:getCount</code>",id:"spritebatchgetcount",level:3},{value:"<code>spriteBatch:getBufferSize</code>",id:"spritebatchgetbuffersize",level:3},{value:"<code>spriteBatch:setBufferSize</code>",id:"spritebatchsetbuffersize",level:3},{value:"<code>spriteBatch:usage</code>",id:"spritebatchusage",level:3},{value:"<code>spriteBatch:type</code>",id:"spritebatchtype",level:3},{value:"<code>spriteBatch:typeOf</code>",id:"spritebatchtypeof",level:3}],s={toc:k};function h(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows drawing a batch of sprites (quads (regions)) from an image in a single call."),(0,l.kt)("p",null,"Which gives huge performance boost, especially if the regions are static (not changing)."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)(i.ZP,{mdxType:"ObjectCall"}),(0,l.kt)("h3",{id:"spritebatchadd"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:add")),(0,l.kt)("p",null,"Add a sprite (quad) to the batch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"spriteId = spriteBatch:add(quad, x, y, rotation, scaleX, scaleY, originX, originY, shearX, shearY)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"quad"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./quad"},"Quad")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"rotation"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"originX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"originY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"shearX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"shearY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"can be used for removing the sprite later.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchset"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:set")),(0,l.kt)("p",null,"Modify a sprite in the batch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"spriteBatch = spriteBatch:set(spriteId, quad, x, y, rotation, scaleX, scaleY, originX, originY, shearX, shearY)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteId"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"quad"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./quad"},"Quad")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"to replace existing one (can be the same one)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"rotation"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"originX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"originY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"shearX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"shearY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteBatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#"},"SpriteBatch")),(0,l.kt)("td",{parentName:"tr",align:null},"the object itself. allows to do chain calls.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchclear"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:clear")),(0,l.kt)("p",null,"Clear the sprites from the buffer (remove them all). "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"spriteBatch = spriteBatch:clear()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteBatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#"},"SpriteBatch")),(0,l.kt)("td",{parentName:"tr",align:null},"the object itself. allows to do chain calls.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchdraw"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:draw")),(0,l.kt)("p",null,"Draw the sprite batch into the screen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"spriteBatch = spriteBatch:draw(x, y, rotation, scaleX, scaleY, quad)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"rotation"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"in radians.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleX"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"scaleY"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," to preserve scale.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"quad"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./quad"},"Quad"),", nil"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:null},"a quad to draw only a region from the spritebatch. otherwise the full spritebatch is drawn.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteBatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#"},"SpriteBatch")),(0,l.kt)("td",{parentName:"tr",align:null},"the object itself. allows to do chain calls.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchflush"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:flush")),(0,l.kt)("p",null,"Immediately refresh the batch data. (Sometimes necessary)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sb = spriteBatch:flush()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteBatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#"},"SpriteBatch")),(0,l.kt)("td",{parentName:"tr",align:null},"the object itself. allows to do chain calls.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchgetcount"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:getCount")),(0,l.kt)("p",null,"Get the current number of sprites in the batch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"count = spriteBatch:getCount()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchgetbuffersize"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:getBufferSize")),(0,l.kt)("p",null,"Get the maximum number of sprites the batch can contain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"capacity = spriteBatch:getBufferSize()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"capacity"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchsetbuffersize"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:setBufferSize")),(0,l.kt)("p",null,"Set the maximum number of sprites the batch can contain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"spriteBatch = spriteBatch:setBufferSize(capacity)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"capacity"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null},"must be positive integer")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"spriteBatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#"},"SpriteBatch")),(0,l.kt)("td",{parentName:"tr",align:null},"the object itself. allows to do chain calls.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchusage"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:usage")),(0,l.kt)("p",null,"The hint set during the batch creation for doing optimizations internally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"usage = spriteBatch:usage()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"usage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"enum: ",(0,l.kt)("inlineCode",{parentName:"td"},"'dynamic'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'static'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'stream'"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchtype"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:type")),(0,l.kt)("p",null,"Get the type of the object as a string."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This method most likely will be removed in a future version."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"type = spriteBatch:type()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"objectType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spritebatch"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spritebatchtypeof"},(0,l.kt)("inlineCode",{parentName:"h3"},"spriteBatch:typeOf")),(0,l.kt)("p",null,"Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This method most likely will be removed in a future version."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"isIt = spriteBatch:typeOf(type)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"isIt"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'GPU'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'spritebatch'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'GPU.spritebatch'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'LK12'")," would give ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")))))}h.isMDXComponent=!0},8658:function(t,e,a){a.d(e,{ZP:function(){return c}});var n=a(3117),r=a(102),l=a(7294),i=a(3905),p=a(2389),d=a(9575),m=a(6010),o="tabItem_LplD";function u(t){var e,a,r,i=t.lazy,p=t.block,u=t.defaultValue,k=t.values,s=t.groupId,h=t.className,N=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),c=null!=k?k:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,d.lx)(c,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(e=null!=u?u:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=N[0])?void 0:r.props.value;if(null!==b&&!c.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+c.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,d.UB)(),y=f.tabGroupChoices,v=f.setTabGroupChoices,w=(0,l.useState)(b),C=w[0],B=w[1],T=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var O=y[s];null!=O&&O!==C&&c.some((function(t){return t.value===O}))&&B(O)}var j=function(t){var e=t.currentTarget,a=T.indexOf(e),n=c[a].value;n!==C&&(x(e),B(n),null!=s&&v(s,n))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=T.indexOf(t.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;a=T[r]||T[T.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},h)},c.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return T.push(t)},onKeyDown:S,onFocus:j,onClick:j},r,{className:(0,m.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":C===e})}),null!=a?a:e)}))),i?(0,l.cloneElement)(N.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function k(t){var e=(0,p.Z)();return l.createElement(u,(0,n.Z)({key:String(e)},t))}function s(t){var e=t.children,a=t.hidden,n=t.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}var h=["components"],N={toc:[]};function c(t){var e=t.components,a=(0,r.Z)(t,h);return(0,i.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Object methods should be called using the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," operator.\nWhich passes the object itself as a parameter before all the other specified parameters.\nThat is necessary for object methods to work efficiently."),(0,i.kt)("p",{parentName:"div"},"For example to call the method ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown")," on the object ",(0,i.kt)("inlineCode",{parentName:"p"},"myComputer")," the both ways would work:"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(s,{value:"colon",label:"Colon",default:!0,mdxType:"TabItem"}," ",(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"myComputer:shutdown()\n"))),(0,i.kt)(s,{value:"period",label:"Period",mdxType:"TabItem"}," ",(0,i.kt)("p",{parentName:"div"},"It's possible to call using ",(0,i.kt)("inlineCode",{parentName:"p"},".")," but it's less syntax sweet."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"myComputer.shutdown(myComputer)\n")))))))}c.isMDXComponent=!0}}]);