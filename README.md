[![Netlify Status](https://api.netlify.com/api/v1/badges/8f0d3cc9-2b0b-48ea-82ac-172247bf3480/deploy-status)](https://app.netlify.com/sites/lucid-clarke-a55e88/deploys)

# controlsystemstudio.org
Redesign of the website for Control System Studio (CSS). Made using GatsbyJS and hosted on netlify. 

https://lucid-clarke-a55e88.netlify.com/

## Developing/Testing locally
Gatsby has a fantastic development server feature, which allows you to preview the page immediately without building it. Make sure to install all npm dependencies using `npm install` the first time you run the site.
    
    $ npm start
  
## Building
To run the site on a server, it needs to be built first.

    $ npm install
    $ npm run build
  
The website files can be found in `public`.

## Downloads
Because links to downloads can be updated quite frequently, they are separated from the Download page to make editing them a little easier. You can find the file where you can define each link necessary in `src/utils/downloadinfo.js`.