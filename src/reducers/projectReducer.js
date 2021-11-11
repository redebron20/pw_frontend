export const projectReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return [...action.payload]
        case 'ADD_PROJECT':
            return [...state, action.payload]
        case 'FETCH_PROJECT':
            return Object.assign({}, state,
                {[action.project.project.id]: action.project.project});
        default:
            return state;
    }
}