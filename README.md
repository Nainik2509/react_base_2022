# ReactJs BoilerPlate Code

<mark>This Repo consists of the base setup for ReactJs with Webpack, Prettier, Eslint and Husky.</mark>

## Why ReactJs ?

- History :
  - `2011` - Designed and created in Facebook for internal use.
  - `2012` - Instagram started using it.
  - `2013` - Open-sourced.
  - `2015` - Open-sourced React Native for building native iOS and Android apps.
- Facts :
  - React is a library, Not a framework.
  - It is Flexible.
    - Generates a statis site using Gatsby.
    - Add server rendering with Next.js.
    - Build mobile apps with React Native.
    - Develop Desktop apps using Electron.
    - Create a virtual reality website for 360 experiences using React VR.
  - Great DEV Experience.
  - Supported by Meta.
  - Broad Community Support.

<hr/>

###### Built and maintained by Nainik Mehta [Find Me!](#find-me).

## Let's Dig Into The Code And Explore!

## Best Pratices

1. [ReactJs Setup](#1-reactjs-setup)
2. [Setup The Project](#2-setup-the-project)
3. [Folder Structure](#3-folder-structure)
4. [Performance Practices And Future Work (Work In Progress️ ✍️)](#4-performance-practices-and-future-work)

<br/><br/>

# `1. ReactJs Setup`

I have setup this boilerplate code using Node Version: `16.13.0` (includes npm `8.1.0`) & React: `17.0.2`<br/>

### [📝] Have ReactJs in your System

1. Install Nodejs
   - You can have the Node LTS and configure it from [Nodejs.org](https://reactjs.org/en/download/)<br/>
     🔗 [**Read More: Getting Started With NodeJS**](https://medium.com/@erickcodes/getting-started-with-node-js-84972881508b)
2. npm install -g create-react-app
3. npx create-react-app appName
4. cd appName ---> code .
5. npm start (to run)

## `2. Setup The Project`

- You can clone this repo from command line using `git clone ${repo_url}`.

- Run `npm install | yarn`
- Create an `.env` file and add your configuration as per your need similar to reference file `.env.example`
- You can add your base url for API's and apis endpoints in `/src/redux/apiEndPoints.ts`
- Run `npm start | yarn start` -> to start the app.

## `3. Folder Structure`

- `build` -> Our build for production will be bundlled in this folder on running `yarn build | npm run build`.
- `Public` -> Our base file root index.js and all other resources like logo is there.
- `webpack` ->
  - `webpack.common.js` -> Common webpack configuration's rule to be applied.
  - `webpack.dev.js` -> Development webpack configuration's rule to be applied.
  - `webpack.prod.js` -> Production webpack configuration's rule to be applied.
  - `webpack.config.js` -> Merging the common webpack rules with webpack file according to env -> For `yarn start -- dev` && `yarn build -- prod`.
- `src` -> Folder where your whole client configuration and other things will come.
  - `index.tsx` -> This is the main file which start's your client (App Entry Point).
  - `App.tsx` -> File where all our components are configured wrapped with persisted store and fallback spinner.
  - `App.css` -> Base CSS file.
  - `assets` -> Folder where all our CSS, Images, or Javascript files will come.It will containts all the external resources to be included.
  - `components` -> Components that can be reused with props will be defined here.
  - `helpers` -> Common types which can be used in many places can be defined here.
  - `layout` -> Layout configuration can be defined here -> like common header footer & sidebar which need to be wrapped everywhere can be defined here.
  - `router` -> All our routes will come in this folder with roles management.
  - `utils` -> All our constants and general utilities function which are frequently needed can be defined here.
  - `redux` -> All our API bussiness logics and store setup will be in this folder.
    - `actions` -> All our redux-actions will be defined here according to each module.
    - `reducers` -> All our reducers to catch actions will be defined and then combined in the rootReducer.
    - `store.ts` -> Store configuration with persisted storage.
    - `api.ts` -> Base axios configuration with Request & Response interceptors.
    - `apiEndPoints.ts` -> All our end-points are defined in this file.
  - `views` -> All our components and bussines logics according to modules that needs to be rendered are here.
- `.history.ts` -> Configuring the browser history.
- `.babelrc` -> Babel config file.
- `.prettierrc.js` -> Rules for code formatting using prettier.
- `.eslintrc.js` -> Eslint rules to be check throughout the code.
- `.env` -> All our environment variables.
- `.env.example` -> Reference file for `.env`.
- `.gitognore` -> Files & Folder to be excluded from the git.
- `package.json` -> React initialization with all our packages that are used.
- `README.md` -> A general overview of the project.

## Find Me!

Wanna Reach Me Out 📌?<br/>
Reach Me Out At :
[Nainik Mehta](https://github.com/Nainik2509)
<a href="https://www.linkedin.com/in/nainik-mehta-25nk12" target="_blank"><img src="src/assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://twitter.com/Nainik25" target="_blank"><img src="src/assets/images/twitter.svg" width="16" height="16"></img></a>

<a href="https://whitelioninfosystems.com/employee/606d5c041c705034c8f53878" target="_blank"><img src="src/assets/images/portfolio.png" width="16" height="16"></img></a>
<br/>
<br/>
Full Stack Developer | Driving Initiatives In Executing Ideas To Reality And Surplus Them |<br/>
Let's Connect To Explore 👇<br />
<a href="https://www.linkedin.com/in/nainik-mehta-25nk12" target="_blank"><img src="src/assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://twitter.com/Nainik25" target="_blank"><img src="src/assets/images/twitter.svg" width="16" height="16"></img></a>

<a href="https://whitelioninfosystems.com/employee/606d5c041c705034c8f53878" target="_blank"><img src="src/assets/images/portfolio.png" width="16" height="16"></img></a>
