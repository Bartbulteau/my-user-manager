webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s,u,i,c=n("VU/8")({name:"App"},a,!1,function(e){n("gsu9")},null,null).exports,o=n("/ocq"),p=n("Xxa5"),m=n.n(p),f=n("exGp"),v=n.n(f),l=n("mtWM"),d=n.n(l).a.create({baseURL:"https://my-user-manager.herokuapp.com/api/"}),h=(s=v()(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("users").then(function(e){t=e.data}).catch(function(e){alert(e)});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)}),_=(u=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("user",t).then(function(e){n=e.data}).catch(function(e){alert(e)});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)}),x=(i=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.delete("user/"+t).then(function(e){n=e.data}).catch(function(e){alert(e)});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)}),w={name:"Menu",data:function(){return{users:[],user:{name:"",email:""}}},methods:{addUser:function(){var e=v()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===this.user.name||""===this.user.email){e.next=8;break}return e.next=3,_(this.user);case 3:this.users=e.sent,this.user.name="",this.user.email="",e.next=9;break;case 8:alert("No field can be empty...");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),removeUser:function(){var e=v()(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:this.users=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},created:function(){var e=this;return v()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e.users=t.sent;case 3:case"end":return t.stop()}},t,e)}))()}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Menu"}},[n("h1",[e._v("My User Manager")]),e._v(" "),n("br"),e._v(" "),n("h2",[e._v("Users in database : ")]),e._v(" "),e._l(e.users,function(t,r){return n("p",{key:r},[e._v("- "+e._s(t.name)+" ("+e._s(t.email)+") "),n("button",{on:{click:function(t){e.removeUser(r)}}},[e._v("Remove")])])}),e._v(" "),n("br"),e._v(" "),n("p",[e._v("Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),e._v(" "),n("p",[e._v("E-mail: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),n("button",{on:{click:function(t){e.addUser()}}},[e._v("Add User")])],2)},staticRenderFns:[]};var k=n("VU/8")(w,b,!1,function(e){n("SScD")},"data-v-48a32844",null).exports;r.a.use(o.a);var g=new o.a({routes:[{path:"/",name:"Menu",component:k}]});r.a.config.productionTip=!1;new r.a({el:"#app",router:g,components:{App:c},template:"<App/>"})},SScD:function(e,t){},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1928d88d5d6cd49351ce.js.map