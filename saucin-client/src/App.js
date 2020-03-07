import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Instagram from './components/socials/Instagram';
import YouTube from './components/socials/YouTube';
import Recipes from './components/recipes/Recipes';
import Store from './components/e-commerce/Store';
import PrivateRoute from './components/routing/PrivateRoute';
import Footer from './components/layout/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/instagram" component={Instagram} />
              <PrivateRoute exact path="/youtube" component={YouTube} />
              <PrivateRoute exact path="/recipes" component={Recipes} />
              <PrivateRoute exact path="/store" component={Store} />
              <PrivateRoute
                exact
                path="/admin-dashboard"
                component={AdminDashboard}
              />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
          </section>
          <Route exact path="/" component={Footer} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
