"use strict";(self.webpackChunksme_dlsu=self.webpackChunksme_dlsu||[]).push([[1431],{3645:function(e,t,r){r.d(t,{Uw:function(){return i},Zp:function(){return m},e7:function(){return s},x7:function(){return o}});var a=r(7387),n=r(6540);const o=e=>{for(let t in e)return!1;return!0},s=e=>{let{condition:t,wrapper:r,children:a}=e;return t?r(a):a},c=n.createContext({setState:()=>{}});let i=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={...t.props.initialState,setState:e=>t.setState(e)},t}return(0,a.A)(t,e),t.prototype.render=function(){return n.createElement(c.Provider,{value:this.state},n.createElement(n.Fragment,null,"function"==typeof this.props.children?this.props.children(this.state):this.props.children))},t}(n.Component);i.defaultProps={initialState:{}};let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.A)(t,e),t.prototype.render=function(){const{children:e}=this.props;return n.createElement(c.Consumer,null,(t=>e(t)))},t}(n.Component)},5200:function(e,t,r){r.r(t),r.d(t,{Head:function(){return y},SubjectChip:function(){return F},default:function(){return E}});var a=r(8453),n=r(6540);function o(e){return n.createElement(n.Fragment)}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?n.createElement(t,e,n.createElement(o,e)):o()},c=r(5835),i=r(4794),m=r(9460),l=r(5547),u=r(3645),M=r(5501);const d=structuredClone(M);function g(e){let{data:t,children:r,pageContext:o}=e;const s=o.subject,M=Object.fromEntries(d.nodes.map((e=>[e.id,e.name]))),g=t.allDirectory.nodes.map((e=>e.name)),E=d.nodes.find(((e,t,r)=>e.id===s)),y=d.links.filter(((e,t,r)=>e.source===s)),C=d.links.filter(((e,t,r)=>e.target===s));t.allMdx.nodes.sort(((e,t)=>{var r;return null===(r=e.frontmatter.category)||void 0===r?void 0:r.localeCompare(t.frontmatter.category)}));let L=new Map;for(let e of t.allMdx.nodes){let t=e.frontmatter.category,r={title:e.frontmatter.title,link:e.fields.slug,status:e.frontmatter.status,interactive:e.frontmatter.interactive};t in L?L[t].push(r):L[t]=[r]}return n.createElement(a.xA,{components:f},n.createElement("dialog",{id:"formContactDialog",className:"modal"},n.createElement("div",{className:"modal-box"},n.createElement("form",{method:"dialog"},n.createElement("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 material-symbols-outlined"},"close")),n.createElement("h3",{className:"font-bold text-lg"},'Contact us about "',s,'"'),n.createElement(l.x,{id:"formContact",onSubmit:e=>{e.preventDefault();const t=document.getElementById("formContact");t.submit(),t.reset(),document.getElementById("formContactDialog").close()}})),n.createElement("form",{method:"dialog",className:"modal-backdrop"},n.createElement("button",null,"close"))),n.createElement(c.A,{leading:n.createElement(i.Link,{to:"../#list"},n.createElement("button",{className:"btn btn-ghost"},n.createElement("span",{className:"material-symbols-outlined"},"arrow_back"),n.createElement("span",{className:"hidden md:inline"},"Back to courses")))},n.createElement(m.U,{className:"prose  p-4 xl:p-0"},n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"flex flex-row"},n.createElement("h1",{className:"grow flex flex-col md:flex-row justify-items-stretch mb-0"},n.createElement("div",{className:"text-6xl md:text-8xl "},s),n.createElement("div",{className:"md:pl-7 text-2xl  md:self-center justify-self-start"},E.name)),n.createElement("div",{className:"dropdown dropdown-end"},n.createElement("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-circle btn-sm"},n.createElement("span",{className:"material-symbols-outlined"},"more_vert")),n.createElement("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-1 menu-sm shadow bg-base-200 rounded-box w-52"},n.createElement("li",null,n.createElement("a",{onClick:()=>{document.getElementById("formContactDialog").showModal()}},"Contact us about this page..."))))),n.createElement("div",{className:"text-sm md:text-lg font-mono flex flex-col md:flex-row"},n.createElement("div",null,"Requires:",u.x7(C)?n.createElement("span",{className:"italic"}," none"):C.map(((e,t,r)=>n.createElement(F,{id:e.source,title:M[e.source],hasLink:g.includes(e.source),type:e.type})))),n.createElement("div",{className:""},n.createElement("span",{className:"hidden md:inline md:px-3"},"·"),"Unlocks:",u.x7(y)?n.createElement("span",{className:"italic"}," none"):y.map(((e,t,r)=>n.createElement(F,{id:e.target,title:M[e.target],hasLink:g.includes(e.target),type:e.type})))))),u.x7(L)?null:n.createElement("h2",{className:""},"Resources"),n.createElement("div",{className:"flex flex-row flex-wrap my-7 gap-7 place-content-center "},(()=>{let e=[];for(let t in L){if("null"===t)continue;let r=L[t];e.push(n.createElement(p,{title:t,lessons:r}))}return"null"in L&&e.push(n.createElement(p,{title:"Additional",lessons:L.null})),e})()),t.mdx.excerpt.length>0?n.createElement("h2",{className:""},"More information"):n.createElement(n.Fragment),r)))}function E(e){return n.createElement(g,e,n.createElement(s,e))}function p(e){let{title:t,lessons:r}=e;return n.createElement("div",{className:"card card-compact w-96 bg-base-200 shadow-xl not-prose"},n.createElement("div",{className:"card-body"},n.createElement("h2",{className:"card-title"},t),n.createElement("ul",{className:"menu w-full  p-0"},r.map(((e,t,r)=>n.createElement("li",null,n.createElement(i.Link,{to:e.link,className:"flex flex-row"},null!=e.status?n.createElement("div",{className:"badge badge-neutral"},e.status.toUpperCase()):n.createElement(n.Fragment),n.createElement("span",{className:"grow"},e.title),!0===e.interactive?n.createElement("span",{className:"tooltip tooltip-bottom","data-tip":"This lesson is interactive."},n.createElement("span",{className:"material-symbols-outlined"},"touch_app")):n.createElement(n.Fragment))))))))}function F(e){let{id:t,type:r,title:a,hasLink:o,onClick:s}=e,c="",m="";switch(a??=t,r){case"hard":c="badge-warning",m="hard pre-requisite";break;case"soft":c="badge-success",m="soft pre-requesite";break;case"co":c="badge-info",m="co-requisite"}return n.createElement(u.e7,{condition:o,wrapper:e=>n.createElement(i.Link,{to:`/${t}`},e)},n.createElement("div",{className:"tooltip tooltip-bottom font-sans pl-1 "+(o?"cursor-pointer":"cursor-default"),"data-tip":`${a}\n(${m})`,onClick:s},n.createElement("div",{className:`badge badge-outline font-mono ${c}`},t," (",r.substring(0,1).toUpperCase(),")")))}const y=e=>{let{data:t,pageContext:r}=e;const a=r.subject,o=d.nodes.find(((e,t,r)=>e.id===a));return n.createElement(n.Fragment,null,n.createElement("title",null,a," - Learn With SME"),n.createElement("meta",{name:"og:title",content:`${a} - ${o.name}`}),n.createElement("meta",{name:"og:type",content:"article"}),n.createElement("meta",{name:"og:site_name",content:"SME DLSU Academic Hub"}),n.createElement("meta",{name:"og:description",content:t.mdx.excerpt}),n.createElement("meta",{name:"description",content:t.mdx.excerpt}))},f={Link:i.Link}},5501:function(e){e.exports=JSON.parse('{"nodes":[{"id":"GEPCOMM","name":"Purposive Communications"},{"id":"FNDMATH","name":"Foundation Course in Mathematics","term":{"118":1,"119":1,"120":1,"121":1,"122":1,"123":1},"category":"engg"},{"id":"BASCHEM","name":"Basic Chemistry","term":{"118":1,"119":1,"120":1,"121":1,"122":1,"123":1},"tags":["with old resources"],"category":"engg"},{"id":"BASPHYS","name":"Basic Physics","term":{"118":1,"119":1,"120":1,"121":1,"122":1,"123":1},"category":"engg"},{"id":"FNDSTAT","name":"Foundation Course in Statistics","term":{"118":1,"119":1,"120":1,"121":1,"122":1,"123":1},"tags":["with old resources"],"category":"engg"},{"id":"LBYMF1A","name":"Engineering Measurement Laboratory","term":{"118":1,"119":1,"120":1,"121":1,"122":1,"123":1},"tags":["with old resources"]},{"id":"LBYME1A","name":"Engineering Drawing","term":{"118":2,"119":1,"120":1,"121":1,"122":1,"123":1},"tags":["with old resources"],"category":"engg"},{"id":"CALENG1","name":"Differential Calculus","term":{"118":2,"119":2,"120":2,"121":2,"122":2,"123":2},"tags":["with old resources"],"category":"engg"},{"id":"LBYME1B","name":"Engineering Computer Aided Drafting","term":{"118":3,"119":3,"120":2,"121":2,"122":2,"123":2}},{"id":"LBYEC2A","name":"Computer Fundamentals and Programming 1","term":{"118":2,"119":2,"120":2,"121":2,"122":2,"123":2},"category":"engg"},{"id":"LBYMF1B","name":"Machine Tools, Processes and Practice 1 Laboratory","term":{"118":2,"119":2,"120":2,"121":2,"122":2,"123":2},"tags":["workshop"]},{"id":"CALENG2","name":"Integral Calculus","term":{"118":3,"119":3,"120":3,"121":3,"122":3,"123":3},"category":"engg"},{"id":"ENGCHEM","name":"General Chemistry 1","term":{"118":2,"119":3,"120":3,"121":3,"122":3,"123":3},"category":"engg"},{"id":"LBYCH1A","name":"General Chemistry 1 Laboratory","term":{"118":2,"119":3,"120":3,"121":3,"122":3,"123":3},"category":"engg"},{"id":"MFMCPR1","name":"Machine Tools, Processes and Practice 2","term":{"118":3,"119":3,"120":3,"121":3,"122":3,"123":3}},{"id":"LBYMF1C","name":"Machine Tools, Processes and Practice 2 Laboratory","term":{"118":3,"119":3,"120":3,"121":3,"122":3,"123":3},"tags":["workshop"]},{"id":"LBYMF1D","name":"Computer Programming for MEM","term":{"118":3,"119":3,"120":3,"121":3,"122":3,"123":3}},{"id":"MFCAENG","name":"Computer-Aided Engineering","term":{"118":5,"119":5,"120":4,"121":4,"122":4,"123":4}},{"id":"LBYMF2B","name":"Computer-Aided Engineering Laboratory","term":{"118":5,"119":5,"120":4,"121":4,"122":4,"123":4}},{"id":"ENGDATA","name":"Engineering Data Analysis","term":{"118":3,"119":4,"120":4,"121":4,"122":4,"123":4},"category":"engg"},{"id":"MFMNGMT","name":"Engineering Management for MEM","term":{"118":5,"119":4,"120":4,"121":4,"122":4,"123":4}},{"id":"CALENG3","name":"Differential Equations","term":{"118":4,"119":4,"120":4,"121":4,"122":4,"123":4},"tags":["with old resources"],"category":"engg"},{"id":"ENGPHYS","name":"Engineering Physics 1","term":{"118":3,"119":4,"120":4,"121":4,"122":4,"123":4},"tags":["with old resources"],"category":"engg"},{"id":"LBYPH1A","name":"Engineering Physics 1 Laboratory","term":{"118":3,"119":4,"120":4,"121":4,"122":4,"123":4},"category":"engg"},{"id":"MFMCPR2","name":"Manufacturing Processes and Practice 3","term":{"118":4,"119":4,"120":4,"121":4,"122":4,"123":4}},{"id":"LBYMF2A","name":"Manufacturing Processes and Practice 3 Laboratory","term":{"118":4,"119":4,"120":4,"121":4,"122":4,"123":4},"tags":["with old resources"]},{"id":"ENGMEC1","name":"Statics Of Rigid Bodies","term":{"118":4,"119":5,"120":5,"121":5,"122":5,"123":5},"category":"engg"},{"id":"BASELCI","name":"Electrical Engineering Principles","term":{"118":4,"119":5,"120":5,"121":5,"122":5,"123":5},"tags":["with old resources"],"category":"engg"},{"id":"LBYEC2L","name":"Electrical Engineering Principles Lab for MEM","term":{"118":4,"119":5,"120":5,"121":5,"122":5,"123":5}},{"id":"MFTHSCI","name":"Thermal Science for MEM Students","term":{"118":6,"119":6,"120":5,"121":5,"122":5,"123":5}},{"id":"MFMTENG","name":"Materials Engineering","term":{"118":5,"119":5,"120":5,"121":5,"122":5,"123":5},"tags":["with old resources"]},{"id":"LBYMF2D","name":"Materials Engineering Laboratory","term":{"118":5,"119":5,"120":5,"121":5,"122":5,"123":5}},{"id":"MFADMAT","name":"Advanced Mathematics for MEM","term":{"118":5,"119":5,"120":5,"121":5,"122":5,"123":5},"tags":["with old resources"]},{"id":"LBYEC3B","name":"Intelligent Systems for Engineering","term":{"118":4,"119":5,"120":5,"121":5,"122":5,"123":5},"tags":["with old resources"],"category":"engg"},{"id":"ECNOMIC","name":"Engineering Economics","term":{"118":6,"119":6,"120":6,"121":6,"122":6,"123":6},"tags":["with old resources"],"category":"engg"},{"id":"ENGMEC2","name":"Dynamics of Rigid Bodies","term":{"118":5,"119":6,"120":6,"121":6,"122":6,"123":6},"category":"engg"},{"id":"MFANLOG","name":"Analog Electronics Design","term":{"118":5,"119":6,"120":6,"121":6,"122":6,"123":6}},{"id":"LBYMF2C","name":"Analog Design for MEM Laboratory","term":{"118":5,"119":6,"120":6,"121":6,"122":6,"123":6},"category":"engg"},{"id":"MFAIMFG","name":"Computational Intelligence in Manufacturing Systems","term":{"118":7,"119":7,"120":6,"121":7,"122":6,"123":6},"tags":["with old resources"]},{"id":"LBYMF3B","name":"Computational Intelligence in Manufacturing Systems Laboratory","term":{"118":7,"119":7,"120":6,"121":7,"122":6,"123":6}},{"id":"MFFNWLD","name":"Foundry and Welding Processes","term":{"118":6,"119":6,"120":6,"121":6,"122":6,"123":6}},{"id":"LBYMF2E","name":"Foundry and Welding Processes Laboratory","term":{"118":6,"119":6,"120":6,"121":6,"122":6,"123":6}},{"id":"MRVIBEN","name":"Vibration Engineering","term":{"118":9,"119":8,"120":6,"121":6,"122":6,"123":6}},{"id":"ENGMEC3","name":"Mechanics of Deformable Bodies","term":{"118":6,"119":7,"120":7,"121":7,"122":7,"123":7},"category":"engg"},{"id":"MFDIGTL","name":"Digital Electronics Design","term":{"118":6,"119":7,"120":7,"121":7,"122":7,"123":7}},{"id":"LBYMF2F","name":"Digital Electronics Design Laboratory","term":{"118":6,"119":7,"120":7,"121":7,"122":7,"123":7}},{"id":"THSCSTN1","name":"Capstone Project for MEM Students 1","term":{"118":7,"119":7,"120":7,"121":7,"122":7,"123":7}},{"id":"MFKNMAT","name":"Kinematics","term":{"118":7,"119":7,"120":7,"121":7,"122":7,"123":7},"tags":["with old resources"]},{"id":"LBYMF3A","name":"Kinematics Laboratory","term":{"118":7,"119":7,"120":7,"121":7,"122":7,"123":7}},{"id":"MFERGOP","name":"Ergonomics in Manufacturing Engineering","term":{"118":9,"119":6,"120":7,"121":6,"122":7,"123":7}},{"id":"LBYMF3G","name":"Ergonomics in Manufacturing Engineering Laboratory","term":{"118":9,"119":6,"120":7,"121":6,"122":7,"123":7}},{"id":"ENGTREP","name":"Technopreneurship","term":{"118":8,"119":8,"120":8,"121":8,"122":8,"123":8},"category":"engg"},{"id":"MFBAOHS","name":"Basic Occupational Health and Safe","term":{"118":9,"119":9,"120":8,"121":8,"122":8,"123":8}},{"id":"MFINDLX","name":"Industrial Electronics for MEM","term":{"118":8,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"LBYMF3E","name":"Industrial Electronics Laboratory","term":{"118":8,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"MFCAMFG","name":"Computer - Aided Manufacture","term":{"118":9,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"LBYMF3H","name":"Computer - Aided Manufacture Laboratory","term":{"118":9,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"MFMCDS1","name":"Design of Machine Elements 1","term":{"118":7,"119":8,"120":8,"121":8,"122":8,"123":8},"tags":["with old resources"]},{"id":"LBYMF3C","name":"Microprocessor-based Design for Manufacturing Applications 1 Laboratory","term":{"118":7,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"MFETHIC","name":"Engineering Ethics for MEM","term":{"118":8,"119":8,"120":8,"121":8,"122":8,"123":8}},{"id":"THSCSTN2","name":"Capstone Project for MEM Students 2","term":{"118":9,"119":9,"120":9,"121":9,"122":9,"123":10}},{"id":"MFPROMA","name":"Engineering Production Management for MEM","term":{"118":10,"119":10,"120":9,"121":9,"122":9,"123":9}},{"id":"MFMTRES","name":"Methods of Research for MEM","term":{"118":9,"119":9,"120":9,"121":9,"122":9,"123":8}},{"id":"MFPRDES","name":"Product Design for MEM Students","term":{"118":8,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"LBYMF3D","name":"Product Design for MEM Students Laboratory","term":{"118":8,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"MFMCDS2","name":"Design of Machine Elements 2","term":{"118":8,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"LBYMF3F","name":"Design of Machine Elements 2 Laboratory","term":{"118":8,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"MFELEC1","name":"MEM Elective 1","term":{"118":7,"119":8,"120":9,"121":9,"122":9,"123":9}},{"id":"MFCNTRL","name":"Controls Engineering Fundamentals","term":{"118":9,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"LBYMF3I","name":"Controls Engineering Fundamentals Laboratory","term":{"118":9,"119":9,"120":9,"121":9,"122":9,"123":9}},{"id":"THSMFE1","name":"MEM Thesis 1","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":9}},{"id":"MFRBTIC","name":"Applied Robotics for MEM","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"LBYMF4A","name":"Applied Robotics Laboratory","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"MFTLDES","name":"Design of Jigs and Fixtures","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"MFCIMSY","name":"Systems Theory for Computer Integrated Manufacturing","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"LBYMF4B","name":"Computer Integrated Manufacturing  with Engineering Production Management Laboratory for MEM","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"LBYMF4C","name":"Finite Element Modelling Laboratory","term":{"118":10,"119":10,"120":10,"121":10,"122":10,"123":10}},{"id":"MFGSEMS","name":"Field Trip and Seminar","term":{"120":10,"121":10,"122":10,"123":10}},{"id":"MFELEC2","name":"MEM Elective 2","term":{"118":8,"119":9,"120":10,"121":10,"122":10,"123":10}},{"id":"LBYMF4D","name":"Intelligent Manufacturing Systems Laboratory","term":{"118":12,"119":13,"120":10,"121":10,"122":10,"123":10}},{"id":"PRCGEM1","name":"Engineering Practicum for MEM 1","term":{"118":11,"119":11,"120":11,"121":11,"122":11,"123":12}},{"id":"PRCGEM2","name":"Engineering Practicum for MEM 2","term":{"119":12,"120":12,"121":12,"122":12,"123":13}},{"id":"MFLNMFG","name":"Lean and Sustainable Manufacturing","term":{"118":12,"119":13,"120":13,"121":13,"122":13,"123":11}},{"id":"THSMFE2","name":"MEM Thesis 2","term":{"118":12,"119":13,"120":13,"121":13,"122":13,"123":10}},{"id":"MRFLUME","name":"Fluid Mechanics for MRE Students","term":{"118":12,"119":13,"120":13,"121":13,"122":13,"123":11}},{"id":"MRPRODS","name":"Modelling Production Systems for MRE Students","term":{"118":12,"119":13,"120":13,"121":13,"122":13,"123":11}},{"id":"MFELEC3","name":"MEM Elective 3","term":{"118":10,"119":10,"120":13,"121":13,"122":13,"123":11}}],"links":[{"source":"FNDMATH","target":"CALENG1","type":"hard"},{"source":"LBYME1A","target":"LBYME1B","type":"hard"},{"source":"LBYMF1A","target":"LBYMF1B","type":"soft"},{"source":"CALENG1","target":"CALENG2","type":"hard"},{"source":"BASCHEM","target":"ENGCHEM","type":"hard"},{"source":"ENGCHEM","target":"LBYCH1A","type":"co"},{"source":"LBYMF1B","target":"MFMCPR1","type":"hard"},{"source":"MFMCPR1","target":"LBYMF1C","type":"co"},{"source":"LBYMF1B","target":"LBYMF1C","type":"soft"},{"source":"LBYEC2A","target":"LBYMF1D","type":"hard"},{"source":"LBYME1B","target":"LBYMF2B","type":"soft"},{"source":"CALENG2","target":"CALENG3","type":"hard"},{"source":"FNDSTAT","target":"ENGDATA","type":"hard"},{"source":"CALENG2","target":"ENGDATA","type":"soft"},{"source":"CALENG1","target":"MFMNGMT","type":"soft"},{"source":"CALENG1","target":"ENGPHYS","type":"soft"},{"source":"BASPHYS","target":"ENGPHYS","type":"hard"},{"source":"ENGPHYS","target":"LBYPH1A","type":"co"},{"source":"MFMCPR1","target":"MFMCPR2","type":"hard"},{"source":"MFMCPR2","target":"LBYMF2A","type":"co"},{"source":"LBYMF1C","target":"LBYMF2A","type":"soft"},{"source":"ENGPHYS","target":"ENGMEC1","type":"hard"},{"source":"CALENG2","target":"ENGMEC1","type":"soft"},{"source":"ENGPHYS","target":"BASELCI","type":"hard"},{"source":"BASELCI","target":"LBYEC2L","type":"co"},{"source":"ENGPHYS","target":"MFTHSCI","type":"hard"},{"source":"CALENG1","target":"MFTHSCI","type":"soft"},{"source":"ENGCHEM","target":"MFMTENG","type":"soft"},{"source":"MFMTENG","target":"LBYMF2D","type":"co"},{"source":"CALENG2","target":"MFADMAT","type":"soft"},{"source":"LBYEC2A","target":"LBYEC3B","type":"hard"},{"source":"ENGDATA","target":"LBYEC3B","type":"soft"},{"source":"CALENG1","target":"ECNOMIC","type":"soft"},{"source":"ENGMEC1","target":"ENGMEC2","type":"soft"},{"source":"BASELCI","target":"MFANLOG","type":"hard"},{"source":"LBYEC2L","target":"LBYMF2C","type":"hard"},{"source":"MFANLOG","target":"LBYMF2C","type":"soft"},{"source":"LBYEC3B","target":"MFAIMFG","type":"soft"},{"source":"MFAIMFG","target":"LBYMF3B","type":"co"},{"source":"MFMCPR1","target":"MFFNWLD","type":"soft"},{"source":"MFMTENG","target":"MFFNWLD","type":"soft"},{"source":"MFFNWLD","target":"LBYMF2E","type":"co"},{"source":"LBYMF2A","target":"LBYMF2E","type":"soft"},{"source":"CALENG3","target":"MRVIBEN","type":"soft"},{"source":"ENGMEC1","target":"ENGMEC3","type":"hard"},{"source":"MFANLOG","target":"MFDIGTL","type":"soft"},{"source":"MFDIGTL","target":"LBYMF2F","type":"co"},{"source":"LBYMF2C","target":"LBYMF2F","type":"co"},{"source":"GEPCOMM","target":"THSCSTN1","type":"hard"},{"source":"MFCAENG","target":"THSCSTN1","type":"soft"},{"source":"ENGMEC2","target":"MFKNMAT","type":"soft"},{"source":"MFKNMAT","target":"LBYMF3A","type":"co"},{"source":"LBYMF2B","target":"LBYMF3A","type":"soft"},{"source":"MFMCPR2","target":"MFERGOP","type":"soft"},{"source":"MFERGOP","target":"LBYMF3G","type":"co"},{"source":"ECNOMIC","target":"ENGTREP","type":"soft"},{"source":"MFERGOP","target":"MFBAOHS","type":"soft"},{"source":"MFDIGTL","target":"MFINDLX","type":"soft"},{"source":"MFINDLX","target":"LBYMF3E","type":"co"},{"source":"LBYMF2F","target":"LBYMF3E","type":"soft"},{"source":"MFMCPR2","target":"MFCAMFG","type":"soft"},{"source":"MFCAMFG","target":"LBYMF3H","type":"co"},{"source":"LBYMF2A","target":"LBYMF3H","type":"soft"},{"source":"ENGMEC3","target":"MFMCDS1","type":"soft"},{"source":"MFDIGTL","target":"LBYMF3C","type":"soft"},{"source":"LBYMF2F","target":"LBYMF3C","type":"soft"},{"source":"THSCSTN1","target":"THSCSTN2","type":"hard"},{"source":"MFMNGMT","target":"MFPROMA","type":"soft"},{"source":"GEPCOMM","target":"MFMTRES","type":"hard"},{"source":"MFMCDS1","target":"MFPRDES","type":"soft"},{"source":"LBYMF3A","target":"LBYMF3D","type":"soft"},{"source":"MFPRDES","target":"LBYMF3D","type":"co"},{"source":"MFMCDS1","target":"MFMCDS2","type":"hard"},{"source":"MFMCDS2","target":"LBYMF3F","type":"co"},{"source":"MFDIGTL","target":"MFELEC1","type":"soft"},{"source":"CALENG3","target":"MFCNTRL","type":"soft"},{"source":"MFDIGTL","target":"MFCNTRL","type":"soft"},{"source":"MFCNTRL","target":"LBYMF3I","type":"co"},{"source":"LBYMF3C","target":"LBYMF3I","type":"soft"},{"source":"MFMTRES","target":"THSMFE1","type":"soft"},{"source":"MFADMAT","target":"MFRBTIC","type":"soft"},{"source":"MFCAENG","target":"MFRBTIC","type":"soft"},{"source":"MFRBTIC","target":"LBYMF4A","type":"co"},{"source":"MFFNWLD","target":"MFTLDES","type":""},{"source":"MFCAENG","target":"MFCIMSY","type":"soft"},{"source":"MFPROMA","target":"LBYMF4B","type":"co"},{"source":"MFCIMSY","target":"LBYMF4B","type":"co"},{"source":"ENGMEC3","target":"LBYMF4C","type":"soft"},{"source":"MFADMAT","target":"LBYMF4C","type":"soft"},{"source":"LBYMF3A","target":"LBYMF4C","type":"soft"},{"source":"MFELEC1","target":"MFELEC2","type":"hard"},{"source":"LBYMF3C","target":"LBYMF4D","type":"hard"},{"source":"MFRBTIC","target":"PRCGEM1","type":"hard"},{"source":"MFCIMSY","target":"PRCGEM1","type":"hard"},{"source":"MFPROMA","target":"PRCGEM1","type":"hard"},{"source":"THSCSTN2","target":"PRCGEM1","type":"hard"},{"source":"PRCGEM1","target":"PRCGEM2","type":"hard"},{"source":"ENGCHEM","target":"MFLNMFG","type":"hard"},{"source":"MFPROMA","target":"MFLNMFG","type":"soft"},{"source":"THSMFE1","target":"THSMFE2","type":"hard"},{"source":"MFTHSCI","target":"MRFLUME","type":"soft"},{"source":"MFPROMA","target":"MRPRODS","type":"soft"},{"source":"MFELEC2","target":"MFELEC3","type":"hard"}]}')},5547:function(e,t,r){r.d(t,{x:function(){return o}});var a=r(6540),n=r(6462);function o(e){let{id:t,onSubmit:r}=e;return a.createElement("form",{id:t,action:"https://docs.google.com/forms/u/1/d/e/1FAIpQLSc_0Pvca7SBptGGOPC7HGWY2_OAZ-DoMT0ga640_2RuwrjPyw/formResponse",method:"POST",target:"_blank",onSubmit:r},a.createElement("input",{type:"hidden",name:"entry.1885116794",value:"undefined"!=typeof window?window.atob(window.sessionStorage.getItem("id")):null}),a.createElement("input",{type:"hidden",name:"entry.2083018028",value:(0,n.useLocation)().pathname}),a.createElement("div",{className:"flex flex-wrap flex-row justify-center gap-5 my-5"},a.createElement("div",{className:"max-w-xs"},a.createElement("label",{className:"label cursor-pointer"},a.createElement("span",{className:"label-text"},"Feedback"),a.createElement("input",{type:"radio",name:"entry.119354647",className:"radio",value:"Feedback",required:!0})),a.createElement("label",{className:"label cursor-pointer"},a.createElement("span",{className:"label-text"},"Suggestion"),a.createElement("input",{type:"radio",name:"entry.119354647",className:"radio",value:"Suggestion",required:!0})),a.createElement("label",{className:"label cursor-pointer"},a.createElement("span",{className:"label-text"},"Request"),a.createElement("input",{type:"radio",name:"entry.119354647",className:"radio",value:"Request",required:!0}))),a.createElement("textarea",{className:"textarea textarea-bordered grow ",placeholder:"Type here",name:"entry.1247762361",required:!0})),a.createElement("div",{className:"flex flex-col justify-items-center"},a.createElement("div",{className:"text-center"},a.createElement("input",{type:"submit",className:"btn",value:"Submit ↗"})),a.createElement("div",{className:"flex flex-row justify-center pt-6 text-xs opacity-55"},"Powered by ",a.createElement("img",{src:"https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg",alt:"Google",height:"16px",width:"49px",className:" text-white"})," ",a.createElement("span",{className:""},"Forms"))))}},8453:function(e,t,r){r.d(t,{RP:function(){return o},xA:function(){return c}});var a=r(6540);const n=a.createContext({});function o(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||s:o(e),a.createElement(n.Provider,{value:c},t)}},9460:function(e,t,r){r.d(t,{U:function(){return n}});var a=r(6540);const n=e=>{let{children:t,className:r=""}=e;return a.createElement("div",{className:`max-w-5xl mx-auto mt-7 ${r}`},t)}}}]);