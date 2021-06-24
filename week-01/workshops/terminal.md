# Terminal

## Contents

- Questions
- Reading List
- Workshop: Linux Command Line Primer (Digital Ocean)
- Git

## Questions

- **WSL**: where save files/clone | correctly use Terminal, VS Code to start Linux/open files

## Reading List
### Terminal, Linux, WSL
- [x] Linux Command Line Primer Workshop: <https://www.digitalocean.com/community/tutorials/a-linux-command-line-primer>
- [ ] Command explainer: <https://explainshell.com/explain?cmd=sudo+chown+-R+%24%28whoami%29+%24%28brew+--prefix%29%2F*>
- [ ] Intro to Linux Terminal Workshop: <https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal>
- [ ] Microsoft WSL Documentation: <https://docs.microsoft.com/en-us/windows/wsl/compare-versions#performance-across-os-file-systems>

### Git
- [x] Git Documentation: <https://git-scm.com/doc/ext>
- [x] Git Tutorial for Beginners - Learn Git in 1 Hour (*YouTube: Programming with Mosh*): <https://www.youtube.com/watch?v=8JJ101D3knE&list=PLwgjdOlNdEeAX4kwL9Mv-aNA0dZn5GeEv&index=9>
- [x] Working Directory vs. Local Repository (*Stackoverflow*): <https://stackoverflow.com/questions/21692155/whats-the-difference-between-working-directory-and-local-repository>
- [x] Stop/change git repository (*FCC*): <https://forum.freecodecamp.org/t/how-do-i-stop-or-change-the-git-repository-on-my-computer/138304>

## Workshop: Linux Command Line Primer

### Digital Ocean (21/06/2021)

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
|`[TAB]` | auto-completes|`$ cat he`&rarr; `[TAB]`&rarr; `$ cat hello.txt`|

|File paths | | |
|--- | ---|---|
||**absolute**, full file path|`/home/bubbles/old-folder`|
||**relative** file path|`old-folder`|
|`.`|**current** directory||
|`..`|**parent** directory|`../old-folder`|
|`~`|**home** directory of machine|`here/home/bubbles`|
|`/`|**root** directory of Linux server, different from root-user|`here/home/bubbles`|

|Flags | |
|--- | ---|
|`-lh`| combined: long & human-readable|
|`-a`|?all? |
|`-d`| |
|`-e`| edit, ?also view?|
|`-f`| |
|`-h` | same as `--human-readable`|
|`--help`|?same as `-h`? |
|`-l` | long|
|`-m`| message|
|`-o` | output|
|`-r` | recursion|
|`-s`|short|

|Permissions | |
|--- | ---|
|`d` | directory|
|`-` | none|
|`r` | read-only|
|`w` | write/edit files|
|`x` | run file, access directory|

|File type|Permissions|Link count|Owner|Group|File size|Last modified|File name|
|---|---|---|---|---|---|---|---|
|| owner **group** othergroups | abs/rel paths | | | | ||
|`d`|`rwx`**r-x**`r-x`|2|bubbles|staff|4.0k|Jun 21 15:00|files|


#### Terminal Commands

