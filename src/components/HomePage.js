import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Header";
import "../css/HomePage.css";
const HomePage = () => {
  return (
    <React.Fragment>
      <div className="container containerCss">
        <Header />
        <div className="container titleContainer">
          <div className="row">
            <h1 className="Title1">Welcome To Our Studio!</h1>
          </div>
          <div className="row">
            <h1 className="Title2">IT'S NICE TO MEET YOU</h1>
          </div>
          <button type="button " className="button">
            TELL ME MORE
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
