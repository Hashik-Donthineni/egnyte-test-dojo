import React from "react";
import ReactDOM from "react-dom";
import { Button, Alert } from "antd";

const injectComponent = (component) => {
  console.log("INJECTING");
  ReactDOM.render(component, document.getElementById("component-container"));
};

class Egnyte extends React.Component {
  state = {};
  buttonClicked = () => {
    injectComponent(<Alert message="Success Tips" type="success" showIcon />);
  };

  render() {
    return (
      <>
        <Button onClick={this.buttonClicked} type="primary">
          Fetch Something
        </Button>
        <div
          id="component-container"
          style={{
            padding: "0px",
            minHeight: 360,
            margin: "0px",
          }}
        />
      </>
    );
  }
}

export default Egnyte;
