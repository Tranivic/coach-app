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
      const fetchedCoaches = payLoad;
      for (let coach in fetchedCoaches) {
        state.coaches.push({
          id: coach,
          firstName: fetchedCoaches[coach].firstName,
          lastName: fetchedCoaches[coach].lastName,
          description: fetchedCoaches[coach].description,
          hourlyRate: fetchedCoaches[coach].hourlyRate,
          specialties: fetchedCoaches[coach].areas,
        });
      }
    },
    setFilterValues(state, payLoad) {
      state.filterGroup = payLoad;
    },
    setDisplayedCoaches(state) {
      const selectedFilters = state.filterGroup;
      state.displayedCoaches = [];
      if (selectedFilters.length) {
        state.coaches.forEach((element) => {
          element.specialties.forEach((speciality) => {
            if (
              selectedFilters.includes(speciality) &&
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
    registerCoach({ commit }, payLoad) {
      const coachData = payLoad.coachData;
      const userId = payLoad.userId;
      axios
        .put(
          `https://vue-findacoach-app-default-rtdb.firebaseio.com/coaches/${userId}.json`,
          {
            ...coachData,
          }
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
    refreshPage({ dispatch, state }) {
      state.displayedCoaches = [];
      state.coaches = [];
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
