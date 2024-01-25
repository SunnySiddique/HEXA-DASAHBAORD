import { Card, Col, Divider, Row } from "antd";
import Selected from "../../DemoOne/PointCount/SalesGrow/Selected";
import DemoTwoTable from "../../DemoTwo/DemoTwoTable/DemoTwoTable";
import DSeleced from "../../dSeleced/dSeleced";
import "./OverViewSection.css";
import RadiaChart from "./RadiaChart";
import TableDesgin from "./TableDesgin";

const OverViewSection = () => {
  return (
    <>
      <Row gutter={24} style={{ marginTop: "30px" }}>
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
          <Card className="main-point">
            <div className="main">
              <div className="main-header">
                <DSeleced Title="Sales by Location" />
                <Selected
                  FristTitle="Today"
                  SecondTitle="Week"
                  ThirdTitle="Monthe"
                />
              </div>
            </div>
            <Divider />
            <div className="Chart">
              <RadiaChart />
            </div>
            <div className="RadiaChart-title-main">
              <div className="RadiaChart-title-one">
                <p>3233</p>
                <span>Shirt</span>
              </div>
              <div className="RadiaChart-title-one">
                <p>2344</p>
                <span>Pant</span>
              </div>
              <div className="RadiaChart-title-one">
                <p>1304</p>
                <span>Footwear</span>
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
          <Card style={{ height: "543px" }} className="main-point">
            <div className="main-header">
              <DSeleced Title="Sales by Location" />
              <Selected
                FristTitle="Year"
                SecondTitle="Week"
                ThirdTitle="Monthe"
              />
            </div>
            <DemoTwoTable />
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
          <Card style={{ height: "543px" }} className="main-point">
            <div className="main-header">
              <DSeleced Title="Sales by Location" />
              <Selected
                FristTitle="Year"
                SecondTitle="Week"
                ThirdTitle="Monthe"
              />
            </div>
            <DemoTwoTable />
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
        >
          <Card className="main-point">
          <div className="main-header">
            <DSeleced Title="Active User" />
            <Selected FristTitle="Year" SecondTitle="Week" ThirdTitle="Monthe" />
            </div>
            <TableDesgin />
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col
          className="gutter-row"
          xxl={8}
          xl={8}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <Card></Card>
        </Col>
      </Row>
    </>
  );
};

export default OverViewSection;
