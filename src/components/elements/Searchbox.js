import React from "react";

function Searchbox() {
  return (
    <div className="search__container">
      <i aria-hidden className="fa fa-search search__icon"></i>
      <input
        className="search__box"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  );
}

export default Searchbox;
