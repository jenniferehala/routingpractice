import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Redirect from './views/Redirect';
import Color from './views/Color';


function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <p>
          <Link to="/">Home</Link>
        </p>
        <Switch>
          {/* 1.  WELCOME heading */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* 2 & 3.  Display the Number/Word */}
          <Route exact path="/:query">
            <Redirect />
          </Route>
          {/* 4. localhost:3000/hello/blue/red: This should display word in {color1} text with a {color2} background.*/}
          <Route exact path="/:word/:color1/:color2">
            <Color />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}


export default App;
