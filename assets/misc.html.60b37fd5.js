import{_ as e,o as a,c as s,e as n}from"./app.56e52492.js";const o={},t=n(`<h1 id="manage-ssh-passphrases" tabindex="-1"><a class="header-anchor" href="#manage-ssh-passphrases" aria-hidden="true">#</a> Manage SSH passphrases</h1><p><code>eval</code> is not available in nushell, so run:</p><div class="language-text ext-text"><pre class="language-text"><code>ssh-agent -c | lines | first 2 | parse &quot;setenv {name} {value};&quot; | transpose -i -r -d | load-env
</code></pre></div><p>Then <code>ssh-add</code> will enable to only type your SSH passphrase once.</p><h1 id="miscellaneous" tabindex="-1"><a class="header-anchor" href="#miscellaneous" aria-hidden="true">#</a> Miscellaneous</h1><ul><li>To finish or &quot;accept&quot; an autocomplete command, press the right arrow key. This can also be changed by changing the keybindings in the <code>config.nu</code> file.</li></ul>`,6),c=[t];function i(l,r){return a(),s("div",null,c)}const d=e(o,[["render",i],["__file","misc.html.vue"]]);export{d as default};
