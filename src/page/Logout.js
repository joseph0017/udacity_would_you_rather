import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUsers";

class Logout extends Component {

    componentDidMount() {
        this.props.dispatch(setAuthedUser(null))
    } 

    render() {
        return <Redirect to="/login" />;

  }
}

function mapStateToProps({ authedUser }) {
    return {
        logedin: authedUser
    }
}

export default connect(mapStateToProps)(Logout)
