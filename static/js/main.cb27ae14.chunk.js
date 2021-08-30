(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(8),r=n.n(a),o=(n(15),n(10)),u=n(2),s=n(19),i=n(4),b=n.n(i),l=n(0),j=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),j=Object(u.a)(i,2),m=j[0],d=j[1];return Object(l.jsxs)("form",{className:b.a.contactForm,onSubmit:function(t){t.preventDefault(),e({name:r,number:m,id:Object(s.a)()})&&(o(""),d(""))},children:[Object(l.jsxs)("label",{children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){o(t.currentTarget.value)},className:b.a.input})]}),Object(l.jsxs)("label",{children:["Number",Object(l.jsx)("input",{type:"tel",name:"number",value:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){d(t.currentTarget.value)},className:b.a.input})]}),Object(l.jsx)("button",{type:"submit",className:b.a.button,children:"Add contact"})]})},m=n(9),d=n.n(m),O=function(t){var e=t.value,n=t.onChange;return Object(l.jsxs)("label",{children:["Find contacts by name",Object(l.jsx)("input",{value:e,onChange:n,name:"filter",type:"text",className:d.a.input})]})},f=n(5),h=n.n(f),p=function(t){var e=t.contacts,n=t.remove;return Object(l.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsxs)("p",{className:h.a.text,children:[c,":"]}),Object(l.jsx)("p",{className:h.a.text,children:a}),Object(l.jsx)("button",{className:h.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],b=s[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(j,{onSubmit:function(t){return n.find((function(e){return e.name===t.name}))?(alert("".concat(t.name," is already in contacts")),!1):(a((function(e){return[t].concat(Object(o.a)(e))})),!0)}}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(O,{value:i,onChange:function(t){b(t.currentTarget.value)}}),Object(l.jsx)(p,{contacts:function(){var t=i.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),remove:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2j5uS",input:"ContactForm_input__3Lk0_",button:"ContactForm_button__2uOvR"}},5:function(t,e,n){t.exports={button:"ContactsList_button__3vGTD",item:"ContactsList_item__uBT9O",text:"ContactsList_text__16op9"}},9:function(t,e,n){t.exports={input:"Filter_input__3uV24"}}},[[17,1,2]]]);
//# sourceMappingURL=main.cb27ae14.chunk.js.map