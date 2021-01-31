import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Layout from './component/Layout/Layout';
import HomePage from './containers/mainpage/homepage';
import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <React.Fragment>

      <Layout >
      
        <Switch>
          <Route  path="/todoList"  component={TodoList} />
          <Route  path="/" exact component={HomePage} />
        </Switch>
      </Layout>

    </React.Fragment>
  );
}

export default App;
