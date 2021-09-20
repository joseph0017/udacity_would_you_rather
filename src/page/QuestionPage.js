import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/questions';
import { Container, Row, Card, Form, Button, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuestionResult from './QuestionResult';

class QuestionPage extends Component {
  state = {
    answer: '',
    submit: true  
  };

  handleSubmit = e => {
    e.preventDefault();
    const { answer } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAnswerQuestion(this.props.match.params.question_id, answer));

    this.setState({ submit: true });
  };

  handleSelection = (answer) => {
    this.setState(() => ({
        answer,
      submit: false
    }));
  };



  render() {
    const {authedUser,  questions, users } = this.props;
    const { answer, submit } = this.state;
    const question = questions[this.props.match.params.question_id];
    const {id} = question

    if (
      question.optionOne.votes.indexOf(authedUser) !== -1 ||
      question.optionTwo.votes.indexOf(authedUser) !== -1
    ) {
      return <QuestionResult question = {question} authedUser= {authedUser} id = {question.id} />
      // Source: https://knowledge.udacity.com/questions/430535
    }

    else{

    return (
        <>      
    <Container>
        <Row>
            <Card>
            <Card.Header>
                <Card.Title>
                {users[question.author].name} asks:
                </Card.Title>
                <Card>
                    <Row>
                        <Col>
                        <img
              className="profile-images-page"
              src=  {users[question.author].avatarURL}
              alt="profile"
            />
                        </Col>
                        <Col>
                        <Card.Text>
                            Would You Rather...
                        </Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Card.Body>
                        <input name="options"
                          type="radio"
                          onChange={() => this.handleSelection('optionOne')}
                          checked={answer === 'optionOne'}/>
                          {question.optionOne.text}
                            </Card.Body>


                            <Card.Body>
                        <input name="options"
                          type="radio"
                          onChange={() => this.handleSelection('optionTwo')}
                          checked={answer === 'optionTwo'}/>
                          {question.optionTwo.text}
                            </Card.Body>

                            <Button disabled={submit} type = 'submit'>
                            SUBMIT YOUR ANSWER{' '}
                            </Button>

                        </Form>
                        </Col>
                    </Row>
                </Card>
            </Card.Header>
            </Card>
        </Row>
    </Container>
      </>
    );
  }
}
}


function mapStateToProps({ questions, users, authedUser }, props) {
  const {id} = props.match.params

  return {
    id,
    authedUser,
    questions,
    users
  };
}

// function mapStateToProps({ state, ownProps, questions, users, authedUser }) {
//   let id = ownProps.match.params.question_id
//   return {
//     question: state.questions.find(question => question.id === id),
//     questions, users, authedUser
//   };
// }

export default withRouter(connect(mapStateToProps)(QuestionPage));





// Source: https://knowledge.udacity.com/questions/283166
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values