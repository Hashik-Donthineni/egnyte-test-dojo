import React from "react";
import ReactDOM from "react-dom";
import { Button, Alert } from "antd";
import Egnyte from "egnyte-js-sdk";

const injectComponent = (component) => {
  console.log("INJECTING");
  ReactDOM.render(component, document.getElementById("component-container"));
};

class nite extends React.Component {
  state = {};
  buttonClicked = () => {
    var sdk = Egnyte.init("https://hashikd.egnyte.com", {
      key: "j8s8392ncthurffb2pw8guhh",
    });

    sdk.API.auth.requestTokenPopup(
      function () {
        console.log("Success");

        injectComponent(
          <Alert message="Success Tips" type="success" showIcon />
        );
      },
      function () {
        console.log("Failure");

        injectComponent(
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        );
      },
      "https://www.google.com/"
    );
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

export default nite;
