import{f as F,M as j}from"./MainLayout-3P1PP2FG.js";import{_ as M,r as i,s as b,o as u,c,a,w as V,b as e,u as C,F as U,d as S,e as B,t as f,Z as z,n as E,g as I}from"./app-CSBnqQQo.js";import{_ as L}from"./Modal-BjLcEjN-.js";import{a as Z,b as q,_ as h}from"./TextInput-bpI7h_K9.js";import{_ as y}from"./Select-BdfnZWdz.js";import"./ApplicationLogo-5o3dzhdj.js";import"./NavLink-DDEYTW1N.js";import"./Flash-7lzD3HKF.js";const G={action:"",class:"px-4 py-2"},H={class:"overflow-auto rounded-lg shadow"},J={class:"w-full"},K={class:"bg-gray-50 border-b-2 border-gray-200"},O={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},P={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Q={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},R={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},W={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},X=["onClick"],Y={__name:"TeamsTab",setup(N){const{transformValidationErrors:m}=F(),d=i(!1),p=()=>{w(),d.value=!1},s=i({team:"",supervisor:"",errors:{}});function v(){s.errors={},b.dispatch("postMethod",{url:"/create-team",param:s.value}).then(o=>{(o==null?void 0:o.status)==422?s.value.errors=m(o.data):(o==null?void 0:o.status)==201&&(p(),g())}).catch(o=>{console.log(o)})}const w=()=>{s.value={team:"",supervisor:"",errors:{}}},k=o=>{var r;s.value={team:o.team,supervisor:(r=o==null?void 0:o.supervisor)==null?void 0:r.pid,pid:o.pid,errors:{}},d.value=!0},_=i({});function g(o="load-teams"){b.dispatch("getMethod",{url:o}).then(r=>{(r==null?void 0:r.status)==200&&(_.value=r.data)}).catch(r=>{console.log(r)})}g(),T();const x=i({});function T(){b.dispatch("loadDropdown","supervisors").then(({data:o})=>{x.value=o}).catch(o=>{console.log(o)})}return(o,r)=>(u(),c("div",null,[a(L,{show:d.value,onClose:p,"max-width":"sm",title:"Add Item Name ",onSubmit:v},{default:V(()=>[e("form",G,[e("div",null,[a(Z,{for:"text",value:"Team Name"}),a(q,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:s.value.team,"onUpdate:modelValue":r[0]||(r[0]=t=>s.value.team=t),placeholder:"e.g Team A",autocomplete:"off"},null,8,["modelValue"]),a(h,{class:"mt-2",message:s.value.errors.team},null,8,["message"])]),e("div",null,[a(y,{modelValue:s.value.supervisor,"onUpdate:modelValue":r[1]||(r[1]=t=>s.value.supervisor=t),label:"Supervisor",placeholder:"Select supervisor",options:x.value},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:s.value.errors.supervisor},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:r[2]||(r[2]=t=>d.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Team"),e("div",H,[e("table",J,[e("thead",K,[e("tr",null,[r[3]||(r[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),r[4]||(r[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Team",-1)),r[5]||(r[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Supervisor",-1)),e("th",O,[a(C(U),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(u(!0),c(S,null,B(_.value,(t,l)=>{var n;return u(),c("tr",{class:"bg-white",key:l},[e("td",P,f(l+1),1),e("td",Q,f(t.team),1),e("td",R,f((n=t==null?void 0:t.supervisor)==null?void 0:n.email),1),e("td",W,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:$=>k(t)},"Edit",8,X)])])}),128))])])])]))}},ee=M(Y,[["__scopeId","data-v-bfae178e"]]),te={action:"",class:"px-4 py-2"},se={class:"overflow-auto rounded-lg shadow"},oe={class:"w-full"},le={class:"bg-gray-50 border-b-2 border-gray-200"},re={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ae={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ne={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},de={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ie={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},me=["onClick"],ue={__name:"TeamMemberTab",setup(N){const{transformValidationErrors:m}=F(),d=i(!1),p=()=>{w(),d.value=!1},s=i({team:"",user_pid:"",errors:{}});function v(){s.errors={},b.dispatch("postMethod",{url:"/add-team-member",param:s.value}).then(t=>{(t==null?void 0:t.status)==422?s.value.errors=m(t.data):(t==null?void 0:t.status)==201&&(p(),x())}).catch(t=>{console.log(t)})}const w=()=>{s.value={team:"",members:[{user_pid:""}],errors:{}}},k=t=>{var l,n;s.value={team:(l=t.team)==null?void 0:l.team.pid,members:[{user_pid:""}],user_pid:(n=t==null?void 0:t.user)==null?void 0:n.user_pid,errors:{}},d.value=!0},_=i({}),g=i({});i({});function x(t="load-team-member"){b.dispatch("getMethod",{url:t}).then(l=>{(l==null?void 0:l.status)==200&&(_.value=l.data)}).catch(l=>{console.log(l)})}x(),T();function T(){b.dispatch("loadDropdown","teams").then(({data:t})=>{g.value=t}).catch(t=>{console.log(t)})}r();const o=i({});function r(){b.dispatch("loadDropdown","installers").then(({data:t})=>{o.value=t}).catch(t=>{console.log(t)})}return(t,l)=>(u(),c("div",null,[a(L,{show:d.value,onClose:p,"max-width":"sm",title:"Add Team Member ",onSubmit:v},{default:V(()=>[e("form",te,[e("div",null,[a(y,{modelValue:s.value.team,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value.team=n),label:"Teams",placeholder:"Select Team",options:g.value},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:s.value.errors.team},null,8,["message"])]),e("div",null,[a(y,{modelValue:s.value.user_pid,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value.user_pid=n),label:"Team Member",placeholder:"Select Member",options:o.value},null,8,["modelValue","options"]),a(h,{class:"mt-2",message:s.value.errors.user_pid},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:l[2]||(l[2]=n=>d.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Team"),e("div",se,[e("table",oe,[e("thead",le,[e("tr",null,[l[3]||(l[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),l[4]||(l[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Team",-1)),l[5]||(l[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Member",-1)),e("th",re,[a(C(U),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(u(!0),c(S,null,B(_.value,(n,$)=>{var A,D;return u(),c("tr",{class:"bg-white",key:$},[e("td",ae,f($+1),1),e("td",ne,f((A=n.team)==null?void 0:A.team),1),e("td",de,f((D=n==null?void 0:n.user)==null?void 0:D.username),1),e("td",ie,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:ke=>k(n)},"Edit",8,me)])])}),128))])])])]))}},ce=M(ue,[["__scopeId","data-v-5c989d2c"]]),pe={class:"container mx-auto"},be={class:"m-4 pb-4 border bg-gray-100 rounded-lg"},fe={class:"text-sm flex justify-center bg-gray-200"},ve={class:"p-3 bg-gra-200"},_e={key:0},ge={class:"border border-gray-300 rounded-lg p-4"},xe={key:1},he={class:"border border-gray-300 rounded-lg p-4"},we={__name:"Team",setup(N){const m=i(1),d=p=>m.value=p;return(p,s)=>(u(),c(S,null,[a(C(z),{title:"Teams"}),a(j,null,{default:V(()=>[e("div",pe,[e("fieldset",be,[e("nav",fe,[e("a",{onClick:s[0]||(s[0]=v=>d(1)),class:E(["inline-block px-4 py-3 cursor-pointer",m.value===1&&"active"])},"Team ",2),e("a",{onClick:s[1]||(s[1]=v=>d(2)),class:E(["inline-block px-4 py-3 cursor-pointer",m.value===2&&"active"])},"Team Member",2)]),e("div",ve,[m.value===1?(u(),c("div",_e,[e("fieldset",ge,[s[2]||(s[2]=e("legend",{class:"text-lg font-medium text-left px-2"},"Team ",-1)),a(ee)])])):I("",!0),m.value===2?(u(),c("div",xe,[e("fieldset",he,[s[3]||(s[3]=e("legend",{class:"text-lg font-medium text-left px-2"},"Team Member",-1)),a(ce)])])):I("",!0)])])])]),_:1})],64))}},Ae=M(we,[["__scopeId","data-v-edfc333c"]]);export{Ae as default};