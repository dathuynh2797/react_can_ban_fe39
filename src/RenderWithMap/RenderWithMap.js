import React, { Component } from "react";

export default class RenderWithMap extends Component {
  data = [
    { id: 1, name: "Iphone X", price: 1000 },
    { id: 2, name: "Note 10+", price: 2000 },
    { id: 3, name: "Sony XZ2", price: 3000 },
  ];

  renderTable = () => {
    // let arrContent = [];
    //Cách 1: Render Với for
    // for (let i in this.data) {
    //   let product = this.data[i];
    //   let tagProduct = (
    //     <tr key={i}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td></td>
    //     </tr>
    //   );
    //   arrContent.push(tagProduct);
    // }

    //Cách 2: Render với Map
    let arrContent = this.data.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td></td>
        </tr>
      );
    });
    return arrContent;
  };

  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
