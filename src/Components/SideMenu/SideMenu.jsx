import {
  AlipayOutlined,
  AliwangwangOutlined,
  AntDesignOutlined,
  DingdingOutlined,
  DropboxOutlined,
  QrcodeOutlined,
  SlackOutlined
} from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import Content from "../Content/Content";
import Footers from "../Footer/Footer";
import Header from "../Header/Header";

const SideMenu = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Demo 1",
      icon: <QrcodeOutlined />,
      key: "/",
    },
    {
      label: "Demo 2",
      icon: <AliwangwangOutlined />,
      key: "/demotwo",
    },
    {
      label: "Demo 3",
      icon: <SlackOutlined />,
      key: "/demothree",
    },
    {
      label: "Demo 4",
      icon: <DropboxOutlined />,
      key: "/demofour",
    },
    {
      label: "Demo 5",
      key: "/demofive",
      icon: <DingdingOutlined />,
    },
    {
      label: "Demo 6",
      icon: <AlipayOutlined />,
      key: "/demosix",
    },
    {
      label: "Demo 7",
      key: "/login",
      icon: <AntDesignOutlined />,
    },
  ];

  const [activeKey, setActiveKey] = useState("/");
  const { drawerVisible, setDrawerVisible } = useContext(Context);
  const handleMenuClick = (item) => {
    navigate(item.key);
    setActiveKey(item.key);
    setDrawerVisible(false); // Close the drawer after clicking a menu item
  };

  // const showDrawer = () => {
  //   setDrawerVisible(true);
  // };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="sideMenu-main">
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div style={{ position: "fixed", left: 0, width: "200px", marginTop: "72px" }}>
          <Sider collapsible collapsed breakpoint="sm" className="sidemenu">
            <div className="demo-logo-vertical"></div>
            <Drawer
              placement="left"
              onClose={onClose}
              visible={drawerVisible}
              key="left"
            >
              <Menu
                theme="light"
                defaultSelectedKeys={["1"]}
                selectedKeys={[activeKey]}
                mode="inline"
                items={items}
                onClick={handleMenuClick}
              >
                {items.map((item) => (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              selectedKeys={[activeKey]}
              mode="inline"
              items={items}
              onClick={handleMenuClick}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default SideMenu;
