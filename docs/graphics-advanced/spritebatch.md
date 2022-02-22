
# Spritebatch

Allows drawing a batch of sprites (quads (regions)) from an image in a single call.

Which gives huge performance boost, especially if the regions are static (not changing).

## Methods

import ObjectCall from '../partials/_object-call.md';

<ObjectCall />

### `spriteBatch:add`

Add a sprite (quad) to the batch.

```lua
spriteId = spriteBatch:add(quad, x, y, rotation, scaleX, scaleY, originX, originY, shearX, shearY)
```

| Parameter | Type   | Default     | Note                   |
|----------:|--------|-------------|------------------------|
|      quad | [Quad] | ⚠️ required |                        |
|         x | number | `0`         |                        |
|         y | number | `0`         |                        |
|  rotation | number | `0`         | in radians.            |
|    scaleX | number | `1`         | `1` to preserve scale. |
|    scaleY | number | `1`         | `1` to preserve scale. |
|   originX | number | `0`         |                        |
|   originY | number | `0`         |                        |
|    shearX | number | `0`         |                        |
|    shearY | number | `0`         |                        |

|   Return | Type   | Note                                       |
|---------:|--------|--------------------------------------------|
| spriteId | number | can be used for removing the sprite later. |

---

### `spriteBatch:set`

Modify a sprite in the batch.

```lua
spriteBatch = spriteBatch:set(spriteId, quad, x, y, rotation, scaleX, scaleY, originX, originY, shearX, shearY)
```

| Parameter | Type   | Default     | Note                                          |
|----------:|--------|-------------|-----------------------------------------------|
|  spriteId | number | ⚠️ required | to update                                     |
|      quad | [Quad] | ⚠️ required | to replace existing one (can be the same one) |
|         x | number | `0`         |                                               |
|         y | number | `0`         |                                               |
|  rotation | number | `0`         | in radians.                                   |
|    scaleX | number | `1`         | `1` to preserve scale.                        |
|    scaleY | number | `1`         | `1` to preserve scale.                        |
|   originX | number | `0`         |                                               |
|   originY | number | `0`         |                                               |
|    shearX | number | `0`         |                                               |
|    shearY | number | `0`         |                                               |

|      Return | Type          | Note                                         |
|------------:|---------------|----------------------------------------------|
| spriteBatch | [SpriteBatch] | the object itself. allows to do chain calls. |

---

### `spriteBatch:clear`

Clear the sprites from the buffer (remove them all). 

```lua
spriteBatch = spriteBatch:clear()
```

|      Return | Type          | Note                                         |
|------------:|---------------|----------------------------------------------|
| spriteBatch | [SpriteBatch] | the object itself. allows to do chain calls. |

---

### `spriteBatch:draw`

Draw the sprite batch into the screen.

```lua
spriteBatch = spriteBatch:draw(x, y, rotation, scaleX, scaleY, quad)
```

| Parameter | Type        | Default | Note                                                                                        |
|----------:|-------------|---------|---------------------------------------------------------------------------------------------|
|         x | number      | `0`     |                                                                                             |
|         y | number      | `0`     |                                                                                             |
|  rotation | number      | `0`     | in radians.                                                                                 |
|    scaleX | number      | `1`     | `1` to preserve scale.                                                                      |
|    scaleY | number      | `1`     | `1` to preserve scale.                                                                      |
|      quad | [Quad], nil | `nil`   | a quad to draw only a region from the spritebatch. otherwise the full spritebatch is drawn. |

|      Return | Type          | Note                                         |
|------------:|---------------|----------------------------------------------|
| spriteBatch | [SpriteBatch] | the object itself. allows to do chain calls. |

---

### `spriteBatch:flush`

Immediately refresh the batch data. (Sometimes necessary).

```lua
sb = spriteBatch:flush()
```

|      Return | Type          | Note                                         |
|------------:|---------------|----------------------------------------------|
| spriteBatch | [SpriteBatch] | the object itself. allows to do chain calls. |

---

### `spriteBatch:getCount`

Get the current number of sprites in the batch.

```lua
count = spriteBatch:getCount()
```

| Return | Type   | Note |
|-------:|--------|------|
|  count | number |      |

---

### `spriteBatch:getBufferSize`

Get the maximum number of sprites the batch can contain.

```lua
capacity = spriteBatch:getBufferSize()
```

|   Return | Type   | Note |
|---------:|--------|------|
| capacity | number |      |

---

### `spriteBatch:setBufferSize`

Set the maximum number of sprites the batch can contain.

```lua
spriteBatch = spriteBatch:setBufferSize(capacity)
```

| Parameter | Type   | Default     | Note                     |
|----------:|--------|-------------|--------------------------|
|  capacity | number | ⚠️ required | must be positive integer |

|      Return | Type          | Note                                         |
|------------:|---------------|----------------------------------------------|
| spriteBatch | [SpriteBatch] | the object itself. allows to do chain calls. |

---

### `spriteBatch:usage`

The hint set during the batch creation for doing optimizations internally.

```lua
usage = spriteBatch:usage()
```

| Return | Type   | Note                                       |
|-------:|--------|--------------------------------------------|
|  usage | string | enum: `'dynamic'`, `'static'`, `'stream'`. |


---

### `spriteBatch:type`

Get the type of the object as a string.

:::warning

This method most likely will be removed in a future version.

:::

```lua
type = spriteBatch:type()
```

|     Return | Type   | Note          |
|-----------:|--------|---------------|
| objectType | string | `spritebatch` |

---

### `spriteBatch:typeOf`

Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true.

:::warning

This method most likely will be removed in a future version.

:::

```lua
isIt = spriteBatch:typeOf(type)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      type | string | ⚠️ required |      |

| Return | Type    | Note                                                                       |
|-------:|---------|----------------------------------------------------------------------------|
|   isIt | boolean | `'GPU'`, `'spritebatch'`, `'GPU.spritebatch'`, `'LK12'` would give `true`. |

[Image]: ./image
[Quad]: ./quad
[SpriteBatch]: #

