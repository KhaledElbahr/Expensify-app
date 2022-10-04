<!-- Initialize package.json -->
npm init

<!-- Add babel -->
npm install --save-dev @babel/core @babel/cli

npm install --save-dev @babel/preset-react

npm install --save-dev @babel/preset-env

npm install --save-dev @babel-loader

<!-- Compile jsx using babel -->
npx babel src/app.js --out-file public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react --watch

<!-- Add Third-Party Component (Modal) -->
npm install react-modal

<!-- Add react-test-renderer -->
npm i react-test-renderer

<!-- Enzyme, Enzyme-adapter, raf (Request Animation Frame) -->
npm i --save-dev enzyme enzyme-adapter-react-16 raf