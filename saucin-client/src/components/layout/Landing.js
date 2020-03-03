import React from 'react';

const Landing = () => {
  return (
    <section className="landing">
      <div className="overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to Saucinwithsnyds</h1>
          <p className="lead">Join the community</p>
          <div className="buttons">
            <a href="register.html" className="btn btn-success">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
