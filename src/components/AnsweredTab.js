import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from './Question';
import TabNavbar from './TabNavbar';


 class UnansweredTab extends Component {
    render() {
        const { answeredQuestionIds } = this.props;
        return (
            <>
            <TabNavbar />
            <Container className= "d-flex justify-content-center" style={{ width: '30rem'  }}>
            <Card style={{ width: '30rem'  }} bg = 'light'>
            {answeredQuestionIds 
                .map((id) => {
                  return (
                    <div key={id}>
                      <Question id={id} />
                    </div>
                  );
                })}
            </Card>
            </Container>
            </>
        )
    }
}


function mapStateToProps({ questions, authedUser }, {id}) {

  const answeredQuestions = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );
  // question.optionOne.votes.includes(authedUser), only returns 2 objects, don't know why.
  // Source: https://knowledge.udacity.com/questions/505909
  // 2nd Source: https://knowledge.udacity.com/questions/448557

  return {
    id,
    answeredQuestionIds: answeredQuestions
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({id})=>id)
      
  };
}

export default  connect(mapStateToProps)(UnansweredTab)
