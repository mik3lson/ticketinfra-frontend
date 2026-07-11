import { api } from './api'


const STATUS_MAP = {
  paid: 'Paid',
  pending: 'Pending',
  failed: 'Failed',
}

function normalizeOrder(raw) {
  return {
    id: raw.id,
    customer: raw.customer_name,
    event: raw.event_name || raw.event,
    amount: typeof raw.amount === 'number' ? `₦${raw.amount.toLocaleString()}` : raw.amount,
    status: STATUS_MAP[String(raw.payment_status).toLowerCase()] || raw.payment_status,
    date: raw.created_at ? new Date(raw.created_at).toLocaleDateString('en-NG', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
  }
}

export async function fetchOrders() {
  const data = await api.get('/orders/')
  const list = Array.isArray(data) ? data : data.results || []
  return list.map(normalizeOrder)
}