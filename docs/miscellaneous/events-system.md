
# Events System

The events/callbacks system.

## Manually pumping events

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
