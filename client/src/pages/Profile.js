// Import Libraries
import React from "react";

// Import Styles
import "../components_stylesheets/Profile.css";

// Import Components
import ProfilesTab from "../components/ProfileTabs";
import ProfileHeader from "../components/ProfileHeader";

const Profile = () => {
  return (
    <div className="profile__wrapper">
      <ProfileHeader />
      <div className="w-100">
        <ProfilesTab />
      </div>
    </div>
  );
};

export default Profile;
