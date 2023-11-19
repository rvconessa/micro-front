import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SignIn from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSingIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSingIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSingIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
