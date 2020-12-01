// Import Libraries
import React, {useEffect} from "react";
import "../components_stylesheets/Profile.css";
import ProfilesTab from "../components/ProfileTabs";
import ProfileHeader from "../components/ProfileHeader";
import queryString from 'query-string';
import Navbar from '../components/Navbar';

class  Profile extends React.Component {
    state ={
        selectedValue: 3,
    }

    componentDidMount() {
    }


    render() {
        const queryParams = queryString.parse(this.props.location.search);
        const selectedValue = queryParams.tab === undefined?0:queryParams.tab;
        return (
            <div>
                <Navbar />
                <div className="profile__wrapper">
                    <ProfileHeader />
                    <div className="w-100">
                        <ProfilesTab selectValue={selectedValue}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
