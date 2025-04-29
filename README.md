# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Folder structure 

src/
├── assets/             \
│   ├── images/          \
│   │   ├── logo.png    \
│   │   ├── box.svg      \
│   │   ├── img2.jpg    \
├── components/          \
│   ├── common/          \
│   │   ├── Header.js    \
│   │   ├── Header.css    \  
│   │   ├── Footer.js    \
│   │   └── Footer.css    \
│   ├── home/        \
│   │   ├── HomeSection1.js      \
│   │   ├── HomeSection1.css      \
│   │   ├── HomeSection2.js      \
│   │   └── HomeSection2.css    \    
│   │   ├── HomeSection3.js    \
│   │   └── HomeSection3.css      \
│   │   ├── HomeSection4.js        \  
│   │   └── HomeSection4.css        \
│   │   ├── HomeSection5.js      \
│   │   └── HomeSection5.css      \
│   │   └── HomeSection6.js        \
│   │   └── HomeSection6.css        \
│   ├── about/      \
│   │   ├── About.js      \
│   │   └── About.css      \
│   └── services/      \
│       ├── Services.js      \
│       └── Services.css      \
├── pages/        \
│   ├── HomePage.js      \  
│   ├──  
│   └── ServicesPage.js      \
├── routes/        \
│   └── Router.js    \
├── App.js        \
└── index.css      \

## Folder Descriptions
assets/: Contains static images used in the project.        \
components/: Includes reusable UI components categorized by pages.  \
common/: Shared components like Header and Footer.    \
home/: Components for different sections on the homepage.      \
about/: Components related to the About page.        \
services/: Components related to the Services page.      \
pages/: Contains main page components that structure each route.      \
routes/: Manages application routing with Router.js.      \
App.js: Root component of the application.      \
index.css: Global styles for the project.      \

