import { Card, Col, Row, Spin } from "antd";
import "./DemoFive.css";

// img

import { useEffect, useState } from "react";
import laptopImg from "../../assets/SettingImg/laptop-img.png";
import CleanderSec from "./Cleander/CleanderSec";

const DemoFive = () => {
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
                <Card className="main-point f" style={{ height: "286px" }}>
                  <Row gutter={24}>
                    <Col
                      className="gutter-row"
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={24}
                      xs={24}
                    >
                      <div className="Welcome-main">
                        <div className="Welcome-content">
                          <h2>Hey Danial! Welcome to the Dashboard</h2>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, ut the majority have suffered passages of
                            Lorem Ipsum available alteration in some form
                          </p>
                          <button>Learn More</button>
                        </div>
                      </div>
                    </Col>
                    <Col
                      className="gutter-row"
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={24}
                      xs={24}
                    >
                      <div className="Welcome-img">
                        <img src={laptopImg} alt="" />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </section>

          <section>
            <CleanderSec />
          </section>
        </main>
      )}
    </>
  );
};

export default DemoFive;
