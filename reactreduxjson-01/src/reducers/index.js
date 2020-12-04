import {combineReducers} from 'redux';

const listPostReducers = (list=[], action) => {
    if (action.type === 'GET_POST') {
        return action.data;
    }
    return list;
}

const getUserReducers = (users=[],action) => {
    if (action.type === 'GET_USER') {
        return [...users, action.data]
    }
    return users
}

const getDetailPostReducers = (post=null,action) => {
    if (action.type === 'GET_DETAIL_POST') {
        return action.data
    }
    return post
}


export default combineReducers({
    listPost : listPostReducers,
    users : getUserReducers,
    detailPost : getDetailPostReducers
})