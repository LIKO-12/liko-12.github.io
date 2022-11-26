
# Uncategorized Functions

### `dofile`

```lua
local ... = dofile(path)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      path | string | ⚠️ required |      |

| Return | Type | Note                             |
|-------:|------|----------------------------------|
|  `...` | any  | any values returned by the file. |

### `pause`

```lua
pause()
```

### `SaveID`

Set an id for the game save data.

:::caution

Can be only set one during a game's runtime.

:::

```lua
SaveID(saveId)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|    saveId | string | ⚠️ required |      |

### `SaveData`

Write save data for the game.

:::caution

The save id has to be set first using [`SaveID`](#saveid).

:::

```lua
SaveData(data)
```

| Parameter | Type   | Default     | Note             |
|----------:|--------|-------------|------------------|
|      data | string | ⚠️ required | 2 KByte maximum. |

### `LoadData`

Load saved data for the game.

:::caution

The save id has to be set first using [`SaveID`](#saveid).

:::

```lua
data = LoadData()
```

| Return | Type   | Note                                                |
|-------:|--------|-----------------------------------------------------|
|   data | string | an empty string when no data has been saved before. |

### `SFX`

```lua
SFX(slotId, channelId)
```

| Parameter | Type   | Default     | Note                          |
|----------:|--------|-------------|-------------------------------|
|    slotId | number | ⚠️ required |                               |
| channelId | number | `0`         | an integer in range `[0, 3]`. |

### `Controls`

```lua
Controls(type)
```

| Parameter | Type   | Default     | Note                                                             |
|----------:|--------|-------------|------------------------------------------------------------------|
|      type | string | `'gamepad'` | enum: `'gamepad'`, `'keyboard'`, `'touch'`, `'mouse'`, `'none'`. |
