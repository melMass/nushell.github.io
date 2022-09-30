import{_ as n,o as t,c as r,a,t as s,d as o,e as p}from"./app.56e52492.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),u={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; group-by (grouper)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>grouper</code>: the grouper value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>group items by column named &quot;type&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> group-by <span class="token builtin class-name">type</span>
</code></pre></div><p>you can also group by raw values by leaving out the argument</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;2&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> group-by
</code></pre></div>`,9);function g(e,m){return t(),r("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",u,s(e.$frontmatter.usage),1),h])}const k=n(c,[["render",g],["__file","group-by.html.vue"]]);export{k as default};
