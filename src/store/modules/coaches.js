import axios from "axios";

export default {
  namespaced: true,
  state: {
    //Fetched coaches from server
    coaches: [],

    //Coachs to be displayed on screen
    displayedCoaches: [],

    //Array of filter values from checkbox filter
    filterGroup: [],

    identifiedCoach: null,
  },
  getters: {
    coaches: (state) => {
      return state.displayedCoaches;
    },
    filterGroup: (state) => {
      return state.filterGroup;
    },
    identifiedCoach: (state) => {
      return state.identifiedCoach;
    },
  },
  mutations: {
    setCoaches(state, payLoad) {
      state.coaches = Object.values(payLoad);
    },
    setFilterValues(state, payLoad) {
      state.filterGroup = payLoad;
    },
    setDisplayedCoaches(state) {
      const expecificFilters = state.filterGroup;
      state.displayedCoaches = [];
      if (expecificFilters.length) {
        state.coaches.forEach((element) => {
          element.specialties.forEach((speciality) => {
            if (
              expecificFilters.includes(speciality) &&
              !state.displayedCoaches.includes(element)
            ) {
              state.displayedCoaches.push(element);
            }
          });
        });
      } else {
        state.displayedCoaches = state.coaches;
      }
    },
    setIdentifiedCoach(state, payLoad) {
      state.identifiedCoach = payLoad;
    },
  },
  actions: {
    refreshPage({ dispatch }) {
      dispatch("getCoaches");
    },
    getCoaches({ commit }) {
      axios
        .get(
          "https://vue-findacoach-app-default-rtdb.firebaseio.com/coaches.json"
        )
        .then((response) => {
          const fetchedData = response.data;
          commit("setCoaches", fetchedData);
          commit("setDisplayedCoaches");
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getFilterValues({ commit }, payLoad) {
      commit("setFilterValues", payLoad);
      commit("setDisplayedCoaches");
    },
    identifyCoach({ commit, state }, payLoad) {
      const identifiedCoach = state.displayedCoaches.find(
        (coach) => coach.name == payLoad
      );
      commit("setIdentifiedCoach", identifiedCoach);
    },
  },
};
