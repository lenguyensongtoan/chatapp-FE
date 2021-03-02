import React from "react";

function Link() {
  return (
    <ul className="link">
      <li className="link--active">
        DIRECT
        <span class="item__badge"></span>
      </li>
      <li>
        GROUP
        <span class="item__badge"></span>
      </li>
      <li>
        PUBLIC
        <span class="item__badge"></span>
      </li>
    </ul>
  );
}

export default Link;
