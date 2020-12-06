import React from "react";
import { BsBell } from "react-icons/bs";
import { Input } from "reactstrap";
import '../components_stylesheets/Rightbar.css';

class Rightbar extends React.Component {
  render() {
    return (
      <div className="right__bar_container">
        <div className="clearfix"></div>
        <div className="d-flex justify-content-end mt-2 ">
          <BsBell className="notification__button" />
        </div>
          {/*<NotifyMe*/}
          {/*    data=""*/}
          {/*    storageKey='notific_key'*/}
          {/*    notific_key='timestamp'*/}
          {/*    notific_value='update'*/}
          {/*    heading='Notification Alerts'*/}
          {/*    sortedByKey={false}*/}
          {/*    showDate={true}*/}
          {/*    size={64}*/}
          {/*    color="yellow"*/}
          {/*/>*/}
      </div>
    );
  }
}

export default Rightbar;
