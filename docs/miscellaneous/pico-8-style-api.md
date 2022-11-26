---
title: PICO-8 Style API (deprecated)
---

A set of functions provided for convenience to users coming from PICO-8.

:::warning
Those functions are deprecated and will be removed in a future release.
:::


## `fget`

### Get the state of a specific flag

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

### Get all the flags state in binary

```lua
bitfield = fget(spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required |      |

|   Return | Type   | Note |
|---------:|--------|------|
| bitfield | number |      |

## `fset`

### Set the state of a specific flag

```lua
fset(spriteId, flagPosition, state)
```

|    Parameter | Type    | Default     | Note |
|-------------:|---------|-------------|------|
|     spriteId | number  | ⚠️ required |      |
| flagPosition | number  | ⚠️ required |      |
|        state | boolean | ⚠️ required |      |

### Set the state of all the flags in binary

```lua
fset(spriteId, bitfield)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  spriteId | number | ⚠️ required  |      |
|  bitfield | number | ⚠️ required  |      |

## `pget`

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

## `pset`

Set the color of a pixel on the screen.

```lua
pset(x, y, colorId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|         x | number | ⚠️ required |                               |
|         y | number | ⚠️ required |                               |
|   colorId | number | ⚠️ required | an integer in range `[0, 15]` |

## `sget`

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

## `sset`

Set the color of a pixel in the sprites.

```lua
sset(x, y, colorId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|         x | number | ⚠️ required |                               |
|         y | number | ⚠️ required |                               |
|   colorId | number | ⚠️ required | an integer in range `[0, 15]` |

## `mget`

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

## `mset`

Set the sprite for a cell in the map.

```lua
mset(x, y, spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |
|  spriteId | number | ⚠️ required |      |

