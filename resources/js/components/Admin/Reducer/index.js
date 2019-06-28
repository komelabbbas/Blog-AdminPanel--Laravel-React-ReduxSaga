
import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import BlogReducer from './BlogReducer';
import LoginReducer from './LoginReducer';



export default combineReducers({
    CategoryReducer : CategoryReducer ,
    BlogReducer : BlogReducer ,
    LoginReducer : LoginReducer
});



