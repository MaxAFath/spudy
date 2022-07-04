import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
