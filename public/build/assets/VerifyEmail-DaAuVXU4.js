import{T as c,m as g,j as p,w as o,o as n,a as i,u as t,Z as y,b as r,c as v,g as b,k as a,n as k,q as x,l as h}from"./app-xsfzURpa.js";import{G as w}from"./GuestLayout-VUeZrNsd.js";import{P as V}from"./PrimaryButton-DGR6XZDR.js";import"./Flash-BS7G8M_T.js";import"./ApplicationLogo-CB1yiyM-.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},_={class:"mt-4 flex items-center justify-between"},S={__name:"VerifyEmail",props:{status:{type:String}},setup(u){const l=u,s=c({}),d=()=>{s.post(route("verification.send"))},m=g(()=>l.status==="verification-link-sent");return(f,e)=>(n(),p(w,null,{default:o(()=>[i(t(y),{title:"Email Verification"}),e[2]||(e[2]=r("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),m.value?(n(),v("div",B," A new verification link has been sent to the email address you provided during registration. ")):b("",!0),r("form",{onSubmit:h(d,["prevent"])},[r("div",_,[i(V,{class:k({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>e[0]||(e[0]=[a(" Resend Verification Email ")])),_:1},8,["class","disabled"]),i(t(x),{href:f.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>e[1]||(e[1]=[a("Log Out")])),_:1},8,["href"])])],32)]),_:1}))}};export{S as default};