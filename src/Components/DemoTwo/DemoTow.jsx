import { EllipsisOutlined } from "@ant-design/icons";
import { Card, Col, Popover, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import ChartPopContent from "../DemoOne/PointCount/ChartPopContent";
import Selected from "../DemoOne/PointCount/SalesGrow/Selected";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import DSeleced from "../dSeleced/dSeleced";
import Chart from "./Chart/Chart";
import PieChart from "./Chart/PieChart";
import DemoPointCard from "./DemoPontCard";
import "./DemoTwo.css";
import BestTable from "./DemoTwoTable/BestTable";
import DemoTwoTable from "./DemoTwoTable/DemoTwoTable";
import IconsCard from "./IconCard/IconsCard";


const DemoTwo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spin" style={{ padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <main>
          <section
            className="main-section"
            style={{ marginTop: "70px", marginBottom: "20px" }}
          >
            <HeaderTitle />
            <Row
              gutter={[12, 12]}
              justify="space-around"
              style={{ marginTop: "30px" }}
            >
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={6}
                xxl={6}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <DemoPointCard
                    title="Total Traffic"
                    count={30825}
                    footerSmallTitle="25.36%"
                    footerIcon={<MdOutlineArrowUpward />}
                    footerTitles="Since last month"
                    icon={<IconOne />}
                  />
                </Card>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={6}
                xxl={6}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <DemoPointCard
                    title="New Customers"
                    count={2850}
                    footerSmallTitle="9.87%"
                    footerIcon={<MdOutlineArrowUpward />}
                    footerTitles="Since last month"
                    icon={<IconTwo />}
                  />
                </Card>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={6}
                xxl={6}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <DemoPointCard
                    title="Sales"
                    count={529}
                    footerSmallTitle="12.36%"
                    footerIcon={<MdOutlineArrowUpward />}
                    footerTitles="Since last month"
                    icon={<IconThree />}
                  />
                </Card>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={6}
                xxl={6}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <DemoPointCard
                    title="Total Traffic"
                    count={30825}
                    footerSmallTitle="25.36%"
                    footerIcon={<MdOutlineArrowUpward />}
                    footerTitles="Since last month"
                    icon={<IconFour />}
                  />
                </Card>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col
                className="gutter-row"
                lg={12}
                xl={12}
                xxl={12}
                md={24}
                sm={24}
                xs={24}
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
                  <div className="chat">
                    <Chart />
                  </div>
                </Card>
              </Col>
              <Col
                className="gutter-row"
                lg={12}
                xl={12}
                xxl={12}
                md={24}
                sm={24}
                xs={24}
                style={{ marginBottom: "30px" }}
              >
                <Card className="main-point">
                  <div className="lineChat-header-main">
                    <div className="lineChart-title">
                      <p>Sales Report</p>
                    </div>
                    <Popover placement="bottom" content={<ChartPopContent />}>
                      <div className="lineChart-icon">
                        <span>
                          <EllipsisOutlined />
                        </span>
                      </div>
                    </Popover>
                  </div>
                  <div className="main-pieChart-content">
                    <div className="chart" style={{ marginTop: "30px" }}>
                      <PieChart />
                    </div>
                    <IconsCard
                      icon={<TwitterIcon />}
                      title={"Twitter"}
                      smallTitle="$1540"
                      backgroundColor="rgb(204, 238, 255)"
                    />
                    <IconsCard
                      icon={<GoogleIcon />}
                      title={"Google"}
                      smallTitle="$1540"
                      backgroundColor="rgb(221, 217, 255)"
                    />
                    <IconsCard
                      icon={<FacebookIcon />}
                      title={"Facebook"}
                      smallTitle="$5346"
                      backgroundColor="rgb(230, 213, 246)"
                    />
                  </div>
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
                style={{ marginBottom: "40px" }}
              >
                <Card className="main-point">
                  <div className="Selected">
                    <div className="main-header">
                      <DSeleced Title="Sales by Location" />
                      <Selected
                        FristTitle="Today"
                        SecondTitle="Week"
                        ThirdTitle="Monthe"
                      />
                    </div>
                  </div>
                  <DemoTwoTable />
                </Card>
              </Col>
              <Col
                className="gutter-row"
                xxl={16}
                xl={16}
                lg={16}
                md={24}
                sm={24}
                xs={24}
                style={{ marginBottom: "40px" }}
              >
                <Card className="main-point">
                  <div className="Selected">
                    <div className="main-header">
                      <DSeleced Title="Sales by Location" />
                      <Selected
                        FristTitle="Today"
                        SecondTitle="Week"
                        ThirdTitle="Monthe"
                      />
                    </div>
                  </div>
                  <BestTable />
                </Card>
              </Col>
            </Row>
          </section>
        </main>
      )}
    </>
  );
};

