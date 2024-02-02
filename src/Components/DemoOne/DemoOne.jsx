import { Spin } from "antd";
import { useEffect, useState } from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import "./Demo.css";
import PointCount from "./PointCount/PointCount";

const DemoOne = () => {
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
        <div>
          <HeaderTitle />
          <div className="point-count-main">
            <PointCount />
          </div>
        </div>
      )}
    </>
  );
};

export default DemoOne;
