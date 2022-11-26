---
title: Printing Text
sidebar_position: 3

---

For writing text on the screen.

## `print`

Prints text to the screen.

### At a specific position on the screen with overflow wrapping

```lua
print(text, x, y, limit, align, rotation, scaleX, scaleY, originX, originY, shearX, shearY)
```

| Parameter | Type   | Default     | Note                                             |
|----------:|--------|-------------|--------------------------------------------------|
|      text | string | ⚠️ required |                                                  |
|         x | number | ⚠️ required |                                                  |
|         y | number | ⚠️ required |                                                  |
|     limit | number | ⚠️ required | wrap the line after this many horizontal pixels. |
|     align | string | `'left'`    | enum:  `'left'`, `'center'`, `'right'`.          |
|  rotation | number | `0`         | in radians.                                      |
|    scaleX | number | `1`         |                                                  |
|    scaleY | number | `1`         |                                                  |
|   originX | number | `0`         |                                                  |
|   originY | number | `0`         |                                                  |
|    shearX | number | `0`         |                                                  |
|    shearY | number | `0`         |                                                  |

### At a specific position on the screen without overflow wrapping

```lua
print(text, x, y, false, false, rotation, scaleX, scaleY, originX, originY, scaleX, scaleY)
```

| Parameter | Type    | Default     | Note        |
|----------:|---------|-------------|-------------|
|      text | string  | ⚠️ required |             |
|         x | number  | ⚠️ required |             |
|         y | number  | ⚠️ required |             |
|   `false` | boolean | ℹ️ literal  |             |
|   `false` | boolean | ℹ️ literal  |             |
|  rotation | number  | `0`         | in radians. |
|    scaleX | number  | `1`         |             |
|    scaleY | number  | `1`         |             |
|   originX | number  | `0`         |             |
|   originY | number  | `0`         |             |
|    shearX | number  | `0`         |             |
|    shearY | number  | `0`         |             |

### In a terminal fashion

```lua
print(text)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      text | string | ⚠️ required |      |

### In a terminal fashion with a new line

```lua
print(text, false)
```

| Parameter | Type    | Default     | Note        |
|----------:|---------|-------------|-------------|
|      text | string  | ⚠️ required |             |
|   `false` | boolean | ℹ️ literal  |             |

### In a terminal fashion without wrapping nor new line

```lua
print(text, false, true)
```

| Parameter | Type    | Default     | Note        |
|----------:|---------|-------------|-------------|
|      text | string  | ⚠️ required |             |
|   `false` | boolean | ℹ️ literal  |             |
|    `true` | boolean | ℹ️ literal  |             |

---

## `printBackspace`

Deletes the last printed character via the 3rd and 4th variants of `print()`, and it updates the cursor position.

### Delete the last character

```lua
printBackspace(colorId)
```

| Parameter | Type   | Default      | Note                                                                          |
|----------:|--------|--------------|-------------------------------------------------------------------------------|
|   colorId | number | active color | integer in range `[-1, 15]` where `-1` would indicate transparent background. |

### Delete the last character without doing a carriage return

By default, a carriage return is done when the start of line is reached. 
This disables that behaviour.

```lua
printBackspace(colorId, true)
```

| Parameter | Type    | Default      | Note                                                                          |
|----------:|---------|--------------|-------------------------------------------------------------------------------|
|   colorId | number  | active color | integer in range `[-1, 15]` where `-1` would indicate transparent background. |
|    `true` | boolean | ℹ️ literal   |                                                                               |

---

## `printCursor`

Change the print cursor position used by `print()` when in terminal fashion.

> The positions are on a characters grid, the size of the grid can be requested from `termSize()`.

### Set cursor position

```lua
printCursor(x, y, backgroundColorId)
```

|         Parameter | Type   | Default                  | Note                                                                          |
|------------------:|--------|--------------------------|-------------------------------------------------------------------------------|
|                 x | number | current postition        |                                                                               |
|                 y | number | current position         |                                                                               | 
| backgroundColorId | number | current background color | integer in range `[-1, 15]` where `-1` would indicate transparent background. |

### Get cursor position

```lua
x, y, backgroundColorId = printCursor()
```

|            Return | Type   | Note                                                                          |
|------------------:|--------|-------------------------------------------------------------------------------|
|                 x | number |                                                                               |
|                 y | number |                                                                               |
| backgroundColorId | number | integer in range `[-1, 15]` where `-1` would indicate transparent background. |

---

## `wrapText`

Get formatting information for text, given a wrap limit.

This function accounts for newlines correctly (i.e. '\n').

```lua
width, wrappedText = wrapText(text, wrapLimit)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      text | string | ⚠️ required |      |
| wrapLimit | number | ⚠️ required |      |

|      Return | Type             | Note                                   |
|------------:|------------------|----------------------------------------|
|       width | number           | the maximum width of the wrapped text. |
| wrappedText | table `string[]` | list of text lines.                    |
