
const initialState = {
    color: 'red',
    time: 7
}

export const light = (state=initialState, action) => {
    // console.log(state);
    // console.log(action);
    switch(action.type) {
        case 'CHANGE_RED':
            return {
                color: 'red',
                time: action.time
            }
        case 'CHANGE_YELLOW':
            return {
                color: 'yellow',
                time: action.time
            }
        case 'CHANGE_GREEN':
            return {
                color: 'green',
                time: action.time
            }
        default:
            return state;
    }
}
