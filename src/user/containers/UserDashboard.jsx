import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PlayQuiz from '../../quiz/components/PlayQuiz';
import ListQuiz from '../../quiz/containers/ListQuiz';
import ErrorPage from '../../app/componets/ErrorPage';
import Score from '../../score/components/Score';

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={PlayQuiz} />
          <Route exact path='/quizzes/list-quiz' component={ListQuiz} />
          <Route path='/users/score' component={Score} />
          <Route path='/*' component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default UserDashboard;
