/*
---
description: Compatibility for MooTools More 1.2.4
provides: [JsonP.Compat]
requires: [More/Class.Refactor, More/Request.JSONP]
script: JsonP.Compat.js

...
*/
var JsonP = Class.refactor(Request.JSONP, {
	initialize: function() {
		var params = Array.link(arguments, {url: String.type, options: Object.type});
		options = (params.options || {});
		options.url = options.url || params.url;
		if (options.callBackKey) options.callbackKey = options.callBackKey;
		this.previous(options);
	},
	getScript: function(options) {
		var queryString = options.queryString || this.options.queryString;
		if(options.url && queryString) options.url += (options.url.indexOf("?") >= 0 ? "&" : "?") + queryString;
		var script = this.previous(options);
		if ($chk(options.globalFunction)) {
			window[options.globalFunction] = function(r){
				JsonP.requestors[index].handleResults(r)
			};
		}
		return script;
	},
	request: function(url) {
		this.send({url: url||this.options.url});
	}
});