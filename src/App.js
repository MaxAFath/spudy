import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
