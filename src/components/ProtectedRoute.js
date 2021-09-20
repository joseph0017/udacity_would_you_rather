import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const ProtectedRoute = ({ component : Component, authedUser, ...rest }) => {
    return (
        <Route {...rest} 
        render={props =>
            authedUser !== null ? (
              <Component {...rest} {...props} />
            ) : (
              <Redirect push to="/login" />
            )
          }
        />
    )
}

function mapStateToProps ({ authedUser }) {
    return {
      authedUser 
    }
  }

export default connect(mapStateToProps)(ProtectedRoute)

// Source: https://dev.to/mychal/protected-routes-with-react-function-components-dh

// Source: https://dev.to/olumidesamuel_/implementing-protected-route-and-authentication-in-react-js-3cl4

// Source: https://ui.dev/react-router-v5-protected-routes-authentication/









// const ProtectedRoute = ({ component : Component, authedUser, ...rest }) => {
//     return (
//         <Route {...rest} 
//         render = { props => {
//             if (authedUser !== null) {
//                 return ( 
//                 <Component {...rest} {...props} /> 
//                 )
//             }
//             else {
//                 return <Redirect to={
//                     {
//                       pathname: '/login',
//                       state: {
//                         from: props.location
//                       }
//                     }
//                   } />
//             }
//         }
//     }
//         />
//     )
// }