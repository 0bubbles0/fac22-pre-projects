# Markdown Workshop

## Readings

### Workshop

- [x] <https://guides.github.com/features/mastering-markdown/>

### Cheat Sheets

- [x] <https://www.markdownguide.org/cheat-sheet/>
- [x] <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
- [x] <https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf>

### VS Code

- Extension: <https://code.visualstudio.com/docs/languages/markdown>
- Info: <https://code.visualstudio.com/docs/languages/markdown>

## Text

- # h1
or h1
===
- ## h2
or h2
---
- ### h3 {#custom-id}
- #### h4
- ##### h5
- ###### h6
- p
- **bold** or __bold__
- *italic* or _italic_
- **_both_**
- ~~mistake~~
- <!--Comment-->

- > quote
- `function newF (x) {...}`

```javascript
function newF (x) {
  ...
}
```

    function newF (x) {
      ...
    }

## Links

- [link](https://www.google.com/) or <https://www.google.com/> or https://www.google.com/
- [link with Tooltip](https://www.google.com "Google's Homepage")
- [I'm a reference-style link][Arbitrary case-insensitive reference text]
- [Table of Contents link](#chapter-heading-1)

  Chapter Heading 1 (#chapter-heading-1)

- [I'm a relative reference to a repository file](../blob/master/LICENSE)
- Have a footnote. [^1]

  [^1]: Be the footnote.

## Lists

1. First
  - point
  + point
1. Second
..* point
..- point
...indent
4. Third
- [ ] To do
- [x] Done
2. Fourth

---
***
___
term
: definition

<dl>
  <dt>Term</dt>
  <dd>Explanation ...</dd>
</dl>

## Table

|Name|Place| right |
| ---- |:----:| ---: |
| Zeus | Olympus | 12
| Victoria | London | 1

## Media

- Image
  - ![alt text](url "tooltip")
  - ![alt text][thing]
    [thing]: url "tooltip"
- Audio
- Video
- YouTube
  - <a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
  - [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

- Emojis, gifs: :-)  :+1 :sparkles:

## Special GitHub

- Gists, Issues, Pull Requests, Comments
- @mentions, #refs
- SHA-1 hashes
- issue number refs
  - #1
    mojombo#1
    mojombo/github-flavored-markdown#1
- #bugID in git commit &rarr; links to slip