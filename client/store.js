import { createStore, compose } from 'redux';
import rootReducer from './reducers'

// default data
import posts from './data/posts'
import comments from './data/comments'

// create object for default data
const defaultState = {
    posts,
    comments
}

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, defaultState, enhancers);


if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;