import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Leaderboard from '../components/Leaderboard';

 class LeaderboardPage extends Component {
  render() {
    const { users } = this.props
    return (
      <>
      <Container className= "d-flex  justify-content-center">
      <Row>

       {Object.keys(users)
      .map(user => {
        return {
          ...users[user],
          score:
            Object.keys(users[user].answers).length +
            users[user].questions.length
        };
      })
      .sort((a, b) => b.score - a.score)
      .map(user => (
        <div key = { user.id }>
          <Leaderboard id={ user.id } />
        </div>
      ))}
      
      </Row>
  </Container>
  </>
    )
  }
}

//  Source: https://knowledge.udacity.com/questions/152606

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LeaderboardPage);