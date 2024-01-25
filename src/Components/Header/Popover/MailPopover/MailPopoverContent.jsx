import messageImage from "../../../../assets/heaxaimg/messageImage.png";

const MailPopoverContent = () => {
  return (
    <>
      <div className="man-div">
        <div className="message-main">
          <div className="message-title">
            <p>Messages</p>
          </div>
          <div className="message-title-ball">
            <span>3</span>
          </div>
        </div>
        <div className="message-img-main" style={{ marginBottom: "20px" }}>
          <div className="message-img">
            <img src={messageImage} alt="" />
          </div>
          <div className="message-content">
            <div className="message-title-main">
              <div className="message-title-one">
                <h6>Software</h6>
              </div>
              <div className="message-title-two">
                <small>3 hrs ago</small>
              </div>
            </div>
            <div className="message-title-main">
              <div className="message-title-three">
                <small>Lorem ipsum dolor amet cosec...</small>
              </div>
              <div className="message-title-balls">
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        {/* one  */}
        <div className="message-img-main" style={{ marginBottom: "20px" }}>
          <div className="message-img">
            <img src={messageImage} alt="" />
          </div>
          <div className="message-content">
            <div className="message-title-main">
              <div className="message-title-one">
                <h6>Software</h6>
              </div>
              <div className="message-title-two">
                <small>3 hrs ago</small>
              </div>
            </div>
            <div className="message-title-main">
              <div className="message-title-three">
                <small>Lorem ipsum dolor amet cosec...</small>
              </div>
              <div className="message-title-balls">
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="message-img-main">
          <div className="message-img">
            <img src={messageImage} alt="" />
          </div>
          <div className="message-content">
            <div className="message-title-main">
              <div className="message-title-one">
                <h6>Software</h6>
              </div>
              <div className="message-title-two">
                <small>3 hrs ago</small>
              </div>
            </div>
            <div className="message-title-main">
              <div className="message-title-three">
                <small>Lorem ipsum dolor amet cosec...</small>
              </div>
              <div className="message-title-balls">
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailPopoverContent;
