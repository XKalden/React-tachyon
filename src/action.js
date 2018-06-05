import {CHANGE_SEARCH_FIELD } from './actionType';





export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,

});
