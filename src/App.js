import React from 'react';
import Main from './components/pages/main.page';
import Favorites from './components/pages/favorites.page';
import NotFound from './components/pages/404.page';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Toggle from 'react-toggle'
import { connect } from 'react-redux';
import {toggleMetric} from './redux/actions';
import './themes/toggle.scss';


function App({isMetric, changeTempType}) {
  return (
    <>
      <Router>
        <Navbar bg="light" expand="sm">
          <Link className="navbar-brand" to="/main">Weather</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"  style={{alignItems: 'center'}}>
              <Link className="nav-link" to="/main">Main</Link>
              <Link className="nav-link" to="/favorites">Favorites</Link>
              <Toggle
                defaultChecked={isMetric}
                icons={{
                  checked: 'C',
                  unchecked: 'F',
                }}
                onChange={() => changeTempType()} />
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
          
          <Route path="/main/:city/:cityid">
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

  );
}


export default connect(
  function(state) {
    return {
        isMetric: state.isMetric
    }
},
function(dispatch) {
    return {
        changeTempType: () => dispatch(toggleMetric()),
    }

})(App);
