/*
---
description: Brings back $E from MooTools 1.11. Returns a single Element for a selector.
  <b>DEPRECATED</b>.
provides: [DollarE.Compat]
requires: [core/Element, /Clientcide]
script: DollarE.Compat.js

...
*/
$E = document.getElement.bind(document);