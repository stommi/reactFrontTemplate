import React from 'react';
import '../../styles/App.css';
import Sidebar from "../sidebar/Sidebar";
import TopPanel from "../panel/TopPanel";
import LeftTopCorner from "../panel/LeftTopCorner";

function App() {
  return (
    <div className="App">

      <header className="App-header">

          <LeftTopCorner/>
          <TopPanel/>
          <Sidebar/>

      </header>

    </div>
  );
}

export default App;
