import React from "react";
import {Link} from "react-router-dom";
import "../components_stylesheets/Leftbar.css";
import FilterItem from "./FilterItem";
import FakeFilterItems from "../FakeData/FakeFilterItems";

function Leftbar(props) {

    return (
        <div className="left__bar__container">
            <div className="clearfix"></div>
            <Link className="nav__link" to="/profile/0">
                <div className="left__bar__profile">
                    <img
                        src="/public/assets/HeadShot.jpg"
                        alt="user"
                        className="left__bar__user__image"
                    />
                    <div className="username__container">
                        <h5>{props.username}</h5>
                        <p>Lv.{props.lvl}</p>
                    </div>
                </div>
            </Link>
            <div className="left__bar__top__options">
                <Link className="nav__link" to="/profile/?tab=1">Following</Link>
                <Link className="nav__link" to="/profile/?tab=2">Followers</Link>
                <Link className="nav__link" to="/profile/?tab=3">Saved Recipes</Link>
                {/*<Link to="#">Recipe Drafts</Link>*/}
            </div>
            <div className="left__bar__bottom__options">
                {FakeFilterItems.map((item, i) => (
                    <FilterItem
                        key={i}
                        category={item.name}
                        ingredients={item.ingredients}
                        image={item.image}
                        checkedItems={props.checkedItems}
                        setCheckedItems={props.setCheckedItems}
                    />
                ))}
            </div>
        </div>
    );

};
export default Leftbar;
