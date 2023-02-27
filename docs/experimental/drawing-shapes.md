---
title: Drawing Shapes
sidebar_position: 1
---

For drawing shapes into the screen using code.

---

## `color`

Get and/or set the active color.

```lua
colorId = color(colorId?)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|  colorId? | number | active color | integer in range `[0, 15]`. |

|  Return | Type   | Note                        |
|--------:|--------|-----------------------------|
| colorId | number | integer in range `[0, 15]`. |

---

## `clear`

Clear the screen and fills it with a specific color, useful when clearing the screen for a new frame.

```lua
clear(colorId?)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|  colorId? | number | active color | integer in range `[0, 15]`. |

---

## `point`

Draw a point on the screen.

```lua
point(x, y, colorId?)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|         x | number | ⚠️ required  |                             |
|         y | number | ⚠️ required  |                             |
|  colorId? | number | active color | integer in range `[0, 15]`. |

---

## `points`

Draw multiple points on the screen.

```lua
points(coords, colorId?)
```

| Parameter | Type     | Default      | Note                                                                              |
|----------:|----------|--------------|-----------------------------------------------------------------------------------|
|    coords | number[] | ⚠️ required  | the coordinates of the points, <br/> **must contain an even number of elements.** |
|  colorId? | number   | active color | integer in range `[0, 15]`.                                                       |

---

## `line`

Draw a line on the screen.

```lua
line(x1, y1, x2, y2, colorId?)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|        x1 | number | ⚠️ required  |                             |
|        y1 | number | ⚠️ required  |                             |
|        x2 | number | ⚠️ required  |                             |
|        y2 | number | ⚠️ required  |                             |
|  colorId? | number | active color | integer in range `[0, 15]`. |

---

## `lines`

Draw multiple lines on the screen.

```lua
line(coords, colorId?)
```

| Parameter | Type     | Default      | Note                                                                                     |
|----------:|----------|--------------|------------------------------------------------------------------------------------------|
|    coords | number[] | ⚠️ required  | the coordinates of the line vertices, <br/> **must contain an even number of elements.** |
|  colorId? | number   | active color | integer in range `[0, 15]`.                                                              |

---

## `circle`

Draw a circle on the screen.

```lua
circle(centerX, centerY, radius, filled?, colorId?)
```

| Parameter | Type    | Default      | Note                                     |
|----------:|---------|--------------|------------------------------------------|
|   centerX | number  | ⚠️ required  |                                          |
|   centerY | number  | ⚠️ required  |                                          |
|    radius | number  | ⚠️ required  |                                          |
|   filled? | boolean | `false`      | whether to be filled or only an outline. |
|  colorId? | number  | active color | integer in range `[0, 15]`.              |

---

## `ellipse`

Draw an ellipse on the screen.

```lua
ellipse(centerX, centerY, radiusX, radiusY, filled?, colorId?)
```

| Parameter | Type    | Default      | Note                                     |
|----------:|---------|--------------|------------------------------------------|
|   centerX | number  | ⚠️ required  |                                          |
|   centerY | number  | ⚠️ required  |                                          |
|   radiusX | number  | ⚠️ required  |                                          |
|   radiusY | number  | ⚠️ required  |                                          |
|   filled? | boolean | `false`      | whether to be filled or only an outline. |
|  colorId? | number  | active color | integer in range `[0, 15]`.              |

---

## `triangle`

Draw a triangle on the screen.

```lua
triangle(x1, y1, x2, y2, x3, y3, filled?, colorId?)
```

| Parameter | Type    | Default      | Note                                     |
|----------:|---------|--------------|------------------------------------------|
|        x1 | number  | ⚠️ required  | first vertex.                            |
|        y1 | number  | ⚠️ required  | first vertex.                            |
|        x2 | number  | ⚠️ required  | second vertex.                           |
|        y2 | number  | ⚠️ required  | second vertex.                           |
|        x3 | number  | ⚠️ required  | third vertex.                            |
|        y3 | number  | ⚠️ required  | third vertex.                            |
|   filled? | boolean | `false`      | whether to be filled or only an outline. |
|  colorId? | number  | active color | integer in range `[0, 15]`.              |

---

## `rectangle`

Draw a rectangle on the screen.

```lua
rect(x, y, width, height, filled?, colorId?)
```

| Parameter | Type    | Default      | Note                                     |
|----------:|---------|--------------|------------------------------------------|
|         x | number  | ⚠️ required  |                                          |
|         y | number  | ⚠️ required  |                                          |
|     width | number  | ⚠️ required  |                                          |
|    height | number  | ⚠️ required  |                                          |
|   filled? | boolean | `false`      | whether to be filled or only an outline. |
|  colorId? | number  | active color | integer in range `[0, 15]`.              |

---

## `polygon`

Draw a polygon on the screen.

```lua
polygon(vertices, filled?, colorId?)
```

| Parameter | Type     | Default      | Note                                                                                                                    |
|----------:|----------|--------------|-------------------------------------------------------------------------------------------------------------------------|
|  vertices | number[] | ⚠️ required  | the coordinates of the polygon vertices, <br/> **must contain an even number of elements<br/>and 3 vertices at least.** |
|   filled? | boolean  | `false`      | whether to be filled or only an outline.                                                                                |
|  colorId? | number   | active color | integer in range `[0, 15]`.                                                                                             |
