/*jquery 2.0.3*/
	/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*End jquery 2.0.3*/
/*backstretch.js*/
		/*! Backstretch - v2.0.4 - 2013-06-19
	* http://srobbin.com/jquery-plugins/backstretch/
	* Copyright (c) 2013 Scott Robbin; Licensed MIT */
	;(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
/*End backstretch.js*/
/*Smint js*/	
	
	/*

SMINT V1.0 by Robert McCracken
SMINT V2.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy ‏(@mcpacosy)

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/


	;(function(){


	$.fn.smint = function( options ) {

		// adding a class to users div
		$(this).addClass('smint')

		var settings = $.extend({
		            'scrollSpeed '  : 500
		}, options);

		//Set the variables needed
		var optionLocs = new Array();
		var lastScrollTop = 0;
		var menuHeight = $(".smint").height();

		return $('.smint a').each( function(index) {
            
			if ( settings.scrollSpeed ) {
				var scrollSpeed = settings.scrollSpeed
			}

			//Fill the menu
			var id = $(this).attr("id");
			optionLocs.push(Array($("div."+id).position().top-menuHeight, $("div."+id).height()+$("div."+id).position().top, id));

			///////////////////////////////////

			// get initial top offset for the menu 
			var stickyTop = $('.smint').offset().top;	

			// check position and make sticky if needed
			var stickyMenu = function(direction){

				// current distance top
				var scrollTop = $(window).scrollTop(); 

				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop) { 
					$('.smint').css({ 'position': 'fixed', 'top':0 }).addClass('fxd');	
				} else {
					$('.smint').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fxd'); 
				}   

				//Check if the position is inside then change the menu
				// Courtesy of Ryan Clarke (@clarkieryan)


				if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){	
					if(direction == "up"){
						$("#"+id).addClass("active");
						$("#"+optionLocs[index+1][2]).removeClass("active");
					} else if(index > 0) {
						$("#"+id).addClass("active");
						$("#"+optionLocs[index-1][2]).removeClass("active");
					} else if(direction == undefined){
						$("#"+id).addClass("active");
					}
					$.each(optionLocs, function(i){
						if(id != optionLocs[i][2]){
							//console.log(i);
							$("#"+optionLocs[i][2]).removeClass("active");
						}
					});
				}
			};

			// run functions
			stickyMenu();

			// run function every time you scroll
			$(window).scroll(function() {
				//Get the direction of scroll
				var st = $(this).scrollTop();
				if (st > lastScrollTop) {
				    direction = "down";
				} else if (st < lastScrollTop ){
				    direction = "up";
				}
				lastScrollTop = st;
				stickyMenu(direction);

				// Check if at bottom of page, if so, add class to last <a> as sometimes the last div
				// isnt long enough to scroll to the top of the page and trigger the active state.

				if($(window).scrollTop() + $(window).height() == $(document).height()) {
       			$('.smint a').removeClass('active')
       			$('.smint a').last().addClass('active')
   }
			});

			///////////////////////////////////////
    
        
        	$(this).on('click', function(e){
				// gets the height of the users div. This is used for off-setting the scroll so the menu doesnt overlap any content in the div they jst scrolled to
				var selectorHeight = $('.smint').height();   

        		// stops empty hrefs making the page jump when clicked
				e.preventDefault();

				// get id pf the button you just clicked
		 		var id = $(this).attr('id');

		 		// if the link has the smint-disable class it will be ignored 
		 		// Courtesy of mcpacosy ‏(@mcpacosy)

                if ($(this).hasClass("smint-disable"))
                {
                    return false;
                }

				// gets the distance from top of the div class that matches your button id minus the height of the nav menu. This means the nav wont initially overlap the content.
				var goTo =  $('div.'+ id).offset().top -selectorHeight;

				// Scroll the page to the desired position!
				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);

			});	
		});
	}


})();
/*End Smint*/	
/*Bootstrap js*/
	/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */
;!function(window,undefined){
	if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
}(window,undefined);
/*Bootstrap js*/
/*slicknav*/
	/*!
	SlickNav Responsive Mobile Menu
	(c) 2013 Josh Cope
	licensed under GPL and MIT
*/
;(function ($, document, window) {
	var
	// default settings object.
	defaults = {
		label: 'MENU',
		duplicate: true,
		duration: 200,
		easingOpen: 'swing',
		easingClose: 'swing',
		closedSymbol: '&#9658;',
		openedSymbol: '&#9660;',
		prependTo: 'body',
		parentTag: 'a',
		closeOnClick: false,
		allowParentLinks: false,
		init: function(){},
		open: function(){},
		close: function(){}
	},
	mobileMenu = 'slicknav',
	prefix = 'slicknav';
	
	function Plugin( element, options ) {
		this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = mobileMenu;
        
        this.init();
	}
	
	Plugin.prototype.init = function () {
        var $this = this;
		var menu = $(this.element);
		var settings = this.settings;
		
		// clone menu if needed
		if (settings.duplicate) {
			$this.mobileNav = menu.clone();
			//remove ids from clone to prevent css issues
			$this.mobileNav.removeAttr('id');
			$this.mobileNav.find('*').each(function(i,e){
				$(e).removeAttr('id');
			});
		}
		else
			$this.mobileNav = menu;
		
		// styling class for the button
		var iconClass = prefix+'_icon';
		
		if (settings.label == '') {
			iconClass += ' '+prefix+'_no-text';
		}
		
		if (settings.parentTag == 'a') {
			settings.parentTag = 'a href="#"';
		}
		
		// create menu bar
		$this.mobileNav.attr('class', prefix+'_nav');
		var menuBar = $('<div class="'+prefix+'_menu"></div>');
		$this.btn = $('<'+settings.parentTag+' aria-haspopup="true" tabindex="0" class="'+prefix+'_btn '+prefix+'_collapsed"><span class="'+prefix+'_menutxt">'+settings.label+'</span><span class="'+iconClass+'"><span class="'+prefix+'_icon-bar"></span><span class="'+prefix+'_icon-bar"></span><span class="'+prefix+'_icon-bar"></span></span></a>');
		$(menuBar).append($this.btn);		
		$(settings.prependTo).prepend(menuBar);
		menuBar.append($this.mobileNav);
		
		// iterate over structure adding additional structure
		var items = $this.mobileNav.find('li');
		$(items).each(function () {
			var item = $(this);
			data = {};
			data.children = item.children('ul').attr('role','menu');
			item.data("menu", data);
			
			// if a list item has a nested menu
			if (data.children.length > 0) {
			
				// select all text before the child menu
				var a = item.contents();
				var nodes = [];
				$(a).each(function(){
					if(!$(this).is("ul")) {
						nodes.push(this);
					}
					else {
						return false;
					}
				});
				
				// wrap item text with tag and add classes
				var wrap = $(nodes).wrapAll('<'+settings.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+prefix+'_item"/>').parent();
				
				item.addClass(prefix+'_collapsed');
				item.addClass(prefix+'_parent');
				
				// create parent arrow
				$(nodes).last().after('<span class="'+prefix+'_arrow">'+settings.closedSymbol+'</span>');
				
			
			} else if ( item.children().length == 0) {
				 item.addClass(prefix+'_txtnode');
			}
			
			// accessibility for links
			item.children('a').attr('role', 'menuitem').click(function(){
				//Emulate menu close if set
				if (settings.closeOnClick)
					$($this.btn).click();
			});
		});
		
		// structure is in place, now hide appropriate items
		$(items).each(function () {
			var data = $(this).data("menu");
			$this._visibilityToggle(data.children, false, null, true);
		});
		
		// finally toggle entire menu
		$this._visibilityToggle($this.mobileNav, false, 'init', true);
		
		// accessibility for menu button
		$this.mobileNav.attr('role','menu');
		
		// outline prevention when using mouse
		$(document).mousedown(function(){
			$this._outlines(false);
		});
		
		$(document).keyup(function(){
			$this._outlines(true);
		});
		
		// menu button click
		$($this.btn).click(function (e) {
			e.preventDefault();
			$this._menuToggle();			
		});
		
		// click on menu parent
		$this.mobileNav.on('click', '.'+prefix+'_item', function(e){
			e.preventDefault();
			$this._itemClick($(this));
		});
		
		// check for enter key on menu button and menu parents
		$($this.btn).keydown(function (e) {
			var ev = e || event;
			if(ev.keyCode == 13) {
				e.preventDefault();
				$this._menuToggle();
			}
		});
		
		$this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
			var ev = e || event;
			if(ev.keyCode == 13) {
				e.preventDefault();
				$this._itemClick($(e.target));
			}
		});
		
		// allow links clickable within parent tags if set
		if (settings.allowParentLinks) {
			$('.'+prefix+'_item a').click(function(e){
					e.stopImmediatePropagation();
			});
		}
    };
	
	//toggle menu
	Plugin.prototype._menuToggle = function(el){
		var $this = this;
		var btn = $this.btn;
		var mobileNav = $this.mobileNav;
		
		if (btn.hasClass(prefix+'_collapsed')) {
			btn.removeClass(prefix+'_collapsed');
			btn.addClass(prefix+'_open');
		} else {
			btn.removeClass(prefix+'_open');
			btn.addClass(prefix+'_collapsed');
		}
		btn.addClass(prefix+'_animating');
		$this._visibilityToggle(mobileNav, true, btn);
	}
	
	// toggle clicked items
	Plugin.prototype._itemClick = function(el) {
		var $this = this;
		var settings = $this.settings;
		var data = el.data("menu");
		if (!data) {
			data = {};
			data.arrow = el.children('.'+prefix+'_arrow');
			data.ul = el.next('ul');
			data.parent = el.parent();
			el.data("menu", data);
		}
		if (data.parent.hasClass(prefix+'_collapsed')) {
			data.arrow.html(settings.openedSymbol);
			data.parent.removeClass(prefix+'_collapsed');
			data.parent.addClass(prefix+'_open');
			data.parent.addClass(prefix+'_animating');
			$this._visibilityToggle(data.ul, true, el);
		} else {
			data.arrow.html(settings.closedSymbol);
			data.parent.addClass(prefix+'_collapsed');
			data.parent.removeClass(prefix+'_open');
			data.parent.addClass(prefix+'_animating');
			$this._visibilityToggle(data.ul, true, el);
		}
	}

	// toggle actual visibility and accessibility tags
	Plugin.prototype._visibilityToggle = function(el, animate, trigger, init) {
		var $this = this;
		var settings = $this.settings;
		var items = $this._getActionItems(el);
		var duration = 0;
		if (animate)
			duration = settings.duration;
		
		if (el.hasClass(prefix+'_hidden')) {
			el.removeClass(prefix+'_hidden');
			el.slideDown(duration, settings.easingOpen, function(){
				
				$(trigger).removeClass(prefix+'_animating');
				$(trigger).parent().removeClass(prefix+'_animating');
				
				//Fire open callback
				if (!init) {
					settings.open(trigger);
				}
			});
			el.attr('aria-hidden','false');
			items.attr('tabindex', '0');
			$this._setVisAttr(el, false);
		} else {
			el.addClass(prefix+'_hidden');
			el.slideUp(duration, this.settings.easingClose, function() {
				el.attr('aria-hidden','true');
				items.attr('tabindex', '-1');
				$this._setVisAttr(el, true);
				el.hide(); //jQuery 1.7 bug fix
				
				$(trigger).removeClass(prefix+'_animating');
				$(trigger).parent().removeClass(prefix+'_animating');
				
				//Fire init or close callback
				if (!init)
					settings.close(trigger);
				else if (trigger == 'init')
					settings.init();
			});
		}
	}

	// set attributes of element and children based on visibility
	Plugin.prototype._setVisAttr = function(el, hidden) {
		var $this = this;
		
		// select all parents that aren't hidden
		var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');
		
		// iterate over all items setting appropriate tags
		if (!hidden) {
			nonHidden.each(function(){
				var ul = $(this);
				ul.attr('aria-hidden','false');
				var items = $this._getActionItems(ul);
				items.attr('tabindex', '0');
				$this._setVisAttr(ul, hidden);
			});
		} else {
			nonHidden.each(function(){
				var ul = $(this);
				ul.attr('aria-hidden','true');
				var items = $this._getActionItems(ul);
				items.attr('tabindex', '-1');
				$this._setVisAttr(ul, hidden);
			});
		}
	}

	// get all 1st level items that are clickable
	Plugin.prototype._getActionItems = function(el) {
		var data = el.data("menu");
		if (!data) {
			data = {};
			var items = el.children('li');
			var anchors = items.children('a');
			data.links = anchors.add(items.children('.'+prefix+'_item'));
			el.data("menu", data);
		}
		return data.links;
	}

	Plugin.prototype._outlines = function(state) {
		if (!state) {
			$('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
		} else {
			$('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
		}
	}
	
	Plugin.prototype.toggle = function(){
		$this._menuToggle();
	}
	
	Plugin.prototype.open = function(){
		$this = this;
		if ($this.btn.hasClass(prefix+'_collapsed')) {
			$this._menuToggle();
		}
	}
	
	Plugin.prototype.close = function(){
		$this = this;
		if ($this.btn.hasClass(prefix+'_open')) {
			$this._menuToggle();
		}
	}
	
	$.fn[mobileMenu] = function ( options ) {
		var args = arguments;

		// Is the first parameter an object (options), or was omitted, instantiate a new instance
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {

				// Only allow the plugin to be instantiated once due to methods
				if (!$.data(this, 'plugin_' + mobileMenu)) {

					// if it has no instance, create a new one, pass options to our plugin constructor,
					// and store the plugin instance in the elements jQuery data object.
					$.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
				}
			});

		// If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

			// Cache the method call to make it possible to return a value
			var returns;

			this.each(function () {
				var instance = $.data(this, 'plugin_' + mobileMenu);

				// Tests that there's already a plugin-instance and checks that the requested public method exists
				if (instance instanceof Plugin && typeof instance[options] === 'function') {

					// Call the method of our plugin instance, and pass it the supplied arguments.
					returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
				}
			});

			// If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
			return returns !== undefined ? returns : this;
		}
	};
}(jQuery, document, window));