const IconOne = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="16.803"
      viewBox="0 0 28 16.803"
      className="injected-svg"
      data-src="/hexadash-react/static/media/arrow-growth.1144d81905f9a3d6ab41.svg"
    >
      <path
        id="arrow-growth-37"
        d="M29.882,6.868A1.421,1.421,0,0,0,28.595,6h-7a1.4,1.4,0,1,0,0,2.8h3.625L17.4,16.623,12.793,12a1.4,1.4,0,0,0-1.987,0l-8.4,8.4A1.405,1.405,0,1,0,4.4,22.389l7.4-7.418,4.6,4.619a1.4,1.4,0,0,0,1.987,0l8.8-8.817V14.4a1.4,1.4,0,1,0,2.8,0v-7A1.4,1.4,0,0,0,29.882,6.868Z"
        transform="translate(-1.994 -6)"
        fill="rgb(130, 49, 211)"
      ></path>
    </svg>
  );
};

const IconTwo = () => {
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
        id="users-alt-9"
        d="M15.4,14.613a6.27,6.27,0,0,0,2.167-4.741,6.372,6.372,0,1,0-12.745,0A6.27,6.27,0,0,0,6.99,14.613,10.2,10.2,0,0,0,1,23.891a1.274,1.274,0,1,0,2.549,0,7.647,7.647,0,0,1,15.293,0,1.274,1.274,0,0,0,2.549,0,10.2,10.2,0,0,0-5.99-9.278ZM11.2,13.7a3.823,3.823,0,1,1,3.823-3.823A3.823,3.823,0,0,1,11.2,13.7Zm12.413.408A6.372,6.372,0,0,0,18.842,3.5a1.274,1.274,0,0,0,0,2.549,3.817,3.817,0,0,1,1.912,7.124,1.273,1.273,0,0,0-.064,2.167l.5.331.166.089a8.921,8.921,0,0,1,5.1,8.131,1.274,1.274,0,0,0,2.549,0A11.47,11.47,0,0,0,23.609,14.1Z"
        transform="translate(-1 -3.5)"
        fill="#0af"
      ></path>
    </svg>
  );
};

const IconThree = () => {
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
        fill="#fa8b0c"
      ></path>
    </svg>
  );
};

const IconFour = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="21.706"
      viewBox="0 0 28 21.706"
      className="injected-svg"
      data-src="/hexadash-react/static/media/speed-meter.83c340811686ecda1cf3.svg"
    >
      <path
        id="tachometer-fast-alt_1_-24"
        data-name="tachometer-fast-alt (1)"
        d="M16,5A14,14,0,0,0,3.876,26a1.4,1.4,0,1,0,2.436-1.4A11.088,11.088,0,0,1,4.8,19a11.2,11.2,0,1,1,20.9,5.6A1.4,1.4,0,1,0,28.125,26,14,14,0,0,0,16,5Zm3.976,8.064-2.17,2.156A4.074,4.074,0,0,0,16,14.8,4.2,4.2,0,1,0,20.2,19a4.06,4.06,0,0,0-.42-1.792l2.17-2.156a1.4,1.4,0,1,0-1.974-1.988ZM16,20.4a1.4,1.4,0,1,1,.98-2.408h0A1.406,1.406,0,0,1,16,20.4Z"
        transform="translate(-2 -5)"
        fill="#00e4ec"
      ></path>
    </svg>
  );
};

// social icon

const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
        fill="rgb(3, 169, 244)"
      ></path>
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
        fill="rgb(130, 49, 211)"
      ></path>
    </svg>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.597"
      height="24.597"
      viewBox="0 0 24.597 24.597"
      className="injected-svg"
      data-src="/hexadash-react/static/media/google-customIcon.d3641275457c11f70518e20ff287dfb7.svg"
    >
      <g
        id="Group_12894"
        data-name="Group 12894"
        transform="translate(-3218 -3932)"
      >
        <g
          id="search_1_"
          data-name="search (1)"
          transform="translate(3218 3932)"
        >
          <path
            id="Path_5619-21"
            data-name="Path 5619"
            d="M5.451,146.49l-.856,3.2-3.129.066a12.32,12.32,0,0,1-.091-11.484h0l2.786.511,1.22,2.769a7.34,7.34,0,0,0,.069,4.942Z"
            transform="translate(0 -131.625)"
            fill="#fbbb00"
          ></path>
          <path
            id="Path_5620-22"
            data-name="Path 5620"
            d="M273.441,208.176a12.294,12.294,0,0,1-4.384,11.888h0l-3.509-.179-.5-3.1a7.33,7.33,0,0,0,3.154-3.743h-6.576v-4.865h11.813Z"
            transform="translate(-249.059 -198.175)"
            fill="#518ef8"
          ></path>
          <path
            id="Path_5621-23"
            data-name="Path 5621"
            d="M49.04,316.433h0a12.3,12.3,0,0,1-18.532-3.763l3.986-3.262a7.314,7.314,0,0,0,10.54,3.745Z"
            transform="translate(-29.043 -294.545)"
            fill="#28b446"
          ></path>
          <path
            id="Path_5622-24"
            data-name="Path 5622"
            d="M47.4,2.831,43.413,6.093A7.313,7.313,0,0,0,32.631,9.923l-4.006-3.28h0A12.3,12.3,0,0,1,47.4,2.831Z"
            transform="translate(-27.249)"
            fill="#f14336"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default DemoTwo;
