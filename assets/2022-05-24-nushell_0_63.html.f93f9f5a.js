import{_ as r,r as l,o as h,c as i,f as a,a as t,b as n,d as e,e as s}from"./app.56e52492.js";const d={},c=t("h1",{id:"nushell-0-63",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-63","aria-hidden":"true"},"#"),e(" Nushell 0.63")],-1),_=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing version 0.63 of Nu. This release is the first to include the 'overlays' feature, hooks, lazy dataframes, and more.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f=e("Nu 0.63 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.63.0",target:"_blank",rel:"noopener noreferrer"},m=e("pre-built binaries"),b=e(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},y=e("crates.io"),v=e(". If you have Rust installed you can install it using "),w=t("code",null,"cargo install nu",-1),x=e("."),A=s(`<p>If you want all the built-in goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="overlays-kubouch" tabindex="-1"><a class="header-anchor" href="#overlays-kubouch" aria-hidden="true">#</a> Overlays (kubouch)</h2><p>We&#39;ve added a new concept into this release that merges a few of our previous design ideas together: overlays. You can think of overlays like layers in a paint program. They work together to give you a set of commands, environment variables, and more that you can turn on and off as needed.</p><p>For example, we can create an overlay to work in:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero) &gt; module code { export env BAZ { &quot;baz&quot; } }
(zero) &gt; overlay add code
(code) &gt; $env.BAZ
baz
(code) &gt; let-env BAGR = &quot;bagr&quot;
(code) &gt; $env.BAGR
bagr
(code) &gt; overlay remove code
(zero) &gt; # environment back to what we started with
</code></pre></div><p>Just like layers in a paint program, changes you make (like the update to the environment above) are part of the layer. You can use <code>--keep-custom</code> to keep the changes you have made even after you hide the overlay. Using <code>add</code> and <code>remove</code> are effectively like <code>show</code> and <code>hide</code>, allowing you to quickly switch into a new context, do some work, and switch out with little effort.</p><h2 id="hooks-jt" tabindex="-1"><a class="header-anchor" href="#hooks-jt" aria-hidden="true">#</a> Hooks (jt)</h2><p>Starting with 0.63, you can now set up hooks that will run code under certain conditions. These hooks run after your code has finished evaluating.</p><p>Let&#39;s look first at how to set up the hooks, and then see what the hooks output. To set up a hook, you pick the kind of hook and then configure a block of code to run when that hook fires:</p><div class="language-text ext-text"><pre class="language-text"><code>hooks: {
    pre_prompt: [{
        print &quot;pre_prompt hook&quot;
    }]
    pre_execution: [{
        print &quot;pre_execution hook&quot;
    }]
    env_change: {
        PWD: [{|before, after|
            print $&quot;PWD environment variable changed from ($before) to ($after)&quot;
        }]
    }
}
</code></pre></div><p>Using this example, we can watch the hooks fire:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jt/Source/nushell\u3009cd ..
pre_execution hook
pre_prompt hook
PWD environment variable changed from /home/jt/Source/nushell to /home/jt/Source
/home/jt/Source\u3009
</code></pre></div><p>Used together with the &quot;overlays&quot; feature above, we hope to open up the possibility for a lot of powerful interactions with the shell while still keeping the workflow that makes Nushell special.</p><h2 id="lazy-dataframe-support-elferherrera" tabindex="-1"><a class="header-anchor" href="#lazy-dataframe-support-elferherrera" aria-hidden="true">#</a> Lazy dataframe support (elferherrera)</h2><p>We are starting to support a new way to query dataframes by using lazyframes. This new concept will allow users to build logical plans for the data operations which will result in a reduction of the dataframe processing time.</p><p>Lazy dataframes are accessed through the same <code>dfr</code> command and give you a way to build up a pipeline to execute in a more optimal way than the previous eager dataframes. For example, you can perform your aggregations and group-bys lazily, and then work on the results instead of paying for the processing time of having two separate steps.</p><h1 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h1><ul><li>(Returned from the engine rewrite) <code>histogram</code> for checking distributions right inside nushell (WindSoilder)</li><li><code>config nu</code> and <code>config env</code> to easily edit your nushell configuration files with your editor of choice (Kangaxx-0/vFrankZhang)</li><li><code>str title-case</code> (krober)<div class="language-text ext-text"><pre class="language-text"><code>&gt; &#39;this is a test case&#39; | str title-case
This Is A Test Case
</code></pre></div></li><li>Many new <code>db</code> subcommands (elferherrera)</li></ul><h1 id="quality-of-life-improvements" tabindex="-1"><a class="header-anchor" href="#quality-of-life-improvements" aria-hidden="true">#</a> Quality-of-life Improvements</h1>`,21),z=e("More commands contain additional search terms to find them if you don't remember their exact name. (victormanueltn, LawlietLi) This is a great way to help out by contributing! More information can be found "),q={href:"https://github.com/nushell/nushell/issues/5093",target:"_blank",rel:"noopener noreferrer"},T=e("here"),N=e("."),C=s(`<li><p><code>print -n</code> option to print output without an additional new-line (fdncred)</p></li><li><p><code>flatten</code> now has a more consistent behavior for nested records and tables. (WindSoilder) This now more closely matches the pre-0.60 flatten, and should help create more predictable output.</p></li><li><p>We now support octal binary literals <code>0o[777]</code> similar to the hexadecimal <code>0x[FF]</code> and binary <code>0b[11111111]</code> literals (toffaletti)</p></li><li><p><code>cd</code> accepts abreviation of paths to quickly jump to nested directories based on unique prefixes (fdncred)</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $env.PWD
~/some/path
&gt; cd d/s/9
&gt; $env.PWD
~/some/path/deep/space/9
</code></pre></div></li><li><p>Various improvements make the completions feel more polished (herlon214, PurityLake)</p></li><li><p>If <code>$config.buffer_editor</code> is not set rely on the <code>$env.EDITOR</code> and <code>$env.VISUAL</code> environment variables to find a text editor to edit longer pipelines or your <code>config ...</code> (Kangaxx-0/vFrankZhang, sholderbach)</p></li><li><p>When invoking <code>nu</code> to run a script you can now pass the <code>--config</code> flag to load your <code>config.nu</code> and have the definitions available when running the script (WindSoilder)</p></li><li><p>Similarly you can change the table appearance with the <code>--table-mode</code> flag when invoking <code>nu</code> (fdncred)</p></li>`,8),F=s('<p><strong>Note:</strong> this is a shortened list. For the full list, see the &quot;Changelog&quot; section below</p><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><h2 id="changed-default-keybindings" tabindex="-1"><a class="header-anchor" href="#changed-default-keybindings" aria-hidden="true">#</a> Changed default keybindings:</h2><table><thead><tr><th>Old binding</th><th>New binding</th><th>Action</th><th>Reason for the change</th></tr></thead><tbody><tr><td><code>Ctrl-x</code></td><td><code>Ctrl-r</code></td><td>Visual history search menu</td><td>We replaced the simple history search (previously bound to <code>Ctrl-r</code>, <code>cmd: SearchHistory</code>) with the menu that supports previewing several entries at once for quick navigation</td></tr><tr><td><code>Ctrl-q</code></td><td><code>F1</code></td><td>Interactive help menu</td><td><code>F1</code> is generally the convention for help information, with this menu you can search for commands browse through their documentation and pick examples to include/run</td></tr></tbody></table><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>Here are a few of the things we&#39;re working on:</p><p>SQLite based history. This will maintain a larger number of entries that can searched using date, usage or text.</p><p>Input/output types. These will allow commands to be specialized based on the input they&#39;re given as we well as allow the typechecker to check that commands can connect on the pipeline together.</p><p>And more - we&#39;re still looking ahead to IDE support, better database support, and more.</p><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><h2 id="nushell" tabindex="-1"><a class="header-anchor" href="#nushell" aria-hidden="true">#</a> Nushell</h2>',11),D=e("kubouch created "),I={href:"https://github.com/nushell/nushell/pull/5629",target:"_blank",rel:"noopener noreferrer"},S=e("Overlay keep"),j=e(", and "),L={href:"https://github.com/nushell/nushell/pull/5478",target:"_blank",rel:"noopener noreferrer"},U=e("Add Nushell REPL simulator; Fix bug in overlay add"),R=e(", and created "),W={href:"https://github.com/nushell/nushell/pull/5375",target:"_blank",rel:"noopener noreferrer"},E=e("Overlays"),M=e("jt created "),P={href:"https://github.com/nushell/nushell/pull/5627",target:"_blank",rel:"noopener noreferrer"},$=e("Bump to 0.63"),B=e(", and "),V={href:"https://github.com/nushell/nushell/pull/5600",target:"_blank",rel:"noopener noreferrer"},O=e("Add environment change hook"),H=e(", and "),K={href:"https://github.com/nushell/nushell/pull/5561",target:"_blank",rel:"noopener noreferrer"},Z=e('Revert "Try to do less work during capture discovery"'),J=e(", and "),Y={href:"https://github.com/nushell/nushell/pull/5560",target:"_blank",rel:"noopener noreferrer"},G=e("Try to do less work during capture discovery"),Q=e(", and "),X={href:"https://github.com/nushell/nushell/pull/5549",target:"_blank",rel:"noopener noreferrer"},ee=e("Try removing debuginfo for ci builds"),te=e(", and "),oe={href:"https://github.com/nushell/nushell/pull/5480",target:"_blank",rel:"noopener noreferrer"},ne=e("Allow hooks to be lists of blocks"),se=e(", and "),re={href:"https://github.com/nushell/nushell/pull/5479",target:"_blank",rel:"noopener noreferrer"},le=e("Add hooks to cli/repl"),he=e(", and "),ie={href:"https://github.com/nushell/nushell/pull/5473",target:"_blank",rel:"noopener noreferrer"},ae=e("Bump to the 0.62.1 dev version"),de=e("sholderbach created "),ce={href:"https://github.com/nushell/nushell/pull/5620",target:"_blank",rel:"noopener noreferrer"},_e=e("Pin reedline v0.6.0 for the nushell v0.63.0 release"),ue=e(", and "),pe={href:"https://github.com/nushell/nushell/pull/5616",target:"_blank",rel:"noopener noreferrer"},fe=e("Add meta command for the config subcommands"),ge=e(", and "),me={href:"https://github.com/nushell/nushell/pull/5614",target:"_blank",rel:"noopener noreferrer"},be=e("Fallback for "),ke=t("code",null,"config.buffer_editor",-1),ye=e(" from "),ve=t("code",null,"EDITOR",-1),we=e(", and "),xe={href:"https://github.com/nushell/nushell/pull/5599",target:"_blank",rel:"noopener noreferrer"},Ae=e("Refer to the span of "),ze=t("code",null,"error make",-1),qe=e(" if not given"),Te=e(", and "),Ne={href:"https://github.com/nushell/nushell/pull/5598",target:"_blank",rel:"noopener noreferrer"},Ce=e("Use bleeding edge reedline, with fix for #5593"),Fe=e(", and "),De={href:"https://github.com/nushell/nushell/pull/5588",target:"_blank",rel:"noopener noreferrer"},Ie=e("Change miette theme based on ANSI config"),Se=e(", and "),je={href:"https://github.com/nushell/nushell/pull/5587",target:"_blank",rel:"noopener noreferrer"},Le=e("Use effectively unlimited history size if not set"),Ue=e(", and "),Re={href:"https://github.com/nushell/nushell/pull/5510",target:"_blank",rel:"noopener noreferrer"},We=e("Move help menu to canonical "),Ee=t("code",null,"F1",-1),Me=e(" binding"),Pe=e("WindSoilder created "),$e={href:"https://github.com/nushell/nushell/pull/5619",target:"_blank",rel:"noopener noreferrer"},Be=e("fix date format"),Ve=e(", and "),Oe={href:"https://github.com/nushell/nushell/pull/5618",target:"_blank",rel:"noopener noreferrer"},He=e("load config when requried"),Ke=e(", and "),Ze={href:"https://github.com/nushell/nushell/pull/5611",target:"_blank",rel:"noopener noreferrer"},Je=e("Make flatten works better and predictable"),Ye=e(", and "),Ge={href:"https://github.com/nushell/nushell/pull/5606",target:"_blank",rel:"noopener noreferrer"},Qe=e("adjust flatten default behavior"),Xe=e(", and "),et={href:"https://github.com/nushell/nushell/pull/5590",target:"_blank",rel:"noopener noreferrer"},tt=e("Don't report error when cwd is not exists."),ot=e(", and "),nt={href:"https://github.com/nushell/nushell/pull/5584",target:"_blank",rel:"noopener noreferrer"},st=e("Fix flatten behavior"),rt=e(", and "),lt={href:"https://github.com/nushell/nushell/pull/5583",target:"_blank",rel:"noopener noreferrer"},ht=e("add quantile column in histogram "),it=e(", and "),at={href:"https://github.com/nushell/nushell/pull/5577",target:"_blank",rel:"noopener noreferrer"},dt=e("fix select tests"),ct=e(", and "),_t={href:"https://github.com/nushell/nushell/pull/5576",target:"_blank",rel:"noopener noreferrer"},ut=e("fix move test"),pt=e(", and "),ft={href:"https://github.com/nushell/nushell/pull/5570",target:"_blank",rel:"noopener noreferrer"},gt=e("Make format support nested column and use variable"),mt=e(", and "),bt={href:"https://github.com/nushell/nushell/pull/5553",target:"_blank",rel:"noopener noreferrer"},kt=e("use reverse iter on value search"),yt=e(", and "),vt={href:"https://github.com/nushell/nushell/pull/5541",target:"_blank",rel:"noopener noreferrer"},wt=e("Fix Value::Record compare logic, and pass uniq tests."),xt=e(", and "),At={href:"https://github.com/nushell/nushell/pull/5536",target:"_blank",rel:"noopener noreferrer"},zt=e("fix zip test"),qt=e(", and "),Tt={href:"https://github.com/nushell/nushell/pull/5534",target:"_blank",rel:"noopener noreferrer"},Nt=e("add rename"),Ct=e(", and "),Ft={href:"https://github.com/nushell/nushell/pull/5518",target:"_blank",rel:"noopener noreferrer"},Dt=e("Implement histogram command"),It=e(", and "),St={href:"https://github.com/nushell/nushell/pull/5502",target:"_blank",rel:"noopener noreferrer"},jt=e("keep metadata while format filesize"),Lt=e(", and "),Ut={href:"https://github.com/nushell/nushell/pull/5498",target:"_blank",rel:"noopener noreferrer"},Rt=e("add format filesize"),Wt=e(", and "),Et={href:"https://github.com/nushell/nushell/pull/5464",target:"_blank",rel:"noopener noreferrer"},Mt=e("complete some commands tests"),Pt=e(", and "),$t={href:"https://github.com/nushell/nushell/pull/5461",target:"_blank",rel:"noopener noreferrer"},Bt=e("Document out positional argument type in help message"),Vt=e(", and created "),Ot={href:"https://github.com/nushell/nushell/pull/5454",target:"_blank",rel:"noopener noreferrer"},Ht=e("make cd recornize symblic link"),Kt=e(", and "),Zt={href:"https://github.com/nushell/nushell/pull/5453",target:"_blank",rel:"noopener noreferrer"},Jt=e("implement seq char command to generate single character sequence"),Yt=e("hustcer created "),Gt={href:"https://github.com/nushell/nushell/pull/5610",target:"_blank",rel:"noopener noreferrer"},Qt=e("fix typo for "),Xt=t("code",null,"version",-1),eo=e(" command"),to=e(", and "),oo={href:"https://github.com/nushell/nushell/pull/5594",target:"_blank",rel:"noopener noreferrer"},no=e("Fix #5578, assume pipe file be zero-sized"),so=e(", and "),ro={href:"https://github.com/nushell/nushell/pull/5511",target:"_blank",rel:"noopener noreferrer"},lo=e("feat: add "),ho=t("code",null,"tutor list",-1),io=e(" support, remove tutor "),ao=t("code",null,"engine-q",-1),co=e(", fix: #4950"),_o=e(", and "),uo={href:"https://github.com/nushell/nushell/pull/5501",target:"_blank",rel:"noopener noreferrer"},po=e("Fix #3899, make "),fo=t("code",null,"mv",-1),go=e(" and "),mo=t("code",null,"rm",-1),bo=e(" to be quiet by default"),ko=e(", and "),yo={href:"https://github.com/nushell/nushell/pull/5500",target:"_blank",rel:"noopener noreferrer"},vo=e("opt: improve ls by call get_file_type only one time"),wo=e(", and "),xo={href:"https://github.com/nushell/nushell/pull/5494",target:"_blank",rel:"noopener noreferrer"},Ao=e("Improve #4975 of filtering "),zo=t("code",null,"ls",-1),qo=e(" output by size issue"),To=e(", and "),No={href:"https://github.com/nushell/nushell/pull/5485",target:"_blank",rel:"noopener noreferrer"},Co=e("Fix #5469, making $nothing or null convert to filesize of 0B"),Fo=e(", and "),Do={href:"https://github.com/nushell/nushell/pull/5483",target:"_blank",rel:"noopener noreferrer"},Io=e("Fix "),So=t("code",null,"to csv",-1),jo=e(" and "),Lo=t("code",null,"to tsv",-1),Uo=e(" for simple list, close: #4780"),Ro=e(", and "),Wo={href:"https://github.com/nushell/nushell/pull/5467",target:"_blank",rel:"noopener noreferrer"},Eo=e("feat: add disable field type inferencing for "),Mo=t("code",null,"from csv",-1),Po=e(" and "),$o=t("code",null,"from tsv",-1),Bo=e(", fix: #3485 and #4217"),Vo=e("merelymyself created "),Oo={href:"https://github.com/nushell/nushell/pull/5609",target:"_blank",rel:"noopener noreferrer"},Ho=e("Allow for test_iteration_errors to work when run as root"),Ko=e(", and "),Zo={href:"https://github.com/nushell/nushell/pull/5601",target:"_blank",rel:"noopener noreferrer"},Jo=e("Allows the test "),Yo=t("code",null,"commands::ls::fails_with_ls_to_dir_without_permission",-1),Go=e(" to work when run as root"),Qo=e(", and "),Xo={href:"https://github.com/nushell/nushell/pull/5579",target:"_blank",rel:"noopener noreferrer"},en=e("Allowing for flags with '=' in them to register as flags."),tn=e(", and "),on={href:"https://github.com/nushell/nushell/pull/5493",target:"_blank",rel:"noopener noreferrer"},nn=e("Adds fix for when multiple flags are in one line."),sn=e(", and created "),rn={href:"https://github.com/nushell/nushell/pull/5447",target:"_blank",rel:"noopener noreferrer"},ln=e("Fixing the flag issue"),hn=e(", and "),an={href:"https://github.com/nushell/nushell/pull/5446",target:"_blank",rel:"noopener noreferrer"},dn=e("Adds flags and optional arguments to view-source"),cn=e("Kangaxx-0 created "),_n={href:"https://github.com/nushell/nushell/pull/5607",target:"_blank",rel:"noopener noreferrer"},un=e("Add config command"),pn=e(", and "),fn={href:"https://github.com/nushell/nushell/pull/5512",target:"_blank",rel:"noopener noreferrer"},gn=e("Add verbose"),mn=e(", and "),bn={href:"https://github.com/nushell/nushell/pull/5482",target:"_blank",rel:"noopener noreferrer"},kn=e("Add feedback to cp"),yn=e("toffaletti created "),vn={href:"https://github.com/nushell/nushell/pull/5604",target:"_blank",rel:"noopener noreferrer"},wn=e("Add octal binary literals"),xn=e("victormanueltn created "),An={href:"https://github.com/nushell/nushell/pull/5603",target:"_blank",rel:"noopener noreferrer"},zn=e("Add search term to str substring command."),qn=e(", and "),Tn={href:"https://github.com/nushell/nushell/pull/5557",target:"_blank",rel:"noopener noreferrer"},Nn=e("Add search terms to build-string command."),Cn=e("LawlietLi created "),Fn={href:"https://github.com/nushell/nushell/pull/5602",target:"_blank",rel:"noopener noreferrer"},Dn=e("feat: add search terms to network"),In=e("IanManske created "),Sn={href:"https://github.com/nushell/nushell/pull/5581",target:"_blank",rel:"noopener noreferrer"},jn=e("Fix help menu panic."),Ln=e("jaeheonji created "),Un={href:"https://github.com/nushell/nushell/pull/5575",target:"_blank",rel:"noopener noreferrer"},Rn=e("feat: apply the "),Wn=t("code",null,"--numbered",-1),En=e(" option to acc in "),Mn=t("code",null,"reduce",-1),Pn=e(" command."),$n=e("krober created "),Bn={href:"https://github.com/nushell/nushell/pull/5573",target:"_blank",rel:"noopener noreferrer"},Vn=e("Add str title-case"),On=e(", and "),Hn={href:"https://github.com/nushell/nushell/pull/5572",target:"_blank",rel:"noopener noreferrer"},Kn=e("Str casings reorganization & description updates"),Zn=e("fdncred created "),Jn={href:"https://github.com/nushell/nushell/pull/5569",target:"_blank",rel:"noopener noreferrer"},Yn=e("move items to showcase"),Gn=e(", and "),Qn={href:"https://github.com/nushell/nushell/pull/5567",target:"_blank",rel:"noopener noreferrer"},Xn=e("refactor all write_alls to ensure flushing"),es=e(", and "),ts={href:"https://github.com/nushell/nushell/pull/5566",target:"_blank",rel:"noopener noreferrer"},os=e("make print flush"),ns=e(", and "),ss={href:"https://github.com/nushell/nushell/pull/5555",target:"_blank",rel:"noopener noreferrer"},rs=e("table refactor for readability"),ls=e(", and "),hs={href:"https://github.com/nushell/nushell/pull/5520",target:"_blank",rel:"noopener noreferrer"},is=e("add the ability to change table mode when running script"),as=e(", and "),ds={href:"https://github.com/nushell/nushell/pull/5513",target:"_blank",rel:"noopener noreferrer"},cs=e("add "),_s=t("code",null,"--table_mode",-1),us=e(),ps=t("code",null,"-m",-1),fs=e(" parameter"),gs=e(", and "),ms={href:"https://github.com/nushell/nushell/pull/5503",target:"_blank",rel:"noopener noreferrer"},bs=e("refactor for legibility"),ks=e(", and "),ys={href:"https://github.com/nushell/nushell/pull/5491",target:"_blank",rel:"noopener noreferrer"},vs=e("adjust where prompt markers go"),ws=e(", and "),xs={href:"https://github.com/nushell/nushell/pull/5458",target:"_blank",rel:"noopener noreferrer"},As=e("add -n flag to print to print without a newline"),zs=e(", and "),qs={href:"https://github.com/nushell/nushell/pull/5452",target:"_blank",rel:"noopener noreferrer"},Ts=e("enable cd to work with directory abbreviations"),Ns=e(", and "),Cs={href:"https://github.com/nushell/nushell/pull/5450",target:"_blank",rel:"noopener noreferrer"},Fs=e("fix bug in shell_integration"),Ds=e("rgwood created "),Is={href:"https://github.com/nushell/nushell/pull/5568",target:"_blank",rel:"noopener noreferrer"},Ss=e('Revert "Enable backtraces by default (#5562)"'),js=e(", and "),Ls={href:"https://github.com/nushell/nushell/pull/5563",target:"_blank",rel:"noopener noreferrer"},Us=e("Upgrade trash dependency"),Rs=e(", and "),Ws={href:"https://github.com/nushell/nushell/pull/5562",target:"_blank",rel:"noopener noreferrer"},Es=e("Enable backtraces by default"),Ms=e(", and "),Ps={href:"https://github.com/nushell/nushell/pull/5556",target:"_blank",rel:"noopener noreferrer"},$s=e("Remove doctests CI action"),Bs=e(", and "),Vs={href:"https://github.com/nushell/nushell/pull/5550",target:"_blank",rel:"noopener noreferrer"},Os=e("CI: bust caches"),Hs=e(", and "),Ks={href:"https://github.com/nushell/nushell/pull/5548",target:"_blank",rel:"noopener noreferrer"},Zs=e("Look up git commit hash ourselves, drop libgit2 dependency"),Js=e(", and "),Ys={href:"https://github.com/nushell/nushell/pull/5527",target:"_blank",rel:"noopener noreferrer"},Gs=e("More CI work"),Qs=e(", and "),Xs={href:"https://github.com/nushell/nushell/pull/5507",target:"_blank",rel:"noopener noreferrer"},er=e("Change history menu keybinding from ctrl+x to ctrl+r"),tr=e(", and "),or={href:"https://github.com/nushell/nushell/pull/5489",target:"_blank",rel:"noopener noreferrer"},nr=e("Enable converting dates to ints"),sr=e(", and "),rr={href:"https://github.com/nushell/nushell/pull/5488",target:"_blank",rel:"noopener noreferrer"},lr=e("Parse timestamps as UTC by default"),hr=e(", and "),ir={href:"https://github.com/nushell/nushell/pull/5487",target:"_blank",rel:"noopener noreferrer"},ar=e("Display range values better"),dr=e(", and "),cr={href:"https://github.com/nushell/nushell/pull/5484",target:"_blank",rel:"noopener noreferrer"},_r=e("Handle int input in "),ur=t("code",null,"into datetime",-1),pr=e(", and "),fr={href:"https://github.com/nushell/nushell/pull/5463",target:"_blank",rel:"noopener noreferrer"},gr=e("Enable string interpolation for environment shorthand"),mr=e("efugier created "),br={href:"https://github.com/nushell/nushell/pull/5564",target:"_blank",rel:"noopener noreferrer"},kr=e("feat(errors): more explicit module_or_overlay_not_found_error help me\u2026"),yr=e("ocitrev created "),vr={href:"https://github.com/nushell/nushell/pull/5554",target:"_blank",rel:"noopener noreferrer"},wr=e("Sync resources version"),xr=e("elferherrera created "),Ar={href:"https://github.com/nushell/nushell/pull/5546",target:"_blank",rel:"noopener noreferrer"},zr=e("Lazy dataframes"),qr=e(", and "),Tr={href:"https://github.com/nushell/nushell/pull/5477",target:"_blank",rel:"noopener noreferrer"},Nr=e("join and from derived tables"),Cr=e(", and "),Fr={href:"https://github.com/nushell/nushell/pull/5466",target:"_blank",rel:"noopener noreferrer"},Dr=e("Database commands"),Ir=e("herlon214 created "),Sr={href:"https://github.com/nushell/nushell/pull/5543",target:"_blank",rel:"noopener noreferrer"},jr=e("nu-cli/completions: add custom completion test"),Lr=e(", and "),Ur={href:"https://github.com/nushell/nushell/pull/5537",target:"_blank",rel:"noopener noreferrer"},Rr=e("nu-glob: add fs::symlink_metadata to detect broken symlinks"),Wr=e(", and "),Er={href:"https://github.com/nushell/nushell/pull/5524",target:"_blank",rel:"noopener noreferrer"},Mr=e("nu-command/filesystem: fix rm .sock file"),Pr=e(", and "),$r={href:"https://github.com/nushell/nushell/pull/5506",target:"_blank",rel:"noopener noreferrer"},Br=e("nu-cli/completions: verify case for matching dir, .nu, file and command"),Vr=e(", and "),Or={href:"https://github.com/nushell/nushell/pull/5504",target:"_blank",rel:"noopener noreferrer"},Hr=e("nu-cli/completions: add variable completions test + refactor tests"),Kr=e(", and "),Zr={href:"https://github.com/nushell/nushell/pull/5468",target:"_blank",rel:"noopener noreferrer"},Jr=e("nu-cli/completions: add tests for flag completions"),Yr=e(", and "),Gr={href:"https://github.com/nushell/nushell/pull/5460",target:"_blank",rel:"noopener noreferrer"},Qr=e("nu-cli/completions: add tests for dotnu completions"),Xr=e(", and "),el={href:"https://github.com/nushell/nushell/pull/5459",target:"_blank",rel:"noopener noreferrer"},tl=e("nu-cli/completions: send original line to custom completer"),ol=e("njbull4 created "),nl={href:"https://github.com/nushell/nushell/pull/5523",target:"_blank",rel:"noopener noreferrer"},sl=e("cp, mv, and rm commands need to support -i flag"),rl=e("CozyPenguin created "),ll={href:"https://github.com/nushell/nushell/pull/5514",target:"_blank",rel:"noopener noreferrer"},hl=e("bump umask crate to 2.0.0"),il=e("jmoore34 created "),al={href:"https://github.com/nushell/nushell/pull/5496",target:"_blank",rel:"noopener noreferrer"},dl=e("Update comment in default_config.nu [skip ci]"),cl=e("pejato created "),_l={href:"https://github.com/nushell/nushell/pull/5490",target:"_blank",rel:"noopener noreferrer"},ul=e('Make $nothing | into string == ""'),pl=e("onthebridgetonowhere created "),fl={href:"https://github.com/nushell/nushell/pull/5462",target:"_blank",rel:"noopener noreferrer"},gl=e("Fix cp bug"),ml=e("PurityLake created "),bl={href:"https://github.com/nushell/nushell/pull/5440",target:"_blank",rel:"noopener noreferrer"},kl=e("Made a change to completion resolution order"),yl=e("gipsyh created "),vl={href:"https://github.com/nushell/nushell/pull/5434",target:"_blank",rel:"noopener noreferrer"},wl=e("Add split number flag in "),xl=t("code",null,"split row",-1),Al=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),zl=e("sholderbach created "),ql={href:"https://github.com/nushell/nushell.github.io/pull/446",target:"_blank",rel:"noopener noreferrer"},Tl=e("Remove outdated reference to "),Nl=t("code",null,"open",-1),Cl=e(" pager"),Fl=e(", and "),Dl={href:"https://github.com/nushell/nushell.github.io/pull/445",target:"_blank",rel:"noopener noreferrer"},Il=e("Document the octal binary literals"),Sl=e(", and "),jl={href:"https://github.com/nushell/nushell.github.io/pull/434",target:"_blank",rel:"noopener noreferrer"},Ll=e("Mention default values for command parameters."),Ul=e("unional created "),Rl={href:"https://github.com/nushell/nushell.github.io/pull/444",target:"_blank",rel:"noopener noreferrer"},Wl=e("docs: add "),El=t("code",null,"pwd",-1),Ml=e(" to "),Pl=t("code",null,"coming_from_bash.md",-1),$l=e("hustcer created "),Bl={href:"https://github.com/nushell/nushell.github.io/pull/443",target:"_blank",rel:"noopener noreferrer"},Vl=e("Update zh-CN home page and keep the Chinese and English docs in sync"),Ol=e(", and "),Hl={href:"https://github.com/nushell/nushell.github.io/pull/442",target:"_blank",rel:"noopener noreferrer"},Kl=e("Update some zh-CN translations from commit: 008c89fc26"),Zl=e(", and "),Jl={href:"https://github.com/nushell/nushell.github.io/pull/438",target:"_blank",rel:"noopener noreferrer"},Yl=e("Update some zh-CN translatons from commit: 6f61fadb69"),Gl=e("rgwood created "),Ql={href:"https://github.com/nushell/nushell.github.io/pull/441",target:"_blank",rel:"noopener noreferrer"},Xl=e("Update front page"),eh=e("mdmundo created "),th={href:"https://github.com/nushell/nushell.github.io/pull/440",target:"_blank",rel:"noopener noreferrer"},oh=e("Update windows_terminal_default_shell.sh"),nh=e("kubouch created "),sh={href:"https://github.com/nushell/nushell.github.io/pull/439",target:"_blank",rel:"noopener noreferrer"},rh=e("Add env.nu to env conversions section"),lh=e(", and "),hh={href:"https://github.com/nushell/nushell.github.io/pull/437",target:"_blank",rel:"noopener noreferrer"},ih=e("Document config as environment variable"),ah=e("TaKO8Ki created "),dh={href:"https://github.com/nushell/nushell.github.io/pull/436",target:"_blank",rel:"noopener noreferrer"},ch=e("Translate "),_h=t("code",null,"/ja/README.md",-1),uh=e(" to Japanese"),ph=e("flying-sheep created "),fh={href:"https://github.com/nushell/nushell.github.io/pull/435",target:"_blank",rel:"noopener noreferrer"},gh=e("Document $in"),mh=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),bh=e("thibran created "),kh={href:"https://github.com/nushell/nu_scripts/pull/229",target:"_blank",rel:"noopener noreferrer"},yh=e("Misc tools"),vh=e("Suyashtnt created "),wh={href:"https://github.com/nushell/nu_scripts/pull/228",target:"_blank",rel:"noopener noreferrer"},xh=e("feat(custom-completions): add yarn completion"),Ah=e("jntrnr created "),zh={href:"https://github.com/nushell/nu_scripts/pull/227",target:"_blank",rel:"noopener noreferrer"},qh=e("update nu weekly script"),Th=e("fdncred created "),Nh={href:"https://github.com/nushell/nu_scripts/pull/226",target:"_blank",rel:"noopener noreferrer"},Ch=e("add html colors"),Fh=e(", and "),Dh={href:"https://github.com/nushell/nu_scripts/pull/224",target:"_blank",rel:"noopener noreferrer"},Ih=e("add progress bar examples + some benchmarks"),Sh=e(", and "),jh={href:"https://github.com/nushell/nu_scripts/pull/220",target:"_blank",rel:"noopener noreferrer"},Lh=e("help with pr"),Uh=e(", and "),Rh={href:"https://github.com/nushell/nu_scripts/pull/215",target:"_blank",rel:"noopener noreferrer"},Wh=e("remove title because it breaks kitty"),Eh=e("Yethal created "),Mh={href:"https://github.com/nushell/nu_scripts/pull/225",target:"_blank",rel:"noopener noreferrer"},Ph=e("Update remoting.nu"),$h=e(", and "),Bh={href:"https://github.com/nushell/nu_scripts/pull/222",target:"_blank",rel:"noopener noreferrer"},Vh=e("Added remoting.nu"),Oh=e("Jacobious52 created "),Hh={href:"https://github.com/nushell/nu_scripts/pull/223",target:"_blank",rel:"noopener noreferrer"},Kh=e("Auto generation completion help parser"),Zh=e("kurokirasama created "),Jh={href:"https://github.com/nushell/nu_scripts/pull/217",target:"_blank",rel:"noopener noreferrer"},Yh=e("added maths, defs and weather scripts"),Gh=e("drbrain created "),Qh={href:"https://github.com/nushell/nu_scripts/pull/216",target:"_blank",rel:"noopener noreferrer"},Xh=e("Allow relative entries in CDPATH"),ei=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),ti=e("sholderbach created "),oi={href:"https://github.com/nushell/reedline/pull/430",target:"_blank",rel:"noopener noreferrer"},ni=e("Prepare the v0.6.0 release"),si=e(", and "),ri={href:"https://github.com/nushell/reedline/pull/427",target:"_blank",rel:"noopener noreferrer"},li=e("Do not allocate eagerly for full history capacity"),hi=e(", and "),ii={href:"https://github.com/nushell/reedline/pull/424",target:"_blank",rel:"noopener noreferrer"},ai=e("Start developer documentation"),di=e("petrisch created "),ci={href:"https://github.com/nushell/reedline/pull/429",target:"_blank",rel:"noopener noreferrer"},_i=e("Typo"),ui=e("ahkrr created "),pi={href:"https://github.com/nushell/reedline/pull/428",target:"_blank",rel:"noopener noreferrer"},fi=e("fix: list_menu not accounting for index + indicator"),gi=e("sadmac7000 created "),mi={href:"https://github.com/nushell/reedline/pull/425",target:"_blank",rel:"noopener noreferrer"},bi=e("Fix vi-mode word motions"),ki=e("DhruvDh created "),yi={href:"https://github.com/nushell/reedline/pull/402",target:"_blank",rel:"noopener noreferrer"},vi=e("Use a default terminal size if reported terminal size is 0, 0");function wi(xi,Ai){const o=l("ExternalLinkIcon");return h(),i("div",null,[c,_,u,a(" more "),p,t("p",null,[f,t("a",g,[m,n(o)]),b,t("a",k,[y,n(o)]),v,w,x]),A,t("ul",null,[t("li",null,[t("p",null,[z,t("a",q,[T,n(o)]),N])]),C]),F,t("ul",null,[t("li",null,[D,t("a",I,[S,n(o)]),j,t("a",L,[U,n(o)]),R,t("a",W,[E,n(o)])]),t("li",null,[M,t("a",P,[$,n(o)]),B,t("a",V,[O,n(o)]),H,t("a",K,[Z,n(o)]),J,t("a",Y,[G,n(o)]),Q,t("a",X,[ee,n(o)]),te,t("a",oe,[ne,n(o)]),se,t("a",re,[le,n(o)]),he,t("a",ie,[ae,n(o)])]),t("li",null,[de,t("a",ce,[_e,n(o)]),ue,t("a",pe,[fe,n(o)]),ge,t("a",me,[be,ke,ye,ve,n(o)]),we,t("a",xe,[Ae,ze,qe,n(o)]),Te,t("a",Ne,[Ce,n(o)]),Fe,t("a",De,[Ie,n(o)]),Se,t("a",je,[Le,n(o)]),Ue,t("a",Re,[We,Ee,Me,n(o)])]),t("li",null,[Pe,t("a",$e,[Be,n(o)]),Ve,t("a",Oe,[He,n(o)]),Ke,t("a",Ze,[Je,n(o)]),Ye,t("a",Ge,[Qe,n(o)]),Xe,t("a",et,[tt,n(o)]),ot,t("a",nt,[st,n(o)]),rt,t("a",lt,[ht,n(o)]),it,t("a",at,[dt,n(o)]),ct,t("a",_t,[ut,n(o)]),pt,t("a",ft,[gt,n(o)]),mt,t("a",bt,[kt,n(o)]),yt,t("a",vt,[wt,n(o)]),xt,t("a",At,[zt,n(o)]),qt,t("a",Tt,[Nt,n(o)]),Ct,t("a",Ft,[Dt,n(o)]),It,t("a",St,[jt,n(o)]),Lt,t("a",Ut,[Rt,n(o)]),Wt,t("a",Et,[Mt,n(o)]),Pt,t("a",$t,[Bt,n(o)]),Vt,t("a",Ot,[Ht,n(o)]),Kt,t("a",Zt,[Jt,n(o)])]),t("li",null,[Yt,t("a",Gt,[Qt,Xt,eo,n(o)]),to,t("a",oo,[no,n(o)]),so,t("a",ro,[lo,ho,io,ao,co,n(o)]),_o,t("a",uo,[po,fo,go,mo,bo,n(o)]),ko,t("a",yo,[vo,n(o)]),wo,t("a",xo,[Ao,zo,qo,n(o)]),To,t("a",No,[Co,n(o)]),Fo,t("a",Do,[Io,So,jo,Lo,Uo,n(o)]),Ro,t("a",Wo,[Eo,Mo,Po,$o,Bo,n(o)])]),t("li",null,[Vo,t("a",Oo,[Ho,n(o)]),Ko,t("a",Zo,[Jo,Yo,Go,n(o)]),Qo,t("a",Xo,[en,n(o)]),tn,t("a",on,[nn,n(o)]),sn,t("a",rn,[ln,n(o)]),hn,t("a",an,[dn,n(o)])]),t("li",null,[cn,t("a",_n,[un,n(o)]),pn,t("a",fn,[gn,n(o)]),mn,t("a",bn,[kn,n(o)])]),t("li",null,[yn,t("a",vn,[wn,n(o)])]),t("li",null,[xn,t("a",An,[zn,n(o)]),qn,t("a",Tn,[Nn,n(o)])]),t("li",null,[Cn,t("a",Fn,[Dn,n(o)])]),t("li",null,[In,t("a",Sn,[jn,n(o)])]),t("li",null,[Ln,t("a",Un,[Rn,Wn,En,Mn,Pn,n(o)])]),t("li",null,[$n,t("a",Bn,[Vn,n(o)]),On,t("a",Hn,[Kn,n(o)])]),t("li",null,[Zn,t("a",Jn,[Yn,n(o)]),Gn,t("a",Qn,[Xn,n(o)]),es,t("a",ts,[os,n(o)]),ns,t("a",ss,[rs,n(o)]),ls,t("a",hs,[is,n(o)]),as,t("a",ds,[cs,_s,us,ps,fs,n(o)]),gs,t("a",ms,[bs,n(o)]),ks,t("a",ys,[vs,n(o)]),ws,t("a",xs,[As,n(o)]),zs,t("a",qs,[Ts,n(o)]),Ns,t("a",Cs,[Fs,n(o)])]),t("li",null,[Ds,t("a",Is,[Ss,n(o)]),js,t("a",Ls,[Us,n(o)]),Rs,t("a",Ws,[Es,n(o)]),Ms,t("a",Ps,[$s,n(o)]),Bs,t("a",Vs,[Os,n(o)]),Hs,t("a",Ks,[Zs,n(o)]),Js,t("a",Ys,[Gs,n(o)]),Qs,t("a",Xs,[er,n(o)]),tr,t("a",or,[nr,n(o)]),sr,t("a",rr,[lr,n(o)]),hr,t("a",ir,[ar,n(o)]),dr,t("a",cr,[_r,ur,n(o)]),pr,t("a",fr,[gr,n(o)])]),t("li",null,[mr,t("a",br,[kr,n(o)])]),t("li",null,[yr,t("a",vr,[wr,n(o)])]),t("li",null,[xr,t("a",Ar,[zr,n(o)]),qr,t("a",Tr,[Nr,n(o)]),Cr,t("a",Fr,[Dr,n(o)])]),t("li",null,[Ir,t("a",Sr,[jr,n(o)]),Lr,t("a",Ur,[Rr,n(o)]),Wr,t("a",Er,[Mr,n(o)]),Pr,t("a",$r,[Br,n(o)]),Vr,t("a",Or,[Hr,n(o)]),Kr,t("a",Zr,[Jr,n(o)]),Yr,t("a",Gr,[Qr,n(o)]),Xr,t("a",el,[tl,n(o)])]),t("li",null,[ol,t("a",nl,[sl,n(o)])]),t("li",null,[rl,t("a",ll,[hl,n(o)])]),t("li",null,[il,t("a",al,[dl,n(o)])]),t("li",null,[cl,t("a",_l,[ul,n(o)])]),t("li",null,[pl,t("a",fl,[gl,n(o)])]),t("li",null,[ml,t("a",bl,[kl,n(o)])]),t("li",null,[yl,t("a",vl,[wl,xl,n(o)])])]),Al,t("ul",null,[t("li",null,[zl,t("a",ql,[Tl,Nl,Cl,n(o)]),Fl,t("a",Dl,[Il,n(o)]),Sl,t("a",jl,[Ll,n(o)])]),t("li",null,[Ul,t("a",Rl,[Wl,El,Ml,Pl,n(o)])]),t("li",null,[$l,t("a",Bl,[Vl,n(o)]),Ol,t("a",Hl,[Kl,n(o)]),Zl,t("a",Jl,[Yl,n(o)])]),t("li",null,[Gl,t("a",Ql,[Xl,n(o)])]),t("li",null,[eh,t("a",th,[oh,n(o)])]),t("li",null,[nh,t("a",sh,[rh,n(o)]),lh,t("a",hh,[ih,n(o)])]),t("li",null,[ah,t("a",dh,[ch,_h,uh,n(o)])]),t("li",null,[ph,t("a",fh,[gh,n(o)])])]),mh,t("ul",null,[t("li",null,[bh,t("a",kh,[yh,n(o)])]),t("li",null,[vh,t("a",wh,[xh,n(o)])]),t("li",null,[Ah,t("a",zh,[qh,n(o)])]),t("li",null,[Th,t("a",Nh,[Ch,n(o)]),Fh,t("a",Dh,[Ih,n(o)]),Sh,t("a",jh,[Lh,n(o)]),Uh,t("a",Rh,[Wh,n(o)])]),t("li",null,[Eh,t("a",Mh,[Ph,n(o)]),$h,t("a",Bh,[Vh,n(o)])]),t("li",null,[Oh,t("a",Hh,[Kh,n(o)])]),t("li",null,[Zh,t("a",Jh,[Yh,n(o)])]),t("li",null,[Gh,t("a",Qh,[Xh,n(o)])])]),ei,t("ul",null,[t("li",null,[ti,t("a",oi,[ni,n(o)]),si,t("a",ri,[li,n(o)]),hi,t("a",ii,[ai,n(o)])]),t("li",null,[di,t("a",ci,[_i,n(o)])]),t("li",null,[ui,t("a",pi,[fi,n(o)])]),t("li",null,[gi,t("a",mi,[bi,n(o)])]),t("li",null,[ki,t("a",yi,[vi,n(o)])])])])}const qi=r(d,[["render",wi],["__file","2022-05-24-nushell_0_63.html.vue"]]);export{qi as default};
