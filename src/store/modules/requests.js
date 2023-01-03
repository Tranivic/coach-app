import axios from "axios";

export default {
  namespaced: true,
  state: {
    requestWasSent: false,
    allRequests: [],
  },
  getters: {
    getRequests(state) {
      return state.allRequests;
    },
  },
  mutations: {
    setRequests(state, payLoad) {
      state.allRequests = Object.values(payLoad).reverse();
    },
  },
  actions: {
    postRequest({}, payLoad) {
      axios
        .post(
          "https://vue-findacoach-app-default-rtdb.firebaseio.com/requests.json",
          payLoad
        )
        .then((response) => {
          //Todo
          console.log(response);
        })
        .catch((error) => {
          //Todo
          console.log(error);
        });
    },
    fetchRequests({ commit }) {
      axios
        .get(
          "https://vue-findacoach-app-default-rtdb.firebaseio.com/requests.json"
        )
        .then((response) => {
          commit("setRequests", response.data);
        });
    },
  },
};
