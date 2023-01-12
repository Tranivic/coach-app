import { createStore } from "vuex";
import coachesModule from "./modules/coaches.js";
import requests from "./modules/requests.js";
import moment from "moment";

export default createStore({
  modules: {
    coachesModule,
    requests,
  },
  state: {},
  getters: {
    // Function to return a unique id when requested.
    randomId() {
      return `${moment().format("DDMMYY")}RQST${moment().format("Hmmss")}`;
    },
  },
  mutations: {},
  actions: {},
});
