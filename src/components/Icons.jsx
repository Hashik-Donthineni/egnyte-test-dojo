import React from "react";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import {
  AccountBookTwoTone,
  AlertTwoTone,
  ApiTwoTone,
  AppstoreTwoTone,
  AudioTwoTone,
  BankTwoTone,
  BellTwoTone,
  BuildTwoTone,
  BookTwoTone,
  BugTwoTone,
  CalculatorTwoTone,
  CalendarTwoTone,
  CameraTwoTone,
  CarTwoTone,
  CarryOutTwoTone,
  CiCircleTwoTone,
  CiTwoTone,
  CloudTwoTone,
  CodeTwoTone,
  CompassTwoTone,
  ContactsTwoTone,
  ContainerTwoTone,
  ControlTwoTone,
  CopyrightTwoTone,
  CreditCardTwoTone,
} from "@ant-design/icons";

class Icons extends React.Component {
  render() {
    return (
      <>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            Semantic vector graphics. Before use icons, you need to install
            @ant-design/icons package:
          </Col>
        </Row>

        <Row type="flex" justify="center" style={{ alignItems: "center" }}>
          <Col span={5}>
            <AccountBookTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <AlertTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <ApiTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <AppstoreTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={4}>
            <AudioTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
        </Row>
        <Row gutter={[16, 24]} justify="center">
          <Col span={5}>AccountBookTwoTone</Col>
          <Col span={5}>AlertTwoTone</Col>
          <Col span={5}>ApiTwoTone </Col>
          <Col span={5}>AppstoreTwoTone</Col>
          <Col span={4}>AudioTwoTone</Col>
        </Row>

        <Row>
          <Col span={5}>
            <BankTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <BellTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <BookTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <BugTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={4}>
            <BuildTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col span={5}>BankTwoTone</Col>
          <Col span={5}>BellTwoTone </Col>
          <Col span={5}>BookTwoTone</Col>
          <Col span={5}>BugTwoTone</Col>
          <Col span={4}>BuildTwoTone</Col>
        </Row>

        <Row>
          <Col span={5}>
            <CalculatorTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CalendarTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CameraTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CarTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={4}>
            <CarryOutTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col span={5}>CalculatorTwoTone </Col>
          <Col span={5}>CalendarTwoTone</Col>
          <Col span={5}>CameraTwoTone</Col>
          <Col span={5}>CarTwoTone</Col>
          <Col span={4}>CarryOutTwoTone </Col>
        </Row>

        <Row>
          <Col span={5}>
            <CiTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CloudTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CodeTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CompassTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={4}>
            <CiCircleTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col span={5}>CiTwoTone</Col>
          <Col span={5}>CloudTwoTone</Col>
          <Col span={5}>CodeTwoTone </Col>
          <Col span={5}>CompassTwoTone</Col>
          <Col span={4}>CiCircleTwoTone</Col>
        </Row>
        <Row>
          <Col span={5}>
            <ContactsTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <ContainerTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <ControlTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={5}>
            <CopyrightTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
          <Col span={4}>
            <CreditCardTwoTone style={{ fontSize: "48px", color: "#08c" }} />
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          <Col span={5}>ContactsTwoTone</Col>
          <Col span={5}>ContainerTwoTone</Col>
          <Col span={5}>ControlTwoTone </Col>
          <Col span={5}>CopyrightTwoTone</Col>
          <Col span={4}>CreditCardTwoTone</Col>
        </Row>
      </>
    );
  }
}

export default Icons;
