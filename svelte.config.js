import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from '@unocss/svelte-scoped/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), UnoCSS({
        class: 'thodle-'
    })],

    kit: {
        adapter: adapter(),
        alias: {
            $sections: './src/sections'
        }
    }
};

export default config;
