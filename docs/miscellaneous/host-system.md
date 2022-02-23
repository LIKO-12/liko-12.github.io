
# Host System

Which is the real computer system that runs the LIKO-12 program.

## Writing into the console

There's a text console which can be used to output debugging information to.

:::info

To view the console run LIKO-12 from a terminal.

Or on Windows you can use `LIKO-12_Console.exe` which opens a separate console window.

:::

### `cprint`

Print into the developer terminal.

Identical to the standard Lua `print` function.
(in fact it's the standard `print` function).

```lua
cprint(text, ...)
```

| Parameter | Type | Default  | Note                                                             |
|----------:|------|----------|------------------------------------------------------------------|
|      text | any  | `nil`    |                                                                  |
|     `...` | any  | _vararg_ | any extra values will be prefixed with the `\t` (tab) character. |

---

## Access the  clipboard

### `clipboard`

#### Get the content of the clipboard

```lua
content = clipboard()
```

|  Return | Type        | Note                 |
|--------:|-------------|----------------------|
| content | string, nil | `nil` if it's empty. |

#### Set the content of the clipboard

```lua
clipboard(content)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|   content | string | ⚠️ required |      |

### `clearClipboard`

Clear the content of the clipboard.

```lua
clearClipboard()
```

---

## Querying Information


### `getFPS`

Get the current frame per second rate.

```lua
framesPerSecond = getFPS()
```

|          Return | Type   | Note |
|----------------:|--------|------|
| framesPerSecond | number |      |

---

### `getHostOS`

Detect the type of system which LIKO-12 is running on.

```lua
osName = getHostOS()
```

| Return | Type   | Note                                                         |
|-------:|--------|--------------------------------------------------------------|
| osName | string | enum: `'Windows'`, `'Linux'`, `'OS X'`, `'Android'`, `'iOS'` |

---

### `isMobile`

Detect if LIKO-12 is running on a mobile device or not.
(Which is an Android or iOS device).

```lua
isIt = isMobile()
```

| Return | Type    | Note |
|-------:|---------|------|
|   isIt | boolean |      |

---

### `getSaveDirectory`

Get the directory which LIKO-12 uses in the host system to store it's data (the appdata directory).

```lua
path = getSaveDirectory()
```

| Return | Type   | Note |
|-------:|--------|------|
|   path | string |      |

---

## Open URLs and directories

### `openURL`

Open a webpage using the default browser in the host system.

:::info

Please don't abuse this function.

:::

```lua
openURL(url)
```

| Parameter | Type   | Default     | Note                      |
|----------:|--------|-------------|---------------------------|
|       url | string | ⚠️ required | e.x: https://example.com/ |

---

### `openAppdata`

Open a directory from the LIKO-12's appdata folder using the file explorer of the host system.

If you wish to open a directory from LIKO-12's virtual filesystem, it's located in `drives/[driveLetter]/...`.

```lua
openAppdata(path)
```

| Parameter | Type   | Default     | Note |
|----------:|--------|-------------|------|
|      path | string | ⚠️ required |      |
