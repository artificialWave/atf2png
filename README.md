# ATF2PNG

Node.js wrapper for (a slightly modified) [Gl0/atf2png](https://github.com/Gl0/atf2png)

## Installation

Requires dotnet runtime (or sdk) > 2.2 to be installed.

### Linux
Requires `libgdiplus` and `libc6-dev` in addition to dotnet:
```
apt-get install -y libgdiplus libc6-dev
```

## Example

```javascript
import * as atf2png from "atf2png";

// Result will be the location of the newly made png file.
atf2png.convert("example.atf"))
    .then(result => console.log(result));
```