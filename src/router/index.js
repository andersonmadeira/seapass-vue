import VueRouter from "vue-router";
import Entry from "../components/Entry";
import Home from "../components/Home";

const routes = [
  { path: "/", component: Home, name: "FOo" },
  { path: "/entry/:entryId", component: Entry, name: "Foo2" }
];

const router = new VueRouter({
  routes
});

export default router;
