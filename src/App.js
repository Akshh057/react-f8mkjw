import React from 'react';
import './style.css';
import Resource from './Resource';
import ResourceId from './ResourceId';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/resources" component={Resource} />
          <Redirect from="/" to="/resources" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
