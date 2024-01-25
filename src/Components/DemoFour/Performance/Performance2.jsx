import { DribbbleOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "./Performance.css";

// images

import BackgroundImage2 from "../../../assets/SettingImg/background-img-2.png";
import BackgroundImage1 from "../../../assets/SettingImg/bakground-img-1.png";
import c2Image from "../../../assets/SettingImg/c-2.png";
import c3Image from "../../../assets/SettingImg/c-3.png";
import c4Image from "../../../assets/SettingImg/c-4.png";
import c1Image from "../../../assets/SettingImg/c-one.png";

const Performance2 = () => {
  return (
    <>
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
          <Card>
            <div className="main-profile">
              <div className="profile-imgs">
                <img src={BackgroundImage1} alt="" />
                <div className="profile-imgs-2">
                  <img src={BackgroundImage2} alt="" />
                </div>
              </div>
            </div>
            <div className="profile-content">
              <h4>Robert Clinton</h4>
              <p>Best Seller of the last month</p>
            </div>
            <div className="profile-icons">
              <span style={{ backgroundColor: "rgb(130, 49, 211)" }}>
                <FaFacebookF />
              </span>
              <span style={{ backgroundColor: "rgb(88, 64, 255)" }}>
                <AiOutlineTwitter />
              </span>
              <span style={{ background: " rgb(0, 170, 255)" }}>
                <DribbbleOutlined />
              </span>
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
          <Card className="main-points">
            <div className="header-title">
              <h3>Team Members</h3>
            </div>
            <ImageCard
              image={c2Image}
              title="Duran Clayton"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c3Image}
              title="Shane Watson"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c4Image}
              title="Robert Clinton"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c2Image}
              title="Daniel White"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c1Image}
              title="Duran Clayton"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c3Image}
              title="Shane Watson"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c1Image}
              title="Duran Clayton"
              smallTitle="online"
              button="Add"
            />
            <ImageCard
              image={c2Image}
              title="Duran Clayton"
              smallTitle="online"
              button="Add"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

function ImageCard({ image, title, smallTitle, button }) {
  return (
    <div className="images-main">
      <div className="image">
        <img src={image} alt="" />
        <div className="image-title">
          <p>{title}</p>
          <div className="s">
            <div className="span"></div>
            <span>{smallTitle}</span>
          </div>
        </div>
      </div>
      <div className="image-button">
        <button>{button}</button>
      </div>
    </div>
  );
}

export default Performance2;
