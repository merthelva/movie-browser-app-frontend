This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). [`yarn`](https://yarnpkg.com/) is used as the package manager and the project is simply created by typing the following command in the project's root directory:

```bash
yarn create next-app --typescript
```

## Development Stack

This project has the following development features: 
  
- **Language:** It is fully written in [Typescript](https://www.typescriptlang.org/).

- **Styling:** For styling all components, [styled-components](https://styled-components.com/docs) is used.

- **State Management:** For managing the global state, [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) as now the suggested way of using Redux is used.

- **Async Operations Handling:** In order to handle asynchronous operations, [Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted) is used.

## Project Overview

This project is a demo of showcasing the popular movies which is stored by [`TMDB`](https://www.themoviedb.org/?language=en-US) database. (For more information, please refer to [the official TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) documentation.)

This project also consumes a custom defined (written by myself) Backend service for managing basic authtentication flow and user watchlist. (You can take a look at the dedicated repository for backend from [here](https://github.com/merthelva/movie-browser-app-backend).)

This project is deployed to and served by [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) which is own by the creators of [Next.js](https://nextjs.org/).

You can visit and test the built version of the application from [here](https://movie-browser-app.vercel.app/).

## Issues Noted

There are a couple of minor issues that should be worth noted here:

- When you open the application and click on any of the movie cards in [`/`](https://movie-browser-app.vercel.app/) page, you can see custom written Image Carousel component and all the images in this component are defined by using [NextJS Image](https://nextjs.org/docs/api-reference/next/image) component. This component has [`placeholder`](https://nextjs.org/docs/api-reference/next/image#placeholder) and [`blurDataUrl`](https://nextjs.org/docs/api-reference/next/image#blurdataurl) props which are used to display a blurred placeholder image while the actual image is being loaded. Unfortunately, these props do not give the expected result for this Image Carousel component and between image transitions, user sees an empty space which is very bad for UX, while the image is being loaded. (Actually, there is a smooth transition between each image change, but user could not possibly see this functionality.) Currently, there seems to be no applicable solution, still as soon as a proper solution will be found, it will be implemented immediately.

- In **development** mode, while visiting dynamic pages for which *getServerSideProps* async function is defined, **HYDRATE** action is being dispatched more than a couple of times unexpectedly and this causes a significant slow down between page transitions/navigations. (In order to have an idea about **HYDRATE** action and what it actually does, please refer to the full documentation of [`next-redux-wrapper`](https://github.com/kirill-konshin/next-redux-wrapper#redux-wrapper-for-nextjs-) package, as everything is clearly defined there.) After an extensive search which takes literally more than a couple of hours, it is found that the problem stems from the use of *getInitialProps* function, which is called via **wrapper.getInitialAppProps** in *_app.page.tsx* file. (Note that **wrapper** is provided by **next-redux-wrapper** package implementation for redux store.) Related to that, there is an [open issue](https://github.com/kirill-konshin/next-redux-wrapper/issues/472) in the official repository. Also, [this](https://github.com/kirill-konshin/next-redux-wrapper/issues/433) and [this](https://github.com/kirill-konshin/next-redux-wrapper/issues/422) open PR's are considered as directly related to the described issue. As soon as a stable solution will be found and published, it will be integrated into this repository as well.

##

Hope you will enjoy visiting and testing this application. Please do not hesitate to give any feedback for this application where you think there should be an improvement/change/update/feature. I am open to any kind of contribution for making this application better.
