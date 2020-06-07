import jsonplaceholder from "../api/jsonplaceholder";
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch( fetchPosts() );

    /* 
    Refractored in next line using lodash chain
    -------------------------------------------
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach( id => dispatch( fetchUser(id) ) ); */

    /* Lodash chain executes successive functions only when value() is called at end */

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach( id => dispatch( fetchUser(id) ) )
        .value();
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({
        type: "FETCH_POSTS" ,
        payload: response.data
    });
}

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}


/* 

Using Lodash memoize function( Can be used if api data is unchanged )
---------------------------------------------------------------------
*** Memoize dont run duplicate requests ***

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}); */