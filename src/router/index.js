import { createRouter, createWebHistory } from "vue-router";
import CoachPage from "../pages/coach/CoachPage.vue";
import RequestPage from "../pages/request/RequestPage.vue";
import CoachRegistration from "../pages/coach/CoachRegistration.vue";
import CoachInfo from "../pages/coach/CoachInfo.vue";
import CoachMessage from "../components/CoachMessage.vue";

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
          component: CoachMessage,
          props: true,
        },
      ],
    },
    { name: "request", path: "/requests", component: RequestPage },
    { name: "register", path: "/register", component: CoachRegistration },
  ],
});

export default router;
