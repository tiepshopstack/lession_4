
import { REQUEST_GET_USERS, REQUEST_GET_USERS_SUCCESS, REQUEST_GET_USERS_FAILED } from '../constants/ActionUsers'
import { fromJS } from 'immutable';

export const initialState = fromJS({
    loading:false,
    message:'',
    data:[]
});
function Users(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GET_USERS:
            return state.set('loading',true).set('message','').set('data',[]);
        case REQUEST_GET_USERS_SUCCESS:
            return state.set('loading',false).set('message','').set('data',action.data);
        case REQUEST_GET_USERS_FAILED:
            return state.set('loading',false).set('message',action.message).set('data',[]);
        default:
            return state
    }
}

export default Users;
