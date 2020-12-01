import React from "react";
import "../components_stylesheets/Home.css";
import NavBar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Newsfeed from "../components/Newsfeed";
import Rightbar from "../components/Rightbar";
import FilterContent from "../components/FilterContent";
import queryString from 'query-string'

class Home extends React.Component {
    state = {
        username: "",
        level: "",
        isFiltering: false,
        checkedItems: [],

    }


    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        const userId = queryParams.userId;
        const userPromise = fetch('/api/user/' + userId);
        const profilePromise = fetch('/api/profile/' + userId);

        Promise.all([userPromise, profilePromise])
            .then(([userResult, profileResult]) => {
                return Promise.all([userResult.json(), profileResult.json()])
            })
            .then(resultArray => {
                console.log(resultArray);
                this.setState({
                    username: resultArray[0].username,
                });
            });
    }


    render() {
        return (
            <div>
                <NavBar/>
                <div className="row mx-0">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 p-0 m-0 mt-5 d-none d-md-block left__bar">
                                <Leftbar
                                    username={this.state.username}
                                    level={this.state.level}
                                    checkedItems={this.state.checkedItems}
                                    setCheckedItems={this.state.setCheckedItems}
                                />
                            </div>
                            <div className="col-md-6 col-12 offset-md-3 news__feed">
                                {!this.state.isFiltering ? (
                                    <Newsfeed/>
                                ) : (
                                    <FilterContent checkedItems={this.state.checkedItems}/>
                                )}
                            </div>
                            <div className="col-3 d-none d-md-block right__bar">
                                <Rightbar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
