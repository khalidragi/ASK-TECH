import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-body">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
