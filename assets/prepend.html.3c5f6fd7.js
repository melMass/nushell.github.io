import{_ as n,o as t,c as p,a,t as s,d as o,e as r}from"./app.56e52492.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),u={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; prepend (row)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row</code>: the row, list, or table to prepend</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Prepend one Int item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4<span class="token punctuation">]</span> <span class="token operator">|</span> prepend <span class="token number">0</span>
</code></pre></div><p>Prepend two Int items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2,3</span>,4<span class="token punctuation">]</span> <span class="token operator">|</span> prepend <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span>
</code></pre></div><p>Prepend Ints and Strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span>,nu,4,shell<span class="token punctuation">]</span> <span class="token operator">|</span> prepend <span class="token punctuation">[</span><span class="token number">0,1</span>,rocks<span class="token punctuation">]</span>
</code></pre></div>`,11);function k(e,m){return t(),p("div",null,[a("h1",l,[d,i,a("code",null,s(e.$frontmatter.title),1)]),a("div",u,s(e.$frontmatter.usage),1),h])}const _=n(c,[["render",k],["__file","prepend.html.vue"]]);export{_ as default};
