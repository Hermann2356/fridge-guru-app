// Import Libraries
import React from "react";

// Import Component
import ProfilePost from "./ProfilePost";

// Import Data
import POSTS from "../FakeData/posts";

const ProfilesPostsTab = () => {
  return (
    <div className="row col-12 w-100 m-0 p-0">
      {POSTS.map((post, index) => {
        return (
          <div className="col-6 col-md-3 m-0 p-2" key={index}>
            <ProfilePost post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfilesPostsTab;
