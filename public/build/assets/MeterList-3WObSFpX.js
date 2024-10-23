import{T as y,c as n,a as i,u as r,w,d as h,o as c,Z as k,b as t,l as v,n as S,e as C,g as M,t as l}from"./app-CZQl4fZc.js";import{M as N}from"./MainLayout-BGbuSmps.js";import{a as $,b as L,_ as B}from"./TextInput-CnQTIPJ3.js";import{d as P}from"./index-C71Kd9IX.js";import"./ApplicationLogo-kcz6Xb7Y.js";import"./NavLink-BMIoQkOQ.js";import"./Modal-CuE3Y__x.js";import"./Flash-Bwnt55Qo.js";const V={class:"px-4 py-5"},E={class:"grid grid-col-2 gap-2"},F={class:"flex items-center justify-end"},I=["disabled"],T={class:"overflow-auto rounded-lg shadow"},j={class:"w-full"},q={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},z={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},A={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},D={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Z={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},G={class:"mt-4"},H={key:0},J=["disabled"],K=["disabled"],et={__name:"MeterList",props:{data:Array},setup(o){const d=y({region:"",file:""}),m=()=>{d.post(route("meter.list"),{onFinish:()=>d.reset()})},b=u=>{P.Inertia.get(u,{},{preserveState:!0,preserveScroll:!0})};return(u,e)=>(c(),n(h,null,[i(r(k),{title:"Meter List"}),i(N,null,{default:w(()=>{var f,p,g,_,x;return[t("div",V,[t("form",{onSubmit:v(m,["prevent"])},[t("div",E,[t("div",null,[i($,{for:"email",value:"Email"}),i(L,{id:"email",type:"file",class:"mt-1 block w-full",onInput:e[0]||(e[0]=s=>r(d).file=s.target.files[0]),autofocus:"",required:""}),i(B,{class:"mt-2",message:r(d).errors.email},null,8,["message"])]),t("div",F,[t("button",{onClick:m,class:S([{"opacity-25":r(d).processing},"bg-optimal text-white px-4 py-2 rounded mr-2"]),disabled:r(d).processing},"Submit",10,I)])])],32),t("div",T,[t("table",j,[e[3]||(e[3]=t("thead",{class:"bg-gray-50 border-b-2 border-gray-200"},[t("tr",null,[t("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Number"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Phase"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Type"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Status")])],-1)),t("tbody",null,[(c(!0),n(h,null,C((f=o.data)==null?void 0:f.data,(s,a)=>(c(),n("tr",{class:"bg-white",key:a},[t("td",q,l(a+1),1),t("td",z,l(s.meter_number),1),t("td",A,l(s.phase),1),t("td",D,l(s.type),1),t("td",Z,l(s.meter_status),1)]))),128))])]),t("div",G,[(g=(p=o.data)==null?void 0:p.links)!=null&&g.length?(c(),n("nav",H,[t("button",{onClick:e[1]||(e[1]=s=>{var a;return b((a=o.data)==null?void 0:a.prev_page_url)}),disabled:!((_=o.data)!=null&&_.prev_page_url),class:"px-4 py-2 bg-gray-300 rounded disabled:opacity-50"},"Previous",8,J),t("button",{onClick:e[2]||(e[2]=s=>{var a;return b((a=o.data)==null?void 0:a.next_page_url)}),disabled:!((x=o.data)!=null&&x.next_page_url),class:"px-4 py-2 bg-gray-300 rounded disabled:opacity-50"},"Next",8,K)])):M("",!0)])])])]}),_:1})],64))}};export{et as default};
