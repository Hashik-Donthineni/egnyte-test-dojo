import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./Drawer.css";
import "../../public/dojoicon.svg";
import Swag from "./swag";
import Dashboard from "./Dashboard";

import {
  DesktopOutlined,
  PieChartOutlined,
  BookOutlined,
  FormatPainterOutlined,
  ApiOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  ApartmentOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Drawer extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getLogoImageCSS() {
    if (this.state.collapsed == true) {
      return "logo-image-collapsed";
    }
    return "logo-image";
  }

  getLogoTextCSS() {
    if (this.state.collapsed == true) {
      return "logo-text-collapsed";
    }
    return "logo-text";
  }

  menuItemClick = (item) => {
    console.log(item);
    if (item.key == 1) {
      this.props.inject(<Dashboard />);
    } else if (
      item.key == 2 ||
      item.key == 7 ||
      item.key == 8 ||
      item.key == 9
    ) {
      this.props.inject(<Swag />);
    }
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="siderlogo">
          <a>
            <img
              className={this.getLogoImageCSS()}
              src="dojoicon.svg"
              alt="logo"
            />
            <h1 className={this.getLogoTextCSS()}>Dojo Dev</h1>
          </a>
        </div>
        <Menu
          onClick={this.menuItemClick}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>

          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Swagger UI
          </Menu.Item>

          <Menu.Item key="3" icon={<ApartmentOutlined />}>
            Architect's Corner
          </Menu.Item>

          <SubMenu key="sub1" icon={<BookOutlined />} title="Startup Kits">
            <Menu.Item key="4">UI Kit</Menu.Item>
            <Menu.Item key="5">Design Kit</Menu.Item>
            <Menu.Item key="6">Component Kit</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<ApiOutlined />} title="API Specification">
            <Menu.Item key="7">Charting</Menu.Item>
            <Menu.Item key="8">Transition</Menu.Item>
            <Menu.Item key="9">Data Retrieval</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            icon={<FormatPainterOutlined />}
            title="UI Specifications"
          >
            <Menu.Item key="10">Version 2.1</Menu.Item>
            <Menu.Item key="11">Version 2.0.9</Menu.Item>
            <Menu.Item key="12">Version 2.0.5</Menu.Item>
          </SubMenu>

          <Menu.Item key="13" icon={<SkinOutlined />}>
            Reporting Templates
          </Menu.Item>

          <Menu.Item key="14" icon={<QuestionCircleOutlined />}>
            F.A.Q
          </Menu.Item>

          <Menu.Item key="15" icon={<MessageOutlined />}>
            Contact Us
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Drawer;
