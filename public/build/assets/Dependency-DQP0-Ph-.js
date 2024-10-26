import{f as F,M as D}from"./MainLayout-CWOtt1JZ.js";import{_ as $,r as b,o as c,c as m,a as r,w as M,b as e,u as V,F as A,d as T,e as E,t as g,s as x,f as z,v as L,Z as j,n as N,g as R}from"./app-CVF_lSTI.js";import{_ as U}from"./Modal-C6IkTIVy.js";import{_ as w,a as k,b as y}from"./TextInput-Fa_nzQm-.js";import{_ as Z}from"./Select-D0t1uzsf.js";import"./ApplicationLogo-DoYzVpwD.js";import"./NavLink-BMqJdRdV.js";import"./Flash-18wd2XyA.js";const q={action:"",class:"px-4 py-2"},O={class:"grid grid-cols-2 gap-2"},P={class:"overflow-auto rounded-lg shadow"},Q={class:"w-full"},G={class:"bg-gray-50 border-b-2 border-gray-200"},H={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left"},J={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},K={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},W={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},X={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Y=["onClick"],ee={__name:"RegionTab",setup(C){const{transformValidationErrors:u}=F(),a=b({});function f(s="load-all-regions"){x.dispatch("getMethod",{url:s}).then(n=>{(n==null?void 0:n.status)==200&&(a.value=n.data)}).catch(n=>{console.log(n)})}f();const t=b(!1),p=()=>{l(),t.value=!1},_=b({});function h(){x.dispatch("loadDropdown","states").then(({data:s})=>{_.value=s}).catch(s=>{console.log(s)})}h();const i=b({state:"",region:"",errors:{}});function v(){i.errors={},x.dispatch("postMethod",{url:"/create-region",param:i.value}).then(s=>{(s==null?void 0:s.status)==422?i.value.errors=u(s.data):(s==null?void 0:s.status)==201&&(p(),f())}).catch(s=>{console.log(s)})}const l=()=>{i.value={state:"",region:"",errors:{}}},o=s=>{i.value={state:s.state,region:s.region,pid:s.pid,errors:{}},t.value=!0};return(s,n)=>(c(),m("div",null,[r(U,{show:t.value,onClose:p,title:"Add Region ",onSubmit:v},{default:M(()=>[e("form",q,[e("div",O,[e("div",null,[r(Z,{modelValue:i.value.state,"onUpdate:modelValue":n[0]||(n[0]=d=>i.value.state=d),label:"State",val:"text",placeholder:"Select State",options:_.value},null,8,["modelValue","options"]),r(w,{class:"mt-2",message:i.value.errors.state},null,8,["message"])]),e("div",null,[r(k,{for:"region",value:"Region"}),r(y,{id:"region",type:"text",class:"mt-1 block w-full",modelValue:i.value.region,"onUpdate:modelValue":n[1]||(n[1]=d=>i.value.region=d),autocomplete:"off",placeholder:"Name Of Region"},null,8,["modelValue"]),r(w,{class:"mt-2",message:i.value.errors.region},null,8,["message"])])])])]),_:1},8,["show"]),e("button",{onClick:n[2]||(n[2]=d=>t.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Region"),e("div",P,[e("table",Q,[e("thead",G,[e("tr",null,[n[3]||(n[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),n[4]||(n[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Region",-1)),n[5]||(n[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"State",-1)),e("th",H,[r(V(A),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),m(T,null,E(a.value,(d,I)=>{var S;return c(),m("tr",{class:"bg-white",key:I},[e("td",J,g(I+1),1),e("td",K,g(d.region),1),e("td",W,g((S=d==null?void 0:d.state)==null?void 0:S.state),1),e("td",X,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:B=>o(d)},"Preview",8,Y)])])}),128))])])])]))}},te=$(ee,[["__scopeId","data-v-f3cd7eb4"]]),se={action:"",class:"px-4 py-2"},oe={class:"overflow-auto rounded-lg shadow"},le={class:"w-full"},ne={class:"bg-gray-50 border-b-2 border-gray-200"},re={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left"},ae={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},de={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ie={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ue={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ce={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},me=["onClick"],be={__name:"ItemsTab",setup(C){const{transformValidationErrors:u}=F(),a=b(!1),f=()=>{_(),a.value=!1},t=b({name:"",description:"",unit:"",errors:{}});function p(){t.errors={},x.dispatch("postMethod",{url:"/create-item-name",param:t.value}).then(l=>{(l==null?void 0:l.status)==422?t.value.errors=u(l.data):(l==null?void 0:l.status)==201&&(f(),v())}).catch(l=>{console.log(l)})}const _=()=>{t.value={state:"",region:"",errors:{}}},h=l=>{t.value={name:l.name,unit:l.unit,description:l.description,pid:l.pid,errors:{}},a.value=!0},i=b({});function v(l="item-names"){x.dispatch("getMethod",{url:l}).then(o=>{(o==null?void 0:o.status)==200&&(i.value=o.data)}).catch(o=>{console.log(o)})}return v(),(l,o)=>(c(),m("div",null,[r(U,{show:a.value,onClose:f,"max-width":"sm",title:"Add Item Name ",onSubmit:p},{default:M(()=>[e("form",se,[e("div",null,[r(k,{for:"text",value:"Item Name"}),r(y,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.name=s),placeholder:"e.g Meter box"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t.value.errors.name},null,8,["message"])]),e("div",null,[r(k,{for:"email",value:"Unit "}),r(y,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.unit,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.unit=s),placeholder:"e.g packet",required:""},null,8,["modelValue"]),r(w,{class:"mt-2",message:t.value.errors.unit},null,8,["message"])]),e("div",null,[r(k,{for:"email",value:"Item Description "}),z(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.description=s),class:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},null,512),[[L,t.value.description]]),r(w,{class:"mt-2",message:t.value.errors.description},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:o[3]||(o[3]=s=>a.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Item"),e("div",oe,[e("table",le,[e("thead",ne,[e("tr",null,[o[4]||(o[4]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),o[5]||(o[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Name",-1)),o[6]||(o[6]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Unit",-1)),o[7]||(o[7]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"description",-1)),e("th",re,[r(V(A),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),m(T,null,E(i.value,(s,n)=>(c(),m("tr",{class:"bg-white",key:n},[e("td",ae,g(n+1),1),e("td",de,g(s.name),1),e("td",ie,g(s.unit),1),e("td",ue,g(s.description),1),e("td",ce,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:d=>h(s)},"Edit",8,me)])]))),128))])])])]))}},fe=$(be,[["__scopeId","data-v-3a943e7f"]]),pe={action:"",class:"px-4 py-2"},ge={class:"overflow-auto rounded-lg shadow"},ve={class:"w-full"},xe={class:"bg-gray-50 border-b-2 border-gray-200"},_e={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},he={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},we={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ke={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ye={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},$e=["onClick"],Me={__name:"TradingZoneTab",setup(C){const{transformValidationErrors:u}=F(),a=b(!1),f=()=>{_(),a.value=!1},t=b({zone:"",state_id:"",errors:{}});function p(){t.errors={},x.dispatch("postMethod",{url:"/create-trading-zone",param:t.value}).then(s=>{(s==null?void 0:s.status)==422?t.value.errors=u(s.data):(s==null?void 0:s.status)==201&&(f(),v())}).catch(s=>{console.log(s)})}const _=()=>{t.value={state_id:"",zone:"",errors:{}}},h=s=>{t.value={zone:s.zone,state_id:s.state_id,pid:s.pid,errors:{}},a.value=!0},i=b({});function v(s="load-trading-zone"){x.dispatch("getMethod",{url:s}).then(n=>{(n==null?void 0:n.status)==200&&(i.value=n.data)}).catch(n=>{console.log(n)})}v(),o();const l=b({});function o(){x.dispatch("loadDropdown","states").then(({data:s})=>{l.value=s}).catch(s=>{console.log(s)})}return(s,n)=>(c(),m("div",null,[r(U,{show:a.value,onClose:f,"max-width":"sm",title:"Add Trading Zone",onSubmit:p},{default:M(()=>[e("form",pe,[e("div",null,[r(Z,{modelValue:t.value.state_id,"onUpdate:modelValue":n[0]||(n[0]=d=>t.value.state_id=d),label:"State",placeholder:"Select State",options:l.value},null,8,["modelValue","options"]),r(w,{class:"mt-2",message:t.value.errors.state_id},null,8,["message"])]),e("div",null,[r(k,{for:"text",value:"Zone Name"}),r(y,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.zone,"onUpdate:modelValue":n[1]||(n[1]=d=>t.value.zone=d),placeholder:"e.g Zaria Road"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t.value.errors.zone},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:n[2]||(n[2]=d=>a.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Item"),e("div",ge,[e("table",ve,[e("thead",xe,[e("tr",null,[n[3]||(n[3]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),n[4]||(n[4]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"State",-1)),n[5]||(n[5]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Trading Zone",-1)),e("th",_e,[r(V(A),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),m(T,null,E(i.value,(d,I)=>{var S;return c(),m("tr",{class:"bg-white",key:I},[e("td",he,g(I+1),1),e("td",we,g((S=d==null?void 0:d.state)==null?void 0:S.state),1),e("td",ke,g(d.zone),1),e("td",ye,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:B=>h(d)},"Edit",8,$e)])])}),128))])])])]))}},Ve=$(Me,[["__scopeId","data-v-e12ca234"]]),Te={action:"",class:"px-4 py-2"},Ce={class:"overflow-auto rounded-lg shadow"},Ie={class:"w-full"},Se={class:"bg-gray-50 border-b-2 border-gray-200"},Ne={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Re={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Fe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Ae={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Ee=["onClick"],Ue={__name:"MeterBrandTab",setup(C){const{transformValidationErrors:u}=F(),a=b(!1),f=()=>{_(),a.value=!1},t=b({brand:"",errors:{}});function p(){t.errors={},x.dispatch("postMethod",{url:"/create-meter-brand",param:t.value}).then(l=>{(l==null?void 0:l.status)==422?t.value.errors=u(l.data):(l==null?void 0:l.status)==201&&(f(),v())}).catch(l=>{console.log(l)})}const _=()=>{t.value={brand:"",errors:{}}},h=l=>{t.value={brand:l.brand,id:l.id,errors:{}},a.value=!0},i=b({});function v(l="load-meter-brand"){x.dispatch("getMethod",{url:l}).then(o=>{(o==null?void 0:o.status)==200&&(i.value=o.data)}).catch(o=>{console.log(o)})}return v(),(l,o)=>(c(),m("div",null,[r(U,{show:a.value,onClose:f,"max-width":"sm",title:"Add Brand ",onSubmit:p},{default:M(()=>[e("form",Te,[e("div",null,[r(k,{for:"text",value:"Name"}),r(y,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.brand,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.brand=s),placeholder:"e.g Momas",autocomplete:"off"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t.value.errors.brand},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:o[1]||(o[1]=s=>a.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Team"),e("div",Ce,[e("table",Ie,[e("thead",Se,[e("tr",null,[o[2]||(o[2]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),o[3]||(o[3]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Brand",-1)),e("th",Ne,[r(V(A),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),m(T,null,E(i.value,(s,n)=>(c(),m("tr",{class:"bg-white",key:n},[e("td",Re,g(n+1),1),e("td",Fe,g(s.brand),1),e("td",Ae,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:d=>h(s)},"Edit",8,Ee)])]))),128))])])])]))}},Ze=$(Ue,[["__scopeId","data-v-4bb610b5"]]),Be={action:"",class:"px-4 py-2"},De={class:"overflow-auto rounded-lg shadow"},ze={class:"w-full"},Le={class:"bg-gray-50 border-b-2 border-gray-200"},je={width:"10%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},qe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Oe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Pe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Qe=["onClick"],Ge={__name:"MeterTypeTab",setup(C){const{transformValidationErrors:u}=F(),a=b(!1),f=()=>{_(),a.value=!1},t=b({type:"",errors:{}});function p(){t.errors={},x.dispatch("postMethod",{url:"/create-meter-type",param:t.value}).then(l=>{(l==null?void 0:l.status)==422?t.value.errors=u(l.data):(l==null?void 0:l.status)==201&&(f(),v())}).catch(l=>{console.log(l)})}const _=()=>{t.value={type:"",errors:{}}},h=l=>{t.value={type:l.type,id:l.id,errors:{}},a.value=!0},i=b({});function v(l="load-meter-types"){x.dispatch("getMethod",{url:l}).then(o=>{(o==null?void 0:o.status)==200&&(i.value=o.data)}).catch(o=>{console.log(o)})}return v(),(l,o)=>(c(),m("div",null,[r(U,{show:a.value,onClose:f,"max-width":"sm",title:"Add Item Name ",onSubmit:p},{default:M(()=>[e("form",Be,[e("div",null,[r(k,{for:"text",value:"Team Name"}),r(y,{id:"text",type:"text",class:"mt-1 block w-full",modelValue:t.value.type,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.type=s),placeholder:"e.g 1 Q",autocomplete:"off"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t.value.errors.type},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:o[1]||(o[1]=s=>a.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Type"),e("div",De,[e("table",ze,[e("thead",Le,[e("tr",null,[o[2]||(o[2]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),o[3]||(o[3]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Type",-1)),e("th",je,[r(V(A),{icon:"fa-solid fa fa-cog"})])])]),e("tbody",null,[(c(!0),m(T,null,E(i.value,(s,n)=>(c(),m("tr",{class:"bg-white",key:n},[e("td",qe,g(n+1),1),e("td",Oe,g(s.type),1),e("td",Pe,[e("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:d=>h(s)},"Edit",8,Qe)])]))),128))])])])]))}},He=$(Ge,[["__scopeId","data-v-f4cea958"]]),Je={class:"container mx-auto"},Ke={class:"m-4 pb-4 border bg-gray-100 rounded-lg"},We={class:"text-sm flex justify-center bg-gray-200"},Xe={class:"p-3 bg-gra-200"},Ye={key:0},et={class:"border border-gray-300 rounded-lg p-4"},tt={key:1},st={class:"border border-gray-300 rounded-lg p-4"},ot={key:2},lt={class:"border border-gray-300 rounded-lg p-4"},nt={key:3},rt={class:"border border-gray-300 rounded-lg p-4"},at={key:4},dt={class:"border border-gray-300 rounded-lg p-4"},it={__name:"Dependency",setup(C){const u=b(1),a=f=>u.value=f;return(f,t)=>(c(),m(T,null,[r(V(j),{title:"Dependency"}),r(D,null,{default:M(()=>[e("div",Je,[e("fieldset",Ke,[e("nav",We,[e("a",{onClick:t[0]||(t[0]=p=>a(1)),class:N(["inline-block px-4 py-2 cursor-pointer",u.value===1&&"active"])},"Regions",2),e("a",{onClick:t[1]||(t[1]=p=>a(2)),class:N(["inline-block px-4 py-2 cursor-pointer",u.value===2&&"active"])},"Store Items",2),e("a",{onClick:t[2]||(t[2]=p=>a(3)),class:N(["inline-block px-4 py-2 cursor-pointer",u.value===3&&"active"])},"Trading Zone",2),e("a",{onClick:t[3]||(t[3]=p=>a(5)),class:N(["inline-block px-4 py-2 cursor-pointer",u.value===5&&"active"])},"Meter Type ",2),e("a",{onClick:t[4]||(t[4]=p=>a(6)),class:N(["inline-block px-4 py-2 cursor-pointer",u.value===6&&"active"])},"Meter Brand",2)]),e("div",Xe,[u.value===1?(c(),m("div",Ye,[e("fieldset",et,[t[5]||(t[5]=e("legend",{class:"text-lg font-medium text-left px-2"},"Regions",-1)),r(te)])])):R("",!0),u.value===2?(c(),m("div",tt,[e("fieldset",st,[t[6]||(t[6]=e("legend",{class:"text-lg font-medium text-left px-2"},"Items",-1)),r(fe)])])):R("",!0),u.value===3?(c(),m("div",ot,[e("fieldset",lt,[t[7]||(t[7]=e("legend",{class:"text-lg font-medium text-left px-2"},"Trading Zone",-1)),r(Ve)])])):R("",!0),u.value===5?(c(),m("div",nt,[e("fieldset",rt,[t[8]||(t[8]=e("legend",{class:"text-lg font-medium text-left px-2"},"Meter Type",-1)),r(He)])])):R("",!0),u.value===6?(c(),m("div",at,[e("fieldset",dt,[t[9]||(t[9]=e("legend",{class:"text-lg font-medium text-left px-2"},"Meter Brand",-1)),r(Ze)])])):R("",!0)])])])]),_:1})],64))}},xt=$(it,[["__scopeId","data-v-a33f56a4"]]);export{xt as default};