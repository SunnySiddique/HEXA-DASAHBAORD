import { Drawer } from "antd";
import { useContext, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Context } from "../../App";
import Logo from "../../assets/heaxaimg/logo_dark.976ec3ef42cbf43c53c7e9f732da439f.svg";
import ThreeDotIcon from "../../assets/heaxaimg/threedot.svg";
import "./Header.css";

import darkImage from "../../assets/heaxaimg/dark.png";
import leftImage from "../../assets/heaxaimg/left.png";
import lightImage from "../../assets/heaxaimg/light.png";
import sideImage from "../../assets/heaxaimg/side.png";
import navarImage from "../../assets/heaxaimg/top.png";
import HeaderPopover from "./HeaderPopover/HeaderPopover";

const Headers = () => {
  const { setDrawerVisible } = useContext(Context);

  const showDrawer = () => {
    if (window.innerWidth < 768) {
      setDrawerVisible(true);
    }
  };

  const [open, setOpen] = useState(false);
  const showDrawers = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // popover

  return (
    <div className="header-container">
    <div className="Header-main">

      {" "}
      <div className="header-img-main">
        <div className="header-img-one">
          <img src={Logo} alt="" />
        </div>
        <div className="header-img-two">
          <p onClick={showDrawer}>
            <img src={ThreeDotIcon} />
          </p>
        </div>
        <div className="header-customize" onClick={showDrawers}>
          <MdOutlineEdit />
          <span>Customize...</span>
        </div>
        <Drawer
          title="Customizer"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div className="content-title">
            <span>Customize Your Overview Page layout</span>
          </div>
          <div className="main-side">
            <div className="latest-types">
              <span>Layouts Type</span>
            </div>
            <div className="all-img">
              <img
                style={{ marginRight: "40px", cursor: "pointer" }}
                src={leftImage}
                alt=""
              />
              <img style={{ cursor: "pointer" }} src={leftImage} alt="" />
            </div>
          </div>
          <div className="main-side">
            <div className="latest-left">
              <span>Sidebar Type</span>
            </div>
            <div className="all-img">
              <img
                style={{ marginRight: "40px", cursor: "pointer" }}
                src={lightImage}
                alt=""
              />
              <img style={{ cursor: "pointer" }} src={darkImage} alt="" />
            </div>
          </div>
          <div className="main-side">
            <div className="latest-left">
              <span>Navbar Type</span>
            </div>
            <div className="all-img">
              <img
                style={{ marginRight: "40px", cursor: "pointer" }}
                src={sideImage}
                alt=""
              />
              <img style={{ cursor: "pointer" }} src={navarImage} alt="" />
            </div>
          </div>
        </Drawer>
      </div>
      <HeaderPopover />
    </div>
    </div>
  );
};

export default Headers;
