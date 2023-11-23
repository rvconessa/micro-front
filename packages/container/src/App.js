import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'

import Header from './components/Header'
import Progress from './components/Progress';

const maketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory()

export default () => {
    const [isSingIn, setIsSingIn] = useState(false);

    useEffect(() => {
      if(isSingIn) {
        history.push('/dashboard')
      }
    }, [isSingIn])

    return (
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Header isSignedIn={isSingIn} onSignOut={() => setIsSingIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                  <AuthLazy onSingIn={() => setIsSingIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSingIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={maketingLazy} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    )
}
