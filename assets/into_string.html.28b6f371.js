import{_ as n,o as t,c as o,a,t as e,d as r,e as p}from"./app.56e52492.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),g={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into string ...rest --decimals</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to string (for table input)</li><li><code>--decimals {int}</code>: decimal digits to which to round</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert integer to string and append three decimal places</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">3</span>
</code></pre></div><p>convert decimal to string and round to nearest integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.7</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">0</span>
</code></pre></div><p>convert decimal to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.7</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">1</span>
</code></pre></div><p>convert decimal to string and limit to 2 decimals</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.734</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">2</span>
</code></pre></div><p>try to convert decimal to string and provide negative decimal points</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.734</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token parameter variable">-2</span>
</code></pre></div><p>convert decimal to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">4.3</span> <span class="token operator">|</span> into string
</code></pre></div><p>convert string to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> into string
</code></pre></div><p>convert boolean to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into string
</code></pre></div><p>convert date to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> into string
</code></pre></div><p>convert filepath to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> Cargo.toml <span class="token operator">|</span> get name <span class="token operator">|</span> into string
</code></pre></div><p>convert filesize to string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> Cargo.toml <span class="token operator">|</span> get size <span class="token operator">|</span> into string
</code></pre></div>`,27);function u(s,m){return t(),o("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",g,e(s.$frontmatter.usage),1),h])}const b=n(c,[["render",u],["__file","into_string.html.vue"]]);export{b as default};
