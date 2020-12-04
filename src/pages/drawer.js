import React from "react";
import Drawer from "../components/Drawer";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

class DrawerPage extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Drawer />
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{
                padding: 0,
                height: "44px",
                background: "white",
              }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                INJECT A COMPONENT HERE
              </div>
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
