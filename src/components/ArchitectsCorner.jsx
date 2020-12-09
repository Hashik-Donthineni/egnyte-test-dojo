import React from "react";
import { Card, List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { listData } from "../../static/blogdata.js";

class ArchitectsCorner extends React.Component {
  state = {};

  IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <Card
            hoverable
            style={{
              marginBottom: "10px",
              padding: "0px",
            }}
          >
            <List.Item
              key={item.title}
              actions={[
                <this.IconText
                  icon={StarOutlined}
                  text={item.star}
                  key="list-vertical-star-o"
                />,
                <this.IconText
                  icon={LikeOutlined}
                  text={item.like}
                  key="list-vertical-like-o"
                />,
                <this.IconText
                  icon={MessageOutlined}
                  text={item.comment}
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img width={272} height={300} alt="logo" src={item.image} />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          </Card>
        )}
      />
    );
  }
}

export default ArchitectsCorner;
