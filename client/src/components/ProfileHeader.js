// Import Libraries
import React from "react";
import { FaUserEdit } from "react-icons/fa";

// Import Styles
import "../components_stylesheets/ProfileHeader.css";

// Import Data
import user from "../FakeData/user";

const ProfileHeader = () => {
  return (
    <div className="row profile__header ">
      <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center mt-3 justify-content-lg-center mb-3 mb-lg-0">
        <div className="profile__image_container">
          <img src={user.image} alt={user.name} className="profile__image" />
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="col-12 col-lg-9 d-flex flex-column justify-content-center px-5 px-lg-0 mx-auto">
        <div className="row">
          <div className="col-12 col-lg-4 m-0 profile_name">
            <h3 className="profile__name">{user.name}</h3>
            <p className="profile__username">@{user.username}</p>
          </div>
        </div>
        <div className="">
          <div className="profile_contact">
            <p>Super duper cook, that cook delicious recepis.</p>
            {/* <p>
              <span className="profile__labels">Email: </span>
              {user.email}
            </p> */}
            {/* <p>
              <span className="profile__labels">Address: </span>
              {user.address}
            </p>
            <p>
              <span className="profile__labels">Phone: </span>
              {user.number}
            </p> */}
          </div>
        </div>
      </div>
      <div className="edit__profile">
        <FaUserEdit /> Edit Profile
      </div>
    </div>
  );
};

export default ProfileHeader;
