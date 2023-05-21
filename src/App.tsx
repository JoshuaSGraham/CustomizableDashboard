import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from './Components/grid/Grid';
import { WidgetsSideBar } from './Components/widgetsSideBar/WidgetsSideBar'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <ProSidebarProvider>
    <div className="App">
      <WidgetsSideBar />
      <Grid />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </ProSidebarProvider>
  );
}

export default App;
