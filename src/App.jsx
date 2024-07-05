import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
        <Work />
      </div>
    </>
  );
}

export default App;
