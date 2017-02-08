/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/hccss","require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "),function(f,g,h,k,b,l,c){b.add("highcontrast",function(){var a=c.doc.createElement("div");try{a.style.cssText='border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("'+(g.blankGif||f.toUrl("./resources/blank.gif"))+'");';c.body().appendChild(a);var d=k.getComputedStyle(a),e=d.backgroundImage;return d.borderTopColor==d.borderRightColor||
e&&("none"==e||"url(invalid-url:)"==e)}catch(m){return console.warn("hccss: exception detecting high-contrast mode, document is likely hidden: "+m.toString()),!1}finally{8>=b("ie")?a.outerHTML="":c.body().removeChild(a)}});l(function(){b("highcontrast")&&h.add(c.body(),"dj_a11y")});return b});
//# sourceMappingURL=hccss.js.map