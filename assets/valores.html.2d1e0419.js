import{_ as o,r as t,o as p,c,a as s,b as l,w as i,e as n,d as a}from"./app.56e52492.js";const u={},r=n(`<h1 id="valores" tabindex="-1"><a class="header-anchor" href="#valores" aria-hidden="true">#</a> Valores</h1><p>Um Valor \xE9 a estrutura b\xE1sica de dados no Nu.</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Value</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> value<span class="token punctuation">:</span> <span class="token class-name">UntaggedValue</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> tag<span class="token punctuation">:</span> <span class="token class-name">Tag</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),d=a("Onde o campo "),m=s("code",null,"value",-1),k=a(" \xE9 qualquer tipo de valor "),h=s("code",null,"UntaggedValue",-1),g=a(" e o campo "),v=s("code",null,"tag",-1),_=a(" armazena um "),f=a("metadado"),b=a(" associado com o valor."),y=n(`<p>Um <code>UntaggedValue</code> representa um dos seguintes tipos de valor:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">UntaggedValue</span> <span class="token punctuation">{</span>
    <span class="token class-name">Primitive</span><span class="token punctuation">(</span><span class="token class-name">Primitive</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Row</span><span class="token punctuation">(</span><span class="token class-name">Dictionary</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Table</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token class-name">ShellError</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token class-name">Evaluate</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Onde <code>Primitive</code> \xE9:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">Primitive</span> <span class="token punctuation">{</span>
    <span class="token class-name">Nothing</span><span class="token punctuation">,</span>
    <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token class-name">BigInt</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Decimal</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">(</span><span class="token keyword">u64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Line</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ColumnPath</span><span class="token punctuation">(</span><span class="token class-name">ColumnPath</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Pattern</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token keyword">bool</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">DateTime</span><span class="token operator">&lt;</span><span class="token class-name">Utc</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Duration</span><span class="token punctuation">(</span><span class="token keyword">u64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Range</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">Range</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token class-name">PathBuf</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Binary</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// Stream markers (used as bookend markers rather than actual values)</span>
    <span class="token class-name">BeginningOfStream</span><span class="token punctuation">,</span>
    <span class="token class-name">EndOfStream</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Vamos ver em ordem reversa para ver como Primitives \xE9 construido at\xE9 um Value completo:</p><h2 id="primitive" tabindex="-1"><a class="header-anchor" href="#primitive" aria-hidden="true">#</a> Primitive</h2><p>Um tipo de dado <code>Primitive</code> \xE9 um tipo fundamental no Nu. Apesar disso ter similaridades com tipos de dados de linguagens de programa\xE7\xE3o, existem algumas diferen\xE7as devido as capacidades de shell do Nu.</p><p>Nu v\xEAm com dois &quot;grandes&quot; tipos de n\xFAmeros: <code>BigInt</code> para inteiros e <code>BigDecimal</code> para n\xFAmeros decimais. Isso permite que o Nu realize futuramente opera\xE7\xF5es matem\xE1ticas e mantenha precis\xE3o por mais tempo.</p><p>Outros tipos de dados que talvez sejam um pouco diferentes do normal:</p><ul><li><code>Nothing</code> = Um valor vazio</li><li><code>Bytes(u64)</code> = tamanho do arquivo em n\xFAmero de bytes</li><li><code>Line(String)</code> = Um valor do tipo string com um carriage return (ou cr/lf) no final</li><li><code>ColumnPath(ColumnPath)</code> = Um caminho para percorrer at\xE9 chegar a um valor em uma tabela</li><li><code>Pattern(string)</code> = um padr\xE3o glob (como <code>nu*</code> em <code>ls nu*</code>)</li><li><code>Duration(u64)</code> = Uma contagem no valor de segundos (como <code>1hr</code> em <code>ls | where modified &lt; 1hr</code> )</li><li><code>Range(Box&lt;Range&gt;)</code> = Um intervalo de valores (como <code>0..2</code> em <code>ls | range 0..2</code>)</li><li><code>Path(PathBuf)</code> = um caminho de arquivo</li><li><code>Binary(Vec&lt;u8&gt;)</code> = um array de bytes</li><li><code>BeginningOfStream</code> = um marcador para indicar o in\xEDcio de uma stream</li><li><code>EndOfStream</code> = um marcador para indicar o fim de uma stream</li></ul><h2 id="untaggedvalue" tabindex="-1"><a class="header-anchor" href="#untaggedvalue" aria-hidden="true">#</a> UntaggedValue</h2><p>Al\xE9m dos tipos primitivos, Nu sporta agrega\xE7\xE3o de tipos de dados. Coletivamente, esses valores agregados s\xE3o chamados de <code>UntaggedValue</code>s.</p><p>Atualmente, Nu suporta 5 tipos de <code>UntaggedValue</code>: <code>Row</code>, <code>Table</code>, <code>Block</code>, <code>Primitive</code>, e <code>Error</code>.</p><h3 id="tables-e-rows" tabindex="-1"><a class="header-anchor" href="#tables-e-rows" aria-hidden="true">#</a> Tables e Rows</h3><p>Nu usa um conjunto de termos que s\xE3o mais pr\xF3ximos de planilhas. Ao inv\xE9s de ter listas de objetos, Nu tem uma tabela, que cont\xE9m linhas. Cada linha cont\xE9m o nome das colunas e os seus respectivos valores.</p><h3 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> Blocks</h3><p>Blocks representam c\xF3digo que est\xE1 pronto para ser executado pelo avaliador. Um exemplo disso \xE9 a condi\xE7\xE3o na express\xE3o <code>where {$it &gt; 10}</code>.</p><h3 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h3><p>Representa erros que podem ocorrer quando o pipeline \xE9 executado.</p>`,19);function B(x,w){const e=t("RouterLink");return p(),c("div",null,[r,s("p",null,[d,m,k,h,g,v,_,l(e,{to:"/pt-BR/contributor-book/metadados.html"},{default:i(()=>[f]),_:1}),b]),y])}const P=o(u,[["render",B],["__file","valores.html.vue"]]);export{P as default};
