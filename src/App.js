import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomeGifs from './components/HomeGifs';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
       <Header/>
       <Search/>
       <HomeGifs/>

    </div>
  );
}

export default App;
