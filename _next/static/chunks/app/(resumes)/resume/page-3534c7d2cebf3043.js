(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179,362],{5828:function(e,i,t){Promise.resolve().then(t.bind(t,5196)),Promise.resolve().then(t.bind(t,7251)),Promise.resolve().then(t.bind(t,6964)),Promise.resolve().then(t.t.bind(t,1749,23))},5196:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return c}});var s=t(3827),n=t(4090);t(5325),t(3637),t(3955);var a=t(5588),l=t(39),o=t(703);function c(){let[e,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{i(!0)},[]),(0,s.jsx)("div",{className:"col-xxl-8 col-xl-9",children:(0,s.jsxs)("div",{className:"bostami-page-content-wrap",children:[(0,s.jsx)("div",{className:"section-wrapper pl-60 pr-60 pt-60",children:(0,s.jsxs)("div",{className:"bostami-page-title-wrap mb-15",children:[(0,s.jsx)("h2",{className:"page-title",children:"about"}),(0,s.jsx)("p",{children:l.H.descOne}),(0,s.jsx)("p",{children:l.H.descTwo})]})}),(0,s.jsxs)("div",{className:"section-wrapper pl-60 pr-60",children:[(0,s.jsx)("div",{className:"bostami-section-title-wrap mb-30",children:(0,s.jsx)("h3",{className:"section-title",children:"What I do!"})}),(0,s.jsx)("div",{className:"bostami-what-do-wrap mb-30",children:(0,s.jsx)("div",{className:"row",children:a.e.slice(0,4).map((e,i)=>(0,s.jsx)("div",{className:"col-xxl-6 col-xl-6 col-lg-6",children:(0,s.jsxs)("div",{className:"bostami-what-do-item ".concat(e.bg," "),children:[(0,s.jsx)("div",{className:"icon",style:{margin:"0 auto"},children:(0,s.jsx)(o.default,{height:40,width:130,style:{margin:"0 auto"},src:e.icon,alt:"feature"})}),(0,s.jsxs)("div",{className:"text",children:[(0,s.jsx)("h4",{className:"title",children:e.title}),(0,s.jsx)("p",{children:e.description})]})]})},i))})})]}),(0,s.jsx)("div",{className:"footer-copyright text-center pt-25 pb-25",children:(0,s.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," Dede Eka Prasetya."]})})]})})}},7251:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return o}});var s=t(3827),n=t(4090),a=t(6430),l=t(3676);function o(){let[e,i]=(0,n.useState)(!0),t=()=>{"url(/assets/img/bg/page-bg-dark-1.jpg"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-dark-1.jpg",i(!0))},o=()=>{"url(/assets/img/bg/space.jpg)"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/space.jpg)",i(!1))},[c,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{var e;!0==JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("idDarkMode"))?(document.body.classList.add("dark-theme"),t()):(document.body.classList.remove("dark-theme"),o())},[]),(0,s.jsx)("div",{className:"bostami-header-area mb-30 ",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"bostami-header-wrap",children:(0,s.jsx)("div",{className:"row align-items-center",children:(0,s.jsx)("div",{className:"col-6",children:(0,s.jsx)("div",{className:"bostami-header-menu-btn text-right",children:(0,s.jsxs)("div",{className:"menu-btn toggle_menu ".concat(c&&"active"," "),onClick:()=>r(e=>!e),children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{})]})})})})}),(0,s.jsx)("div",{className:"mobile-menu-wrap",children:(0,s.jsx)("div",{className:"mobile-menu mobile_menu ".concat(c&&"active"," "),children:(0,s.jsx)(a.Z,{setMenuOpen:r,data:l.pO})})})]})})}t(703),t(8792)},6430:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var s=t(3827),n=t(7907),a=t(8792);function l(e){let{setMenuOpen:i,data:t}=e,l=(0,n.usePathname)();return(0,s.jsxs)("div",{className:"mean-bar",children:[(0,s.jsx)("a",{href:"#nav",className:"meanmenu-reveal",style:{right:"0px",left:"auto",display:"inline"},children:(0,s.jsx)("span",{children:(0,s.jsx)("span",{children:(0,s.jsx)("span",{})})})}),(0,s.jsx)("nav",{className:"mean-nav",children:(0,s.jsx)("ul",{children:t.map((e,n)=>(0,s.jsx)("li",{className:" ".concat(n+1==t.length&&"mean-last"," ").concat(l==e.href&&"active","  "),style:{paddingTop:"5px",paddingBottom:"4px"},onClick:()=>{i(!1)},children:(0,s.jsxs)(a.default,{href:e.href,children:[(0,s.jsx)("span",{children:(0,s.jsx)("i",{style:{fontSize:"18px",marginRight:"10px"},className:e.icon})}),e.text]})},n))})})]})}},6964:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return o}});var s=t(3827);t(4090);var n=t(7907),a=t(8792),l=t(3676);function o(){let e=(0,n.usePathname)();return(0,s.jsx)("div",{className:"col-xxl-1 d-xxl-block d-none",children:(0,s.jsx)("div",{className:"bostami-main-menu-wrap",children:(0,s.jsx)("nav",{className:"bastami-main-menu main_menu",children:(0,s.jsx)("ul",{children:l.pO.map((i,t)=>(0,s.jsx)("li",{className:"".concat(e==i.href&&"active","  "),children:(0,s.jsxs)(a.default,{href:i.href,children:[(0,s.jsx)("span",{children:(0,s.jsx)("i",{style:{fontSize:"25px"},className:i.icon})}),i.text]})},t))})})})})}},39:function(e,i,t){"use strict";t.d(i,{H:function(){return s}});let s={descOne:"I'm Software Engineer\n    from North Sumatera, Indonesia, working in goverment hospital. I enjoy\n    turning complex problems into simple and intuitive designs.",descTwo:"Experienced	Software Developer	adept	in bringing forth	expertise	in design,	installation,	\ntesting, and	maintenance	of software systems.	Equipped	with	a	diverse	and	promising	skillset.	Proficient in	various	platforms	and	languages. Experienced with the	latest cutting edge	\ndevelopment	tools	and	procedures.	Able to	effectively	self-manage	during independent projects,	as well as	collaborate	as part of a	productive team."}},5325:function(e,i,t){"use strict";t.d(i,{h:function(){return s}});let s=[{id:1,imgSrc:"/assets/img/client/client-logo-1.png"},{id:2,imgSrc:"/assets/img/client/client-logo-2.png"},{id:3,imgSrc:"/assets/img/client/client-logo-3.png"},{id:4,imgSrc:"/assets/img/client/client-logo-4.png"},{id:5,imgSrc:"/assets/img/client/client-logo-1.png"},{id:6,imgSrc:"/assets/img/client/client-logo-2.png"},{id:7,imgSrc:"/assets/img/client/client-logo-3.png"},{id:8,imgSrc:"/assets/img/client/client-logo-4.png"}]},5588:function(e,i,t){"use strict";t.d(i,{H:function(){return n},e:function(){return s}});let s=[{id:1,icon:"/assets/img/app-development.svg",title:"App Development",description:"Skilled Software Engineer with a passion for building intuitive and efficient mobile applications. Experienced in full-cycle app development, from design to deployment, with a focus on creating user-friendly and reliable solutions.",bg:"bg-catkrill"},{id:2,icon:"/assets/img/webdev.svg",title:"Web Development",description:"Experienced Web Developer specializing in creating engaging, responsive websites. Skilled in transforming complex needs into seamless, user-friendly designs with a strong focus on modern web technologies and optimization.",bg:"bg-prink"}],n=[{id:1,icon:"/assets/img/design.svg",title:"Ui/Ux Design",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-prink"},{id:2,icon:"/assets/img/app-development.svg",title:"App Development",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-catkrill"},{id:3,icon:"/assets/img/photograph.svg",title:"Photography",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-prink"},{id:4,icon:"/assets/img/webdev.svg",title:"Web Development",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-catkrill"},{id:5,icon:"/assets/img/management.svg",title:"Management",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-prink"},{id:6,icon:"/assets/img/webdev.svg",title:"Web Development",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",bg:"bg-catkrill"}]},3676:function(e,i,t){"use strict";t.d(i,{X7:function(){return a},pO:function(){return s},z_:function(){return n}});let s=[{id:1,href:"/",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio",icon:"fa-light fa-briefcase",text:"Works"}],n=[{id:1,href:"/about-2",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-2",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-2",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-2",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-2",icon:"size-22 fa-light fa-address-book",text:"Contact"}],a=[{id:1,href:"/home-3",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-3",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-3",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-3",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-3",icon:"size-22 fa-light fa-address-book",text:"Contact"}]}},function(e){e.O(0,[134,955,971,69,744],function(){return e(e.s=5828)}),_N_E=e.O()}]);