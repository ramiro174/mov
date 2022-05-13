require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        const vuetify = createVuetify({ components, directives });

        return createApp({ render: () => h(app, props) })
        .use(plugin)
        .use(vuetify)
        .mixin({ methods: { route } })
        .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
