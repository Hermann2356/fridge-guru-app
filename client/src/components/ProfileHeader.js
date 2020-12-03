import React, {useState} from "react";
import { FaUserEdit } from "react-icons/fa";
import "../components_stylesheets/ProfileHeader.css";
import user from "../FakeData/user";

function ProfileHeader(props) {

    return (
    <div className="row profile__header ">
      <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center mt-3 justify-content-lg-center mb-3 mb-lg-0">
        <div className="profile__image_container">
          <img src="/public/assets/HeadShot.jpg" alt={props.username} className="profile__image" />
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="col-12 col-lg-9 d-flex flex-column justify-content-center px-5 px-lg-0 mx-auto">
        <div className="row">
          <div className="col-12 col-lg-4 m-0 profile_name">
            <h3 className="profile__name">{props.fullName}</h3>
            <p className="profile__username">@{props.username}</p>
          </div>
        </div>
        <div className="">
          <div className="profile_contact">
            <p>{props.bio}</p>
            {/* <p>
              <span className="profile__labels">Email: </span>
              {user.email}
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
