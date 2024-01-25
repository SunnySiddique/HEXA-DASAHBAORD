const NotificationPopoverContent = () => {
  return (
    <div className="main-div">
      <div className="message-main">
        <div className="message-title">
          <p>Notifications</p>
        </div>
        <div className="message-title-ball">
          <span>3</span>
        </div>
      </div>
      <div className="message-img-main" style={{ marginBottom: "20px" }}>
        <div className="message-img">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22,14.86a0,0,0,0,1,0,0v-.05a2.61,2.61,0,0,0-.1-.57L20.26,4.51a3,3,0,0,0-3-2.51H6.69A3,3,0,0,0,3.74,4.51L2.12,14.22a2.61,2.61,0,0,0-.1.57v.05a0,0,0,0,1,0,0C2,14.91,2,15,2,15v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15C22,15,22,14.91,22,14.86ZM5.71,4.83a1,1,0,0,1,1-.83H17.31a1,1,0,0,1,1,.83l1.2,7.22A2.63,2.63,0,0,0,19,12H5a2.63,2.63,0,0,0-.49.05ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15.08l.08-.46A1,1,0,0,1,5,14H19a1,1,0,0,1,.92.62l.08.46Zm-3-3a1,1,0,1,0,1,1A1,1,0,0,0,17,16Z"></path>
            </svg>
          </span>
        </div>
        <div className="message-content">
          <div className="message-title-mains">
            <div className="message-title-one">
              <p className="james-title">
                James <span> sent you a message</span>
              </p>
            </div>
            <div className="message-title-twos"></div>
          </div>
          <div className="message-title-main">
            <div className="message-title-three">
              <small>5 hrs ago</small>
            </div>
          </div>
        </div>
      </div>
      {/* one */}
      <div className="message-img-main" style={{ marginBottom: "20px" }}>
        <div className="message-img">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z"></path>
            </svg>
          </span>
        </div>
        <div className="message-content">
          <div className="message-title-mains">
            <div className="message-title-one">
              <p className="james-title">
                James <span> sent you a message</span>
              </p>
            </div>
            <div className="message-title-twos"></div>
          </div>
          <div className="message-title-main">
            <div className="message-title-three">
              <small>5 hrs ago</small>
            </div>
          </div>
        </div>
      </div>
      {/* two */}
      <div className="message-img-main" style={{ marginBottom: "20px" }}>
        <div className="message-img">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z"></path>
            </svg>
          </span>
        </div>
        <div className="message-content">
          <div className="message-title-mains">
            <div className="message-title-one">
              <p className="james-title">
                James <span> sent you a message</span>
              </p>
            </div>
            <div className="message-title-twos"></div>
          </div>
          <div className="message-title-main">
            <div className="message-title-three">
              <small>5 hrs ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <button>See all incoming activity</button>
      </div>
    </div>
  );
};

export default NotificationPopoverContent;