|$|`command`|flags (opt)|file/folder/url ref|Description|Example|
|---|---|---|---|---|---|
||`pwd`|||**p**resent **w**orking **d**irectory is displayed; admint &rarr;/root||
||`mkdir`||folder|**m**a**k**e **dir**ectory &rarr; new Folder||
||`ls`|`-lh`||**l**i**s**t files in current directory||
||`cd`||folder|**c**hange **d**irectory &rarr; go to folder-file-path||
||`touch`||file|**create** file||
||`echo`||"Hello" **>** file|**type** text into (new) file||
||`cat`||file|**show** content of file (con**cat**enate)||
||`nano`||file.txt|**CLI**, edit file in Command-line with nano/Vim/Emacs|`^X`&rarr; `Strg x` &rarr; save/exit|
||`mv`||file folder|**m**o**v**e file, can rename file during move|`$ mv file.txt newfolder/file-new-name.txt`|
||`cp`||file file|**c**o**p**y file original &rarr; target||
||`history`|||shows history of commands|**quick** with `&uarr;`|
||`curl`|`-o`|url|**pull** text from a web-file (**c**lient **URL**) & output text into an equal-named file||
||`rm`||file|**r**e**m**ove file (**!!can't be undone!!**)||
||`rm`|`-r`|folder|**r**e**m**ove with **r**ecursion &rarr; folder & all content||
||`rmdir`||folder|**r**e**m**ove an empty **dir**ectory||
||`exit`|||finish terminal session (perhaps can't restore?)||

<!--
||``|``||||
||``|``||||
||``|``||||
-->

## Git

- **Visual Tools**: KDiff3, P4Merge, WinMerge
- **Git objects**: Commits, Blobs (Files), Trees (Directories), Tags

||**Workflow Summary**||||
|---|---|---|---|---|
||**Set up project**||||
||`cd`||new-project|**c**hange **d**irectory &rarr; go to correct location|
||`mkdir`||new-project|**m**a**k**e **dir**ectory &rarr; new-project|
|``|``|``||**create locally**|
|``|``|``||**clone**|
|``|``|``||**download**|
|``|``|``||**fork**|
|``|``|``||make **feature branch**|
|`git`|`init`|||**init**ialise a repository &rarr; start .git version-control-tracking|View .git with `$ ls -a`|
||**Edit files**||||
||`echo Hello >`<br>`create`||file.txt|**Create** new file|
||`echo world >>`||file.txt|**Modify** file|
||`mv`||`a.txt newfolder/b.txt`|**Move**/**Rename** file only in Working area, then `$git add a.txt newfolder/b.txt`|
||`rm`||file1.txt|**R**e**m**ove file (in Working)|
||**Versions**||||
|`git`|`status`|``||view changes|
|`git`|`add`|``|file|to Staging Area|
|`git`|`commit`|`-m`(`-a`)|file|to Local Repo|
|`git`|`log`|``|file|view commits (version history)|
|`git`|`push`|``|file|to Remote Repo (GitHub)|
||**Restore**||||
|`git`|`restore`||`a.txt`|Discard Working: Start over with version from Staging|
|`git`|`restore`|`--staged`|`b.txt c.txt`|**Unstage**: restore file to previous version. Put changes into new file in Working|
|`git`|`restore`|`--staged`|`c.txt`|**Untrack** file from Staging|
|`git`|`restore`|`--source=HEAD~1`|`a.txt`|from commit history &rarr; Working/Staging|



### Commands in more Detail

|$|`command`|flags (opt)|file/folder/url ref|Description|Example|
|---|---|---|---|---|---|
||**Settings**|||||
|`git`|`config --global`|`-e`||View/Edit global settings||
|`git`|`config --global user.name`||`"bubbles"`|Set Author name||
|`git`|`config --global user.email`||`"add@ress.com"`|Set Autho email id||
|`git`|`config --global core.editor`||`code --wait`|Default editor||
|`git`|`config --global diff.tool`||`vscode`|Default diff tool||
|`git`|`config --global difftool.vscode.cmd`|`"code --wait --diff`|`$LOCAL $REMOTE"`|Default diff tool||
|`git`|`config --global core.autocrlf`||`true`|Line handling (carriage return & line feed): ?not on Linux?||
|`git`|`config --global color.ui`||`auto`|Colour support||
||**Manage project folder**|||||
||`mkdir`||new-project|**m**a**k**e **dir**ectory &rarr; new-project||
||`cd`||new-project|**c**hange **d**irectory &rarr; go to new-project||
|`git`|`init`|||**init**ialise a repository, start .git version-control-tracking|View .git with `$ ls -a`|
||`rm`|`-rf`|.git|**R**e**m**oves git tracking||
||||`*.txt`|**select** all txt files||
||||`.`|select entire directory||
|||||**Prevent tracking** log files:<br>`echo logs/ > .gitignore`<br>`code .gitignore`&rarr;VS Code<br>`main.log, *.log`&rarr; save, exit<br>`git status`<br>`git add .gitignore`<br>`git commit -m "Add gitignore"`||
|||||**Prevent tracking** binary files:<br>`echo hello > bin/app.bin`<br>`git rm -cached -r bin/`<br>`git commit -m`<br>`echo test > bin/app.bin`||
||**Copy online Repository**|||||
||``|``||**fork** &rarr; Copy into my account, change copy without affecting original||
||``|``||create **feature branch** &rarr; can eventually be merged again with main branch||
||``|``||**clone** &rarr; get copy of online repo on my PC||
||**Edit**|||||
||`echo Hello >`<br>`create`||file.txt|**Create** new file||
||`echo world >>`||file.txt|**Modify** file||
||`mv`||`a.txt newfolder/b.txt`|**Move**/**Rename** file only in Working area, then `$git add a.txt newfolder/b.txt`||
|`git`|`mv`||`a.txt newfolder/b.txt`|**Move**/**Rename** file in Working & Stage||
||`rm`||file1.txt|**R**e**m**ove file (in Working)||
|`git`|`rm`|``|file1txt|**R**e**m**ove file (incl stage & commit)||
|`git`|`clean`|`-fd`||**DANGER**: Remove all (even untracked files), no restore||
||**View Changes**|||||
||`mkdir`, etc.|`--help`||Get **Help**||
|`git`|`config`|`-h`||Quick Help summary||
|`git`|?`ls-files`|||**list** files||
|`git`|`status`|(`-s`)||Status (summary)||
||||red M|modified||
||||green M|ok||
||||A|added||
||||??|new file||
||||?R?|?renamed||
||||?U?|?untracked||
||||?D?|?deleted||
|`git`|`diff`|||View **unstaged** items||
|`git`|`diff -staged`|||Review changes in visual tool:<br>staged vs unstaged version<br>a/OldVersion b/NewVersion<br>@@ location -Old1Start, 3Length<br>-/dev/null &rarr; copy didn't exist||
|`git`|`difftool`|(`-staged`)||View **stage** changes in VS Code||
|`git`|`log`|||View **commit history**||
||**Restore**|||||
|`git`|`restore`||`a.txt`|Discard Working: Start over with version from Staging||
|`git`|`restore`|`--staged`|`b.txt c.txt`|**Unstage**: restore file to previous version. Put changes into new file in Working||
|`git`|`restore`|`--staged`|`c.txt`|**Untrack** file from Staging||
|`git`|`restore`|`--source=HEAD~1`|`a.txt`|from commit history &rarr; Working/Staging||
||**AREAS**|||||
||**Working Area**|||||
||`echo Hello >`<br>`create`||file.txt|**Create** new file||
|`git`|`add`|``|file|to Staging Area||
|`git`|`commit`|(`-m`(`-a`) `"Message"`)|file|to Local Repo, skip Staging||
||**Local Repo**:|.git folder||||
||**Staging Area**|index file||Prep for commit<br>After a commit, data will still be here||
|`git`|`diff`|||View **unstaged** items||
|`git`|`diff -staged`|||Review changes in visual tool:<br>staged vs unstaged version<br>a/OldVersion b/NewVersion<br>@@ location -Old1Start, 3Length<br>-/dev/null &rarr; copy didn't exist||
|`git`|`difftool`|(`-staged`)||View **stage** changes in VS Code||
|`git`|`restore`||`a.txt`|Discard Working: Start over with version from Staging||
|`git`|`restore`|`--staged`|`c.txt`|**Untrack** file from Staging||
|`git`|`restore`|`--staged`|`b.txt c.text`|**Unstage**: restore file to previous version. Put changes into new file in Working||
|`git`|`commit`|(`-m`(`-a`) `"Message"`)|file|to Local Repo, skip Staging||
||**Commit History**|||||
|`git`|`log`|||View **commit history**||
|`git`|`log --oneline`|||**short** version||
|`git`|`log --oneline --reverse`|||**short, chronological**||
|`git`|`show`||`HEAD~1`<br>`0d1`|View **specific commit** by head or id-start||
|`git`|`show`||`HEAD~1:.gitignore`|**final version**||
|`git`|`ls-tree`||`HEAD~1`|**all files/directories** of the commit||
|`git`|`restore`|`--source=HEAD~1`|`a.txt`|**Restore** from commit history &rarr; Working/Staging||
||**Git Remote Repository**|||||
|`git`|`push`||``|**push** commit to GitHub||
|``|``||``|**pull** ||
|``|``||``|**pull request** ||
|``|``||``|**publish** ||
|``|``||``|**compare** ||
|``|``||``|**merge branches** ||



<!--
||``|``||||
||``|``||||
||``|``||||
||``|``||||

||**Workflow Summary**|||||
|`git`|`status`|``||view changes||
|`git`|`add`|``|file|to Staging Area||
|`git`|`commit`|`-m`(`-a`) `"Message"`|file|to Local Repo||
|`git`|`log`|``|file|view commits (version history)||
|`git`|`push`|``|file|to Remote Repo (GitHub)||
-->
