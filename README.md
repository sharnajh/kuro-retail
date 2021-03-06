# Kuro is a fictional urban online retail store, powered by React.

[![Netlify Status](https://api.netlify.com/api/v1/badges/2b7a82e8-9620-4b33-9549-366b08fb19d9/deploy-status)](https://app.netlify.com/sites/kuro-retail/deploys)

## Features & Process
### Images
A primary focus for this website was to manage the loading of high quality images (from Unsplash) in huge quantities. The main goal was to have the images displayed to the user as quickly as possible without any jarring lags or blank screens.
  - Implemented progressive loading by using a minified version of the image (small dimensions and low quality) with a blur filter as the placeholder. The placeholder is linked by 8-bit URI (thanks to webpack’s url-loader) so that it paints onto the document immediately, ensuring that there will be no blank divs during the loading process. 
  - I code splitted the pages where multiple images load using the Intersection API so that an image only loads when it’s about to scroll into the viewport and not a moment sooner. The div’s background-color serves as the placeholder.
  
### Layout
I consider the goal of a good ecommerce site is for the products to have maximum exposure. In respect of that goal, I structured the site layout so that the users are able to log in, sign up, contact, and everything else without having to leave a page displaying products. For sitemap purposes, I still sectioned off the log, sign up, and contact components to their own separate routes with React Router.

### Data
The backend data is stored in a Firestore database. On the frontend, the fetched data is managed with Redux and further leveraged by the Reselect library and Redux-Thunk (so that actions can be enhanced with promises). A Higher Order Component (HOC) pattern is used to manage loading components while data is being fetched.

### User Authentication
Users are able to sign up and log in via email and password or their Google account, via Firebase. Firebase data is managed client side with Redux (with assistance from the Reselect library to improve performance) and persisted with Redux-Persist (even though Firebase persists the authenticated user by default, Redux-Persist mitigates the initial few seconds that Firebase takes to retrieve the data for a faster and seamless user exerience).  

### Payment

Payments are managed by the Stripe API. As this is simply a project site, users cannot actually store credit card information or post transactions on the site. This is simply a bare-bones demo of a checkout function on an ecommerce site.

### Persisting Data

It’s imperative that the user’s shopping cart data persists even if they close or refresh the tab, so I set that as a goal for this project. The first solution that came to mind was a no brainer - just have the user’s shopping cart data stored in Firebase and load it whenever the app initializes. It’s a great solution that comes with many benefits, but for this project’s particular use-case it would have been like slicing a tomato with a katana...that is on fire. Kuro is just a project ecommerce site. Instead, utilizing the Redux Persist library to leverage window.localStorage is a much more practical solution for this project.