import express from 'express'
const searchData = [
    {
      id: 1,
      url: '/dashboards/analytics',
      icon: 'tabler:chart-pie-2',
      title: 'Analytics Dashboard',
      category: 'dashboards'
    },
    {
      id: 2,
      url: '/dashboards/crm',
      icon: 'tabler:device-analytics',
      title: 'CRM Dashboard',
      category: 'dashboards'
    },
    {
      id: 3,
      url: '/dashboards/ecommerce',
      icon: 'tabler:shopping-cart',
      title: 'eCommerce Dashboard',
      category: 'dashboards'
    },
    {
      id: 4,
      url: '/apps/email',
      icon: 'tabler:mail',
      title: 'Email',
      category: 'appsPages'
    },
    {
      id: 5,
      url: '/apps/chat',
      icon: 'tabler:messages',
      title: 'Chat',
      category: 'appsPages'
    },
    {
      id: 6,
      url: '/apps/calendar',
      icon: 'tabler:calendar',
      title: 'Calendar',
      category: 'appsPages'
    },
    {
      id: 7,
      url: '/apps/invoice/list',
      icon: 'tabler:list-numbers',
      title: 'Invoice List',
      category: 'appsPages'
    },
    {
      id: 8,
      url: '/apps/invoice/preview',
      icon: 'tabler:file-text',
      title: 'Invoice Preview',
      category: 'appsPages'
    },
    {
      id: 9,
      url: '/apps/invoice/edit',
      icon: 'tabler:file-pencil',
      title: 'Invoice Edit',
      category: 'appsPages'
    },
    {
      id: 10,
      url: '/apps/invoice/add',
      icon: 'tabler:file-plus',
      title: 'Invoice Add',
      category: 'appsPages'
    },
    {
      id: 11,
      url: '/apps/user/list',
      icon: 'tabler:users',
      title: 'User List',
      category: 'appsPages'
    },
    {
      id: 12,
      url: '/apps/user/view/account',
      icon: 'tabler:user',
      title: 'User View - Account',
      category: 'appsPages'
    },
    {
      id: 13,
      url: '/apps/user/view/security',
      icon: 'tabler:lock',
      title: 'User View - Security',
      category: 'appsPages'
    },
    {
      id: 14,
      url: '/apps/user/view/billing-plan',
      icon: 'tabler:currency-dollar',
      title: 'User View - Billing & Plans',
      category: 'appsPages'
    },
    {
      id: 15,
      url: '/apps/user/view/notification',
      icon: 'tabler:bell',
      title: 'User View - Notification',
      category: 'appsPages'
    },
    {
      id: 16,
      url: '/apps/user/view/connection',
      icon: 'tabler:link',
      title: 'User View - Connection',
      category: 'appsPages'
    },
    {
      id: 17,
      url: '/apps/roles',
      icon: 'tabler:shield',
      title: 'Roles',
      category: 'appsPages'
    },
    {
      id: 18,
      url: '/apps/permissions',
      icon: 'tabler:lock',
      title: 'Permissions',
      category: 'appsPages'
    },
    {
      id: 19,
      url: '/pages/user-profile/profile',
      icon: 'tabler:user-circle',
      title: 'User Profile',
      category: 'appsPages'
    },
    {
      id: 20,
      url: '/pages/user-profile/teams',
      icon: 'tabler:users',
      title: 'User Profile - Teams',
      category: 'appsPages'
    },
    {
      id: 21,
      url: '/pages/user-profile/projects',
      icon: 'tabler:layout-grid',
      title: 'User Profile - Projects',
      category: 'appsPages'
    },
    {
      id: 22,
      url: '/pages/user-profile/connections',
      icon: 'tabler:link',
      title: 'User Profile - Connections',
      category: 'appsPages'
    },
    {
      id: 23,
      url: '/pages/account-settings/account',
      icon: 'tabler:settings',
      title: 'Account Settings',
      category: 'appsPages'
    },
    {
      id: 24,
      url: '/pages/account-settings/security',
      icon: 'tabler:lock',
      title: 'Account Settings - Security',
      category: 'appsPages'
    },
    {
      id: 25,
      url: '/pages/account-settings/billing',
      icon: 'tabler:currency-dollar',
      title: 'Account Settings - Billing',
      category: 'appsPages'
    },
    {
      id: 26,
      url: '/pages/account-settings/notifications',
      icon: 'tabler:bell',
      title: 'Account Settings - Notifications',
      category: 'appsPages'
    },
    {
      id: 27,
      url: '/pages/account-settings/connections',
      icon: 'tabler:link',
      title: 'Account Settings - Connections',
      category: 'appsPages'
    },
    {
      id: 28,
      url: '/pages/faq',
      icon: 'tabler:help',
      title: 'FAQ',
      category: 'appsPages'
    },
    {
      id: 29,
      url: '/pages/help-center',
      icon: 'tabler:help',
      title: 'Help Center',
      category: 'appsPages'
    },
    {
      id: 30,
      url: '/pages/pricing',
      icon: 'tabler:currency-dollar',
      title: 'Pricing',
      category: 'appsPages'
    },
    {
      id: 31,
      url: '/pages/misc/coming-soon',
      icon: 'tabler:clock',
      title: 'Coming Soon',
      category: 'appsPages'
    },
    {
      id: 32,
      url: '/pages/misc/under-maintenance',
      icon: 'tabler:barrier-block',
      title: 'Under Maintenance',
      category: 'appsPages'
    },
    {
      id: 33,
      url: '/pages/misc/404-not-found',
      icon: 'tabler:alert-circle',
      title: 'Page Not Found - 404',
      category: 'appsPages'
    },
    {
      id: 34,
      url: '/pages/misc/401-not-authorized',
      icon: 'tabler:user-x',
      title: 'Not Authorized - 401',
      category: 'appsPages'
    },
    {
      id: 35,
      url: '/pages/misc/500-server-error',
      icon: 'tabler:server-off',
      title: 'Server Error - 500',
      category: 'appsPages'
    },
    {
      id: 36,
      url: '/pages/auth/login-v1',
      icon: 'tabler:login',
      title: 'Login V1',
      category: 'appsPages'
    },
    {
      id: 37,
      url: '/pages/auth/login-v2',
      icon: 'tabler:login',
      title: 'Login V2',
      category: 'appsPages'
    },
    {
      id: 38,
      url: '/pages/auth/login-with-appbar',
      icon: 'tabler:login',
      title: 'Login With AppBar',
      category: 'appsPages'
    },
]

