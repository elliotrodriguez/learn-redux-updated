import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux'

import rootReducer from './reducers'

// default data
import posts from './data/posts'
import comments from './data/posts'

// create object for default data
const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);

// export const history = syncHistoryWithStore(BrowserHistory, store);
export default store;