export const fetchEducations = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/educations')
        .then(resp => resp.json())
        .then(educations => {
            dispatch({ type: "FETCH_EDUCATIONS", payload: educations })
        })
    }
}
export const addEducation = (education) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/educations`, {
            method: 'POST',
            body: JSON.stringify(education),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(education => {
            dispatch({ type: 'ADD_EDUCATION', payload: education })
        })
    }
}
