---
sidebar_position: 1

---

# Mouse

The standard pointer input device for desktops and laptops users.

## Querying Mouse State

### `getMPos`

Get the position of the mouse.

```lua
mouseX, mouseY = getMPos()
```

|  Return | Type   | Note |
|--------:|--------|------|
|  mouseX | number |      |
| mouse Y | number |      |

### `isMDown`

Check if a mouse button is down.

```lua
isButtonDown = isMDown(buttonId)
```

| Parameter | Type   | Default     | Note                                                                                                  |
|----------:|--------|-------------|-------------------------------------------------------------------------------------------------------|
|  buttonId | number | ⚠️ required | `1`: primary (left). `2`: middle (wheel). `3`: secondary (right). further values are mouse dependent. |

|       Return | Type    | Note |
|-------------:|---------|------|
| isButtonDown | boolean |      |

---

## Listening For Mouse Events

### `_mousepressed`

Triggered when a mouse button is pressed, or if the screen was touched.

```lua
function _mousepressed(x, y, buttonId, isTouch)
	--Logic executed when the event is triggered
end
```

| Parameter | Type    | Note                                                                                                  |
|-----------|---------|-------------------------------------------------------------------------------------------------------|
| x         | number  |                                                                                                       |
| y         | number  |                                                                                                       |
| buttonId  | number  | `1`: primary (left). `2`: middle (wheel). `3`: secondary (right). further values are mouse dependent. |
| isTouch   | boolean |                                                                                                       |

---

### `_mousemoved`

Triggered when the mouse is moved, or if a screen touch was moved.

```lua
function _mousemoved(x, y, deltaX, deltaY, isTouch)
	--Logic executed when the event is triggered
end
```

| Parameter | Type    | Note                           |
|-----------|---------|--------------------------------|
| x         | number  |                                |
| y         | number  |                                |
| deltaX    | number  | since last `_mousemoved` call. |
| deltaY    | number  | since last `_mousemoved` call. |
| isTouch   | boolean |                                |

---

### `_mousereleased`

Triggered when a mouse button is released, or if the screen was no longer touched.

```lua
function _mousereleased(x, y, buttonId, isTouch)
	--Logic executed when the event is triggered
end
```

| Parameter | Type    | Note                                                                                                  |
|-----------|---------|-------------------------------------------------------------------------------------------------------|
| x         | number  |                                                                                                       |
| y         | number  |                                                                                                       |
| buttonId  | number  | `1`: primary (left). `2`: middle (wheel). `3`: secondary (right). further values are mouse dependent. |
| isTouch   | boolean |                                                                                                       |

---

### `_wheelmoved`

Triggered when the mouse wheel is moved.

```lua
function _wheelmoved(deltaX, deltaY)
	--Logic executed when the event is triggered
end
```

| Parameter | Type   | Note                                                                 |
|-----------|--------|----------------------------------------------------------------------|
| deltaX    | number | horizontal movement. positive values indicate movement to the right. |
| deltaY    | number | vertical movement. positive values indicate upward movement.         |

---
