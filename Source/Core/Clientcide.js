/*
---
description: The Clientcide namespace. Includes a method that allows you to set the
  location of image files to your own server; <a href="http://github.com/anutron/clientcide/issues">download
  the files @ google code</a>; see <a href="http://www.clientcide.com/docs/Core/Clientcide">docs</a>.
provides: [Clientcide]
requires: [core/Element.Event]
script: Clientcide.js

...
*/
/*
Script: Clientcide.js
	The Clientcide namespace.

License:
	http://www.clientcide.com/wiki/cnet-libraries#license
*/
var Clientcide = {
	version: '2.2.1dev',
	assetLocation: "http://github.com/anutron/clientcide/raw/master/Assets",
	setAssetLocation: function(baseHref) {
		Clientcide.assetLocation = baseHref;
		if (Clientcide.preloaded) Clientcide.preLoadCss();
	},
	preLoadCss: function(){
		if (window.StickyWin && StickyWin.ui) StickyWin.ui();
		if (window.StickyWin && StickyWin.pointy) StickyWin.pointy();
		Clientcide.preloaded = true;
		return true;
	},
	preloaded: false
};
(function(){
	if (!window.addEvent) return;
	var preload = function(){
		if (window.dbug) dbug.log('preloading clientcide css');
		if (!Clientcide.preloaded) Clientcide.preLoadCss();
	};
	window.addEvent('domready', preload);
	window.addEvent('load', preload);
})();
setCNETAssetBaseHref = Clientcide.setAssetLocation;