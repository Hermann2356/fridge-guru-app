import React from "react";
import { Collapse } from "reactstrap";
import "../components_stylesheets/Post.css";
import { MdShare, MdFavorite } from "react-icons/md";
import { GiSpoon } from "react-icons/gi";

function Post(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="card post__box mx-auto my-4">
      <div className="card-header post__header">
        <div className="post__header">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile_pic"
            className="post__profile_image"
          />
          <span className="post__username">
            David.S <span className="post__label">shared a</span>feast
          </span>
        </div>
      </div>
      <img alt="post_image" class="card-img-top post__image" src={props.image} />
      <div className="card__actions">
        <div className="row">
          <div className="action col d-flex justify-content-center">
            <span className="action__icon">
              <img src="/public/assets/fork.png" className="icon" />
            </span>
            <span className="action__label">0</span>
          </div>
          <div className="action col d-flex justify-content-center">
            <span className="action__icon">
              <GiSpoon />
            </span>
            <span className="action__label">0</span>
          </div>
          <div className="action col d-flex justify-content-center">
            <span className="action__icon">
              <MdShare />
            </span>
          </div>
          <div className="action col d-flex justify-content-center">
            <span className="action__icon">
              <MdFavorite />
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Food Title</h5>
        <span
          className="post_show_more"
          onClick={() => { toggle() }}
        >
          read more
        </span>
        <Collapse isOpen={isOpen}>
          <p className="card-text">description of food</p>
        </Collapse>
      </div>
    </div>
  );
}

export default Post;
