/*
---
description: Mixin class that returns *this.element*. Allows you to do document.id(myInstance).
provides: [Class.ToElement]
requires: [core/Class, /Clientcide]
script: Class.ToElement.js

...
*/
/*
Script: ToElement.js
	Defines the toElement method for a class.

License:
	http://www.clientcide.com/wiki/cnet-libraries#license
*/
Class.ToElement = new Class({
	toElement: function(){
		return this.element;
	}
});
var ToElement = Class.ToElement;