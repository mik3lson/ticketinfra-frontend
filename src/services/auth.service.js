import { api } from './api'



function normalizeUser(raw) {
  if (!raw) return null
  return {
    id: raw.id,
    name: raw.business_name || raw.name || raw.email,
    email: raw.email,
    role: 'Organizer',
  }
}

export async function login({ email, password }) {
  const data = await api.post('/auth/login/', { email, password })
  return normalizeUser(data.user)
}

export async function register({ businessName, email, password }) {
  const data = await api.post('/auth/register/', {
    business_name: businessName,
    email,
    password,
  })
  return normalizeUser(data.user)
}

export async function logout() {
  await api.post('/auth/logout/')
}

export async function fetchCurrentUser() {
  try {
    const data = await api.get('/auth/user/')
    return normalizeUser(data.user)
  } catch (err) {
    if (err.status === 401 || err.status === 403) return null
    throw err
  }
}

export async function requestPasswordReset(email) {
  return api.post('/auth/password-reset/', { email })
}