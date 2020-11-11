import React, { Component } from "react";


class Category extends Component {
    render() {
        return (
            <div>
            Hello {this.props.name}
          </div>
        );
    }

}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
  );

export default Category