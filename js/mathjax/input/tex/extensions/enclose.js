!function(){"use strict";var a,t,e={272:function(a,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.EncloseConfiguration=t.EncloseMethods=t.ENCLOSE_OPTIONS=void 0;var o=e(251),n=e(871),r=e(398);t.ENCLOSE_OPTIONS={"data-arrowhead":1,color:1,mathcolor:1,background:1,mathbackground:1,"data-padding":1,"data-thickness":1},t.EncloseMethods={},t.EncloseMethods.Enclose=function(a,e){var o=a.GetArgument(e).replace(/,/g," "),n=a.GetBrackets(e,""),i=a.ParseArg(e),l=r.default.keyvalOptions(n,t.ENCLOSE_OPTIONS);l.notation=o,a.Push(a.create("node","menclose",[i],l))},new n.CommandMap("enclose",{enclose:"Enclose"},t.EncloseMethods),t.EncloseConfiguration=o.Configuration.create("enclose",{handler:{macro:["enclose"]}})},955:function(a,t){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,t.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},398:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseUtil.default},871:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap}},o={};function n(a){var t=o[a];if(void 0!==t)return t.exports;var r=o[a]={exports:{}};return e[a](r,r.exports,n),r.exports}a=n(955),t=n(272),(0,a.r8)({_:{input:{tex:{enclose:{EncloseConfiguration:t}}}}})}();