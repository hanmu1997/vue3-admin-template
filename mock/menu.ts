import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/getMenus',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: [
          {
            path: '/dashboard',
            name: 'Dashboard',
            component: 'Layout',
            redirect: '/dashboard/index',
            meta: {
              title: 'Dashboard',
            },
            icon: 'a',
            children: [
              {
                path: 'index',
                name: 'DashboardIndex',
                component: '/views/dashboard/index.vue',
                meta: {
                  title: 'DashboardIndex',
                },
              },
            ],
          },
          {
            path: '/feat',
            name: 'Feat',
            component: 'Layout',
            icon: 'a',
            meta: {
              title: 'Feat',
            },
            children: [
              {
                path: 'icon',
                name: 'Icon',
                component: '/views/feat/icon/index.vue',
                meta: {
                  title: 'Icon',
                },
              },
              {
                path: 'ws',
                name: 'WS',
                component: '/views/feat/ws/index.vue',
                meta: {
                  title: 'WS',
                },
              },
            ],
          },
        ],
      }
    },
  },
] as MockMethod[]
