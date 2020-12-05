import React from "react";
import ReactDOM from "react-dom";
import Drawer from "../components/Drawer";
import "./drawer.css";
import { Input, Layout, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2">Edit</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const onSearch = (value) => console.log(value);

const injectComponent = (component) => {
  ReactDOM.render(component, document.getElementById("comonent-container"));
};

class DrawerPage extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Drawer />
          <Layout>
            <Header className="site-layout-sub-header-background header-style">
              <div className="top-nav-content">
                <Search
                  placeholder="Search"
                  enterButton
                  allowClear
                  onSearch={onSearch}
                  className="search-style"
                />
                <Dropdown overlay={menu}>
                  <Button>
                    <img
                      className="user-profile-badge"
                      src="profile.svg"
                      alt="logo"
                    />
                    Hashik <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                id="comonent-container"
                style={{ padding: 24, minHeight: 360 }}
              />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              DOJO Developer Guide @ Created by DOJO Team
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default DrawerPage;
