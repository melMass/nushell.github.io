import{_ as e,o as t,c as o,e as s}from"./app.56e52492.js";const n={},a=s(`<h1 id="shells" tabindex="-1"><a class="header-anchor" href="#shells" aria-hidden="true">#</a> Shells</h1><p>Perhaps a bit unique to Nu is the concept of <code>shells</code>, though the idea of working in multiple places at the same time in a shell is fairly common (via pushd/popd, screen, and more). What perhaps makes Nu a little different is that its <code>shells</code> concept is both multiple platform, and that it works both on the filesystem and inside of values.</p><p><strong>Note:</strong> The concept of a Value Shell is one of the many open design points of Nu and is subject to change in the future.</p><p>A <strong>Shell</strong> is a filesystem-like interface that describes a set of common file operations and how to perform them, including: <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>rm</code>, <code>cp</code>, and <code>mv</code>. Not all shell types support all file operations, but the file operations attempt to describe much of what a shell would want to perform.</p><p>The two types of Shells currently supported are FilesystemShell and ValueShell, though other shells have been discussed.</p><h2 id="filesystem-shell" tabindex="-1"><a class="header-anchor" href="#filesystem-shell" aria-hidden="true">#</a> Filesystem Shell</h2><p>The filesystem shell is the shell that works directly with a filesystem and a corresponding paths. By default, Nu opens with a single filesystem shell in the current working directory.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
   \u2502 name       \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 X \u2502 filesystem \u2502 /home/jonathan
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>We can add a new filesystem shell to this list by using the <code>enter</code> command. This will add a new shell+path combination to our ring buffer of shells.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; enter Source
/home/jonathan/Source&gt; shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 # \u2502   \u2502 name       \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502   \u2502 filesystem \u2502 /home/jonathan
 1 \u2502 X \u2502 filesystem \u2502 /home/jonathan/Source
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>In this way, you can support jumping between working directories. Note that currently Nu doesn&#39;t support jumping between running applications, only working directories.</p><p><strong>Limitations</strong></p><p>There are some limitations of the filesystem shell in its current state of development. One such limitation is that you cannot easily add multiple new paths to the ring buffer at a time (for example: <code>enter $it</code>), as each new addition to the ring buffer will change the current directory. This limitation is not inherent in the design of the ring buffer and a future design may wish to separate <code>enter</code> from the changing of the current working directory.</p><h2 id="value-shell" tabindex="-1"><a class="header-anchor" href="#value-shell" aria-hidden="true">#</a> Value Shell</h2><p>The Value Shell gives you the ability to explore the inside of a structured value by loading a file and treating its contents as if it were a filesystem. This allows you to explore this data through one of the shells in the ring buffer.</p><p>The current implementation of the Value Shell is limited to the read-only subset of file operations, namely: <code>cd</code> and <code>ls</code>. Future designs may wish to explore this further, but there are open design questions around mutating an <code>enter</code>ed file and how the rest of the environment observes these changes (e.g. what happens if you enter the file being used by <code>config</code>?)</p><p>In a Value Shell, the <code>cd</code> command changes the path that is being observed as the &quot;current working directory&quot; in the object, but in actuality is the field path. This means that the path &quot;/abc/def&quot; is the path &quot;abc.def&quot; outside of the Value Shell.</p>`,17),i=[a];function l(h,r){return t(),o("div",null,i)}const c=e(n,[["render",l],["__file","shells.html.vue"]]);export{c as default};
