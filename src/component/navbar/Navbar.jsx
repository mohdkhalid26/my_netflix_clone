import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  // const [data, setData] = useState();
  const navBgChange = () => {
    if (window.scrollY < 272) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  // async function fetchFunc() {
  //   const response = await fetch(
  //     "https://api.themoviedb.org/3/movie/157336?api_key=c5015bea875b5c931fdf26b9282565c3&append_to_response=videos,images"
  //   );
  //   const data2 = await response.json();
  //   setData([data2]);
  //   console.log(data);
  // }

  window.addEventListener("scroll", navBgChange);

  return (
    <div className="maindiv">
      <div className={navbar ? "navdiv2" : "navdiv"}>
        <h3>Netflix</h3>
        <div className="navlist">
          <NavLink className={navbar ? "li2" : "li"} to="/">
            Home
          </NavLink>
          <NavLink className={navbar ? "li2" : "li"} to="/about">
            About
          </NavLink>
          <NavLink className={navbar ? "li2" : "li"} to="/contact">
            Contact us
          </NavLink>
        </div>
      </div>
      {/* <div>
        <h1>fetch data</h1>
        <h1>fetch data</h1>
        <h1>fetch data</h1>
        {data
          ? data.map((data2, index) => (
              <div key={index}>
                <img
                  src={data[index].images.backdrops[0].file_path}
                  alt="img"
                  width="27px"
                />
              </div>
            ))
          : null}{" "}
        <button onClick={fetchFunc}>fetch</button>
      </div> */}
    </div>
  );
}
export default Navbar;
