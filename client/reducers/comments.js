// a reducer takes in two things:
// 1 - the action (info on what happened)
// 2 - a copy of the current state

const postComments = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            // return existing state plus new fcomment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
           return [
               ...state.slice(0, action.index), 
               ...state.slice(action.index + 1)
           ];
            
        default:
            return state;
    }
}

// reducer composition, hand off the action of adding the post
// and this just handles returning all comments
const comments = (state = [], action) => {
    if (typeof action.postId !== 'undefined') {
        return {
            // take current state
            ...state,
            // overwrite with new one
            [action.postId] : postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments