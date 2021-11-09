export const fetchProjects = () => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/projects`)
        .then(resp => resp.json())
        .then(projects => {
            dispatch({ type: 'FETCH_PROJECTS', payload: projects })
        })
    }
}

export const addProject = (project) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/projects`, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(project => {
            dispatch({ type: 'ADD_PROJECT', payload: project })
        })
    }
}
