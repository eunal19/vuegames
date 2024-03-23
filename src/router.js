import { createWebHistory, createRouter } from "vue-router";

import AnagramGameVue from "./apps/AnagramGame.vue";
import MathGameVue from "./apps/MathGame.vue";

const routes = [
    {
        path: "/anagram-game",
        component: AnagramGameVue,
    },
    {
        path: "/math-game",
        component: MathGameVue,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;