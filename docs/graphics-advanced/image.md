---
title: Image

---

An immutable drawable 2-dimensional array of pixels data.

:::info

To mutate, convert it into an imagedata first using [`image:data`](#imagedata).

:::

## Creation

### `image`

Create a new image that can be used for drawing.

```lua
createdImage = image(data)
```

| Parameter | Type   | Default     | Note                         |
|----------:|--------|-------------|------------------------------|
|      data | string | ⚠️ required | in the `.lk12` image format. |

|       Return | Type    | Note |
|-------------:|---------|------|
| createdImage | [Image] |      |

---

### Load an ImageData into an image

Which can be done using [`imagedata:image`](./imagedata#imagedataimage).

## Methods

import ObjectCall from '../partials/_object-call.md';

<ObjectCall />

### `image:draw`

Draws the image on the screen.

```lua
image:draw(x, y, rotation, scaleW, scaleH, quad)
```

| Parameter | Type        | Default | Note                                                                            |
|----------:|-------------|---------|---------------------------------------------------------------------------------|
|         x | number      | `0`     |                                                                                 |
|         y | number      | `0`     |                                                                                 |
|  rotation | number      | `0`     | in radians.                                                                     |
|    scaleX | number      | `1`     | `1` to preserve scale.                                                          |
|    scaleY | number      | `1`     | `1` to preserve scale.                                                          |
|      quad | [Quad], nil | `nil`   | a quad to draw only a region from the image. otherwise the full image is drawn. |

---

### `image:width`

Get the image width.

```lua
width = image:width()
```

| Return | Type   | Note       |
|-------:|--------|------------|
|  width | number | in pixels. |

---

### `image:height`

Get the image height.

```lua
height = image:height()
```

| Return | Type   | Note       |
|-------:|--------|------------|
| height | number | in pixels. |

---

### `image:size`

Get the image dimensions.

```lua
width, height = image:size()
```

| Return | Type   | Note |
|-------:|--------|------|
|  width | number |      |
| height | number |      |

---

### `image:quad`

Create a new quad representing a region from this image.

```lua
createdQuad = image:quad(x, y, width, height)
```

| Parameter | Type   | Default     | Note                        |
|----------:|--------|-------------|-----------------------------|
|         x | number | ⚠️ required | of the region to represent. |
|         y | number | ⚠️ required | of the region to represent. |
|     width | number | ⚠️ required | of the region to represent. |
|    height | number | ⚠️ required | of the region to represent. |

|      Return | Type   | Note |
|------------:|--------|------|
| createdQuad | [Quad] |      |

---

### `image:data`

Returns the imagedata object of this image, which can be used to set and get pixels of the image.

:::note

The calls of this function are cheap, unlike [`imagedata:image`](./imagedata#imagedataimage).

:::

:::caution

Use a different name than `imageData` for storing the value in.
As that might confuse it with the `imagedata` function.

:::

```lua
imageData = image:data()
```

|    Return | Type        | Note |
|----------:|-------------|------|
| imageData | [ImageData] |      |

---

### `image:refresh`

Reload the Image's contents from the [ImageData] used to create the image.

```lua
image:refresh()
```

---

### `image:batch`

Use the image to create a spritebatch.

Which allows to draw a batch of sprites from this image.

```lua
spriteBatch = image:batch(capacity, usage)
```

| Parameter | Type   | Default    | Note                                       |
|----------:|--------|------------|--------------------------------------------|
|  capacity | number | `1000`     |                                            |
|     usage | string | `'static'` | enum: `'dynamic'`, `'static'`, `'stream'`. |

|      Return | Type          | Note |
|------------:|---------------|------|
| spriteBatch | [SpriteBatch] |      |

---

### `image:type`

Get the type of the object as a string.

:::warning

This method most likely will be removed in a future version.

:::

```lua
objectType = image:type()
```

|     Return | Type   | Note        |
|-----------:|--------|-------------|
| objectType | string | `GPU.image` |

---

### `image:typeOf`

Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true.

:::warning

This method most likely will be removed in a future version.

:::

```lua
isIt = image:typeOf(type)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      type | string | ⚠️ required |      |

| Return | Type    | Note                                                           |
|-------:|---------|----------------------------------------------------------------|
|   isIt | boolean | `'GPU'`, `'image'`, `'GPU.image'`, `'LK12'` would give `true`. |

[Image]: #
[ImageData]: ./imagedata
[Quad]: ./quad
[SpriteBatch]: ./spritebatch
