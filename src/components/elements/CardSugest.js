import React from "react";

function CardSugest() {
  return (
    <div className="card-suggest">
      <div className="card__img">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        ></img>
      </div>
      <div className="card__content">
        <span className="card__content--name">Ankit Mishra</span>
        <span className="card__content--res">15 Mutual</span>
      </div>
      <button className="button button-sm card__content--btn">
          <p>Add</p>
      </button>
    </div>
  );
}

export default CardSugest;
