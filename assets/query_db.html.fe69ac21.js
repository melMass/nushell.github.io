import{_ as s,o as r,c as n,a as e,t,d as o,e as d}from"./app.56e52492.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),p={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; query db (SQL)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>SQL</code>: SQL to execute against the database</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Execute SQL against a SQLite database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> query db <span class="token string">&quot;SELECT * FROM Bar&quot;</span>
</code></pre></div>`,7);function _(a,f){return r(),n("div",null,[e("h1",c,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const g=s(i,[["render",_],["__file","query_db.html.vue"]]);export{g as default};
