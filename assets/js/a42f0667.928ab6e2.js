"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5930],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(a),g=r,N=k["".concat(m,".").concat(g)]||k[g]||o[g]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3259:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"Events System"},i=void 0,p={unversionedId:"miscellaneous/events-system",id:"miscellaneous/events-system",title:"Events System",description:"The events/callbacks system.",source:"@site/docs/miscellaneous/events-system.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/events-system",permalink:"/docs/miscellaneous/events-system",draft:!1,editUrl:"https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/docs/miscellaneous/events-system.md",tags:[],version:"current",frontMatter:{title:"Events System"},sidebar:"tutorialSidebar",previous:{title:"Miscellaneous",permalink:"/docs/category/miscellaneous"},next:{title:"GIF Recording",permalink:"/docs/miscellaneous/gif-recording"}},m={},d=[{value:"Manually pumping events",id:"manually-pumping-events",level:2},{value:"<code>pullEvent</code>",id:"pullevent",level:3},{value:"<code>rawPullEvent</code>",id:"rawpullevent",level:3},{value:"<code>triggerEvent</code>",id:"triggerevent",level:3},{value:"<code>clearEStack</code>",id:"clearestack",level:3},{value:"Supporting virtual GamePad input while manually pumping events",id:"supporting-virtual-gamepad-input-while-manually-pumping-events",level:2},{value:"<code>__BTNUpdate</code>",id:"__btnupdate",level:3},{value:"<code>__BTNKeypressed</code>",id:"__btnkeypressed",level:3},{value:"<code>__BTNTouchControl</code>",id:"__btntouchcontrol",level:3},{value:"<code>__BTNGamepad</code>",id:"__btngamepad",level:3}],u={toc:d};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The events/callbacks system."),(0,r.kt)("h2",{id:"manually-pumping-events"},"Manually pumping events"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Manually pumping events would stop the ",(0,r.kt)("a",{parentName:"p",href:"../input/gamepad"},"virtual gamepads")," input\nfrom working properly."),(0,r.kt)("p",{parentName:"admonition"},"To have them functioning again follow the\n",(0,r.kt)("a",{parentName:"p",href:"#supporting-virtual-gamepad-input-while-manually-pumping-events"},"last section in this page"),".")),(0,r.kt)("h3",{id:"pullevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"pullEvent")),(0,r.kt)("p",null,"Pull an event."),(0,r.kt)("p",null,"Either pulled from the events stack if it has any events\nor the machine is suspended until an event is made."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"eventName, a, b, c, d, e, f = pullEvent()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"first parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"second parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"third parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"fourth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"fifth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"f"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"sixth parameter")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rawpullevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"rawPullEvent")),(0,r.kt)("p",null,"Pull a fresh new event bypassing the events queue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"event, a, b, c, d, e, f = rawPullEvent()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Return"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"first parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"second parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"third parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"fourth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"fifth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"f"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"sixth parameter")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"triggerevent"},(0,r.kt)("inlineCode",{parentName:"h3"},"triggerEvent")),(0,r.kt)("p",null,"Add a new event to the events stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"triggerEvent(event, a, b, c, d, e, f)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"first parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"second parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"third parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"fourth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"fifth parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"f"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"sixth parameter")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clearestack"},(0,r.kt)("inlineCode",{parentName:"h3"},"clearEStack")),(0,r.kt)("p",null,"Clear the events stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"clearEStack()\n")),(0,r.kt)("h2",{id:"supporting-virtual-gamepad-input-while-manually-pumping-events"},"Supporting virtual GamePad input while manually pumping events"),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"../input/gamepad"},"GamePad")," input to still work properly the following functions\nhas to be called in their corresponding events."),(0,r.kt)("h3",{id:"__btnupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"__BTNUpdate")),(0,r.kt)("p",null,"To be called on every ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"__BTNUpdate(deltaTime)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"deltaTime"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null},"since last call. in seconds.")))),(0,r.kt)("h3",{id:"__btnkeypressed"},(0,r.kt)("inlineCode",{parentName:"h3"},"__BTNKeypressed")),(0,r.kt)("p",null,"To be called on every ",(0,r.kt)("inlineCode",{parentName:"p"},"keypressed")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"__BTNKeypressed(keyName, isRepeat)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"keyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"isRepeat"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"__btntouchcontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"__BTNTouchControl")),(0,r.kt)("p",null,"To be called on every ",(0,r.kt)("inlineCode",{parentName:"p"},"touchcontrol")," event."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"touchcontrol")," event is an undocumented event that exists. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"__BTNTouchControl(state, buttonId)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"buttonId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"__btngamepad"},(0,r.kt)("inlineCode",{parentName:"h3"},"__BTNGamepad")),(0,r.kt)("p",null,"To be called on every ",(0,r.kt)("inlineCode",{parentName:"p"},"gamepad")," event."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gamepad")," event is an undocumented event that exists.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"__BTNGamepad(state, buttonId, gamepadId)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"buttonId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"gamepadId"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f required"),(0,r.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);