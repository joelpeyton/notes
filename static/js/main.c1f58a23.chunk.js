(this["webpackJsonpnotes-react"]=this["webpackJsonpnotes-react"]||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=a(9),i=(a(28),a(22)),u=a(18),d=a(7),s=(a(29),a(20)),m=a(16),E=a(17),b=a(21),f=a(10),g=a(12),h=a(11);var v=function(e){return l.a.createElement("div",{className:"square",id:e.id,style:{backgroundColor:e.backgroundColour},onClick:e.selected})};var O=function(e){var t=Object(n.useState)(e.show),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(e.title),u=Object(d.a)(i,2),s=u[0],m=u[1],E=Object(n.useState)(e.title),b=Object(d.a)(E,2),O=b[0],C=b[1],j=Object(n.useState)(e.text),k=Object(d.a)(j,2),N=k[0],S=k[1],p=Object(n.useState)(e.text),y=Object(d.a)(p,2),x=y[0],w=y[1],A=Object(n.useState)(e.headingColour),T=Object(d.a)(A,2),q=T[0],F=T[1],B=Object(n.useState)(e.headingColour),D=Object(d.a)(B,2),H=D[0],J=D[1],I=N.split("\n").map((function(e){return l.a.createElement(g.a.Text,{key:Object(o.a)()},e)})),M=["#1abc9c","#2ecc71","#3498db","#9b59b6","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6"].map((function(e){return l.a.createElement(v,{id:Object(o.a)(),key:e,backgroundColour:e,selected:P})}));function P(e){var t=e.target.style.backgroundColor;F(t)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement(g.a.Header,{as:"h5",style:{backgroundColor:q}},s),l.a.createElement(g.a.Body,null,I),l.a.createElement(g.a.Footer,null,l.a.createElement(f.a,{variant:"outline-primary",className:"mr-3",onClick:function(){r(!0)}},"Edit"),l.a.createElement(f.a,{variant:"outline-danger",onClick:function(){e.deleteNote(e.id)}},"Delete"))),l.a.createElement(h.a,{show:c,onHide:function(){m(O),S(x),F(H),r(!1)}},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Edit Note")),l.a.createElement(h.a.Body,null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"heading"},"Heading Colour")),l.a.createElement("div",{id:"colouredSquares",onClick:function(e){for(var t=document.getElementById("colouredSquares").children,a=0;a<t.length;a++)t[a].id===e.target.id?t[a].className="selectedSquare square":t[a].className="square"}},M),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Edit Title")),l.a.createElement("div",null,l.a.createElement("input",{className:"mb-3",id:"title",type:"text",value:s,onChange:function(e){m(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Edit Text")),l.a.createElement("div",null,l.a.createElement("textarea",{id:"text",type:"text",rows:"15",value:N,onChange:function(e){S(e.target.value)}}))),l.a.createElement(h.a.Footer,null,l.a.createElement(f.a,{variant:"secondary",onClick:function(){m(O),S(x),F(H),r(!1)}},"Cancel"),l.a.createElement(f.a,{variant:"primary",onClick:function(){s||m("No title"),e.editNotes(e.id,s,N,q),C(s),w(N),J(q),r(!1)}},"Save Changes"))))};var C=function(e){var t=Object(n.useState)(e.notes),a=Object(d.a)(t,2),c=a[0],r=a[1];function g(e){localStorage.setItem("DATA",JSON.stringify(e))}function h(e,t,a,n){var l=c.map((function(l){return e===l.id?Object(u.a)(Object(u.a)({},l),{},{title:t,text:a,headingColour:n}):l}));r(l),g(l)}function v(e){var t=c.filter((function(t){return t.id!==e}));r(t),g(t)}var C=c.map((function(e){return l.a.createElement(O,{id:e.id,key:e.id,title:e.title,text:e.text,editNotes:h,deleteNote:v,headingColour:e.headingColour})}));return l.a.createElement(s.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(E.a,{sm:12},l.a.createElement("h1",{className:"text-center"},"Quick Notes"),l.a.createElement("hr",null))),l.a.createElement(m.a,null,l.a.createElement(E.a,{sm:12},l.a.createElement(f.a,{variant:"success",className:"mb-3 mr-3",onClick:function(){var e={id:Object(o.a)(),title:"Add new note",text:"Press the edit button to change the note title, note content and heading colour.",headingColour:"#ecf0f1"};r([e].concat(Object(i.a)(c))),g(c)}},"New Note"))),l.a.createElement(b.a,null,C))},j=localStorage.DATA?JSON.parse(localStorage.DATA):[{id:Object(o.a)(),title:"My first note",text:"Press the edit button to change the note title, note content and heading colour.",headingColour:"#ecf0f1"}];r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,{notes:j})),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c1f58a23.chunk.js.map