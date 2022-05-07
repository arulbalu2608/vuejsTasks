import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/Helloworld/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/incremnet-decrement",
    name: "incrementDecrement",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/IncrementDecrement/IncrementDecrement.vue"
      ),
  },
  {
    path: "/login-form",
    name: "loginForm",
    component: () => import("../components/LoginForm/LoginForm.vue"),
  },
  {
    path: "/conditional-rendering",
    name: "conditionalrendering",
    component: () =>
      import("../components/ConditionalRendering/ConditionalRendering.vue"),
  },
  {
    path: "/loop-concept",
    name: "loopConcept",
    component: () => import("../components/LoopConcept/LoopConcept.vue"),
  },
  {
    path: "/increment-by-vue",
    name: "incrementByVuex",
    component: () =>
      import("../components/IncrementWithVuex/IncrementWithVuex.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
