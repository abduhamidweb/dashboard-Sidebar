import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Setting from "../../Pages/Settings/index.jsx";
import Problems from "../../Pages/Problems/index.jsx";
import "./style.css";
import AllSelect from "./AllSelect";
const Sidebar = () => {
  const toggle = useRef();

  let main = useRef();
  let navigatino = useRef();
  useEffect(() => {
    //     toggle.current.onClick(() => {
    //       console.log(1)
    //   })
  }, []);

  return (
    <>
      <div className=" min-hight">
        <div className="navigation" ref={navigatino}>
          <ul className="sidebar-list">
            <AllSelect
              spanClass="icon"
              iconClass="bi bi-apple"
              spanClassName="title"
              itemName="Brend name"
              link="/home"
            />

            <AllSelect
              spanClass="icon"
              iconClass="bi bi-house-door"
              spanClassName="title"
              itemName="Dashboard"
              link="/dashboard"
            />
            <AllSelect
              spanClass="icon"
              iconClass="bi bi-gear"
              spanClassName="title"
              itemName="Setting"
              link="/setting"
            />
            <AllSelect
              spanClass="icon"
              iconClass="bi bi-patch-question"
              spanClassName="title"
              itemName="Problems"
              link="/problems"
            />
          </ul>
        </div>
      </div>
      {/* Navbar */}
      <div className="mainn" ref={main}>
        <div className="topbar">
          <div
            className="toggle "
            onClick={() => {
              navigatino.current.classList.toggle("active");
              main.current.classList.toggle("active");
            }}
            ref={toggle}
          >
            <i className="bi bi-list "></i>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="search here" />
              <i className="bi bi-search"></i>
            </label>
          </div>
          <div className="user">
            <img src="https://picsum.photos/100/100" alt="dmka" />
          </div>
        </div>
        {
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/problems" element={<Problems />} />
          </Routes>
        }
      </div>
    </>
  );
};

export default Sidebar;
