import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Card, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'

class QuestionResult extends Component {

  calcVotePercentage = (numberVotes, totalVotes) => {
  const votePercentage = Math.round((numberVotes / totalVotes) * 100);
  return votePercentage
  };

  render() {
    const { authedUser, question, users } = this.props;

    if (!question) {
      return <Redirect to="/page-not-found" />;
    }

    // Source: https://knowledge.udacity.com/questions/196862

    const totalVoteNumber =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    const firstQuestionVotePercent = this.calcVotePercentage(
      question.optionOne.votes.length,
      totalVoteNumber
    );
    const secondQuestionVotePercent = this.calcVotePercentage(
      question.optionTwo.votes.length,
      totalVoteNumber
    );

      return (
  <Container className= "d-flex justify-content-center">
      <Row>
          <Card className="h-100 shadow-sm bg-white rounded">
              <Container className= "d-flex justify-content-center">
                  <Card.Title>
                  {users[question.author].name} asks:
                  </Card.Title>
                  </Container>
              <Card>
              <img
              className="profile-images-page"
              src=  {users[question.author].avatarURL}
              alt="profile"
            />
                  <Col>
                  <h1>Results</h1>

                    <Card.Title> { question.optionOne.text } </Card.Title>
                    {question.optionOne.votes.indexOf(authedUser) !== -1 ? (
                      <Card.Text>Your choice</Card.Text>
                    ) : (
                      false
                    )}

                    <Card.Text>{firstQuestionVotePercent}  % 
                    {question.optionOne.votes.length} out of {totalVoteNumber} {totalVoteNumber > 1 ? 'votes' : 'vote'}
                      </Card.Text>



                      <Card.Title> { question.optionTwo.text } </Card.Title>
                    {question.optionTwo.votes.indexOf(authedUser) !== -1 ? (
                      <Card.Text>Your choice</Card.Text>
                    ) : (
                      false
                    )}

                    <Card.Text>{secondQuestionVotePercent}  % 
                    {question.optionTwo.votes.length} out of {totalVoteNumber} {totalVoteNumber > 1 ? 'votes' : 'vote'}
                      </Card.Text>

                      
                  </Col>
              </Card>
          </Card>
      </Row>
  </Container>
      );
    }
  }


function mapStateToProps({ questions, users, authedUser }, {id}) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users
  };
}

export default connect(mapStateToProps)(QuestionResult);
