import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
    return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    )
}
