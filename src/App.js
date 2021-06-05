import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Menu} path="/menu" />
            <Route exact component={About} path="/about" />
            <Route exact component={Location} path="/location" />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
