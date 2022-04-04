---
title: ImageData

---

A mutable non-drawable 2-dimensional array of pixel data.

:::info

To display/draw it, convert it into an image first using [`imagedata:image`](#imagedataimage).

:::

## Creation

### `imagedata`

Load existing pixel data in a new object. It can accept a `.lk12` raw string, or a `.png` one.

:::note

All transparent pixels and all colors that are not from the palette will be loaded as `0`.

:::

```lua
loadedImageData = imagedata(data)
```

| Parameter | Type   | Default     | Note                                              |
|----------:|--------|-------------|---------------------------------------------------|
|      data | string | ⚠️ required | in the `.lk12` image format. or in `.png` format. |

|          Return | Type        | Note |
|----------------:|-------------|------|
| loadedImageData | [ImageData] |      |

---

### `screenshot`

Take a screenshot of the screen (without the cursor) or a region of it. And get the resulting pixel data.

:::info

Although this function can be considered expensive.
It usually doesn't affect the FPS when taking a single shot every frame.

:::

```lua
capturedImageData = screenshot(x, y, width, height)
```

| Parameter | Type   | Default       | Note                               |
|----------:|--------|---------------|------------------------------------|
|         x | number | `0`           | of the region you wish to capture. |
|         y | number | `0`           | of the region you wish to capture. |
|     width | number | screen width  | of the region you wish to capture. |
|    height | number | screen height | of the region you wish to capture. |

|            Return | Type        | Note |
|------------------:|-------------|------|
| capturedImageData | [ImageData] |      |

---

### `getLabelImage`

Get the pixel data of the label image. Which is the image displayed in the exported `.png` game disks.

The image is captured by pressing `F6`.

:::info

The object provided by this function has a shared pixel data.

Which means when it's mutated, it's mutated in all objects obtained from this same function.

This also applies when a new image is captured using `F6`.

:::

```lua
labelImage = getLabelImage()
```

|     Return | Type        | Note |
|-----------:|-------------|------|
| labelImage | [ImageData] |      |

---

### Retrieved from a loaded image

Every loaded image originates from an ImageData object.
That object can be retrieved using [`image:data`](./image#imagadata).

## Methods

import ObjectCall from '../partials/_object-call.md';

<ObjectCall />

### `imageData:getPixel`

Get the value of a pixel.

```lua
colorId = imageData:getPixel(x, y)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |

|  Return | Type   | Note                           |
|--------:|--------|--------------------------------|
| colorId | number | an integer in range `[0, 15]`. |

---

### `imageData:setPixel`

Set the value of a pixel.

```lua
imageData = imageData:setPixel(x, y, colorId)
```

| Parameter | Type   | Default     | Note                           |
|----------:|--------|-------------|--------------------------------|
|         x | number | ⚠️ required |                                |
|         y | number | ⚠️ required |                                |
|   colorId | number | ⚠️ required | an integer in range `[0, 15]`. |

|    Return | Type        | Note                                         |
|----------:|-------------|----------------------------------------------|
| imageData | [ImageData] | the object itself. allows to do chain calls. |

---

### `imageData:width`

Get the width of the pixel data.

```lua
width = imageData:width()
```

| Return | Type   | Note |
|-------:|--------|------|
|  width | number |      |

---

### `imageData:height`

Get the height of the pixel data.

```lua
height = imageData:height()
```

| Return | Type   | Note |
|-------:|--------|------|
| height | number |      |

---

### `imageData:size`

Get the dimensions of the pixel data.

```lua
width, height = imageData:size()
```

| Return | Type   | Note |
|-------:|--------|------|
|  width | number |      |
| height | number |      |

---

### `imageData:image`

Load the pixel data into an image. Which can be displayed into the screen.

:::info

The created image can refresh (update) it's pixel data from the ImageData which created it
by calling [`image:refresh`](./image#imagerefresh).

:::

:::caution

The calls of this function are performance expensive, unlike [`image:data`](./image#imagedata).

:::

:::caution

Use a different name than `image` for storing the value in.
As that might confuse it with the [`image`](./image#image-1) function.

:::

```lua
image = imageData:image()
```

| Return | Type  | Note |
|-------:|-------|------|
|  image | Image |      |

---

### `imageData:enlarge`

Scale up the pixel data by a specific integer.

:::info

This method doesn't mutate the object. But instead creates a new one with the mutation.

:::

```lua
enlargedImageData = imageData:enlarge(scale)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|     scale | number | ⚠️ required | must be a positive integer |

|            Return | Type        | Note |
|------------------:|-------------|------|
| enlargedImageData | [ImageData] |      |

---

### `imageData:map`

Transform the pixel data by applying a function to every pixel.

```lua
imageData:map(pixelFunction)
```

|     Parameter | Type            | Default     | Note                        |
|--------------:|-----------------|-------------|-----------------------------|
| pixelFunction | [PixelFunction] | ⚠️ required | check the definition below. |


#### PixelFunction

A function which is called for every pixel in a pixel data.

:::info

The scanline order is followed.
Starting with the top-left corner and going in horizontal lines till the bottom-right corner.

:::

The signature of the function is:

```lua
function pixelFunction(x, y, colorId)
    --Logic here for modifying the colorId.
    return colorId;
end
```

| Parameter | Type   | Note                               |
|----------:|--------|------------------------------------|
|         x | number |                                    |
|         y | number |                                    |
|   colorId | number | an integer in the range `[0, 15]`. |

|  Return | Type   | Note                                                    |
|--------:|--------|---------------------------------------------------------|
| colorId | number | the new pixel value. an integer in the range `[0, 15]`. |

---

### `imageData:paste`

Copy pixel data from one object into this object.

```lua
imageData = imageData:paste(source, destinationX, destinationY, sourceX, sourceY, regionWidth, regionHeight)
```

|    Parameter | Type        | Default             | Note |
|-------------:|-------------|---------------------|------|
|       source | [ImageData] | ⚠️ required         |      |
| destinationX | number      | `0`                 |      |
| destinationY | number      | `0`                 |      |
|      sourceX | number      | `0`                 |      |
|      sourceY | number      | `0`                 |      |
|  regionWidth | number      | source image width  |      |
| regionHeight | number      | source image height |      |


|    Return | Type        | Note                                         |
|----------:|-------------|----------------------------------------------|
| imageData | [ImageData] | the object itself. allows to do chain calls. |

---

### `imageData:quad`

Create a new quad representing a region from this pixel data.

:::info

The result quad should work fine when used on an image loaded from this object.

:::

```lua
createdQuad = imageData:quad(x, y, width, height)
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

### `imageData:encode`

Encode the pixel data into a `.lk12` raw string.

```lua
data = imageData:encode()
```

| Return | Type   | Note |
|-------:|--------|------|
|   data | string |      |

---

### `imageData:export`

Export the pixel data to a `.png` raw string.

:::info

All pixels with a color set as transparent using [`palt`](../graphics/transformations#palt)
will be transparent in the result png.

:::

```lua
rawPNGString = imageData:export()
```

|       Return | Type   | Note |
|-------------:|--------|------|
| rawPNGString | string |      |

---

### `imageData:exportOpaque`

Export the pixel data to a `.png` raw string.

:::info
All the pixels are made opaque using this method.
:::

```lua
rawPNGString = imageData:exportOpaque()
```

|       Return | Type   | Note |
|-------------:|--------|------|
| rawPNGString | string |      |

---

### `imageData:type`

Get the type of the object as a string.

:::warning

This method most likely will be removed in a future version.

:::

```lua
objectType = imageData:type()
```

|     Return | Type   | Note            |
|-----------:|--------|-----------------|
| objectType | string | `GPU.imagedata` |

---

### `imageData:typeOf`

Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true.

:::warning

This method most likely will be removed in a future version.

:::

```lua
isIt = imageData:typeOf(type)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      type | string | ⚠️ required |      |

| Return | Type    | Note                                                                   |
|-------:|---------|------------------------------------------------------------------------|
|   isIt | boolean | `'GPU'`, `'imageData'`, `'GPU.imageData'`, `'LK12'` would give `true`. |

[Image]: ./image
[ImageData]: #
[Quad]: ./quad
[PixelFunction]: #pixelfunction
