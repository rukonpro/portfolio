import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';



function App() {


  return (
    <main className='headerBg' >
      <Navigation />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
