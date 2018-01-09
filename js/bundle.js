!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r,a,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};s=function(e,t,n,r){var a=l(t),o=l(n),s=l(r);function l(e){return e&&e.__esModule?e:{default:e}}var c="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":i(e)};var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default);function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return u(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===c(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,s.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return p("action",e)}},{key:"defaultTarget",value:function(e){var t=p("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return p("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}();function p(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=d},a=[e,n(4),n(6),n(7)],void 0===(o="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=o);var s},function(e,t,n){"use strict";n(2),n(11),$(".button-bars").click(function(){$(".docs__sidebar--menu").slideToggle()}),$(".button-search").click(function(){$(".docs__sidebar--search").slideToggle()}),$("h2").each(function(e,t){var n,r;if("¶",r=(n=$(t)).attr("id"))return n.append($("<a />").addClass("anchor").attr("href","#"+r).html("¶"))})},function(e,t,n){"use strict";(function(t){var r="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=r.Prism={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=n.util.clone(e[r]));return t;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){var o=(a=a||n.languages)[e];if(2==arguments.length){r=arguments[1];for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o}var s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==t)for(var i in r)r.hasOwnProperty(i)&&(s[i]=r[i]);s[l]=o[l]}return n.languages.DFS(n.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=s)}),a[e]=s},DFS:function(e,t,r,a){a=a||{};for(var o in e)e.hasOwnProperty(o)&&(t.call(e,o,e[o],r||o),"Object"!==n.util.type(e[o])||a[n.util.objId(e[o])]?"Array"!==n.util.type(e[o])||a[n.util.objId(e[o])]||(a[n.util.objId(e[o])]=!0,n.languages.DFS(e[o],t,o,a)):(a[n.util.objId(e[o])]=!0,n.languages.DFS(e[o],t,null,a)))}},plugins:{},highlightAll:function(e,t){var r={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var a,o=r.elements||document.querySelectorAll(r.selector),i=0;a=o[i++];)n.highlightElement(a,!0===e,r.callback)},highlightElement:function(t,a,o){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&/pre/i.test((l=t.parentNode).nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c={element:t,language:i,grammar:s,code:t.textContent};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),a&&r.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o&&o.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,r){var o=n.tokenize(e,t);return a.stringify(n.util.encode(o),r)},matchGrammar:function(e,t,r,a,o,i,s){var l=n.Token;for(var c in r)if(r.hasOwnProperty(c)&&r[c]){if(c==s)return;var u=r[c];u="Array"===n.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var p=u[d],f=p.inside,h=!!p.lookbehind,g=!!p.greedy,m=0,y=p.alias;if(g&&!p.pattern.global){var b=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,b+"g")}p=p.pattern||p;for(var v=a,k=o;v<t.length;k+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof l)){p.lastIndex=0;var S=p.exec(w),x=1;if(!S&&g&&v!=t.length-1){if(p.lastIndex=k,!(S=p.exec(e)))break;for(var E=S.index+(h?S[1].length:0),A=S.index+S[0].length,C=v,_=k,T=t.length;C<T&&(_<A||!t[C].type&&!t[C-1].greedy);++C)E>=(_+=t[C].length)&&(++v,k=_);if(t[v]instanceof l||t[C-1].greedy)continue;x=C-v,w=e.slice(k,_),S.index-=k}if(S){h&&(m=S[1].length);A=(E=S.index+m)+(S=S[0].slice(m)).length;var j=w.slice(0,E),N=w.slice(A),$=[v,x];j&&(++v,k+=j.length,$.push(j));var F=new l(c,f?n.tokenize(S,f):S,y,S,g);if($.push(F),N&&$.push(N),Array.prototype.splice.apply(t,$),1!=x&&n.matchGrammar(e,t,r,v,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,t,r){var a=[e],o=t.rest;if(o){for(var i in o)t[i]=o[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,o=0;a=r[o++];)a(t)}}},a=n.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var o={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,i)}n.hooks.run("wrap",o);var s=Object.keys(o.attributes).map(function(e){return e+'="'+(o.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+(s?" "+s:"")+">"+o.content+"</"+o.tag+">"},!r.document)return r.addEventListener?(n.disableWorkerMessageHandler||r.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,o=t.code,i=t.immediateClose;r.postMessage(n.highlight(o,n.languages[a],a)),i&&r.close()},!1),r.Prism):r.Prism;var o=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return o&&(n.filename=o.src,n.manual||o.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),r.Prism}();void 0!==e&&e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,r=t.getAttribute("data-src"),o=t,i=/\blang(?:uage)?-(?!\*)(\w+)\b/i;o&&!i.test(o.className);)o=o.parentNode;if(o&&(n=(t.className.match(i)||[,""])[1]),!n){var s=(r.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight)),a.languages.php=a.languages.extend("clike",{keyword:/\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),a.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),a.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$\w+\b/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),a.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),a.languages.markup&&(a.hooks.add("before-highlight",function(e){"php"===e.language&&/(?:<\?php|<\?)/gi.test(e.code)&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi,function(t){for(var n=e.tokenStack.length;-1!==e.backupCode.indexOf("___PHP"+n+"___");)++n;return e.tokenStack[n]=t,"___PHP"+n+"___"}),e.grammar=a.languages.markup)}),a.hooks.add("before-insert",function(e){"php"===e.language&&e.backupCode&&(e.code=e.backupCode,delete e.backupCode)}),a.hooks.add("after-highlight",function(e){if("php"===e.language&&e.tokenStack){e.grammar=a.languages.php;for(var t=0,n=Object.keys(e.tokenStack);t<n.length;++t){var r=n[t],o=e.tokenStack[r];e.highlightedCode=e.highlightedCode.replace("___PHP"+r+"___",'<span class="token php language-php">'+a.highlight(o,e.grammar,"php").replace(/\$/g,"$$$$")+"</span>")}e.element.innerHTML=e.highlightedCode}})),a.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][+-]?\d+)?)\b/,punctuation:/[{}[\]);,]/,operator:/:/g,boolean:/\b(?:true|false)\b/i,null:/\bnull\b/i},a.languages.jsonp=a.languages.json,a.languages.yaml={scalar:{pattern:/([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,alias:"number"},boolean:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},null:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+\-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[\w#?*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,lookbehind:!0},boolean:{pattern:/(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var n=t.variable[1].inside;n.function=e.languages.bash.function,n.keyword=e.languages.bash.keyword,n.boolean=e.languages.bash.boolean,n.operator=e.languages.bash.operator,n.punctuation=e.languages.bash.punctuation}(a),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=function(e){var n=t(e),r=n["white-space"];if("pre-wrap"===r||"pre-line"===r){var a=e.querySelector("code"),o=e.querySelector(".line-numbers-rows"),i=e.querySelector(".line-numbers-sizer"),s=e.textContent.split("\n");i||(i=document.createElement("span"),i.className="line-numbers-sizer",a.appendChild(i)),i.style.display="block",s.forEach(function(e,t){i.textContent=e||"\n";var n=i.getBoundingClientRect().height;o.children[t].style.height=n+"px"}),i.textContent="",i.style.display="none"}},t=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),e)}),a.hooks.add("complete",function(t){if(t.code){var n=t.element.parentNode,r=/\s*\bline-numbers\b\s*/;if(n&&/pre/i.test(n.nodeName)&&(r.test(n.className)||r.test(t.element.className))&&!t.element.querySelector(".line-numbers-rows")){r.test(t.element.className)&&(t.element.className=t.element.className.replace(r," ")),r.test(n.className)||(n.className+=" line-numbers");var a,o=t.code.match(/\n(?!$)/g),i=o?o.length+1:1,s=new Array(i+1);s=s.join("<span></span>"),(a=document.createElement("span")).setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=s,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),t.element.appendChild(a),e(n)}}})}}(),function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,r){for(var a,i=n.replace(/\s+/g,"").split(","),s=+e.getAttribute("data-line-offset")||0,l=(o()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),c=0;a=i[c++];){var u=+(a=a.split("-"))[0],d=+a[1]||u,p=document.createElement("div");p.textContent=Array(d-u+2).join(" \n"),p.setAttribute("aria-hidden","true"),p.className=(r||"")+" line-highlight",t(e,"line-numbers")||(p.setAttribute("data-start",u),d>u&&p.setAttribute("data-end",d)),p.style.top=(u-s-1)*l+"px",t(e,"line-numbers")?e.appendChild(p):(e.querySelector("code")||e).appendChild(p)}}function r(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var r=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(r&&!document.getElementById(t)){var a=t.slice(0,t.lastIndexOf(".")),o=document.getElementById(a);o&&(o.hasAttribute("data-line")||o.setAttribute("data-line",""),n(o,r,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var o=function(){var e;return function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),i=0;a.hooks.add("before-sanity-check",function(t){var n=t.element.parentNode,r=n&&n.getAttribute("data-line");if(n&&r&&/pre/i.test(n.nodeName)){var a=0;e(".line-highlight",n).forEach(function(e){a+=e.textContent.length,e.parentNode.removeChild(e)}),a&&/^( \n)+$/.test(t.code.slice(-a))&&(t.code=t.code.slice(0,-a))}}),a.hooks.add("complete",function(e){var t=e.element.parentNode,a=t&&t.getAttribute("data-line");t&&a&&/pre/i.test(t.nodeName)&&(clearTimeout(i),n(t,a),i=setTimeout(r,1))}),window.addEventListener("hashchange",r)}}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=[],t={},n=function(){};a.plugins.toolbar={};var r=a.plugins.toolbar.registerButton=function(n,r){var a;a="function"==typeof r?r:function(e){var t;return"function"==typeof r.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){r.onClick.call(this,e)})):"string"==typeof r.url?(t=document.createElement("a")).href=r.url:t=document.createElement("span"),t.textContent=r.text,t},e.push(t[n]=a)},o=a.plugins.toolbar.hook=function(r){var a=r.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&!a.classList.contains("code-toolbar")){a.classList.add("code-toolbar");var o=document.createElement("div");o.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(e=document.body.getAttribute("data-toolbar-order").split(",").map(function(e){return t[e]||n})),e.forEach(function(e){var t=e(r);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),o.appendChild(n)}}),a.appendChild(o)}};r("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,r,a=t.getAttribute("data-label");try{r=document.querySelector("template#"+a)}catch(e){}return r?n=r.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=a),n}}),a.hooks.add("complete",o)}}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document)if(a.plugins.toolbar){var e=window.Clipboard||void 0;e&&/(native code)/.test(e.toString())&&(e=void 0),e||(e=n(0));var t=[];if(!e){var r=document.createElement("script"),o=document.querySelector("head");r.onload=function(){if(e=window.Clipboard)for(;t.length;)t.pop()()},r.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",o.appendChild(r)}a.plugins.toolbar.registerButton("copy-to-clipboard",function(n){var r=document.createElement("a");return r.className="copy-code",r.setAttribute("aria-label","Copy Code"),r.innerHTML='<i class="icon-copy"></i>',e?a():t.push(a),r;function a(){var t=new e(r,{text:function(){return n.code}});t.on("success",function(){r.setAttribute("aria-label","Copied!"),o()}),t.on("error",function(){r.textContent="Press Ctrl+C to copy",o()})}function o(){setTimeout(function(){r.setAttribute("aria-label","Copy Code")},5e3)}})}else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")}()}).call(t,n(3))},function(e,t,n){"use strict";var r,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";var r,a,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};s=function(e,t){var n,r=(n=t,n&&n.__esModule?n:{default:n});var a="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":i(e)};var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=s},a=[e,n(5)],void 0===(o="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=o);var s},function(e,t,n){"use strict";e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t,n){"use strict";function r(){}r.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=r},function(e,t,n){"use strict";var r=n(8),a=n(9);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return p=t,f=n,(d=e).addEventListener(p,f),{destroy:function(){d.removeEventListener(p,f)}};if(r.nodeList(e))return l=e,c=t,u=n,Array.prototype.forEach.call(l,function(e){e.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(l,function(e){e.removeEventListener(c,u)})}};if(r.string(e))return o=e,i=t,s=n,a(document.body,o,i,s);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,i,s,l,c,u,d,p,f}},function(e,t,n){"use strict";t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=n(10);function a(e,t,n,a,o){var i=function(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return a(e,t,n,r,o)}))}},function(e,t,n){"use strict";var r=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==r;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n(0)}]);