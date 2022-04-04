---
title: LIKO-12 Machine

---

A fancy way to refer to the LIKO-12 application.

Which from a technical perspective can be seen as a virtual machine.

## Machine events

### `_update`

An event which is called almost every frame, with the delta-time between each call passed in.

:::info

`_update` is called ~60 times a second for most of the devices,
but that depends on the screen refresh rate, so it can be more or less!

:::

:::caution

`_update` can be called for over than 2000 times a second if the vsync was disabled
either due to user configuration or due to driver issues.

That's why it's important to depend on the `deltaTime` value instead of relaying on a
steady call rate.

:::

```lua
function _update(deltaTime)
	--Logic executed when the event is triggered
end
```

| Parameter | Type   | Note                                      |
|----------:|--------|-------------------------------------------|
| deltaTime | number | since last call. in seconds. float value. |

## Control the machine

### `sleep`

Pause the execution of the machine for specific amount of time.

```lua
sleep(duration)
```

| Parameter | Type   | Default | Note |
|----------:|--------|---------|------|
|  duration | number | `0`     |      |

---

### `exit`

Terminate the running game.

```lua
exit(message)
```

| Parameter | Type        | Default | Note            |
|----------:|-------------|---------|-----------------|
|   message | string, nil | `nil`   | reason of exit. |

---

### `shutdown`

Exit LIKO-12.

:::caution

Be always cautions to save your modifications before running code that might use this function.

:::

```lua
shutdown()
```

---

### `reboot`

Restart LIKO-12.

:::caution

Be always cautions to save your modifications before running code that might use this function.

:::

#### Soft restart

Have the machine restarted by making it reload itself.

```lua
reboot()
```

#### Hard restart

Have the whole application restarted. More effective in resolving some glitches.

```lua
reboot(true)
```

| Parameter | Type    | Default    | Note |
|----------:|---------|------------|------|
|    `true` | boolean | ℹ️ literal |      |
