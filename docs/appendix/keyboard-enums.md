
# Keys Enum

## Key constants

All the keys you can press.

:::note

Some keys may not be available on your/others keyboard or system.

:::

`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`,
`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`,
`space`,
`!`, `"`, `#`, `$`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`,
`[`, `\`, `]`, `^`, `_`, \`

### Numpad Keys

`kp0`, `kp1`, `kp2`, `kp3`, `kp4`, `kp5`, `kp6`, `kp7`, `kp8`, `kp9`, `kp.`, `kp,`, `kp/`, `kp*`, `kp-`, `kp+`, `kpenter`, `kp=`

### Navigation Keys

`up`, `down`, `right`, `left`, `home`, `end`, `pageup`, `pagedown`

### Editing Keys

`insert`, `backspace`, `tab`, `clear`, `return`, `end`

### Function Keys

`f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `f10`, `f11`, `f12`, `f13`, `f14`, `f15`, `f16`, `f17`, `f18`

### Modifier Keys

`numlock` (Clear on Mac keyboards), `capslock` (Caps-on is a key press, Caps-off is a key release), `scrolllock`, `rshift`, `lshift`, `rctrl`, `lctrl`, `ralt`, `rgui` (Command key in OS X, Windows key in Window), `lgui` (Command key in OS X, Windows key in Window), `mode`

### Application Keys

`www`, `mail`, `calculator`, `computer`, `appsearch`, `apphome`, `appback`, `appforward`, `apprefresh`, `appbookmarks`

### Miscellaneous Keys

* `pause` (Sends a key release immediately on some platforms, even if held down),
* `printscreen` (Sends a key release immediately on Windows, even if held down),
* `menu` (Windows contextual menu, compose key),

`sysreq`, `escape`, `help`, `application`, `power`, `currencyunit`, `undo`

## Scancodes

Scancodes are keyboard layout-independent, so the scancode "w" will be generated if the key in the same place as the "w" key on an American QWERTY keyboard is pressed, no matter what the key is labelled or what the user's operating system settings are.

`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`,
`0`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`,
`return`, `escape`, `backspace`, `tab`, `space`,
`-`, `=`, `[`, `]`, `\`, `nonus#` (The non-US hash scancode), `;`, `'`, `.`, `/`, `capslock`,
`f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `f10`, `f11`, `f12`, `f13`, `f14`, `f15`, `f16`, `f17`, `f18`, `f19`, `f20`, `f21`, `f22`, `f23`, `f24`,
`lctrl`, `lshift`, `lalt`, `lgui`, `rctrl`, `rshift`, `ralt`, `rgui`,
`printscreen`, `scrollock`, `pause`, `insert`, `home`, `numlock`, `pageup`, `delete`, `end`, `pagedown`, `right`, `left`, `up`, `down`, `nonusbackslash`, `application`,
`execute`, `help`, `menu`, `select`, `stop`, `again`, `undo`, `cut`, `copy`, `paste`, `find`

### Keypad Scancodes

`kp/`, `kp*`, `kp-`, `kp+`, `kp=`, `kpenter`, `kp1`, `kp2`, `kp3`, `kp4`, `kp5`, `kp6`, `kp7`, `kp8`, `kp9`, `kp0`, `kp.`

### International / Language Scancodes

`international1`, `international2`, `international3`, `international4`, `international5`, `international6`, `international7`, `international8`, `international9`,
`lang1`, `lang2`, `lang3`, `lang4`, `lang5`

### Media Scancodes

`mute`, `volumeup`, `volumedown`, `audionext`, `audioprev`, `audiostop`, `audioplay`, `audiomute`, `mediaselect`, `www`, `mail`, `calculator`, `computer`, `acsearch`, `achome`, `acback`, `acforward`, `acstop`, `acrefresh`, `acbookmarks`

### Hardware Setting Scancode

`power`, `brightnessdown`, `brightnessup`, `displayswitch`, `kbdillumtoggle`, `kbdillumdown`, `kbdillumup`, `eject`, `sleep`

#### Misc

`alterase`, `sysreq`, `cancel`, `clear`, `prior`, `return2`, `separator`, `out`, `oper`, `clearagain`, `crsel`, `exsel`, `kp00`, `kp000`, `thsousasndsseparator`, `decimalseparator`, `currencyunit`, `currencysubunit`, `app1`, `unknown`

:::note

For more info visit [Scancodes on LÖVE's wiki](https://love2d.org/wiki/Scancode)

:::
