import React from "react";
import Phone from "../../styles/images/call.svg";
import More from "../../styles/images/menu.svg";
import Camera from "../../styles/images/video-camera (2).svg";

function CardProfile() {
  return (
    <div className="card-profile mr-2 justify-around">
      <div className="d-flex align-items-center">
        <div className="card__img">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          ></img>
        </div>
        <div className="card__content">
          <span className="card__content--name">Ankit Mishra</span>
          <span className="card-profile__content--res">
            Last seen 3 minutes ago
          </span>
        </div>
      </div>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li type="button" className="card--item">
          <Phone />
        </li>
        <li type="button" className="card--item">
          <Camera />
        </li>
        <li type="button" className="card--item drop-down">
          <More />
          <ul className="drop-down-content">
            <li>
              <p>Leave Conversation</p>
              <i aria-hidden className="fas fa-sign-out-alt"></i>
            </li>
            <li>
              <p>Delete Conversation</p>
              <i aria-hidden className="fa fa-trash"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default CardProfile;
