/*
---
description: Compatibility for MooTools More 1.2.4
provides: [Class.Refactor.Compat]
requires: [More/Class.Refactor]
script: Class.Refactor.Compat.js

...
*/
$extend(Class.prototype, { 
	refactor: function(props){ 
		this.prototype = Class.refactor(this, props).prototype;
		return this;
	}
});