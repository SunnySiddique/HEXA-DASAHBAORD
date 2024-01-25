import CountUp from "react-countup";

export default function DemoPointCard({
    count,
    icon,
    title,
    footerIcon,
    footerSmallTitle,
    footerTitles,
    backgroundColor,
  }) {
    return (
      <>
        <div className="point-main">
          <div className="point-count">
            <span>
              <p style={{ fontWeight: 500 }}>{title}</p>
              <CountUp end={count} duration={5}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
          </div>
          <div className="point-icons" style={{ backgroundColor }}>
            {icon}
          </div>
        </div>
        <div className="footer-titles" style={{ background: "transparent" }}>
          <span>
            {footerIcon}
            <p>{footerSmallTitle}</p>
          </span>
          <p>{footerTitles}</p>
        </div>
      </>
    );
  }
  