import React from "react";
import Mail from "../../styles/images/envelope.svg";
import Phone from "../../styles/images/call.svg";
import Chat from "../../styles/images/chat.svg";
import Group from "../../styles/images/group.svg";
function AppBar() {
  return (
    <ul className="app-bar mt-4">
      <li type="button" class="app-bar--item">
        <Chat />
        <span class="icon-button__badge">3</span>
      </li>
      <li type="button" class="app-bar--item">
        <Phone />
        {/* <span class="icon-button__badge"></span> */}
      </li>
      <li type="button" className="app-bar--item">
        <Mail />
        <span class="icon-button__badge">4</span>
      </li>
      <li type="button" class="app-bar--item">
        <Group />
        {/* <span class="icon-button__badge"></span> */}
      </li>
      <li className="app-bar--img">
        <img src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
      </li>
    </ul>
  );
}

export default AppBar;
