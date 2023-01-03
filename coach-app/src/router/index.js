import { createRouter, createWebHistory } from "vue-router";
import CoachPage from "../pages/coach/CoachPage.vue";
import RequestPage from "../pages/request/RequestPage.vue";
import RegisterCoach from "../pages/coach/RegisterCoach.vue";
import CoachInfo from "../pages/coach/CoachInfo.vue";
import CoachRequest from "../components/CoachRequest.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "coach", path: "/coaches", component: CoachPage, alias: "/" },
    {
      name: "coachInfo",
      path: "/coaches/:coachId",
      component: CoachInfo,
      props: true,
      children: [
        {
          name: "coachMsg",
          path: "message",
          component: CoachRequest,
          props: true,
        },
      ],
    },
    { name: "request", path: "/requests", component: RequestPage },
    { name: "register", path: "/register", component: RegisterCoach },
  ],
});

export default router;