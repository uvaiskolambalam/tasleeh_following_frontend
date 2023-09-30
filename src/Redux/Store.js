
import {combineReducers} from 'redux'
import {CompanySlice} from './CompanySlice'


const rootReducer=combineReducers({
    company:CompanySlice

})
export default rootReducer