import{_ as t,o as e,c as o,a,t as s,d as p,e as c}from"./app.56e52492.js";const r={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; max </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Max aggregation for a group by</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">(</span>col b <span class="token operator">|</span> max<span class="token punctuation">)</span>
</code></pre></div>`,5);function k(n,m){return e(),o("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),h])}const g=t(r,[["render",k],["__file","max.html.vue"]]);export{g as default};
