export const experienceReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EXPERIENCES':
            return [...action.payload]
        case 'ADD_EXPERIENCE':
            return [...state, action.payload]
        default:
            return state;
    }
}