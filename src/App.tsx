import React from 'react';
import './App.css';

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./Components/Header";
import OverviewContainer from "./Components/OverviewContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <OverviewContainer/>
    </div>
  );
}

export default App;
