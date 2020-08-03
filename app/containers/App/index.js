/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import NotFoundPage from 'containers/NotFoundPage/';
import Dashboard from 'containers/Dashboard/';
import UserPage from 'containers/UserPage';
import UserView from 'containers/UserView';
import QuestionPage from 'containers/QuestionPage';
import QuestionView from 'containers/QuestionView';
import QuestionListPage from 'containers/QuestionListPage';
import QuestionListView from 'containers/QuestionListView';
import ProblemPage from 'containers/ProblemPage';
import ProblemView from 'containers/ProblemView';
import LoginPage from 'containers/LoginPage';
import LeaderboardPage from 'containers/LeaderboardPage';
import CheckinPage from 'containers/CheckinPage';
import InterviewPage from 'containers/InterviewPage';
import PrivateRoute from '../../components/PrivateRoute';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          layout={Dashboard}
          component={UserPage}
          title="Users Management"
        />
        <PrivateRoute
          path="/user/:id"
          layout={Dashboard}
          component={UserView}
        />
        <PrivateRoute path="/user" layout={Dashboard} component={UserPage} />
        <PrivateRoute
          path="/question/:id"
          layout={Dashboard}
          component={QuestionView}
        />
        <PrivateRoute
          path="/question"
          layout={Dashboard}
          component={QuestionPage}
        />
        <PrivateRoute
          path="/questionlist/:id"
          layout={Dashboard}
          component={QuestionListView}
        />
        <PrivateRoute
          path="/questionlist"
          layout={Dashboard}
          component={QuestionListPage}
        />
        <PrivateRoute
          path="/problem/:id"
          layout={Dashboard}
          component={ProblemView}
        />
        <PrivateRoute
          path="/problem"
          layout={Dashboard}
          component={ProblemPage}
        />
        <PrivateRoute
          path="/interview"
          layout={Dashboard}
          component={InterviewPage}
        />
        <PrivateRoute
          path="/leaderboard"
          layout={Dashboard}
          component={LeaderboardPage}
        />
        <PrivateRoute
          path="/checkin"
          layout={Dashboard}
          component={CheckinPage}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
}
