import React from "react";
import "../css/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <React.Fragment>
      <div className="container headerCss">
        <div className="row rowCss">
          <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-10 col-sm-10 first">
            Start Bootstrap
          </div>
          <div className="col col1"> SERVICES</div>
          <div className="col col2">PORTFOLIO</div>
          <div className="col col3">ABOUT</div>
          <div className="col col4">TEAM</div>
          <div className="col col5">CONTACT</div>
          <div className="dropdown col">
            <button
              // className="menuButton dropdown-toggle"
              className="btn btn-secondary dropdown-toggle menuButton"
              type="button"
              id="dropdownDark"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MENU
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownDark">
              <li>
                <a href="#" className="dropdown-item">
                  First item
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Second item
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Third item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
