"use strict";(self.webpackChunkblock_note=self.webpackChunkblock_note||[]).push([[6104],{6104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});const r=function(e,t,n,r,i){const a=o(t);if(null!==n&&void 0!==n&&("number"!==typeof n||n<0||n===Number.POSITIVE_INFINITY))throw new Error("Expected positive finite `index`");if(null!==r&&void 0!==r&&(!r.type||!r.children))throw new Error("Expected valid `parent`");if((null===n||void 0===n)!==(null===r||void 0===r))throw new Error("Expected both `index` and `parent`");return!!u(e)&&a.call(i,e,n,r)},o=function(e){if(null===e||void 0===e)return a;if("string"===typeof e)return function(e){return i(t);function t(t){return t.tagName===e}}(e);if("object"===typeof e)return function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=o(e[n]);return i(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e);if("function"===typeof e)return i(e);throw new Error("Expected function, string, or array as `test`")};function i(e){return function(t,n,r){return Boolean(u(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function a(e){return Boolean(e&&"object"===typeof e&&"type"in e&&"element"===e.type&&"tagName"in e&&"string"===typeof e.tagName)}function u(e){return null!==e&&"object"===typeof e&&"type"in e&&"tagName"in e}const c=o((function(e){return"audio"===e.tagName||"canvas"===e.tagName||"embed"===e.tagName||"iframe"===e.tagName||"img"===e.tagName||"math"===e.tagName||"object"===e.tagName||"picture"===e.tagName||"svg"===e.tagName||"video"===e.tagName}));var l=n(478);const f=function(e){if(null===e||void 0===e)return s;if("function"===typeof e)return p(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=f(e[n]);return p(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return p(n);function n(n){const r=n;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}(e);if("string"===typeof e)return function(e){return p(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function p(e){return function(t,n,r){return Boolean(d(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function s(){return!0}function d(e){return null!==e&&"object"===typeof e&&"type"in e}const h=["address","article","aside","blockquote","body","br","caption","center","col","colgroup","dd","dialog","dir","div","dl","dt","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","legend","li","li","listing","main","menu","nav","ol","optgroup","option","p","plaintext","pre","section","summary","table","tbody","td","td","tfoot","th","th","thead","tr","ul","wbr","xmp"],m=["button","input","select","textarea"],g=["area","base","basefont","dialog","datalist","head","link","meta","noembed","noframes","param","rp","script","source","style","template","track","title"],y={},b=f(["comment","doctype"]);function v(e,t){if("children"in e){const n={...t};return("root"===e.type||k(e))&&(n.before=!0,n.after=!0),n.whitespace=function(e,t){if("tagName"in e&&e.properties)switch(e.tagName){case"listing":case"plaintext":case"script":case"style":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return e.properties.wrap?"pre-wrap":"pre";case"td":case"th":return e.properties.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}return t.whitespace}(e,t),function(e,t){let n=t.before;const r=t.after,o=e.children;let i=o.length,a=-1;for(;++a<i;){const e=v(o[a],{...t,after:w(o,a,r),before:n});e.remove?(o.splice(a,1),a--,i--):e.ignore||(n=e.stripAtStart),x(o[a])&&(n=!1)}return{ignore:!1,stripAtStart:Boolean(n||r),remove:!1}}(e,n)}if("text"===e.type){if("normal"===t.whitespace)return function(e,t){const n=t.collapse(e.value),r={ignore:!1,stripAtStart:!1,remove:!1};let o=0,i=n.length;t.before&&E(n.charAt(0))&&o++;o!==i&&E(n.charAt(i-1))&&(t.after?i--:r.stripAtStart=!0);o===i?r.remove=!0:e.value=n.slice(o,i);return r}(e,t);"nowrap"===t.whitespace&&(e.value=t.collapse(e.value))}return{ignore:b(e),stripAtStart:!1,remove:!1}}function w(e,t,n){for(;++t<e.length;){const n=e[t];let r=N(n);if(void 0===r&&"children"in n&&!A(n)&&(r=w(n.children,-1)),"boolean"===typeof r)return r}return n}function N(e){if("element"===e.type){if(x(e))return!1;if(k(e))return!0}else if("text"===e.type){if(!(0,l.m)(e))return!1}else if(!b(e))return!1}function x(e){return c(e)||r(e,m)}function k(e){return r(e,h)}function A(e){return Boolean("element"===e.type&&e.properties.hidden)||b(e)||r(e,g)}function E(e){return" "===e||"\n"===e}function j(e){const t=/\r?\n|\r/.exec(e);return t?t[0]:" "}function S(){return" "}function I(e){return function(t){return String(t).replace(/[\t\n\v\f\r ]+/g,e)}}const B={}.hasOwnProperty;const P=new Set(["pingback","prefetch","stylesheet"]);const O=o(["a","abbr","area","b","bdi","bdo","br","button","cite","code","data","datalist","del","dfn","em","i","input","ins","kbd","keygen","label","map","mark","meter","noscript","output","progress","q","ruby","s","samp","script","select","small","span","strong","sub","sup","template","textarea","time","u","var","wbr"]),_=o("meta");function q(e){return Boolean("text"===e.type||O(e)||c(e)||function(e){if("element"!==e.type||"link"!==e.tagName)return!1;if(e.properties.itemProp)return!0;const t=e.properties.rel;let n=-1;if(!Array.isArray(t)||0===t.length)return!1;for(;++n<t.length;)if(!P.has(String(t[n])))return!1;return!0}(e)||_(e)&&function(e,t){const n="element"===e.type&&B.call(e.properties,t)&&e.properties[t];return null!==n&&void 0!==n&&!1!==n}(e,"itemProp"))}const C=["pre","script","style","textarea"];const T=[],F=!0,M=!1,V="skip";function W(e,t,n,r){let o;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):o=t;const i=f(o),a=r?-1:1;!function e(o,u,c){const l=o&&"object"===typeof o?o:{};if("string"===typeof l.type){const e="string"===typeof l.tagName?l.tagName:"string"===typeof l.name?l.name:void 0;Object.defineProperty(f,"name",{value:"node ("+o.type+(e?"<"+e+">":"")+")"})}return f;function f(){let l,f,p,s=T;if((!t||i(o,u,c[c.length-1]||void 0))&&(s=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[F,e];return null===e||void 0===e?T:[e]}(n(o,c)),s[0]===M))return s;if("children"in o&&o.children){const t=o;if(t.children&&s[0]!==V)for(f=(r?t.children.length:-1)+a,p=c.concat(t);f>-1&&f<t.children.length;){const n=t.children[f];if(l=e(n,f,p)(),l[0]===M)return l;f="number"===typeof l[1]?l[1]:f+a}}return s}}(e,void 0,[])()}const Y={};function $(e,t){const n=t||Y,r={blanks:n.blanks||[],head:!1,indentInitial:!1!==n.indentInitial,indent:"number"===typeof n.indent?" ".repeat(n.indent):"string"===typeof n.indent?n.indent:"  "};function o(e,t,n){const o=e[e.length-1],i=o&&(0,l.m)(o)?e[e.length-2]:o,a=(z(r,i)&&z(r,n)?"\n\n":"\n")+r.indent.repeat(Math.max(t,0));o&&"text"===o.type?o.value=(0,l.m)(o)?a:o.value+a:e.push({type:"text",value:a})}!function(e,t){v(e,{collapse:I((t||y).newlines?j:S),whitespace:"normal"})}(e,{newlines:!0}),W(e,(function(e,t){if(!("children"in e))return;"element"===e.type&&"head"===e.tagName&&(r.head=!0);r.head&&"element"===e.type&&"body"===e.tagName&&(r.head=!1);if("element"===e.type&&C.includes(e.tagName))return V;if(0===e.children.length||!D(r,e))return;let n=t.length;r.indentInitial||n--;let i=!1;for(const o of e.children)"comment"!==o.type&&"text"!==o.type||(o.value.includes("\n")&&(i=!0),o.value=o.value.replace(/ *\n/g,"$&"+r.indent.repeat(n)));const a=[];let u;for(const c of e.children)(D(r,c)||i&&!u)&&(o(a,n,c),i=!0),u=c,a.push(c);u&&(i||D(r,u))&&((0,l.m)(u)&&(a.pop(),u=a[a.length-1]),o(a,n-1));e.children=a}))}function z(e,t){return Boolean(t&&"element"===t.type&&e.blanks.length>0&&e.blanks.includes(t.tagName))}function D(e,t){return"root"===t.type||"element"===t.type&&(e.head||"script"===t.tagName||c(t)||!q(t))}function G(e){return function(t){$(t,e)}}}}]);
//# sourceMappingURL=6104.ddc6f3e8.chunk.js.map