(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{8773:function(e,a,s){Promise.resolve().then(s.bind(s,8233)),Promise.resolve().then(s.bind(s,565)),Promise.resolve().then(s.t.bind(s,1749,23))},8233:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return c}});var t=s(3827),i=s(4090),n=s(6430),l=s(3676),r=s(703),o=s(8792);function c(){let[e,a]=(0,i.useState)(!1),s=()=>{"url(/assets/img/bg/page-bg-dark-1.jpg"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-dark-1.jpg",a(!0))},c=()=>{"url(/assets/img/bg/page-bg-1.jpg)"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-1.jpg)",a(!1))},[d,m]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var e;!0==JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("idDarkMode"))?(document.body.classList.add("dark-theme"),s()):(document.body.classList.remove("dark-theme"),c())},[]),(0,t.jsx)("div",{className:"bostami-header-area mb-30 z-index-5",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"bostami-header-wrap",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-6",children:(0,t.jsx)("div",{className:"bostami-header-logo",children:(0,t.jsx)(o.default,{className:"site-logo",href:"/",children:(0,t.jsx)(r.default,{width:153,height:32,src:"/assets/img/logo/logo-2.png",alt:"logo"})})})}),(0,t.jsx)("div",{className:"col-6",children:(0,t.jsxs)("div",{className:"bostami-header-menu-btn text-right mb-0",children:[(0,t.jsx)("div",{className:"dark-btn mode-btn",onClick:()=>{var e,a;!0==JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("idDarkMode"))?(localStorage.setItem("idDarkMode",!1),document.body.classList.remove("dark-theme"),c()):(null===(a=localStorage)||void 0===a||a.setItem("idDarkMode",!0),document.body.classList.add("dark-theme"),s())},children:e?(0,t.jsx)("i",{className:"sunicon fa-light fa-sun-bright"}):(0,t.jsx)("i",{className:"moonicon fa-solid fa-moon"})}),(0,t.jsxs)("div",{className:"menu-btn toggle_menu d-lg-none ".concat(d&&"active"," "),onClick:()=>m(e=>!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]})})]})}),(0,t.jsx)("div",{className:"mobile-menu-wrap",children:(0,t.jsx)("div",{className:"mobile-menu mobile_menu_3 ".concat(d&&"active"," "),children:(0,t.jsx)(n.Z,{setMenuOpen:m,data:l.X7})})})]})})}},565:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return r}});var t=s(3827),i=s(3676);s(4090);var n=s(7907),l=s(8792);function r(){let e=(0,n.usePathname)();return(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("div",{className:"bostami-main-menu-wrap",children:(0,t.jsx)("nav",{className:"bastami-main-menu main_menu_3",children:(0,t.jsx)("ul",{children:i.X7.map((a,s)=>(0,t.jsx)("li",{className:e==a.href?"active":"",children:(0,t.jsxs)(l.default,{href:a.href,style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[(0,t.jsx)("span",{style:{fontSize:"24px",marginBottom:"12px"},children:(0,t.jsx)("i",{className:a.icon})}),(0,t.jsxs)("div",{children:[" ",a.text]})]})},s))})})})})}},6430:function(e,a,s){"use strict";s.d(a,{Z:function(){return l}});var t=s(3827),i=s(7907),n=s(8792);function l(e){let{setMenuOpen:a,data:s}=e,l=(0,i.usePathname)();return(0,t.jsxs)("div",{className:"mean-bar",children:[(0,t.jsx)("a",{href:"#nav",className:"meanmenu-reveal",style:{right:"0px",left:"auto",display:"inline"},children:(0,t.jsx)("span",{children:(0,t.jsx)("span",{children:(0,t.jsx)("span",{})})})}),(0,t.jsx)("nav",{className:"mean-nav",children:(0,t.jsx)("ul",{children:s.map((e,i)=>(0,t.jsx)("li",{className:" ".concat(i+1==s.length&&"mean-last"," ").concat(l==e.href&&"active","  "),style:{paddingTop:"5px",paddingBottom:"4px"},onClick:()=>{a(!1)},children:(0,t.jsxs)(n.default,{href:e.href,children:[(0,t.jsx)("span",{children:(0,t.jsx)("i",{style:{fontSize:"18px",marginRight:"10px"},className:e.icon})}),e.text]})},i))})})]})}},3676:function(e,a,s){"use strict";s.d(a,{X7:function(){return n},pO:function(){return t},z_:function(){return i}});let t=[{id:1,href:"/",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio",icon:"fa-light fa-briefcase",text:"Works"}],i=[{id:1,href:"/about-2",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-2",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-2",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-2",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-2",icon:"size-22 fa-light fa-address-book",text:"Contact"}],n=[{id:1,href:"/home-3",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-3",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-3",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-3",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-3",icon:"size-22 fa-light fa-address-book",text:"Contact"}]}},function(e){e.O(0,[134,971,69,744],function(){return e(e.s=8773)}),_N_E=e.O()}]);