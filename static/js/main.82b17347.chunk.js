(this.webpackJsonpthree=this.webpackJsonpthree||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var o,i,r,c,s,l,a,d,p,b,x,u,f,j,h,g,O,m,v,w,y,k=t(0),z=t(12),T=t.n(z),C=(t(21),t(4)),S=(t(22),t(8)),D=t(2),M=t(3),A=t(1),J=M.a.div(o||(o=Object(D.a)(["\n    width: 30vw; \n    height: calc(100vw-50px;);\n    background: ;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    text-align: left;\n    border: 1px solid blue;\n    border-radius: 5px;\n    color: blue;\n    margin-left: 25px;\n    position: relative;\n    max-height: 80vh;\n    position: sticky;\n    top: 10vh;\n\n\n\n    @media (max-width: 1000px) {\n        display: none;\n      }\n\n\n\n"]))),B=M.a.div(i||(i=Object(D.a)(["\n\n\n    background: white;\n    display: flex;\n    padding: 10px;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top: -20px;\n    font-size: 12px\n\n"]))),E=M.a.div(r||(r=Object(D.a)(["\nmargin: 10px\n\n\n\n\n\n"]))),F=M.a.div(c||(c=Object(D.a)(["\n\n\nfont-size: 15px\n\n\n\n"]))),G=M.a.div(s||(s=Object(D.a)(["\n\n\nposition: absolute;\ntop: 0;\nright: 0;\n\nfont-size: 12px;\npadding: 12px;\nborder-radius:5px;\ncursor: pointer;\ntransition: 0.3s;\n\n\n&:hover{\n    border-radius:  5px;\n    transition: 0.3s;\n    transform:scale(0.9)\n\n}\n\n\n"]))),I=function(n){var e=n.completeTodos,t=n.setCompleteTodos,o=n.todos,i=n.setTodos,r=n.colorOne,c=n.colorTwo,s=e.map((function(n,e){return Object(A.jsx)(E,{children:"\u2714 "+n.value},e)}));return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(J,{style:{color:c,border:"1px solid ".concat(c)},children:[e.length>0?Object(A.jsx)(G,{style:{color:r,background:c,border:"1px solid ".concat(r)},onClick:function(){t([]),console.log(o);var n=e.filter((function(n){return 0==n.completed}));i(n)},children:"clear"}):"",Object(A.jsxs)(B,{style:{color:c,background:r},children:["Completed ",e.length]}),Object(A.jsx)(F,{children:0==e.length?"Complete an item":s})]})})},N=M.a.div(l||(l=Object(D.a)(["\n  width: 100%;\n  height: 10px;\n  background: white;\n  position: absoulte;\n  top: 10%;\n  left: 10%;\n  border-radius: 10px;\n  border: 5px solid white;\n  z-index: 100;\n  transition: ease 0.5s;\n  border: 1px solid blue;\n\n"]))),q=M.a.div(a||(a=Object(D.a)(["\n  width: 10vw;\n  height: 10px;\n  background: blue;\n  position: absoulte;\n  top: 10%;\n  left: 10%;\n  border-radius: 5px;\n  transition: ease 0.5s;\n\n  z-index: 100;\n"]))),H=function(n){var e=n.todos,t=n.completed,o=(n.colorOne,n.colorTwo),i=function(){return 0===t.length?0:t.length/e.length*100};return Object(A.jsx)(N,{style:{border:"1px solid "+o},children:Object(A.jsx)(q,{style:{width:i()+"%"}})})},K=M.a.div(d||(d=Object(D.a)(["\n\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\n\npadding: 25px 0 25px 0 ;\nwidth: 80vw;\n\n\n\n"]))),L=M.a.div(p||(p=Object(D.a)(["\n\ndisplay: flex;\njustify-content: space-between;\nflex-direction: row;\n\npadding: 25px 0 25px 0 ;\n\n\n\n"]))),P=M.a.form(b||(b=Object(D.a)(["\n\n\n\ndisplay: flex;\n\nborder-radius: 5px;\n\n\n\n\n"]))),Q=M.a.input(x||(x=Object(D.a)(["\nheight: 60px;\nmargin: 0;\nwidth: 100%;\nborder: none;\ndisplay: flex;\nbackground transparent;\npadding: 0 0 0 25px;\n\nborder-radius: 5px;\nfont-size: 15px;\n\n\n\n&:focus{\n  \n\n    outline: none;\n}\n\n&::placeholder {\n    color: lightGrey;\n    font-size: 15px;\n  }\n\n\n"]))),R=M.a.div(u||(u=Object(D.a)(["\nwidth: 50vw;\n\ndisplay: flex;\n\nflex-direction: column;\n\n@media (max-width: 1000px) {\n    width: 80vw;\n  }\n\n\n"]))),U=M.a.div(f||(f=Object(D.a)(["\n\nmargin: 25px 0 0 0 ;\nposition: relative\n\nborder-radius: 5px;\ntransition: ease 0.3s;\ncursor: pointer;\ncolor: white;\ndisplay: flex;\nalign-items: center;\n\njustify-content: space-between;\n\n"]))),V=M.a.div(j||(j=Object(D.a)(["\n\n\nheight: 60px;\nwidth: 80%;\n\nborder-radius: 5px;\ntransition: ease 0.3s;\ncursor: pointer;\ncolor: blue;\ndisplay: flex;\nalign-items: center;\npadding: 0 25px 0 25px;\njustify-content: space-between;\nmargin: 0 25px 0 0px;\n\n\n\n&:hover{\n    transition: ease 0.3s;\n    transform: scale(1.02);\n    box-shadow:  8px 8px 16px #fafafa,\n    -8px -8px 16px #ffffff;\n}\n"]))),W=M.a.div(h||(h=Object(D.a)(["\n\n\nmin-width:30px;\nheight:30px;\nbackground: white;\nborder-radius: 5px;\ntransition: ease 0.1s;\ncursor: pointer;\ncolor: blue;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\nborder: 1px solid blue;\nposition: relative;\n\n&:hover{\n    transition: ease 0.1s;\n    transform: scale(1.22);\n\n}\n"]))),X=M.a.div(g||(g=Object(D.a)(["\n\n\nfont-size: 8px;\nwidth: 75px;\ntext-align: right;\n\n\n\n"]))),Y=M.a.div(O||(O=Object(D.a)(["\n\n\nfont-size: 30px;\n\nmargin: 25px 0;\nfont-weight: 700;\n\n\n\n\n"]))),Z=M.a.div(m||(m=Object(D.a)(["\n\n\nfont-size: 15px;\ncolor: blue;\ntransition: 1s ease;\n\nanimation: 2s blink ease infinite;\n\n\n\n\n\n\n"]))),$=M.a.div(v||(v=Object(D.a)(["\n\n\nfont-size: 15px;\ncolor: blue;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n\n\n\n\n\n"]))),_=M.a.div(w||(w=Object(D.a)(["\n\n\nfont-size: 15px;\n\n\n\n\nwidth: 25px;\nheight: 25px;\nborder-radius: 50px;\ntransition: 0.3s ease;\n\n\n\n"]))),nn=M.a.div(y||(y=Object(D.a)(["\n\n\nfont-size: 15px;\ncolor: blue;\nborder: 1px solid blue;\nwidth: 50px;\nheight: 25px;\nborder-radius: 50px;\nposition: relative;\ncursor: pointer;\n\n&:hover ","{\n\n    transform: scale(0.9);\n    transition: 0.3s ease;\n    \n    \n}\n\n\n\n\n\n\n"])),_),en=function(n){var e=n.dark,t=n.setDark,o=n.colorOne,i=n.colorTwo,r=Object(k.useState)([]),c=Object(C.a)(r,2),s=c[0],l=c[1],a=Object(k.useState)(""),d=Object(C.a)(a,2),p=d[0],b=d[1],x=Object(k.useState)([]),u=Object(C.a)(x,2),f=u[0],j=u[1],h=function(n,e){console.log(n);var t=s.filter((function(n){return n.id!==e.id}));l(t);var o=f.filter((function(n){return n.id!==e.id}));j(o),console.log(f),console.log(e.value)},g=function(n,e){if(n.completed=!n.completed,l(Object(S.a)(s)),1==n.completed)j([].concat(Object(S.a)(f),[n])),console.log(f);else{var t=f.filter((function(e){return e.id!==n.id}));j(t)}},O=s.map((function(n,e){return Object(A.jsxs)(U,{children:[Object(A.jsxs)(V,{onClick:function(){return h(e,n)},style:{border:"1px solid blue",color:n.completed?o:i,background:n.completed?i:o},children:[n.value,Object(A.jsx)(X,{children:n.date.toString().slice(0,24)})]}),Object(A.jsx)(W,{onClick:function(){return g(n)},style:{border:"1px solid blue",color:n.completed?"white":"blue",background:n.completed?"blue":"white"},children:n.completed?"\u2714":" "})]},e)}));return Object(A.jsxs)(K,{children:[Object(A.jsxs)($,{style:{color:i},children:[Object(A.jsx)(Y,{children:"todo"}),Object(A.jsx)(nn,{onClick:function(){return t(!e)},style:{color:i,border:"1px solid ".concat(i)},children:Object(A.jsx)(_,{style:{color:i,background:i,position:"absolute",right:e?"0px":"25px"}})})]}),Object(A.jsx)(H,{todos:s,completed:f,colorTwo:i,colorOne:o}),Object(A.jsxs)(L,{children:[Object(A.jsxs)(R,{children:[Object(A.jsx)(P,{onSubmit:function(n){n.preventDefault();s.push({value:p,completed:!1,date:new Date,id:Math.floor(Math.random()*Math.floor(300))}),l(Object(S.a)(s)),b("")},children:Object(A.jsx)(Q,{onChange:function(n){b(n.target.value)},style:{color:i,border:"1px solid ".concat(i)},value:p,placeholder:"add todo"})}),O]}),Object(A.jsx)(I,{setCompleteTodos:j,completeTodos:f,todos:s,setTodos:l,colorOne:o,colorTwo:i})]}),Object(A.jsx)(Z,{style:{color:i},children:1==s.length?"Click on todo to delete":0==s.length?"Add todo to get started":""})]})};var tn=function(){var n=Object(k.useState)(!1),e=Object(C.a)(n,2),t=e[0],o=e[1],i=function(){return t?"blue":"#ffffff"};return Object(A.jsx)("div",{className:"App",style:{background:i()},children:Object(A.jsx)(en,{dark:t,setDark:o,colorOne:i(),colorTwo:t?"#ffffff":"blue"})})};T.a.render(Object(A.jsx)(tn,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.82b17347.chunk.js.map