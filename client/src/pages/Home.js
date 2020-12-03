import React from "react";
import "../components_stylesheets/Home.css";
import NavBar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Newsfeed from "../components/Newsfeed";
import Rightbar from "../components/Rightbar";
import FilterContent from "../components/FilterContent";
import auth from "../services/auth";
import Loading from "../components/loading";
import user from "../FakeData/user";


class Home extends React.Component {
    state = {
        username:"",
        lvl: "",
        loading: true,
        isFiltering: false,
        checkedItems: [],
    }


    componentDidMount() {
        // const userId = (auth.userInfo.id === null) ? 1 : auth.userInfo.id;
        // const username = (auth.userInfo.username === null) ? "hermannsterling@gmail.com" : auth.userInfo.username
        const userId = 1;
        const username = "hermannsterling@gmail.com";
        fetch('/api/profile/' + userId)
            .then(res => {
                return res.json()
            })
            .then(profile => {
                console.log(profile);
                this.setState({
                    username: username,
                    lvl: profile.lvl,
                    loading: false,
                })
            })
            .catch(err => {
               console.log(err);
            });

    }


    render() {

        let userInformation = auth.userInfo;
        let loading = this.state.loading;

        if(loading) {
            return <div><Loading/></div>
        }

        return (
            <div>
                <NavBar homeActive="active"/>
                <div id="main-home" className="row mx-0">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 p-0 m-0 mt-5 d-none d-md-block left__bar">
                                    <Leftbar
                                        username={this.state.username}
                                        lvl={this.state.lvl}
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
