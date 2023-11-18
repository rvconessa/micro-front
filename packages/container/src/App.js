import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';


import Header from './components/Header'
import Progress from './components/Progress';

const maketingLazy = lazy(() => import('./components/MarketingApp'));
const authLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
    return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={maketingLazy} />
              <Route path="/" component={authLazy} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    )
}
