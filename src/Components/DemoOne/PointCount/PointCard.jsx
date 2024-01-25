import CountUp from "react-countup";

export default function PointCard({
  count,
  icon,
  title,
  footerIcon,
  footerSmallTitle,
  footerTitles,
  backgroundColor,
}) {
  return (
    <div className="main-point">
      <div className="point-main">
        <div className="point-count">
          <span>
            <CountUp end={count} duration={5}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </span>
          <p>{title}</p>
        </div>
        <div className="point-icon" style={{ backgroundColor }}>
          {icon}
        </div>
      </div>
      <div className="footer-title">
        <span>
          {footerIcon}
          <p>{footerSmallTitle}</p>
        </span>
        <p>{footerTitles}</p>
      </div>
    </div>
  );
}
