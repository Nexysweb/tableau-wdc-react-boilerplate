(this["webpackJsonpbpms-tableau"]=this["webpackJsonpbpms-tableau"]||[]).push([[0],{10:function(e,a,n){e.exports=n(15)},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(7),i=n.n(o),m=n(9),c=n(3),l=n(8),s=new URLSearchParams(window.location.search),u=Number(s.get("year"));if(isNaN(u)||u<2016||u>(new Date).getFullYear())throw Error("date not in acceptable range");var d=s.get("key"),p=Object({NODE_ENV:"production",PUBLIC_URL:"/tableau-wdc-react-boilerplate",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GIT_SHA:"f0f88565f426fed05026c37041c2ed0b465ed1dc"}).REACT_APP_KEY||"defaultKey";if(console.log({key:p,keyParam:d}),d!==p)throw Error("key wrong");var h="/business-plan/report/byYear?year="+u,b={name:"BPMS",reports:Object.entries({plans:[{name:"Plan Id"},{name:"Geo"},{name:"Market"},{name:"Country"},{name:"BP"},{name:"Ceid"},{name:"Question 5"},{name:"Marketing Plan"},{name:"revenue"},{name:"ownInvestment"}],activities:[{name:"mkt section id"},{name:"start"},{name:"end"},{name:"n leads"},{name:"channel"},{name:"n people"},{name:"description"},{name:"lead value"},{name:"tactic"},{name:"budget"},{name:"revenue"}],milestones:[{name:"mkt activity id"},{name:"owner"},{name:"title"},{name:"date"}],participants:[{name:"plan id"},{name:"firstName"},{name:"lastName"},{name:"email"},{name:"phone"}]}).map((function(e){var a=Object(c.a)(e,2),n=a[0],t=a[1];return{id:n,alias:n,url:h,method:"GET",columns:t,mapping:function(e){var a=Object(m.a)(e[n]);return[a[0],a.slice(1)]}}}))},v=function(){return r.a.createElement(l.a,{config:b})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("p",null,"Make sure this page is run from either Tableau or the simmulator"),r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7b5257bf.chunk.js.map