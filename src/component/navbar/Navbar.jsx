import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navBgChange = () => {
    if (window.scrollY < 272) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", navBgChange);

  return (
    <div className="maindiv">
      <div className={navbar ? "navdiv2" : "navdiv"}>
        <h3>Netflix</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
