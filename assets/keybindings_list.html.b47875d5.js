import{_ as t,o as i,c as d,a as e,t as s,d as n,e as o}from"./app.56e52492.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=n(),h={style:{"white-space":"pre-wrap"}},m=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; keybindings list --modifiers --keycodes --modes --events --edits</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--modifiers</code>: list of modifiers</li><li><code>--keycodes</code>: list of keycodes</li><li><code>--modes</code>: list of edit modes</li><li><code>--events</code>: list of reedline event</li><li><code>--edits</code>: list of edit commands</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get list of key modifiers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list <span class="token parameter variable">-m</span>
</code></pre></div><p>Get list of reedline events and edit commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list <span class="token parameter variable">-e</span> <span class="token parameter variable">-d</span>
</code></pre></div><p>Get list with all the available options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> keybindings list
</code></pre></div>`,11);function g(a,f){return i(),d("div",null,[e("h1",l,[c,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),m])}const _=t(r,[["render",g],["__file","keybindings_list.html.vue"]]);export{_ as default};
