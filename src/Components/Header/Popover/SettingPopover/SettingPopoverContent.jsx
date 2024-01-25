import "./Setting.css";

import hexa1 from "../../../../assets/SettingImg/hexa1.png";
import hexa2 from "../../../../assets/SettingImg/hexa2.png";
import hexa3 from "../../../../assets/SettingImg/hexa3.png";
import hexa4 from "../../../../assets/SettingImg/hexa4.png";
import hexa5 from "../../../../assets/SettingImg/hexa5.png";
import hexa6 from "../../../../assets/SettingImg/hexa6.png";

const SettingPopoverContent = () => {
  return (
    <>
      <div className="setting-pop-content-main">
        <SettingCard
          img={hexa1}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
        <SettingCard
          img={hexa2}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
      </div>
      <div className="setting-pop-content-main">
        <SettingCard
          img={hexa3}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
        <SettingCard
          img={hexa4}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
      </div>
      <div className="setting-pop-content-main">
        <SettingCard
          img={hexa5}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
        <SettingCard
          img={hexa6}
          title="All Features"
          smallTitle="Introducing Increment subscriptions"
        />
      </div>
    </>
  );
};

function SettingCard({ img, title, smallTitle }) {
  return (
    <div className="setting-pop-content-main">
      <div className="setting-pop-content">
        <img src={img} alt="" />
        <div className="setting-pop-title">
          <p>{title}</p>
          <small>{smallTitle}</small>
        </div>
      </div>
    </div>
  );
}
export default SettingPopoverContent;
