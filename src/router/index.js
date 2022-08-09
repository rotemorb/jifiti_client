import Vue from "vue";
import VueRouter from "vue-router";
import PersonsView from "../views/PersonsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "persons",
    component: PersonsView,
  },
  {
    path: "/Transactions/:appId",
    name: "Transactions",
    // lazy-loading
    component: () => import("../views/TransactionsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
