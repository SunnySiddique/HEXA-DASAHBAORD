import { Card, Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { MdOutlineArrowUpward } from "react-icons/md";
import ColumnChart from "../DemoOne/PointCount/SalesGrow/ColmunChart";
import Selected from "../DemoOne/PointCount/SalesGrow/Selected";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import DSeleced from "../dSeleced/dSeleced";
import Clomun from "./Chart/Clomun";
import "./DemoThree.css";
import OverViewSection from "./OverviewSection/OverViewSection";

const DemoThree = () => {
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
          <section style={{ marginTop: "70px", marginBottom: "20px" }}>
            <HeaderTitle />
            <Row gutter={[12]} style={{ marginTop: "20px" }}>
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
                  <div className="main-header">
                    <DSeleced Title="Sales by Location" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <div className="Chart">
                    <Clomun />
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
                style={{ marginBottom: "40px" }}
              >
                <Card className="main-point">
                  <div className="main-header">
                    <DSeleced Title="Profit Growth" />
                    <Selected
                      FristTitle="Today"
                      SecondTitle="Week"
                      ThirdTitle="Monthe"
                    />
                  </div>
                  <ColumnChart />
                </Card>
              </Col>
            </Row>
            <Card className="main-point">
              <Row gutter={24}>
                <Col
                  className="gutter-row"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <CardFlex
                    icon={<OneIcon />}
                    count={70}
                    title="Revenue"
                    ArrowIcon={<MdOutlineArrowUpward />}
                    SmallTitle="25.36%"
                    backgroundColor="rgb(130, 49, 211)"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <CardFlex
                    icon={<TwoIcon />}
                    count={28.5}
                    title="Revenue"
                    ArrowIcon={<MdOutlineArrowUpward />}
                    SmallTitle="25.36%"
                    backgroundColor="rgb(0, 170, 255)"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <CardFlex
                    icon={<ThreeIcon />}
                    count={8750}
                    title="Revenue"
                    ArrowIcon={<MdOutlineArrowUpward />}
                    SmallTitle="25.36%"
                    backgroundColor="rgb(1, 184, 26)"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <CardFlex
                    icon={<TwoIcon />}
                    count={40}
                    title="Revenue"
                    ArrowIcon={<MdOutlineArrowUpward />}
                    SmallTitle="25.36%"
                    backgroundColor=" rgb(250, 139, 12)"
                  />
                </Col>
              </Row>
            </Card>

            <div className="OverView">
              <OverViewSection />
            </div>
          </section>
        </main>
      )}
    </>
  );
};

function CardFlex({
  icon,
  count,
  title,
  ArrowIcon,
  SmallTitle,
  backgroundColor,
}) {
  return (
    <div className="main-Card">
      <div className="Card-icons-main">
        <div className="Card-icons" style={{ backgroundColor }}>
          <span>{icon}</span>
        </div>
        <div className="Card-title">
          <p>
            <span>
              <CountUp end={count} duration={5} prefix="$" separator="," />
            </span>
          </p>
          <span>{title}</span>
        </div>
        <div className="percent-title">
          {ArrowIcon}
          <p>{SmallTitle}</p>
        </div>
      </div>
    </div>
  );
}

