import{_ as t,o as e,c as p,a as s,t as n,d as o,e as c}from"./app.56e52492.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split-by (splitter)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>splitter</code>: the splitter value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>split items by column named &quot;lang&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&#39;2019&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;andres&#39;</span>, lang: <span class="token string">&#39;rb&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>,
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;jt&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&#39;2021&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;storm&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, <span class="token string">&#39;year&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;2021&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token operator">|</span> split-by lang

</code></pre></div>`,7);function k(a,g){return e(),p("div",null,[s("h1",l,[i,u,s("code",null,n(a.$frontmatter.title),1)]),s("div",d,n(a.$frontmatter.usage),1),h])}const _=t(r,[["render",k],["__file","split-by.html.vue"]]);export{_ as default};
