# Terminal

## Contents

- Questions
- Reading List
- Workshop: Linux Command Line Primer

## Questions
- **WSL**: where save files/clone | correctly use Terminal, VS Code to start Linux/open files
## Reading List

- [x] Linux Command Line Primer Workshop: <https://www.digitalocean.com/community/tutorials/a-linux-command-line-primer>
- [ ] Command explainer: <https://explainshell.com/explain?cmd=sudo+chown+-R+%24%28whoami%29+%24%28brew+--prefix%29%2F*>
- [ ] Intro to Linux Terminal Workshop: <https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal>

## Workshop: Linux Command Line Primer

### Digital Ocean (22/06/2021)

1. **$** &rarr; **regular user** log-in
1. **#**, **sudo**, pound symbol &rarr; **admin** log-in, **root** user, elevated privileges

- If command line interface is connected to **internet** &rarr; can:
  - access web resources, auto reaction
  - **cloud servers**: access credentialed
  - cloud infrastructure: manage
  - **web apps**: build

- **Cloud server**: can destroy progress & start fresh on a mistake. **NOT** on PC, more dangerous!!!

Flags | Description
--- | ---
`-l` | long
`-h` | same as `--human-readable`
`-o` | output
`-r` | recursion

Permissions | Description
--- | ---
`d` | directory
`-` | none
`r` | read-only
`w` | write/edit files
`x` | run file, access directory

File type|Permissions|Link count|Owner|Group|File size|Last modified|File name
---|---|---|---|---|---|---|---
.| owner**group**othergroups | abs/rel paths |.|.|.|.|.
`d`|`rwx`r-x`r-x`|2|bubbles|staff|4.0k|Jun 21 15:00|files

