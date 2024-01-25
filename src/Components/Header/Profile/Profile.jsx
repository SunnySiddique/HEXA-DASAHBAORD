import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./profile.css";

import { Popover } from "antd";
import { useState } from "react";
import profileImage from "../../../assets/SettingImg/profile-img.png";
import ProfilePopoverContent from "./ProfilePopoverContent";
// import profileImageOne from '../../../assets/SettingImg/profile-img2.png'

const Profile = () => {
  const [popover, setPopover] = useState(false);

  const handleOpenChange = (newOpen) => {
    setPopover(newOpen);
  };

  return (
    <>
      <Popover
        content={<ProfilePopoverContent />}
        trigger="click"
        open={popover}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
      >
        <div className="profile-main">
          <div className="profile-img">
            <img src={profileImage} alt="" />
          </div>
          <div className="profile-title">
            <p>Md.Sunny</p>
          </div>
          <MdOutlineKeyboardArrowDown />
        </div>
      </Popover>
    </>
  );
};

export default Profile;
