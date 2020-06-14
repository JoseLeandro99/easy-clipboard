import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './pages/List';
import Form from './pages/Form';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={List}/>
      <Route path='/new' component={Form}/>
    </Switch>
  );
}

export default Routes;
