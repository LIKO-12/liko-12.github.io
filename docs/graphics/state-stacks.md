---
title: State Stacks
sidebar_position: 5

---

For backing up graphics states using stacks.

## Coordinates (Geometry) Transformations Matrix Stack

### `pushMatrix`

Push the current active camera transformations to the MatrixStack.

```lua
pushMatrix()
```

---

### `popMatrix`

Pop the last cam transformations from the MatrixStack.

```lua
popMatrix()
```

---

### `clearMatrixStack`

Clear the matrix stack (By calling `popMatrix()`).

```lua
clearMatrixStack()
```

---

## Colors Mapping Stack

### `pushColor`

Push the current active color to the ColorStack.

```lua
pushColor()
```

---

### `popColor`

Pop the last active color from the ColorStack.

```lua
popColor()
```

---

## Colors RGB Palette Stack

### `pushPalette`

Push the current color mapping and transparent colors list to the palettes stack.

```lua
pushPalette()
```

---

### `popPalette`

Pop the last color mapping and transparent colors list from the palettes stack.

```lua
popPalette()
```
