import Home from './views/home/Home.svelte';
import Blog from './views/blog/Blog.svelte';
import { writable } from 'svelte/store';
const router = {
    '/': Home,
    '/home': Home,
    '/blog': Blog
}
export default router;
export const curRoute = writable('/home');