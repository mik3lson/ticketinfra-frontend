export const sidebarLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Events', to: '/events' },
  { label: 'Orders', to: '/orders' },
  { label: 'Customers', to: '/customers' },
  { label: 'Checkout Builder', to: '/checkout-builder' },
  { label: 'API Keys', to: '/api-keys' },
  { label: 'Webhooks', to: '/webhooks' },
  { label: 'Settings', to: '/settings' },
]

export const dashboardStats = [
  { label: 'Total Events', value: '128', change: '+14 this month' },
  { label: 'Tickets Sold', value: '24,860', change: '+18% vs last month' },
  { label: 'Revenue', value: '₦84.2M', change: '+₦11.3M this week' },
  { label: 'Active Checkout Links', value: '42', change: '9 published today' },
]

export const recentEvents = [
  { event: 'Lagos Fintech Forum', date: 'Jul 18, 2026', ticketsSold: 1240, revenue: '₦12.4M', status: 'Live' },
  { event: 'Founder Night', date: 'Jul 22, 2026', ticketsSold: 620, revenue: '₦6.8M', status: 'Draft' },
  { event: 'Product Design Summit', date: 'Aug 2, 2026', ticketsSold: 1840, revenue: '₦22.5M', status: 'Published' },
  { event: 'AFRI Music Connect', date: 'Aug 12, 2026', ticketsSold: 980, revenue: '₦9.1M', status: 'Live' },
]

export const events = [
  {
    id: 'evt-001',
    title: 'Lagos Fintech Forum',
    date: 'Jul 18, 2026',
    venue: 'Tafawa Balewa Square, Lagos',
    ticketsSold: 1240,
    revenue: '₦12.4M',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    status: 'Live',
  },
  {
    id: 'evt-002',
    title: 'Founder Night',
    date: 'Jul 22, 2026',
    venue: 'The Green House, Abuja',
    ticketsSold: 620,
    revenue: '₦6.8M',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    status: 'Draft',
  },
  {
    id: 'evt-003',
    title: 'Product Design Summit',
    date: 'Aug 2, 2026',
    venue: 'Landmark Event Centre, Lagos',
    ticketsSold: 1840,
    revenue: '₦22.5M',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    status: 'Published',
  },
  {
    id: 'evt-004',
    title: 'AFRI Music Connect',
    date: 'Aug 12, 2026',
    venue: 'Eko Convention Center, Lagos',
    ticketsSold: 980,
    revenue: '₦9.1M',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    status: 'Live',
  },
]

export const orders = [
  { id: 'GP-2041', customer: 'Amina Yusuf', event: 'Lagos Fintech Forum', amount: '₦20,000', status: 'Paid', date: 'Jul 4, 2026' },
  { id: 'GP-2042', customer: 'Dare Ogunleye', event: 'Founder Night', amount: '₦5,000', status: 'Pending', date: 'Jul 5, 2026' },
  { id: 'GP-2043', customer: 'Chioma Eze', event: 'Product Design Summit', amount: '₦20,000', status: 'Paid', date: 'Jul 5, 2026' },
  { id: 'GP-2044', customer: 'Kelechi Obi', event: 'AFRI Music Connect', amount: '₦2,000', status: 'Failed', date: 'Jul 6, 2026' },
]

export const customers = [
  { name: 'Amina Yusuf', email: 'amina@example.com', event: 'Lagos Fintech Forum', ticketType: 'VIP', amountPaid: '₦20,000', status: 'Active' },
  { name: 'Dare Ogunleye', email: 'dare@example.com', event: 'Founder Night', ticketType: 'Regular', amountPaid: '₦5,000', status: 'Pending' },
  { name: 'Chioma Eze', email: 'chioma@example.com', event: 'Product Design Summit', ticketType: 'VIP', amountPaid: '₦20,000', status: 'Active' },
  { name: 'Kelechi Obi', email: 'kelechi@example.com', event: 'AFRI Music Connect', ticketType: 'Student', amountPaid: '₦2,000', status: 'Refunded' },
]

export const apiKeys = [
  { label: 'Test Key', value: 'gp_test_5fa3d0c8f1b2c4a8e1', status: 'Sandbox' },
  { label: 'Live Key', value: 'gp_live_9bc7e1d21a4f54f99f', status: 'Production' },
]

export const notifications = [
  { title: '224 tickets sold in the last hour', meta: 'Revenue climbed by 18%' },
  { title: 'Checkout link published for Product Design Summit', meta: '2 minutes ago' },
  { title: 'Webhooks retried successfully', meta: 'No failures detected' },
]

