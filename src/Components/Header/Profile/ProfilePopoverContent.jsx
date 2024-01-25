import { SettingOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import InProfileImage from "../../../assets/SettingImg/profile-img-2.png";
import "./profile.css";

const ProfilePopoverContent = () => {
  return (
    <>
      <div className="inProfile-main">
        <div className="inprofile-m">
          <div className="inProfile-img">
            <img src={InProfileImage} alt="" />
          </div>
          <div className="inProfile-title">
            <h5>Abdullah Bin Talha</h5>
            <p>UI Expert</p>
          </div>
        </div>
        <div className="icon">
          <ProfileIcons icon={<UserOutlined />} title="Profile" />
          <ProfileIcons icon={<SettingOutlined />} title="Setting" />
          <ProfileIcons icon={<BillingIcon />} title="Billing" />
          <ProfileIcons icon={<TeamOutlined />} title="Activity" />
          <ProfileIcons icon={<HelpIcon />} title="Activity" />
        </div>
      </div>
    </>
  );
};

function ProfileIcons({ icon, title }) {
  return (
    <div className="icons-main">
      <div className="user-profile">
        <span>{icon}</span>
        <p>{title}</p>
      </div>
    </div>
  );
}

const BillingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"></path>
  </svg>
);

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path>
  </svg>
);

export default ProfilePopoverContent;
