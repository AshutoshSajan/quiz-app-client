import React, { Component } from 'react';
import './assets/stylesheets/App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import Home from './app/containers/Home';
import Login from './user/containers/Login';
import Register from './user/containers/Register';
// import ListQuiz from './quiz/containers/ListQuiz';
// import Header from './app/containers/Header';
import Header from './app/componets/Header';

// import Footer from './app/containers/Footer';
import AdminDashboard from './admin/containers/AdminDashboard';
import UserDashboard from './user/containers/UserDashboard';
import PrivateRoute from './app/componets/PrivateRoute';
import ListQuiz from './quiz/containers/ListQuiz';

const BASE_URL = 'http://localhost:8000/api/v1';

class App extends Component {
  state = {};

  componentDidMount = () => {
    const { jwt } = localStorage;

    if (jwt) {
      this.fetchData(BASE_URL + '/users/me', jwt);
    } else if (!jwt) {
      this.props.history.push('/users/login');
    }
  };

  fetchData = (url, jwt) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'user auto login data');
        if (data.success) {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
          }
          this.props.dispatch({ type: 'LOGIN', payload: data });
          if (data.user.isAdmin) {
            // this.props.history.push('/users/admin');
          } else {
            // this.props.history.push('/users');
          }
        }
        if (!data.success) {
          // this.props.history.push('/users/login');
        }
      })
      .catch(err => {
        console.log(err, 'catch err');
      });
  };

  render() {
    const { user } = this.props;
    console.log(user, 'app props....');

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/users/login' component={Login} />
          <Route path='/users/register' component={Register} />
        </Switch>
        {user && user.isAdmin ? <AdminDashboard /> : <UserDashboard />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'app map state...');
  return state.user;
}

export default withRouter(connect(mapStateToProps)(App));
