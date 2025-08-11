import { createRouter, createWebHistory } from "vue-router";

// Import the pages
import Landingpage from "@/views/Landingpage.vue";

// Define your routes
const routes = [
    {
        path: "/landingpage",
        name: "Landingpage",
        component: Landingpage,
    },
    {
        path: "/",
        redirect: "/login",
    },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
