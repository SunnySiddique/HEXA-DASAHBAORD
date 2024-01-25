  /* eslint-disable react/no-unescaped-entities */
  import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Checkbox, Col, Divider, Form, Input, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import logoimg from "../../assets/heaxaimg/logo_dark.976ec3ef42cbf43c53c7e9f732da439f.svg";
import "./Login.css";

  const Login = () => {

    const navigate = useNavigate();

    const HandleLogin = () => {
      navigate("/");
      message.success("You Logged In Successfully test");
    };

    return (
      <main>
        <section style={{marginTop: "70px"}}>
          <div className="login-img">
            <img src={logoimg} alt="" />
          </div>
          <div className="login-container">
            <div className="Signup-main">
              <div className="header">
                <h2>Sign in HexaDash</h2>
              </div>
              <Divider />
              <div className="Signup-mains">
                <Form>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} xxl={24} xl={24} lg={24} md={24}>
                      <Form.Item name="email">
                        <Input
                          placeholder="Email"
                          defaultValue={"demo@example.com"}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} xxl={24} xl={24} lg={24} md={24}>
                      <Form.Item name="password">
                        <Input
                          placeholder="Password"
                          type="password"
                          defaultValue={"4444444444"}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <div className="checkBox-main">
                  <div className="checkbox">
                    <Checkbox className="check">Keep me logged in</Checkbox>
                  </div>
                  <div className="checkbox-text">
                    <p>Forgot password?</p>
                  </div>
                </div>
                <div className="signup-button">
                  <button
                    style={{ width: "100%", marginTop: "20px" }}
                    type="primary"
                    onClick={HandleLogin}
                  >
                    <p>Sign in</p>
                  </button>
                  <div className="divider">
                    <Divider>
                      <span>Or</span>
                    </Divider>
                  </div>
                </div>
              </div>
              <div className="icons-login">
                <div className="main-icons-login">
                  <span
                    style={{
                      backgroundColor: "rgba(240, 101, 72, 0.063)",
                    }}
                  >
                    <GoogleOutlined style={{ color: "rgb(240, 101, 72)" }} />
                  </span>
                  <span style={{ backgroundColor: "rgba(58, 88, 155, 0.063)" }}>
                    <FacebookOutlined style={{ color: "rgb(58, 88, 155)" }} />
                  </span>
                  <span style={{ backgroundColor: "rgba(3, 169, 244, 0.063)" }}>
                    <TwitterOutlined style={{ color: " rgb(3, 169, 244)" }} />
                  </span>
                  <span style={{ backgroundColor: "rgba(3, 169, 244, 0.063)" }}>
                    <GithubOutlined style={{ color: " rgb(9, 14, 48)" }} />
                  </span>
                </div>
              </div>
              <div className="create-title">
                <small>
                  Don't have an account? <span> Create an account</span>
                </small>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };

  export default Login;
