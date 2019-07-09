export default {
	actionIcon: 'StarIcon',
	highlightColor: 'warning',
	data: [
    // DASHBOARDS
 		{index: 1, label: 'eCommerce Dashboard', url: '/dashboard/ecommerce', labelIcon: 'HomeIcon', highlightAction: false},

    // APPS
		{index: 2, label: 'Todo', url: '/apps/todo', labelIcon: 'CheckSquareIcon', highlightAction: true},
 		{index: 4, label: 'Email', url: '/apps/email', labelIcon: 'MailIcon', highlightAction: true},
    {index: 5, label: 'Calendar', url: '/apps/calendar', labelIcon: 'CalendarIcon', highlightAction: true},
    {index: 7, label: 'E-Commerce Wish List', url: '/apps/eCommerce/wish-list', labelIcon: 'HeartIcon', highlightAction: false},
		{index: 8, label: 'E-Commerce Checkout', url: '/apps/eCommerce/checkout', labelIcon: 'CreditCardIcon', highlightAction: false},

    // UI ELEMENTS
    {index: 9, label: 'Data List - List View', url: '/ui-elements/data-list/list-view', labelIcon: 'ListIcon', highlightAction: false},
		{index: 10, label: 'Data List - Thumb View', url: '/ui-elements/data-list/thumb-view', labelIcon: 'ImageIcon', highlightAction: false},
  
    // PAGES
	{index: 54, label: 'Lock Screen Page', url: '/pages/lock-screen', labelIcon: 'LockIcon', highlightAction: false},
		
    ]
}
