import{_ as n,o as t,c as o,a,t as e,d as p,e as l}from"./app.56e52492.js";const r={},c={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ls (pattern) --all --long --short-names --full-paths --du --directory</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the glob pattern to use</li><li><code>--all</code>: Show hidden files</li><li><code>--long</code>: List all available columns for each entry</li><li><code>--short-names</code>: Only print the file names and not the path</li><li><code>--full-paths</code>: display paths as absolute paths</li><li><code>--du</code>: Display the apparent directory size in place of the directory metadata size</li><li><code>--directory</code>: List the specified directory itself instead of its contents</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List all files in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div><p>List all files in a subdirectory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> subdir
</code></pre></div><p>List all files with full path in the parent directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>
</code></pre></div><p>List all rust files</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.rs
</code></pre></div><p>List all files and directories whose name do not contain &#39;bar&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-s</span> <span class="token operator">|</span> where name <span class="token operator">!</span>~ bar
</code></pre></div><p>List all dirs in your home directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> ~ <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span>
</code></pre></div><p>List all dirs in your home directory which have not been modified in 7 days</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-s</span> ~ <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span> <span class="token operator">&amp;&amp;</span> modified <span class="token operator">&lt;</span> <span class="token punctuation">((</span>date now<span class="token punctuation">)</span> - 7day<span class="token punctuation">)</span>
</code></pre></div><p>List given paths, show directories themselves</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;/path/to/directory&#39;</span> <span class="token string">&#39;/path/to/file&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token function">ls</span> <span class="token parameter variable">-D</span> <span class="token variable">$it</span> <span class="token punctuation">}</span> <span class="token operator">|</span> flatten
</code></pre></div>`,21);function g(s,k){return t(),o("div",null,[a("h1",c,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}const m=n(r,[["render",g],["__file","ls.html.vue"]]);export{m as default};
