/*
---
description: Returns a collection when given an element, a collection of elements,
  an element id, or a selector. <b>DEPRECATED</b>.
provides: [DollarG.Compat]
requires: [core/Element, /Clientcide]
script: DollarG.Compat.js

...
*/
//returns a collection given an id or a selector
$G = function(elements) {
	return $splat(document.id(elements)||$$(elements));
};