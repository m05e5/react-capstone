import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './redux/configureStore';
import Regions from './components/Regions';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route exact path="/">
            <Provider store={store}>
              <Home />
            </Provider>
          </Route>
          <Route path="/regions">
            <Provider store={store}>
              <Regions />
            </Provider>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
