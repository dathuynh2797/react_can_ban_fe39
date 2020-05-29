import React, { Component } from "react";

import { connect } from "react-redux";
// import { layDanhSachPhimAction } from "../Redux/actions/QuanLyPhimAction";
import { phimService } from "../Service/PhimService";

class LifecycleReact extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // console.log("constructor");
  }

  state = {
    danhSachPhim: [],
  };
  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps");
    return state;
  }

  renderFilms = () => {
    return this.state.danhSachPhim.map((phim, index) => {
      return (
        <div className="card text-left col-3 mt-3" key={index}>
          <img
            className="card-img-top"
            src={phim.hinhAnh}
            alt={phim.tenPhim}
            style={{ width: "100%", height: 400 }}
          />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      );
    });
    // console.log(this.props.danhSachPhim);
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
  componentDidMount() {
    // this.props.dispatch(layDanhSachPhimAction());
    phimService
      .layDanhSachPhim()
      .then((res) => this.setState({ danhSachPhim: res.data }));
  }
}

// const mapStateToProps = (state) => ({
//   danhSachPhim: state.phimState.danhSachPhim,
// });
// const mapDispatchToProps = (dispatch) => ({
//   layDanhSachPhim: () => {
//     dispatch(layDanhSachPhimAction());
//   },
// });
export default connect()(LifecycleReact);
