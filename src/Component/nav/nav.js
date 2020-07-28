import React from "react";
import "./nav.css";

function Nav() {
  const clicknav = () => {
    let nav = document.getElementById("main-nav");
    // let slowmo = document.getElementById("slowmo");

    nav.classList.toggle("is-open");
    // nav.classList.toggle("is-slowmo");
  };

  return (
    <>
      <button id="burger" onClick={clicknav} className="open-main-nav">
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <div className="container">
        <nav className="main-nav" id="main-nav">
          <ul>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Info</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
