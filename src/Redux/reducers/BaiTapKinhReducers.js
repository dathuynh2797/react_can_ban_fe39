const stateKinh = {
  thongTinKinh: {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
};

const BaiTapKinhReducer = (state = stateKinh, action) => {
  switch (action.type) {
    case "DOI_KINH":
      return {
        ...state,
        thongTinKinh: {
          ...action.thongTinKinh,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default BaiTapKinhReducer;
