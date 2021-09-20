import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'

const Header = ({ authedUser, users }) => (
    <nav className="navbar">
      <div className="navbar-container">
          <ul className = "nav-menu active" >
            <li className = "nav-item">
              <Link  className = "nav-links" to="/">HOME</Link>
            </li>
            <li className = "nav-item">
              <Link className = "nav-links" to="/add">NEW QUESTION</Link>
            </li>
            <li className = "nav-item">
              <Link className = "nav-links" to="/leaderboard">LEADERBOARD</Link>
            </li>
            </ul>
          <ul className="right">
            <li>
              {authedUser === null ? (
                <Link to="/login">
                  LOGIN 
                </Link>
              ) : (
                <span>
                  <img
                    className="profile-images"
                    src={users[authedUser].avatarURL}
                    alt="profile"
                  />
                  <span className = 'profile-name'>
                    {users[authedUser].name}
                  </span>
                  <Link className = "logout"  to="/logout">
                    LOGOUT
                  </Link>
                </span>
              )}
            </li>
          </ul>
      </div>
    </nav>
);

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Header);
