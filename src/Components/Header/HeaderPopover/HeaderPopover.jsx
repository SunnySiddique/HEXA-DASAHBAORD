import {
  LogoutOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { firebaseAuth, useFirebase } from "../../context/Firebase";
import Flag from "../Flag/Flag";
import Mail from "../Popover/MailPopover/Mail";
import Notification from "../Popover/NotificationPopover/Notification";
import Setting from "../Popover/SettingPopover/Setting";
import Profile from "../Profile/Profile";

const HeaderPopover = () => {
  const [showHeaderProfile, setShowHeaderProfile] = useState(false);
  const firebase = useFirebase();
  console.log(firebaseAuth.currentUser);
  const toggleHeaderProfile = () => {
    setShowHeaderProfile(!showHeaderProfile);
  };

  const handleLogOut = () => {
    firebase.SignOut();
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
        <div className="profile">
          {/* <Avatar src={firebaseAuth.currentUser.phoneNumber} /> */}
        </div>
        <div className="current-user">
        {firebaseAuth.currentUser && firebaseAuth.currentUser.displayName}
        </div>
        <div
          className="logout"
          onClick={handleLogOut}
          style={{ marginRight: "20px", cursor: "pointer" }}
        >
          <LogoutOutlined />
        </div>
      </div>
    </>
  );
};

export default HeaderPopover;
