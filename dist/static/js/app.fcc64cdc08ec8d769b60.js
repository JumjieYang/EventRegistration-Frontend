webpackJsonp([1],{"2qOT":function(e,t){},"2wR4":function(e,t,n){"use strict";var r=n("Gu7T"),a=n.n(r),s=n("mtWM"),o=n.n(s),i=n("FhoZ"),v=function(){return"https://"+i.build.backendHost+":"+i.build.backendPort}(),l=o.a.create({baseURL:v,headers:{"Access-Control-Allow-Origin":"*"}});t.a={name:"eventregistration",data:function(){return{persons:[],events:[],theatres:[],performers:[],newPerson:"",personType:"Person",newEvent:{name:"",date:"2017-12-08",startTime:"09:00",endTime:"11:00"},deviceId:"",amount:"",selectedPerson:"",selectedPersonToPay:"",selectedPerformer:"",selectedEvent:"",selectedEventToAssign:"",selectedEventToPay:"",errorPerson:"",errorEvent:"",errorRegistration:"",errorAssign:"",errorPay:"",roles:[{value:"Person",label:"1"},{value:"Performer",label:"2"}],response:[]}},created:function(){var e=this;l.get("/persons").then(function(t){e.persons=t.data}).catch(function(t){e.errorPerson=t}),l.get("/performers").then(function(t){e.performers=t.data}).catch(function(t){e.errorPerson=t}),l.get("/events").then(function(t){var n;(n=e.events).push.apply(n,a()(t.data))}).catch(function(t){e.errorEvent=t}),l.get("/theatres").then(function(t){var n;(n=e.events).push.apply(n,a()(t.data))}).catch(function(t){e.errorEvent=t})},methods:{createPerson:function(e,t){var n=this;"Person"===e?l.post("/persons/".concat(t),{},{}).then(function(e){n.persons.push(e.data),n.errorPerson="",n.newPerson=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,n.errorPerson=e,console.log(e)}):l.post("/performers/".concat(t),{},{}).then(function(e){n.performers.push(e.data),n.persons.push(e.data),n.errorPerson="",n.newPerson=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,n.errorPerson=e,console.log(e)})},createEvent:function(e){var t=this;if(e.title){var n={date:e.date,startTime:e.startTime,endTime:e.endTime,title:e.title};l.post("/theatres/".concat(e.name),{},{params:n}).then(function(e){t.events.push(e.data),t.errorEvent="",t.newEvent.name=t.newEvent.date=t.newEvent.startTime=t.newEvent.endTime=t.newEvent.title=null}).catch(function(e){e=e.response.data.message?e.response.data.message:e,t.errorEvent=e,console.log(e)})}else{var r={date:e.date,startTime:e.startTime,endTime:e.endTime};l.post("/events/".concat(e.name),{},{params:r}).then(function(e){t.events.push(e.data),t.errorEvent="",t.newEvent.name=t.newEvent.date=t.newEvent.startTime=t.newEvent.endTime=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,t.errorEvent=e,console.log(e)})}},registerEvent:function(e,t){var n=this,r=this.events.find(function(e){return e.name===t}),a=this.persons.find(function(t){return t.name===e}),s={person:e,event:t};l.post("/register",{},{params:s}).then(function(e){a.eventsAttended.push(r),n.selectedPerson="",n.selectedEvent="",n.errorRegistration=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,n.errorRegistration=e,console.log(e)})},assignEvent:function(e,t){var n=this,r=this.performers.find(function(t){return t.name===e}),a=this.events.find(function(e){return e.name===t}),s={performer:r.name,event:a.name};l.post("/assign",{},{params:s}).then(function(e){r.eventsPerformed.push(e.data),n.selectedEventToAssign="",n.selectedPerformer="",n.errorRegistration=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,n.errorAssign=e,console.log(e)})},createPayment:function(e,t,n,r){var a=this,s=this.persons.find(function(e){return e.name===r}),o={person:r,event:n,paypalId:e,amount:t};l.post("/pay",{},{params:o}).then(function(e){s.paypals.push(e.data),a.deviceId="",a.amount="",a.selectedPersonToPay="",a.selectedEventToPay=""}).catch(function(e){e=e.response.data.message?e.response.data.message:e,a.errorPay=e,console.log(e)})}}}},FhoZ:function(e,t,n){(function(t){var r=n("o/zv");e.exports={build:{env:n("rBKV"),host:"eventregistration-frontend-285.herokuapp.com",port:443,backendHost:"eventregistration-backend-285.herokuapp.com",backendPort:443,index:r.resolve(t,"../dist/index.html"),assetsRoot:r.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:n.i({NODE_ENV:"production"}).npm_config_report},dev:{env:n("dhIU"),host:"127.0.0.1",port:8087,backendHost:"127.0.0.1",backendPort:8080,autoOpenBrowser:!0,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(t,"/")},G9OC:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={render:r,staticRenderFns:a};t.a=s},"J5+A":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Main Apps")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(1),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(2)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"/#/app",target:"_blank"}},[e._v("Event Registration")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],s={render:r,staticRenderFns:a};t.a=s},M93x:function(e,t,n){"use strict";function r(e){n("QXmi")}var a=n("xJD8"),s=n("G9OC"),o=n("VU/8"),i=r,v=o(a.a,s.a,!1,i,null,null);t.a=v.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("M93x"),s=n("YaEn");r.a.config.productionTip=!1,new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},QXmi:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("7+uW"),a=n("/ocq"),s=n("qSdX"),o=n("bl0D");r.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Hello",component:s.a},{path:"/app",name:"EventRegistration",component:o.a}]})},bl0D:function(e,t,n){"use strict";function r(e){n("2qOT")}var a=n("2wR4"),s=n("tSmj"),o=n("VU/8"),i=r,v=o(a.a,s.a,!1,i,null,null);t.a=v.exports},c74T:function(e,t){},dhIU:function(e,t,n){var r=n("2cg0"),a=n("rBKV");e.exports=r(a,{NODE_ENV:'"development"'})},pMZz:function(e,t,n){"use strict";t.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},qSdX:function(e,t,n){"use strict";function r(e){n("c74T")}var a=n("pMZz"),s=n("J5+A"),o=n("VU/8"),i=r,v=o(a.a,s.a,!1,i,"data-v-2f1c8c79",null);t.a=v.exports},rBKV:function(e,t){e.exports={NODE_ENV:'"production"'}},tSmj:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"eventregistration"}},[n("h2",[e._v("Persons")]),e._v(" "),n("table",{attrs:{id:"persons-table"}},[e._m(0),e._v(" "),e._l(e.persons,function(t,r){return n("tr",{key:"person-"+r},[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[n("ul",e._l(t.eventsAttended,function(t,r){return n("li",{key:"event-"+r,staticStyle:{"list-style-type":"disc"}},[n("span",{staticClass:"registration-event-name"},[e._v(e._s(t.name))])])}),0)]),e._v(" "),n("td",[n("ul",e._l(t.paypals,function(t,r){return n("li",{key:"event-"+r,staticStyle:{"list-style-type":"none"}},[n("span",[e._v(e._s(t.accountId))])])}),0)]),e._v(" "),n("td",[n("ul",e._l(t.paypals,function(t,r){return n("li",{key:"paypal-"+r,staticStyle:{"list-style-type":"none"}},[0!==t.amount?n("span",[e._v(e._s(t.amount))]):n("span",[e._v(e._s(" "))])])}),0)])])}),e._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPerson,expression:"newPerson"}],attrs:{id:"create-person-person-name",type:"text",placeholder:"Person Name"},domProps:{value:e.newPerson},on:{input:function(t){t.target.composing||(e.newPerson=t.target.value)}}})]),e._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.personType,expression:"personType"}],attrs:{id:"create-person-person-type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.personType=t.target.multiple?n:n[0]}}},e._l(e.roles,function(t,r){return n("option",{key:"role-"+r},[e._v(e._s(t.value))])}),0)]),e._v(" "),n("td",[n("button",{attrs:{id:"create-person-button",disabled:!e.newPerson},on:{click:function(t){return e.createPerson(e.personType,e.newPerson)}}},[e._v("Create Person")])]),e._v(" "),n("td"),e._v(" "),n("td")])],2),e._v(" "),e.errorPerson?n("span",{staticStyle:{color:"red"}},[e._v("Error: "+e._s(e.errorPerson))]):e._e(),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Events")]),e._v(" "),n("table",{attrs:{id:"events-table"}},[e._m(1),e._v(" "),e._l(e.events,function(t,r){return n("tr",{key:"event-"+r,attrs:{id:t.name}},[n("td",{attrs:{id:t.name.replace(/\s/g,"-")+"-name"}},[e._v(e._s(t.name))]),e._v(" "),n("td",{attrs:{id:t.name.replace(/\s/g,"-")+"-date"}},[e._v(e._s(t.date))]),e._v(" "),n("td",{attrs:{id:t.name.replace(/\s/g,"-")+"-starttime"}},[e._v(e._s(t.startTime))]),e._v(" "),n("td",{attrs:{id:t.name.replace(/\s/g,"-")+"-endtime"}},[e._v(e._s(t.endTime))]),e._v(" "),n("td",{attrs:{id:t.name.replace(/\s/g,"-")+"-title"}},[e._v(e._s(t.title))])])}),e._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent.name,expression:"newEvent.name"}],attrs:{id:"event-name-input",type:"text",placeholder:"Event Name"},domProps:{value:e.newEvent.name},on:{input:function(t){t.target.composing||e.$set(e.newEvent,"name",t.target.value)}}})]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent.date,expression:"newEvent.date"}],attrs:{id:"event-date-input",type:"date",placeholder:"YYYY-MM-DD"},domProps:{value:e.newEvent.date},on:{input:function(t){t.target.composing||e.$set(e.newEvent,"date",t.target.value)}}})]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent.startTime,expression:"newEvent.startTime"}],attrs:{id:"event-starttime-input",type:"time",placeholder:"HH:mm"},domProps:{value:e.newEvent.startTime},on:{input:function(t){t.target.composing||e.$set(e.newEvent,"startTime",t.target.value)}}})]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent.endTime,expression:"newEvent.endTime"}],attrs:{id:"event-endtime-input",type:"time",placeholder:"HH:mm"},domProps:{value:e.newEvent.endTime},on:{input:function(t){t.target.composing||e.$set(e.newEvent,"endTime",t.target.value)}}})]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEvent.title,expression:"newEvent.title"}],attrs:{id:"event-title-input",type:"text",placeholder:"Theatre Title"},domProps:{value:e.newEvent.title},on:{input:function(t){t.target.composing||e.$set(e.newEvent,"title",t.target.value)}}})]),e._v(" "),n("td",[n("button",{attrs:{id:"event-create-button",disabled:!e.newEvent.name},on:{click:function(t){return e.createEvent(e.newEvent)}}},[e._v("Create")])])])],2),e._v(" "),e.errorEvent?n("span",{staticStyle:{color:"red"},attrs:{id:"event-error"}},[e._v("Error: "+e._s(e.errorEvent))]):e._e(),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Registrations")]),e._v(" "),n("label",[e._v("Person:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPerson,expression:"selectedPerson"}],attrs:{id:"registration-person-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedPerson=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.persons,function(t,r){return n("option",{key:"person-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("label",[e._v("Event:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEvent,expression:"selectedEvent"}],attrs:{id:"registration-event-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedEvent=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.events,function(t,r){return n("option",{key:"event-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("button",{attrs:{id:"registration-button",disabled:!e.selectedPerson||!e.selectedEvent},on:{click:function(t){return e.registerEvent(e.selectedPerson,e.selectedEvent)}}},[e._v("Register")]),e._v(" "),n("br"),e._v(" "),e.errorRegistration?n("span",{staticStyle:{color:"red"}},[e._v("Error: "+e._s(e.errorRegistration))]):e._e(),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Assign Performer")]),e._v(" "),n("label",[e._v("Performer:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPerformer,expression:"selectedPerformer"}],attrs:{id:"assign-selected-performer"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedPerformer=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.performers,function(t,r){return n("option",{key:"performer-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("label",[e._v("Event:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEventToAssign,expression:"selectedEventToAssign"}],attrs:{id:"assign-selected-event-performer"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedEventToAssign=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.events,function(t,r){return n("option",{key:"event-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("button",{attrs:{id:"assign-button-performer",disabled:!e.selectedPerformer||!e.selectedEventToAssign},on:{click:function(t){return e.assignEvent(e.selectedPerformer,e.selectedEventToAssign)}}},[e._v("Assign")]),e._v(" "),n("br"),e._v(" "),e.errorAssign?n("span",{staticStyle:{color:"red"}},[e._v("Error: "+e._s(e.errorAssign))]):e._e(),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Pay for Registration with Paypal")]),e._v(" "),n("label",[e._v("Person:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPersonToPay,expression:"selectedPersonToPay"}],attrs:{id:"paypal-person-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedPersonToPay=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.persons,function(t,r){return n("option",{key:"person-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("label",[e._v("Event:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEventToPay,expression:"selectedEventToPay"}],attrs:{id:"paypal-event-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedEventToPay=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),e._l(e.events,function(t,r){return n("option",{key:"event-"+r},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("br"),e._v(" "),n("label",[e._v("Device Id:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.deviceId,expression:"deviceId"}],attrs:{id:"paypal-id-input",type:"text"},domProps:{value:e.deviceId},on:{input:function(t){t.target.composing||(e.deviceId=t.target.value)}}})]),e._v(" "),n("label",[e._v("Amount:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{id:"paypal-amount-input",type:"text"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),n("br"),e._v(" "),n("button",{attrs:{id:"paypal-button",disabled:!(e.deviceId&&e.amount&&e.selectedPersonToPay&&e.selectedEventToPay)},on:{click:function(t){return e.createPayment(e.deviceId,e.amount,e.selectedEventToPay,e.selectedPersonToPay)}}},[e._v("Make Payment")]),e._v(" "),n("br"),e._v(" "),e.errorPay?n("span",{staticStyle:{color:"red"}},[e._v("Error: "+e._s(e.errorPay))]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Events")]),e._v(" "),n("th",[e._v("Payment ID")]),e._v(" "),n("th",[e._v("Amount($)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Date")]),e._v(" "),n("th",[e._v("Start")]),e._v(" "),n("th",[e._v("End")]),e._v(" "),n("th",[e._v("Title")])])}],s={render:r,staticRenderFns:a};t.a=s},xJD8:function(e,t,n){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.fcc64cdc08ec8d769b60.js.map