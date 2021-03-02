import React from "react";

function CardNotification() {
  return (
    <div className="card-notification">
      <div className="card-notification__img">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        ></img>
      </div>
      <div className="card-notification__content">
        <p className="card-notification__content--name">
          @Ankit{" "}
          <span className="card-notification__content--res">
            mention you in "Trip to Go"
            <p className="card-notification__content--time">5 mins ago</p>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardNotification;
