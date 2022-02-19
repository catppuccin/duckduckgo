// ==UserScript==
// @name        Catppuccin DuckDuckGo Theme
// @namespace   https://duckduckgo.com/
// @version     1.0
// @description 2022-01-30
// @author      -
// @match       https://duckduckgo.com/
// @match       https://duckduckgo.com/settings
// @icon        https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/logos/exports/1544x1544_circle.png
// @grant       none
// ==/UserScript==

(function() {
	'use strict';

	const theme = [
		'21=302D41', '7=1E1E2E', '8=D9E0EE', '9=F5E0DC', 'aa=C9CBFF',
		'ae=1E1E2E', 'j=302D41', 'x=F5E0DC',
	];

	for (const item of theme) {
		document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
	}
})();
