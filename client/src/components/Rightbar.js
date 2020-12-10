import React from "react";
import { BsBell } from "react-icons/bs";
import { Input } from "reactstrap";
import '../components_stylesheets/Rightbar.css';

class Rightbar extends React.Component {

    state = {
        showNotification: false,
        iconBorder: "none",
    }

    enableNotificationPanel = () => {
        this.setState({
            showNotification: !this.state.showNotification,
            iconBorder: this.state.iconBorder === "solid"?"none":"solid"
        });
    }
  render() {
    return (
      <div className="right__bar_container">
        <div className="clearfix"></div>
        <div className="d-flex justify-content-end mt-2 row col-12 ">
          <BsBell style={{borderStyle: this.state.iconBorder}} onClick={this.enableNotificationPanel} className="notification__button" />
        </div>
          {this.state.showNotification?
              <div className="row col-12 right-notification-panel">
                <p>No Notifications</p>
              </div> : ""
          }

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
