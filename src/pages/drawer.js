import React from "react";
import Drawer from "../components/Drawer";
import { Layout } from "antd";

const DrawerPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Drawer />
      </Layout>
    </>
  );
};

export default DrawerPage;
