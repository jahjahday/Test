import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Artist from './Artist'
import Tweets from './Tweets';
import Albums from './Albums';
import './App.css';

function App() {

return (
    <Router>
      <div>
         <nav>
          <ul>
            <li>
            <button>
            <Link to = "/">Home</Link>
            </button>
            </li>
            <li>
            <button>
            <Link to = "/artist">Artist</Link>
            </button>
            </li>
            <li>
            <button>
            <Link to = "/albums">Albums</Link>
            </button>
            </li>
            <li>
            <button>
            <Link to = "/tweets">Tweets</Link>
            </button>
            </li>
          </ul>
         </nav>
      </div>

      <Switch>
        <Route path = "/artist" exact>
          <Artist />
        </Route>
        <Route path = "/albums" exact>
          <Albums />
        </Route>
        <Route path = "/tweets" exact>
          <Tweets />
        </Route>
      </Switch>
      </Router>
  )
}

export default App;
