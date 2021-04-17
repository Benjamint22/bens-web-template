# Ben's opiniated web development template
Tested with Node v12.18.3

## Description
A simple front-end web development template I made for my own use. Feel free to use it for anything you want. Many improvements needed, feel free to create issues and mention if you wish to make changes yourself.

## Features
* [Typescript](https://www.typescriptlang.org) & [SASS](https://sass-lang.com) support
* Serving & watching with static assets (using [Webpack](https://webpack.js.org))
* Debugging (using [Visual Studio Code](https://code.visualstudio.com))
* Unit testing (using [Jest](https://jestjs.io))
* Linting (using [Prettier](https://prettier.io) and [ESLint](https://eslint.org))

## Strongly recommended [Visual Studio Code](https://code.visualstudio.com) extensions
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Setup
* Run `npm install`

## Starting / serving

### From VSCode (enables debugging)
* Run `npm start` in the console OR run the "serve" task
* Run the "Launch Chrome against localhost" launch task

### From the command line
* Run `npm start`
* Open `http://localhost:9000` in your web browser.

## Building (for production)
* Run `npm run build`

## Testing

### From VSCode (enables debugging)
* Run the "Debug tests" launch task

### From the command line
* Run `npm run test`

## Cleaning
* Run `npm run clean`
