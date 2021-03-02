import React from "react";

function Card({ active }) {
  let cardActive = "";
  if (active) {
    cardActive = "card--active";
  } else {
    cardActive = "";
  }
  return (
    <div className={`card mt-2 ${cardActive}`}>
      <div className="card__img">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        ></img>
      </div>
      <div className="card__content">
        <span className="card__content--name">Ankit Mishra</span>
        <span className="card__content--res">Are we meeting today?llllll</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <p className="card__content--time">3:40 PM</p>
        <p className="card__content--number">2</p>
      </div>
    </div>
  );
}

export default Card;
