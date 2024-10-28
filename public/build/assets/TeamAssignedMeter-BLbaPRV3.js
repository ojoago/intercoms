import{T as w,c as r,a as d,u as n,w as k,d as x,h as y,o as c,Z as v,b as t,l as C,n as S,e as M,g as N,t as l}from"./app-CSBnqQQo.js";import{M as $}from"./MainLayout-3P1PP2FG.js";import{a as B,b as E,_ as L}from"./TextInput-bpI7h_K9.js";import{d as P}from"./index-D8x-p5Cd.js";import"./ApplicationLogo-5o3dzhdj.js";import"./NavLink-DDEYTW1N.js";import"./Modal-BjLcEjN-.js";import"./Flash-7lzD3HKF.js";const T={class:"px-4 py-5"},V={class:"grid grid-col-3 gap-2"},A={class:"flex"},F={class:"flex"},I={class:""},z=["disabled"],D={class:"overflow-auto rounded-lg shadow"},Z={class:"w-full"},j={class:"bg-gray-50 border-b-2 border-gray-200"},q={width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left"},G={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},H={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},J={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},K={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},O={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Q={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},R=["onClick"],U={class:"mt-4"},W={key:0},X=["disabled"],Y=["disabled"],nt={__name:"TeamAssignedMeter",props:{data:Array},setup(a){const i=w({region:"",file:""}),b=()=>{i.post(route("meter.list"),{onFinish:()=>i.reset()})},f=m=>{P.Inertia.get(m,{},{preserveState:!0,preserveScroll:!0})};return(m,e)=>{const h=y("font-awesome-icon");return c(),r(x,null,[d(n(v),{title:"Meter List"}),d($,null,{default:k(()=>{var p,u,g,_;return[t("div",T,[t("form",{onSubmit:C(b,["prevent"])},[t("div",V,[t("div",A,[t("div",F,[d(B,{for:"email",value:"Email"}),d(E,{id:"email",type:"text",class:"mt-1 block w-full",autofocus:"",autocomplete:"off"}),d(L,{class:"mt-2",message:n(i).errors.email},null,8,["message"])])]),t("div",I,[t("button",{onClick:b,class:S([{"opacity-25":n(i).processing},"bg-optimal text-white px-4 py-2 rounded mr-2"]),disabled:n(i).processing},"Submit",10,z)])])],32),t("div",D,[t("table",Z,[t("thead",j,[t("tr",null,[e[2]||(e[2]=t("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),e[3]||(e[3]=t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Number",-1)),e[4]||(e[4]=t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Phase",-1)),e[5]||(e[5]=t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Type",-1)),e[6]||(e[6]=t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Status",-1)),t("th",q,[d(h,{class:"fa-solid fas fa-cog"})])])]),t("tbody",null,[(c(!0),r(x,null,M((p=a.data)==null?void 0:p.data,(o,s)=>(c(),r("tr",{class:"bg-white",key:s},[t("td",G,l(s+1),1),t("td",H,l(o.meter_number),1),t("td",J,l(o.phase),1),t("td",K,l(o.type),1),t("td",O,l(o.status),1),t("td",Q,[t("button",{class:"p-1 oy-1 text-sm bg-yellow-500 text-white me-2 inline-block",onClick:tt=>m.editItem(o)},"Edit",8,R)])]))),128))])]),t("div",U,[(u=a.data)!=null&&u.links.length?(c(),r("nav",W,[t("button",{onClick:e[0]||(e[0]=o=>{var s;return f((s=a.data)==null?void 0:s.prev_page_url)}),disabled:!((g=a.data)!=null&&g.prev_page_url),class:"px-4 py-2 bg-gray-300 rounded disabled:opacity-50"},"Previous",8,X),t("button",{onClick:e[1]||(e[1]=o=>{var s;return f((s=a.data)==null?void 0:s.next_page_url)}),disabled:!((_=a.data)!=null&&_.next_page_url),class:"px-4 py-2 bg-gray-300 rounded disabled:opacity-50"},"Next",8,Y)])):N("",!0)])])])]}),_:1})],64)}}};export{nt as default};