(this["webpackJsonpreact-github-users"]=this["webpackJsonpreact-github-users"]||[]).push([[0],{55:function(e,t,a){"use strict";a.r(t);var r=a(21),n=a.n(r),c=a(30),s=a(29),i=a(22),o=a(88),l=a(89),j=a(90),d=a(91),b=a(57),u=a(78),h=a(79),x=a(59),m=a(94),O=a(92),p=a(93),g=a(95),f=a(96),y=a(97),v=a(98),k=a(99),w=a(38),N=a(77),C="#2196f3",D=Object(w.a)({palette:{primary:{main:"#0d47a1"},secondary:{main:C}}}),S=Object(N.a)((function(e){return{container:{padding:e.spacing(8,0,6)},logo:{marginRight:"20px"},mainButtons:{marginTop:"40px"},cardGrid:{padding:"20px 0"},card:{height:"100%",display:"flex",flexDirection:"column"},cardButtons:{padding:"0 10px"},cardActions:{justifyContent:"center"},cardMedia:{paddingTop:"20px"},avatar:{height:"100px !important",width:"100px !important",overflow:"visible !important",zIndex:0,"& img":{borderRadius:"50%"},"&::before":{borderRadius:"50%",content:"''",display:"block",position:"absolute",color:"#fff",backgroundColor:C,height:"100%",width:"100%",top:"-0.25rem",right:"-0.5rem",zIndex:-1}},icon:{color:"#fff",fontSize:"1.4rem",transform:"translateY(20%)"},iconSpan:{width:"2rem",height:"2rem",placeItems:"center",transform:"translate(-210%, -290%)",position:"absolute",borderRadius:"50%",backgroundColor:C},cardContent:{flexGrow:1},footer:{padding:"50px 0"}}})),_=a(0),B=a(80),G=a(81),I=a(100),P=a(85),U=a(86),R=a(87),z=a(82),A=a(83),M=a(84),W=a(2),F=function(e){var t=e.loading,a=e.classes,r=e.currentUsers,n=e.clearUser;return Object(W.jsx)(W.Fragment,{children:t?Object(W.jsx)(u.a,{className:a.cardGrid,maxWidth:"md",style:{height:"25vh"}}):Object(W.jsxs)(u.a,{className:a.cardGrid,maxWidth:"md",children:[console.log(t),console.log(r),Object(W.jsx)(h.a,{container:!0,spacing:4,children:r.map((function(e){return Object(W.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsxs)(B.a,{className:a.card,align:"center",children:[Object(W.jsxs)(G.a,{className:a.cardMedia,children:[Object(W.jsx)(I.a,{className:a.avatar,src:e.avatar_url}),Object(W.jsx)("span",{className:a.iconSpan,children:e.hasOwnProperty("userDetails")&&e.userDetails.hasOwnProperty("hireable")?1==e.userDetails.hireable?Object(W.jsx)(z.a,{className:a.icon}):0==e.userDetails.hireable?Object(W.jsx)(A.a,{className:a.icon}):Object(W.jsx)(M.a,{className:a.icon}):Object(W.jsx)(M.a,{className:a.icon})})]}),Object(W.jsxs)(P.a,{className:a.cardContent,children:[Object(W.jsx)(b.a,{gutterBottom:!0,variant:"h6",children:e.login}),Object(W.jsx)(b.a,{children:e.hasOwnProperty("userDetails")&&e.userDetails.hasOwnProperty("bio")&null!==e.userDetails.bio&&e.userDetails.bio.length>70?e.userDetails.bio.substring(0,e.userDetails.bio.lastIndexOf(" ",70))+"...":""})]}),Object(W.jsx)(U.a,{className:a.cardActions,children:Object(W.jsxs)(R.a,{variant:"text",children:[Object(W.jsx)(x.a,{size:"small",color:"primary",className:a.cardButtons,onClick:function(t){t.preventDefault(),window.open("https://github.com/".concat(e.login),"_blank")},target:"_blank",children:"View"}),Object(W.jsx)(x.a,{size:"small",color:"primary",className:a.cardButtons,onClick:function(){return n(e.id)},children:"Clear"})]})})]})},e.id)}))})]})})},H=function(){var e=Object(_.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],w=Object(_.useState)(!1),N=Object(i.a)(w,2),C=N[0],B=N[1],G=Object(_.useState)([]),I=Object(i.a)(G,2),P=I[0],U=I[1],R=Object(_.useState)([]),z=Object(i.a)(R,2),A=z[0],M=z[1],H=S(),J=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U([]),r(!0),B(!1),6,t=Math.floor(94329966*Math.random()),a="https://api.github.com/users?per_page=".concat(6,"&since=").concat(t),e.prev=6,e.next=9,fetch(a);case 9:return i=e.sent,e.next=12,i.json();case 12:if(o=e.sent,!(i.status>=200&&i.status<300)){e.next=22;break}return e.next=16,Promise.all(o.map(function(){var e=Object(s.a)(n.a.mark((function e(t,a){var s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return s=e.sent,e.next=5,s.json();case 5:if(i=e.sent,console.log("userDetails: ",i),console.log("userDetailsResponse.status: ",s.status),!(s.status>=200&&s.status<300)){e.next=13;break}o[a]=Object(c.a)(Object(c.a)({},o[a]),{},{userDetails:i}),a==o.length-1&&r(!1),e.next=15;break;case 13:return B(!0),e.abrupt("return");case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 16:e.sent,U(o),M(o),r(!1),e.next=24;break;case 22:return B(!0),e.abrupt("return");case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(6),B(!0),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[6,26]])})));return function(){return e.apply(this,arguments)}}();return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(o.a,{theme:D,children:[Object(W.jsx)(l.a,{}),Object(W.jsx)(j.a,{position:"relative",elevation:0,children:Object(W.jsxs)(d.a,{children:[Object(W.jsx)(O.a,{className:H.logo}),Object(W.jsx)(b.a,{title:"Material UI",variant:"h6",children:"mui"})]})}),Object(W.jsxs)("main",{children:[Object(W.jsx)("div",{className:H.container,children:Object(W.jsxs)(u.a,{maxWidth:"sm",children:[Object(W.jsx)(b.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"GitHub Users"}),Object(W.jsx)(b.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"A small collection of users fetched from GitHub's API using React and designed with Material UI."}),Object(W.jsx)("div",{className:H.mainButtons,children:Object(W.jsxs)(h.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return J()},children:"Get New Users"})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"outlined",color:"secondary",onClick:function(){return M(P)},children:"Reset Current"})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(x.a,{variant:"outlined",color:"secondary",onClick:function(){return M([])},children:"Clear All"})})]})})]})}),!C||P.length?Object(W.jsx)(F,{loading:a,classes:H,currentUsers:A,clearUser:function(e){M(A.filter((function(t){return t.id!==e})))}}):Object(W.jsx)(u.a,{className:H.cardGrid,maxWidth:"md",style:{height:"25vh"},children:Object(W.jsxs)(b.a,{align:"center",style:{color:"#ff0000"},children:[Object(W.jsx)(p.a,{style:{fontSize:"14px",margin:0,padding:0}})," An error was encountered. Please try again later."]})})]}),Object(W.jsx)("footer",{className:H.footer,children:Object(W.jsxs)("div",{className:"container",children:[Object(W.jsxs)(h.a,{container:!0,spacing:2,justifyContent:"center",style:{margin:0,width:"100%"},children:[Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(m.a,{href:"https://facebook.com",target:"_blank",children:Object(W.jsx)(g.a,{color:"textSecondary"})})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(m.a,{href:"https://instagram.com",target:"_blank",children:Object(W.jsx)(f.a,{color:"textSecondary"})})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(m.a,{href:"https://youtube.com",target:"_blank",children:Object(W.jsx)(y.a,{color:"textSecondary"})})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(m.a,{href:"https://twitter.com",target:"_blank",children:Object(W.jsx)(v.a,{color:"textSecondary"})})}),Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(m.a,{href:"https://linkedin.com",target:"_blank",children:Object(W.jsx)(k.a,{color:"textSecondary"})})})]}),Object(W.jsx)(b.a,{variant:"subtitle1",align:"center",color:"textSecondary",children:"\xa9 Felix"})]})})]})})},J=a(14);a.n(J).a.render(Object(W.jsx)(H,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.258859f8.chunk.js.map