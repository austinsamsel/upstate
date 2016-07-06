!function(global,module){function expect(t){return new Assertion(t)}function Assertion(t,e,n){if(this.obj=t,this.flags={},void 0!=n){this.flags[e]=!0;for(var r in n.flags)n.flags.hasOwnProperty(r)&&(this.flags[r]=!0)}var o=e?flags[e]:keys(flags),i=this;if(o)for(var r=0,s=o.length;s>r;r++)if(!this.flags[o[r]]){var u=o[r],f=new Assertion(this.obj,u,this);if("function"==typeof Assertion.prototype[u]){var a=this[u];this[u]=function(){return a.apply(i,arguments)};for(var p in Assertion.prototype)Assertion.prototype.hasOwnProperty(p)&&p!=u&&(this[u][p]=bind(f[p],f))}else this[u]=f}}function bind(t,e){return function(){return t.apply(e,arguments)}}function every(t,e,n){for(var r=n||global,o=0,i=t.length;i>o;++o)if(!e.call(r,t[o],o,t))return!1;return!0}function indexOf(t,e,n){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);if(void 0===t.length)return-1;for(var r=t.length,n=0>n?0>n+r?0:n+r:n||0;r>n&&t[n]!==e;n++);return n>=r?-1:n}/**
   * Inspects an object.
   *
   * @see taken from node.js `util` module (copyright Joyent, MIT license)
   * @api private
   */
