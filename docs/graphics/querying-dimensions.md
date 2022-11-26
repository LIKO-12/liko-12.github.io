---
title: Querying Dimensions
sidebar_position: 6

---

For querying the dimensions of the screen, font and terminal.

## Screen Dimensions

### `screenWidth`

Get the width of the screen.

```lua
width = screenWidth()
```

| Return | Type   | Note       |
|-------:|--------|------------|
|  width | number | in pixels. |

---

### `screenHeight`

Get the height of the screen.

```lua
height = screenHeight()
```

| Return | Type   | Note       |
|-------:|--------|------------|
| height | number | in pixels. |

---

### `screenSize`

Get the dimensions of the screen.

```lua
width, height = screenSize()
```

| Return | Type   | Note       |
|-------:|--------|------------|
|  width | number | in pixels. |
| height | number | in pixels. |

---

## Font Character Dimensions


### `fontWidth`

Get the width of the font character in pixels.

```lua
width = fontWidth()
```

| Return | Type   | Note       |
|-------:|--------|------------|
|  width | number | in pixels. |

---


### `fontHeight`

Get the height of the font character in pixels.

```lua
height = fontHeight()
```

| Return | Type   | Note       |
|-------:|--------|------------|
| height | number | in pixels. |

---

### `fontSize`

Get the dimensions of the font character in pixels.

```lua
height, width = fontSize()
```

| Return | Type   | Note       |
|-------:|--------|------------|
|  width | number | in pixels. |
| height | number | in pixels. |

---

## Terminal Dimensions

:::info

Custom fonts can change the output values.

:::

### `termWidth`

Returns width of the terminal in characters.

```lua
w = termWidth()
```

| Return | Type   | Note           |
|-------:|--------|----------------|
|  width | number | in characters. |

---

### `termHeight`

Get the height of the terminal in characters.

```lua
height = termHeight()
```

| Return | Type   | Note           |
|-------:|--------|----------------|
| height | number | in characters. |

---

### `termSize`

Returns size of the terminal in characters.

```lua
w, h = termSize()
```

| Return | Type   | Note           |
|-------:|--------|----------------|
|  width | number | in characters. |
| height | number | in characters. |
