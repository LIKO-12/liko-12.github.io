---
sidebar_position: 1

---

# GamePad

The universal virtual control unit of LIKO-12.
Which is emulated using other methods of input.

Those virtual game pads come with 7 digital buttons that has those ids:

| Left | Right | Up  | Down |  A  |  B  | Start |
|:----:|:-----:|:---:|:----:|:---:|:---:|:-----:|
|  1   |   2   |  3  |  4   |  5  |  6  |   7   |

## Supported methods of input

### Keyboard

For desktop and laptops users.
2 groups of keyboard keys are mapped into 2 virtual game pads.

They can be configured by the user using the `keymap` command. The default controls are:

|  Player no. | Left | Right | Up  | Down | A   | B   | Start |
|------------:|------|-------|-----|------|-----|-----|-------|
|           1 | Left | Right | Up  | Down | Z   | X   | C     |
|           2 | S    | F     | E   | D    | Tab | Q   | W     |

It's also possible to look up what keys the user have configured while a game is running:

#### `getBtnName`

Get the name of the key which is configured for an emulated gamepad button.

```lua
keyName = getBtnName(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

|  Return | Type   | Note |
|--------:|--------|------|
| keyName | string |      |

---

### TouchControls

Mobile users have special on-screen touch controls
that are not pixelated (not part of the fantasy LIKO-12 screen).

This allows a single game pad to be controlled by the user.

---

### Joysticks

It's possible to map real life joysticks into virtual game pads using the `joymap` command!

## Querying game pads input

Immediate mode functions are available to read input from the virtual game pads.

Which are meant to be used to query the game pads state in every `_update` cycle (call).

---

### `btn`

Query the state of a button.

```lua
isDown = btn(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

| Return | Type    | Note |
|-------:|---------|------|
| isDown | boolean |      |

---

### `btnp`

Check if a button was just pressed in this `_update` cycle.

```lua
wasPressed = btnp(buttonId, playerId)
```

| Parameter | Type   | Default     | Note                       |
|----------:|--------|-------------|----------------------------|
|  buttonId | number | ⚠️ required | integer in range `[1, 7]`. |
|  playerId | number | `1`         | 1-based.                   |

|     Return | Type   | Note |
|-----------:|--------|------|
| wasPressed | button |      |

