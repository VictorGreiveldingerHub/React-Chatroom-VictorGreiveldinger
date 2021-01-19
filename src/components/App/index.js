// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// == Import
import Chat from 'src/components/Chat';
import SignForm from 'src/components/SignForm';
import './styles.css';

// == Composant
const App = () => {
  const nickname = useSelector((state) => state.nickname);
  
  return (
    <div className="app">
     <Switch>
        <Route exact path="/">
        <SignForm />
        </Route>
        <Route
          exact
          path="/chat"
          render={() => {
            if (nickname === '') {
              return <Redirect to='/' />
            }
              return <Chat />
          }}
        />
        <Route>404</Route>
     </Switch>
    </div>
  );
};

// == Export
export default App;
