//>>built
define("dojox/av/widget/ProgressSlider",["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(a,e,c,d){return a.declare("dojox.av.widget.ProgressSlider",[c,d],{templateString:a.cache("dojox.av.widget","resources/ProgressSlider.html"),postCreate:function(){this.seeking=!1;this.handleWidth=a.marginBox(this.handle).w;var b=a.coords(this.domNode);this.finalWidth=b.w;this.width=b.w-this.handleWidth;this.x=b.x;a.setSelectable(this.domNode,!1);a.setSelectable(this.handle,!1)},setMedia:function(b,
c){this.playerWidget=c;this.media=b;a.connect(this.media,"onMetaData",this,function(a){a&&a.duration&&(this.duration=a.duration)});a.connect(this.media,"onEnd",this,function(){a.disconnect(this.posCon);this.setHandle(this.duration)});a.connect(this.media,"onStart",this,function(){this.posCon=a.connect(this.media,"onPosition",this,"setHandle")});a.connect(this.media,"onDownloaded",this,function(a){this.setLoadedPosition(.01*a);this.width=.01*this.finalWidth*a})},onDrag:function(b){b=b.clientX-this.x;
0>b&&(b=0);b>this.width-this.handleWidth&&(b=this.width-this.handleWidth);this.media.seek(b/this.finalWidth*this.duration);a.style(this.handle,"marginLeft",b+"px");a.style(this.progressPosition,"width",b+"px")},startDrag:function(){a.setSelectable(this.playerWidget.domNode,!1);this.seeking=!0;this.cmove=a.connect(a.doc,"mousemove",this,"onDrag");this.cup=a.connect(a.doc,"mouseup",this,"endDrag")},endDrag:function(){a.setSelectable(this.playerWidget.domNode,!0);this.seeking=!1;this.cmove&&a.disconnect(this.cmove);
this.cup&&a.disconnect(this.cup);this.handleOut()},setHandle:function(b){this.seeking||(b=b/this.duration*(this.width-this.handleWidth),a.style(this.handle,"marginLeft",b+"px"),a.style(this.progressPosition,"width",b+"px"))},setLoadedPosition:function(b){a.style(this.progressLoaded,"width",this.finalWidth*b+"px")},handleOver:function(){a.addClass(this.handle,"over")},handleOut:function(){this.seeking||a.removeClass(this.handle,"over")},onResize:function(b){this.finalWidth=a.coords(this.domNode).w}})});
//# sourceMappingURL=ProgressSlider.js.map