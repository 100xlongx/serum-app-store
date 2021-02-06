import React from 'react';
import './App.css';

import Header from "./Components/Bars/Header";
import OverviewContainer from "./Components/OverviewContainer";

import { Pane } from 'evergreen-ui';
import InformationContainer from './Components/InformationContainer';
import Footer from './Components/Bars/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TwitterContainer from './Components/Socials/TwitterContainer';
import MediumContainer from './Components/Socials/MediumContainer';


// const headerColor = '#1e2423';
const backgroundColor = '#161b19'

function App() {
  return (
    <Router>
      <Pane className='app' backgroundColor={backgroundColor}>
        <Header />
        {/* <InformationContainer/> */}
        <Switch>
          <Route exact path="/">
            <OverviewContainer/>
          </Route>
          <Route path="/twitter">
            <TwitterContainer/>
          </Route>
          <Route path="/medium">
            <MediumContainer/>
          </Route>
        </Switch>

        <Footer/>
      </Pane>
    </Router>
  );
}

export default App;
