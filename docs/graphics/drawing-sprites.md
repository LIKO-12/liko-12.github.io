---
title: Drawing Sprites
sidebar_position: 2

---

For drawing individual sprites and the map into the screen.

## `Sprite`

Draw a single 8x8 sprite into the screen.

```lua
Sprite(spriteId, x, y, rotation, scaleX, scaleY, spriteSheet)
```

|   Parameter | Type        | Default     | Note                                             |
|------------:|-------------|-------------|--------------------------------------------------|
|    spriteId | number      | ⚠️ required | The ID of the sprite shown in the sprite editor. |
|           x | number      | `0`         |                                                  |
|           y | number      | `0`         |                                                  |
|    rotation | number      | `0`         | in radians.                                      |
|      scaleX | number      | `1`         | `1` to preserve scale.                           |
|      scaleY | number      | `1`         | `1` to preserve scale.                           |
| spriteSheet | SpriteSheet | SpriteMap   |                                                  |

## `SpriteGroup`

Draw a sprite larger than 8x8 by composing multiple 8x8 sprites together.

```lua
SpriteGroup(spriteId, x, y, width, height, scaleX, scaleY, rotation, spriteSheet)
```

|   Parameter | Type        | Default     | Note                                      |
|------------:|-------------|-------------|-------------------------------------------|
|    spriteId | number      | ⚠️ required |                                           |
|           x | number      | ⚠️ required |                                           |
|           y | number      | ⚠️ required |                                           |
|       width | number      | ⚠️ required | in sprites (cells).                       |
|      height | number      | ⚠️ required | in sprites (cells).                       |
|      scaleX | number      | `1`         | `1` to preserve scale.                    |
|      scaleY | number      | `1`         | `1` to preserve scale.                    |
|    rotation | number, nil | `nil`       | in radians. `nil` saves some performance. |
| spriteSheet | SpriteSheet | SpriteMap   |                                           |


## `map`

Draw the game's tile map. (The one edited in the tile map editor).

```lua
map(destinationX, destinationY, sourceX, sourceY, sourceWidth, sourceHeight, scaleX, scaleY, spriteSheet)
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

