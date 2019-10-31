import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store'
import MainTemplate from 'templates/MainTemplate';
import Projects from 'views/Projects';
import ProjectDetails from 'views/ProjectDetails';
import Test from 'views/Test';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.projects} />} />
          <Route exact path={routes.projects} component={Projects} />
          <Route path={routes.project} component={ProjectDetails} />
          <Route exact path={routes.test} component={Test} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