function i(t,e,n){function r(t){return t}function o(t,n){if(t&&"function"==typeof t.inspect&&t!==exports&&(!t.constructor||t.constructor.prototype!==t))return t.inspect(n);switch(typeof t){case"undefined":return r("undefined","undefined");case"string":var s="'"+json.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r(s,"string");case"number":return r(""+t,"number");case"boolean":return r(""+t,"boolean")}if(null===t)return r("null","null");if(isDOMElement(t))return getOuterHTML(t);var u=keys(t),f=e?Object.getOwnPropertyNames(t):u;if("function"==typeof t&&0===f.length){if(isRegExp(t))return r(""+t,"regexp");var a=t.name?": "+t.name:"";return r("[Function"+a+"]","special")}if(isDate(t)&&0===f.length)return r(t.toUTCString(),"date");var p,c,l;if(isArray(t)?(c="Array",l=["[","]"]):(c="Object",l=["{","}"]),"function"==typeof t){var h=t.name?": "+t.name:"";p=isRegExp(t)?" "+t:" [Function"+h+"]"}else p="";if(isDate(t)&&(p=" "+t.toUTCString()),0===f.length)return l[0]+p+l[1];if(0>n)return isRegExp(t)?r(""+t,"regexp"):r("[Object]","special");i.push(t);var y=map(f,function(e){var s,f;if(t.__lookupGetter__&&(t.__lookupGetter__(e)?f=t.__lookupSetter__(e)?r("[Getter/Setter]","special"):r("[Getter]","special"):t.__lookupSetter__(e)&&(f=r("[Setter]","special"))),indexOf(u,e)<0&&(s="["+e+"]"),f||(indexOf(i,t[e])<0?(f=null===n?o(t[e]):o(t[e],n-1),f.indexOf("\n")>-1&&(f=isArray(t)?map(f.split("\n"),function(t){return"  "+t}).join("\n").substr(2):"\n"+map(f.split("\n"),function(t){return"   "+t}).join("\n"))):f=r("[Circular]","special")),"undefined"==typeof s){if("Array"===c&&e.match(/^\d+$/))return f;s=json.stringify(""+e),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=r(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=r(s,"string"))}return s+": "+f});i.pop();var b=0,g=reduce(y,function(t,e){return b++,indexOf(e,"\n")>=0&&b++,t+e.length+1},0);return y=g>50?l[0]+(""===p?"":p+"\n ")+" "+y.join(",\n  ")+" "+l[1]:l[0]+p+" "+y.join(", ")+" "+l[1]}var i=[];return o(t,"undefined"==typeof n?2:n)}function isArray(t){return"[object Array]"==Object.prototype.toString.call(t)}function isRegExp(t){var e;try{e=""+t}catch(n){return!1}return t instanceof RegExp||"function"==typeof t&&"RegExp"===t.constructor.name&&t.compile&&t.test&&t.exec&&e.match(/^\/.*\/[gim]{0,3}$/)}function isDate(t){return t instanceof Date?!0:!1}function keys(t){if(Object.keys)return Object.keys(t);var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}function map(t,e,n){if(Array.prototype.map)return Array.prototype.map.call(t,e,n);for(var r=new Array(t.length),o=0,i=t.length;i>o;o++)o in t&&(r[o]=e.call(n,t[o],o,t));return r}function reduce(t,e){if(Array.prototype.reduce)return Array.prototype.reduce.apply(t,Array.prototype.slice.call(arguments,1));var n=+this.length;if("function"!=typeof e)throw new TypeError;if(0===n&&1===arguments.length)throw new TypeError;var r=0;if(arguments.length>=2)var o=arguments[1];else for(;;){if(r in this){o=this[r++];break}if(++r>=n)throw new TypeError}for(;n>r;r++)r in this&&(o=e.call(null,o,this[r],r,this));return o}function isUndefinedOrNull(t){return null===t||void 0===t}function isArguments(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function objEquiv(t,e){if(isUndefinedOrNull(t)||isUndefinedOrNull(e))return!1;if(t.prototype!==e.prototype)return!1;if(isArguments(t))return isArguments(e)?(t=pSlice.call(t),e=pSlice.call(e),expect.eql(t,e)):!1;try{var n,r,o=keys(t),i=keys(e)}catch(s){return!1}if(o.length!=i.length)return!1;for(o.sort(),i.sort(),r=o.length-1;r>=0;r--)if(o[r]!=i[r])return!1;for(r=o.length-1;r>=0;r--)if(n=o[r],!expect.eql(t[n],e[n]))return!1;return!0}if("undefined"==typeof module)var module={exports:{}},exports=module.exports;module.exports=expect,expect.Assertion=Assertion,expect.version="0.1.2";var flags={not:["to","be","have","include","only"],to:["be","have","include","only","not"],only:["have"],have:["own"],be:["an"]};Assertion.prototype.assert=function(t,e,n){var e=this.flags.not?n:e,r=this.flags.not?!t:t;if(!r)throw new Error(e.call(this));this.and=new Assertion(this.obj)},Assertion.prototype.ok=function(){this.assert(!!this.obj,function(){return"expected "+i(this.obj)+" to be truthy"},function(){return"expected "+i(this.obj)+" to be falsy"})},Assertion.prototype.throwError=Assertion.prototype.throwException=function(t){expect(this.obj).to.be.a("function");var e=!1,n=this.flags.not;try{this.obj()}catch(r){if("function"==typeof t)t(r);else if("object"==typeof t){var o="string"==typeof r?r:r.message;n?expect(o).to.not.match(t):expect(o).to.match(t)}e=!0}"object"==typeof t&&n&&(this.flags.not=!1);var i=this.obj.name||"fn";this.assert(e,function(){return"expected "+i+" to throw an exception"},function(){return"expected "+i+" not to throw an exception"})},Assertion.prototype.empty=function(){var t;return"object"!=typeof this.obj||null===this.obj||isArray(this.obj)?("string"!=typeof this.obj&&expect(this.obj).to.be.an("object"),expect(this.obj).to.have.property("length"),t=!this.obj.length):t="number"==typeof this.obj.length?!this.obj.length:!keys(this.obj).length,this.assert(t,function(){return"expected "+i(this.obj)+" to be empty"},function(){return"expected "+i(this.obj)+" to not be empty"}),this},Assertion.prototype.be=Assertion.prototype.equal=function(t){return this.assert(t===this.obj,function(){return"expected "+i(this.obj)+" to equal "+i(t)},function(){return"expected "+i(this.obj)+" to not equal "+i(t)}),this},Assertion.prototype.eql=function(t){return this.assert(expect.eql(t,this.obj),function(){return"expected "+i(this.obj)+" to sort of equal "+i(t)},function(){return"expected "+i(this.obj)+" to sort of not equal "+i(t)}),this},Assertion.prototype.within=function(t,e){var n=t+".."+e;return this.assert(this.obj>=t&&this.obj<=e,function(){return"expected "+i(this.obj)+" to be within "+n},function(){return"expected "+i(this.obj)+" to not be within "+n}),this},Assertion.prototype.a=Assertion.prototype.an=function(t){if("string"==typeof t){var e=/^[aeiou]/.test(t)?"n":"";this.assert("array"==t?isArray(this.obj):"object"==t?"object"==typeof this.obj&&null!==this.obj:t==typeof this.obj,function(){return"expected "+i(this.obj)+" to be a"+e+" "+t},function(){return"expected "+i(this.obj)+" not to be a"+e+" "+t})}else{var n=t.name||"supplied constructor";this.assert(this.obj instanceof t,function(){return"expected "+i(this.obj)+" to be an instance of "+n},function(){return"expected "+i(this.obj)+" not to be an instance of "+n})}return this},Assertion.prototype.greaterThan=Assertion.prototype.above=function(t){return this.assert(this.obj>t,function(){return"expected "+i(this.obj)+" to be above "+t},function(){return"expected "+i(this.obj)+" to be below "+t}),this},Assertion.prototype.lessThan=Assertion.prototype.below=function(t){return this.assert(this.obj<t,function(){return"expected "+i(this.obj)+" to be below "+t},function(){return"expected "+i(this.obj)+" to be above "+t}),this},Assertion.prototype.match=function(t){return this.assert(t.exec(this.obj),function(){return"expected "+i(this.obj)+" to match "+t},function(){return"expected "+i(this.obj)+" not to match "+t}),this},Assertion.prototype.length=function(t){expect(this.obj).to.have.property("length");var e=this.obj.length;return this.assert(t==e,function(){return"expected "+i(this.obj)+" to have a length of "+t+" but got "+e},function(){return"expected "+i(this.obj)+" to not have a length of "+e}),this},Assertion.prototype.property=function(t,e){if(this.flags.own)return this.assert(Object.prototype.hasOwnProperty.call(this.obj,t),function(){return"expected "+i(this.obj)+" to have own property "+i(t)},function(){return"expected "+i(this.obj)+" to not have own property "+i(t)}),this;if(this.flags.not&&void 0!==e){if(void 0===this.obj[t])throw new Error(i(this.obj)+" has no property "+i(t))}else{var n;try{n=t in this.obj}catch(r){n=void 0!==this.obj[t]}this.assert(n,function(){return"expected "+i(this.obj)+" to have a property "+i(t)},function(){return"expected "+i(this.obj)+" to not have a property "+i(t)})}return void 0!==e&&this.assert(e===this.obj[t],function(){return"expected "+i(this.obj)+" to have a property "+i(t)+" of "+i(e)+", but got "+i(this.obj[t])},function(){return"expected "+i(this.obj)+" to not have a property "+i(t)+" of "+i(e)}),this.obj=this.obj[t],this},Assertion.prototype.string=Assertion.prototype.contain=function(t){return"string"==typeof this.obj?this.assert(~this.obj.indexOf(t),function(){return"expected "+i(this.obj)+" to contain "+i(t)},function(){return"expected "+i(this.obj)+" to not contain "+i(t)}):this.assert(~indexOf(this.obj,t),function(){return"expected "+i(this.obj)+" to contain "+i(t)},function(){return"expected "+i(this.obj)+" to not contain "+i(t)}),this},Assertion.prototype.key=Assertion.prototype.keys=function(t){var e,n=!0;if(t=isArray(t)?t:Array.prototype.slice.call(arguments),!t.length)throw new Error("keys required");var r=keys(this.obj),o=t.length;if(n=every(t,function(t){return~indexOf(r,t)}),!this.flags.not&&this.flags.only&&(n=n&&t.length==r.length),o>1){t=map(t,function(t){return i(t)});var s=t.pop();e=t.join(", ")+", and "+s}else e=i(t[0]);return e=(o>1?"keys ":"key ")+e,e=(this.flags.only?"only have ":"include ")+e,this.assert(n,function(){return"expected "+i(this.obj)+" to "+e},function(){return"expected "+i(this.obj)+" to not "+e}),this},Assertion.prototype.fail=function(t){return t=t||"explicit failure",this.assert(!1,t,t),this};var getOuterHTML=function(t){if("outerHTML"in t)return t.outerHTML;var e,n="http://www.w3.org/1999/xhtml",r=document.createElementNS(n,"_"),o=((window.HTMLElement||window.Element).prototype,new XMLSerializer);return document.xmlVersion?o.serializeToString(t):(r.appendChild(t.cloneNode(!1)),e=r.innerHTML.replace("><",">"+t.innerHTML+"<"),r.innerHTML="",e)},isDOMElement=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName};/**
   * Asserts deep equality
   *
   * @see taken from node.js `assert` module (copyright Joyent, MIT license)
   * @api private
   */
