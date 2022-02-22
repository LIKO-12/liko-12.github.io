---
sidebar_position: 2

---

# Touch

The standard input device for phones, tablets and other touch devices.

## Listening For Touch Events

:::caution

The `touchId` identifier is only guaranteed to be unique for the specific touch press
until `_touchreleased` is triggered with that identifier, at which point it may be reused for new touch presses.

:::

:::info

Most touch screens aren't pressure sensitive, in which case the pressure will be `1`.

:::

### `_touchpressed`

Triggered when the touchscreen is touched.

```lua
function _touchpressed(touchId, x, y, deltaX, deltaY, pressure)
	--Logic executed when the event is triggered
end
```

| Parameter | Type     | Note                                  |
|-----------|----------|---------------------------------------|
| touchId   | userdata |                                       |
| x         | number   |                                       |
| y         | number   |                                       |
| deltaX    | number   | always `0`.                           |
| deltaY    | number   | always `0`.                           |
| pressure  | number   | the amount of pressure being applied. |

---

### `_touchmoved`

Triggered when a touch press moves inside the touchscreen.


```lua
function _touchmoved(touchId, x, y, deltaX, deltaY, pressure)
	--Logic executed when the event is triggered
end
```

| Parameter | Type     | Note                                  |
|-----------|----------|---------------------------------------|
| touchId   | userdata |                                       |
| x         | number   |                                       |
| y         | number   |                                       |
| deltaX    | number   | since last `_touchmoved` call.        |
| deltaY    | number   | since last `_touchmoved` call.        |
| pressure  | number   | the amount of pressure being applied. |

---

### `_touchreleased`

Triggered when the touchscreen stops being touched.

```lua
function _touchreleased(touchId, x, y, deltaX, deltaY, pressure)
	--Logic executed when the event is triggered
end
```

| Parameter | Type     | Note                                  |
|----------:|----------|---------------------------------------|
|   touchId | userdata |                                       |
|         x | number   |                                       |
|         y | number   |                                       |
|    deltaX | number   | since last `_touchmoved` call.        |
|    deltaY | number   | since last `_touchmoved` call.        |
|  pressure | number   | the amount of pressure being applied. |
