# Learn Redux

I needed a quick refresher on Redux and came across [Learn Redux](http://www.learnredux.com).

It was great, but sorely outdated. This is an updated, modernized version of the ReactJS application you build as you progress through the video series. It doesn't look like the repo is looking at PRs, so I decided to provide an updated version that will hopefully help others looking to complete the series, but have a baseline to work off of when using current versions of React and Redux.

Each branch will contain a working version as of the end of a given video segment. The initial master commit is the first working version. If you want to see what was changed along the way, refer to each of the branches.

Each link takes you to a branch that matches the video chapter in the series. Gaps mean I rolled up related changes from a few videos into one branch.
__________
- [Chapter 2](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch02)
- [Chapter 3](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch03)
- [Chapter 4](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch04)
- [Chapter 5](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch05)
- [Chapter 9](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch09)
- [Chapter 10](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch10)
- [Chapter 12](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch12)
- [Chapter 13](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch13)
- [Chapter 14](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch14)
- [Chapter 18](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch18)
- [Chapter 20](https://github.com/elliotrodriguez/learn-redux-updated/tree/ch20)



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

## TODOs (outside of the tutorial scope, but good first issues for any contributors!)
1. Update to use react-transition-group
2. Actually add tests (the default code base uses expect, I think this should use enzyme)
3. Get the production build working
4. Linting