/*end slicknav*/
/*validation engine-en*/
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters required"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
/*end validation engine-en*/

/*validation engine*/
		/*
		 * Inline Form Validation Engine 2.6.2, jQuery plugin
		 *
		 * Copyright(c) 2010, Cedric Dugas
		 * http://www.position-absolute.com
		 *
		 * 2.0 Rewrite by Olivier Refalo
		 * http://www.crionics.com
		 *
		 * Form validation engine allowing custom regex rules to be added.
		 * Licensed under the MIT License
		 */
		 (function($) {

			"use strict";

			var methods = {

				/**
				* Kind of the constructor, called before any action
				* @param {Map} user options
				*/
				init: function(options) {
					var form = this;
					if (!form.data('jqv') || form.data('jqv') == null ) {
						options = methods._saveOptions(form, options);
						// bind all formError elements to close on click
						$(document).on("click", ".formError", function() {
							$(this).fadeOut(150, function() {
								// remove prompt once invisible
								$(this).parent('.formErrorOuter').remove();
								$(this).remove();
							});
						});
					}
					return this;
				 },
				/**
				* Attachs jQuery.validationEngine to form.submit and field.blur events
				* Takes an optional params: a list of options
				* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
				*/
				attach: function(userOptions) {

					var form = this;
					var options;

					if(userOptions)
						options = methods._saveOptions(form, userOptions);
					else
						options = form.data('jqv');

					options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
					if (options.binded) {

						// delegate fields
						form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
						form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
						form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
					}
					if (options.autoPositionUpdate) {
						$(window).bind("resize", {
							"noAnimation": true,
							"formElem": form
						}, methods.updatePromptsPosition);
					}
					form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
					form.removeData('jqv_submitButton');

					// bind form.submit
					form.on("submit", methods._onSubmitEvent);
					return this;
				},
				/**
				* Unregisters any bindings that may point to jQuery.validaitonEngine
				*/
				detach: function() {

					var form = this;
					var options = form.data('jqv');

					// unbind fields
					form.off(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
					form.off("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
					form.off(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", methods._onFieldEvent);

					// unbind form.submit
					form.off("submit", methods._onSubmitEvent);
					form.removeData('jqv');

					form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
					form.removeData('jqv_submitButton');

					if (options.autoPositionUpdate)
						$(window).off("resize", methods.updatePromptsPosition);

					return this;
				},
				/**
				* Validates either a form or a list of fields, shows prompts accordingly.
				* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
				*
				* @return true if the form validates, false if it fails
				*/
				validate: function() {
					var element = $(this);
					var valid = null;

					if (element.is("form") || element.hasClass("validationEngineContainer")) {
						if (element.hasClass('validating')) {
							// form is already validating.
							// Should abort old validation and start new one. I don't know how to implement it.
							return false;
						} else {
							element.addClass('validating');
							var options = element.data('jqv');
							var valid = methods._validateFields(this);

							// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
							setTimeout(function(){
								element.removeClass('validating');
							}, 100);
							if (valid && options.onSuccess) {
								options.onSuccess();
							} else if (!valid && options.onFailure) {
								options.onFailure();
							}
						}
					} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
						element.removeClass('validating');
					} else {
						// field validation
						var form = element.closest('form, .validationEngineContainer'),
							options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
							valid = methods._validateField(element, options);

						if (valid && options.onFieldSuccess)
							options.onFieldSuccess();
						else if (options.onFieldFailure && options.InvalidFields.length > 0) {
							options.onFieldFailure();
						}
					}
					if(options.onValidationComplete) {
						// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
						return !!options.onValidationComplete(form, valid);
					}
					return valid;
				},
				/**
				*  Redraw prompts position, useful when you change the DOM state when validating
				*/
				updatePromptsPosition: function(event) {

					if (event && this == window) {
						var form = event.data.formElem;
						var noAnimation = event.data.noAnimation;
					}
					else
						var form = $(this.closest('form, .validationEngineContainer'));

					var options = form.data('jqv');
					// No option, take default one
					form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
						var field = $(this);
						if (options.prettySelect && field.is(":hidden"))
						  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
						var prompt = methods._getPrompt(field);
						var promptText = $(prompt).find(".formErrorContent").html();

						if(prompt)
							methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
					});
					return this;
				},
				/**
				* Displays a prompt on a element.
				* Note that the element needs an id!
				*
				* @param {String} promptText html text to display type
				* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
				* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
				*/
				showPrompt: function(promptText, type, promptPosition, showArrow) {
					var form = this.closest('form, .validationEngineContainer');
					var options = form.data('jqv');
					// No option, take default one
					if(!options)
						options = methods._saveOptions(this, options);
					if(promptPosition)
						options.promptPosition=promptPosition;
					options.showArrow = showArrow==true;

					methods._showPrompt(this, promptText, type, false, options);
					return this;
				},
				/**
				* Closes form error prompts, CAN be invidual
				*/
				hide: function() {
					 var form = $(this).closest('form, .validationEngineContainer');
					 var options = form.data('jqv');
					 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
					 var closingtag;

					 if($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
						 closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
					 } else {
						 closingtag = methods._getClassName($(this).attr("id")) +"formError";
					 }
					 $('.'+closingtag).fadeTo(fadeDuration, 0.3, function() {
						 $(this).parent('.formErrorOuter').remove();
						 $(this).remove();
					 });
					 return this;
				 },
				 /**
				 * Closes all error prompts on the page
				 */
				 hideAll: function() {

					 var form = this;
					 var options = form.data('jqv');
					 var duration = options ? options.fadeDuration:300;
					 $('.formError').fadeTo(duration, 300, function() {
						 $(this).parent('.formErrorOuter').remove();
						 $(this).remove();
					 });
					 return this;
				 },
				/**
				* Typically called when user exists a field using tab or a mouse click, triggers a field
				* validation
				*/
				_onFieldEvent: function(event) {
					var field = $(this);
					var form = field.closest('form, .validationEngineContainer');
					var options = form.data('jqv');
					options.eventTrigger = "field";
					// validate the current field
					window.setTimeout(function() {
						methods._validateField(field, options);
						if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
							options.onFieldSuccess();
						} else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
							options.onFieldFailure();
						}
					}, (event.data) ? event.data.delay : 0);

				},
				/**
				* Called when the form is submited, shows prompts accordingly
				*
				* @param {jqObject}
				*            form
				* @return false if form submission needs to be cancelled
				*/
				_onSubmitEvent: function() {
					var form = $(this);
					var options = form.data('jqv');

					//check if it is trigger from skipped button
					if (form.data("jqv_submitButton")){
						var submitButton = $("#" + form.data("jqv_submitButton"));
						if (submitButton){
							if (submitButton.length > 0){
								if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
									return true;
							}
						}
					}

					options.eventTrigger = "submit";

					// validate each field
					// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
					var r=methods._validateFields(form);

					if (r && options.ajaxFormValidation) {
						methods._validateFormWithAjax(form, options);
						// cancel form auto-submission - process with async call onAjaxFormComplete
						return false;
					}

					if(options.onValidationComplete) {
						// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
						return !!options.onValidationComplete(form, r);
					}
					return r;
				},
				/**
				* Return true if the ajax field validations passed so far
				* @param {Object} options
				* @return true, is all ajax validation passed so far (remember ajax is async)
				*/
				_checkAjaxStatus: function(options) {
					var status = true;
					$.each(options.ajaxValidCache, function(key, value) {
						if (!value) {
							status = false;
							// break the each
							return false;
						}
					});
					return status;
				},

				/**
				* Return true if the ajax field is validated
				* @param {String} fieldid
				* @param {Object} options
				* @return true, if validation passed, false if false or doesn't exist
				*/
				_checkAjaxFieldStatus: function(fieldid, options) {
					return options.ajaxValidCache[fieldid] == true;
				},
				/**
				* Validates form fields, shows prompts accordingly
				*
				* @param {jqObject}
				*            form
				* @param {skipAjaxFieldValidation}
				*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
				*
				* @return true if form is valid, false if not, undefined if ajax form validation is done
				*/
				_validateFields: function(form) {
					var options = form.data('jqv');

					// this variable is set to true if an error is found
					var errorFound = false;

					// Trigger hook, start validation
					form.trigger("jqv.form.validating");
					// first, evaluate status of non ajax fields
					var first_err=null;
					form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
						var field = $(this);
						var names = [];
						if ($.inArray(field.attr('name'), names) < 0) {
							errorFound |= methods._validateField(field, options);
							if (errorFound && first_err==null)
								if (field.is(":hidden") && options.prettySelect)
									first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
								else {

									//Check if we need to adjust what element to show the prompt on
									//and and such scroll to instead
									if(field.data('jqv-prompt-at') instanceof jQuery ){
										field = field.data('jqv-prompt-at');
									} else if(field.data('jqv-prompt-at')) {
										field = $(field.data('jqv-prompt-at'));
									}
									first_err=field;
								}
							if (options.doNotShowAllErrosOnSubmit)
								return false;
							names.push(field.attr('name'));

							//if option set, stop checking validation rules after one error is found
							if(options.showOneMessage == true && errorFound){
								return false;
							}
						}
					});

					// second, check to see if all ajax calls completed ok
					// errorFound |= !methods._checkAjaxStatus(options);

					// third, check status and scroll the container accordingly
					form.trigger("jqv.form.result", [errorFound]);

					if (errorFound) {
						if (options.scroll) {
							var destination=first_err.offset().top;
							var fixleft = first_err.offset().left;

							//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
							var positionType=options.promptPosition;
							if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
								positionType=positionType.substring(0,positionType.indexOf(":"));

							if (positionType!="bottomRight" && positionType!="bottomLeft") {
								var prompt_err= methods._getPrompt(first_err);
								if (prompt_err) {
									destination=prompt_err.offset().top;
								}
							}

							// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
							if (options.scrollOffset) {
								destination -= options.scrollOffset;
							}

							// get the position of the first error, there should be at least one, no need to check this
							//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
							if (options.isOverflown) {
								var overflowDIV = $(options.overflownDIV);
								if(!overflowDIV.length) return false;
								var scrollContainerScroll = overflowDIV.scrollTop();
								var scrollContainerPos = -parseInt(overflowDIV.offset().top);

								destination += scrollContainerScroll + scrollContainerPos - 5;
								var scrollContainer = $(options.overflownDIV + ":not(:animated)");

								scrollContainer.animate({ scrollTop: destination }, 1100, function(){
									if(options.focusFirstField) first_err.focus();
								});

							} else {
								$("html, body").animate({
									scrollTop: destination
								}, 1100, function(){
									if(options.focusFirstField) first_err.focus();
								});
								$("html, body").animate({scrollLeft: fixleft},1100)
							}

						} else if(options.focusFirstField)
							first_err.focus();
						return false;
					}
					return true;
				},
				/**
				* This method is called to perform an ajax form validation.
				* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
				*
				* @param {jqObject} form
				* @param {Map} options
				*/
				_validateFormWithAjax: function(form, options) {

					var data = form.serialize();
											var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
					var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
											var dataType = (options.dataType) ? options.dataType : "json";
					$.ajax({
						type: type,
						url: url,
						cache: false,
						dataType: dataType,
						data: data,
						form: form,
						methods: methods,
						options: options,
						beforeSend: function() {
							return options.onBeforeAjaxFormValidation(form, options);
						},
						error: function(data, transport) {
							if (options.onFailure) {
								options.onFailure(data, transport);
							} else {
								methods._ajaxError(data, transport);
							}
						},
						success: function(json) {
							if ((dataType == "json") && (json !== true)) {
								// getting to this case doesn't necessary means that the form is invalid
								// the server may return green or closing prompt actions
								// this flag helps figuring it out
								var errorInForm=false;
								for (var i = 0; i < json.length; i++) {
									var value = json[i];

									var errorFieldId = value[0];
									var errorField = $($("#" + errorFieldId)[0]);

									// make sure we found the element
									if (errorField.length == 1) {

										// promptText or selector
										var msg = value[2];
										// if the field is valid
										if (value[1] == true) {

											if (msg == ""  || !msg){
												// if for some reason, status==true and error="", just close the prompt
												methods._closePrompt(errorField);
											} else {
												// the field is valid, but we are displaying a green prompt
												if (options.allrules[msg]) {
													var txt = options.allrules[msg].alertTextOk;
													if (txt)
														msg = txt;
												}
												if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
											}
										} else {
											// the field is invalid, show the red error prompt
											errorInForm|=true;
											if (options.allrules[msg]) {
												var txt = options.allrules[msg].alertText;
												if (txt)
													msg = txt;
											}
											if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
										}
									}
								}
								options.onAjaxFormComplete(!errorInForm, form, json, options);
							} else
								options.onAjaxFormComplete(true, form, json, options);

						}
					});

				},
				/**
				* Validates field, shows prompts accordingly
				*
				* @param {jqObject}
				*            field
				* @param {Array[String]}
				*            field's validation rules
				* @param {Map}
				*            user options
				* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
				*/
				_validateField: function(field, options, skipAjaxValidation) {
					if (!field.attr("id")) {
						field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
						++$.validationEngine.fieldIdCounter;
					}

		           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
						return false;

					var rulesParsing = field.attr(options.validateAttribute);
					var getRules = /validate\[(.*)\]/.exec(rulesParsing);

					if (!getRules)
						return false;
					var str = getRules[1];
					var rules = str.split(/\[|,|\]/);

					// true if we ran the ajax validation, tells the logic to stop messing with prompts
					var isAjaxValidator = false;
					var fieldName = field.attr("name");
					var promptText = "";
					var promptType = "";
					var required = false;
					var limitErrors = false;
					options.isError = false;
					options.showArrow = true;

					// If the programmer wants to limit the amount of error messages per field,
					if (options.maxErrorsPerField > 0) {
						limitErrors = true;
					}

					var form = $(field.closest("form, .validationEngineContainer"));
					// Fix for adding spaces in the rules
					for (var i = 0; i < rules.length; i++) {
						rules[i] = rules[i].replace(" ", "");
						// Remove any parsing errors
						if (rules[i] === '') {
							delete rules[i];
						}
					}

					for (var i = 0, field_errors = 0; i < rules.length; i++) {

						// If we are limiting errors, and have hit the max, break
						if (limitErrors && field_errors >= options.maxErrorsPerField) {
							// If we haven't hit a required yet, check to see if there is one in the validation rules for this
							// field and that it's index is greater or equal to our current index
							if (!required) {
								var have_required = $.inArray('required', rules);
								required = (have_required != -1 &&  have_required >= i);
							}
							break;
						}


						var errorMsg = undefined;
						switch (rules[i]) {

							case "required":
								required = true;
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
								break;
							case "custom":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
								break;
							case "groupRequired":
								// Check is its the first of group, if not, reload validation with first field
								// AND continue normal validation on present field
								var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
								var firstOfGroup = form.find(classGroup).eq(0);
								if(firstOfGroup[0] != field[0]){

									methods._validateField(firstOfGroup, options, skipAjaxValidation);
									options.showArrow = true;

								}
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
								if(errorMsg)  required = true;
								options.showArrow = false;
								break;
							case "ajax":
								// AJAX defaults to returning it's loading message
								errorMsg = methods._ajax(field, rules, i, options);
								if (errorMsg) {
									promptType = "load";
								}
								break;
							case "minSize":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
								break;
							case "maxSize":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
								break;
							case "min":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
								break;
							case "max":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
								break;
							case "past":
								errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
								break;
							case "future":
								errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
								break;
							case "dateRange":
								var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
								options.firstOfGroup = form.find(classGroup).eq(0);
								options.secondOfGroup = form.find(classGroup).eq(1);

								//if one entry out of the pair has value then proceed to run through validation
								if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
									errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
								}
								if (errorMsg) required = true;
								options.showArrow = false;
								break;

							case "dateTimeRange":
								var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
								options.firstOfGroup = form.find(classGroup).eq(0);
								options.secondOfGroup = form.find(classGroup).eq(1);

								//if one entry out of the pair has value then proceed to run through validation
								if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
									errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
								}
								if (errorMsg) required = true;
								options.showArrow = false;
								break;
							case "maxCheckbox":
								field = $(form.find("input[name='" + fieldName + "']"));
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
								break;
							case "minCheckbox":
								field = $(form.find("input[name='" + fieldName + "']"));
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
								break;
							case "equals":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
								break;
							case "funcCall":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
								break;
							case "creditCard":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
								break;
							case "condRequired":
								errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
								if (errorMsg !== undefined) {
									required = true;
								}
								break;

							default:
						}

						var end_validation = false;

						// If we were passed back an message object, check what the status was to determine what to do
						if (typeof errorMsg == "object") {
							switch (errorMsg.status) {
								case "_break":
									end_validation = true;
									break;
								// If we have an error message, set errorMsg to the error message
								case "_error":
									errorMsg = errorMsg.message;
									break;
								// If we want to throw an error, but not show a prompt, return early with true
								case "_error_no_prompt":
									return true;
									break;
								// Anything else we continue on
								default:
									break;
							}
						}

						// If it has been specified that validation should end now, break
						if (end_validation) {
							break;
						}

						// If we have a string, that means that we have an error, so add it to the error message.
						if (typeof errorMsg == 'string') {
							promptText += errorMsg + "<br/>";
							options.isError = true;
							field_errors++;
						}
					}
					// If the rules required is not added, an empty field is not validated
					//the 3rd condition is added so that even empty password fields should be equal
					//otherwise if one is filled and another left empty, the "equal" condition would fail
					//which does not make any sense
					if(!required && !(field.val()) && field.val().length < 1 && $.inArray('equals', rules) < 0) options.isError = false;

					// Hack for radio/checkbox group button, the validation go into the
					// first radio/checkbox of the group
					var fieldType = field.prop("type");
					var positionType=field.data("promptPosition") || options.promptPosition;

					if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
						if(positionType === 'inline') {
							field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
						} else {
						field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
						}
						options.showArrow = options.showArrowOnRadioAndCheckbox;
					}

					if(field.is(":hidden") && options.prettySelect) {
						field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
					}

					if (options.isError && options.showPrompts){
						methods._showPrompt(field, promptText, promptType, false, options);
					}else{
						if (!isAjaxValidator) methods._closePrompt(field);
					}

					if (!isAjaxValidator) {
						field.trigger("jqv.field.result", [field, options.isError, promptText]);
					}

					/* Record error */
					var errindex = $.inArray(field[0], options.InvalidFields);
					if (errindex == -1) {
						if (options.isError)
						options.InvalidFields.push(field[0]);
					} else if (!options.isError) {
						options.InvalidFields.splice(errindex, 1);
					}

					methods._handleStatusCssClasses(field, options);

					/* run callback function for each field */
					if (options.isError && options.onFieldFailure)
						options.onFieldFailure(field);

					if (!options.isError && options.onFieldSuccess)
						options.onFieldSuccess(field);

					return options.isError;
				},
				/**
				* Handling css classes of fields indicating result of validation
				*
				* @param {jqObject}
				*            field
				* @param {Array[String]}
				*            field's validation rules
				* @private
				*/
				_handleStatusCssClasses: function(field, options) {
					/* remove all classes */
					if(options.addSuccessCssClassToField)
						field.removeClass(options.addSuccessCssClassToField);

					if(options.addFailureCssClassToField)
						field.removeClass(options.addFailureCssClassToField);

					/* Add classes */
					if (options.addSuccessCssClassToField && !options.isError)
						field.addClass(options.addSuccessCssClassToField);

					if (options.addFailureCssClassToField && options.isError)
						field.addClass(options.addFailureCssClassToField);
				},

				 /********************
				  * _getErrorMessage
				  *
				  * @param form
				  * @param field
				  * @param rule
				  * @param rules
				  * @param i
				  * @param options
				  * @param originalValidationMethod
				  * @return {*}
				  * @private
				  */
				 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
					 // If we are using the custon validation type, build the index for the rule.
					 // Otherwise if we are doing a function call, make the call and return the object
					 // that is passed back.
			 		 var rule_index = jQuery.inArray(rule, rules);
					 if (rule === "custom" || rule === "funcCall") {
						 var custom_validation_type = rules[rule_index + 1];
						 rule = rule + "[" + custom_validation_type + "]";
						 // Delete the rule from the rules array so that it doesn't try to call the
					    // same rule over again
					    delete(rules[rule_index]);
					 }
					 // Change the rule to the composite rule, if it was different from the original
					 var alteredRule = rule;


					 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
					 var element_classes_array = element_classes.split(" ");

					 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
					 var errorMsg;
					 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
						 errorMsg = originalValidationMethod(form, field, rules, i, options);
					 } else {
						 errorMsg = originalValidationMethod(field, rules, i, options);
					 }

					 // If the original validation method returned an error and we have a custom error message,
					 // return the custom message instead. Otherwise return the original error message.
					 if (errorMsg != undefined) {
						 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
						 if (custom_message) errorMsg = custom_message;
					 }
					 return errorMsg;

				 },
				 _getCustomErrorMessage:function (field, classes, rule, options) {
					var custom_message = false;
					var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
					 // If there is a validityProp for this rule, check to see if the field has an attribute for it
					if (validityProp != undefined) {
						custom_message = field.attr("data-errormessage-"+validityProp);
						// If there was an error message for it, return the message
						if (custom_message != undefined)
							return custom_message;
					}
					custom_message = field.attr("data-errormessage");
					 // If there is an inline custom error message, return it
					if (custom_message != undefined)
						return custom_message;
					var id = '#' + field.attr("id");
					// If we have custom messages for the element's id, get the message for the rule from the id.
					// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
					if (typeof options.custom_error_messages[id] != "undefined" &&
						typeof options.custom_error_messages[id][rule] != "undefined" ) {
								  custom_message = options.custom_error_messages[id][rule]['message'];
					} else if (classes.length > 0) {
						for (var i = 0; i < classes.length && classes.length > 0; i++) {
							 var element_class = "." + classes[i];
							if (typeof options.custom_error_messages[element_class] != "undefined" &&
								typeof options.custom_error_messages[element_class][rule] != "undefined") {
									custom_message = options.custom_error_messages[element_class][rule]['message'];
									break;
							}
						}
					}
					if (!custom_message &&
						typeof options.custom_error_messages[rule] != "undefined" &&
						typeof options.custom_error_messages[rule]['message'] != "undefined"){
							 custom_message = options.custom_error_messages[rule]['message'];
					 }
					 return custom_message;
				 },
				 _validityProp: {
					 "required": "value-missing",
					 "custom": "custom-error",
					 "groupRequired": "value-missing",
					 "ajax": "custom-error",
					 "minSize": "range-underflow",
					 "maxSize": "range-overflow",
					 "min": "range-underflow",
					 "max": "range-overflow",
					 "past": "type-mismatch",
					 "future": "type-mismatch",
					 "dateRange": "type-mismatch",
					 "dateTimeRange": "type-mismatch",
					 "maxCheckbox": "range-overflow",
					 "minCheckbox": "range-underflow",
					 "equals": "pattern-mismatch",
					 "funcCall": "custom-error",
					 "creditCard": "pattern-mismatch",
					 "condRequired": "value-missing"
				 },
				/**
				* Required validation
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
				* @return an error string if validation failed
				*/
				_required: function(field, rules, i, options, condRequired) {
					switch (field.prop("type")) {
						case "text":
						case "password":
						case "textarea":
						case "file":
						case "select-one":
						case "select-multiple":
						default:
							var field_val      = $.trim( field.val()                               );
							var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
							var placeholder    = $.trim( field.attr("placeholder")                 );
							if (
								   ( !field_val                                    )
								|| ( dv_placeholder && field_val == dv_placeholder )
								|| ( placeholder    && field_val == placeholder    )
							) {
								return options.allrules[rules[i]].alertText;
							}
							break;
						case "radio":
						case "checkbox":
							// new validation style to only check dependent field
							if (condRequired) {
								if (!field.attr('checked')) {
									return options.allrules[rules[i]].alertTextCheckboxMultiple;
								}
								break;
							}
							// old validation style
							var form = field.closest("form, .validationEngineContainer");
							var name = field.attr("name");
							if (form.find("input[name='" + name + "']:checked").size() == 0) {
								if (form.find("input[name='" + name + "']:visible").size() == 1)
									return options.allrules[rules[i]].alertTextCheckboxe;
								else
									return options.allrules[rules[i]].alertTextCheckboxMultiple;
							}
							break;
					}
				},
				/**
				* Validate that 1 from the group field is required
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_groupRequired: function(field, rules, i, options) {
					var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
					var isValid = false;
					// Check all fields from the group
					field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
						if(!methods._required($(this), rules, i, options)){
							isValid = true;
							return false;
						}
					});

					if(!isValid) {
				  return options.allrules[rules[i]].alertText;
				}
				},
				/**
				* Validate rules
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_custom: function(field, rules, i, options) {
					var customRule = rules[i + 1];
					var rule = options.allrules[customRule];
					var fn;
					if(!rule) {
						alert("jqv:custom rule not found - "+customRule);
						return;
					}

					if(rule["regex"]) {
						 var ex=rule.regex;
							if(!ex) {
								alert("jqv:custom regex not found - "+customRule);
								return;
							}
							var pattern = new RegExp(ex);

							if (!pattern.test(field.val())) return options.allrules[customRule].alertText;

					} else if(rule["func"]) {
						fn = rule["func"];

						if (typeof(fn) !== "function") {
							alert("jqv:custom parameter 'function' is no function - "+customRule);
								return;
						}

						if (!fn(field, rules, i, options))
							return options.allrules[customRule].alertText;
					} else {
						alert("jqv:custom type not allowed "+customRule);
							return;
					}
				},
				/**
				* Validate custom function outside of the engine scope
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_funcCall: function(field, rules, i, options) {
					var functionName = rules[i + 1];
					var fn;
					if(functionName.indexOf('.') >-1)
					{
						var namespaces = functionName.split('.');
						var scope = window;
						while(namespaces.length)
						{
							scope = scope[namespaces.shift()];
						}
						fn = scope;
					}
					else
						fn = window[functionName] || options.customFunctions[functionName];
					if (typeof(fn) == 'function')
						return fn(field, rules, i, options);

				},
				/**
				* Field match
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_equals: function(field, rules, i, options) {
					var equalsField = rules[i + 1];

					if (field.val() != $("#" + equalsField).val())
						return options.allrules.equals.alertText;
				},
				/**
				* Check the maximum size (in characters)
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_maxSize: function(field, rules, i, options) {
					var max = rules[i + 1];
					var len = field.val().length;

					if (len > max) {
						var rule = options.allrules.maxSize;
						return rule.alertText + max + rule.alertText2;
					}
				},
				/**
				* Check the minimum size (in characters)
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_minSize: function(field, rules, i, options) {
					var min = rules[i + 1];
					var len = field.val().length;

					if (len < min) {
						var rule = options.allrules.minSize;
						return rule.alertText + min + rule.alertText2;
					}
				},
				/**
				* Check number minimum value
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_min: function(field, rules, i, options) {
					var min = parseFloat(rules[i + 1]);
					var len = parseFloat(field.val());

					if (len < min) {
						var rule = options.allrules.min;
						if (rule.alertText2) return rule.alertText + min + rule.alertText2;
						return rule.alertText + min;
					}
				},
				/**
				* Check number maximum value
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_max: function(field, rules, i, options) {
					var max = parseFloat(rules[i + 1]);
					var len = parseFloat(field.val());

					if (len >max ) {
						var rule = options.allrules.max;
						if (rule.alertText2) return rule.alertText + max + rule.alertText2;
						//orefalo: to review, also do the translations
						return rule.alertText + max;
					}
				},
				/**
				* Checks date is in the past
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_past: function(form, field, rules, i, options) {

					var p=rules[i + 1];
					var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
					var pdate;

					if (p.toLowerCase() == "now") {
						pdate = new Date();
					} else if (undefined != fieldAlt.val()) {
						if (fieldAlt.is(":disabled"))
							return;
						pdate = methods._parseDate(fieldAlt.val());
					} else {
						pdate = methods._parseDate(p);
					}
					var vdate = methods._parseDate(field.val());

					if (vdate > pdate ) {
						var rule = options.allrules.past;
						if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
						return rule.alertText + methods._dateToString(pdate);
					}
				},
				/**
				* Checks date is in the future
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_future: function(form, field, rules, i, options) {

					var p=rules[i + 1];
					var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
					var pdate;

					if (p.toLowerCase() == "now") {
						pdate = new Date();
					} else if (undefined != fieldAlt.val()) {
						if (fieldAlt.is(":disabled"))
							return;
						pdate = methods._parseDate(fieldAlt.val());
					} else {
						pdate = methods._parseDate(p);
					}
					var vdate = methods._parseDate(field.val());

					if (vdate < pdate ) {
						var rule = options.allrules.future;
						if (rule.alertText2)
							return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
						return rule.alertText + methods._dateToString(pdate);
					}
				},
				/**
				* Checks if valid date
				*
				* @param {string} date string
				* @return a bool based on determination of valid date
				*/
				_isDate: function (value) {
					var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
					return dateRegEx.test(value);
				},
				/**
				* Checks if valid date time
				*
				* @param {string} date string
				* @return a bool based on determination of valid date time
				*/
				_isDateTime: function (value){
					var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
					return dateTimeRegEx.test(value);
				},
				//Checks if the start date is before the end date
				//returns true if end is later than start
				_dateCompare: function (start, end) {
					return (new Date(start.toString()) < new Date(end.toString()));
				},
				/**
				* Checks date range
				*
				* @param {jqObject} first field name
				* @param {jqObject} second field name
				* @return an error string if validation failed
				*/
				_dateRange: function (field, rules, i, options) {
					//are not both populated
					if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}

					//are not both dates
					if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}

					//are both dates but range is off
					if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}
				},
				/**
				* Checks date time range
				*
				* @param {jqObject} first field name
				* @param {jqObject} second field name
				* @return an error string if validation failed
				*/
				_dateTimeRange: function (field, rules, i, options) {
					//are not both populated
					if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}
					//are not both dates
					if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}
					//are both dates but range is off
					if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
						return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
					}
				},
				/**
				* Max number of checkbox selected
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_maxCheckbox: function(form, field, rules, i, options) {

					var nbCheck = rules[i + 1];
					var groupname = field.attr("name");
					var groupSize = form.find("input[name='" + groupname + "']:checked").size();
					if (groupSize > nbCheck) {
						options.showArrow = false;
						if (options.allrules.maxCheckbox.alertText2)
							 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
						return options.allrules.maxCheckbox.alertText;
					}
				},
				/**
				* Min number of checkbox selected
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_minCheckbox: function(form, field, rules, i, options) {

					var nbCheck = rules[i + 1];
					var groupname = field.attr("name");
					var groupSize = form.find("input[name='" + groupname + "']:checked").size();
					if (groupSize < nbCheck) {
						options.showArrow = false;
						return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
					}
				},
				/**
				* Checks that it is a valid credit card number according to the
				* Luhn checksum algorithm.
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return an error string if validation failed
				*/
				_creditCard: function(field, rules, i, options) {
					//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
					var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

					var numDigits = cardNumber.length;
					if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

						var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
						do {
							digit = parseInt(cardNumber.charAt(i));
							luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
						} while (--i >= 0)

						for (i = 0; i < luhn.length; i++) {
							sum += parseInt(luhn.charAt(i));
						}
						valid = sum % 10 == 0;
					}
					if (!valid) return options.allrules.creditCard.alertText;
				},
				/**
				* Ajax field validation
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				*            user options
				* @return nothing! the ajax validator handles the prompts itself
				*/
				 _ajax: function(field, rules, i, options) {

					 var errorSelector = rules[i + 1];
					 var rule = options.allrules[errorSelector];
					 var extraData = rule.extraData;
					 var extraDataDynamic = rule.extraDataDynamic;
					 var data = {
						"fieldId" : field.attr("id"),
						"fieldValue" : field.val()
					 };

					 if (typeof extraData === "object") {
						$.extend(data, extraData);
					 } else if (typeof extraData === "string") {
						var tempData = extraData.split("&");
						for(var i = 0; i < tempData.length; i++) {
							var values = tempData[i].split("=");
							if (values[0] && values[0]) {
								data[values[0]] = values[1];
							}
						}
					 }

					 if (extraDataDynamic) {
						 var tmpData = [];
						 var domIds = String(extraDataDynamic).split(",");
						 for (var i = 0; i < domIds.length; i++) {
							 var id = domIds[i];
							 if ($(id).length) {
								 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
								 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
								 data[id.replace('#', '')] = inputValue;
							 }
						 }
					 }

					 // If a field change event triggered this we want to clear the cache for this ID
					 if (options.eventTrigger == "field") {
						delete(options.ajaxValidCache[field.attr("id")]);
					 }

					 // If there is an error or if the the field is already validated, do not re-execute AJAX
					 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
						 $.ajax({
							 type: options.ajaxFormValidationMethod,
							 url: rule.url,
							 cache: false,
							 dataType: "json",
							 data: data,
							 field: field,
							 rule: rule,
							 methods: methods,
							 options: options,
							 beforeSend: function() {},
							 error: function(data, transport) {
								if (options.onFailure) {
									options.onFailure(data, transport);
								} else {
									methods._ajaxError(data, transport);
								}
							 },
							 success: function(json) {

								 // asynchronously called on success, data is the json answer from the server
								 var errorFieldId = json[0];
								 //var errorField = $($("#" + errorFieldId)[0]);
								 var errorField = $("#"+ errorFieldId).eq(0);

								 // make sure we found the element
								 if (errorField.length == 1) {
									 var status = json[1];
									 // read the optional msg from the server
									 var msg = json[2];
									 if (!status) {
										 // Houston we got a problem - display an red prompt
										 options.ajaxValidCache[errorFieldId] = false;
										 options.isError = true;

										 // resolve the msg prompt
										 if(msg) {
											 if (options.allrules[msg]) {
												 var txt = options.allrules[msg].alertText;
												 if (txt) {
													msg = txt;
									}
											 }
										 }
										 else
											msg = rule.alertText;

										 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
									 } else {
										 options.ajaxValidCache[errorFieldId] = true;

										 // resolves the msg prompt
										 if(msg) {
											 if (options.allrules[msg]) {
												 var txt = options.allrules[msg].alertTextOk;
												 if (txt) {
													msg = txt;
									}
											 }
										 }
										 else
										 msg = rule.alertTextOk;

										 if (options.showPrompts) {
											 // see if we should display a green prompt
											 if (msg)
												methods._showPrompt(errorField, msg, "pass", true, options);
											 else
												methods._closePrompt(errorField);
										}

										 // If a submit form triggered this, we want to re-submit the form
										 if (options.eventTrigger == "submit")
											field.closest("form").submit();
									 }
								 }
								 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
							 }
						 });

						 return rule.alertTextLoad;
					 }
				 },
				/**
				* Common method to handle ajax errors
				*
				* @param {Object} data
				* @param {Object} transport
				*/
				_ajaxError: function(data, transport) {
					if(data.status == 0 && transport == null)
						alert("The page is not served from a server! ajax call failed");
					else if(typeof console != "undefined")
						console.log("Ajax error: " + data.status + " " + transport);
				},
				/**
				* date -> string
				*
				* @param {Object} date
				*/
				_dateToString: function(date) {
					return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
				},
				/**
				* Parses an ISO date
				* @param {String} d
				*/
				_parseDate: function(d) {

					var dateParts = d.split("-");
					if(dateParts==d)
						dateParts = d.split("/");
					if(dateParts==d) {
						dateParts = d.split(".");
						return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
					}
					return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
				},
				/**
				* Builds or updates a prompt with the given information
				*
				* @param {jqObject} field
				* @param {String} promptText html text to display type
				* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
				* @param {boolean} ajaxed - use to mark fields than being validated with ajax
				* @param {Map} options user options
				*/
				 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
				 	//Check if we need to adjust what element to show the prompt on
					if(field.data('jqv-prompt-at') instanceof jQuery ){
						field = field.data('jqv-prompt-at');
					} else if(field.data('jqv-prompt-at')) {
						field = $(field.data('jqv-prompt-at'));
					}

					 var prompt = methods._getPrompt(field);
					 // The ajax submit errors are not see has an error in the form,
					 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
					 // Because no error was found befor submitting
					 if(ajaxform) prompt = false;
					 // Check that there is indded text
					 if($.trim(promptText)){
						 if (prompt)
							methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
						 else
							methods._buildPrompt(field, promptText, type, ajaxed, options);
					}
				 },
				/**
				* Builds and shades a prompt for the given field.
				*
				* @param {jqObject} field
				* @param {String} promptText html text to display type
				* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
				* @param {boolean} ajaxed - use to mark fields than being validated with ajax
				* @param {Map} options user options
				*/
				_buildPrompt: function(field, promptText, type, ajaxed, options) {

					// create the prompt
					var prompt = $('<div>');
					prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
					// add a class name to identify the parent form of the prompt
					prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
					prompt.addClass("formError");

					switch (type) {
						case "pass":
							prompt.addClass("greenPopup");
							break;
						case "load":
							prompt.addClass("blackPopup");
							break;
						default:
							/* it has error  */
							//alert("unknown popup type:"+type);
					}
					if (ajaxed)
						prompt.addClass("ajaxed");

					// create the prompt content
					var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

					// determine position type
					var positionType=field.data("promptPosition") || options.promptPosition;

					// create the css arrow pointing at the field
					// note that there is no triangle on max-checkbox and radio
					if (options.showArrow) {
						var arrow = $('<div>').addClass("formErrorArrow");

						//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
						if (typeof(positionType)=='string')
						{
							var pos=positionType.indexOf(":");
							if(pos!=-1)
								positionType=positionType.substring(0,pos);
						}

						switch (positionType) {
							case "bottomLeft":
							case "bottomRight":
								prompt.find(".formErrorContent").before(arrow);
								arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
								break;
							case "topLeft":
							case "topRight":
								arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
								prompt.append(arrow);
								break;
						}
					}
					// Add custom prompt class
					if (options.addPromptClass)
						prompt.addClass(options.addPromptClass);

		            // Add custom prompt class defined in element
		            var requiredOverride = field.attr('data-required-class');
		            if(requiredOverride !== undefined) {
		                prompt.addClass(requiredOverride);
		            } else {
		                if(options.prettySelect) {
		                    if($('#' + field.attr('id')).next().is('select')) {
		                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
		                        if(prettyOverrideClass !== undefined) {
		                            prompt.addClass(prettyOverrideClass);
		                        }
		                    }
		                }
		            }

					prompt.css({
						"opacity": 0
					});
					if(positionType === 'inline') {
						prompt.addClass("inline");
						if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
							prompt.appendTo($('#'+field.attr('data-prompt-target')));
						} else {
							field.after(prompt);
						}
					} else {
						field.before(prompt);
					}

					var pos = methods._calculatePosition(field, prompt, options);
					prompt.css({
						'position': positionType === 'inline' ? 'relative' : 'absolute',
						"top": pos.callerTopPosition,
						"left": pos.callerleftPosition,
						"marginTop": pos.marginTopSize,
						"opacity": 0
					}).data("callerField", field);


					if (options.autoHidePrompt) {
						setTimeout(function(){
							prompt.animate({
								"opacity": 0
							},function(){
								prompt.closest('.formErrorOuter').remove();
								prompt.remove();
							});
						}, options.autoHideDelay);
					}
					return prompt.animate({
						"opacity": 0.87
					});
				},
				/**
				* Updates the prompt text field - the field for which the prompt
				* @param {jqObject} field
				* @param {String} promptText html text to display type
				* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
				* @param {boolean} ajaxed - use to mark fields than being validated with ajax
				* @param {Map} options user options
				*/
				_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

					if (prompt) {
						if (typeof type !== "undefined") {
							if (type == "pass")
								prompt.addClass("greenPopup");
							else
								prompt.removeClass("greenPopup");

							if (type == "load")
								prompt.addClass("blackPopup");
							else
								prompt.removeClass("blackPopup");
						}
						if (ajaxed)
							prompt.addClass("ajaxed");
						else
							prompt.removeClass("ajaxed");

						prompt.find(".formErrorContent").html(promptText);

						var pos = methods._calculatePosition(field, prompt, options);
						var css = {"top": pos.callerTopPosition,
						"left": pos.callerleftPosition,
						"marginTop": pos.marginTopSize};

						if (noAnimation)
							prompt.css(css);
						else
							prompt.animate(css);
					}
				},
				/**
				* Closes the prompt associated with the given field
				*
				* @param {jqObject}
				*            field
				*/
				 _closePrompt: function(field) {
					 var prompt = methods._getPrompt(field);
					 if (prompt)
						 prompt.fadeTo("fast", 0, function() {
							 prompt.parent('.formErrorOuter').remove();
							 prompt.remove();
						 });
				 },
				 closePrompt: function(field) {
					 return methods._closePrompt(field);
				 },
				/**
				* Returns the error prompt matching the field if any
				*
				* @param {jqObject}
				*            field
				* @return undefined or the error prompt (jqObject)
				*/
				_getPrompt: function(field) {
						var formId = $(field).closest('form, .validationEngineContainer').attr('id');
					var className = methods._getClassName(field.attr("id")) + "formError";
						var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
					if (match)
					return $(match);
				},
				/**
				  * Returns the escapade classname
				  *
				  * @param {selector}
				  *            className
				  */
				  _escapeExpression: function (selector) {
					  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
				  },
				/**
				 * returns true if we are in a RTLed document
				 *
				 * @param {jqObject} field
				 */
				isRTL: function(field)
				{
					var $document = $(document);
					var $body = $('body');
					var rtl =
						(field && field.hasClass('rtl')) ||
						(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
						$document.hasClass('rtl') ||
						($document.attr('dir') || '').toLowerCase()==='rtl' ||
						$body.hasClass('rtl') ||
						($body.attr('dir') || '').toLowerCase()==='rtl';
					return Boolean(rtl);
				},
				/**
				* Calculates prompt position
				*
				* @param {jqObject}
				*            field
				* @param {jqObject}
				*            the prompt
				* @param {Map}
				*            options
				* @return positions
				*/
				_calculatePosition: function (field, promptElmt, options) {

					var promptTopPosition, promptleftPosition, marginTopSize;
					var fieldWidth 	= field.width();
					var fieldLeft 	= field.position().left;
					var fieldTop 	=  field.position().top;
					var fieldHeight 	=  field.height();
					var promptHeight = promptElmt.height();


					// is the form contained in an overflown container?
					promptTopPosition = promptleftPosition = 0;
					// compensation for the arrow
					marginTopSize = -promptHeight;


					//prompt positioning adjustment support
					//now you can adjust prompt position
					//usage: positionType:Xshift,Yshift
					//for example:
					//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
					//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
					//You can use +pixels, - pixels. If no sign is provided than + is default.
					var positionType=field.data("promptPosition") || options.promptPosition;
					var shift1="";
					var shift2="";
					var shiftX=0;
					var shiftY=0;
					if (typeof(positionType)=='string') {
						//do we have any position adjustments ?
						if (positionType.indexOf(":")!=-1) {
							shift1=positionType.substring(positionType.indexOf(":")+1);
							positionType=positionType.substring(0,positionType.indexOf(":"));

							//if any advanced positioning will be needed (percents or something else) - parser should be added here
							//for now we use simple parseInt()

							//do we have second parameter?
							if (shift1.indexOf(",") !=-1) {
								shift2=shift1.substring(shift1.indexOf(",") +1);
								shift1=shift1.substring(0,shift1.indexOf(","));
								shiftY=parseInt(shift2);
								if (isNaN(shiftY)) shiftY=0;
							};

							shiftX=parseInt(shift1);
							if (isNaN(shift1)) shift1=0;

						};
					};


					switch (positionType) {
						default:
						case "topRight":
							promptleftPosition +=  fieldLeft + fieldWidth - 27;
							promptTopPosition +=  fieldTop;
							break;

						case "topLeft":
							promptTopPosition +=  fieldTop;
							promptleftPosition += fieldLeft;
							break;

						case "centerRight":
							promptTopPosition = fieldTop+4;
							marginTopSize = 0;
							promptleftPosition= fieldLeft + field.outerWidth(true)+5;
							break;
						case "centerLeft":
							promptleftPosition = fieldLeft - (promptElmt.width() + 2);
							promptTopPosition = fieldTop+4;
							marginTopSize = 0;

							break;

						case "bottomLeft":
							promptTopPosition = fieldTop + field.height() + 5;
							marginTopSize = 0;
							promptleftPosition = fieldLeft;
							break;
						case "bottomRight":
							promptleftPosition = fieldLeft + fieldWidth - 27;
							promptTopPosition =  fieldTop +  field.height() + 5;
							marginTopSize = 0;
							break;
						case "inline":
							promptleftPosition = 0;
							promptTopPosition = 0;
							marginTopSize = 0;
					};



					//apply adjusments if any
					promptleftPosition += shiftX;
					promptTopPosition  += shiftY;

					return {
						"callerTopPosition": promptTopPosition + "px",
						"callerleftPosition": promptleftPosition + "px",
						"marginTopSize": marginTopSize + "px"
					};
				},
				/**
				* Saves the user options and variables in the form.data
				*
				* @param {jqObject}
				*            form - the form where the user option should be saved
				* @param {Map}
				*            options - the user options
				* @return the user options (extended from the defaults)
				*/
				 _saveOptions: function(form, options) {

					 // is there a language localisation ?
					 if ($.validationEngineLanguage)
					 var allRules = $.validationEngineLanguage.allRules;
					 else
					 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
					 // --- Internals DO NOT TOUCH or OVERLOAD ---
					 // validation rules and i18
					 $.validationEngine.defaults.allrules = allRules;

					 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

					 form.data('jqv', userOptions);
					 return userOptions;
				 },

				 /**
				 * Removes forbidden characters from class name
				 * @param {String} className
				 */
				 _getClassName: function(className) {
					 if(className)
						 return className.replace(/:/g, "_").replace(/\./g, "_");
							  },
				/**
				 * Escape special character for jQuery selector
				 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
				 * @param {String} selector
				 */
				 _jqSelector: function(str){
					return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
				},
				/**
				* Conditionally required field
				*
				* @param {jqObject} field
				* @param {Array[String]} rules
				* @param {int} i rules index
				* @param {Map}
				* user options
				* @return an error string if validation failed
				*/
				_condRequired: function(field, rules, i, options) {
					var idx, dependingField;

					for(idx = (i + 1); idx < rules.length; idx++) {
						dependingField = jQuery("#" + rules[idx]).first();

						/* Use _required for determining wether dependingField has a value.
						 * There is logic there for handling all field types, and default value; so we won't replicate that here
						 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
						 */
						if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
							/* We now know any of the depending fields has a value,
							 * so we can validate this field as per normal required code
							 */
							return methods._required(field, ["required"], 0, options);
						}
					}
				},

			    _submitButtonClick: function(event) {
			        var button = $(this);
			        var form = button.closest('form, .validationEngineContainer');
			        form.data("jqv_submitButton", button.attr("id"));
			    }
				  };

			 /**
			 * Plugin entry point.
			 * You may pass an action as a parameter or a list of options.
			 * if none, the init and attach methods are being called.
			 * Remember: if you pass options, the attached method is NOT called automatically
			 *
			 * @param {String}
			 *            method (optional) action
			 */
			 $.fn.validationEngine = function(method) {

				 var form = $(this);
				 if(!form[0]) return form;  // stop here if the form does not exist

				 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

					 // make sure init is called once
					 if(method != "showPrompt" && method != "hide" && method != "hideAll")
					 methods.init.apply(form);

					 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
				 } else if (typeof method == 'object' || !method) {

					 // default constructor with or without arguments
					 methods.init.apply(form, arguments);
					 return methods.attach.apply(form);
				 } else {
					 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
				 }
			};



			// LEAK GLOBAL OPTIONS
			$.validationEngine= {fieldIdCounter: 0,defaults:{

				// Name of the event triggering field validation
				validationEventTrigger: "blur",
				// Automatically scroll viewport to the first error
				scroll: true,
				// Focus on the first input
				focusFirstField:true,
				// Show prompts, set to false to disable prompts
				showPrompts: true,
		       // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
		       validateNonVisibleFields: false,
				// Opening box position, possible locations are: topLeft,
				// topRight, bottomLeft, centerRight, bottomRight, inline
				// inline gets inserted after the validated field or into an element specified in data-prompt-target
				promptPosition: "topRight",
				bindMethod:"bind",
				// internal, automatically set to true when it parse a _ajax rule
				inlineAjax: false,
				// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
				ajaxFormValidation: false,
				// The url to send the submit ajax validation (default to action)
				ajaxFormValidationURL: false,
				// HTTP method used for ajax validation
				ajaxFormValidationMethod: 'get',
				// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
				// retuns false if the form.submit event needs to be canceled.
				onAjaxFormComplete: $.noop,
				// called right before the ajax call, may return false to cancel
				onBeforeAjaxFormValidation: $.noop,
				// Stops form from submitting and execute function assiciated with it
				onValidationComplete: false,

				// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
				doNotShowAllErrosOnSubmit: false,
				// Object where you store custom messages to override the default error messages
				custom_error_messages:{},
				// true if you want to validate the input fields on blur event
				binded: true,
				// set to true, when the prompt arrow needs to be displayed
				showArrow: true,
				// set to false, determines if the prompt arrow should be displayed when validating
				// checkboxes and radio buttons
				showArrowOnRadioAndCheckbox: false,
				// did one of the validation fail ? kept global to stop further ajax validations
				isError: false,
				// Limit how many displayed errors a field can have
				maxErrorsPerField: false,

				// Caches field validation status, typically only bad status are created.
				// the array is used during ajax form validation to detect issues early and prevent an expensive submit
				ajaxValidCache: {},
				// Auto update prompt position after window resize
				autoPositionUpdate: false,

				InvalidFields: [],
				onFieldSuccess: false,
				onFieldFailure: false,
				onSuccess: false,
				onFailure: false,
				validateAttribute: "class",
				addSuccessCssClassToField: "",
				addFailureCssClassToField: "",

				// Auto-hide prompt
				autoHidePrompt: false,
				// Delay before auto-hide
				autoHideDelay: 10000,
				// Fade out duration while hiding the validations
				fadeDuration: 0.3,
			 // Use Prettify select library
			 prettySelect: false,
			 // Add css class on prompt
			 addPromptClass : "",
			 // Custom ID uses prefix
			 usePrefix: "",
			 // Custom ID uses suffix
			 useSuffix: "",
			 // Only show one message per error prompt
			 showOneMessage: false
			}};
			$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);

