// a reducer takes in two things:
// 1 - the action (info on what happened)
// 2 - a copy of the current state

const posts = (state = [], action) => {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            // return updated state
            const index = action.index;
            console.log(state[index]);

            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    likes: state[index].likes + 1
                },
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
}

export default posts