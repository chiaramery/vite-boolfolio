import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./src/pages/HomePage.vue";
import AboutUs from "./src/pages/AboutUs.vue";
import ProjectsList from "./src/pages/ProjectsList.vue";
import NotFound from "./src/pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about-us",
            name: "about",
            component: AboutUs,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList,
        },
        {
            path: "/pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },

    ],
});

export { router };