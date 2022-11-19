import{_ as s,c as n,o as a,a as e}from"./app.8cd0f357.js";const D=JSON.parse('{"title":"\u73AF\u5883\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u53D1\u73AF\u5883 .env.development","slug":"\u5F00\u53D1\u73AF\u5883-env-development","link":"#\u5F00\u53D1\u73AF\u5883-env-development","children":[]},{"level":2,"title":"\u6D4B\u8BD5\u73AF\u5883 .env.test","slug":"\u6D4B\u8BD5\u73AF\u5883-env-test","link":"#\u6D4B\u8BD5\u73AF\u5883-env-test","children":[]},{"level":2,"title":"\u751F\u4EA7\u73AF\u5883 .env.production","slug":"\u751F\u4EA7\u73AF\u5883-env-production","link":"#\u751F\u4EA7\u73AF\u5883-env-production","children":[]}],"relativePath":"guide/configure.md"}'),l={name:"guide/configure.md"},p=e(`<h1 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1">\u73AF\u5883\u914D\u7F6E <a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u9ED8\u8BA4\u63D0\u4F9B\u4E09\u5957\u73AF\u5883\u914D\u7F6E\uFF0C\u5206\u522B\u4E3A\uFF1A</p><h2 id="\u5F00\u53D1\u73AF\u5883-env-development" tabindex="-1">\u5F00\u53D1\u73AF\u5883 <code>.env.development</code> <a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883-env-development" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># \u9875\u9762\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = \u9875\u9762\u6807\u9898(development)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u63A5\u53E3\u8BF7\u6C42\u5730\u5740\uFF0C\u4F1A\u8BBE\u7F6E\u5230 axios \u7684 baseURL \u53C2\u6570\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8C03\u8BD5\u5DE5\u5177\uFF0C\u53EF\u8BBE\u7F6E eruda \u6216 vconsole\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5F00\u542F\u5219\u7559\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5F00\u542F\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_OPEN_PROXY = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6D4B\u8BD5\u73AF\u5883-env-test" tabindex="-1">\u6D4B\u8BD5\u73AF\u5883 <code>.env.test</code> <a class="header-anchor" href="#\u6D4B\u8BD5\u73AF\u5883-env-test" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">NODE_ENV = production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u9875\u9762\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = \u9875\u9762\u6807\u9898(test)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u63A5\u53E3\u8BF7\u6C42\u5730\u5740\uFF0C\u4F1A\u8BBE\u7F6E\u5230 axios \u7684 baseURL \u53C2\u6570\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8C03\u8BD5\u5DE5\u5177\uFF0C\u53EF\u8BBE\u7F6E eruda \u6216 vconsole\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5F00\u542F\u5219\u7559\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u542F\u7528 Mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u751F\u6210 sourcemap</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u5F00\u542F\u538B\u7F29\uFF0C\u652F\u6301 gzip \u548C brotli</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u751F\u4EA7\u73AF\u5883-env-production" tabindex="-1">\u751F\u4EA7\u73AF\u5883 <code>.env.production</code> <a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883-env-production" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">NODE_ENV = production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u9875\u9762\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_TITLE = \u9875\u9762\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u63A5\u53E3\u8BF7\u6C42\u5730\u5740\uFF0C\u4F1A\u8BBE\u7F6E\u5230 axios \u7684 baseURL \u53C2\u6570\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8C03\u8BD5\u5DE5\u5177\uFF0C\u53EF\u8BBE\u7F6E eruda \u6216 vconsole\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5F00\u542F\u5219\u7559\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u542F\u7528 Mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u751F\u6210 sourcemap</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u662F\u5426\u5728\u6253\u5305\u65F6\u5F00\u542F\u538B\u7F29\uFF0C\u652F\u6301 gzip \u548C brotli</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4E2D <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> \u4E3A\u5FC5\u8981\u914D\u7F6E\uFF0C\u5373\u4E0D\u7BA1\u662F\u5728\u5F00\u53D1\u3001\u6D4B\u8BD5\uFF0C\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u90FD\u9700\u8981\u4F7F\u7528\u5230\u3002\u800C\u5176\u4F59\u914D\u7F6E\u5219\u5728\u4E0D\u540C\u73AF\u5883\u4E0B\u6709\u4E0D\u540C\u7528\u9014\uFF0C\u5982\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u672C\u5730\u5F00\u53D1\u4F7F\u7528\uFF0C\u6D4B\u8BD5\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u7528\u4E8E\u6784\u5EFA\u4F7F\u7528\u3002</p><p>\u5F00\u53D1\u8005\u53EF\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u6269\u5C55\uFF0C\u5982\u679C\u5BF9\u8FD9\u5757\u4E0D\u719F\u6089\uFF0C\u8BF7\u9605\u8BFB <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - \u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F</a> \u7AE0\u8282\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u73AF\u5883\u914D\u7F6E\u4FEE\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8FD0\u884C\u624D\u4F1A\u751F\u6548</p></div>`,11),o=[p];function c(t,i,r,A,C,d){return a(),n("div",null,o)}const y=s(l,[["render",c]]);export{D as __pageData,y as default};
