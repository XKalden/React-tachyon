import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './actionType';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,

});


// exprort const requestRobots = (dispatch) => {
//     dispatch({type: REQUEST_ROBOTS_PENDING})
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:data }))
//     .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload:error }))
// }



// export const requestRobots = () => dispatch => {
// HOC Function (function that return function);



export const requestRobots = () => {
    return dispatch => {
        dispatch({type: REQUEST_ROBOTS_PENDING})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:data }))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload:error }))

    }
}



