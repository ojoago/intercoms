import{r as d,s as m,j as F,w,h as N,o as u,b as e,a as l,c as v,e as $,d as D,f as O,v as P,t as c}from"./app-CVF_lSTI.js";import{_ as R}from"./PaginationLink-DMHXJSCG.js";import{M as T,f as z}from"./MainLayout-CWOtt1JZ.js";import{d as G}from"./index-CRdiK48C.js";import{_ as S}from"./Modal-C6IkTIVy.js";import{a as b,b as y,_ as f}from"./TextInput-Fa_nzQm-.js";import{_ as H}from"./Select-D0t1uzsf.js";import"./ApplicationLogo-DoYzVpwD.js";import"./NavLink-BMqJdRdV.js";import"./Flash-18wd2XyA.js";const J={class:"p-3"},K={action:"",class:"px-4 py-2"},W={class:"grid grid-cols-2 gap-2"},X={class:"flex justify-between mt-1"},Y={class:"item-center place-items-center pt-3"},Z=["onClick"],ee={action:"",class:"px-4 py-2"},te={class:"flex justify-between mt-1"},se={class:"flex justify-between mt-1"},le={class:"flex justify-between mt-1"},oe={class:"overflow-auto rounded-lg shadow"},ae={class:"w-full"},ie={class:"bg-gray-50 border-b-2 border-gray-200"},ne={width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},re={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},de={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},me={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ue={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ke={__name:"InventoryList",setup(ce){const{transformValidationErrors:x}=z(),g=d(!1),k=d(!1),p=()=>{j(),g.value=!1,k.value=!1},I=d({}),n=d({item_pid:"",cause:"",date:"",qnt:0,quantity:0});U();function U(){m.dispatch("loadDropdown","item-names").then(({data:t})=>{I.value=t}).catch(t=>{console.log(t)})}const _=d({});function V(t="load-inventory-list"){m.dispatch("getMethod",{url:t}).then(s=>{(s==null?void 0:s.status)==200&&(_.value=s.data)}).catch(s=>{console.log(s)})}V();const Q=t=>{G.Inertia.get(t,{},{preserveState:!0,preserveScroll:!0})},a=d({items:[{item_pid:"",quantity:""}],errors:{}}),j=()=>{a.value={items:[{item_pid:"",quantity:""}],errors:{}}},B=()=>{a.value.items.push({item_pid:"",quantity:""})},L=t=>{if(a.value.items.length===1){m.commit("notify",{message:"One Item is required to proceed",type:"warning"});return}a.value.items.splice(t,1)},A=()=>{a.errors={},m.dispatch("postMethod",{url:"/add-inventory-item",param:a.value}).then(t=>{(t==null?void 0:t.status)==422?a.value.errors=x(t.data):(t==null?void 0:t.status)==201&&(p(),V())}).catch(t=>{console.log(t)})},E=()=>{a.errors={},m.dispatch("postMethod",{url:"/remove-damage-item",param:n.value}).then(t=>{(t==null?void 0:t.status)==422?a.value.errors=x(t.data):(t==null?void 0:t.status)==201&&p()}).catch(t=>{console.log(t)})};return(t,s)=>{const h=N("font-awesome-icon");return u(),F(T,null,{default:w(()=>{var q;return[e("div",J,[l(S,{show:g.value,onClose:p,title:"Add Item Quantity ",onSubmit:A},{default:w(()=>[e("form",K,[(u(!0),v(D,null,$(a.value.items,(o,i)=>(u(),v("div",{class:"",key:i},[e("div",W,[e("div",null,[l(H,{modelValue:o.item_pid,"onUpdate:modelValue":r=>o.item_pid=r,label:"Item name",placeholder:"Select item",options:I.value},null,8,["modelValue","onUpdate:modelValue","options"]),l(f,{class:"mt-2",message:a.value.errors.feeder},null,8,["message"])]),e("div",null,[l(b,{for:"feeder",value:"Item Quantity"}),e("div",X,[l(y,{id:"feeder33",type:"text",class:"mt-1 block w-full",modelValue:o.quantity,"onUpdate:modelValue":r=>o.quantity=r,required:"",placeholder:"e.g 120"},null,8,["modelValue","onUpdate:modelValue"]),e("div",Y,[e("button",{class:"bg-yellow-500 text-white btn-sm",type:"button",onClick:r=>L(i)},[l(h,{icon:"fa-solid fa-minus-circle"})],8,Z)])]),l(f,{class:"mt-2",message:a.value.errors.feeder},null,8,["message"])])])]))),128)),e("button",{class:"bg-blue-500 text-white btn-sm mt-1",type:"button",onClick:B},[l(h,{icon:"fa-solid fa-plus-circle"})])])]),_:1},8,["show"]),l(S,{show:k.value,onClose:p,"max-width":"sm",title:"Remove Damage Item ",onSubmit:E},{default:w(()=>[e("form",ee,[e("div",null,[l(b,{for:"feeder",value:"Item Quantity"}),e("div",te,[l(y,{id:"feeder33",type:"text",class:"mt-1 block w-full",modelValue:n.value.quantity,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value.quantity=o),required:"",placeholder:"e.g 120"},null,8,["modelValue"])]),l(f,{class:"mt-2",message:a.value.errors.quantity},null,8,["message"])]),e("div",null,[l(b,{for:"feeder",value:"Item Quantity"}),e("div",se,[l(y,{id:"feeder33",type:"date",class:"mt-1 block w-full",modelValue:n.value.date,"onUpdate:modelValue":s[1]||(s[1]=o=>n.value.date=o)},null,8,["modelValue"])]),l(f,{class:"mt-2",message:a.value.errors.date},null,8,["message"])]),e("div",null,[l(b,{for:"feeder",value:"Cause of Damage"}),e("div",le,[O(e("textarea",{id:"feeder33",type:"text",class:"mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=o=>n.value.cause=o),required:"",placeholder:"e.g tamper"},null,512),[[P,n.value.cause]])]),l(f,{class:"mt-2",message:a.value.errors.feeder},null,8,["message"])])])]),_:1},8,["show"]),e("button",{onClick:s[3]||(s[3]=o=>g.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Item")]),e("div",oe,[e("table",ae,[e("thead",ie,[e("tr",null,[s[5]||(s[5]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),s[6]||(s[6]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Item",-1)),s[7]||(s[7]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"description",-1)),s[8]||(s[8]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Quantity",-1)),e("th",ne,[l(h,{icon:"fa-solid fas fa-cog"})])])]),e("tbody",null,[(u(!0),v(D,null,$((q=_.value)==null?void 0:q.data,(o,i)=>{var r,C,M;return u(),v("tr",{class:"bg-white",key:i},[e("td",re,c(i+1),1),e("td",de,c((r=o.item)==null?void 0:r.name),1),e("td",me,c((C=o.item)==null?void 0:C.description),1),e("td",ue,c(o.quantity)+" "+c((M=o.item)==null?void 0:M.unit),1),s[9]||(s[9]=e("td",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},null,-1))])}),128))])]),e("div",null,[l(R,{onAction:s[4]||(s[4]=o=>{var i;return Q((i=_.value)==null?void 0:i.next_page_url)}),pages:t.links},null,8,["pages"])])])]}),_:1})}}};export{ke as default};