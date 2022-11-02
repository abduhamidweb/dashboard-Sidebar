import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const AllSelect = ({ iconClass, spanClass, spanClassName, itemName, link }) => {
  let Links = useRef();

  let AllListSidebar = [
    {
      icon: iconClass,
      span1: spanClass,
      span2: spanClassName,
      itemName: itemName,
      too: link,
    },
  ];
  return (
    <>
      {AllListSidebar.map((item, index) => {
        return (
          <>
            <li ref={Links}>
              <NavLink
                to={item.too}
                className={({ isActive }) =>
                  isActive ? "activeLink text-primary" : ""
                }
              >
                <span className={item.span1}>
                  <i className={item.icon}></i>
                </span>
                <span className={item.span2}>{item.itemName}</span>
              </NavLink>
            </li>
          </>
        );
      })}
    </>
  );
};

export default AllSelect;
