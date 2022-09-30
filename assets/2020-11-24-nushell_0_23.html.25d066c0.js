import{_ as s,r as a,o as r,c as i,f as l,a as e,b as n,d as t,e as h}from"./app.56e52492.js";const d="/assets/0_23_website.ae1f211c.png",c={},u=e("h1",{id:"nushell-0-23",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-23","aria-hidden":"true"},"#"),t(" Nushell 0.23")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.23 of Nu. In this version, we continue improving the commands, release a new website, and talk about some of the experiments that will be making their way into Nu in future versions.",-1),f=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),m=t("Nu 0.23 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.23.0",target:"_blank",rel:"noopener noreferrer"},w=t("pre-built binaries"),g=t(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),y=t(". If you have Rust installed you can install it using "),N=e("code",null,"cargo install nu",-1),x=t("."),j=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-website-ibraheemdev" tabindex="-1"><a class="header-anchor" href="#new-website-ibraheemdev" aria-hidden="true">#</a> New website (ibraheemdev)</h2><p><img src="'+d+'" alt="picture of the new Nushell website"></p><p><em>The new website</em></p>',6),I=t("We've just put up the first version of a new website that combines the front site with the books and docs all in one place. We're still continuing to polish this, so if you'd like to help out, come by the "),T={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},B=t("discord"),W=t(" and say hello!"),A=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),L=e("p",null,[t("The "),e("code",null,"from json"),t(" command used to preserve the order of fields. Unfortunately, unsafe behaviors in one of the dependencies we used for this were recently found and we've had to (perhaps temporarily) remove the order preservation. We'd happily accept PRs that re-enabled this functionality.")],-1),V=e("h2",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),S=e("li",null,"Better table alignments (fdncred)",-1),C=e("li",null,[e("code",null,"seq"),t(" now can do date ranges as well (fdncred)")],-1),E=e("li",null,"More refactoring towards script support (jonathandturner)",-1),G=e("li",null,"Some doc naming has been cleaned up (LhKipp)",-1),R=t("Lots of "),q={href:"https://github.com/nushell/nushell/pull/2742",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"path",-1),M=t(" fixes and improvements"),P=t(" have now landed (kubouch)"),U=t("Build artifacts are "),z={href:"https://github.com/nushell/nushell/pull/2747",target:"_blank",rel:"noopener noreferrer"},D=t("now smaller"),F=t(" (fdncred)"),H=e("li",null,"Some broken docs links have been fixed (naufraghi)",-1),J=e("li",null,[t("A new "),e("code",null,"random decimal"),t(" command (smaydew)")],-1),O=e("li",null,[t("Some "),e("code",null,"str substring"),t(" fixes (andrasio)")],-1),Q=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),X=t("We've been splitting our efforts between the website, Nushell, and two new side projects that will feed into Nushell in the future: "),Y={href:"https://github.com/jonathandturner/nunu/",target:"_blank",rel:"noopener noreferrer"},Z=t("nunu"),$=t(" and "),ee={href:"https://github.com/jonathandturner/nunu2",target:"_blank",rel:"noopener noreferrer"},te=t("nunu2"),oe=t(". The first is investigating some parser improvements we could do in Nushell to better support scripts and more in the future. The second experiments with variables, blocks, and evaluation. Combined, they should some signs of what we hope will be available in Nu in the weeks to come."),ne=t("As always, if you see somewhere you'd like to help or just want to chat, come by the "),se={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},ae=t("discord"),re=t(" and say hi!");function ie(le,he){const o=a("ExternalLinkIcon");return r(),i("div",null,[u,_,p,l(" more "),f,e("p",null,[m,e("a",b,[w,n(o)]),g,e("a",k,[v,n(o)]),y,N,x]),j,e("p",null,[I,e("a",T,[B,n(o)]),W]),A,L,V,e("ul",null,[S,C,E,G,e("li",null,[R,e("a",q,[K,M,n(o)]),P]),e("li",null,[U,e("a",z,[D,n(o)]),F]),H,J,O]),Q,e("p",null,[X,e("a",Y,[Z,n(o)]),$,e("a",ee,[te,n(o)]),oe]),e("p",null,[ne,e("a",se,[ae,n(o)]),re])])}const ce=s(c,[["render",ie],["__file","2020-11-24-nushell_0_23.html.vue"]]);export{ce as default};
