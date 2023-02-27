---
title: 2023-03 Project status update
authors: [rami_sab07]
tags: [Status update, v2]
draft: true
---

<!-- TODO: Write a preface. -->

The future of LIKO-12 has been unknown over the last few years.

For the vast majority of time, I was lost on where to take the project.

## The complication and simplification of LIKO-12

## Releasing the editors from the fantasy limitations

## Rewriting the codebase

If it works, why change it?

The short answer is because the **existing code became unmaintainable**.
For why is that, I'll leave some explanation for the ones who want in the following expandable sections:

<details>

<summary>Lua is not a good language for medium/large projects. (expand for details)</summary>

Lua is known to be a simple programming language that's easy to embed in any C/C++ projects
and commonly used to provide some extensibility support (like modding a game).
It does have a simple syntax and easy to learn.

But I believe that it's not designed for writing full projects in it.
Blaming it's weakly-typed nature and it's lack of batteries (common supporting libraries).

###### • The weakly-typed nature

It allows a codebase to go chaotic when changes are made
because there are no types enforced on the data structures being passed around
nor for the parameters of functions.

And thus when changes are made to the non-written design of the functions and structures change,
the programmer has to search the codebase for where those structures and functions are used and update them.
That makes it so easy to leave something behind un-updated.

It's even worse that with the types constraints lifted,
lots of [ninja crimes](https://javascript.info/ninja-code) can be made.
And that's something I've done much in the existing code.

###### • The lack of batteries

Lua comes with a minimal standard library so that is stays under 10mb in size.
But that comes at a price, it leaves the programmer prone to lots of re-inventing the wheel.

Even though community made batteries can be exist. They're likely to be left unmaintained.
And if it's a native library then there's a good chance it won't be so portable.

In the current state of Lua library there's a good chance that the library you want is a native one that doesn't support Windows.
That's a big no for LIKO-12.

###### • The lack of intelligent IDE support

Another product of the weakly-typed nature is that IDEs can't provide smart auto-completion.
Nor detect the errors as the code is being written.

After getting used to some of the well supported Languages during the years,
writing without the help of the IDE became like having a punishment.

</details>

<details>
<summary>The spaghetti and ninja crimes in the existing code. (expand for details)</summary>

<!-- TODO: Expand this section with some explanation -->

</details>


## Using TypeScript with LÖVE

