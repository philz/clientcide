/*
---
description: Compatibility for MooTools More 1.2.4
provides: [String.Extras.Compat]
requires: [core/String]
script: String.Extras.Compat.js

...
*/
String.implement({
	findAllEmails: function(){
			return this.match(new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "gi")) || [];
	}
});
String.alias('parseQueryString', 'parseQuery');