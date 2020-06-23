# FlashTract Coding Challengs

## To Run Application
Once you clone the application, simply run `yarn && yarn start` within your terminal.

## Notable Features
- Connects with Finnhub API for historic and real time stock prices.
- Search bar with Autocompletion.
- Favorites list that is persisted through localStorage.
- Dynamically generated list of news articles relevant to the active company.

## Notable Decisions
- For this project, I decided to use Snowpack as a bundler.  This is a newer JS bundling platform that allows for faster rebuilding of an application upon saving.
- A simple LineChart was created to show trends using `react-vis`. This is Uber's open source data-viz library which is provides a ton of customization options.
- For Common UI components, I used the Chakra UI library.  This is a newer library that I've been very impressed by.  It's emphasis is delivering a library that has full accessibility, easy themeing, and is fully composable.  While it is a newer library, it's ease of use and built in accessibility makes it a great tool.
- I used React and managed all state through Context and Hooks.  This is largely done for both time to deliver and to demonstrate react knowledge.

## Changes I Would Make If Dev Continued
- I would move all calls to the Finnhub API through to a thin API layer to better hide the Finnhub token, cache the commonly called information, and consolidate information.
- There are no unit tests in this application, due to wanting to demonstrate React and front-end knowledge on a wide variety of levels.
  - Preferred testing tools are: 
    - Jest for test framework
    - @testing-library for unit tests
    - cypress for e2e tests
    - CI through Teamcity or Github Actions to keep track of when failures happen.
- While the usage of React context here works for this fairly simple app, as it grew the scalability may suffer.  If this was being maintained long term, I would want to set up either a Redux store or use the built in `useReducer` hook to handle larger more scalable state management.
- There are a few API calls that could certainly be cleaned up through better caching and storage of information from Finnhub.
