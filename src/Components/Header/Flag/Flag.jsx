import { Popover } from "antd";
import flagImage from "../../../assets/SettingImg/flag.png";
import flagImageOne from '../../../assets/SettingImg/flag2.png';
import flagImageTwo from '../../../assets/SettingImg/flag3.png';
import '../../Header/Header.css';

const Flag = () => {

  const content = (
    <>
      <div className="flag-man">
        <div className="flag-hover-main">
            <div className="flag-img">
            <img src={flagImage} alt="" />
        </div>
        <div className="flag-title">
            <p>English</p>
        </div>
        </div>
      </div>
      <div className="flag-man">
        <div className="flag-hover-main">
            <div className="flag-img">
            <img src={flagImageOne} alt="" />
        </div>
        <div className="flag-title">
            <p>English</p>
        </div>
        </div>
      </div>
      <div className="flag-man">
        <div className="flag-hover-main">
            <div className="flag-img">
            <img src={flagImageTwo} alt="" />
        </div>
        <div className="flag-title">
            <p>English</p>
        </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Popover placement="bottomRight" content={content}>
        <img style={{ cursor: "pointer" }} src={flagImage} alt="" />
      </Popover>
    </>
  );
};

export default Flag;
