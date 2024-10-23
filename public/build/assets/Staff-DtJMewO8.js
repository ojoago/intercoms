import{r as m,s as u,j as O,w as C,h as P,o as g,b as l,a as o,f as D,i as R,c as p,e as M,d as B,v as I,t as d}from"./app-CZQl4fZc.js";import{M as T,f as j}from"./MainLayout-BGbuSmps.js";import{a as n,b as i,_ as r}from"./TextInput-CnQTIPJ3.js";import{_ as x}from"./Select-DAAn4NG7.js";import{_ as Y}from"./Modal-CuE3Y__x.js";import"./ApplicationLogo-kcz6Xb7Y.js";import"./NavLink-BMIoQkOQ.js";import"./Flash-Bwnt55Qo.js";const z={class:"px-4 py-2"},H={class:"px-4 py-2"},J={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-4 md:py-8 md:px-8 text-sm"},K={class:"flex flex-col"},Q={class:"flex flex-col"},W={class:"flex flex-col"},X={class:"flex flex-col"},Z={class:"flex flex-col"},ee={class:"flex flex-col"},te={class:"flex flex-col"},le={class:"flex flex-col"},se={class:"flex flex-col"},oe={class:"flex flex-col"},ae=["value"],de={class:"flex flex-col"},re={class:"flex flex-col"},ne={class:"flex flex-col gap-4 px-4 md:px-8 text-sm"},ie={class:"overflow-auto rounded-lg shadow"},me={class:"w-full"},fe={class:"bg-gray-50 border-b-2 border-gray-200"},ue={width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ge={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ce={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},be={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},pe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},xe={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ve={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},_e={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},he={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},we={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ke={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Ve={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ye=["onClick"],Le={__name:"Staff",setup(Se){const{transformValidationErrors:q}=j(),c=m(!1),v=()=>{c.value=!1,A()},F=[{id:"Female",text:"Female"},{id:"Male",text:"Male"}],s=m({firstname:"",lastname:"",othername:"",file:"",gender:"",religion:"",role:"",dob:"",gsm:"",username:"",state_of_origin:"",lga_of_origin:"",address:"",errors:{}});E();const _=m({});function E(){u.dispatch("loadDropdown","states").then(({data:a})=>{_.value=a}).catch(a=>{console.log(a)})}const h=m({});function w(a){u.dispatch("loadDropdown","state-lga/"+a).then(({data:e})=>{h.value=e}).catch(e=>{console.log(e)})}m({});const k=m({});function L(){u.dispatch("loadDropdown","roles/").then(({data:a})=>{k.value=a}).catch(a=>{console.log(a)})}L();function $(){s.value.errors={};let a={"Content-Type":"multipart/form-data"};u.dispatch("postMethod",{url:"/staff",param:s.value,headers:a}).then(e=>{(e==null?void 0:e.status)==422?s.value.errors=q(e.data):(e==null?void 0:e.status)==201&&(y(),v())}).catch(e=>{console.log(e)})}const A=()=>{s.value={firstname:"",lastname:"",othername:"",file:"",gender:"",religion:"",role:"",dob:"",state_of_origin:"",lga_of_origin:"",state_of_residence:"",lga_of_residence:"",address:"",errors:{}}},G=a=>{var e,b,t,f;w((e=a==null?void 0:a.origin)==null?void 0:e.id),s.value={firstname:a.firstname,lastname:a.lastname,othername:a.othername,username:a.username,file:"",gender:a.gender,dob:a.dob,gsm:a.gsm,email:(b=a==null?void 0:a.user)==null?void 0:b.email,state_of_origin:(t=a==null?void 0:a.origin)==null?void 0:t.id,lga_of_origin:(f=a==null?void 0:a.lga)==null?void 0:f.id,address:a.address,errors:{}},c.value=!0},V=m({});function y(a="load-staff"){u.dispatch("getMethod",{url:a}).then(e=>{(e==null?void 0:e.status)==200&&(V.value=e.data)}).catch(e=>{console.log(e)})}return y(),(a,e)=>{const b=P("font-awesome-icon");return g(),O(T,null,{default:C(()=>[l("div",z,[o(Y,{show:c.value,onClose:v,"max-width":"4xl",title:"Staff Bio Data",onSubmit:$},{default:C(()=>[l("div",H,[l("form",null,[l("div",J,[l("div",K,[o(n,{for:"first_name",value:"First Name"}),o(i,{id:"first_name",type:"text",class:"mt-1 block w-full",modelValue:s.value.firstname,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value.firstname=t),placeholder:"First Name",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.firstname},null,8,["message"])]),l("div",Q,[o(n,{for:"last_name",value:"Last Name"}),o(i,{id:"last_name",type:"text",class:"mt-1 block w-full",modelValue:s.value.lastname,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value.lastname=t),placeholder:"Last Name",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.lastname},null,8,["message"])]),l("div",W,[o(n,{for:"nin",value:"Othername"}),o(i,{id:"nin",type:"text",class:"mt-1 block w-full",modelValue:s.value.othername,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value.othername=t),placeholder:"othername",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.othername},null,8,["message"])]),l("div",X,[o(n,{for:"email",value:"Email address"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.value.email,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value.email=t),placeholder:"Email address",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.email},null,8,["message"])]),l("div",Z,[o(n,{for:"email",value:"Username"}),o(i,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s.value.username,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value.username=t),placeholder:"e.g Yemi",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.username},null,8,["message"])]),l("div",ee,[o(n,{for:"gsm",value:"Phone Number"}),o(i,{id:"gsm",type:"text",class:"mt-1 block w-full",modelValue:s.value.gsm,"onUpdate:modelValue":e[5]||(e[5]=t=>s.value.gsm=t),placeholder:"Phone Number",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.gsm},null,8,["message"])]),l("div",te,[o(x,{modelValue:s.value.gender,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value.gender=t),label:"Select Gender",placeholder:"Select Gender",options:F},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.gender},null,8,["message"])]),l("div",le,[o(n,{for:"dob",value:"Date of Birth"}),o(i,{id:"dob",type:"date",class:"mt-1 block w-full",modelValue:s.value.dob,"onUpdate:modelValue":e[7]||(e[7]=t=>s.value.dob=t),placeholder:"Date of Birth",required:""},null,8,["modelValue"]),o(r,{class:"mt-2",message:s.value.errors.dob},null,8,["message"])]),l("div",se,[o(n,{for:"image",value:"Image"}),o(i,{id:"image",type:"file",class:"mt-1 block w-full",onInput:e[8]||(e[8]=t=>s.value.file=t.target.files[0]),placeholder:"Date of Birth",required:""}),o(r,{class:"mt-2",message:s.value.errors.file},null,8,["message"])]),l("div",oe,[o(n,{for:"dob",value:"State of Origin"}),D(l("select",{"onUpdate:modelValue":e[9]||(e[9]=t=>s.value.state_of_origin=t),onChange:e[10]||(e[10]=t=>w(t.target.value)),class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},[e[15]||(e[15]=l("option",{value:"",selected:""},"Choose State",-1)),(g(!0),p(B,null,M(_.value,t=>(g(),p("option",{key:t.id,value:t.id},d(t.text),9,ae))),128))],544),[[R,s.value.state_of_origin]]),o(r,{class:"mt-2",message:s.value.errors.state_of_origin},null,8,["message"])]),l("div",de,[o(x,{modelValue:s.value.lga_of_origin,"onUpdate:modelValue":e[11]||(e[11]=t=>s.value.lga_of_origin=t),label:"Select LGA of Origin",placeholder:"Select Option",options:h.value},null,8,["modelValue","options"]),o(r,{class:"mt-2",message:s.value.errors.lga_of_origin},null,8,["message"])]),l("div",re,[o(x,{modelValue:s.value.role,"onUpdate:modelValue":e[12]||(e[12]=t=>s.value.role=t),label:"Select Staff Role",placeholder:"Select Role",options:k.value},null,8,["modelValue","options"]),o(r,{class:"mt-2",message:s.value.errors.role},null,8,["message"])])]),l("div",ne,[o(n,{for:"email",value:"Contact Address"}),D(l("textarea",{class:"staffForm-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":e[13]||(e[13]=t=>s.value.address=t),placeholder:"Address"},null,512),[[I,s.value.address]]),o(r,{class:"mt-2",message:s.value.errors.address},null,8,["message"])])])])]),_:1},8,["show"]),l("button",{onClick:e[14]||(e[14]=t=>c.value=!0),class:"bg-optimal text-white p-1 mb-2 rounded"},"Add Staff"),l("div",ie,[l("table",me,[l("thead",fe,[l("tr",null,[e[16]||(e[16]=l("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),e[17]||(e[17]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Names ",-1)),e[18]||(e[18]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Email",-1)),e[19]||(e[19]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Username",-1)),e[20]||(e[20]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Phone Number",-1)),e[21]||(e[21]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Gender",-1)),e[22]||(e[22]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Date Of Birth",-1)),e[23]||(e[23]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"State ",-1)),e[24]||(e[24]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"LGA ",-1)),e[25]||(e[25]=l("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Addrees ",-1)),l("th",ue,[o(b,{icon:"fa-solid fa fa-gear"})])])]),l("tbody",null,[(g(!0),p(B,null,M(V.value,(t,f)=>{var S,U,N;return g(),p("tr",{class:"bg-white",key:f},[l("td",ge,d(f+1),1),l("td",ce,d(t.lastname)+" "+d(t.firstname)+" "+d(t.othername),1),l("td",be,d((S=t==null?void 0:t.user)==null?void 0:S.email),1),l("td",pe,d(t.username),1),l("td",xe,d(t.gsm),1),l("td",ve,d(t.gender),1),l("td",_e,d(t.date),1),l("td",he,d((U=t.origin)==null?void 0:U.state),1),l("td",we,d((N=t.lga)==null?void 0:N.lga),1),l("td",ke,d(t.address),1),l("td",Ve,[l("button",{class:"bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded text-sm",onClick:Ue=>G(t)}," Edit ",8,ye)])])}),128))])])])])]),_:1})}}};export{Le as default};
