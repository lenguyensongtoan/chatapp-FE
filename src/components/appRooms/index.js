import React, { useState } from "react";
import AppBar from "../elements/AppBar";
import Link from "../elements/Link";
import SearchBox from "../elements/Searchbox";
import Card from "../elements/Card";
import Modal from "components/elements/Modal";
const AppRooms = () => {
  const [isShow, setShow] = useState(false);
  const handleSubmit = () => {
    setShow(!isShow);
  };
  return (
    <div className="app-left pt-3">
      <AppBar />
      <div className="app-left__tool">
        <div className="app-left-header ml-3 d-flex justify-between">
          <h1>Chats</h1>
          <button onClick={handleSubmit} className="btn-add">
            +
          </button>
        </div>
        <div className="mt-2">
          <Link />
        </div>
        <div className="mx-3 mt-3">
          <SearchBox />
        </div>
      </div>
      <div className="app-left__chat-list mx-3 mt-3">
        <Card active />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {isShow && <Modal setShow={setShow} />}
    </div>
  );
};

export default AppRooms;
