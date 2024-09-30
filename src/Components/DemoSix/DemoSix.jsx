import { Card, Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import PointCard from "../DemoOne/PointCount/PointCard";
import BrowserState from "../DemoOne/PointCount/SalesGrow/BrowserState/BrowserState";
import Selected from "../DemoOne/PointCount/SalesGrow/Selected";
import Table from "../DemoOne/PointCount/SalesGrow/Table";
import TopSaling from "../DemoOne/PointCount/SalesGrow/TopSealing/TopSaling";
import PieChart from "../DemoTwo/Chart/PieChart";
import DSeleced from "../dSeleced/dSeleced";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import RadarChart from "./Chart/RadarChart";
import RadiaChart from "./Chart/RadiaChart";
import RadiaChart2 from "./Chart/RadiaChart2";
import "./DemoSix.css";

const DemoSix = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <HeaderTitle />
      {loading ? (
        <div className="spin" style={{ padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <main>
          <section>
            {/* One */}
            <Row gutter={24}>
              <Col
                className="gutter-row"
                xxl={6}
                xl={6}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <Card className="six-card">
                  <PointCard
                    count={100}
                    icon={<BagIcon />}
                    title="Total Products"
                    footerTitle=""
                    footerIcon={<MdOutlineArrowUpward />}
                    footerSmallTitle="25.36%"
                    footerTitles="Since last month"
                  />
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xxl={6}
                xl={6}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <Card className="six-card">
                  <PointCard
                    count={30825}
                    icon={<ShopIcon />}
                    title="Total Products"
                    footerTitle=""
                    footerIcon={<MdOutlineArrowUpward />}
                    footerSmallTitle="25.36%"
                    footerTitles="Since last month"
                    backgroundColor="rgba(0, 170, 255, 0.082)"
                  />
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xxl={6}
                xl={6}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <Card className="six-card">
                  <PointCard
                    count={30825}
                    icon={<DororIcon />}
                    title="Total Products"
                    footerTitle=""
                    footerIcon={<MdOutlineArrowUpward />}
                    footerSmallTitle="25.36%"
                    footerTitles="Since last month"
                    backgroundColor="rgba(88, 64, 255, 0.082)"
                  />
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xxl={6}
                xl={6}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <Card className="six-card">
                  <PointCard
                    count={30825}
                    icon={<TeamIcon />}
                    title="New Customers"
                    footerTitle=""
                    footerIcon={<MdOutlineArrowUpward />}
                    footerSmallTitle="25.36%"
                    footerTitles="Since last month"
                    backgroundColor="rgba(250, 139, 12, 0.082)"
                  />
                </Card>
              </Col>
            </Row>
            {/* two */}

            <Row gutter={24} style={{ marginTop: "30px" }}>
              <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                <Card className="main-poing">
                  <div className="main-header" style={{ padding: "20px" }}>
                    <DSeleced Title="Pie Chart" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Month"
                    />
                  </div>
                  <div className="Pie-chart">
                    <PieChart />
                  </div>
                </Card>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                <Card className="main-poing">
                  <div className="main-header" style={{ padding: "20px" }}>
                    <DSeleced Title="RadialBar Charts " />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Month"
                    />
                  </div>
                  <div className="Pie-chart">
                    <RadiaChart />
                  </div>
                </Card>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                <Card className="main-poing">
                  <div className="main-header" style={{ padding: "20px" }}>
                    <DSeleced Title="Radar Chart  " />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Month"
                    />
                  </div>
                  <div className="Pie-chart">
                    <RadarChart />
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Three */}

            <Row gutter={24} style={{ marginTop: "30px" }}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <div className="main-header">
                    <DSeleced Title="Sales by Location" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <div className="colmun">
                    <RadiaChart2 />
                  </div>
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card className="main-point">
                  <div className="main-header">
                    <DSeleced Title="Sales by Location" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <div className="table">
                    <Table />
                  </div>
                </Card>
              </Col>
            </Row>

            {/* Four */}

            <Row gutter={24} style={{ marginTop: "30px" }}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <div className="main-header">
                    <DSeleced Title="Sales by Location" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <div className="TobSaling">
                    <TopSaling />
                  </div>
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card className="main-point">
                  <div className="main-header">
                    <DSeleced Title="Sales by Location" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <BrowserState />
                </Card>
              </Col>
            </Row>
          </section>
        </main>
      )}
    </>
  );
};

const BagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="26.6"
      viewBox="0 0 28 26.6"
      className="injected-svg"
      data-src="/hexadash-react/static/media/briefcase.a6f11c37fdf54476f4e1.svg"
    >
      <path
        id="briefcase-alt-8"
        d="M25.8,8.1H21.6V6.7a4.2,4.2,0,0,0-4.2-4.2H14.6a4.2,4.2,0,0,0-4.2,4.2V8.1H6.2A4.2,4.2,0,0,0,2,12.3V24.9a4.2,4.2,0,0,0,4.2,4.2H25.8A4.2,4.2,0,0,0,30,24.9V12.3A4.2,4.2,0,0,0,25.8,8.1ZM13.2,6.7a1.4,1.4,0,0,1,1.4-1.4h2.8a1.4,1.4,0,0,1,1.4,1.4V8.1H13.2Zm14,18.2a1.4,1.4,0,0,1-1.4,1.4H6.2a1.4,1.4,0,0,1-1.4-1.4V17.2A29.778,29.778,0,0,0,9,18.516v.826a1.4,1.4,0,0,0,2.8,0v-.294a32.2,32.2,0,0,0,4.2.294,32.2,32.2,0,0,0,4.2-.294v.294a1.4,1.4,0,0,0,2.8,0v-.826A29.778,29.778,0,0,0,27.2,17.2Zm0-10.766a28.547,28.547,0,0,1-4.2,1.4V15.1a1.4,1.4,0,1,0-2.8,0v1.036a28.154,28.154,0,0,1-8.4,0V15.1a1.4,1.4,0,1,0-2.8,0v.462a28.546,28.546,0,0,1-4.2-1.4V12.3a1.4,1.4,0,0,1,1.4-1.4H25.8a1.4,1.4,0,0,1,1.4,1.4Z"
        transform="translate(-2 -2.5)"
        fill="rgb(130, 49, 211)"
      ></path>
    </svg>
  );
};

const ShopIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29.556"
      viewBox="0 0 28 29.556"
      className="injected-svg"
      data-src="/hexadash-react/static/media/shopping-cart.1e57653a4886dacf7af0.svg"
    >
      <path
        id="shopping-cart-9"
        d="M12.111,27.889a2.333,2.333,0,1,0,2.333,2.333A2.333,2.333,0,0,0,12.111,27.889Zm16.333-4.667H9.778a1.556,1.556,0,0,1,0-3.111H22.986a4.687,4.687,0,0,0,4.487-3.385L29.94,8.094a1.556,1.556,0,0,0-1.5-1.983H9.372A4.677,4.677,0,0,0,4.989,3H3.556a1.556,1.556,0,1,0,0,3.111H4.989a1.563,1.563,0,0,1,1.5,1.128l.242.847v.008l2.552,8.932a4.667,4.667,0,0,0,.5,9.307H28.444a1.556,1.556,0,0,0,0-3.111Zm-2.062-14-1.9,6.649A1.563,1.563,0,0,1,22.986,17H12.507l-.4-1.388-1.825-6.39ZM24.556,27.889a2.333,2.333,0,1,0,2.333,2.333A2.333,2.333,0,0,0,24.556,27.889Z"
        transform="translate(-2 -3)"
        fill="#5840ff"
      ></path>
    </svg>
  );
};

const DororIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="injected-svg"
      data-src="/hexadash-react/static/media/dollar-circle.af3751a73a9ee046cb3d.svg"
    >
      <path
        id="usd-circle-10"
        d="M13.727,11.182h5.091a1.273,1.273,0,1,0,0-2.545H16.273V7.364a1.273,1.273,0,0,0-2.545,0V8.636a3.818,3.818,0,1,0,0,7.636h2.545a1.273,1.273,0,0,1,0,2.545H11.182a1.273,1.273,0,1,0,0,2.545h2.545v1.273a1.273,1.273,0,0,0,2.545,0V21.364a3.818,3.818,0,1,0,0-7.636H13.727a1.273,1.273,0,1,1,0-2.545ZM15,1A14,14,0,1,0,29,15,14,14,0,0,0,15,1Zm0,25.455A11.455,11.455,0,1,1,26.455,15,11.455,11.455,0,0,1,15,26.455Z"
        transform="translate(-1 -1)"
        fill="rgb(88, 64, 255)"
      ></path>
    </svg>
  );
};

const TeamIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="21.666"
      viewBox="0 0 28 21.666"
      className="injected-svg"
      data-src="/hexadash-react/static/media/users-alt.082c532bbc534600c561.svg"
    >
      <path
        id="users-alt-11"
        d="M15.4,14.613a6.27,6.27,0,0,0,2.167-4.741,6.372,6.372,0,1,0-12.745,0A6.27,6.27,0,0,0,6.99,14.613,10.2,10.2,0,0,0,1,23.891a1.274,1.274,0,1,0,2.549,0,7.647,7.647,0,0,1,15.293,0,1.274,1.274,0,0,0,2.549,0,10.2,10.2,0,0,0-5.99-9.278ZM11.2,13.7a3.823,3.823,0,1,1,3.823-3.823A3.823,3.823,0,0,1,11.2,13.7Zm12.413.408A6.372,6.372,0,0,0,18.842,3.5a1.274,1.274,0,0,0,0,2.549,3.817,3.817,0,0,1,1.912,7.124,1.273,1.273,0,0,0-.064,2.167l.5.331.166.089a8.921,8.921,0,0,1,5.1,8.131,1.274,1.274,0,0,0,2.549,0A11.47,11.47,0,0,0,23.609,14.1Z"
        transform="translate(-1 -3.5)"
        fill="rgb(250, 139, 12)"
      ></path>
    </svg>
  );
};

export default DemoSix;
