import API from '../axios/api'

export const getDataPost = () => async dispatch => {

    const data = await API.get('/posts')

    dispatch({
        type: "GET_POST",
        data: data
    })
    
}

export const getUser = (id) => async dispatch => {

    const response = await API.get(`/users/${id}`)

    dispatch({
        type: "GET_USER",
        data: response.data
    })
    
}

export const getDataPostAndUser = () => async (dispatch, getState) => {

    await dispatch(getDataPost())

    var setPost = new Set(getState().listPost.data.map(post => post.userId))
    var idUser = Array.from(setPost)

    idUser.forEach(id => dispatch(getUser(id)))
}

export const getDetailPost = idpost => async (dispatch,getState) => {

    const response = await API.get(`/posts/${idpost}`)

    dispatch({
        type: "GET_DETAIL_POST",
        data: response.data
    })
    
    await dispatch(getUser(response.data.userId))
    // console.log(getState())
}

    
