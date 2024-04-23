import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage/myHomepage';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'/>
          <Homepage />
        <Route/>
      </Switch>
    </div>
  )
}

export default Routes