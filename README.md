# React-Boilerplate
React boilerplate from scratch

## Setup
`npm install`

`npm run start-dev` starts webpack-dev-server with live reload frontend on:

 http://localhost:8080

`npm run build` builds app into `dist` folder

`npm start` starts app from `dist` folder on:

http://localhost:3000

For production build, set the following variable:

```javascript
// webpack.config.js

const mode = 'production';
```

`npm test` to run tests