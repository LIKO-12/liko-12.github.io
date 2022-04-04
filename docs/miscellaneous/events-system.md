---
title: Events System

---

The events/callbacks system.

## Manually pumping events

:::caution

Manually pumping events would stop the [virtual gamepads][GamePad] input
from working properly.

To have them functioning again follow the
[last section in this page](#supporting-virtual-gamepad-input-while-manually-pumping-events).

:::

### `pullEvent`

Pull an event.

Either pulled from the events stack if it has any events
or the machine is suspended until an event is made.

```lua
eventName, a, b, c, d, e, f = pullEvent()
```

|    Return | Type   | Note             |
|----------:|--------|------------------|
| eventName | string |                  |
|         a | any    | first parameter  |
|         b | any    | second parameter |
|         c | any    | third parameter  |
|         d | any    | fourth parameter |
|         e | any    | fifth parameter  |
|         f | any    | sixth parameter  |

---

### `rawPullEvent`

Pull a fresh new event bypassing the events queue.

```lua
event, a, b, c, d, e, f = rawPullEvent()
```

|    Return | Type   | Note             |
|----------:|--------|------------------|
| eventName | string |                  |
|         a | any    | first parameter  |
|         b | any    | second parameter |
|         c | any    | third parameter  |
|         d | any    | fourth parameter |
|         e | any    | fifth parameter  |
|         f | any    | sixth parameter  |

---

### `triggerEvent`

Add a new event to the events stack.

```lua
triggerEvent(event, a, b, c, d, e, f)
```

| Parameter | Type   | Default     | Note             |
|----------:|--------|-------------|------------------|
| eventName | string | ⚠️ required |                  |
|         a | any    | `nil`       | first parameter  |
|         b | any    | `nil`       | second parameter |
|         c | any    | `nil`       | third parameter  |
|         d | any    | `nil`       | fourth parameter |
|         e | any    | `nil`       | fifth parameter  |
|         f | any    | `nil`       | sixth parameter  |

---

### `clearEStack`

Clear the events stack.

```lua
clearEStack()
```

## Supporting virtual GamePad input while manually pumping events

For [GamePad] input to still work properly the following functions
has to be called in their corresponding events.


### `__BTNUpdate`

To be called on every `update` event.

```lua
__BTNUpdate(deltaTime)
```

| Parameter | Type   | Default     | Note                         |
|----------:|--------|-------------|------------------------------|
| deltaTime | number | ⚠️ required | since last call. in seconds. |

### `__BTNKeypressed`

To be called on every `keypressed` event.

```lua
__BTNKeypressed(keyName, isRepeat)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|   keyName | string  | ⚠️ required |      |
|  isRepeat | boolean | `false`     |      |

### `__BTNTouchControl`

To be called on every `touchcontrol` event.

:::note

The `touchcontrol` event is an undocumented event that exists. 

:::

```lua
__BTNTouchControl(state, buttonId)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|     state | boolean | ⚠️ required |      |
|  buttonId | number  | ⚠️ required |      |

### `__BTNGamepad`

To be called on every `gamepad` event.

:::note

The `gamepad` event is an undocumented event that exists.

:::

```lua
__BTNGamepad(state, buttonId, gamepadId)
```

| Parameter | Type    | Default     | Note |
|----------:|---------|-------------|------|
|     state | boolean | ⚠️ required |      |
|  buttonId | number  | ⚠️ required |      |
| gamepadId | number  | ⚠️ required |      |

[GamePad]: ../input/gamepad
