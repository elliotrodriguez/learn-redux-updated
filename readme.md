# Learn Redux

The wesbos.com course on Learn Redux is outdated. This is an updated, modernized version of the application you build as you progress through the video series. 

Each branch will contain a working version as of the end of a given video segment. The initial master commit is the first working version.

This updates to:
- React 16.6
- React Router 4
- Webpack 4
- Redux 5
- Babel 7

Along the way, we will be removing dependencies if they are not needed. For example, the initial commit removes some presets that are now rolled into preset-env.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
