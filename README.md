<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://duckduckgo.com">DuckDuckGo</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/duckduckgo/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/duckduckgo?colorA=363a4f&colorB=b7bdf8&style=for-the-badge&logo=starship style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/duckduckgo/issues"><img src="https://img.shields.io/github/issues/catppuccin/duckduckgo?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/duckduckgo/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/duckduckgo?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

![DuckDuckGo Theme Preview](assets/preview.png)

## Usage

1. Visit <https://duckduckgo.com>.
2. Right click and select the “Inspect” button.
3. Select the “Console” tab.
4. If you are using Firefox, type `allow pasting`.
5. Enter the following script:

	```js
	const theme = [
		'21=302D41', '7=1E1E2E', '8=D9E0EE', '9=F5E0DC', 'aa=C9CBFF',
		'ae=1E1E2E', 'j=302D41', 'x=F5E0DC',
	];

	for (const item of theme) {
		document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
	}
	```

6. Reload the page.
7. Enjoy the theme 😄

## Demo

You can take a look at how this theme will look by visiting the
[bookmarklet](https://duckduckgo.com/?k21=302D41&k7=1E1E2E&k8=D9E0EE&k9=F5E0DC&kaa=C9CBFF&kae=1E1E2E&kj=302D41&kx=F5E0DC).

## Userscript

You can also use a userscript manager extension. To do so, open the following link to
install the
[userscript](https://raw.githubusercontent.com/catppuccin/duckduckgo/main/theme.user.js).

## 💝 Thanks to

- [Astro](https://github.com/narutoxy)
- [esdmr](https://github.com/esdmr)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=302d41&colorB=b7bdf8"/></a></p>
