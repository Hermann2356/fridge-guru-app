// Import Libraries
import React from "react";

// Import Components
import ProfileFollowing from "./ProfileFollowing";

// Import Data
import FOLLOWING from "../FakeData/followers";

const ProfileFollowersTab = () => {
  return (
    <div className="container col-12 row">
      {FOLLOWING.map((following, index) => (
        <div key={index} className="col-12 col-md-6 m-0 container">
          <ProfileFollowing following={following} />
        </div>
      ))}
    </div>
  );
};

export default ProfileFollowersTab;
