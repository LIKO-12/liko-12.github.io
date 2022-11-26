
# Uncategorized Functions

### `dofile`

```lua
local ... = dofile(path)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      path | string | ⚠️ required |      |

| Return | Type | Note                             |
|-------:|------|----------------------------------|
|  `...` | any  | any values returned by the file. |

### `pause`

```lua
pause()
```

### `SaveID`

Set an id for the game save data.

:::caution

Can be only set one during a game's runtime.

:::

```lua
SaveID(saveId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|    saveId | string | ⚠️ required |      |

### `SaveData`

Write save data for the game.

:::caution

The save id has to be set first using [`SaveID`](#saveid).

:::

```lua
SaveData(data)
```

| Parameter | Type   | Default     | Note             |
|----------:|--------|-------------|------------------|
|      data | string | ⚠️ required | 2 KByte maximum. |

### `LoadData`

Load saved data for the game.

:::caution

The save id has to be set first using [`SaveID`](#saveid).

:::

```lua
data = LoadData()
```

| Return | Type   | Note                                                |
|-------:|--------|-----------------------------------------------------|
|   data | string | an empty string when no data has been saved before. |

### `Sprite`

```lua
Sprite(spriteId, x, y, rotation, scaleX, scaleY, spriteSheet)
```

|   Parameter | Type        | Default     | Note                   |
|------------:|-------------|-------------|------------------------|
|    spriteId | number      | ⚠️ required |                        |
|           x | number      | `0`         |                        |
|           y | number      | `0`         |                        |
|    rotation | number      | `0`         | in radians.            |
|      scaleX | number      | `1`         | `1` to preserve scale. |
|      scaleY | number      | `1`         | `1` to preserve scale. |
| spriteSheet | SpriteSheet | SpriteMap   |                        |

### `SpriteGroup`

```lua
SpriteGroup(spriteId, x, y, width, height, scaleX, scaleY, rotation, spriteSheet)
```

|   Parameter | Type        | Default     | Note                                      |
|------------:|-------------|-------------|-------------------------------------------|
|    spriteId | number      | ⚠️ required |                                           |
|           x | number      | ⚠️ required |                                           |
|           y | number      | ⚠️ required |                                           |
|       width | number      | ⚠️ required | in sprites (cells).                       |
|      height | number      | ⚠️ required | in sprites (cells).                       |
|      scaleX | number      | `1`         | `1` to preserve scale.                    |
|      scaleY | number      | `1`         | `1` to preserve scale.                    |
|    rotation | number, nil | `nil`       | in radians. `nil` saves some performance. |
| spriteSheet | SpriteSheet | SpriteMap   |                                           |

## `map`

```lua
map(destinationX, destinationY, sourceX, sourceY, sourceWidth, sourceHeight, scaleX, scaleY, spriteSheet)
```

|    Parameter | Type        | Default    | Note       |
|-------------:|-------------|------------|------------|
| destinationX | number      | `0`        | in pixels. |
| destinationY | number      | `0`        | in pixels. |
|      sourceX | number      | `0`        | in cells.  |
|      sourceY | number      | `0`        | in cells.  |
|  sourceWidth | number      | map width  | in cells.  |
| sourceHeight | number      | map height | in cells.  |
|  spriteSheet | SpriteSheet | SpriteMap  |            |


### `SFX`

```lua
SFX(slotId, channelId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|    slotId | number | ⚠️ required |                               |
| channelId | number | `0`         | an integer in range `[0, 3]`. |

### `Controls`

```lua
Controls(type)
```

| Parameter | Type   | Default     | Note                                                             |
|----------:|--------|-------------|------------------------------------------------------------------|
|      type | string | `'gamepad'` | enum: `'gamepad'`, `'keyboard'`, `'touch'`, `'mouse'`, `'none'`. |
