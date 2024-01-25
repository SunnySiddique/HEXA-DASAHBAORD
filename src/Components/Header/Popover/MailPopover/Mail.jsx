import { MailOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { useState } from "react";
import MailPopoverContent from "./MailPopoverContent";

const Mail = () => {
  const [popover, setPopover] = useState(false);
  const handleOpenChange = (newOpen) => {
    setPopover(newOpen);
  };
  return (
    <div>
      <Popover
        content={
            <MailPopoverContent />
        }
        trigger="click"
        open={popover}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
      >
        <Badge>
          <MailOutlined />
        </Badge>
      </Popover>
    </div>
  );
};

export default Mail;
