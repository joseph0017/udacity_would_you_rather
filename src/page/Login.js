import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUsers';
import { withRouter } from 'react-router-dom';
import { Card, Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 class Login extends Component {
    state = {
        user: 'none'
      };
    
      changeUser = (e) => {
        const user = e.target.value;
        this.setState(() => ({ user }));
      };
    
      handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.user));
        this.props.history.goBack();
      };

      
    render() {
        return (
            <div>       
                  <Container className= "d-flex justify-content-center">
                 <h1> WELCOME TO THE WOULD YOU RATHER APP </h1>
                    </Container>     
                <Container className= "d-flex justify-content-center"> 
                <Card style={{ width: '30rem'  }} border = 'primary'>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    <Card.Subtitle>Please sign in to continue</Card.Subtitle>
                    <Form onSubmit={this.handleLogin}>
                    <select style={{ width : '18rem' }} 
                    onChange = {this.changeUser}
                    value = {this.state.user}
                    >
                    <option value = 'none' disabled>
                    choose user
                    </option>
                    {this.props.userIds.map(userId => (
                      <option key={userId} value={userId}>
                        {this.props.users[userId].name}
                      </option>
                    ))}
                    </select>

                    <Button variant ='primary' type="submit" 
                    disabled = {this.state.user === 'none'} >
                        Sign In
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
                </Container>
                
            </div>
        )
    }
}


function mapStateToProps({ users }) {
    return {
      userIds: Object.keys(users),
      users
    };
  }

export default withRouter(connect(mapStateToProps)(Login))