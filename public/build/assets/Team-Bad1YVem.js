import{f as E,M as D}from"./MainLayout-BGbuSmps.js";import{_ as T,r as m,o as c,c as p,a,w as y,b as e,u as V,F,d as M,e as U,t as f,s as x,Z as L,n as I,g as A}from"./app-CZQl4fZc.js";import{_ as B}from"./Modal-CuE3Y__x.js";import{a as j,b as z,_ as h}from"./TextInput-CnQTIPJ3.js";import{_ as $}from"./Select-DAAn4NG7.js";import"./ApplicationLogo-kcz6Xb7Y.js";import"./NavLink-BMIoQkOQ.js";import"./Flash-Bwnt55Qo.js";const Z={action:"",class:"px-4 py-2"},q={class:"overflow-auto rounded-lg shadow"},G={class:"w-full"},H={class:"bg-gray-50 border-b-2 border-gray-200"},J={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},K={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},O={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},P={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Q={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},R=["onClick"],W={__name:"TeamsTab",setup(C){const{transformValidationErrors:u}=E(),d=m(!1),b=()=>{w(),d.value=!1},t=m({team:"",supervisor:"",errors:{}});function v(){t.errors={},x.dispatch("postMethod",{url:"/create-team",param:t.value}).then(r=>{(r==null?void 0:r.status)==422?t.value.errors=u(r.data):(r==null?void 0:r.status)==201&&(b(),g())}).catch(r=>{console.log(r)})}const w=()=>{t.value={team:"",supervisor:"",errors:{}}},k=r=>{var s;t.value={team:r.team,supervisor:(s=r==null?void 0:r.supervisor)==null?void 0:s.pid,pid:r.pid,errors:{}},d.value=!0},_=m({});m({});function g(r="load-teams"){x.dispatch("getMethod",{url:r}).then(s=>{(s==null?void 0:s.status)==200&&(_.value=s.data)}).catch(s=>{console.log(s)})}return g(),(r,s)=>(c(),p("div",null,[a(B,{show:d.value,onClose:b,"max-width":"sm",title:"Add Item Name ",onSubmit:v},{default:y(()=>[e("form",Z,[e("div",null,[a(j,{for:"text",value:"Team Name"}),a(z,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.team,"onUpdate:modelValue":s[0]||(s[0]=i=>t.value.team=i),placeholder:"e.g Team A",autocomplete:"off"},null,8,["modelValue"]),a(h,{class:"mt-2",message:t.value.errors.team},null,8,["message"])]),e("div",null,[a($,{modelValue:t.value.supervisor,"onUpdate:modelValue":s[1]||(s[1]=i=>t.value.supervisor=i),label:"Supervisor",placeholder:"Select supervisor",options:r.supervisors},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:t.value.errors.supervisor},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:s[2]||(s[2]=i=>d.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Team"),e("div",q,[e("table",G,[e("thead",H,[e("tr",null,[s[3]||(s[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),s[4]||(s[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Team",-1)),s[5]||(s[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Supervisor",-1)),e("th",J,[a(V(F),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),p(M,null,U(_.value,(i,l)=>{var o;return c(),p("tr",{class:"bg-white",key:l},[e("td",K,f(l+1),1),e("td",O,f(i.team),1),e("td",P,f((o=i==null?void 0:i.supervisor)==null?void 0:o.email),1),e("td",Q,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:n=>k(i)},"Edit",8,R)])])}),128))])])])]))}},X=T(W,[["__scopeId","data-v-557d64d0"]]),Y={action:"",class:"px-4 py-2"},ee={class:"overflow-auto rounded-lg shadow"},te={class:"w-full"},se={class:"bg-gray-50 border-b-2 border-gray-200"},oe={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},le={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},re={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ae={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ne={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},de=["onClick"],ie={__name:"TeamMemberTab",setup(C){const{transformValidationErrors:u}=E(),d=m(!1),b=()=>{w(),d.value=!1},t=m({team:"",user_pid:"",errors:{}});function v(){t.errors={},x.dispatch("postMethod",{url:"/add-team-member",param:t.value}).then(l=>{(l==null?void 0:l.status)==422?t.value.errors=u(l.data):(l==null?void 0:l.status)==201&&(b(),s())}).catch(l=>{console.log(l)})}const w=()=>{t.value={team:"",user_pid:"",errors:{}}},k=l=>{var o,n;t.value={team:(o=l.team)==null?void 0:o.team.pid,user_pid:(n=l==null?void 0:l.user)==null?void 0:n.user_pid,errors:{}},d.value=!0},_=m({}),g=m({}),r=m({});function s(l="load-team-member"){x.dispatch("getMethod",{url:l}).then(o=>{(o==null?void 0:o.status)==200&&(_.value=o.data)}).catch(o=>{console.log(o)})}s(),i();function i(){x.dispatch("loadDropdown","teams").then(({data:l})=>{g.value=l}).catch(l=>{console.log(l)})}return(l,o)=>(c(),p("div",null,[a(B,{show:d.value,onClose:b,"max-width":"sm",title:"Add Item Name ",onSubmit:v},{default:y(()=>[e("form",Y,[e("div",null,[a($,{modelValue:t.value.team,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value.team=n),label:"Teams",placeholder:"Select Team",options:g.value},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:t.value.errors.team},null,8,["message"])]),e("div",null,[a($,{modelValue:t.value.user_pid,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value.user_pid=n),label:"Supervisors",placeholder:"Select Supervisor",options:r.value},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:t.value.errors.supervisor},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:o[2]||(o[2]=n=>d.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Team"),e("div",ee,[e("table",te,[e("thead",se,[e("tr",null,[o[3]||(o[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),o[4]||(o[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Team",-1)),o[5]||(o[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Supervisor",-1)),e("th",oe,[a(V(F),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),p(M,null,U(_.value,(n,S)=>{var N;return c(),p("tr",{class:"bg-white",key:S},[e("td",le,f(S+1),1),e("td",re,f(n.team),1),e("td",ae,f((N=n==null?void 0:n.supervisor)==null?void 0:N.email),1),e("td",ne,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:he=>k(n)},"Edit",8,de)])])}),128))])])])]))}},me=T(ie,[["__scopeId","data-v-12a29550"]]),ue={class:"container mx-auto"},ce={class:"m-4 pb-4 border bg-gray-100 rounded-lg"},pe={class:"text-sm flex justify-center bg-gray-200"},be={class:"p-3 bg-gra-200"},fe={key:0},ve={class:"border border-gray-300 rounded-lg p-4"},_e={key:1},ge={class:"border border-gray-300 rounded-lg p-4"},xe={__name:"Team",setup(C){const u=m(1),d=b=>u.value=b;return(b,t)=>(c(),p(M,null,[a(V(L),{title:"Teams"}),a(D,null,{default:y(()=>[e("div",ue,[e("fieldset",ce,[e("nav",pe,[e("a",{onClick:t[0]||(t[0]=v=>d(1)),class:I(["inline-block px-4 py-3 cursor-pointer",u.value===1&&"active"])},"Team ",2),e("a",{onClick:t[1]||(t[1]=v=>d(2)),class:I(["inline-block px-4 py-3 cursor-pointer",u.value===2&&"active"])},"Team Member",2)]),e("div",be,[u.value===1?(c(),p("div",fe,[e("fieldset",ve,[t[2]||(t[2]=e("legend",{class:"text-lg font-medium text-left px-2"},"Team ",-1)),a(X)])])):A("",!0),u.value===2?(c(),p("div",_e,[e("fieldset",ge,[t[3]||(t[3]=e("legend",{class:"text-lg font-medium text-left px-2"},"Team Member",-1)),a(me)])])):A("",!0)])])])]),_:1})],64))}},Se=T(xe,[["__scopeId","data-v-edfc333c"]]);export{Se as default};