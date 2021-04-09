import { createRouter }     from  'vue-router';
import { createWebHistory } from 'vue-router';

const MainPage   = () => import("./pages/mediaplayer/MediaPlayer.vue");
const ArtistPage = () => import("./pages/artists/Artists.vue");
const NotFound   = () => import ("./pages/exceptions/NotFound.vue");


const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/artists',
        component: ArtistPage
    },
    {
        path: '/:notFound(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;