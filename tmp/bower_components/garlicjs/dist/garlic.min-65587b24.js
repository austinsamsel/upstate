!function(t){var e=function(t){this.defined="undefined"!=typeof localStorage};e.prototype={constructor:e,get:function(t,e){return localStorage.getItem(t)?localStorage.getItem(t):"undefined"!=typeof e?e:null},has:function(t){return localStorage.getItem(t)?!0:!1},set:function(t,e,i){return"string"==typeof e&&(""===e?this.destroy(t):localStorage.setItem(t,e)),"function"==typeof i?i():!0},destroy:function(t,e){return localStorage.removeItem(t),"function"==typeof e?e():!0},clean:function(t){for(var e=localStorage.length-1;e>=0;e--)"undefined"==typeof Array.indexOf&&-1!==localStorage.key(e).indexOf("garlic:")&&localStorage.removeItem(localStorage.key(e));return"function"==typeof t?t():!0},clear:function(t){return localStorage.clear(),"function"==typeof t?t():!0}};var i=function(t,e,i){this.init("garlic",t,e,i)};i.prototype={constructor:i,init:function(e,i,n,s){this.type=e,this.$element=t(i),this.options=this.getOptions(s),this.storage=n,this.path=this.options.getPath(this.$element)||this.getPath(),this.parentForm=this.$element.closest("form"),this.$element.addClass("garlic-auto-save"),this.expiresFlag=this.options.expires?(this.$element.data("expires")?this.path:this.getPath(this.parentForm))+"_flag":!1,this.$element.on(this.options.events.join("."+this.type+" "),!1,t.proxy(this.persist,this)),this.options.destroy&&t(this.parentForm).on("submit reset",!1,t.proxy(this.destroy,this)),this.retrieve()},getOptions:function(e){return t.extend({},t.fn[this.type].defaults,e,this.$element.data())},persist:function(){this.val!==this.getVal()&&(this.val=this.getVal(),this.options.expires&&this.storage.set(this.expiresFlag,((new Date).getTime()+1e3*this.options.expires).toString()),this.storage.set(this.path,this.getVal()),this.options.onPersist(this.$element,this.getVal()))},getVal:function(){return this.$element.is("input[type=checkbox]")?this.$element.prop("checked")?"checked":"unchecked":this.$element.val()},retrieve:function(){if(this.storage.has(this.path)){if(this.options.expires){var t=(new Date).getTime();if(this.storage.get(this.expiresFlag)<t.toString())return void this.storage.destroy(this.path);this.$element.attr("expires-in",Math.floor((parseInt(this.storage.get(this.expiresFlag))-t)/1e3))}if(t=this.storage.get(this.path),this.options.conflictManager.enabled&&this.detectConflict())return this.conflictManager();if(this.$element.is("input[type=radio], input[type=checkbox]")){if("checked"===t||this.$element.val()===t)return this.$element.attr("checked",!0);"unchecked"===t&&this.$element.attr("checked",!1)}else this.$element.val(t),this.$element.trigger("input"),this.options.onRetrieve(this.$element,t)}},detectConflict:function(){var e=this;if(this.$element.is("input[type=checkbox], input[type=radio]"))return!1;if(this.$element.val()&&this.storage.get(this.path)!==this.$element.val()){if(this.$element.is("select")){var i=!1;return this.$element.find("option").each(function(){0!==t(this).index()&&t(this).attr("selected")&&t(this).val()!==e.storage.get(this.path)&&(i=!0)}),i}return!0}return!1},conflictManager:function(){return"function"!=typeof this.options.conflictManager.onConflictDetected||this.options.conflictManager.onConflictDetected(this.$element,this.storage.get(this.path))?(this.options.conflictManager.garlicPriority?(this.$element.data("swap-data",this.$element.val()),this.$element.data("swap-state","garlic"),this.$element.val(this.storage.get(this.path))):(this.$element.data("swap-data",this.storage.get(this.path)),this.$element.data("swap-state","default")),this.swapHandler(),this.$element.addClass("garlic-conflict-detected"),void this.$element.closest("input[type=submit]").attr("disabled",!0)):!1},swapHandler:function(){var e=t(this.options.conflictManager.template);this.$element.after(e.text(this.options.conflictManager.message)),e.on("click",!1,t.proxy(this.swap,this))},swap:function(){var e=this.$element.data("swap-data");this.$element.data("swap-state","garlic"===this.$element.data("swap-state")?"default":"garlic"),this.$element.data("swap-data",this.$element.val()),t(this.$element).val(e)},destroy:function(){this.storage.destroy(this.path)},remove:function(){this.remove(),this.$element.is("input[type=radio], input[type=checkbox]")?t(this.$element).prop("checked",!1):this.$element.val("")},getPath:function(e){if("undefined"==typeof e&&(e=this.$element),this.options.getPath(e))return this.options.getPath(e);if(1!=e.length)return!1;for(var i="",n=e.is("input[type=checkbox]"),s=e;s.length;){e=s[0];var a=e.nodeName;if(!a)break;var a=a.toLowerCase(),s=s.parent(),o=s.children(a);if((t(e).is("form, input, select, textarea")||n)&&(a+=t(e).attr("name")?"."+t(e).attr("name"):"",1<o.length&&!t(e).is("input[type=radio]")&&(a+=":eq("+o.index(e)+")"),i=a+(i?">"+i:""),"form"==e.nodeName.toLowerCase()))break}return"garlic:"+document.domain+(this.options.domain?"*":window.location.pathname)+">"+i},getStorage:function(){return this.storage}},t.fn.garlic=function(n,s){function a(e){var s=t(e),a=s.data("garlic"),h=t.extend({},o,s.data());return"undefined"!=typeof h.storage&&!h.storage||"password"===t(e).attr("type")||(a||s.data("garlic",a=new i(e,r,h)),"string"!=typeof n||"function"!=typeof a[n])?void 0:a[n]()}var o=t.extend(!0,{},t.fn.garlic.defaults,n,this.data()),r=new e,h=!1;return r.defined?(this.each(function(){t(this).is("form")?t(this).find(o.inputs).each(function(){t(this).is(o.excluded)||(h=a(t(this)))}):t(this).is(o.inputs)&&!t(this).is(o.excluded)&&(h=a(t(this)))}),"function"==typeof s?s():h):!1},t.fn.garlic.Constructor=i,t.fn.garlic.defaults={destroy:!0,inputs:"input, textarea, select",excluded:'input[type="file"], input[type="hidden"]',events:"DOMAttrModified textInput input change click keypress paste focus".split(" "),domain:!1,expires:!1,conflictManager:{enabled:!1,garlicPriority:!0,template:'<span class="garlic-swap"></span>',message:"This is your saved data. Click here to see default one",onConflictDetected:function(t,e){return!0}},getPath:function(t){},onRetrieve:function(t,e){},onPersist:function(t,e){}},t(window).on("load",function(){t('[data-persist="garlic"]').each(function(){t(this).garlic()})})}(window.jQuery||window.Zepto);