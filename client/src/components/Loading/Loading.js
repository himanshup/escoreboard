import React from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin-top: 150px;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <ClipLoader
        className={override}
        sizeUnit={"px"}
        size={70}
        color={"#222823"}
      />
    </div>
  );
};

export default Loading;