/*end validation engine*/
/*home js*/
;!function(){
    var l = console;
    var dataSO = function(){

      var userAgent=navigator.userAgent;//devuelve una cadena con el nombre del navegador ,version, sistema operativo (nombre generico) del usuario,motor del navegador.
      var platform = navigator.platform;
      var getNameBrowser = function(string){
        var resq=/(msie)|(firefox)|(chrome)|(opera)|(safari)|(android)/ig.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
        return resq;
      }
      var getNameSO = function(string){
        var resq=/(Win)|(Linux)|(Mac)/ig.exec(string.toLowerCase());//resq sera una matriz que contendra las coincidencias encontradas en la cadena segun el patron
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
        return resq;
      }
      var getNameDevice = function(string){
        var resq = /(Linux)|(Win32)|(iPad)|(iPhone)|(MacIntel)|(iPod)/ig.exec(string.toLowerCase());
        resq = (resq?((resq[0])?resq[0].toLowerCase():null):null);
        return resq;
      }
      return {
        browser:getNameBrowser(userAgent),//[0]
        so:getNameSO(userAgent),//[1]
        device:getNameDevice(platform)//[2]
      };
    }
    var dataStatic = {
                        browser:dataSO().browser,
                        so:dataSO().so,
                        device:dataSO().device
                      };
    console.log(dataStatic);
    var getVersionImage = function(data){
      data = data || {
        ruta :"/public/images/servicios/fondos/",//ruta de las imagenes
        cantidad:"",//numero de imagenes
        medida:"",//en blanco
        extension:"jpg"//extension por default de las imagenes
      }
      var lista = [];
      while(data.cantidad--){
        lista.push(data.ruta+(data.cantidad+1)+(data.medida?".":"")+data.medida+"."+data.extension);
      }
      return lista;
    }
    var isPC = (dataStatic.so == "win"||dataStatic.so == "linux"||dataStatic.so == "mac");
    var setBackground = function(esPC){
      switch(true){
        case(esPC)://si es PC
           $.backstretch(getVersionImage({
            ruta:"/public/images/servicios/fondos/",
            cantidad:5,//cantidad de imagenes
            medida:"",//version original
            extension:"jpg"
           }), {
              fade: 750,
              duration: 4000
          });
           l.log("es PC")
        break;
        case(!esPC)://es movil
          $.backstretch(getVersionImage({
            ruta:"/public/images/servicios/fondos/",
            cantidad:5,//cantidad de imagenes
            medida:"680x453",//version original
            extension:"jpg"
           }), {
              fade: 750,
              duration: 4000
          });
          l.log("es MOVIL")
        break;
        default:
          l.log("alta probabilidad de que sea PC");
      }
    }
    setBackground(isPC);
  var centro = $('.centro');
  var fondoSlide = $('.backstretch');
  centro.append(fondoSlide);
    dataStatic.condicionBrowser = (dataStatic.browser=="chrome"||dataStatic.browser=="firefox"||dataStatic.browser=="safari");
    if(dataStatic.condicionBrowser){
      $('.control-menu').tooltip();
      //console.log("tooltip activado")
    }
      
    var izquierda_bajo = $('#izquierda-bajo');
    var menu = $('.menu-p');
    var menu_oculto = $('._menu-p');

        menu_oculto.smint({
          'scrollSpeed':1000
        });
      menu_oculto.slicknav();
      $('.slicknav_menutxt').text("");
        var menu_responsive = $('.slicknav_nav');
        //l.log(menu_responsive)
        //menu_responsive.addClass('smint');
        menu_responsive.css({
        "position":"static"
      });
//Efectos del texto de titulo
   $('#texto-slider div:gt(0)').hide();
   setInterval(function(){
     $('#texto-slider div:first-child').fadeOut(0)
        .next('div').fadeIn(750)
        .end().appendTo('#texto-slider');}, 5000);
//Efectos del texto

    
        
//Control del menu responsive
      $('.slicknav_nav > a').on('click',function(event) {
        /*
          this: es el elemento <a> dentro del menu-p
          this.id: es el id del elemento. 
        */
        //l.log(this.id);
        $("._menu-p > #"+this.id).trigger('click');
      });
//Control del menu original(grande)
      $('.menu-p > a').on('click',function(event) {
        /*
          this: es el elemento <a> dentro del menu-p
          this.id: es el id del elemento. 
        */
        //l.log(this.id);
        $("._menu-p > #"+this.id).trigger('click');
      });
      var list_id = ['centro','nosotros','servicios','clientes','contactanos']
      //l.log(menu_responsive.children());
      menu_responsive.children().each(function(i,elem){
        //l.log(elem);
        elem.setAttribute('id', list_id[i]);
      })

        var ancho_pantalla = $(window).width();
        var alto_pantalla = $(window).height();

      var logo = $('#logo');
      logo.ubicacion = "pc";
      if(ancho_pantalla<480){
          $('.slicknav_menu').prepend(logo);
          logo.ubicacion = "movil";
      }
      /*Cada vez que se resetea el ancho del navegador*/
      $(window).on('resize',function(){
        //l.log("resize")
        var _ancho_pantalla = $(window).width();
        var _alto_pantalla = $(window).height();
        if(logo.ubicacion=="pc"&&_ancho_pantalla<=480){
          $('.slicknav_menu').prepend(logo);
          logo.ubicacion = "movil";
          //l.log("ancho :"+ _ancho_pantalla+ " version movil");
        }
        else if(logo.ubicacion=="movil"&&_ancho_pantalla>480){
          $('#cuerpo').prepend(logo);
          logo.ubicacion = "pc";
          //l.log("ancho :"+ _ancho_pantalla+ " version pc");
        }
      })
      /*Cada vez que se resetea el ancho del navegador*/
      
      izquierda_bajo.estado = true;//open
      var iconoBtnControlMenu = $('.control-menu>.fa');
      var btnControlMenu = $('.control-menu');

      btnControlMenu.on('click',function(e){
        var b = $('.control-menu')[0];//cojo al elemento en su forma nativa como javascript
        var margen_izquierdo = izquierda_bajo.width() - 20;
        if(izquierda_bajo.estado){
          izquierda_bajo.animate({
            "left": "-="+margen_izquierdo+"px"},
            900, function() {
            izquierda_bajo.estado = false;
            iconoBtnControlMenu.removeClass('fa-chevron-left');
            iconoBtnControlMenu.addClass('fa-chevron-right');
            izquierda_bajo.css({
              "visibility":"hidden"
            });
            btnControlMenu.css({
              "visibility":"visible"
            });
            if(dataStatic.condicionBrowser){
              b.dataset.originalTitle = "Mostrar menu";
            }
              
          });//izquierda_bajo.css
        }else {
          izquierda_bajo.animate({
              "left": "+="+margen_izquierdo+"px"},
              700, function() {
              izquierda_bajo.estado = true;
              iconoBtnControlMenu.removeClass('fa-chevron-right');
              iconoBtnControlMenu.addClass('fa-chevron-left');
              izquierda_bajo.css({
                "visibility":"visible"
              });
              if(dataStatic.condicionBrowser){
                b.dataset.originalTitle = "Ocultar menu";
              }
            })//function
        }//else 
      });//btnControlMenu.on("click",...)
  
/*SECCION CONTACTANOS*/
  $("#formID").validationEngine('attach',{
    onValidationComplete : function(form,status){
      //l.log(form + " : " + status);
      if(status){
        enviar();
        //l.log($(this).contents());
      }
    }
  });

var enviar = function(){

  var name = $("#formID .name").val(),
  email = $("#formID .email").val(),
  telefono = $("#formID .telefono").val(),
  message = $("#formID .message").val(),
  modalMessage = $("#Message"),
  data = {
    nombre:name,
    email:email,
    telefono:telefono,
    mensaje:message,
  };
  l.log(data)
  //reset.trigger('click');
  modalMessage.modal('show');
  $.ajax({
    url: '/public/php/contacto.php',
    type: 'POST',
    dataType: 'json',
    data: {query:data}
  })
  .done(function(estado) {//estado es la respuesta
    if(estado=="true"){
      modalMessage.modal('show');
      //l.log("msj. enviado, se mostro el modal!!");
    }else{
      l.log("error al enviar");
    }
  });

}//function enviar()
/****SECCION CONTACTANOS*/

}(window,jQuery,undefined)

/*end home js*/
