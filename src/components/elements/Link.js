import React from "react";

function Link() {
  return (
    <ul className="link">
      <li className="link--active">
        DIRECT
        <span className="item__badge"></span>
      </li>
      <li>
        GROUP
        <span className="item__badge"></span>
      </li>
      <li>
        PUBLIC
        <span className="item__badge"></span>
      </li>
    </ul>
  );
}

export default Link;
