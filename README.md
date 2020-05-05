# Kuro is a fictional urban online retail store, powered by React. 

## Features & Process
### Images
A primary focus for this website was to manage the loading of high quality images (from Unsplash) in huge quantities. The main goal was to have the images displayed to the user as quickly as possible without any jarring lags or blank screens.
  - Implemented progressive loading by using a minified version of the image (small dimensions and low quality) with a blur filter as the placeholder. The placeholder is linked by 8-bit URI (thanks to webpack’s url-loader) so that it paints onto the document immediately, ensuring that there will be no blank divs during the loading process. 
  - I code splitted the pages where multiple images load using the Intersection API so that an image only loads when it’s about to scroll into the viewport and not a moment sooner. The div’s background-color serves as the placeholder.
  
### Layout
I consider the goal of a good ecommerce site is for the products to have maximum exposure. In respect of that goal, I structured the site layout so that the users are able to log in, sign up, contact, and everything else without having to leave a page displaying products. For sitemap purposes, I still sectioned off the log, sign up, and contact components to their own separate routes with React Router.

### User Authentication
Users are able to sign up and log in via email and password or their Google account, via Firebase. Firebase data is managed client side with Redux. 