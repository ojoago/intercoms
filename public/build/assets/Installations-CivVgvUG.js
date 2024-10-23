import{f as sl,M as ol}from"./MainLayout-BGbuSmps.js";import{r as g,s as x,h as al,o as p,c as v,a as s,w as Ye,b as e,f as _,d as w,e as C,t as i,i as M,C as U,v as Ke,_ as dl,u as rl,Z as nl,n as qe,g as Ze}from"./app-CZQl4fZc.js";import{_ as ul}from"./Modal-CuE3Y__x.js";import{a as u,b as c,_ as r}from"./TextInput-CnQTIPJ3.js";import{_ as k}from"./Select-DAAn4NG7.js";import"./ApplicationLogo-kcz6Xb7Y.js";import"./NavLink-BMIoQkOQ.js";import"./Flash-Bwnt55Qo.js";const il={action:""},ml={class:"py-4 px-4"},cl={class:"grid gap-4 text-sm grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"},fl={class:"flex flex-col"},pl={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},vl={class:"flex flex-col"},bl={class:"flex flex-col"},gl={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},xl={class:"flex flex-col"},_l=["value"],hl={class:"flex flex-col"},yl=["value"],kl={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},wl={class:"flex flex-col"},Vl={class:"flex flex-col"},Ul={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},Cl={class:"flex flex-col"},$l={class:"flex flex-col"},Sl={class:"flex"},Ml={class:"flex items-center ml-2"},Nl={class:"flex items-center ml-2"},Dl={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},Al={class:"flex flex-col"},Tl={class:"flex flex-col"},Il={class:"grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-3"},Fl={class:"flex flex-col"},Ll={class:"flex flex-col"},Rl={class:"flex flex-col"},El={class:"grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-3"},Pl={class:"flex flex-col"},Bl=["value"],zl={class:"flex flex-col"},Ol={class:"flex flex-col"},Kl={class:"grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4"},ql={class:"flex flex-col"},Zl={class:"flex"},Yl={class:"flex items-center ml-2"},jl={class:"flex items-center ml-2"},Gl={class:"flex items-center ml-2"},Hl={class:"flex flex-col"},Jl={class:"flex flex-col"},Ql={class:"flex flex-col"},Wl={class:"flex flex-col"},Xl={class:"flex flex-col"},et={class:"flex flex-col"},lt={class:"flex flex-col"},tt={class:"flex flex-col"},st={class:"flex flex-col"},ot={class:"flex flex-col"},at={class:"flex flex-col"},dt={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},rt={class:"flex flex-col"},nt={class:"flex flex-col"},ut={class:"overflow-auto rounded-lg shadow"},it={class:"min-w-full"},mt={class:"bg-gray-50 border-b-2 border-gray-200"},ct={width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ft={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},pt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},vt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},bt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},gt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},xt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},_t={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},ht={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},yt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},kt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},wt=["onClick"],Vt={__name:"InstallationListTab",setup(N){const{transformValidationErrors:b}=sl(),h=g(!1),y=()=>{Ge(),h.value=!1},f=a=>{h.value=!0,t.value.fullname=a.account_name,t.value.dt_name=a.dt_name,t.value.account_no=a.account_number,t.value.address=a.address},m=[{id:"R1",text:"R1"},{id:"R2",text:"R2"},{id:"R3",text:"R3"},{id:"C1",text:"C1"},{id:"C2",text:"C2"},{id:"D1",text:"D1"},{id:"D2",text:"D2"},{id:"A1",text:"A1"},{id:"A2",text:"A2"}],d=[{id:"RESIDENTIAL",text:"RESIDENTIAL"},{id:"COMMERCIAL",text:"COMMERCIAL"},{id:"SPECIAL",text:"SPECIAL"}],t=g({meter_number:"",preload:"",state:"",doi:"",dt_name:"",dt_type:"",upriser:"",pole:"",tariff:"",advtariff:"",fullname:"",gsm:"",email:"",premises:"",phase:"",address:"",remark:"",feeder_33kv:"",feeder_11kv:"",meter_type:"",meter_brand:"",meter_tech:"",estimated:"",account_no:"",business_unit:"",x_cordinate:"",y_cordinate:"",installer:"",supervisor:"",rf_channel:"",din:"",seal:"",dt_code:"",errors:{}}),je=()=>{t.errors={},x.dispatch("postMethod",{url:"/record-form",param:t.value}).then(a=>{(a==null?void 0:a.status)==422?t.value.errors=b(a.data):(a==null?void 0:a.status)==201&&(y(),R())}).catch(a=>{console.log(a)})},Ge=()=>{t.value={meter_number:"",preload:"",state:"",doi:"",dt_name:"",dt_type:"",upriser:"",pole:"",tariff:"",advtariff:"",fullname:"",gsm:"",email:"",premises:"",phase:"",address:"",remark:"",feeder_33kv:"",feeder_11kv:"",meter_type:"",meter_brand:"",meter_tech:"",estimated:"",account_no:"",business_unit:"",x_cordinate:"",y_cordinate:"",installer:"",rf_channel:"",din:"",seal:"",dt_code:""}};He();const D=g({});function He(){x.dispatch("loadDropdown","zone-state").then(({data:a})=>{D.value=a}).catch(a=>{console.log(a)})}const A=g({});function Je(a){x.dispatch("loadDropdown","zone/"+a).then(({data:l})=>{A.value=l}).catch(l=>{console.log(l)})}const T=g({});function Qe(a){x.dispatch("loadDropdown","feeder-33/"+a).then(({data:l})=>{T.value=l}).catch(l=>{console.log(l)})}const I=g({});function We(a){x.dispatch("loadDropdown","feeder-11/"+a).then(({data:l})=>{I.value=l}).catch(l=>{console.log(l)})}Xe();const F=g({});function Xe(){x.dispatch("loadDropdown","meter-brands").then(({data:a})=>{F.value=a}).catch(a=>{console.log(a)})}el();const L=g({});function el(){x.dispatch("loadDropdown","meter-types").then(({data:a})=>{L.value=a}).catch(a=>{console.log(a)})}const $=g({});function R(a="schedule-list"){x.dispatch("getMethod",{url:a}).then(l=>{(l==null?void 0:l.status)==200&&($.value=l.data)}).catch(l=>{console.log(l)})}R();const ll=a=>{x.dispatch("getMethod",{url:"search-schedule-list/"+a.target.value}).then(l=>{(l==null?void 0:l.status)==200&&($.value=l.data)}).catch(l=>{console.log(l)})};return(a,l)=>{const tl=al("font-awesome-icon");return p(),v("div",null,[s(ul,{show:h.value,onClose:y,"max-width":"6xl",title:"Record Data",onSubmit:je},{default:Ye(()=>{var n,V,S,E,P,B,z,O,K,q,Z,Y,j,G,H,J,Q,W,X,ee,le,te,se,oe,ae,de,re,ne,ue,ie,me,ce,fe,pe,ve,be,ge,xe,_e,he,ye,ke,we,Ve,Ue,Ce,$e,Se,Me,Ne,De,Ae,Te,Ie,Fe,Le,Re,Ee,Pe,Be,ze,Oe;return[e("form",il,[e("div",ml,[e("div",cl,[e("div",fl,[s(u,{for:"first_name",value:"Meter Number"}),s(c,{id:"meter_number",type:"text",class:"mt-1 block w-full",modelValue:t.value.meter_number,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value.meter_number=o),placeholder:"Meter Number",required:""},null,8,["modelValue"]),s(r,{class:"mt-2",message:(V=(n=t.value)==null?void 0:n.errors)==null?void 0:V.meter_number},null,8,["message"])]),e("div",pl,[e("div",vl,[s(u,{for:"doi",value:"Date"}),s(c,{id:"doi",type:"date",class:"mt-1 block w-full",modelValue:t.value.doi,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value.doi=o)},null,8,["modelValue"]),s(r,{class:"mt-2",message:(E=(S=t.value)==null?void 0:S.errors)==null?void 0:E.doi},null,8,["message"])]),e("div",bl,[s(u,{for:"preload",value:"Pre load unit"}),s(c,{id:"preload",type:"number",class:"mt-1 block w-full",modelValue:t.value.preload,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value.preload=o),placeholder:"e.g 15"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(B=(P=t.value)==null?void 0:P.errors)==null?void 0:B.preload},null,8,["message"])])]),e("div",gl,[e("div",xl,[s(u,{for:"preload",value:"State"}),_(e("select",{"onUpdate:modelValue":l[3]||(l[3]=o=>t.value.state=o),onChange:l[4]||(l[4]=o=>Je(o.target.value)),class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},[l[37]||(l[37]=e("option",{value:"",selected:""},"Choose State",-1)),(p(!0),v(w,null,C(D.value,o=>(p(),v("option",{key:o.id,value:o.id},i(o.text),9,_l))),128))],544),[[M,t.value.state]]),s(r,{class:"mt-2",message:(O=(z=t.value)==null?void 0:z.errors)==null?void 0:O.state},null,8,["message"])]),e("div",hl,[s(u,{for:"preload",value:"Trading Zone"}),_(e("select",{"onUpdate:modelValue":l[5]||(l[5]=o=>t.value.zone=o),onChange:l[6]||(l[6]=o=>Qe(o.target.value)),class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},[l[38]||(l[38]=e("option",{value:"",selected:""},"Choose State",-1)),(p(!0),v(w,null,C(A.value,o=>(p(),v("option",{key:o.id,value:o.id},i(o.text),9,yl))),128))],544),[[M,t.value.zone]]),s(r,{class:"mt-2",message:(q=(K=t.value)==null?void 0:K.errors)==null?void 0:q.zone},null,8,["message"])])]),e("div",kl,[e("div",wl,[s(u,{for:"dt_code",value:"DT Number"}),s(c,{id:"dt_code",type:"number",class:"mt-1 block w-full",modelValue:t.value.dt_code,"onUpdate:modelValue":l[7]||(l[7]=o=>t.value.dt_code=o),placeholder:"e.g 04"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Y=(Z=t.value)==null?void 0:Z.errors)==null?void 0:Y.dt_code},null,8,["message"])]),e("div",Vl,[s(u,{for:"dt_capacity",value:"DT Capacity"}),s(c,{id:"dt_capacity",type:"number",class:"mt-1 block w-full",modelValue:t.value.dt_capacity,"onUpdate:modelValue":l[8]||(l[8]=o=>t.value.dt_capacity=o),placeholder:"DT Capacity"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(G=(j=t.value)==null?void 0:j.errors)==null?void 0:G.dt_capacity},null,8,["message"])])]),e("div",Ul,[e("div",Cl,[s(u,{for:"upriser",value:"Upriser"}),s(c,{id:"upriser",type:"number",class:"mt-1 block w-full",modelValue:t.value.upriser,"onUpdate:modelValue":l[9]||(l[9]=o=>t.value.upriser=o),placeholder:"e.g 02",required:""},null,8,["modelValue"]),s(r,{class:"mt-2",message:(J=(H=t.value)==null?void 0:H.errors)==null?void 0:J.upriser},null,8,["message"])]),e("div",$l,[s(u,{for:"dt_type",value:"DT Type"}),e("div",Sl,[e("div",Ml,[l[39]||(l[39]=e("label",{for:"radio1",class:"mr-2 text-sm font-medium text-gray-900"},"Public",-1)),_(e("input",{id:"radio1",type:"radio",name:"dt_type","onUpdate:modelValue":l[10]||(l[10]=o=>t.value.dt_type=o),value:"Private",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"},null,512),[[U,t.value.dt_type]])]),e("div",Nl,[l[40]||(l[40]=e("label",{for:"radio2",class:"mr-2 text-sm font-medium text-gray-900"},"Private",-1)),_(e("input",{id:"radio2",type:"radio",name:"dt_type","onUpdate:modelValue":l[11]||(l[11]=o=>t.value.dt_type=o),value:"Private",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"},null,512),[[U,t.value.dt_type]])])]),s(r,{class:"mt-2",message:(W=(Q=t.value)==null?void 0:Q.errors)==null?void 0:W.dt_type},null,8,["message"])])]),e("div",Dl,[e("div",Al,[s(k,{modelValue:t.value.tariff,"onUpdate:modelValue":l[12]||(l[12]=o=>t.value.tariff=o),label:"Present Tariff",placeholder:"Select Option",options:m},null,8,["modelValue"]),s(r,{class:"mt-2",message:(ee=(X=t.value)==null?void 0:X.errors)==null?void 0:ee.tariff},null,8,["message"])]),e("div",Tl,[s(k,{modelValue:t.value.advtariff,"onUpdate:modelValue":l[13]||(l[13]=o=>t.value.advtariff=o),label:"Advised Tariff",placeholder:"Select Option",options:m},null,8,["modelValue"]),s(r,{class:"mt-2",message:(te=(le=t.value)==null?void 0:le.errors)==null?void 0:te.advtariff},null,8,["message"])])])]),e("div",Il,[e("div",Fl,[s(u,{for:"fullname",value:"Fullname"}),s(c,{id:"fullname",type:"text",class:"mt-1 block w-full",modelValue:t.value.fullname,"onUpdate:modelValue":l[14]||(l[14]=o=>t.value.fullname=o),placeholder:"fullname"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(oe=(se=t.value)==null?void 0:se.errors)==null?void 0:oe.fullname},null,8,["message"])]),e("div",Ll,[s(u,{for:"gsm",value:"Phone Number"}),s(c,{id:"gsm",type:"text",class:"mt-1 block w-full",modelValue:t.value.gsm,"onUpdate:modelValue":l[15]||(l[15]=o=>t.value.gsm=o),placeholder:"Phone Number",required:""},null,8,["modelValue"]),s(r,{class:"mt-2",message:(de=(ae=t.value)==null?void 0:ae.errors)==null?void 0:de.gsm},null,8,["message"])]),e("div",Rl,[s(u,{for:"email",value:"Email"}),s(c,{id:"email",type:"text",class:"mt-1 block w-full",modelValue:t.value.email,"onUpdate:modelValue":l[16]||(l[16]=o=>t.value.email=o),placeholder:"Customer Email"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(ne=(re=t.value)==null?void 0:re.errors)==null?void 0:ne.email},null,8,["message"])])]),e("div",El,[e("div",Pl,[s(u,{for:"feeder_33kv",value:"33 kv Feeder"}),_(e("select",{"onUpdate:modelValue":l[17]||(l[17]=o=>t.value.feeder_33kv=o),onChange:l[18]||(l[18]=o=>We(o.target.value)),class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"},[l[41]||(l[41]=e("option",{value:"",selected:""},"Choose 33 kv Feeder",-1)),(p(!0),v(w,null,C(T.value,o=>(p(),v("option",{key:o.id,value:o.id},i(o.text),9,Bl))),128))],544),[[M,t.value.feeder_33kv]]),s(r,{class:"mt-2",message:(ie=(ue=t.value)==null?void 0:ue.errors)==null?void 0:ie.feeder_33kv},null,8,["message"])]),e("div",zl,[s(k,{modelValue:t.value.feeder_11kv,"onUpdate:modelValue":l[19]||(l[19]=o=>t.value.feeder_11kv=o),label:"11 kv Feeder",placeholder:"Select Feeder",options:I.value},null,8,["modelValue","options"]),s(r,{class:"mt-2",message:(ce=(me=t.value)==null?void 0:me.errors)==null?void 0:ce.feeder_11kv},null,8,["message"])]),e("div",Ol,[s(k,{modelValue:t.value.premises,"onUpdate:modelValue":l[20]||(l[20]=o=>t.value.premises=o),label:"Use of Premises",placeholder:"Select Option",options:d},null,8,["modelValue"]),s(r,{class:"mt-2",message:(pe=(fe=t.value)==null?void 0:fe.errors)==null?void 0:pe.premises},null,8,["message"])])]),e("div",Kl,[e("div",ql,[s(u,{for:"feeder_33kv",value:"Customer Phase"}),e("div",Zl,[e("div",Yl,[l[42]||(l[42]=e("label",{for:"radio1",class:"mr-2 text-sm font-medium text-gray-900"},"Red",-1)),_(e("input",{id:"radio1",type:"radio",name:"phase","onUpdate:modelValue":l[21]||(l[21]=o=>t.value.phase=o),value:"Red",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"},null,512),[[U,t.value.phase]])]),e("div",jl,[l[43]||(l[43]=e("label",{for:"radio2",class:"mr-2 text-sm font-medium text-gray-900"},"Yellow",-1)),_(e("input",{id:"radio2",type:"radio",name:"phase","onUpdate:modelValue":l[22]||(l[22]=o=>t.value.phase=o),value:"Yellow",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"},null,512),[[U,t.value.phase]])]),e("div",Gl,[l[44]||(l[44]=e("label",{for:"radio2",class:"mr-2 text-sm font-medium text-gray-900"},"Blue",-1)),_(e("input",{id:"radio2",type:"radio",name:"phase","onUpdate:modelValue":l[23]||(l[23]=o=>t.value.phase=o),value:"Blue",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"},null,512),[[U,t.value.phase]])])]),s(r,{class:"mt-2",message:(be=(ve=t.value)==null?void 0:ve.errors)==null?void 0:be.phase},null,8,["message"])]),e("div",Hl,[s(k,{modelValue:t.value.meter_type,"onUpdate:modelValue":l[24]||(l[24]=o=>t.value.meter_type=o),label:"Meter Type",placeholder:"Select Option",options:L.value},null,8,["modelValue","options"]),s(r,{class:"mt-2",message:(xe=(ge=t.value)==null?void 0:ge.errors)==null?void 0:xe.meter_type},null,8,["message"])]),e("div",Jl,[s(k,{modelValue:t.value.meter_brand,"onUpdate:modelValue":l[25]||(l[25]=o=>t.value.meter_brand=o),label:"Meter Brand",placeholder:"Select Option",options:F.value},null,8,["modelValue","options"]),s(r,{class:"mt-2",message:(he=(_e=t.value)==null?void 0:_e.errors)==null?void 0:he.meter_brand},null,8,["message"])]),e("div",Ql,[s(u,{for:"seal",value:"Seal Number"}),s(c,{id:"seal",type:"number",class:"mt-1 block w-full",modelValue:t.value.seal,"onUpdate:modelValue":l[26]||(l[26]=o=>t.value.seal=o),placeholder:"New Seal Number"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(ke=(ye=t.value)==null?void 0:ye.errors)==null?void 0:ke.title},null,8,["message"])]),e("div",Wl,[s(u,{for:"pole",value:"Pole Number"}),s(c,{id:"pole",type:"number",class:"mt-1 block w-full",modelValue:t.value.pole,"onUpdate:modelValue":l[27]||(l[27]=o=>t.value.pole=o),placeholder:"e.g 11 "},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Ve=(we=t.value)==null?void 0:we.errors)==null?void 0:Ve.pole},null,8,["message"])]),e("div",Xl,[s(u,{for:"pole",value:"Estimated Load"}),s(c,{id:"pole",type:"number",class:"mt-1 block w-full",modelValue:t.value.estimated,"onUpdate:modelValue":l[28]||(l[28]=o=>t.value.estimated=o),placeholder:"Customer Estimated Load"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Ce=(Ue=t.value)==null?void 0:Ue.errors)==null?void 0:Ce.estimated},null,8,["message"])]),e("div",et,[s(u,{for:"pole",value:"Service Center"}),s(c,{id:"pole",type:"number",class:"mt-1 block w-full",modelValue:t.value.service_center,"onUpdate:modelValue":l[29]||(l[29]=o=>t.value.service_center=o),placeholder:"Customer Estimated Load"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Se=($e=t.value)==null?void 0:$e.errors)==null?void 0:Se.estimated},null,8,["message"])]),e("div",lt,[s(u,{for:"account",value:"Account Number"}),s(c,{id:"account",type:"number",class:"mt-1 block w-full",modelValue:t.value.account_no,"onUpdate:modelValue":l[30]||(l[30]=o=>t.value.account_no=o),placeholder:"Customer Estimated Load"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Ne=(Me=t.value)==null?void 0:Me.errors)==null?void 0:Ne.account_no},null,8,["message"])]),e("div",tt,[s(u,{for:"unit",value:"Business Unit"}),s(c,{id:"unit",type:"text",class:"mt-1 block w-full",modelValue:t.value.business_unit,"onUpdate:modelValue":l[31]||(l[31]=o=>t.value.business_unit=o),placeholder:"Business Unit"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Ae=(De=t.value)==null?void 0:De.errors)==null?void 0:Ae.business_unit},null,8,["message"])]),e("div",st,[s(k,{modelValue:t.value.installer,"onUpdate:modelValue":l[32]||(l[32]=o=>t.value.installer=o),label:"Installer",placeholder:"Select Installer",options:a.installers},null,8,["modelValue","options"]),s(r,{class:"mt-2",message:(Ie=(Te=t.value)==null?void 0:Te.errors)==null?void 0:Ie.installer},null,8,["message"])]),e("div",ot,[s(u,{for:"latitude",value:"Latitude"}),s(c,{id:"latitude",type:"text",class:"mt-1 block w-full",modelValue:t.value.x_cordinate,"onUpdate:modelValue":l[33]||(l[33]=o=>t.value.x_cordinate=o),placeholder:"0.1121223"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Le=(Fe=t.value)==null?void 0:Fe.errors)==null?void 0:Le.x_cordinate},null,8,["message"])]),e("div",at,[s(u,{for:"longitude",value:"Longitude"}),s(c,{id:"longitude",type:"text",class:"mt-1 block w-full",modelValue:t.value.y_cordinate,"onUpdate:modelValue":l[34]||(l[34]=o=>t.value.y_cordinate=o),placeholder:"0.01232333"},null,8,["modelValue"]),s(r,{class:"mt-2",message:(Ee=(Re=t.value)==null?void 0:Re.errors)==null?void 0:Ee.y_cordinate},null,8,["message"])])]),e("div",dt,[e("div",rt,[s(u,{for:"email",value:"Customer Address"}),_(e("textarea",{class:"staffForm-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":l[35]||(l[35]=o=>t.value.address=o),placeholder:"Address"},null,512),[[Ke,t.value.address]]),s(r,{class:"mt-2",message:(Be=(Pe=t.value)==null?void 0:Pe.errors)==null?void 0:Be.address},null,8,["message"])]),e("div",nt,[s(u,{for:"email",value:"Customer Remark"}),_(e("textarea",{class:"staffForm-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":l[36]||(l[36]=o=>t.value.remark=o),placeholder:"Address"},null,512),[[Ke,t.value.remark]]),s(r,{class:"mt-2",message:(Oe=(ze=t.value)==null?void 0:ze.errors)==null?void 0:Oe.remark},null,8,["message"])])])])])]}),_:1},8,["show"]),e("div",ut,[e("div",null,[s(c,{id:"longitude",type:"text",class:"mt-1 block w-full",onKeyup:ll,placeholder:"enter account number or name"})]),e("table",it,[e("thead",mt,[e("tr",null,[l[45]||(l[45]=e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N",-1)),l[46]||(l[46]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Region",-1)),l[47]||(l[47]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Account Number",-1)),l[48]||(l[48]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Account Name",-1)),l[49]||(l[49]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Address",-1)),l[50]||(l[50]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"33Kv feeder",-1)),l[51]||(l[51]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"11kv Feeder",-1)),l[52]||(l[52]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"DT Name",-1)),l[53]||(l[53]=e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Type",-1)),e("th",ct,[s(tl,{class:"fa-solid fas fa-cog"})])])]),e("tbody",null,[(p(!0),v(w,null,C($.value,(n,V)=>(p(),v("tr",{class:"bg-white",key:V},[e("td",ft,i(V+1),1),e("td",pt,i(n==null?void 0:n.region),1),e("td",vt,i(n==null?void 0:n.account_number),1),e("td",bt,i(n==null?void 0:n.account_name),1),e("td",gt,i(n==null?void 0:n.address),1),e("td",xt,i(n==null?void 0:n.feeder_33),1),e("td",_t,i(n==null?void 0:n.feeder_11),1),e("td",ht,i(n==null?void 0:n.dt_name),1),e("td",yt,i(n==null?void 0:n.meter_type),1),e("td",kt,[e("button",{class:"p-1 oy-1 text-sm bg-optimal text-white me-2 inline-block rounded",onClick:S=>f(n)},"Record",8,wt)])]))),128))])])])])}}},Ut={class:"overflow-auto rounded-lg shadow"},Ct={class:"min-w-full"},$t={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},St={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Mt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Nt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Dt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},At={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Tt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},It={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Ft={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Lt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Rt={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Et={class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},Pt={__name:"InstalledTab",setup(N){const b=g({});function h(f="installed-list"){x.dispatch("getMethod",{url:f}).then(m=>{(m==null?void 0:m.status)==200&&(b.value=m.data)}).catch(m=>{console.log(m)})}h();const y=f=>{x.dispatch("getMethod",{url:"search-schedule-list/"+f.target.value}).then(m=>{(m==null?void 0:m.status)==200&&(b.value=m.data)}).catch(m=>{console.log(m)})};return(f,m)=>(p(),v("div",null,[e("div",Ut,[e("div",null,[s(c,{id:"longitude",type:"text",class:"mt-1 block w-full",onKeyup:y,placeholder:"enter account number or name"})]),e("table",Ct,[m[0]||(m[0]=e("thead",{class:"bg-gray-50 border-b-2 border-gray-200"},[e("tr",null,[e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"S/N"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Account Number"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Account Name"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Address"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"11kv Feeder"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"DT Name"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Type"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Number"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Meter Seal"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Latitude"),e("th",{class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"},"Longitude"),e("th",{width:"5%",class:"p-3 text-sm font-semibold tracking-wide text-left table-bordered"}," Date ")])],-1)),e("tbody",null,[(p(!0),v(w,null,C(b.value,(d,t)=>(p(),v("tr",{class:"bg-white",key:t},[e("td",$t,i(t+1),1),e("td",St,i(d==null?void 0:d.account_no),1),e("td",Mt,i(d==null?void 0:d.fullname),1),e("td",Nt,i(d==null?void 0:d.address),1),e("td",Dt,i(d==null?void 0:d.feeder11kv.name),1),e("td",At,i(d==null?void 0:d.dt_name),1),e("td",Tt,i(d==null?void 0:d.meter_type),1),e("td",It,i(d==null?void 0:d.meter_number),1),e("td",Ft,i(d==null?void 0:d.seal),1),e("td",Lt,i(d==null?void 0:d.x_cordinate),1),e("td",Rt,i(d==null?void 0:d.y_cordinate),1),e("td",Et,i(d.date),1)]))),128))])])])]))}},Bt={class:"container mx-auto"},zt={class:"m-4 pb-4 border bg-gray-100 rounded-lg"},Ot={class:"text-sm flex justify-center bg-gray-200"},Kt={class:"p-3 bg-gra-200"},qt={key:0},Zt={class:"border border-gray-300 rounded-lg p-4"},Yt={key:1},jt={class:"border border-gray-300 rounded-lg py-4 px-2"},Gt={__name:"Installations",setup(N){const b=g(1),h=y=>b.value=y;return(y,f)=>(p(),v(w,null,[s(rl(nl),{title:"Installations record"}),s(ol,null,{default:Ye(()=>[e("div",Bt,[e("fieldset",zt,[e("nav",Ot,[e("a",{onClick:f[0]||(f[0]=m=>h(1)),class:qe(["inline-block px-4 py-2 cursor-pointer",b.value===1&&"active"])},"Record From Schedule",2),e("a",{onClick:f[1]||(f[1]=m=>h(2)),class:qe(["inline-block px-4 py-2 cursor-pointer",b.value===2&&"active"])},"Installed",2)]),e("div",Kt,[b.value===1?(p(),v("div",qt,[e("fieldset",Zt,[f[2]||(f[2]=e("legend",{class:"text-lg font-medium text-left px-2"},"Schedule List",-1)),s(Vt)])])):Ze("",!0),b.value===2?(p(),v("div",Yt,[e("fieldset",jt,[f[3]||(f[3]=e("legend",{class:"text-lg font-medium text-left px-1"},"Form",-1)),s(Pt)])])):Ze("",!0)])])])]),_:1})],64))}},ss=dl(Gt,[["__scopeId","data-v-86d19d7e"]]);export{ss as default};