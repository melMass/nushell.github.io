import{_ as i,p as _,r as h,o as s,c as a,a as e,b as u,w as m,F as p,g as f,d as l,t as r}from"./app.56e52492.js";const x={computed:{commands(){return _.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,o)=>t.title>o.title?1:o.title>t.title?-1:0)}}},k=e("h1",{id:"\u547D\u4EE4\u7D22\u5F15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u547D\u4EE4\u7D22\u5F15","aria-hidden":"true"},"#"),l(" \u547D\u4EE4\u7D22\u5F15")],-1),g=l("\u82E5\u8981\u67E5\u770B\u6240\u6709 Nushell \u547D\u4EE4, \u53EF\u4EE5\u6267\u884C "),b=e("code",null,"help commands",-1),w=l("\u3002"),N=e("p",null,"\u8BD1\u6CE8\uFF1A\u672C\u9875\u5185\u5BB9\u7531\u4E8E\u662F\u4ECE\u6E90\u7801\u751F\u6210\u7684\u6682\u4E0D\u652F\u6301\u56FD\u9645\u5316\uFF0C\u5927\u5BB6\u8FD8\u662F\u5148\u770B\u82F1\u6587\u7248\u7684\u51D1\u5408\u4E0B\u5427\u3002",-1),v=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),B=["href"],C={style:{"white-space":"pre-wrap"}};function L(t,o,V,$,y,c){const d=h("RouterLink");return s(),a("div",null,[k,e("p",null,[g,u(d,{to:"/book/commands/help.html"},{default:m(()=>[b]),_:1}),w]),N,e("table",null,[v,(s(!0),a(p,null,f(c.commands,n=>(s(),a("tr",null,[e("td",null,[e("a",{href:n.path},[e("code",null,r(n.title),1)],8,B)]),e("td",C,r(n.frontmatter.usage),1)]))),256))])])}const F=i(x,[["render",L],["__file","command_reference.html.vue"]]);export{F as default};