export const builderPalette = [
  { type: 'banner', title: 'Event Banner', description: 'Hero image with visual weight' },
  { type: 'logo', title: 'Organizer Logo', description: 'Brand mark at the top' },
  { type: 'title', title: 'Event Title', description: 'Primary headline' },
  { type: 'description', title: 'Description', description: 'Supporting event copy' },
  { type: 'ticket-selector', title: 'Ticket Selector', description: 'Interactive ticket chooser' },
  { type: 'price', title: 'Price', description: 'Selected ticket pricing' },
  { type: 'quantity-selector', title: 'Quantity Selector', description: 'Ticket quantity control' },
  { type: 'event-date', title: 'Event Date', description: 'Schedule details' },
  { type: 'venue', title: 'Venue', description: 'Location block' },
  { type: 'countdown', title: 'Countdown Timer', description: 'Urgency block' },
  { type: 'contact', title: 'Contact Information', description: 'Support contact details' },
  { type: 'terms', title: 'Terms & Conditions', description: 'Policy text block' },
  { type: 'button', title: 'Buy Ticket Button', description: 'Primary CTA' },
  { type: 'footer', title: 'Footer', description: 'Checkout footer' },
  { type: 'divider', title: 'Divider', description: 'Visual separator' },
]

export const checkoutTickets = [
  { name: 'Regular Ticket', price: 5000, quantity: 2 },
  { name: 'VIP Ticket', price: 20000, quantity: 1 },
]

export const defaultCheckoutComponents = [
  {
    id: 'banner',
    type: 'banner',
    visible: true,
    content: {
      title: 'GatePass Summit 2026',
      subtitle: 'Powered by premium ticket infrastructure',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    },
    style: { backgroundColor: '#111111', textColor: '#ffffff', borderRadius: '24', padding: '16', margin: '0', fontSize: '18', fontWeight: '700', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'logo',
    type: 'logo',
    visible: true,
    content: {
      title: 'GatePass',
      image: 'https://dummyimage.com/120x120/111111/ffffff&text=GP',
    },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '20', padding: '12', margin: '0', fontSize: '16', fontWeight: '700', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'title',
    type: 'title',
    visible: true,
    content: { title: 'Event title here', subtitle: 'A premium checkout starts with a clear headline' },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '18', padding: '12', margin: '0', fontSize: '28', fontWeight: '800', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'description',
    type: 'description',
    visible: true,
    content: { title: 'A modern event ticketing experience built for organizers, sponsors, and attendees.' },
    style: { backgroundColor: '#ffffff', textColor: '#69707d', borderRadius: '18', padding: '12', margin: '0', fontSize: '15', fontWeight: '400', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'ticket-selector',
    type: 'ticket-selector',
    visible: true,
    content: { title: 'Choose your ticket', subtitle: 'Select quantities before checkout' },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '24', padding: '16', margin: '0', fontSize: '16', fontWeight: '600', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'event-date',
    type: 'event-date',
    visible: true,
    content: { title: 'Saturday, 18 July 2026', subtitle: '9:00 AM - 5:00 PM' },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '18', padding: '12', margin: '0', fontSize: '15', fontWeight: '600', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'venue',
    type: 'venue',
    visible: true,
    content: { title: 'Landmark Event Centre', subtitle: 'Lagos, Nigeria' },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '18', padding: '12', margin: '0', fontSize: '15', fontWeight: '600', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'countdown',
    type: 'countdown',
    visible: true,
    content: { title: 'Ends in 12d 04h 20m', subtitle: 'Early bird pricing closes soon' },
    style: { backgroundColor: '#fff1ed', textColor: '#b6321f', borderRadius: '18', padding: '12', margin: '0', fontSize: '15', fontWeight: '700', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'contact',
    type: 'contact',
    visible: true,
    content: { title: 'Need help?', subtitle: 'support@gatepass.africa' },
    style: { backgroundColor: '#ffffff', textColor: '#111111', borderRadius: '18', padding: '12', margin: '0', fontSize: '15', fontWeight: '500', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'terms',
    type: 'terms',
    visible: true,
    content: { title: 'By buying a ticket, you agree to the event terms and conditions.' },
    style: { backgroundColor: '#ffffff', textColor: '#69707d', borderRadius: '18', padding: '12', margin: '0', fontSize: '13', fontWeight: '400', align: 'left', buttonColor: '#f05537' },
  },
  {
    id: 'button',
    type: 'button',
    visible: true,
    content: { title: 'Buy Ticket' },
    style: { backgroundColor: '#f05537', textColor: '#ffffff', borderRadius: '999', padding: '14', margin: '0', fontSize: '16', fontWeight: '700', align: 'center', buttonColor: '#f05537' },
  },
  {
    id: 'footer',
    type: 'footer',
    visible: true,
    content: { title: 'Secure checkout powered by GatePass' },
    style: { backgroundColor: '#ffffff', textColor: '#69707d', borderRadius: '18', padding: '12', margin: '0', fontSize: '13', fontWeight: '400', align: 'center', buttonColor: '#f05537' },
  },
]

export const checkoutTemplate = {
  companyName: 'GatePass',
  coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
  brandColor: '#f05537',
  backgroundColor: '#ffffff',
  buttonColor: '#f05537',
  borderRadius: '24',
  font: 'Inter',
  logo: 'https://dummyimage.com/160x160/111111/ffffff&text=GP',
}