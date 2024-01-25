import { Spin } from "antd";
import { useEffect, useState } from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import "./DemoFour.css";
import Performance from "./Performance/Performance";

const DemoFour = () => {
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
            <Performance />
          </section>
        </main>
      )}
    </>
  );
};

export default DemoFour;
