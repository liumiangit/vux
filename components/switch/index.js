!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxSwitch=t():e.vuxSwitch=t()}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var n=o[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),i=s(n);t["default"]={components:{InlineDesc:i["default"]},props:{title:{type:String,required:!0},disabled:{type:Boolean,"default":!1},value:{type:Boolean,twoWay:!0},inlineDesc:{type:String}},ready:function(){},watch:{value:function(e){this.$dispatch("change",e)}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<span class=label_desc><slot></slot></span>"},function(e,t){e.exports='<div class="weui_cell weui_cell_switch"> <div class="weui_cell_hd weui_cell_primary"> <label class=weui_label :style="{width:title.length+1+\'em\'}">{{{title}}}</label> <span class=label_desc v-if=inlineDesc>{{inlineDesc}}</span> </div> <div class=weui_cell_ft> <input class=weui_switch type=checkbox :disabled=disabled v-model=value /> </div> </div>'},function(e,t,o){var s,n;o(2),n=o(4),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var s,n;o(3),s=o(1),n=o(5),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});