import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { addUserQuestion } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion(authedUser, questionID, option) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        questionID,
        option,
    };
}


export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function addQuestionAnswer(authedUser, questionID, option) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionID,
        option
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())

        return saveQuestion({
          optionOneText,
          optionTwoText,
          author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(addUserQuestion(authedUser, question.id)))
        .then(() => dispatch(hideLoading()))
    }
}


export function handleAnswerQuestion(questionID, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
          authedUser,
          qid: questionID,
          answer: option
        })
        .then(() => dispatch(answerQuestion(authedUser, questionID, option)))
        .then(() => dispatch(addQuestionAnswer(authedUser, questionID, option)))
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e)
            alert('There was an error answering this question.')
        })
    }
}



