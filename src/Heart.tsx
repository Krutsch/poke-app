import React from "react";
const heartStyle = {
  fill: "rgba(255, 0, 0, 0.3)",
  width: "20px",
  marginRight: "10px"
};
const full = {
  fill: "red"
};

function Heart(props: any) {
  return (
    <>
      <svg
        style={props.class ? { ...heartStyle, ...full } : heartStyle}
        viewBox="0 0 32 29.6"
      >
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
        />
      </svg>
    </>
  );
}

export default Heart;
