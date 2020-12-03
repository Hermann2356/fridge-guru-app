// Import Libraries
import React, {useEffect} from "react";
import "../components_stylesheets/Profile.css";
import ProfilesTab from "../components/ProfileTabs";
import ProfileHeader from "../components/ProfileHeader";
import queryString from 'query-string';
import Navbar from '../components/Navbar';
import auth from "../services/auth";
import Loading from "../components/loading";

class Profile extends React.Component {
    state ={
        fullName: "",
        username: "",
        bio: "",
        profileImage: "",
        loading: true,
    }

    componentDidMount() {
        // const userInfo = auth.userInfo;
        const id = 1;
        const firstName = "Hermann";
        const lastName = "Sterling";
        const username = "hermann2356";
        fetch('/api/profile/' + id)
            .then(res => {
                return res.json()
            })
            .then(profile => {
                console.log(profile);
                this.setState({
                    fullName: firstName + " " + lastName,
                    username: username,
                    profileImage: profile.profileImage,
                    bio: profile.bio,
                    loading: false,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        const queryParams = queryString.parse(this.props.location.search);
        const selectedValue = queryParams.tab === undefined ? 0: queryParams.tab;
        const loading = this.state.loading;

        if(loading){
            return <div><Loading /></div>
        }

        return (
            <div>
                <Navbar profileActive="active"/>
                <div className="profile__wrapper">
                    <ProfileHeader
                        profileImage={this.state.profileImage}
                        username={this.state.username}
                        fullName={this.state.fullName}
                        bio={this.state.bio}
                    />
                    <div className="w-100">
                        <ProfilesTab selectValue={selectedValue}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
