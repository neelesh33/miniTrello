//>>built
define("dojox/editor/plugins/EntityPalette","dojo dijit dojox dijit/_Widget dijit/_TemplatedMixin dijit/_PaletteMixin dojo/_base/connect dojo/_base/declare dojo/i18n dojo/i18n!dojox/editor/plugins/nls/latinEntities".split(" "),function(b,d,m,h,k,l){b.experimental("dojox.editor.plugins.EntityPalette");d=b.declare("dojox.editor.plugins.EntityPalette",[h,k,l],{templateString:'\x3cdiv class\x3d"dojoxEntityPalette"\x3e\n\t\x3ctable\x3e\n\t\t\x3ctbody\x3e\n\t\t\t\x3ctr\x3e\n\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\x3ctable class\x3d"dijitPaletteTable"\x3e\n\t\t\t\t\t\t\x3ctbody dojoAttachPoint\x3d"gridNode"\x3e\x3c/tbody\x3e\n\t\t\t\t   \x3c/table\x3e\n\t\t\t\t\x3c/td\x3e\n\t\t\t\x3c/tr\x3e\n\t\t\t\x3ctr\x3e\n\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\x3ctable dojoAttachPoint\x3d"previewPane" class\x3d"dojoxEntityPalettePreviewTable"\x3e\n\t\t\t\t\t\t\x3ctbody\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3cth class\x3d"dojoxEntityPalettePreviewHeader"\x3ePreview\x3c/th\x3e\n\t\t\t\t\t\t\t\t\x3cth class\x3d"dojoxEntityPalettePreviewHeader" dojoAttachPoint\x3d"codeHeader"\x3eCode\x3c/th\x3e\n\t\t\t\t\t\t\t\t\x3cth class\x3d"dojoxEntityPalettePreviewHeader" dojoAttachPoint\x3d"entityHeader"\x3eName\x3c/th\x3e\n\t\t\t\t\t\t\t\t\x3cth class\x3d"dojoxEntityPalettePreviewHeader"\x3eDescription\x3c/th\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxEntityPalettePreviewDetailEntity" dojoAttachPoint\x3d"previewNode"\x3e\x3c/td\x3e\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxEntityPalettePreviewDetail" dojoAttachPoint\x3d"codeNode"\x3e\x3c/td\x3e\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxEntityPalettePreviewDetail" dojoAttachPoint\x3d"entityNode"\x3e\x3c/td\x3e\n\t\t\t\t\t\t\t\t\x3ctd class\x3d"dojoxEntityPalettePreviewDetail" dojoAttachPoint\x3d"descNode"\x3e\x3c/td\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\x3c/tbody\x3e\n\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\x3c/td\x3e\n\t\t\t\x3c/tr\x3e\n\t\t\x3c/tbody\x3e\n\t\x3c/table\x3e\n\x3c/div\x3e',
baseClass:"dojoxEntityPalette",showPreview:!0,showCode:!1,showEntityName:!1,palette:"latin",dyeClass:"dojox.editor.plugins.LatinEntity",paletteClass:"editorLatinEntityPalette",cellClass:"dojoxEntityPaletteCell",postMixInProperties:function(){var a=b.i18n.getLocalization("dojox.editor.plugins","latinEntities"),c=0,d;for(d in a)c++;var c=Math.floor(Math.sqrt(c)),g=0,f=[],e=[];for(d in a)g++,e.push(d),0===g%c&&(f.push(e),e=[]);0<e.length&&f.push(e);this._palette=f},buildRendering:function(){this.inherited(arguments);
var a=b.i18n.getLocalization("dojox.editor.plugins","latinEntities");this._preparePalette(this._palette,a);a=b.query(".dojoxEntityPaletteCell",this.gridNode);b.forEach(a,function(a){this.connect(a,"onmouseenter","_onCellMouseEnter")},this)},_onCellMouseEnter:function(a){this._displayDetails(a.target)},postCreate:function(){this.inherited(arguments);b.style(this.codeHeader,"display",this.showCode?"":"none");b.style(this.codeNode,"display",this.showCode?"":"none");b.style(this.entityHeader,"display",
this.showEntityName?"":"none");b.style(this.entityNode,"display",this.showEntityName?"":"none");this.showPreview||b.style(this.previewNode,"display","none")},_setCurrent:function(a){this.inherited(arguments);this.showPreview&&this._displayDetails(a)},_displayDetails:function(a){var c=this._getDye(a);c?(a=c.getValue(),c=c._alias,this.previewNode.innerHTML=a,this.codeNode.innerHTML="\x26amp;#"+parseInt(a.charCodeAt(0),10)+";",this.entityNode.innerHTML="\x26amp;"+c+";",a=b.i18n.getLocalization("dojox.editor.plugins",
"latinEntities"),this.descNode.innerHTML=a[c].replace("\n","\x3cbr\x3e")):(this.previewNode.innerHTML="",this.codeNode.innerHTML="",this.entityNode.innerHTML="",this.descNode.innerHTML="")}});d.LatinEntity=b.declare("dojox.editor.plugins.LatinEntity",null,{constructor:function(a){this._alias=a},getValue:function(){return"\x26"+this._alias+";"},fillCell:function(a){a.innerHTML=this.getValue()}});return d});
//# sourceMappingURL=EntityPalette.js.map