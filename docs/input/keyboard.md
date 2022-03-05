---
sidebar_position: 3

---

# Keyboard

The standard text input method on desktop and laptop devices.

:::info

For a list of all the buttons enum values, check [keyboard enums](../appendix/keyboard-enums) in the appendix.

:::

## Methods:

### `isKDown`

Check whether a certain key or any key of a group is down.

```lua
isButtonDown = isKDown(key, ...)
```

| Parameter | Type   | Default     | Note                 |
|----------:|--------|-------------|----------------------|
|       key | string | ⚠️ required | check the keys enum. |
|     `...` | string | _varargs_   | any other keys.      |

|       Return | Type    | Note                                        |
|-------------:|---------|---------------------------------------------|
| isButtonDown | boolean | if any key from the provided ones was down. |

---

### `keyrepeat`

Enables or disables key repeat. Which is enabled by default.

The interval between repeats depends on the user's system settings.

:::note

It's better to do `if isrepeat then return true end` in the keyboard
events/callbacks than disabling the feature.

:::

#### Set the key repeat state

```lua
keyrepeat(isEnabled)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
| isEnabled | boolean | ⚠️ required |      |

#### Get the key repeat state

```lua
isEnabled = keyrepeat()
```

|    Return | Type    | Note |
|----------:|---------|------|
| isEnabled | boolean |      |

---

### `keytoscancode`

Gets the hardware scancode corresponding to the given key.

Unlike key constants, Scancodes are keyboard layout-independent. For example the scancode "w" will be generated if the key in the same place as the "w" key on an American keyboard is pressed, no matter what the key is labelled or what the user's operating system settings are.

Scancodes are useful for creating default controls that have the same physical locations on on all systems.

```lua
scancode = keytoscancode(key)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|       key | string | ⚠️ required |      |

|   Return | Type   | Note |
|---------:|--------|------|
| scancode | string |      |

---

### `scancodetokey`

Gets the key corresponding to the given hardware scancode.

Unlike key constants, Scancodes are keyboard layout-independent. For example the scancode "w" will be generated if the key in the same place as the "w" key on an American keyboard is pressed, no matter what the key is labelled or what the user's operating system settings are.

Scancodes are useful for creating default controls that have the same physical locations on on all systems.

```lua
key = scancodetokey(scancode)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|  scancode | string | ⚠️ required |      |

| Return | Type   | Note |
|-------:|--------|------|
|    key | string |      |

---

### `textinput`

Enable/Disable the text input and the onscreen keyboard for the mobile users.

#### Set text input state

```lua
textinput(isEnabled)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
| isEnabled | boolean | ⚠️ required |      |

#### Get the text input state

```lua
isEnabled = textinput()
```

|    Return | Type    | Note |
|----------:|---------|------|
| isEnabled | boolean |      |

---

## Events:

### `_keypressed`

Triggered when a keyboard button is pressed.

```lua
function _keypressed(key, scancode, isRepeat)
	--Logic executed when the event is triggered
end
```

| Parameter | Type    | Note                                                                  |
|----------:|---------|-----------------------------------------------------------------------|
|       key | string  |                                                                       |
|  scancode | string  |                                                                       |
|  isRepeat | boolean | whether the event was repeated due to the `keyrepeat` feature or not. |

---


### `_keyreleased`

Triggered when a keyboard button is released.

```lua
function _keyreleased(key, scancode)
	--Logic executed when the event is triggered
end
```
| Parameter | Type   | Note |
|----------:|--------|------|
|       key | string |      |
|  scancode | string |      |

---

### `_textinput`

Called when text has been entered by the user. For example if shift-2 is pressed on an American keyboard layout, the text '@' will be generated.

:::caution

All non ASCII characters are filtered out and replaced with nothing.
So in case of non-English input, the event would be triggered with empty strings.

:::

```lua
function _textinput(text)
	--Logic executed when the event is triggered
end
```

| Parameter | Type   | Note |
|----------:|--------|------|
|      text | string |      |
