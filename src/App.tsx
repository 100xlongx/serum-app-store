import React from 'react';
import './App.css';

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./Components/Bars/Header";
import OverviewContainer from "./Components/OverviewContainer";

import { Pane } from 'evergreen-ui';
import InformationContainer from './Components/InformationContainer';
import Footer from './Components/Bars/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const headerColor = '#1e2423';
const backgroundColor = '#161b19'

function App() {
  return (
    <Router>
      <Pane className='app' backgroundColor={backgroundColor}>
        <Header />
        <InformationContainer/>

        <Switch>
          <Route exact path="/">
            <OverviewContainer/>
          </Route>
          <Route path="/socials">
            <p>ok</p>
          </Route>
        </Switch>

        <Footer/>
      </Pane>
    </Router>
  );
}

export default App;