const OneIcon = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Group_1641"
        data-name="Group 1641"
        width="20px"
        height="23.612"
        viewBox="0 0 27.997 23.612"
        className="injected-svg"
        data-src="/hexadash-react/static/media/money-wave.852dbf018a56dff3ca81.svg"
      >
        <path
          id="Path_1032-22"
          data-name="Path 1032"
          d="M24.456,40.343c-6.444,3.141-14.312,3.5-16.582,3.533H2.463A2.467,2.467,0,0,0,0,46.341C0,60.517-.013,59.695.028,59.878a1.155,1.155,0,0,0,.378.625h0a36.757,36.757,0,0,0,7.516.271,48.26,48.26,0,0,0,6.236-.5A37.673,37.673,0,0,0,25.695,56.9a12.075,12.075,0,0,0,2.3-1.113V42.56A2.463,2.463,0,0,0,24.456,40.343Zm1.239,13.95A34.426,34.426,0,0,1,13.834,58,69.7,69.7,0,0,1,2.3,58.478V46.341a.164.164,0,0,1,.165-.164H7.05A43.921,43.921,0,0,0,25.464,42.41a.162.162,0,0,1,.231.15Z"
          transform="translate(0.003 -40.092)"
          fill="#fff"
        ></path>
        <path
          id="Path_1033-23"
          data-name="Path 1033"
          d="M185.662,192.205a4.07,4.07,0,1,0-4.07-4.07A4.074,4.074,0,0,0,185.662,192.205Zm0-5.84a1.77,1.77,0,1,1-1.77,1.77,1.772,1.772,0,0,1,1.77-1.77Z"
          transform="translate(-171.662 -176.193)"
          fill="#fff"
        ></path>
        <path
          id="Path_1034-24"
          data-name="Path 1034"
          d="M374.972,133.546c.251,0,.194,0,2.116-.643a1.15,1.15,0,0,0-.727-2.181l-1.752.584a1.15,1.15,0,0,0,.363,2.241Z"
          transform="translate(-353.381 -125.709)"
          fill="#fff"
          opacity="0.5"
        ></path>
        <path
          id="Path_1035-25"
          data-name="Path 1035"
          d="M65.265,314.522h1.752a1.15,1.15,0,0,0,0-2.3H65.265a1.15,1.15,0,0,0,0,2.3Z"
          transform="translate(-60.609 -297.343)"
          fill="#fff"
          opacity="0.5"
        ></path>
        <path
          id="Path_1036-26"
          data-name="Path 1036"
          d="M35.067,327.06v3.082a2.465,2.465,0,0,1-1.3,2.17,26.438,26.438,0,0,1-12.329,2.668c-8.675,0-13.608-2.969-13.821-3.1a1.075,1.075,0,0,1-.141-.1A36.753,36.753,0,0,0,15,332.05c5.484,1.112,12.766.894,17.681-1.761a.169.169,0,0,0,.091-.147v-1.969A12.077,12.077,0,0,0,35.067,327.06Z"
          transform="translate(-7.071 -311.369)"
          fill="#fff"
        ></path>
      </svg>
    </span>
  );
};

const TwoIcon = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="16.803"
        viewBox="0 0 28 16.803"
        className="injected-svg"
        data-src="/hexadash-react/static/media/arrow-growth.1144d81905f9a3d6ab41.svg"
      >
        <path
          id="arrow-growth-27"
          d="M29.882,6.868A1.421,1.421,0,0,0,28.595,6h-7a1.4,1.4,0,1,0,0,2.8h3.625L17.4,16.623,12.793,12a1.4,1.4,0,0,0-1.987,0l-8.4,8.4A1.405,1.405,0,1,0,4.4,22.389l7.4-7.418,4.6,4.619a1.4,1.4,0,0,0,1.987,0l8.8-8.817V14.4a1.4,1.4,0,1,0,2.8,0v-7A1.4,1.4,0,0,0,29.882,6.868Z"
          transform="translate(-1.994 -6)"
          fill="#fff"
        ></path>
      </svg>
    </span>
  );
};

const ThreeIcon = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29.556"
        viewBox="0 0 28 29.556"
        className="injected-svg"
        data-src="/hexadash-react/static/media/shopping-cart.1e57653a4886dacf7af0.svg"
      >
        <path
          id="shopping-cart-28"
          d="M12.111,27.889a2.333,2.333,0,1,0,2.333,2.333A2.333,2.333,0,0,0,12.111,27.889Zm16.333-4.667H9.778a1.556,1.556,0,0,1,0-3.111H22.986a4.687,4.687,0,0,0,4.487-3.385L29.94,8.094a1.556,1.556,0,0,0-1.5-1.983H9.372A4.677,4.677,0,0,0,4.989,3H3.556a1.556,1.556,0,1,0,0,3.111H4.989a1.563,1.563,0,0,1,1.5,1.128l.242.847v.008l2.552,8.932a4.667,4.667,0,0,0,.5,9.307H28.444a1.556,1.556,0,0,0,0-3.111Zm-2.062-14-1.9,6.649A1.563,1.563,0,0,1,22.986,17H12.507l-.4-1.388-1.825-6.39ZM24.556,27.889a2.333,2.333,0,1,0,2.333,2.333A2.333,2.333,0,0,0,24.556,27.889Z"
          transform="translate(-2 -3)"
          fill="#fff"
        ></path>
      </svg>
    </span>
  );
};

export default DemoThree;
