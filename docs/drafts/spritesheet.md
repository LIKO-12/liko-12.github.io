
# SpriteSheet

## Creation

### `spritesheet`

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

## Methods

### `sheet:image`

```lua
spritesImage = sheet:image() 
```

|       Return | Type    | Note |
|-------------:|---------|------|
| spritesImage | [Image] |      |

---

### `sheet:data`

```lua
spritesImageData = sheet:data()
```

|           Return | Type        | Note |
|-----------------:|-------------|------|
| spritesImageData | [ImageData] |      |

---

### `sheet:quad`

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

```lua
rect = sheet:rect(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

| Return | Type   | Note |
|-------:|--------|------|
|   rect | [Rect] |      |

---

### `sheet:draw`

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
