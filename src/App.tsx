import React from 'react';
import './App.css';

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./Components/Header";
import OverviewContainer from "./Components/OverviewContainer";

import { Pane } from 'evergreen-ui';

function App() {
  return (
    <Pane backgroundColor='aliceblue' className="App">
      <Header />
      <OverviewContainer/>
    </Pane>
  );
}

export default App;
