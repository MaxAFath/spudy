import logo from './logo.svg';
import './App.css';
import './components/Nav';
import './components/About';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
