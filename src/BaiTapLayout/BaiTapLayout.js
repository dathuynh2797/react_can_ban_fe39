import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
