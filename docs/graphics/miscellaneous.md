---
title: Miscellaneous
sidebar_position: 7

---

Miscellaneous features related to graphics but couldn't be categorized into a specific topic.

## `flip`

Waits till the screen is applied and shown to the user, helpful when doing some loading operations.

```lua
flip()
```

---

## `cursor`

Sets the current active mouse cursor, or creates a new one.

By default, the cursor is free from the pixelated screen, as it can set in a place between 2 pixels.
This was to keep the smooth movement of the mouse, at the cost of losing some of the retro feeling.

:::info

DiskOS provides a set of standard cursors which are:
`normal`, `handrelease`, `handpress`, `hand`, `cross`, `point`, `draw`, `normal_while`,
`pencil`, `bucket`, `eraser` and `picker`.

:::

### Set the current mouse cursor

```lua
cursor(cursorName, alignToPixelGrid)
```

|        Parameter | Type    | Default     | Note |
|-----------------:|---------|-------------|------|
|       cursorName | string  | ⚠️ required |      |
| alignToPixelGrid | boolean | `false`     |      |

### Get the current mouse cursor

```lua
cursorName = cursor()
```

|     Return | Type   | Note |
|-----------:|--------|------|
| cursorName | string |      |

### Define a new cursor

The hotpoint is the point where the cursor actually clicks in the screen coordinates.

:::warning

Overriding any of the standard cursors would override it to DiskOS.
And thus a LIKO-12 reboot would be required to reload the original ones.

:::

```lua
cursor(imageData, cursorName, hotpointX, hotpointY)
```

|  Parameter | Type        | Default     | Note |
|-----------:|-------------|-------------|------|
|  imageData | [ImageData] | ⚠️ required |      |
| cursorName | string      | ⚠️ required |      |
|  hotpointX | number      | `0`         |      |
|  hotpointY | number      | `0`         |      |


[ImageData]: ../graphics-advanced/imagedata
