import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Homepage from './prismic_pages/Homepage';
import Page from './prismic_pages/Page';
import Preview from './preview/Preview';
import {apiEndpoint} from './prismic-config'
import Error_404 from './error_pages/Error_404';
import ErrorGeneric  from './error_pages/ErrorGeneric';

//Root component of application
const App = () => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];
  
  return (
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/preview' component={Preview} />
            <Route exact path="/"> 
              <Redirect to="/en-gb" />
            </Route>
            <Route exact path='/:lang' component={Homepage} />
            <Route exact path='/:lang/:uid' component={Page} />
            <Route component={Error_404} />
            <Route component = {ErrorGeneric} />
          </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;