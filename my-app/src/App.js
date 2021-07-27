import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aurora from './components/Aurora';
import Beach from './components/Beach';
import Forest from './components/Forest';
import Jungle from './components/Jungle';
import Lake from './components/Lake';
import Milky from './components/Milky';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Galeria</h1>
      </div>
      <Route path="/aurora" component={Aurora} />
      <Route path="/beach" component={Beach} />
      <Route path="/forest" component={Forest} />
      <Route path="/jungle" component={Jungle} />
      <Route path="/lake" component={Lake} />
      <Route path="/milky" component={Milky} />
      <Navegacion/>
    </Router>
  );
}
export default App;

