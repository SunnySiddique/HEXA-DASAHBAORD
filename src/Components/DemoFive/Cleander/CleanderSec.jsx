import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";
import { Calendar, Card, Col, Popover, Row, theme } from "antd";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import ChartPopContent from "../../DemoOne/PointCount/ChartPopContent";
import ColumnChart from "../../DemoOne/PointCount/SalesGrow/ColmunChart";
import Selected from "../../DemoOne/PointCount/SalesGrow/Selected";
import DSeleced from "../../dSeleced/dSeleced";
import ManTables from "../Tables/ManTables";

// img

import AnimationImage1 from "../../../assets/SettingImg/a-img-1.png";
import AnimationImage2 from '../../../assets/SettingImg/a-img-2.png';
import AnimationImage3 from '../../../assets/SettingImg/a-img-3.png';

import profileMain from "../../../assets/SettingImg/profile-main.jpg";

const CleanderSec = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  //   rm functionality

  const backgroundColors = [
    "red",
    "green",
    "blue",
    "rgb(0, 170, 255)",
    "rgb(250, 139, 12)",
  ];

  const [events, setEvents] = useState([
    {
      id: 1,
      date: "19 ",
      sm: "March",
      text: "Planning for new dashboard wireframe and prototype design",
      time: "08:30 AM",
    },
    {
      id: 2,
      date: "19 ",
      sm: "March",
      text: "Planning for new dashboard wireframe and prototype design",
      time: "08:30 AM",
    },
    {
      id: 3,
      date: "19 ",
      sm: "March",
      text: "Planning for new dashboard wireframe and prototype design",
      time: "08:30 AM",
    },
    {
      id: 4,
      date: "19 ",
      sm: "March",
      text: "Planning for new dashboard wireframe and prototype design",
      time: "08:30 AM",
    },
    {
      id: 5,
      date: "19 ",
      sm: "March",
      text: "Planning for new dashboard wireframe and prototype design",
      time: "08:30 AM",
    },
  ]);

  const handleCancelClick = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "30px" }}>
        <Col
          className="gutter-row"
          xxl={16}
          xl={16}
          lg={16}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: "30px" }}
        >
          <Card className="main-point">
            <div className="main-header">
              <DSeleced Title="User Overview" />
              <Selected
                FristTitle="Today"
                SecondTitle="Week"
                ThirdTitle="Month"
              />
            </div>
            <div className="Line-Chart">
              <ColumnChart />
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row rm"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="">
            <div
              className="lineChat-header-main"
              style={{ padding: "2px 13px" }}
            >
              <div className="lineChart-title">
                <p>Calendar 2022</p>
              </div>
              <Popover placement="bottom" content={<ChartPopContent />}>
                <div className="lineChart-icon">
                  <span>
                    <EllipsisOutlined />
                  </span>
                </div>
              </Popover>
            </div>
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
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
            <div className="main-header">
              <DSeleced Title="Member Progress" />
              <Selected
                FristTitle="Today"
                SecondTitle="Week"
                ThirdTitle="Month"
              />
            </div>
            <ManTables />
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
            {events.map((event) => (
              <div className="main-rms" key={event.id}>
                <div className="main-rm">
                  <div
                    className="rm-content"
                    style={{ backgroundColor: backgroundColors[event.id - 1] }}
                  >
                    <p>{event.date}</p>
                    <span>{event.sm}</span>
                  </div>
                  <div className="rm-text">
                    <p>{event.text}</p>
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="icons">
                  <span>
                    <FiEdit />
                  </span>
                  <span onClick={() => handleCancelClick(event.id)}>
                    {/* Add an onClick event for the cancel icon */}
                    <svg
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
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{marginBottom: "30px"}}
        >
          <Card className="main-img">
            <div className="container">
              <img src={AnimationImage1} className="image" alt="" />
              <div className="overlay"></div>
            </div>
            <div className="under-main">
              <div className="under-text">
                <p>01 July 2020</p>
                <h2>Multiple Dashboard Design Idea</h2>
                <span>
                  There are many variations of passages of majority have
                  suffered alteration in some form
                </span>
              </div>
              <div className="main-profiles">
                <div className="image-small">
                  <img src={profileMain} alt="" />
                  <span>Burns Marks</span>
                </div>
                <div className="icons">
                  <span>
                    <HeartOutlined /> <small>70</small>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path>
                    </svg>
                    <small>120</small>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{marginBottom: "30px"}}
        >
          <Card className="main-img">
            <div className="container">
              <img src={AnimationImage2} className="image" alt="" />
              <div className="overlay"></div>
            </div>
            <div className="under-main">
              <div className="under-text">
                <p>01 July 2020</p>
                <h2>Multiple Dashboard Design Idea</h2>
                <span>
                  There are many variations of passages of majority have
                  suffered alteration in some form
                </span>
              </div>
              <div className="main-profiles">
                <div className="image-small">
                  <img src={profileMain} alt="" />
                  <span>Burns Marks</span>
                </div>
                <div className="icons">
                  <span>
                    <HeartOutlined /> <small>70</small>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path>
                    </svg>
                    <small>120</small>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          style={{marginBottom: "30px"}}
        >
          <Card className="main-img">
            <div className="container">
              <img src={AnimationImage3} className="image" alt="" />
              <div className="overlay"></div>
            </div>
            <div className="under-main">
              <div className="under-text">
                <p>01 July 2020</p>
                <h2>Multiple Dashboard Design Idea</h2>
                <span>
                  There are many variations of passages of majority have
                  suffered alteration in some form
                </span>
              </div>
              <div className="main-profiles">
                <div className="image-small">
                  <img src={profileMain} alt="" />
                  <span>Burns Marks</span>
                </div>
                <div className="icons">
                  <span>
                    <HeartOutlined /> <small>70</small>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path>
                    </svg>
                    <small>120</small>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};


export default CleanderSec;
