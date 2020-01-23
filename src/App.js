import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Page from './pages/Page';
import Preview from './pages/Preview';
import {apiEndpoint} from './prismic-config'



const App = () => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  console.log(repoNameArray)
  const repoName = repoNameArray[1];
  console.log(repoName)
  
  
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
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;