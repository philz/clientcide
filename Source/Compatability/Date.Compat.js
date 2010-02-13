/*
---
description: Compatibility for MooTools More 1.2.4
provides: [Date.Compat]
requires: [More/Date, core/String, core/Number]
script: Date.Compat.js

...
*/
Number.implement({
	zeroise: function(length) {
		return String(this).zeroise(length);
	}
});

String.implement({
	zeroise: function(length) {
		return '0'.repeat(length - this.length) + this;
	}
});

Date.prototype.compare = Date.prototype.diff;
Date.prototype.strftime = Date.prototype.format;