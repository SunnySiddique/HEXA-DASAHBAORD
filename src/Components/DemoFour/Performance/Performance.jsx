import { EllipsisOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Card, Checkbox, Col, Modal, Popover, Row } from "antd";
import BackGroundImg from "../../../assets/SettingImg/background-img.png";
import ChartPopContent from "../../DemoOne/PointCount/ChartPopContent";
import RadiaBar from "../Chart/RadiaBar";
import "../DemoFour.css";

const { confirm } = Modal;

import { FaRegEdit } from "react-icons/fa";
import MailImage from "../../../assets/SettingImg/mail.svg";
import Selected from "../../DemoOne/PointCount/SalesGrow/Selected";
import DSeleced from "../../dSeleced/dSeleced";

import { useState } from "react";
import Tables from "../Table/Table";
import Performance2 from "./Performance2";

// img

const Performance = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: "Animation Css Practise", checked: true },
    { id: 2, text: "Managing Other Task", checked: false },
    { id: 3, text: "Dashboard Design Creation", checked: true },
    { id: 4, text: "Dashboard Content Update", checked: false },
    { id: 5, text: "StrikingDash RTL Update", checked: false },
    { id: 6, text: "Dashboard Design Creation", checked: false },
    // Add more checkbox items as needed
  ]);

  const showDeleteConfirm = (checkboxId) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleCheckboxRemove(checkboxId);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleCheckboxRemove = (checkboxId) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.filter((checkbox) => checkbox.id !== checkboxId)
    );
  };

  return (
    <>
      <Row gutter={24} style={{ marginTop: "20px" }}>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Card className="background-color main-point">
            <div className="background-img-main">
              <div className="back-title">
                <h2>Congratulations Jhon!</h2>
                <p>Best Seller on the last month.</p>
                <a href="#">Learn More</a>
              </div>
              <div className="back-img">
                <img src={BackGroundImg} alt="" />
              </div>
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Card style={{ height: "44vh" }} className="main-point">
            <div className="lineChat-header-main">
              <div className="lineChart-title">
                <p>Performance Overview</p>
              </div>
              <Popover placement="bottom" content={<ChartPopContent />}>
                <div className="lineChart-icon">
                  <span>
                    <EllipsisOutlined />
                  </span>
                </div>
              </Popover>
            </div>
            <div className="RadiaBar-chart">
              <RadiaBar />
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Row gutter={24} style={{ marginBottom: "30px" }}>
            <Col
              className="gutter-row"
              xxl={12}
              xl={12}
              lg={12}
              md={24}
              sm={24}
              xs={24}
              style={{ marginBottom: "30px" }}
            >
              <Card className="main-point">
                <div className="main-svg">
                  <div className="main-icons">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"></path>
                      </svg>
                    </span>
                    <p>Total Products</p>
                    <small>21k</small>
                  </div>
                </div>
              </Card>
            </Col>
            <Col
              className="gutter-row"
              xxl={12}
              xl={12}
              lg={12}
              md={24}
              sm={24}
              xs={24}
              style={{ marginBottom: "30px" }}
            >
              <Card className="main-point">
                <div className="main-svg">
                  <div className="main-icons">
                    <span
                      style={{
                        backgroundColor: "rgba(0, 170, 255, 0.125)",
                        color: "rgb(0, 170, 255)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z"></path>
                      </svg>
                    </span>
                    <p>Total Awards</p>
                    <small>15k</small>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Card>
            <div className="mail-content-main main-point">
              <div className="mail-title">
                <h3>Subscribe To Our Newsletter</h3>
                <p>We notify you once any post is published</p>
                <button>Subscribe</button>
              </div>
              <div className="mail-img">
                <img src={MailImage} alt="" />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={16}
          xl={16}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Card className="main-point">
            <div className="main-header">
              <DSeleced Title="Task List  " />
              <Selected
                FristTitle="All"
                SecondTitle="Favourite"
                ThirdTitle="Completed"
              />
            </div>
            <div className="CheckBox-main" style={{ marginTop: "20px" }}>
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="main-checksBox">
                  <Checkbox checked={checkbox.checked} className="checkbox">
                    {checkbox.text}
                  </Checkbox>
                  <div className="icons">
                    <FaRegEdit />
                    <span>
                      <svg
                        onClick={() => showDeleteConfirm(checkbox.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Card style={{ height: "41vh" }} className="main-point">
            <div className="main-header">
              <DSeleced Title="Marketing Campaigns" />
            </div>
            <Tables />
          </Card>
        </Col>
      </Row>

        <Performance2 />


    </>
  );
};

export default Performance;