const router = express.Router()

router.get('/', (req,res) => {
    const { q = '' } = req.query
    const queryLowered = q.toLowerCase();

    const exactData = {
        dashboards: [],
        appsPages: [],
        userInterface: [],
        formsTables: [],
        chartsMisc: []
    }

    const includeData = {
        dashboards: [],
        appsPages: [],
        userInterface: [],
        formsTables: [],
        chartsMisc: []
    }

    searchData.forEach(obj => {
        const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
        if(isMatched && exactData[obj.category].length < 5) {
            exactData[obj.category].push(obj)
        }
    })

    searchData.forEach(obj => {
        const isMatched = 
          !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
        if(isMatched && includeData[obj.category].length < 5) {
            includeData[obj.category].push(obj)
        }  
    })
    const categoriesCheck = []
    Object.keys(exactData).forEach(category => {
        if(exactData[category].length > 0) {
            categoriesCheck.push(category)
        }
    })
    if(categoriesCheck.length === 0) {
        Object.keys(includeData).forEach(category => {
            if(includeData[category].length > 0) {
                categoriesCheck.push(category)
            }
        })
    }
    const resultsLength = categoriesCheck.length === 1 ? 5 : 3

    res.send(200, [
        ...exactData.dashboards.concat(includeData.dashboards).slice(0, resultsLength),
        ...exactData.appsPages.concat(includeData.appsPages).slice(0, resultsLength),
        ...exactData.userInterface.concat(includeData.userInterface).slice(0, resultsLength),
        ...exactData.formsTables.concat(includeData.formsTables).slice(0, resultsLength),
        ...exactData.chartsMisc.concat(includeData.chartsMisc).slice(0, resultsLength),
    ])
})



export default router;