---
title: Shapes Painting (Drawing)
sidebar_position: 1

---

For drawing shapes into the screen using code.

## `color`

### Set the active color

```lua
color(colorId)
```

| Parameter | Type   | Default     | Note                        |
|----------:|--------|-------------|-----------------------------|
|   colorId | number | ⚠️ required | integer in range `[0, 15]`. |

### Get the active color

```lua
id = color()
```

|  Return | Type   | Note                        |
|--------:|--------|-----------------------------|
| colorId | number | integer in range `[0, 15]`. |

---

## `clear`

Clears the screen and fills it with a specific color, useful when clearing the screen for a new frame.

```lua
clear(colorId)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|   colorId | number | active color | integer in range `[0, 15]`. |

---

## `point`

Draws point(s) on the screen.

```lua
point(x, y, ..., colorId)
```

| Parameter | Type   | Default      | Note                                                                              |
|----------:|--------|--------------|-----------------------------------------------------------------------------------|
|         x | number | ⚠️ required  |                                                                                   |
|         y | number | ⚠️ required  |                                                                                   |
|     `...` | number | _varargs_    | pairs of numbers which are coordinates for other points to draw in the same call. |
|   colorId | number | active color | integer in range `[0, 15]`.                                                       |

---

## `line`

Draws line(s) on the screen.

```lua
line(x1, y1, x2, y2, ..., colorId)
```

| Parameter | Type   | Default      | Note                        |
|----------:|--------|--------------|-----------------------------|
|        x1 | number | ⚠️ required  |                             |
|        y1 | number | ⚠️ required  |                             |
|        x2 | number | ⚠️ required  |                             |
|        y2 | number | ⚠️ required  |                             |
|     `...` | number | _varargs_    |                             |
|   colorId | number | active color | integer in range `[0, 15]`. |

---

## `circle`

Draws a circle on the screen.

> The arguments can be passed in a table.

```lua
circle(centerX, centerY, radius, isOutlineOnly, colorId, segmentsCount)
```

|     Parameter | Type    | Default              | Note                        |
|--------------:|---------|----------------------|-----------------------------|
|       centerX | number  | ⚠️ required          |                             |
|       centerY | number  | ⚠️ required          |                             |
|        radius | number  | ⚠️ required          |                             |
| isOutlineOnly | boolean | `false`              |                             |
|       colorId | number  | active color         | integer in range `[0, 15]`. |
| segmentsCount | number  | determined by system |                             |

---

## `ellipse`

Draws an ellipse on the screen.

> The arguments can be passed in a table

```lua
ellipse(centerX, centerY, radiusX, radiusY, isOutlineOnly, colorId, segmentsCount)
```

|     Parameter | Type    | Default              | Note                        |
|--------------:|---------|----------------------|-----------------------------|
|       centerX | number  | ⚠️ required          |                             |
|       centerY | number  | ⚠️ required          |                             |
|       radiusX | number  | ⚠️ required          |                             |
|       radiusY | number  | ⚠️ required          |                             |
| isOutlineOnly | boolean | `false`              |                             |
|       colorId | number  | active color         | integer in range `[0, 15]`. |
| segmentsCount | number  | determined by system |                             |

---

## `triangle`

Draws a triangle on the screen.

> The arguments can be passed in a table

```lua
triangle(x1, y1, x2, y2, x3, y3, l, c)
```

|     Parameter | Type    | Default      | Note                        |
|--------------:|---------|--------------|-----------------------------|
|            x1 | number  | ⚠️ required  | first vertex.               |
|            y1 | number  | ⚠️ required  | first vertex.               |
|            x2 | number  | ⚠️ required  | second vertex.              |
|            y2 | number  | ⚠️ required  | second vertex.              |
|            x3 | number  | ⚠️ required  | third vertex.               |
|            y3 | number  | ⚠️ required  | third vertex.               |
| isOutlineOnly | boolean | `false`      |                             |
|       colorId | number  | active color | integer in range `[0, 15]`. |

---

## `rect`

Draws a rectangle on the screen.

> The arguments can be passed in a table

```lua
rect(x, y, width, height, isOutlineOnly, colorId)
```

|     Parameter | Type    | Default      | Note                        |
|--------------:|---------|--------------|-----------------------------|
|             x | number  | ⚠️ required  |                             |
|             y | number  | ⚠️ required  |                             |
|         width | number  | ⚠️ required  |                             |
|        height | number  | ⚠️ required  |                             |
| isOutlineOnly | boolean | `false`      |                             |
|       colorId | number  | active color | integer in range `[0, 15]`. |

---

## `polygon`

Draws a polygon on the screen.

```lua
polygon(x1, y1, x2, y2, x3, y3, ..., colorId)
```

| Parameter | Type   | Default      | Note                                                    |
|----------:|--------|--------------|---------------------------------------------------------|
|        x1 | number | ⚠️ required  | first vertex.                                           |
|        y1 | number | ⚠️ required  | first vertex.                                           |
|        x2 | number | ⚠️ required  | second vertex.                                          |
|        y2 | number | ⚠️ required  | second vertex.                                          |
|        x3 | number | ⚠️ required  | third vertex.                                           |
|        y3 | number | ⚠️ required  | third vertex.                                           |
|     `...` | number | _varargs_    | pairs of coordinates for other vertices of the polygon. |
|   colorId | number | active color | integer in range `[0, 15]`.                             |
