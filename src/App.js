import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/about',
    children: <About />
  },
  {
    path: '/users',
    children: <Users />
  }
]

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {routes.map((el) => {
            return (
              <Route {...el} />
            )
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;