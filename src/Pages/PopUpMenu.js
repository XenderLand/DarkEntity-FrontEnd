import React from "react";
import { Link } from "react-router-dom";

const PopUpMenu = ({ links }) => {
  return (
    <div className="pop-up-menu">
      {links.map((link, index) => (
        <Link key={index} to={link.path} className="pop-up-link">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default PopUpMenu;
