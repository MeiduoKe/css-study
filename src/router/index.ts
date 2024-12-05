import {createRouter, createWebHistory, Router} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/HomePage.vue'),
    },
    {
        path: '/font',
        children: [
            {
                path: 'style',
                name: 'FontStudy',
                component: () => import('@/view/font-style/font/FontStudy.vue'),
            }
        ]
    },
    {
        path: '/pseudo',
        children: [
            {
                path: 'style',
                name: 'PseudoClass',
                component: () => import('@/view/pseudo-class/PseudoClass.vue'),
            }
        ]
    }
    ,
    {
        path: '/element',
        children: [
            {
                path: 'style',
                name: 'PseudoElement',
                component: () => import('@/view/pseudo-element/PseudoElement.vue'),
            }
        ]
    }
    ,
    {
        path: '/selection',
        children: [
            {
                path: 'demo1',
                name: 'SelectionDemo',
                component: () => import('@/view/selection/SelectionDemo.vue'),
            }
        ]
    }
    ,
    {
        path: '/box',
        children: [
            {
                path: 'style',
                name: 'BoxStyle',
                component: () => import('@/view/box/BoxStyle.vue'),
            }
        ]
    }
    ,
    {
        path: '/sticky',
        children: [
            {
                path: 'style',
                name: 'StickyDemo',
                component: () => import('@/view/sticky/StickyDemo.vue'),
            }
        ]
    }
    ,
    {
        path: '/center',
        children: [
            {
                path: 'style',
                name: 'CenterStyle',
                component: () => import('@/view/center/CenterStyle.vue'),
            }
        ]
    }
    ,
    {
        path: '/opacity-alpha',
        children: [
            {
                path: 'style',
                name: 'OpacityAlpha',
                component: () => import('@/view/opacity-alpha/OpacityAlpha.vue'),
            }
        ]
    }
    ,
    {
        path: '/layout',
        children: [
            {
                path: 'side',
                name: 'TwoSide',
                component: () => import('@/view/layout/TwoSide.vue'),
            },
            {
                path: 'wing',
                name: 'DoubleWing',
                component: () => import('@/view/layout/DoubleWing.vue'),
            }
        ]
    }
    ,
    {
        path: '/shadow',
        children: [
            {
                path: 'box',
                name: 'BoxShadow',
                component: () => import('@/view/shadow/BoxShadow.vue'),
            },
            {
                path: 'both-side',
                name: 'ImgBothSide',
                component: () => import('@/view/shadow/ImgBothSide.vue'),
            }
        ]
    }
    ,
    {
        path: '/gradient',
        children: [
            {
                path: 'line',
                name: 'LineGradient',
                component: () => import('@/view/gradient/LineGradient.vue'),
            }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;