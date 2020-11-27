// Import Libraries
import React from "react";

// Import Styles
import "../components_stylesheets/ProfileFollowing.css";

const ProfileFollowing = ({ following }) => {
  return (
    <div className="d-flex  align-items-center following__container">
      <img
        src={following.image}
        alt={following.name}
        className="following__img"
      />
      <h4 className="following__name">{following.name}</h4>
    </div>
  );
};

export default ProfileFollowing;
