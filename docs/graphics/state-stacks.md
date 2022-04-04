---
title: State Stacks
sidebar_position: 4

---

For backing up graphics states using stacks.

## Coordinates (Geometry) Transformations Matrix Stack

### `pushMatrix`

Pushes the current active camera transformations to the MatrixStack.

```lua
pushMatrix()
```

---

### `popMatrix`

Pops the last cam transformations from the MatrixStack.

```lua
popMatrix()
```

---

### `clearMatrixStack`

Clears the matrix stack (By calling `popMatrix()`).

```lua
clearMatrixStack()
```

---

## Colors Mapping Stack

### `pushColor`

Pushes the current active color to the ColorStack.

```lua
pushColor()
```

---

### `popColor`

Pops the last active color from the ColorStack.

```lua
popColor()
```

---

## Colors RGB Palette Stack

### `pushPalette`

Pushes the current color mapping and transparent colors list to the palettes stack.

```lua
pushPalette()
```

---

### `popPalette`

Pop the last color mapping and transparent colors list from the palettes stack.

```lua
popPalette()
```
