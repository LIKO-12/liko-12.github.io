
# Map

## Creation

### `MapObj`

```lua
map = MapObj(width, height, spriteSheet)
```

|   Parameter | Type          | Default     | Note      |
|------------:|---------------|-------------|-----------|
|       width | number        | ⚠️ required | in cells. |
|      height | number        | ⚠️ required | in cells. |
| spriteSheet | [SpriteSheet] | ⚠️ required |           |

| Return | Type  | Note |
|-------:|-------|------|
|    map | [Map] |      |

## Methods

### `map:map`

```lua
map:map(cellFunction, x, y, width, height)
```

|    Parameter | Type           | Default     | Note      |
|-------------:|----------------|-------------|-----------|
| cellFunction | [CellFunction] | ⚠️ required |           |
|            x | number         | `0`         | in cells. |
|            y | number         | `0`         | in cells. |
|        width | number         | map width   | in cells. |
|       height | number         | map width   | in cells. |

#### CellFunction

```lua
function cellFunction(cellX, cellY, spriteId)
    --Logic to modify the spriteId.
    return spriteId;
end
```

| Parameter | Type   | Note |
|----------:|--------|------|
|     cellX | number |      |
|     cellY | number |      |
|  spriteId | number |      |

|   Return | Type        | Note                       |
|---------:|-------------|----------------------------|
| spriteId | number, nil | `nil` to leave unmodified. |

---

### `map:cell`

#### Get the id of a sprite for a cell

```lua
spriteId = map:cell(cellX, cellY)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|     cellX | number | ⚠️ required |      |
|     cellY | number | ⚠️ required |      |

|   Return | Type   | Note |
|---------:|--------|------|
| spriteId | number |      |

#### Set the id of a sprite for a cell

```lua
map = map:cell(cellX, cellY, spriteId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|     cellX | number | ⚠️ required |      |
|     cellY | number | ⚠️ required |      |
|  spriteId | number | ⚠️ required |      |

| Return | Type  | Note                                         |
|-------:|-------|----------------------------------------------|
|    map | [Map] | the object itself. allows to do chain calls. |

---

### `map:cut`

Create a new map out of a region from this map.

```lua
resultMap = map:cut(x, y, width, height) 
```

| Parameter | Type   | Default    | Note      |
|----------:|--------|------------|-----------|
|         x | number | `0`        | in cells. |
|         y | number | `0`        | in cells. |
|     width | number | map width  | in cells. |
|    height | number | map height | in cells. |

|    Return | Type  | Note |
|----------:|-------|------|
| resultMap | [Map] |      |

---

### `map:size`

```lua
width, height = map:size()
```

| Return | Type   | Note      |
|-------:|--------|-----------|
|  width | number | in cells. |
| height | number | in cells. |

---

### `map:width`

```lua
width = map:width()
```

| Return | Type   | Note      |
|-------:|--------|-----------|
|  width | number | in cells. |

---

### `map:height`

```lua
height = map:height()
```

| Return | Type   | Note      |
|-------:|--------|-----------|
| height | number | in cells. |

---

### `map:draw`

```lua
map = map:draw(destinationX, destinationY, sourceX, sourceY, sourceWidth, sourceHeight, scaleX, scaleY, spriteSheet)
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

| Return | Type  | Note                                         |
|-------:|-------|----------------------------------------------|
|    map | [Map] | the object itself. allows to do chain calls. |

---

### `map:export`

```lua
data = map:export()
```

| Return | Type   | Note                  |
|-------:|--------|-----------------------|
|   data | string | a `.lk12` raw string. |

---

### `map:import`

```lua
map = map:import(data)
```

| Parameter | Type   | Default     | Note                  |
|----------:|--------|-------------|-----------------------|
|      data | string | ⚠️ required | a `.lk12` raw string. |

| Return | Type  | Note                                         |
|-------:|-------|----------------------------------------------|
|    map | [Map] | the object itself. allows to do chain calls. |

---

### `map:spritebatch`

Enables the use of a spritebatch for the rendering of the map. Which brings a huge performance boost.

```lua
map:spritebatch(usage)
```
| Parameter | Type   | Default    | Note                                       |
|----------:|--------|------------|--------------------------------------------|
|     usage | string | `'static'` | enum: `'dynamic'`, `'static'`, `'stream'`. |

[Map]: #
[CellFunction]: #cellfunction
