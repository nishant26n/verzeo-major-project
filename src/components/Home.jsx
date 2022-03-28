import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="background-img">
        <div className="banner">
          <div className="container w-50">
            <h1>Travelling Desire</h1>
            <p>
              Sometimes we experience wanderlust because we want to get away
              from the familiar, and travel represents the best way to do it. If
              you're feeling the urge to pack up your life and run to somewhere
              else, there are good scientific reasons for that sensation, from a
              need for novelty to a potential genetic "push".
            </p>
            <NavLink to="/blogs">
              <button className="explore-btn">My blogs</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
