(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{9499:function(e,s,t){Promise.resolve().then(t.bind(t,120)),Promise.resolve().then(t.bind(t,7251)),Promise.resolve().then(t.bind(t,6964)),Promise.resolve().then(t.t.bind(t,1749,23))},120:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(3827),i=t(4090);let n={_origin:"https://api.emailjs.com"},r=(e,s,t)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let o=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((a,i)=>{let r=new XMLHttpRequest;r.addEventListener("load",e=>{let{target:s}=e,t=new l(s);200===t.status||"OK"===t.text?a(t):i(t)}),r.addEventListener("error",e=>{let{target:s}=e;i(new l(s))}),r.open("POST",n._origin+e,!0),Object.keys(t).forEach(e=>{r.setRequestHeader(e,t[e])}),r.send(s)})},c=e=>{let s;if(!(s="string"==typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s};var d={init:function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";n._userID=e,n._origin=s},send:(e,s,t,a)=>{let i=a||n._userID;return r(i,e,s),o("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:i,service_id:e,template_id:s,template_params:t}),{"Content-type":"application/json"})},sendForm:(e,s,t,a)=>{let i=a||n._userID,l=c(t);r(i,e,s);let d=new FormData(l);return d.append("lib_version","3.12.1"),d.append("service_id",e),d.append("template_id",s),d.append("user_id",i),o("/api/v1.0/email/send-form",d)}},m=t(6974);function u(){let[e,s]=(0,i.useState)([]),t=(0,i.useRef)();return(0,a.jsxs)("form",{className:"contact-form",ref:t,onSubmit:e=>{e.preventDefault(),d.sendForm("service_n4mkhz9","template_ugoztxr",t.current,"user_vYmDSd9PwIuRXUQEDjYwN").then(e=>{console.log(e),m.toast.success("Message Sent successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),document.getElementById("myFormOne").reset()},e=>{m.toast.error("Ops Message not Sent!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})},children:[(0,a.jsxs)("div",{className:"form-input-item mb-60",children:[(0,a.jsx)("label",{style:e.includes("name")?{color:"#FE7878"}:{},className:"input-lebel name",children:"name *"}),(0,a.jsx)("input",{name:"name",className:"input-box name ".concat(e.includes("name")&&"height"," "),type:"text",required:!0,onClick:()=>s(e=>e.includes("name")?e:[...e,"name"]),style:e.includes("name")?{borderColor:"#FE7878"}:{}})]}),(0,a.jsxs)("div",{className:"form-input-item mb-60",children:[(0,a.jsx)("label",{style:e.includes("gmail")?{color:"#1B74E4"}:{},className:"input-lebel gmail",children:"Email *"}),(0,a.jsx)("input",{name:"email",className:"input-box gmail ".concat(e.includes("gmail")&&"height"," "),type:"Email",required:!0,onClick:()=>s(e=>e.includes("gmail")?e:[...e,"gmail"]),style:e.includes("gmail")?{borderColor:"#1B74E4"}:{}})]}),(0,a.jsxs)("div",{className:"form-input-item mb-40",children:[(0,a.jsx)("label",{style:e.includes("message")?{color:"#CE65F3"}:{},className:"input-lebel message",children:"Message *"}),(0,a.jsx)("textarea",{name:"message",className:"input-box message ".concat(e.includes("message")&&"height"," "),onClick:()=>s(e=>e.includes("message")?e:[...e,"message"]),style:e.includes("message")?{borderColor:"#CE65F3"}:{},cols:"30",rows:"10"})]}),(0,a.jsx)("div",{className:"form-btn-wrap",children:(0,a.jsx)("button",{type:"submit",value:"Send",className:"form-btn",children:"submit"})})]})}t(8062)},7251:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var a=t(3827),i=t(4090),n=t(6430),r=t(3676);function l(){let[e,s]=(0,i.useState)(!0),t=()=>{"url(/assets/img/bg/page-bg-dark-1.jpg"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-dark-1.jpg",s(!0))},l=()=>{"url(/assets/img/bg/space.jpg)"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/space.jpg)",s(!1))},[o,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var e;!0==JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("idDarkMode"))?(document.body.classList.add("dark-theme"),t()):(document.body.classList.remove("dark-theme"),l())},[]),(0,a.jsx)("div",{className:"bostami-header-area mb-30 ",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"bostami-header-wrap",children:(0,a.jsx)("div",{className:"row align-items-center",children:(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("div",{className:"bostami-header-menu-btn text-right",children:(0,a.jsxs)("div",{className:"menu-btn toggle_menu ".concat(o&&"active"," "),onClick:()=>c(e=>!e),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})})})})}),(0,a.jsx)("div",{className:"mobile-menu-wrap",children:(0,a.jsx)("div",{className:"mobile-menu mobile_menu ".concat(o&&"active"," "),children:(0,a.jsx)(n.Z,{setMenuOpen:c,data:r.pO})})})]})})}t(703),t(8792)},6430:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(3827),i=t(7907),n=t(8792);function r(e){let{setMenuOpen:s,data:t}=e,r=(0,i.usePathname)();return(0,a.jsxs)("div",{className:"mean-bar",children:[(0,a.jsx)("a",{href:"#nav",className:"meanmenu-reveal",style:{right:"0px",left:"auto",display:"inline"},children:(0,a.jsx)("span",{children:(0,a.jsx)("span",{children:(0,a.jsx)("span",{})})})}),(0,a.jsx)("nav",{className:"mean-nav",children:(0,a.jsx)("ul",{children:t.map((e,i)=>(0,a.jsx)("li",{className:" ".concat(i+1==t.length&&"mean-last"," ").concat(r==e.href&&"active","  "),style:{paddingTop:"5px",paddingBottom:"4px"},onClick:()=>{s(!1)},children:(0,a.jsxs)(n.default,{href:e.href,children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{fontSize:"18px",marginRight:"10px"},className:e.icon})}),e.text]})},i))})})]})}},6964:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var a=t(3827);t(4090);var i=t(7907),n=t(8792),r=t(3676);function l(){let e=(0,i.usePathname)();return(0,a.jsx)("div",{className:"col-xxl-1 d-xxl-block d-none",children:(0,a.jsx)("div",{className:"bostami-main-menu-wrap",children:(0,a.jsx)("nav",{className:"bastami-main-menu main_menu",children:(0,a.jsx)("ul",{children:r.pO.map((s,t)=>(0,a.jsx)("li",{className:"".concat(e==s.href&&"active","  "),children:(0,a.jsxs)(n.default,{href:s.href,children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{fontSize:"25px"},className:s.icon})}),s.text]})},t))})})})})}},3676:function(e,s,t){"use strict";t.d(s,{X7:function(){return n},pO:function(){return a},z_:function(){return i}});let a=[{id:1,href:"/",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio",icon:"fa-light fa-briefcase",text:"Works"}],i=[{id:1,href:"/about-2",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-2",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-2",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-2",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-2",icon:"size-22 fa-light fa-address-book",text:"Contact"}],n=[{id:1,href:"/home-3",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-3",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-3",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-3",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-3",icon:"size-22 fa-light fa-address-book",text:"Contact"}]},8062:function(){}},function(e){e.O(0,[134,974,971,69,744],function(){return e(e.s=9499)}),_N_E=e.O()}]);