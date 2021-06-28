# Accessibility - A11y Workshop

## Contents
- Questions
- Reading List
- Reading notes
- Checklist
- Tasks
- Steps

## Questions



## Reading List

- [ ] Learn Accessibility (*Founders and Coders Workshop*): <https://learn.foundersandcoders.com/workshops/learn-a11y/>
- [ ] WCAG (Web Content Accessibility Guidelines): <https://www.w3.org/WAI/standards-guidelines/wcag/>
- [ ] The A11y Project's Checklist: <https://www.a11yproject.com/checklist/>

## Reading notes

- Website that requires eye-sight and a mouse &rarr; broken
- **User stories**:
    - don't make assumptions
    - physical: 
        - blindness (&rarr; **screen readers**, alt text for graphs/img/video, voice technology)
        - impaired eyesight (&rarr; font size, contrasts/brightness), more on <https://www.afb.org/blindness-and-low-vision/eye-conditions/low-vision-and-legal-blindness-terms-and-descriptions#TotalBlindness>
        - colour blindness (&rarr; colour combinations, colour-coded content)
        - hearing (&rarr; alt text for audio/video, captions)
        - hands (no-mouse &rarr; **keyboard navigation**)
        - tremours
    - technical:
        - old device/system/browser or limited internet speed/data (lower incomes, tech-averse, different country) &rarr; consider impact of project-size/media on speed, memory, mobile data, older browsers
    - understanding:
        - offer multiple languages, easy English, non-text

- How to accommodate in **development**
    - consider everyone when developing UI
    - **Keyboard navigation**
        - &uarr; &darr; `Page Up`, `Page Down`,`Home`,`End`
        - &#11134;: Move focus between interactive eleemnts (links, buttons, inputs), give outline. Click focused event with &#8629;
        - consider difficulties for drag, hover...
    - **Screen readers**
        - Programs: VoiceOver (macOS), Narrator (Windows 10), Orca (Linux)
            - Narrator: docs at <https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1> and <https://support.microsoft.com/en-us/windows/chapter-4-reading-text-8054c6cd-dccf-5070-e405-953f036e4a15>
            - Activate: `&#8862; Win` + `Strg`+ &#8629;
            - Narrator key use &#8682;
            - Stop narration: `Strg`
            - Summary: &#8629; + `S`
            - Start from top: &#8629; + &darr;
        - Use it to navigate page

- How **test** code
    - get out of my comfort zone
    - WCAG Guidelines: <https://www.w3.org/WAI/standards-guidelines/wcag/>
        - UK Equality Act 2010 requires **WCAG 2.0**: <https://www.w3.org/WAI/policies/united-kingdom/#equality-act-2010>
        - The A11y Project Checklist tests WCAG Guidelines: <https://www.a11yproject.com/checklist/>
    - Browser Developer Tools, e.g. **Lighthouse** in Chrome or Accessibility tab &rarr; colour contrast, alt text. But doesn't check keyboard-navigation
    - Manual testing:
        - Keyboard navigation/form
        - Screen reader info/interactions

## Checklist

- Content: 
    - [ ] Clear language
    - [ ] Descriptive labels/buttons/a-link-anchors
    - [ ] Instructions not exclusively visual or audio
    - [ ] Text-align left for left-to-right languages
- Global code: 
    - [ ] Validate HTML, e.g. <https://validator.w3.org/nu/>
    - [ ] Allow Zoom 200% &rarr; full content/functionality: e.g. server-side script that assigns different style sheets. Font sizes in %, em, named, Container sizes in page-percent, avoid justified text.
       
       `<head>`
    - [ ] `<html lang="">`
    - [ ] `<title>`
    - [ ] Landmark regions: header, nav, main, section, form, aside, footer
    - [ ] Linear content flow: Tabindex only 0 or -1, not on unfocusable elements, not required on inherently focusable items (links, buttons)
    - [ ] avoid autofocus
    - [ ] Session timeouts: avoid or allow user to adjust it
    - [ ] Tooltips (title attribute): avoid
    - [ ] Overlaps of text with img&video &rarr; legible?
- Keyboard
    - [ ] make "focus" style &rarr; user can see where they are currently
    - [ ] match keyboard focus order to visual layout
    - [ ] no invisible focusable elements
- Mobile, touch
    - [ ] Rotation: allow
    - [ ] Horizontal scroll: remove
    - [ ] Interactive items: enough spacing
- Appearance
    - [ ] Spacing &rarr; Straw test (<https://www.youtube.com/watch?v=S1j6CYT3kWA&feature=youtu.be>)
    - [ ] Layout: simple, consistent
- Color contrast
    - [ ] No colour-only information/signalling
    - [ ] Text normal &rarr; 4.5:1
    - [ ] Text large &rarr; 3:1
    - [ ] Icons, Inputs &rarr; 3.0:1
    - [ ] Contrast of ::selection if highlighted?
    - [ ] Test in browsing modes, e.g. High Contrast, Inverted Colors
- Headings
    - [ ] Introduce (new) content 
    - [ ] 1 `<h1>` per page/view, don't skip levels, logical sequence
- Lists
    - [ ] ol, ul, dl for list content
- Tables
    - [ ] for tabular data, give caption & `<th>` with `scope="col"`or `scope="row"`
- Forms
    - [ ] `<label>` for each input
    - [ ] Use `<fieldset>`, `<legend>`, `autocomplete`
    - [ ] Error messages are displayed as list at top with ref to input field, not only marked through color
- Controls (links, buttons)
    - [ ] easy activation
    - [ ] have :focus states
    - [ ] Links: `<a>`, recognizable (underlined, not just colour)
        - [ ] Avoid new tab/window
        - [ ] Give skip links &rarr; to main content (skip generic page frame: nav, search)
    - [ ] Buttons: `<button>`
- Media
    - [ ] No autoplay, can be paused
    - [ ] Controls markup: pressed toggle state, volume slider (`<input type="range">`)
- Img
    - [ ] alt: all img (match to any text in the img; alt="" for deco-img), figures, maps, graphs, charts
- Audio
    - [ ] Transcripts
- Video
    - [ ] Captions
    - [ ] No seizure triggers
- Animation
    - [ ] Subtle, Limit flashes, can pause
    - [ ] obey prefers-reduced-motion media query

## Tasks

- [ ] Find 11 a11y failures in <https://learn.foundersandcoders.com/workshops/learn-a11y/starter-files/>
- [ ] Use
    - [ ] A11y Project Checklist
    - [ ] Chrome Lighthouse
    - [ ] keyboard navigation
    - [ ] screen reader

## Steps



