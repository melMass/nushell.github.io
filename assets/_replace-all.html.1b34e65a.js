import{_ as s,o as r,c as n,a,t,d as c,e as o}from"./app.56e52492.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; replace-all --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abac abac abac<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> replace-all <span class="token parameter variable">-p</span> a <span class="token parameter variable">-r</span> A
</code></pre></div>`,7);function _(e,m){return r(),n("div",null,[a("h1",i,[p,d,a("code",null,t(e.$frontmatter.title),1)]),a("div",h,t(e.$frontmatter.usage),1),u])}const g=s(l,[["render",_],["__file","_replace-all.html.vue"]]);export{g as default};
