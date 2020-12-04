import React from "react";
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
                      style={{
                        height: "20px",
                        width: "20px",
                        display: "inline",
                        marginRight: "10px",
                      }}
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
                style={{ padding: 24, minHeight: 360 }}
              >
                <strong>INJECT A COMPONENT HERE</strong> <br></br>
                <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque
                eu tincidunt. Auctor elit sed vulputate mi. Ut enim blandit
                volutpat maecenas volutpat blandit. Diam quis enim lobortis
                scelerisque fermentum dui faucibus. Quam vulputate dignissim
                suspendisse in. Facilisis sed odio morbi quis commodo. Sem
                fringilla ut morbi tincidunt augue. Facilisis sed odio morbi
                quis commodo odio aenean sed adipiscing. Suspendisse faucibus
                interdum posuere lorem ipsum dolor sit amet consectetur. Elit at
                imperdiet dui accumsan sit amet. Nunc congue nisi vitae suscipit
                tellus. Varius sit amet mattis vulputate enim. Facilisi cras
                fermentum odio eu feugiat pretium nibh ipsum. Lorem mollis
                aliquam ut porttitor leo a diam sollicitudin. Aliquet lectus
                proin nibh nisl condimentum id venenatis. Adipiscing enim eu
                turpis egestas pretium aenean pharetra magna ac. Porta lorem
                mollis aliquam ut porttitor leo. Cras adipiscing enim eu turpis
                egestas pretium. Bibendum enim facilisis gravida neque convallis
                a. Sit amet commodo nulla facilisi nullam. Pellentesque massa
                placerat duis ultricies lacus sed turpis. Neque gravida in
                fermentum et sollicitudin ac orci phasellus. Lacus luctus
                accumsan tortor posuere ac ut consequat. Arcu dictum varius duis
                at consectetur lorem donec massa. Dolor sit amet consectetur
                adipiscing elit duis. Eu consequat ac felis donec et odio
                pellentesque. Senectus et netus et malesuada fames ac turpis
                egestas sed. Sit amet porttitor eget dolor morbi. Neque egestas
                congue quisque egestas diam in. Praesent semper feugiat nibh sed
                pulvinar proin gravida. Blandit turpis cursus in hac habitasse.
                Accumsan tortor posuere ac ut consequat semper viverra nam. Ac
                feugiat sed lectus vestibulum mattis. Arcu ac tortor dignissim
                convallis aenean. Nulla aliquet enim tortor at auctor urna nunc
                id. Blandit volutpat maecenas volutpat blandit aliquam. Orci
                phasellus egestas tellus rutrum tellus pellentesque eu. Ut
                placerat orci nulla pellentesque dignissim enim. Orci phasellus
                egestas tellus rutrum tellus pellentesque eu tincidunt. Turpis
                massa tincidunt dui ut. Nibh cras pulvinar mattis nunc. Ut
                tortor pretium viverra suspendisse potenti nullam. Habitant
                morbi tristique senectus et netus et malesuada fames ac. Dictum
                sit amet justo donec enim diam. At quis risus sed vulputate odio
                ut enim blandit volutpat. Egestas purus viverra accumsan in nisl
                nisi scelerisque eu. Aliquet enim tortor at auctor urna.
                Bibendum ut tristique et egestas quis ipsum suspendisse
                ultrices. Condimentum vitae sapien pellentesque habitant morbi
                tristique senectus et. Vulputate sapien nec sagittis aliquam
                malesuada bibendum arcu vitae. Tempor nec feugiat nisl pretium
                fusce id velit ut. Odio facilisis mauris sit amet massa vitae
                tortor. Quisque non tellus orci ac auctor augue. Tristique et
                egestas quis ipsum suspendisse ultrices gravida. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam quis.
                Pulvinar mattis nunc sed blandit libero volutpat sed cras.
                Scelerisque felis imperdiet proin fermentum. Augue ut lectus
                arcu bibendum at varius vel pharetra vel. Elit duis tristique
                sollicitudin nibh sit amet. Gravida quis blandit turpis cursus.
                Tellus in metus vulputate eu scelerisque felis imperdiet proin
                fermentum. Cursus vitae congue mauris rhoncus aenean vel elit
                scelerisque. Quis blandit turpis cursus in hac habitasse platea
                dictumst. Donec adipiscing tristique risus nec feugiat in
                fermentum posuere urna. Nunc sed augue lacus viverra vitae.
                Dictum at tempor commodo ullamcorper a lacus. Donec enim diam
                vulputate ut pharetra sit amet. Arcu non odio euismod lacinia.
                Id porta nibh venenatis cras sed felis eget velit. Habitant
                morbi tristique senectus et netus et malesuada fames. Suscipit
                tellus mauris a diam.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt. Auctor elit sed vulputate mi. Ut enim
                blandit volutpat maecenas volutpat blandit. Diam quis enim
                lobortis scelerisque fermentum dui faucibus. Quam vulputate
                dignissim suspendisse in. Facilisis sed odio morbi quis commodo.
                Sem fringilla ut morbi tincidunt augue. Facilisis sed odio morbi
                quis commodo odio aenean sed adipiscing. Suspendisse faucibus
                interdum posuere lorem ipsum dolor sit amet consectetur. Elit at
                imperdiet dui accumsan sit amet. Nunc congue nisi vitae suscipit
                tellus. Varius sit amet mattis vulputate enim. Facilisi cras
                fermentum odio eu feugiat pretium nibh ipsum. Lorem mollis
                aliquam ut porttitor leo a diam sollicitudin. Aliquet lectus
                proin nibh nisl condimentum id venenatis. Adipiscing enim eu
                turpis egestas pretium aenean pharetra magna ac. Porta lorem
                mollis aliquam
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
