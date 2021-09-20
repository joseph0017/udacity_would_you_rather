import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Card, Container, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {
  state = {
    firstQuestion: '',
    secondQuestion: '',
    toHome: false
  };

  handleFirstQuestion = e => {
    const firstQuestion = e.target.value;
    this.setState(() => ({
        firstQuestion
    }));
  };

  handleSecondQuestion = e => {
    const secondQuestion = e.target.value;
    this.setState(() => ({
        secondQuestion
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firstQuestion, secondQuestion } = this.state;
    const { dispatch, qid } = this.props;

    dispatch(handleAddQuestion(firstQuestion, secondQuestion));

    this.setState(() => ({
        firstQuestion: '',
        secondQuestion: '',
        toHome: qid ? false : true,
    }));
  };

  render() {
      const { firstQuestion, secondQuestion, toHome } = this.state

        if (toHome === true) {
          return <Redirect to = '/' />
        }
    return (
      <Container className= "d-flex justify-content-center">    
        <Card style = {{ width: '36rem' }}>
                 <Container className= "d-flex justify-content-center">
                <Card.Title>
                  <h1>Create New Question </h1>
               </Card.Title>
                </Container>
                 <Container className= "d-flex justify-content-center">
                <Card.Text>
                  Complete the question
               </Card.Text>
                </Container>
                <Container className= "d-flex justify-content-center">
                <Card.Title>
                  Would You Rather...
                 </Card.Title>
                 </Container>
                  <Form onSubmit={this.handleSubmit}>
                  <Container className= "d-flex justify-content-center">
                    <input
                      type="text"
                      placeholder="Enter first question text here"
                      value={firstQuestion}
                      onChange={this.handleFirstQuestion}
                    />
                    </Container>
                    <center>or</center>
                    <Container className= "d-flex justify-content-center">
                    <input
                      type="text"
                      placeholder="Enter second question text here"
                      value={secondQuestion}
                      onChange={this.handleSecondQuestion}
                    />
                    </Container>
                    <br />
                    <br />
                    <Container>
                      <Container className= "d-flex justify-content-center">
                    <Button
                      variant  = {'primary'}
                      disabled={
                        firstQuestion === '' ||
                        secondQuestion === ''
                      }
                      type = 'submit'
                    >
                      SUBMIT QUESTIONS
                    </Button>
                    </Container>
                    </Container>
                  </Form>
        </Card>
      </Container>
    );
  }
}

export default connect()(NewQuestion);


