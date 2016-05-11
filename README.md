# Klick Landing Page Boilerplate

This is a one page site/project that I've set up to help mentor our new Web Dev Coop.

* Clone this repo onto your local computer.
* cd into it and run `npm install` 
* then run `grunt build` to compile all the files.
* Then run `grunt` to ensure that your files are being watched and compiled while you work.

Any time you add a new file to the js/vendor directory, you need to run `grunt build` to add the new library to our plugins.min.js file. Do not forget this step!  


## File structure:

```
klick-landing-page-boilerplate/
|—— assets/(does not get checked into repo)
|   |—— Lato.zip
|   |—— Home-Agency-Style-Desktop.psd
|—— css/
|   |—— style.css
|   |—— style.min.css
|—— images/
|   |—— (all .jpg, .png and .svg images live here.)
|—— js/
|   |—— build/
|   |   |—— plugins.js
|   |   |—— plugins.js.map
|   |   |—— scripts.js
|   |   |—— scripts.js.map
|   |—— source/
|   |   |——init.js
|   |   |——all-particals-here.js
|   |—— vendor/
|   |   |—— jquery.smooth-scroll.min.js
|   |   |—— all-minified-vendor-libraries-here.min.js
|   |—— plugins.min.js
|   |—— plugins.min.js.map
|   |—— scripts.min.js
|   |—— scripts.min.js.map
|—— scss/
|   |—— -modules/
|   |   |—— _main.scss
|   |—— base/
|   |   |—— extends/
|   |   |   |—— _ext-background-svg.scss
|   |   |   |—— _ext-helpers.scss
|   |   |—— _animations.scss
|   |   |—— _base.scss
|   |   |—— _buttons.scss
|   |   |—— _fonts.scss
|   |   |—— _footer.scss
|   |   |—— _form-elements.scss
|   |   |—— _header.scss
|   |   |—— _helper-classes-and-mixins.scss
|   |   |—— _layout.scss
|   |   |—— _lists.scss
|   |   |—— _media-queries.scss
|   |   |—— _normalize.scss
|   |   |—— _tables.scss
|   |   |—— _typography.scss
|   |   |—— _variables.scss
|—— .editorconfig
|—— .htaccess
|—— Gruntfile.js
|—— index.html
|—— package.json
|—— README.md
```