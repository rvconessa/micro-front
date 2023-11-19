import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';


import Header from './components/Header'
import Progress from './components/Progress';

const maketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
    const [isSingIn, setIsSingIn] = useState(false)
    return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header isSignedIn={isSingIn} onSignOut={() => setIsSingIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                  <AuthLazy onSingIn={() => setIsSingIn(true)} />
              </Route>
              <Route path="/" component={maketingLazy} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    )
}
