import React, { Component } from "react";

export default class DataBinding extends Component {
  render() {
    const title = "cybersoft";
    const hocVien = { ma: 1, ten: "Teo" };
    const renderImg = () => {
      return (
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" />
      );
    };

    return (
      <div>
        <p>{title}</p>
        <div>
          <ul>
            <li>Ma: {hocVien.ma}</li>
            <li>Ten: {hocVien.ten}</li>
          </ul>
        </div>
        <div>{renderImg()}</div>
      </div>
    );
  }
}
