import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/getMenu',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            path: '/dashboard',
            name: 'Dashboard',
            component: 'Layout',
            icon: 'a',
            children: [
              {
                path: 'index',
                name: 'DashboardIndex',
                component: '/views/dashboard/index.vue',
              },
            ],
          },
          {
            path: '/feat',
            name: 'Feat',
            component: 'Layout',
            icon: 'a',
            children: [
              {
                path: 'icon',
                name: 'Icon',
                component: '/views/feat/icon/index.vue',
              },
              {
                path: 'ws',
                name: 'WS',
                component: '/views/feat/ws/index.vue',
              },
            ],
          },
        ],
      }
    },
  },
] as MockMethod[]
