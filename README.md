<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for DuckDuckGo
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/duckduckgo/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/duckduckgo?colorA=1e1e28&colorB=c9cbff&style=for-the-badge&logo=starship style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/duckduckgo/issues"><img src="https://img.shields.io/github/issues/catppuccin/duckduckgo?colorA=1e1e28&colorB=f7be95&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/duckduckgo/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/duckduckgo?colorA=1e1e28&colorB=b1e1a6&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="./assets/vivaldi@astro 2021-12-22 19.54.58.png"/>
</p>

## Usage

1. Visit <https://duckduckgo.com>.
2. Right click and select the “Inspect” button.
3. Select the “Console” tab.
4. If you are using Firefox, type `allow pasting`.
5. Enter the following script:

    ```js
    const theme = [
        '1=-1', '18=1', 'a=-1', 'ae=d', 'ao=-1', 'ap=-1', 'aq=-1', 'au=-1',
        'ax=-1', 'bc=1', 'l=wt-wt', 's=m', '21=302D41', '7=1E1E29', '8=C3BAC6',
        '9=A4B9EF', 'aa=BEE4ED', 'j=1A1823', 'x=A4B9EF',
    ];

    for (const item of theme) {
        document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
    }
    ```

6. Reload the page
7. Enjoy the theme 😄

## Demo

You can take a look at how this theme will look by visiting the
[bookmarklet](https://duckduckgo.com/?kae=d&k1=-1&k18=1&ka=-1&kao=-1&kap=-1&kaq=-1&kau=-1&kax=-1&kl=wt-wt&ks=m&k21=302D41&k7=1E1E29&k8=C3BAC6&k9=A4B9EF&kaa=BEE4ED&kj=1A1823&kx=A4B9EF).

## Userscript

You can also use a userscript manager extension. To do so, open the following link to
install the
[userscript](https://raw.githubusercontent.com/catppuccin/duckduckgo/main/theme.user.js).

## 💝 Thanks to

- [Astro](https://github.com/narutoxy)
- [esdmr](https://github.com/esdmr)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2020-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=302d41&colorB=c9cbff"/></a></p>
