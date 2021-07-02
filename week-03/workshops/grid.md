# CSS Grid Notes

## Content
- Questions
- Reading List
- Summary
- Own Notes
- Grid Garden
- In Practice


## Questions
  - minmax, auto-fit, auto-fill, repeat

## Reading List
  - freeCodeCamp: <https://www.freecodecamp.org/learn/responsive-web-design/#css-grid>
  - w3schools: <https://www.w3schools.com/css/css_grid.asp>
    - Simulators:
      - justify-content: <https://www.w3schools.com/cssref/playit.asp?filename=playcss_justify-content&preval=flex-start> 
      - align-content: <https://www.w3schools.com/cssref/playit.asp?filename=playcss_align-content&preval=stretch>
      - align-self: <https://www.w3schools.com/cssref/playit.asp?filename=playcss_align-self&preval=autos>
      - align-items: <https://www.w3schools.com/cssref/playit.asp?filename=playcss_align-items&preval=flex-start>

### Suggestions
  - [ ] A complete guide to grid: <https://css-tricks.com/snippets/css/complete-guide-grid/>
  - [ ] CSS Grid Garden: <https://cssgridgarden.com/>

## Summary


## Own Notes
  ### HTML:

    <html>
      <div class="grid-container"> <!--parent-->
        <div class="grid-item">1</div> <!--child-->
        <div class="grid-item">2</div>
      </div>
    </html>

  ### CSS Parent:
  Units|.
  ---|---
  auto | size according to content
  1fr | takes available space

   ```css
    grid-container { /*parent*/
      display: grid; /*turns on grid. or inline-grid*/

      grid-template: 150px / auto auto auto; /*1-row-150px 3-columns-auto*/
        grid-template-columns: 80px auto 200px; /*3 columns, widths 80-auto-200. >4-column-children line-break*/
        grid-template-rows: 80px 200px; /*2 rows, heights 80-200*/

      grid-gap: 50px 100px; /*gap between rows, columns*/
        grid-gap: 50px; 
        grid-row-gap: 50px; 
        grid-column-gap: 100px; 

      justify-content: space-evenly; /*horizontal position of fullGrid if < container. OR justify-items?
        space-around
        space-between
        start
        center
        end
        stretch */

      align-content: space-evenly; /*vertical position of fullGrid if < container. OR align-items?
        space-around
        space-between
        start
        center
        end
        stretch */
    } 
  ```

  ### CSS Child (optional?):
  - default 1 item &rarr; 1column x 1row
  - Can customize each item's size, position, order in grid (&rarr; items don't need to appear in their HTML order, eg. for @media)
    
  #### With line numbers
  ```css
    .item1 { /*child*/
      grid-area: 1 / 4 / span 2 / span 3; /*or 1 / 4 / 3 / 7;*/ 
        /*Shorthand for…*/
          grid-row: 1 / span 2; /*or 1 / 3;*/ 
            /*Shorthand for grid-row-start, grid-row-end*/
          grid-column: 4 / span 3; /*or 4 / 7;*/ 
            /*Shorthand for grid-column-start, grid-column-end*/
    
      justify-self: stretch; /* horizontally*/
      align-self: stretch; /* vertically*/
      display: grid; /*… nest grid within grid*/
    } 
  ```

  #### With named items
  - syntax grid-template-areas &rarr; row(' ') column(space) unnamed(.)
    ```css
      grid-container { /*parent*/
        grid-template-areas: /*6columns 3rows*/
          'header header header header header header'
          'menu main main main right right'
          'menu footer footer footer footer footer';
      } 
      .item1 { grid-area: header; }
      .item2 { grid-area: menu; }
      .item3 { grid-area: main; }
      .item4 { grid-area: right; }
      .item5 { grid-area: footer; }
    ```

  ### Media Query
  ```css
    @media (min-width: 400px) { 
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: 
        "header header" 
        "advert content" 
        "footer footer"; 
    }
  ```



## Grid Garden


## In Practice


