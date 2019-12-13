import React from 'react';
import Main from './components/pages/main.page';
import Favorites from './components/pages/favorites.page';
import NotFound from './components/pages/404.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>

      
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/main">Weather</Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to="/main">Main</Link>
              </li>
              <li class="nav-item active ">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/main">
            <Main />
          </Route>

          <Route exact path="/favorites">
            <Favorites />
          </Route>

          <Route path="**">
            <NotFound />
          </Route>  
        </Switch>
    </Router>
  </>

    // <div className="App">
    //   <header className="App-header">
        
    //   </header>

    // </div>
  );
}

export default App;
