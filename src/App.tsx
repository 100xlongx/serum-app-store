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

const headerColor = '#1e2423';
const backgroundColor = '#161b19'

function App() {
  return (
    <Pane className='app' backgroundColor={backgroundColor}>
      <Header />
      <InformationContainer/>
      <OverviewContainer/>
      <Footer/>
    </Pane>
  );
}

export default App;
