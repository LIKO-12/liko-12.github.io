---
title: SpriteSheet
---

Can draw "sprites" which are square images with a unified side length
packed together in a single image called a "sprite-sheet".

The concept might be also known for some as a texture atlas
which you can read more about in [wikipedia](https://en.wikipedia.org/wiki/Texture_atlas).

## Creation

### `spritesheet`

:::important

The `spritesheet` library has to be loaded first.

```lua
local spritesheet = Library('spritesheet');
```

:::

Construct a new instance of a sprite-sheet.

```lua
sheet = spritesheet(spritesImage, width, height)
```

|    Parameter | Type            | Default     | Note                                                      |
|-------------:|-----------------|-------------|-----------------------------------------------------------|
| spritesImage | string, [Image] | ⚠️ required | a raw `.lk12` string to load. or an already loaded image. |
|        width | number          | ⚠️ required | in cells/sprites.                                         |
|       height | number          | ⚠️ required | in cells/sprites.                                         |

| Return | Type          | Note |
|-------:|---------------|------|
|  sheet | [SpriteSheet] |      |

---

### `SpriteMap`

A globally available instance for the standard sprite-sheet of any game.

It contains the sprites drawn in the sprites' editor.

```lua
SpriteMap:draw(1, 10, 10); --draws the sprite 1 at coordinates (10, 10).
```

:::caution

Do not destroy this object or render it unusable.
As it's used in the `Sprite` function, the `map` function and the `TileMap` object.

Doing so would render them also unusable.

:::

## Methods

### `sheet:image`

Get the drawable [Image] containing all the sprites like a sheet.

```lua
spritesImage = sheet:image() 
```

|       Return | Type    | Note |
|-------------:|---------|------|
| spritesImage | [Image] |      |

---

### `sheet:data`

Get the [ImageData] object of the [Image] used by the spritesheet.

```lua
spritesImageData = sheet:data()
```

|           Return | Type        | Note |
|-----------------:|-------------|------|
| spritesImageData | [ImageData] |      |

---

### `sheet:quad`

Get the [Quad] used for a sprite in the sprite-sheet.

:::caution

Do not mutate (change the viewport) of the [Quad] provided.

That would affect the sprite when drawn normally using the sprite-sheet.

:::

```lua
spriteQuad = sheet:quad(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

|     Return | Type   | Note                           |
|-----------:|--------|--------------------------------|
| spriteQuad | [Quad] | shared instance. don't mutate. |

---

### `sheet:rect`

Get the region of the sprite in the sprite-sheet image.
(Which is equivalent to the viewport of the sprite's quad).

```lua
rect = sheet:rect(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

| Return | Type        | Note |
|-------:|-------------|------|
|   rect | [Rectangle] |      |

---

### `sheet:draw`

Draw a sprite from the sprite-sheet.

```lua
sheet = sheet:draw(spriteId, x, y, rotation, scaleX, scaleY)
```

|   Parameter | Type        | Default     | Note                   |
|------------:|-------------|-------------|------------------------|
|    spriteId | number      | ⚠️ required |                        |
|           x | number      | `0`         |                        |
|           y | number      | `0`         |                        |
|    rotation | number      | `0`         | in radians.            |
|      scaleX | number      | `1`         | `1` to preserve scale. |
|      scaleY | number      | `1`         | `1` to preserve scale. |

| Return | Type          | Note                                         |
|-------:|---------------|----------------------------------------------|
|  sheet | [SpriteSheet] | the object itself. allows to do chain calls. |

---

### `sheet:extract`

Extract a copy of the pixel data for a specific sprite only.

The resulting [ImageData] object would have the dimensions of a sprite.

```lua
spriteImageData = sheet:extract(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

|          Return | Type        | Note                                    |
|----------------:|-------------|-----------------------------------------|
| spriteImageData | [ImageData] | a unique instance. feel free to mutate. |

---

### `sheet:flag`

Flags are a group of 8 "lamps" (technically bits) that can be set on (1) or off (0)
for each sprite in the sprites' editor.

#### Get all the flags state in binary

```lua
bitfield = sheet:flag(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

|   Return | Type   | Note |
|---------:|--------|------|
| bitfield | number |      |

#### Set all the flags state in binary

```lua
sheet:flag(spriteId, bitfield)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |
|  bitfield | number | ⚠️ required |      |

|          Return | Type        | Note                                    |
|----------------:|-------------|-----------------------------------------|
| spriteImageData | [ImageData] | a unique instance. feel free to mutate. |

[SpriteSheet]: #
[Image]: ./image
[ImageData]: ./imagedata
[Quad]: ./quad
[Rectangle]: ../miscellaneous/utilities#Rectangle
