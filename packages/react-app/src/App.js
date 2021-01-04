import logo from "./logo.svg";
import "./App.css";

import { AlertButton, ToggleButton } from "shared-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Shared Components</h1>
      <AlertButton />
      &nbsp;
      <ToggleButton />
    </div>
  );
}

export default App;
