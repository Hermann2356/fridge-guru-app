
import React from "react";
import "../components_stylesheets/Home.css";
import NavBar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Newsfeed from "../components/Newsfeed";
import Rightbar from "../components/Rightbar";

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="row home__container">
                    <div className="col-md-2 d-none d-md-block left__bar">
                        <Leftbar/>
                    </div>
                    <div className="col-12 col-md-7 offset-md-2 news__feed">
                        <Newsfeed/>
                    </div>
                    <div className="col-md-3 d-none d-md-block right__bar">
                        <Rightbar/>
                    </div>
                </div>
            </div>
        );
    }


};

export default Home;

