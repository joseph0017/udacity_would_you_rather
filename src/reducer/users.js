import { RECEIVE_USERS, ADD_USER_QUESTION } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.questionID]: action.option
                    }
                }
            }
        case ADD_USER_QUESTION :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.questionID])
                }
            }
        default:
            return state
    }
}
