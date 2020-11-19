// Import Libraries
import React from "react";

// Import Styles
import "../../../../../../Downloads/fridge-guru-app-master 3/client/src/components_stylesheets/Leftbar.css";

// Render Method
class Leftbar extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="left__bar__container">
                <div className="clearfix"></div>
                <div className="left__bar__profile">
                    <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="user"
                        className="left__bar__user__image"
                    />
                    <div className="username__container">
                        <h5>Username</h5>
                        <p>Lv.10</p>
                    </div>
                </div>
                <div className="left__bar__top__options">
                    <a href="www.google.com">Saved Recipes</a>
                    <a href="www.google.com">Following</a>
                    <a href="www.google.com">Recipe Drafts</a>
                </div>
                <div className="left__bar__bottom__options">
                    <h1>Favorites</h1>
                    <a href="www.google.com">Chicken</a>
                    <a href="www.google.com">Pizza</a>
                    <a href="www.google.com">Salad</a>
                    <a href="www.google.com">Burger</a>
                    <a href="www.google.com">Ice Cream</a>
                </div>
            </div>
        );
    }
}

export default Leftbar;
