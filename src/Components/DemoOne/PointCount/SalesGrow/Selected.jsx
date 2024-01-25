import { useState } from "react";

const Selected = ({FristTitle, SecondTitle, ThirdTitle}) => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (index) => {
    setSelected(index === selected ? "null" : index);
  };

  return (
    <div>
      <div className="weeks">
        <ul>
          <p
            style={{
              backgroundColor:
                selected === 0 ? "rgb(242, 234, 251)" : "transparent",
              color:
                selected === 0 ? "rgb(130, 49, 211)" : "rgb(116, 116, 116)",
            }}
            onClick={() => handleSelected(0)}
          >
            {FristTitle}
          </p>
          <p
            style={{
              backgroundColor:
                selected === 1 ? "rgb(242, 234, 251)" : "transparent",
              color:
                selected === 1 ? "rgb(130, 49, 211)" : "rgb(116, 116, 116)",
            }}
            onClick={() => handleSelected(1)}
          >
            {SecondTitle}
          </p>
          <p
            style={{
              backgroundColor:
                selected === 2 ? "rgb(242, 234, 251)" : "transparent",
              color:
                selected === 2 ? "rgb(130, 49, 211)" : "rgb(116, 116, 116)",
            }}
            onClick={() => handleSelected(2)}
          >
            {ThirdTitle}
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Selected;
