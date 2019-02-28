import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUserRequest,fetchUserRequestSuccess,fetchUserRequestFailed} from '../actions/UsersAction';
class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onFetchUsers();
        let obj = this.props;
        setTimeout(function () {
           obj.onFetchUsersSuccess([{id:1,username:'tiepnd'},{id:2,username:'Tiephandsome'},{id:3,username:'TiepDepTrai'}]);
        },3000);
    }
    render() {
        const { Users } = this.props;
        return (
            <div className="App-Users">
                {Users.get('loading') === true?"Loading":""}
                {Users.get('data')?Users.get('data').map((value,index) => {
                    return (
                        <div key={index}>
                            <p>Xin chao user id : {value.id} username : {value.username}</p>
                        </div>
                    );
                }):null}
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        onFetchUsers: () => dispatch(fetchUserRequest()),
        onFetchUsersSuccess: (data) => dispatch(fetchUserRequestSuccess(data)),
        onFetchUsersFailed: (message) => dispatch(fetchUserRequestFailed(message))
    };
}
const mapStateToProps = (state) => ({
    Users: state.Users
});
export default connect(mapStateToProps,mapDispatchToProps)(Users);
