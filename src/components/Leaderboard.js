import React, { Component }  from 'react'
import { Card, Container, Row, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';

 class Leaderboard extends Component {
    render() {
        const user = this.props

        const { name, avatar, answers, userQuestions } = user
        return (
            <div>
            <Container className= "d-flex justify-content-center" style={{ width: '30rem'  }}>
            <Card bg = 'light'>
                <Row className="justify-content-md-center">
                <img
              className="profile-images-page"
              src=  {avatar}
              alt="profile"
            />
            <Container className= "d-flex justify-content-center">
            <Card.Title>
                {name}
            </Card.Title>
            </Container>
            <Container className= "d-flex justify-content-center">
            <Card.Text>
                Answered Question <span> { answers } </span>
            </Card.Text>
            </Container>
            <Container className= "d-flex justify-content-center">
            <Card.Text>
                Created Question <span> { userQuestions } </span>
            </Card.Text>
            </Container>
            <Container className= "d-flex justify-content-center">
            <Card.Title>
                Score
            </Card.Title>
            </Container>
            <Container className= "d-flex justify-content-center">
                <span>
                    { answers + userQuestions }
                </span>
                </Container>
                </Row>
            </Card>
        </Container>
        <br />
        <br />
        <br />
        </div>
        )
    }
}


function mapStateToProps({ users }, { id }) {
    const user = users[id]
  
    return {
    answers: Object.keys(user.answers).length,
    userQuestions: user.questions.length,

    name: user.name,
    avatar: user.avatarURL,
    };
  }

export default connect(mapStateToProps)(Leaderboard)

