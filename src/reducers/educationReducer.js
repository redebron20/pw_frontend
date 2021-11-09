export const educationReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EDUCATIONS':
            return [...action.payload]
        case 'ADD_EDUCATION':
            return [...state, action.payload]
        default:
            return state;
    }
}