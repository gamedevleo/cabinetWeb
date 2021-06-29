import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Menu} from './Components/Menu';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
