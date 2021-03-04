import React from "react";
function Modal({ setShow }) {
  const close = () => {
    setShow(false);
  };
  const onSubmit = () => {
    setShow(false);
  };
  return (
    <div className="modal-wrap">
      <div className="modal pa-4">
        <div className="d-flex justify-end">
          <i aria-hidden onClick={close} className="button fa fa-close"></i>
        </div>
        <div className="modal__header mb-2">
          <input
            className="search__box"
            defaultValue="Conversation Name"
            placeholder="Input group name"
            autoFocus
          />
        </div>
        <div className="modal__content">
          <div className="d-flex justify-around">
            <div className="search__container">
              <i aria-hidden className="fa fa-search search__icon"></i>
              <input
                className="search__box"
                type="search"
                name="search"
                placeholder="Type names or emails"
              />
            </div>
            <button className="button card__content--btn">Add</button>
          </div>
          <div className="mt-3">
            <p>Start Conversation with</p>
            <ul className="modal__group">
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>{" "}
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>{" "}
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>
              <li>
                <div className="modal__group--item card mt-2 mr-2 d-flex justify-around">
                  <div className="card__img">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    ></img>
                  </div>
                  <div className="card__content">
                    <span className="card__content--name">Ankit Mishra</span>
                  </div>
                  <i aria-hidden className="fa fa-trash"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-end">
          <button
            onClick={onSubmit}
            className="modal__btn card__content--btn mt-4"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
