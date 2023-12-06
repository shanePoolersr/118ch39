import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>This is my app component</h1>
      </header>
    </div>
  );
}

export default App;
