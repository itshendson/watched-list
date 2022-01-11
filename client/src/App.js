import logo from './logo.svg';
import Card from './Component/Card/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Card />
    </div>
  );
}

export default App;
