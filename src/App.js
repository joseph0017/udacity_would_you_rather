import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './page/404pageNotFound';
import Home from './page/Home';
import LeaderboardPage from './page/Leaderboard';
import Login from './page/Login';
import NewQuestion from './page/NewQuestion';
import {handleInitialData} from './actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading';
import QuestionPage from './page/QuestionPage';
import Logout from './page/Logout';
import UnansweredTab from './components/UnansweredTab';
import AnsweredTab from './components/AnsweredTab';
import ProtectedRoute from './components/ProtectedRoute';
import QuestionResult from './page/QuestionResult';


class App extends Component  {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
  return (
    <Router>
        <div className = "App">
        <LoadingBar style={{ backgroundColor: 'black', height: '3px' }} />
      <Navbar />
        <Switch>
        <Route path = '/page-not-found' component = {PageNotFound} />
        <Route path = '/login' component = {Login} />
        <Route path = '/logout' component = {Logout} />
        <ProtectedRoute path = '/unanswered-tab' component = {UnansweredTab} />
        <ProtectedRoute path = '/answered-tab' component = {AnsweredTab} />
        <ProtectedRoute path = '/add' component = {NewQuestion} />
        <ProtectedRoute path = '/question-result' component = {QuestionResult} />
        <ProtectedRoute path = '/leaderboard' component = {LeaderboardPage} />
        <ProtectedRoute path = '/questions/:question_id' component = {QuestionPage} />
        <ProtectedRoute path = '/' exact component = {Home} />
        </Switch>
    </div>
    </Router>
  );
  }
  }


  function mapStateToProps ({ authedUser }) {
    return {
      authedUser 
    }
  }
  

export default connect(mapStateToProps) (App)