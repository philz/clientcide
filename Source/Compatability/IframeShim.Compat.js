/*
---
description: Compatibility for MooTools More 1.2.4
provides: [IframeShim.Compat]
requires: [More/IframeShim, More/Class.Refactor]
script: IframeShim.Compat.js

...
*/
IframeShim = Class.refactor(IframeShim, {
	initialize: function(element, options){
		if (options && options.zindex) options.zIndex = options.zindex;
		this.previous(element, options);
	}
});