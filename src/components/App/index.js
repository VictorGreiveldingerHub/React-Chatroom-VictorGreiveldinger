// == Import npm
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// == Import
import Chat from 'src/components/Chat';
import SignForm from 'src/components/SignForm';
import './styles.css';

// == Composant
const App = () => {

  return (
    <div className="app">
     <Switch>
       <Route exact path="/">
        <SignForm />
       </Route>
       <Route exact path="/chat">
         <Chat />
       </Route>
     </Switch>
    </div>
  );
};

// == Export
export default App;
