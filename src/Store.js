import createStore from "unistore";

export const store = createStore({
  nama: "",
  email: "",
  isLogin: false,
  listNews: [],
  search: {
    placeHolder: "search...",
    keyword: "search..."
  }
});

export const actions = store => ({
  setNama(state, namaInput) {
    return {
      nama: namaInput
    };
  },
  setEmail(state, emailInput) {
    return {
      email: emailInput
    };
  },
  setLogin(state, loginInput) {
    return {
      isLogin: loginInput
    };
  },
  //   setLogout(state) {
  //     return {
  //       isLogin: false
  //     };
  //   },
  setListNews(state, listNewsInput) {
    return {
      listNews: listNewsInput
    };
  }
  // setSearch(state, inputSearch) {
  //   return {

  //   }
  // }
});
