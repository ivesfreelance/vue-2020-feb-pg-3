(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{1932:function(t,e,a){"use strict";var n=a("4746"),i=a.n(n);i.a},3195:function(t,e,a){},"3caa":function(t,e,a){"use strict";var n=a("3195"),i=a.n(n);i.a},4746:function(t,e,a){},"4e12":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-field-wrapper"},[a("div",{staticClass:"input-field-group"},[a("div",{staticClass:"text-input"},[a("input",{attrs:{id:t.id,type:t.computedType,name:t.computedName,placeholder:t.placeholder,readonly:t.readonly,autocomplete:"off",required:""},on:{keyup:t.inputChanged}}),a("label",{attrs:{for:t.id}},[t._v(t._s(t.placeholder))])])])])},i=[],r=a("2ef0"),s={name:"InputField",props:{placeholder:{type:String,required:!0},type:{type:String,required:!0},readonly:{type:Boolean,default:!1}},computed:{computedName:function(){var t=this.type,e="";return"text"===t?e="text":"username"===t?e="username":"password"===t&&(e="password"),e},computedType:function(){var t=this.type,e="";return"text"===t?e="text":"username"===t?e="text":"password"===t&&(e="password"),e}},data:function(){return{inputValue:"",id:null}},mounted:function(){this.id=Object(r["uniqueId"])("input-field-group-")},methods:{inputChanged:function(t){this.inputValue=t.target.value,this.$emit("input",this.inputValue)}}},o=s,l=(a("e1e1"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"7824b70b",null);e["a"]=c.exports},aeb4:function(t,e,a){},c109:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist-wrapper"},[a("MainPageHeader"),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-mobile is-centered"},[a("div",{staticClass:"column is-half"},[t._m(0),a("InputField",{attrs:{placeholder:"Form name",type:"text"}}),a("TextArea",{attrs:{placeholder:"Form content"}})],1)])]),a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-mobile is-centered"},[a("div",{staticClass:"column is-3"},[a("Button",{attrs:{text:"Submit","border-color":"primary"}})],1),a("div",{staticClass:"column is-3"},[a("Button",{attrs:{text:"Cancel","border-color":"white"},on:{click:t.goHome}})],1)])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content is-small"},[a("h1",[t._v("Form creation")])])}],r=a("18e6"),s=a("4e12"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-wrapper"},[a("div",{staticClass:"textarea-group"},[a("textarea",{staticClass:"textarea-field",attrs:{id:t.id,placeholder:t.placeholder,rows:"6"}}),t._v(" "),a("label",{staticClass:"textarea-label",attrs:{for:t.id}},[t._v(t._s(t.placeholder))])])])},l=[],c=a("2ef0"),u={name:"TextArea",mounted:function(){this.id=Object(c["uniqueId"])("textarea-group-")},props:{placeholder:{type:String,required:!0}},data:function(){return{id:null}}},d=u,p=(a("3caa"),a("2877")),m=Object(p["a"])(d,o,l,!1,null,"d80b6efa",null),f=m.exports,h=a("c375"),v={name:"Form",components:{Button:h["a"],TextArea:f,InputField:s["a"],MainPageHeader:r["a"]},methods:{goHome:function(){this.$router.push({name:"mainPage"})}}},x=v,b=(a("1932"),Object(p["a"])(x,n,i,!1,null,"6216141c",null));e["default"]=b.exports},e1e1:function(t,e,a){"use strict";var n=a("aeb4"),i=a.n(n);i.a}}]);
//# sourceMappingURL=form.20b33a70.js.map