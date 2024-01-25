const IconsCard = ({icon, title, smallTitle, backgroundColor}) => {
  return (
    <>
      <div className="social-icons" style={{textAlign: "center"}}>
        <span style={{backgroundColor}}>
          {icon}
        </span>
        <p>
            {title}
        </p>
        <small>
            {smallTitle}
        </small>
      </div>
    </>
  );
};

export default IconsCard;
