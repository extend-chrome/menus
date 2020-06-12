<p align="center">
  <a href="https://github.com/extend-chrome/menus" rel="noopener">
  <img width=200px height=200px src="https://i.imgur.com/TzC1KEy.png" alt="@extend-chrome/menus logo"></a>
</p>

<h3 align="center">@extend-chrome/menus</h3>

<div align="center">

[![npm (scoped)](https://img.shields.io/npm/v/@extend-chrome/menus.svg)](https://www.npmjs.com/package/@extend-chrome/menus)
[![GitHub last commit](https://img.shields.io/github/last-commit/extend-chrome/menus.svg)](https://github.com/extend-chrome/menus)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/extend-chrome/menus/blob/master/LICENSE)
[![TypeScript Declarations Included](https://img.shields.io/badge/types-TypeScript-informational)](#typescript)

</div>

<div align="center">

[![Chrome Extension Tutorials on YouTube](https://img.shields.io/badge/Chrome%20Extension%20Tutorials-YouTube-c4302b.svg)](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg)
[![ko-fi](https://img.shields.io/badge/Buy%20us%20a%20tea-ko--fi-29ABE0)](https://ko-fi.com/jacksteam)

</div>

---

A powerful context menu API to take your Chrome extension to the next level.

> This library is in beta until version 1.0.0. The API may change between minor versions.

## Table of Contents

- [Getting Started](#getting_started)
- [Usage](#usage)
- [Features](#features)
- [API](#options-api)

## Getting started <a name = "getting_started"></a>

You will need to use a bundler like [Rollup](https://rollupjs.org/guide/en/), Parcel, or Webpack to include this library in the build of Chrome extension.

See [`rollup-plugin-chrome-extension`](https://github.com/extend-chrome/rollup-plugin-chrome-extension) for an easy way use Rollup to build your Chrome extension!

### Installation

```sh
$ npm i @extend-chrome/menus
```

## Usage <a name = "usage"></a>

```js
// background.js
import { menus } from '@extend-chrome/menus'

const id = 'my-menu'

// Create a menu
menus.create({ id, title: 'My Menu' })

// Use the included Observable of menu item clicks
menus.clickStream.subscribe(([clickData, tab]) => {
  console.log('They clicked', clickData.id)
  console.log('In tab', tab.id)

  menus.update({ id, title: 'Another Title' })
})
```

## Features <a name = "features"></a>

### Dynamic Context Menus

A dynamic context menu is only available on HTML elements that match the CSS selector defined in its options.

```js
import { menus } from '@extend-chrome/menus'

menus.create({
  id: 'my-dynamic-menu',
  title: 'I only show on H1 tags',
  selector: 'h1',
})
```

This feature uses `chrome.tabs.executeScript` under the hood, so it only works on pages found in the manifest `permissions` field.

```jsonp
// manifest.json
{
  ...
  permissions: ['https://www.youtube.com/*']
  ...
}
```

### RxJs Observables

Chrome extensions and RxJs are a match made in heaven. Take advantage of ready-made Observables of menu item clicks, creations, updates, and removals.

```js
import { menus } from '@extend-chrome/menus'

menus.clickStream.subscribe(([clickData, tab]) => {
  console.log('Menu Item Id', clickData.id)
  console.log('Tab Id', tab.id)
})
```

### Convenience Function `useMenu`

The function `useMenu` creates a menu item and returns a tuple array of an updater function and an Observable of clicks for that menu item.

```js
import { useMenu } from '@extend-chrome/menus'

const menuOptions = {
  id: 'menu1',
  title: 'Menu Item One',
  type: 'checkbox',
  checked: false,
}

const [
  // Updates only this menu item
  updateMenu,
  // Emits only clicks for this menu item
  menuClickStream,
] = useMenu(menuOptions)

menuClickStream.subscribe(([clickData, tab]) => {
  // No need to include menu id
  // Toggle menu item checkbox
  updateMenu({ checked: !clickData.checked })
})
```

### Full TypeScript Support

`@extend-chrome/menus` is written in TypeScript and includes type definitions. Functions and Observables are fully typed, so Intellisense works well.

```typescript
import { useMenu, ContextMenuOptions } from '@extend-chrome/menus'

const menuOptions: ContextMenuOptions = {
  id: 'menu1',
  title: 'Menu Item One',
}

const [updateMenu, menuClickStream]: [
  (options: Partial<ContextMenuOptions>) => void
  Observable<[ContextMenuClickData, chrome.tabs.Tab]>
] = useMenu(menuOptions)
```

## Options API <a name = "options-api"></a>

Full documentation coming soon!

There's great TypeScript support however, so Intellisense is your friend in the meantime.

![Intellisense is your friend](https://media.giphy.com/media/l0MYHEI0xktKCVjri/giphy.gif)

<!-- ### `useMenu(options)`

### `menus.create(options)`
### `menus.createStream`

### `menus.update(options)`
### `menus.updateStream`

### `menus.remove(id)`
### `menus.removeStream` -->
