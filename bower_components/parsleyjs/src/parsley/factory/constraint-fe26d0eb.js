define("parsley/factory/constraint",["parsley/utils"],function(r){var e=function(e,t,i,n,o){var a={};if(!new RegExp("ParsleyField").test(r.get(e,"__class__")))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");if("function"==typeof window.ParsleyValidator.validators[t]&&(a=window.ParsleyValidator.validators[t](i)),"Assert"!==a.__parentClass__)throw new Error("Valid validator expected");var s=function(){return"undefined"!=typeof e.options[t+"Priority"]?e.options[t+"Priority"]:r.get(a,"priority")||2};return n=n||s(),"function"==typeof a.requirementsTransformer&&(i=a.requirementsTransformer(),a=window.ParsleyValidator.validators[t](i)),$.extend(a,{name:t,requirements:i,priority:n,groups:[n],isDomConstraint:o||r.attr(e.$element,e.options.namespace,t)})};return e});