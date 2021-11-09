export const projectReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return [...action.payload]
        case 'ADD_PROJECT':
            return [...state, action.payload]
        default:
            return state;
    }
}