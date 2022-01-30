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
        '1=-1', '18=1', 'a=-1', 'ae=d', 'ao=-1', 'ap=-1', 'aq=-1', 'au=-1',
        'ax=-1', 'bc=1', 'l=wt-wt', 's=m', '21=332E41', '7=1E1E29', '8=C3BAC6',
        '9=A4B9EF', 'aa=BEE4ED', 'j=1B1923', 'x=A4B9EF',
    ];

    for (const item of theme) {
        document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
    }
})();
