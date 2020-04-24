import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-body">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
