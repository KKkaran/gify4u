import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeGifs from './components/HomeGifs';
import Search from './components/Search';
import Results from './components/Results';
import Main from './components/Main';
import Signup from './components/UserSignup/Signup';
import Login from './components/UserSignup/Login';
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Header/>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer/>
      </Router>
      

    </div>
  );
}

export default App;
