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
// import Profile from './components/profile/Profile';
import CommunityPosts from './components/communityposts/CommunityPosts';
import CommunityPostsCooking from './components/communityposts/CommunityPostsCooking';
import CommunityPostsLifestyle from './components/communityposts/CommunityPostsLifestyle';
import CommunityPostsGeneral from './components/communityposts/CommunityPostsGeneral';
import CommunityPost from './components/communitypost/CommunityPost';
import Blog from './components/blog/Blog';
import BlogPost from './components/blogpost/BlogPost';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import CreateRecipe from './components/profile-forms/CreateRecipe';
import CreateBlogPost from './components/profile-forms/CreateBlogPost';
import CreateCommunityPost from './components/profile-forms/CreateCommunityPost';
import Instagram from './components/socials/Instagram';
import YouTube from './components/socials/YouTube';
import Recipes from './components/recipes/Recipes';
import RecipesBreakfast from './components/recipes/RecipesBreakfast';
import RecipesLunch from './components/recipes/RecipesLunch';
import RecipesDinner from './components/recipes/RecipesDinner';
import RecipesDessert from './components/recipes/RecipesDessert';
import Recipe from './components/recipe/Recipe';
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
              {/* <PrivateRoute
                exact
                path="/profile/user/:id"
                component={Profile}
              /> */}
              <PrivateRoute exact path="/blog" component={Blog} />
              <PrivateRoute exact path="/blogposts/:id" component={BlogPost} />
              <PrivateRoute exact path="/instagram" component={Instagram} />
              <PrivateRoute exact path="/youtube" component={YouTube} />
              <PrivateRoute exact path="/recipes" component={Recipes} />
              <PrivateRoute exact path="/recipes/breakfast" component={RecipesBreakfast} />
              <PrivateRoute exact path="/recipes/lunch" component={RecipesLunch} />
              <PrivateRoute exact path="/recipes/dinner" component={RecipesDinner} />
              <PrivateRoute exact path="/recipes/dessert" component={RecipesDessert} />
              <PrivateRoute exact path="/recipes/:id" component={Recipe} />
              <PrivateRoute exact path="/store" component={Store} />
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
              <PrivateRoute
                exact
                path="/create-recipe"
                component={CreateRecipe}
              />
              <PrivateRoute
                exact
                path="/create-community-post"
                component={CreateCommunityPost}
              />
              <PrivateRoute
                exact
                path="/create-blog-post"
                component={CreateBlogPost}
              />
              <PrivateRoute
                exact
                path="/communityposts"
                component={CommunityPosts}
              />
                 <PrivateRoute
                exact
                path="/communityposts/category/cooking"
                component={CommunityPostsCooking}
              />
              <PrivateRoute
              exact
              path="/communityposts/category/lifestyle"
              component={CommunityPostsLifestyle}
              />
               <PrivateRoute
                exact
                path="/communityposts/category/general"
                component={CommunityPostsGeneral}
              />
                <PrivateRoute
                exact
                path="/communityposts/:id"
                component={CommunityPost}
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
