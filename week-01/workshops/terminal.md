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

|Shortcuts|Description|Example|
|--- | ---|---|
|`TAB` | auto-completes|`$ cat he [TAB]`&rarr; `$ cat hello.txt`|

|File paths | Description|Example|
|--- | ---|---|
||**absolute**, full file path|`/home/bubbles/old-folder`|
||**relative** file path|`old-folder`|
|`.`|**current** directory||
|`..`|**parent** directory|`../old-folder`|
|`~`|**home** directory of machine|`here/home/bubbles`|
|`/`|**root** directory of Linux server, different from root-user|`here/home/bubbles`|

Flags | Description
--- | ---
`-l` | long
`-h` | same as `--human-readable`
`-o` | output
`-r` | recursion
`-lh` | combined: long & human-readable

Permissions | Description
--- | ---
`d` | directory
`-` | none
`r` | read-only
`w` | write/edit files
`x` | run file, access directory

|File type|Permissions|Link count|Owner|Group|File size|Last modified|File name|
|---|---|---|---|---|---|---|---|
|| owner **group** othergroups | abs/rel paths | | | | ||
|`d`|`rwx`**r-x**`r-x`|2|bubbles|staff|4.0k|Jun 21 15:00|files|

#### Commands

|$|`command`|flags (opt)|file/folder/url ref|Description|Example|
|---|---|---|---|---|---|
||`pwd`|||**p**resent **w**orking **d**irectory is displayed; admint &rarr;/root||
||`mkdir`||folder|**m**a**k**e **dir**ectory &rarr; new Folder||
||`ls`|`-lh`||**l**i**s**t files in current directory||
||`cd`||folder|**c**hange **d**irectory &rarr; go to folder-file-path||
||`touch`||file|**create** file||
||`echo`||"Hello" **>** file|**type** text into (new) file||
||`cat`||file|**show** content of file (con**cat**enate)||
||`nano`||file.txt|**CLI**, edit file in Command-line with nano/Vim/Emacs|**^X** &rarr; `Strg x` &rarr; save/exit|
||`mv`||file folder|**m**o**v**e file, can rename file during move|`$ mv file.txt newfolder/file-new-name.txt`|
||`cp`||file file|**c**o**p**y file original &rarr; target||
||`history`|||shows history of commands|**quick** with `&uarr;`|
||`curl`|`-o`|url|**pull** text from a web-file (**c**lient **URL**) & output text into an equal-named file||
||`rm`|``|file|**r**e**m**ove file (**!!can't be undone!**)||
||`rm`|`-r`|folder|**r**e**m**ove with **r**ecursion &rarr; folder & all content||
||`rmdir`|``|folder|**r**e**m**ove an empty **dir**ectory||
||`exit`|``||finish terminal session (perhaps can't restore?)||

<!--
||``|``||||
||``|``||||
-->