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
      const newRequest = {
        senderName: payLoad.fullName,
        msgType: payLoad.messageType,
        message: payLoad.message,
        sendDate: payLoad.sendDate,
      }
      axios
        .put(
          `https://vue-findacoach-app-default-rtdb.firebaseio.com/requests/${payLoad.msgFor}/${payLoad.messageId}.json`,
          newRequest
        )
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
