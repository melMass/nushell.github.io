import{_ as e,o as t,c as p,a as n,t as s,d as o,e as c}from"./app.56e52492.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),k={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; when (when expression) (then expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>when expression</code>: when expression used for matching</li><li><code>then expression</code>: expression that will be applied when predicate is true</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span>
</code></pre></div><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">6</span>
</code></pre></div><p>Create a new column for the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token operator">|</span> into lazy
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span> <span class="token operator">|</span> as c
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span> <span class="token operator">|</span> as d
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> collect
</code></pre></div>`,11);function d(a,m){return t(),p("div",null,[n("h1",l,[u,i,n("code",null,s(a.$frontmatter.title),1)]),n("div",k,s(a.$frontmatter.usage),1),h])}const g=e(r,[["render",d],["__file","when.html.vue"]]);export{g as default};
