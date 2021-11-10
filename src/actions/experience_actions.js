export const fetchExperiences = () => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/experiences`)
        .then(resp => resp.json())
        .then(experiences => {
            dispatch({ type: 'FETCH_EXPERIENCES', payload: experiences })
        })
    }
}

export const addExperience = (experience) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/experiences`, {
            method: 'POST',
            body: JSON.stringify(experience),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(experience => {
            dispatch({ type: 'ADD_EXPERIENCE', payload: experience })
        })
    }
}
