import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Flag from "../Flag/Flag";
import Mail from "../Popover/MailPopover/Mail";
import Notification from "../Popover/NotificationPopover/Notification";
import Setting from "../Popover/SettingPopover/Setting";
import Profile from "../Profile/Profile";

const HeaderPopover = () => {
  const [showHeaderProfile, setShowHeaderProfile] = useState(false);

  const toggleHeaderProfile = () => {
    setShowHeaderProfile(!showHeaderProfile);
  };

  return (
    <>
      <div className="three-dot" onClick={toggleHeaderProfile}>
        <MoreOutlined />
      </div>
      <div className={`header-profile ${showHeaderProfile ? "show" : "none"}`}>
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <div className="mail-icon">
          <Mail />
        </div>
        <div className="notification-icon">
          <Notification />
        </div>
        <div className="setting-icon">
          <Setting />
        </div>
        <div className="Flag-i">
          <Flag />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default HeaderPopover;
