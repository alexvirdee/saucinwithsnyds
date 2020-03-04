import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section>
            <Alert />
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
          <Route exact path="/" component={Footer} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
