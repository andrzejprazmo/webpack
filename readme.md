npm init -y
npm install --save-dev typescript
-- Add src folder
npx tsc --init
-- set "rootDir" parameter to "./src"
-- set "outDir" parameter to "./dist"
npm install webpack webpack-cli --save-dev
npm install ts-loader --save-dev
-- create  webpack.config.js
-- set "build" parameter in package.json to "npx webpack"
