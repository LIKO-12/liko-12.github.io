---
title: Utilities

---

Utility functions for aiding in writing common logic.

## `isInRect`

Check if a point is inside a rectangular area.

```lua
isInRect(x, y, rect)
```

| Parameter | Type        | Default     | Note |
|----------:|-------------|-------------|------|
|         x | number      | ⚠️ required |      |
|         y | number      | ⚠️ required |      |
|      rect | [Rectangle] | ⚠️ required |      |

### Rectangle

Represent a rectangular area.

```lua
rect = {x, y, width, height}
```

|  Value | Type   | Note             |
|-------:|--------|------------------|
|      x | number | top-left corner. |
|      y | number | top-left corner. |
|  width | number |                  |
| height | number |                  |

## `whereInGrid`

Check where the point lies inside a tabular grid of cells.

```lua
cellX, cellY = whereInGrid(x, y, grid)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |
|      grid | [Grid] | ⚠️ required |      |

### Grid

Represent a tabular grid.

```lua
grid = {x, y, width, height, columns, rows} 
```

|  Values | Type   | Note |
|--------:|--------|------|
|       x | number |      |
|       y | number |      |
|   width | number |      |
|  height | number |      |
| columns | number |      |
|    rows | number |      |

[Rectangle]: #rectangle
[Grid]: #grid
