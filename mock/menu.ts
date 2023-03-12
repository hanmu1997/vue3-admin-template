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
                component: '/views/dashboard',
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
            redirect: '/feat/feat1',
            icon: 'a',
            meta: {
              title: 'Feat',
            },
            children: [
              {
                path: 'feat1',
                name: 'Feat1',
                component: '/views/feat/feat1',
                meta: {
                  title: 'feat1',
                },
              },
              {
                path: 'feat2',
                name: 'Feat2',
                component: '/views/feat/feat2',
                meta: {
                  title: 'feat2',
                },
              },
            ],
          },
        ],
      }
    },
  },
] as MockMethod[]
