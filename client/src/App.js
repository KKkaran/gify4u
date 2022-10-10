import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Signup from './components/UserSignup/Signup';
import Login from './components/UserSignup/Login';
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
import Dashboard from './components/Dashboard'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App bg-dark" style={{height:'100vh',position:'relative'}}>
        <Router>
          <div>
            <Header/>
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          </div>
          <Footer/>
        </Router>
      </div>
    </ApolloProvider>
    
  );
}

export default App;
