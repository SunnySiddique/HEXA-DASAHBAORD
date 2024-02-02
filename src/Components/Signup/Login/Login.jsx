/* eslint-disable react/no-unescaped-entities */
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Spin,
} from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import "../SignUp.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const firebase = useFirebase();
  console.log(firebase);

  const handleSignup = async () => {
    try {
      setloading(true);
      await firebase.LoginPages(email, password);
      setShowAlert(true);
      setloading(false);
    } catch (error) {
      setShowAlert(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 50000);
      setloading(false);
    }
  };

  useEffect(() => {
    if (firebase.LoginIn) {
      navigate("/demoone");
    }
  }, [firebase, navigate]);

  return (
    <Spin spinning={loading} size="large">
      <main>
        <section style={{ marginTop: "70px" }}>
          {/* <div className="login-img">
            <img src={logoimg} alt="" />
          </div> */}
          <div className="login-container">
            <div className="Signup-main">
              <div className="header">
                <h2>Sign up HexaDash</h2>
              </div>
              <Divider />
              <div className="icons-login">
                <div className="main-icons-login">
                  <span
                    style={{
                      backgroundColor: "rgba(240, 101, 72, 0.063)",
                      cursor: 'pointer'
                    }}
                    onClick={() => firebase.googleWithSign()}
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
              <div className="divider">
                <Divider>
                  <span>Or</span>
                </Divider>
              </div>
              <div className="Signup-mains">
                <div className="error" style={{ margin: "20px 0" }}>
                  {showAlert && ( // Show the alert only when showAlert is true
                    <Alert
                      type="error"
                      message={firebase.err}
                      onClose={() => setShowAlert(false)} // Close the alert when onClose event occurs
                      closable
                    />
                  )}
                </div>
                <Form onFinish={(e) => handleSignup(e)}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} xxl={24} xl={24} lg={24} md={24}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="Email"
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} xxl={24} xl={24} lg={24} md={24}>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Password"
                          type="password"
                          size="large"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="checkBox-main">
                    <div className="checkbox">
                      <Checkbox className="check">Keep me logged in</Checkbox>
                    </div>
                    <div className="checkbox-text">
                      <p>Forgot password?</p>
                    </div>
                  </div>
                  <div className="signup-button">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Login
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>

              <div className="create-title">
                <small>
                  Already have an account?{" "}
                  <Link to="/signup">Create an account</Link>
                </small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Spin>
  );
};

export default LoginPage;
