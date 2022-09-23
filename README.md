# ImageFilters

## Description

This is a client-side, single-page application made with Angular. It uses HTML5 Canvas to apply filters to an image uploaded by the user. The filtered image can then be downloaded afterwards.

Many of the filter functions used in this app are from [pixels.js](https://github.com/silvia-odwyer/pixels.js) and the experimental [CanvasRenderingContext2D.filter](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter). Sobel filter from https://github.com/miguelmota/sobel .

### Local Dev Environment

After cloning this repo, enter the following commands to run the app locally:

`npm install`

`npm start` or `ng serve -o`

## Project Status

This project is at the point where it's functional now. Aside from minor updates/changes, here are some other things I would like to do:
* add more filters
* deploy this project as a static webpage on GitHub
* add drag and drop for image upload