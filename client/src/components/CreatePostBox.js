import React from "react";
import "../components_stylesheets/CreatePostBox.css";

function CreatePostBox() {
  return (
    <div className="card card__box mx-auto">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <div className="mx-2 d-flex align-items-center">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile_pic"
              className="post_box_image"
            />
          </div>
          <div className="col-10 pl-0 d-flex align-items-center">
            <input
              class="form-control post__input"
              type="search"
              placeholder="Share your feast"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-end mr-2">
          <div className="col-1">
            <span className="post__icon">
              <i className="far fa-images"></i>
            </span>
          </div>
          <div className="col-1">
            <span className="post__icon">
              <i className="fas fa-video"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePostBox;
