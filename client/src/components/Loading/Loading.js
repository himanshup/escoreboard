import React, { Component } from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
const override = css`
  display: block;
  margin-top: 150px;
  border-color: red;
`;

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="text-center mt-5">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={70}
          color={"#222823"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
