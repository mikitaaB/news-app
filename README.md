# news-app

An application displays a list of articles retrieved from the [News API](https://newsapi.org/), while also being able to search for articles of interest by entering relevant keywords.

To run the application on your local machine, you will need to set the environment variable `REACT_APP_NEWS_API_KEY` environment variable to your News API key. You can obtain a News API key by signing up at https://newsapi.org/register. Once you have your API key, create a `.env` file in the root of the project and add the following line:

```
REACT_APP_NEWS_API_KEY={news-api-key}
```

### How to setup

1. Install node.js: https://nodejs.org/en/ (LTS)
2. Install all dependencies:
   `yarn`

### How to run

To run the app in **development** mode:

```
yarn start
```

The app will be available at http://localhost:3000.
