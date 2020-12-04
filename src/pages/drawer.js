import React from "react";
import Drawer from "../components/Drawer";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const DrawerPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Drawer />
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, height: "44px" }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DOJO Developer Guide @ Created by DOJO Team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DrawerPage;
