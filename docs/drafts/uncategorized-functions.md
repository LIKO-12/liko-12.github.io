
# Uncategorized Functions

### `dofile`

```lua
... = dofile(path)
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

### `getBtnName`

Get the name of the key which is configured for an emulated gamepad button.

```lua
keyName = getBtnName(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

|  Return | Type   | Note |
|--------:|--------|------|
| keyName | string |      |

### `btn`

```lua
isDown = btn(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

| Return | Type    | Note |
|-------:|---------|------|
| isDown | boolean |      |

### `btnp`

```lua
wasPressed = btnp(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

|     Return | Type   | Note |
|-----------:|--------|------|
| wasPressed | button |      |

### `__BTNUpdate`

```lua
__BTNUpdate(deltaTime)
```

| Parameter | Type   | Default     | Note                         |
|----------:|--------|-------------|------------------------------|
| deltaTime | number | ⚠️ required | since last call. in seconds. |

### `__BTNKeypressed`

```lua
__BTNKeypressed(keyName, isRepeat)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|   keyName | string  | ⚠️ required |      |
|  isRepeat | boolean | `false`     |      |

### `__BTNTouchControl`

```lua
__BTNTouchControl(state, buttonId)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|     state | boolean | ⚠️ required |      |
|  buttonId | number  | ⚠️ required |      |

### `__BTNGamepad`

```lua
__BTNGamepad(state, buttonId, gamepadId)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|     state | boolean | ⚠️ required |      |
|  buttonId | number  | ⚠️ required |      |
| gamepadId | number  | ⚠️ required |      |

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

### `SFX`

```lua
SFX(slotId, channelId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|    slotId | number | ⚠️ required |                               |
| channelId | number | `0`         | an integer in range `[0, 3]`. |

### `fget`

#### Get the state of a specific flag

```lua
isSet = fget(spriteId, flagPosition)
```

|    Parameter | Type   | Default     | Note                          |
|-------------:|--------|-------------|-------------------------------|
|     spriteId | number | ⚠️ required |                               |
| flagPosition | number | ⚠️ required | an integer in range `[1, 8]`. |

| Return | Type    | Note |
|-------:|---------|------|
|  isSet | boolean |      |

#### Get all the flags state in binary

```lua
bitfield = fget(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

|   Return | Type   | Note |
|---------:|--------|------|
| bitfield | number |      |

### `fset`

#### Set the state of a specific flag

```lua
fset(spriteId, flagPosition, state)
```

|    Parameter | Type    | Default     | Note |
|-------------:|---------|-------------|------|
|     spriteId | number  | ⚠️ required |      |
| flagPosition | number  | ⚠️ required |      |
|        state | boolean | ⚠️ required |      |

#### Set the state of all the flags in binary

```lua
fset(spriteId, bitfield)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |
|  bitfield | number | ⚠️ required |      |

### `map`

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

### `pget`

Get the color of a pixel on the screen.

```lua
colorId = pget(x, y)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |

|  Return | Type   | Note                          |
|--------:|--------|-------------------------------|
| colorId | number | an integer in range `[0, 15]` |

### `pset`

Set the color of a pixel on the screen.

```lua
pset(x, y, colorId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|         x | number | ⚠️ required |                               |
|         y | number | ⚠️ required |                               |
|   colorId | number | ⚠️ required | an integer in range `[0, 15]` |

### `sget`

Get the color of a pixel form the sprites.

```lua
colorId = sget(x, y)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |

|  Return | Type   | Note                          |
|--------:|--------|-------------------------------|
| colorId | number | an integer in range `[0, 15]` |

### `sset`

Set the color of a pixel in the sprites.

```lua
sset(x, y, colorId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|         x | number | ⚠️ required |                               |
|         y | number | ⚠️ required |                               |
|   colorId | number | ⚠️ required | an integer in range `[0, 15]` |

### `mget`

Get the id of the sprite for a cell in the map.

```lua
spriteId = mget(x, y)
```

| Parameter | Type   | Default     | Note      |
|----------:|--------|-------------|-----------|
|         x | number | ⚠️ required | in cells. |
|         y | number | ⚠️ required | in cells. |

|   Return | Type   | Note |
|---------:|--------|------|
| spriteId | number |      |

### `mset`

Set the sprite for a cell in the map.

```lua
mset(x, y, spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |
|  spriteId | number | ⚠️ required |      |

### `Controls`

```lua
Controls(type)
```

| Parameter | Type   | Default     | Note                                                             |
|----------:|--------|-------------|------------------------------------------------------------------|
|      type | string | `'gamepad'` | enum: `'gamepad'`, `'keyboard'`, `'touch'`, `'mouse'`, `'none'`. |

### `exit`

```lua
exit(message)
```

| Parameter | Type        | Default | Note            |
|----------:|-------------|---------|-----------------|
|   message | string, nil | `nil`   | reason of exit. |
