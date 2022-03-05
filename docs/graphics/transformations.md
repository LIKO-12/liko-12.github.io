---
sidebar_position: 3

---

# Transformations

For transforming the colors and the coordinates' system.

## `pal`

Maps a color in the palette to another color.

> There are 2 palettes: The Images' Palette which affects images only. And the Drawing Palette which affects all other graphics functions.


### Map a color to another one

```lua
pal(colorIdA, colorIdB, palette)
```

| Parameter | Type                 | Default     | Note                                                                  |
|----------:|----------------------|-------------|-----------------------------------------------------------------------|
|  colorIdA | number, boolean      | ⚠️ required | integer in range `[0, 15]`. the color to replace. or `false` for all. |
|  colorIdB | number               | ⚠️ required | integer in range `[0, 15]`. the color which will replace color A.     |
|   palette | number, boolean, nil | `nil`       | `0`: Drawing Palette. `1`: Images Palette. `nil`/`false`: both.       |

### Reset a color to it's default

```lua
pal(colorId, false, palette)
```

| Parameter | Type                 | Default     | Note                                                            |
|----------:|----------------------|-------------|-----------------------------------------------------------------|
|   colorId | number               | ⚠️ required | integer in range `[0, 15]`                                      |
|   `false` | boolean              | ℹ️ literal  |                                                                 |
|   palette | number, boolean, nil | `nil`       | `0`: Drawing Palette. `1`: Images Palette. `nil`/`false`: both. |

### Reset the whole palette

```lua
pal(false, false, palette)
```

| Parameter | Type                 | Default    | Note                                                            |
|----------:|----------------------|------------|-----------------------------------------------------------------|
|   `false` | boolean              | ℹ️ literal |                                                                 |
|   `false` | boolean              | ℹ️ literal |                                                                 |
|   palette | number, boolean, nil | `nil`      | `0`: Drawing Palette. `1`: Images Palette. `nil`/`false`: both. |

---

## `palt`

Makes a specific color transparent or not, by default the color 0 is transparent.

> This only affects images.

### Set the transparency of a color

```lua
palt(colorId, isTransparent)
```

|     Parameter | Type    | Default     | Note                        |
|--------------:|---------|-------------|-----------------------------|
|       colorId | number  | ⚠️ required | integer in range `[0, 15]`. | 
| isTransparent | boolean | `false`     |                             |

### Reset the colors to their default

Which is opaque for all colors except `0`, which is considered transparent.

```lua
palt()
```

---

## `colorPalette`

Allows you to read and modify the real RGB values of a color in the palette.

### Get the RGB values of a color

```lua
r, g, b = colorPalette(colorId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|   colorId | number | ⚠️ required | integer in range `[0, 15]` |

| Return | Type   | Note                                        |
|-------:|--------|---------------------------------------------|
|      r | number | red channel, integer in range `[0, 255]`.   |
|      g | number | green channel, integer in range `[0, 255]`. |
|      b | number | blue channel, integer in range `[0, 255]`.  |

### Set the RGB values of a color

```lua
colorPalette(colorId, r, g, b)
```

| Parameter | Type   | Default     | Note                                        |
|----------:|--------|-------------|---------------------------------------------|
|   colorId | number | ⚠️ required | integer in range `[0, 15]`                  |
|         r | number | ⚠️ required | red channel, integer in range `[0, 255]`.   |
|         g | number | ⚠️ required | green channel, integer in range `[0, 255]`. |
|         b | number | ⚠️ required | blue channel, integer in range `[0, 255]`.  |

### Reset the palette colors to their defaults

Which is the PICO-8 palette.

```lua
colorPalette()
```

---

## `cam`

Transforms the drawing operations.

> The transforming operations sums up, to reset check the fifth usage of this function.

### Translate (shift) coordinates origin

Shifts all drawing operations.

```lua
cam("translate", x, y)
```

|     Parameter | Type   | Default     | Note |
|--------------:|--------|-------------|------|
| `'translate'` | string | ℹ️ literal  |      |
|             x | number | ⚠️ required |      |
|             y | number | ⚠️ required |      |

### Scale coordinates

Scales all the drawing operations.

```lua
cam("scale", scaleX, scaleY)
```

| Parameter | Type   | Default     | Note                   |
|----------:|--------|-------------|------------------------|
| `'scale'` | string | ℹ️ literal  |                        |
|    scaleX | number | ⚠️ required | `1` to preserve scale. |
|    scaleY | number | ⚠️ required | `1` to preserve scale. |

### Rotate around coordinates origin

```lua
cam("rotate", angle)
```

|  Parameter | Type   | Default     | Note        |
|-----------:|--------|-------------|-------------|
| `'rotate'` | string | ℹ️ literal  |             |
|      angle | number | ⚠️ required | in radians. |

### Shear coordinates

```lua
cam("shear", shearX, shearY)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
| `'shear'` | string | ℹ️ literal  |      |
|    shearX | number | ⚠️ required |      |
|    shearY | number | ⚠️ required |      |

### Reset all the transformations

Resets all the transformations done back to their original state.

```lua
cam()
```

---

## `clip`

Sets the region that the GPU can draw on.

### Enable clipping

> The arguments can be passed in a table.

```lua
clip(x, y, width, height)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|         x | number | ⚠️ required |      |
|         y | number | ⚠️ required |      |
|     width | number | ⚠️ required |      |
|    height | number | ⚠️ required |      |

### Disable clipping

```lua
clip()
```
