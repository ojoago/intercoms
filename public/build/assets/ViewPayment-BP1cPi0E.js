import{M as p}from"./MainLayout-BGbuSmps.js";import{c as o,a as l,u as m,w as c,d as f,o as a,Z as b,b as t,e as g,t as s,q as w}from"./app-CZQl4fZc.js";import"./ApplicationLogo-kcz6Xb7Y.js";import"./NavLink-BMIoQkOQ.js";import"./Modal-CuE3Y__x.js";import"./TextInput-CnQTIPJ3.js";import"./Flash-Bwnt55Qo.js";const u={class:"p-5 bg-gray-100"},_={class:"overflow-auto rounded-lg shadow"},h={class:"w-full"},k={class:"p-3 text-sm font-semibold tracking-wide text-left"},y={class:"p-3 text-sm font-semibold tracking-wide text-left"},R={class:"p-3 text-sm font-semibold tracking-wide text-left"},v={class:"p-3 text-sm font-semibold tracking-wide text-left"},N={class:"p-3 text-sm font-semibold tracking-wide text-left"},A={class:"p-3 text-sm font-semibold tracking-wide text-left"},V={class:"p-3 text-sm font-semibold tracking-wide text-left"},B={class:"p-3 text-sm font-semibold tracking-wide text-left"},L={class:"p-3 text-sm font-semibold tracking-wide text-left"},M={class:"p-3 text-sm font-semibold tracking-wide text-left"},P={class:"p-3 text-sm font-semibold tracking-wide text-left"},j={__name:"ViewPayment",props:{lists:Array,summary:Array},setup(r){return(x,i)=>(a(),o(f,null,[l(m(b),{title:"View Payments"}),l(p,null,{default:c(()=>{var n;return[t("div",u,[i[2]||(i[2]=t("h1",{class:"text-xl mb-"}," RRR List ",-1)),t("div",_,[t("table",h,[i[1]||(i[1]=t("thead",{class:"bg-gray-50 border-b-2 border-gray-200"},[t("tr",null,[t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"S/N"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Account No."),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Names"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"gsm"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Email"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Meter type"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"RRR"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Status"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Date"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},"Amount"),t("th",{class:"p-3 text-sm font-semibold tracking-wide text-left"},[t("i",{class:"fa fa-cog"})])])],-1)),t("tbody",null,[(a(!0),o(f,null,g((n=r.lists)==null?void 0:n.data,(e,d)=>(a(),o("tr",{class:"bg-white",key:d},[t("td",k,s(d+1),1),t("td",y,s(e.accountnumber),1),t("td",R,s(e.customernames),1),t("td",v,s(e.gsm),1),t("td",N,s(e.email),1),t("td",A,s(e.meter_recomended),1),t("td",V,s(e.reference),1),t("td",B,s(e.status),1),t("td",L,s(e.date),1),t("td",M,s(e.amount),1),t("td",P,[l(m(w),{href:x.route("preview.rrr",{rrr:e.reference})},{default:c(()=>i[0]||(i[0]=[t("button",{class:"p-1 oy-1 text-sm bg-green-500 text-white me-2 rounded inline-block"},"Preview",-1)])),_:2},1032,["href"])])]))),128))])])])])]}),_:1})],64))}};export{j as default};