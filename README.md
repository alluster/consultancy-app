# React, Redux, Contentful CMS + SCSS 

SCSS files are imported from component specific folders and transpiled into index.css witch is imported to the src/app.js file.

### All component specific .scss style files are imported into src/styles/index.scss file

Import structure example:

> src/component/Navigation/navigation.scss 
imported to 
>src/styles/components/_all.scss 
from where imported to the 
>src/styles/index.scss
