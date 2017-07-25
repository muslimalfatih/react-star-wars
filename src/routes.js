import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import PageIndex from './components/pageIndex.js';
import PageDetail from './components/pageDetail.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex} />
    <Route path="people/:id" component={PageDetail}/>
  </Route>
);
