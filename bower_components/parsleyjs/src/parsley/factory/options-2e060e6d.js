define("parsley/factory/options",["parsley/utils"],function(t){var s=function(s,e,i,n){this.__class__="OptionsFactory",this.__id__=t.hash(4),this.formOptions=null,this.fieldOptions=null,this.staticOptions=$.extend(!0,{},s,e,i,{namespace:n})};return s.prototype={get:function(t){if("undefined"==typeof t.__class__)throw new Error("Parsley Instance expected");switch(t.__class__){case"Parsley":return this.staticOptions;case"ParsleyForm":return this.getFormOptions(t);case"ParsleyField":case"ParsleyFieldMultiple":return this.getFieldOptions(t);default:throw new Error("Instance "+t.__class__+" is not supported")}},getFormOptions:function(s){return this.formOptions=t.attr(s.$element,this.staticOptions.namespace),$.extend({},this.staticOptions,this.formOptions)},getFieldOptions:function(s){return this.fieldOptions=t.attr(s.$element,this.staticOptions.namespace),null===this.formOptions&&"undefined"!=typeof s.parent&&(this.formOptions=this.getFormOptions(s.parent)),$.extend({},this.staticOptions,this.formOptions,this.fieldOptions)}},s});