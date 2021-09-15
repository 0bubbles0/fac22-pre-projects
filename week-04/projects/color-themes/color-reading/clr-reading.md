# Dark Mode

## Reading List
- [ ] Ultimate Guid to Desinging Android Dark Mode: <https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637>
  - [ ] Instagram Series: <https://www.instagram.com/p/BxpT3UKAmsJ/> 
- [x] Google Material Guidelines: <https://material.io/design/color/dark-theme.html>
  - [x] Palette Generator: <https://material.io/design/color/the-color-system.html#tools-for-picking-colors> 
- [ ] A11y Palette Generator: <http://colorsafe.co/>
- [ ] Contrast checker: <https://contrastchecker.com/>
- [ ] A11y checker of palettes: <https://toolness.github.io/accessible-color-matrix/>
- [ ] IBM A11y: <https://medium.com/carbondesign/because-colors-are-beautiful-52dd4cc39f09>

## Ultimate Guide
### Design
#### Design System
#### Fundamentals
- Elevation
- Color
- Color
- Contrast
- Illustrations

### Development
- Google: <https://www.youtube.com/watch?v=OCHEjeLC_UY>
- Full Tutorial: <https://youtu.be/FSxgFKlbV9Y> 


## Material
- Grey &rarr; express elevation, space, depth
- Colour accents &rarr; few
- Contrasts for a11y
  - Contrast: Back-dark to font-white &rarr; min **15.8** : 1
  - Depth: higher elevation with lighter greys
  - Desaturation: of primary colours to WCAG-AA **4.5** : 1
  - Sparse Accents: light/desaturated and bright/saturated

- Levels
  - **Background** 
    - dark grey for better shadows &rarr; **#121212**
  - **Surface** 
    - higher elevation &rarr; higher illumination of surface color (with semi-transparent overlay)

    ![Elevation overlay](https://lh3.googleusercontent.com/MZFRD7NVPpsDPgaWSxLb_9rapm7FFMh2kp6nJuAUrIORQadQtlG5BQ5flovINSBW1fCohcC-mZsFQDpSNKPMEEv08at_zHVKHWiU=w1064-v0)

  - **Primary** & **Secondary** Item Backgrounds
    - Desaturated &rarr **200 to 50**
    - light surfaces can use variation (eg 700)

  - **Secondary**
    - Background: desaturated **200**
    - Font
  - **Accent** Texts, buttons 
    - Desaturated pastels OR saturated vivds
  - **Font** on each (1 for background & surface), (1 for primary & secondary)
    - On dark backgrounds: **#000**
    - On light backgrounds: **#fff**
      - Opacity: 87% important - 60% hints - 38% disallowed 
  - Consider different states as well (hover, focus, disabled)

    ![Default & Dark Themes](https://lh3.googleusercontent.com/2tz16tRWvWsNwxg22BmLGDpZ7Pp3SqAg6Zr10WUCbjeEJHFSBzkbb4gwkjIQ5m4rfYoSntR412o7bC7sr8Xi5-gpiciNiQyjssfNWQ=w1064-v0)

<!--Images:
  - ![alt text](url "tooltip")
  - ![alt text][thing]
    [thing]: url "tooltip"
-->


 
