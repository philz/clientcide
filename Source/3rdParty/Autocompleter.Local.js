/*
---
description: Allows Autocompleter to use an object in memory for autocompletion (instead
  of retrieving via ajax).
provides: [Autocompleter.Local]
requires: [/Autocompleter]
script: Autocompleter.Local.js

...
*/
/**
 * Autocompleter.Local
 *
 * @version		1.1.1
 *
 * @todo: Caching, no-result handling!
 *
 *
 * @license		MIT-style license
 * @author		Harald Kirschner <mail [at] digitarald.de>
 * @copyright	Author
 */
Autocompleter.Local = new Class({

	Extends: Autocompleter.Base,

	options: {
		minLength: 0,
		delay: 200
	},

	initialize: function(element, tokens, options) {
		this.parent(element, options);
		this.tokens = tokens;
	},

	query: function() {
		this.update(this.filter());
	}

});
