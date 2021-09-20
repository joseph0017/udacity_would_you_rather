import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Container, Button, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { formatQuestion } from '../utils/helpers';


 class Question extends Component {

   viewPoll = (e, id) => {
     e.preventDefault()
    this.props.history.push(`/questions/${id}`);
  };


  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This question does not exist.</p>;
    }

    const { name, optionOne, id, avatar } = question;
    return (
      <>
      <Link to = { `/questions/${id}` } >
    <Container className= "d-flex justify-content-center ">
        <Card bg = 'light'>
        <Container className= "d-flex justify-content-center ">
            <Card.Title>
            {name} asks:
            </Card.Title>
        </Container>
            <Row className="justify-content-md-center">
            <img
              className="profile-images-page"
              src={avatar}
              alt="profile"
            />
            <Container className= "d-flex justify-content-center ">
            <Card.Text>
                Would you rather...
            </Card.Text>
            </Container>
            <Container className= "d-flex justify-content-center ">
            <Card.Subtitle>
              ...
              {optionOne.text}
              ...
            </Card.Subtitle>
            </Container>
            <br />
            <Button onClick={(e) => this.viewPoll(e,id)} 
            style={{ width: '8rem'  }}
            type = 'submit'>
                View Poll
            </Button>
            </Row>
        </Card>
    </Container>
    </Link>
    <br />
    <br />
    </>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question
    ? formatQuestion(question, users[question.author])
    :
    null
  };
}

export default withRouter(connect(mapStateToProps)(Question));

