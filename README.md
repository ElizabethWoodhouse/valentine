# Cinema Search & Vote
Welcome to the online Cinema Search & Vote mini app! Search the IMDB database for a movie. Click a movie from the provided results to read details about the director & plot, see the poster, and vote on your favorites (or least favorites).

## Technologies
This project is a small NERD stack single-page application with a PostgreSQL database for storing movie votes. In the frontend, React Hooks-controlled inputs fetch data from the IMDB alternative API to render search results. In the backend, an Express server communicates with a PostgreSQL database (via Sequelize) to store movies that users have up- or down-voted. The application is styled with a mixture of Bootstrap components and simple SASS adjustments.

## Dependencies
### System
Fork and clone this repo to your local machine.<br>
You must have node installed and an active internet connection to run this application.

### Project
Cd into the project folder and run the command npm install to install the relevant node modules (including webpack, express, react, react-router-dom, postgres, axios, and a variety of babel dev dependencies for transpiling jsx and modern Javascript syntax).

My Rapid API key has been ignored from github commits for security reasons, so you must add your own Rapid API key in a file called secrets.js (in the root folder) and subscribe to endpoint testing for this API in order to query successfully.

### npm start
Running npm start is a shortcut for npm run start-dev, which will bundle the frontend with webpack in watch mode and launch the development server on port 8000.

## Application views
### Movie Search Page - Desktop:
![Movie Search Page (Desktop Browser)](./public/images/movie-search-page_browser.png)

### Movie Search Page - Mobile:
![Movie Search Page (Mobile)](./public/images/movie-search-page_mobile.png)

### Movie Details Page - Desktop:
![Movie Details Page (Desktop Browser)](./public/images/movie-details_browser.png)

### Movie Details Page - Mobile:
![Movie Details Page (Mobile)](./public/images/movie-details-page_mobile.png)

