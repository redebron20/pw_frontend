import { combineReducers } from 'redux'
import { educationReducer } from './educationReducer'
import { experienceReducer } from './experienceReducer'
import { projectReducer } from './projectReducer'

export const rootReducer = combineReducers({
    educations: educationReducer,
    experiences: experienceReducer,
    projects: projectReducer

})
