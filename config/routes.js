export default [
    {
        path: '/home',
        component: '@/pages/Home',
        wrappers:['@/untils/auth']
    },
    {
        path: '/mine',
        component: '@/pages/Mine',
        wrappers:['@/untils/auth']
    }
]
