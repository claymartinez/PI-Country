import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries/:id" component={Detail} />
      <Route exact path="/form" component={Form} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
