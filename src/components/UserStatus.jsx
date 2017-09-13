import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class UserStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            created_at: '',
            email: '',
            username: '',
            id:''
        }
    }
    componentDidMount(){
        if(this.props.isAuthenticated) {
            this.getUserStatus();
        }
    }
    getUserStatus(event){
        const options = {
            url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/status`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${window.localStorage.authToken}`
            }
        }
        return axios(options)
            .then((res)=> { this.setState({
                created_at: res.data.data.created_at,
                email: res.data.data.email,
                username: res.data.data.username,
                id: res.data.data.id
            }); })
            .catch((error)=> { console.log(error) })
    }
    render() {
        if (!this.props.isAuthenticated) {
            return (<p>You must be logged in to view this. Click <Link to='/login'>Here</Link> to login.</p>)
        }
        return (
            <div>
                <ul>
                    <li><strong>User Id:</strong> {this.state.id}</li>
                    <li><strong>Username:</strong> {this.state.username}</li>
                    <li><strong>Email:</strong> {this.state.email}</li>
                    <li><strong>Created At:</strong> {this.state.created_at}</li>
                </ul>
            </div>
        )
    }
}

export default UserStatus;