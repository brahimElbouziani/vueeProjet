
export default [
  {
    url: null,
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    url: '/dashboard/ecommerce',
    name: "eCommerce",
    slug: "dashboardECommerce",
    i18n: "Home",
  },
  {
    header: "SERVICES",
    i18n: "SERVICES",
  },
  {
    url: "/apps/email",
    name: "Email",
    slug: "email",
    icon: "MailIcon",
    i18n: "Email",
  },
  {
    url: "/apps/todo",
    name: "Todo",
    slug: "todo",
    icon: "CheckSquareIcon",
    i18n: "Todo",
  },
  {
    url: "/apps/calendar",
    name: "Calendar",
    slug: "calendar",
    icon: "CalendarIcon",
    i18n: "Calendar",
  },{
    header: "Products",
    i18n: "Products",
  },
  {
    url: null,
    name: "Data List",
    slug: "dataList",
    icon: "ListIcon",
    url: '/ui-elements/data-list/thumb-view',
    name: "Thumb View",
    slug: "dataListThumbView",
    i18n: "ProductsList",
  }
  ,
  {
    header: "CLients",
    i18n: "CLients",
  },
  {
    url: null,
    name: "CLients List",
    icon: "UserPlusIcon",
    url: '/ui-elements/data-list/List-view',
    i18n: "ClientList",
  },
  {
    header: "Pages",
    i18n: "Pages",
  },
  {
    url: null,
    name: "Authentication",
    icon: "UserIcon",
    i18n: "Authentication",
    submenu: [
      
      {
        url: '/pages/register',
        name: "Register",
        slug: "pagesRegister",
        i18n: "Register",
        target: '_blank',
      },
      {
        url: '/pages/forgot-password',
        name: "Forgot Password",
        slug: "pagesForgotPassword",
        i18n: "ForgotPassword",
        target: '_blank',
      },
      {
        url: '/pages/reset-password',
        name: "Reset Password",
        slug: "pagesResetPassword",
        i18n: "ResetPassword",
        target: '_blank',
      },
      {
        url: '/pages/lock-screen',
        name: "Lock Screen",
        slug: "pagesLockScreen",
        i18n: "LockScreen",
        target: '_blank',
      },
    ]
  } 
]