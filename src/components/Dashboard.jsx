import React from "react";
import "./Dashboard.css";

import {
  Statistic,
  Card,
  Row,
  Col,
  Image,
  Typography,
  Divider,
  List,
  Avatar,
} from "antd";
import "antd/dist/antd.css";
import { QuestionCircleFilled, RightCircleTwoTone } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;

const data = [
  "User Interface Release 2020.5.12 New!",
  "User Interface Release 2020.5.12 New!",
  "User Interface Release 2020.5.12 New!",
  "User Interface Release 2020.5.12 New!",
  "User Interface Release 2020.5.12 New!",
  "User Interface Release 2020.5.12 New!",
];

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="site-statistic-demo-card">
          <Row span={24}>
            <Card className="hero-card-style" bordered={false}>
              <div className="dojo-title-text">DojoDev </div> <br />
              <div className="dev-portal-title-text">Developer Portal</div>
              <Title level={4}>
                #KeepCALM <br />
                #AndTrustTheDev <br />
                #iAmADev <br />
              </Title>
            </Card>
          </Row>
          <Row>
            <Col span={6}>
              <Card
                className="card-text"
                bordered={false}
                title="# Lines of Code"
                extra={<QuestionCircleFilled />}
              >
                <Image className="card-graph" src="/images/image018.png" />
                <Statistic
                  value={789387450}
                  valueStyle={{ color: "#cf1322" }}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                className="card-text"
                bordered={false}
                title="Active Builds per Month"
                extra={<QuestionCircleFilled />}
              >
                <Image className="card-graph" src="/images/image019.png" />
                <Statistic value={3856} valueStyle={{ color: "#3f8600" }} />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                className="card-text"
                bordered={false}
                title="Planned Releases per Month"
                extra={<QuestionCircleFilled />}
              >
                <Image className="card-graph" src="/images/image020.png" />
                <Statistic value={23} valueStyle={{ color: "#3f8600" }} />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                className="card-text"
                bordered={false}
                title="Daily API calls"
                extra={<QuestionCircleFilled />}
              >
                <Image className="card-graph" src="/images/image029.png" />
                <Statistic value={365210} valueStyle={{ color: "#3f8600" }} />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={12}>
              <Card
                hoverable
                bordered={false}
                cover={<img src="/images/image014.png" bordered={false} />}
              >
                <Meta
                  title="Talk: Agile Essence and Fluency"
                  description="It's been over a decade since we wrote the Manifesto for Agile Software Development, and the agile meme has been more successful than we ever could have hoped for. But like any success, there is the regular danger of Semantic Diffusion. "
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <List
                  size="small"
                  header={<Title level={4}>Latest Releases</Title>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      {<RightCircleTwoTone />}
                      {" " + item}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
