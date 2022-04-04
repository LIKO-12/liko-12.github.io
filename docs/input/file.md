---
title: File
sidebar_position: 4

---

It's possible to receive file contents when a file is dropped into
the window while your game is running.

By listening to:

## `_filedropped`

Triggered when a file is dropped into LIKO-12's window.

```lua
function _filedropped(fileName, data)
	--Logic executed when the event is triggered
end
```

| Parameter | Type   | Note              |
|-----------|--------|-------------------|
| fileName  | string |                   |
| data      | string | raw file content. |
