import React, { Component } from "react";
import { connect } from "react-redux";

class Kinh extends Component {
  render() {
    let { url } = this.props.mangSP;
    return (
      <div>
        <img
          src={url}
          alt="12"
          style={{ width: "100%" }}
          onClick={() => {
            this.props.doiKinh(this.props.mangSP);
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doiKinh: (thongTinKinh) => {
      let action = {
        type: "DOI_KINH",
        thongTinKinh: thongTinKinh,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Kinh);