expect.eql=function(t,e){if(t===e)return!0;if("undefined"!=typeof Buffer&&Buffer.isBuffer(t)&&Buffer.isBuffer(e)){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():"object"!=typeof t&&"object"!=typeof e?t==e:objEquiv(t,e)};var json=function(){"use strict";function f(t){return 10>t?"0"+t:t}function date(t,e){return isFinite(t.valueOf())?t.getUTCFullYear()+"-"+f(t.getUTCMonth()+1)+"-"+f(t.getUTCDate())+"T"+f(t.getUTCHours())+":"+f(t.getUTCMinutes())+":"+f(t.getUTCSeconds())+"Z":null}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,o,i,s,u=gap,f=e[t];switch(f instanceof Date&&(f=date(t)),"function"==typeof rep&&(f=rep.call(e,t,f)),typeof f){case"string":return quote(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":return String(f);case"object":if(!f)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(f)){for(i=f.length,n=0;i>n;n+=1)s[n]=str(n,f)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+u+"]":"["+s.join(",")+"]",gap=u,o}if(rep&&"object"==typeof rep)for(i=rep.length,n=0;i>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,f),o&&s.push(quote(r)+(gap?": ":":")+o));else for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(o=str(r,f),o&&s.push(quote(r)+(gap?": ":":")+o));return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+u+"}":"{"+s.join(",")+"}",gap=u,o}}if("object"==typeof JSON&&JSON.parse&&JSON.stringify)return{parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;return JSON.stringify=function(t,e,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})},JSON.parse=function(text,reviver){function walk(t,e){var n,r,o=t[e];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")},JSON}();"undefined"!=typeof window&&(window.expect=module.exports)}(this,"undefined"!=typeof module?module:{},"undefined"!=typeof exports?exports:{});