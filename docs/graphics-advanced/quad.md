
# Quad

Represents a region/part of an image.

Which can be drawn. In this way, one large images atlas (sheet) can be loaded, and then split up into sub-images.

## Creation

### `quad`

Creates a new quad.

```lua
createdQuad = quad(x, y, width, height, sourceWidth, sourceHeight)
```

|    Parameter | Type   | Default     | Note                            |
|-------------:|--------|-------------|---------------------------------|
|            x | number | ⚠️ required | of the region you wish to crop. |
|            y | number | ⚠️ required | of the region you wish to crop. |
|        width | number | ⚠️ required | of the region you wish to crop. |
|       height | number | ⚠️ required | of the region you wish to crop. |
|  sourceWidth | number | ⚠️ required | of the source image.            |
| sourceHeight | number | ⚠️ required | of the source image.            |

|      Return | Type   | Note |
|------------:|--------|------|
| createdQuad | [Quad] |      |

---

### Obtained through a shorthand

Various shorthands are available to save the need of passing `sourceWidth` and `sourceHeight` manually:

- [`image:quad`](./image#imagequad).
- [`imagedata:quad`](./imagedata#imagedataquad).
- [`spritebatch:quad`](./sprtebatch#spritebatchquad).

## Usage

- Can be used in [`image:draw`](./image#imagedraw) when drawing a single image.
- Used in [spritebatch](./spritebatch) in [`spritebatch:add`](./spritebatch#spritebatchadd),
[`spritebatch:set`](./spritebatch#spritebatchset) and can be used in [`spritebatch:draw`](./spritebatch#spritebatchdraw).

## Methods

import ObjectCall from '../partials/_object-call.md';

<ObjectCall />

### `quad:getTextureDimensions`

Get the source image dimensions initially specified during creation.

```lua
sourceWidth, sourceHeight = quad:getTextureDimensions()
```

|       Return | Type   | Note       |
|-------------:|--------|------------|
|  sourceWidth | number | in pixels. |
| sourceHeight | number | in pixels. |

---

### `quad:getViewport`

Get the viewport (region) specified in this quad.

```lua
x, y, width, height = quad:getViewport()
```

| Return | Type   | Note |
|-------:|--------|------|
|      x | number |      |
|      y | number |      |
|  width | number |      |
| height | number |      |

---

### `quad:setViewport`

Set the viewport (region) specified in this quad.

```lua
quad:setViewport(x, y, width, height)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |
|     width | number | ⚠️ required |      |
|    height | number | ⚠️ required |      |

---

### `quad:type`

Get the type of the object as a string.

:::warning

This method most likely will be removed in a future version.

:::

```lua
objectType = quad:type()
```

|     Return | Type   | Note   |
|-----------:|--------|--------|
| objectType | string | `Quad` |

---

### `quad:typeOf`

Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true.

:::warning

This method most likely will be removed in a future version.

:::

> For GPUQuad, it returns true for the following types: 

```lua
isIt = quad:typeOf(type)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      type | string | ⚠️ required |      |

| Return | Type    | Note                                    |
|-------:|---------|-----------------------------------------|
|   isIt | boolean | `'Object'`, `'Quad'` would give `true`. |

[Quad]: #
