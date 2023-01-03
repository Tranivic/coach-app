import { createStore } from "vuex";
import axios from "axios";
import coachesModule from "./modules/coaches.js";
import requests from "./modules/requests.js";

export default createStore({
  modules: {
    coachesModule,
    requests,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
