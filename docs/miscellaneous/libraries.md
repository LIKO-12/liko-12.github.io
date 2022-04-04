---
title: Using Libraries

---

There's a set of libraries shipped with LIKO-12 to be available for all games that request them.

### `lume`

Lua functions geared towards game-dev.

```lua
local lume = Library('lume');
```

- [Documentation & Source-code (GitHub)](https://github.com/rxi/lume).
- Made by rxi ([Website](https://rxi.github.io/), [GitHub](https://github.com/rxi)).

### `middleclass`

A simple OOP library for Lua. It has inheritance, metamethods (operators), class variables and weak mixin support.

```lua
local middleclass = Library('middleclass');
```

- [Documentation](https://github.com/kikito/middleclass/wiki).
- [Quick Reference](https://github.com/kikito/middleclass/wiki/Reference).
- [Source-code (GitHub)](https://github.com/kikito/middleclass).
- Made by kikito (Enrique García Cota) ([Website](http://kiki.to/), [GitHub](https://github.com/kikito)).

### `bump`

Lua collision-detection library for axis-aligned rectangles.

```lua
local bump = Library('bump');
```

- [Documentation & Source-code (GitHub)](https://github.com/kikito/bump.lua).
- Made by kikito (Enrique García Cota) ([Website](http://kiki.to/), [GitHub](https://github.com/kikito)).

### `JSON`

A simple library for serializing and deserializing data from/to JSON.

```lua
local JSON = Library('JSON');

local lua_value = JSON:decode(raw_json_text);

local raw_json_text = JSON:encode(lua_table_or_value);
local pretty_json_text = JSON:encode_pretty(lua_table_or_value);
```

- [Blog Post](http://regex.info/blog/lua/json).
- [Source-code & Documentation (in comments)](http://regex.info/code/JSON.lua).
- Made by Jeffrey Friedl ([Website](http://regex.info/)).

### `vector`

A handy 2D vector class providing most of the things you do with vectors.

```lua
local vector = Library('vector');
```

- [Documentation](https://hump.readthedocs.io/en/latest/vector.html).
- [Source-code (GitHub)](https://github.com/vrld/hump/blob/master/vector.lua).
- Made by vrld ([GitHub](https://github.com/vrld)).

### `spritesheet`

```lua
local SpriteSheet = Library('spritesheet');
```

- [Documentation](../graphics-advanced/spritesheet).
- [Source-code (GitHub)](https://github.com/LIKO-12/LIKO-12/blob/master/OS/DiskOS/Libraries/spritesheet.lua).
- Made by Rami Sabbagh ([Website](https://rami-sabbagh.github.io), [GitHub](https://github.com/Rami-Sabbagh)).

## Absolute Libraries

:::warning

Those libraries are absolute, deprecated and most likely will be removed in a future version.

:::

### `likocam`

A port of a PICO-8 library called picocam.

Check the `cube` demo for an example.

```lua
local likocam = Library('likocam');
```

- [Example & Source-code (GitHub)](https://github.com/josefnpat/picocam).
- Made by josefnpat (Seppi) ([Website](http://josefnpat.com/), [GitHub](https://github.com/josefnpat)).

### `luann`

Unknown Lua implementation of artificial neural-networks.

### `geneticAlgo`

Unknown Lua implementation of the genetic algorithm.
