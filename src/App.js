import React from 'react';
import Main from './components/pages/main.page';
import Favorites from './components/pages/favorites.page';
import NotFound from './components/pages/404.page';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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

        <Navbar bg="light" expand="lg">
          <Link className="navbar-brand" to="/main">Weather</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Link className="nav-link" to="/main">Main</Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>

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
