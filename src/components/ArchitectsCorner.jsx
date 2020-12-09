import React from "react";
import { Card, List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

class ArchitectsCorner extends React.Component {
  state = {};

  IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  render() {
    const listData = [
      {
        href:
          "https://www.codeproject.com/Articles/5289290/Routing-Orthogonal-Diagram-Connectors-in-JavaScrip",
        title: `Routing Orthogonal Diagram Connectors in JavaScript`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "An orthogonal connector uses only vertical and horizontal lines to connect two shapes",
        content:
          "Everything was going all right until we hit the point of connecting the shapes. We were shooting of course for orthogonal connectors as the best way of displaying beautiful diagrams. It was one of those things you just don’t think much about, how it works or how complex the implementation could be; but turned out to be a way more sophisticated task than anticipated.",
      },
      {
        href:
          "https://www.codeproject.com/Tips/5270917/WebView2-for-Folder-Based-Browsing-of-Animated-GIF",
        title: `Routing Orthogonal Diagram Connectors in JavaScript`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "First exploration of the capabilities of Chromium WebView2 Control to display",
        content:
          "The status of the WebView2 Control has changed from preview to Generally Available (GA). The Microsoft Edge WebView2 control enables you to embed web technologies (HTML... ) in native applications. It uses Microsoft Edge (Chromium) as the rendering engine to display web content .... See here for the pitch for a hybrid native/web app approach",
      },
      {
        href:
          "https://www.codeproject.com/Tips/5270917/WebView2-for-Folder-Based-Browsing-of-Animated-GIF",
        title: `Web Presentation, an Application in a Single File, now with Video`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "A cross-platform replacement for all those office presentation applications in a single file",
        content:
          "Who needs presentations created with boring bulky office presentation packages not always available for all systems? All you need is a Web browser and a set of vector/pixel images. With a solution in just one HTML/CSS/JavaScript file, you have all the features people use in presentations. Since v.2, in addition to graphics and animated graphics, video elements can be added and controlled from the presentation frames.",
      },
      {
        href:
          "https://www.codeproject.com/Tips/5270917/WebView2-for-Folder-Based-Browsing-of-Animated-GIF",
        title: `Routing Orthogonal Diagram Connectors in JavaScript`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      },
      {
        href:
          "https://www.codeproject.com/Articles/5289290/Routing-Orthogonal-Diagram-Connectors-in-JavaScrip",
        title: `Routing Orthogonal Diagram Connectors in JavaScript`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "An orthogonal connector uses only vertical and horizontal lines to connect two shapes",
        content:
          "Everything was going all right until we hit the point of connecting the shapes. We were shooting of course for orthogonal connectors as the best way of displaying beautiful diagrams. It was one of those things you just don’t think much about, how it works or how complex the implementation could be; but turned out to be a way more sophisticated task than anticipated.",
      },
      {
        href:
          "https://www.codeproject.com/Tips/5270917/WebView2-for-Folder-Based-Browsing-of-Animated-GIF",
        title: `Routing Orthogonal Diagram Connectors in JavaScript`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "First exploration of the capabilities of Chromium WebView2 Control to display animated",
        content:
          "The status of the WebView2 Control has changed from preview to Generally Available (GA). The Microsoft Edge WebView2 control enables you to embed web technologies (HTML... ) in native applications. It uses Microsoft Edge (Chromium) as the rendering engine to display web content .... See here for the pitch for a hybrid native/web app approach",
      },
    ];

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
          <Card hoverable>
            <List.Item
              key={item.title}
              actions={[
                <this.IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <this.IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <this.IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
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
