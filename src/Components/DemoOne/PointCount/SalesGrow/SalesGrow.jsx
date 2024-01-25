import { Card, Col, Row } from "antd";
import DSeleced from "../../../dSeleced/dSeleced";
import BrowserState from "./BrowserState/BrowserState";
import ColmunChart from "./ColmunChart";
import "./Sales.css";
import Selected from "./Selected";
import Table from "./Table";
import TopSaling from "./TopSealing/TopSaling";

const SalesGrow = () => {
  return (
    <>
      <Row gutter={24}>
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
              <ColmunChart />
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
      <Row gutter={24}>
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
    </>
  );
};

export default SalesGrow;
