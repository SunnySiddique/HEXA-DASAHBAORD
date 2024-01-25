import { SettingOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useState } from "react";
import "./Setting.css";
import SettingPopoverContent from "./SettingPopoverContent";

const Setting = () => {
  const [popover, setPopover] = useState();

  const handlePopover = (newOpen) => {
    setPopover(newOpen);
  };

  return (
    <>
      <Popover
        content={<SettingPopoverContent />}
        open={popover}
        onOpenChange={handlePopover}
        trigger="click"
        placement="bottomRight"
      >
        <SettingOutlined style={{ cursor: "pointer" }} />
      </Popover>
    </>
  );
};

export default Setting;
