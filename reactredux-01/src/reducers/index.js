import {combineReducers} from 'redux';

const listProductReducer = (state=[], action) => {
    if(action.type === "AMBIL_DATA") {
        return action.data;
    }
    return state;
}

const productTerpilihReducer = ( pilihan=null, action ) => {
    if (action.type === "PILIH_PRODUCT") {
        return action.data;
    }
    return pilihan;
}

export default combineReducers({
    listProduct : listProductReducer,
    itemTerpilih : productTerpilihReducer
})