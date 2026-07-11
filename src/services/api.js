

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}


export async function ensureCsrfCookie() {
  if (getCookie(CSRF_COOKIE_NAME)) return
  try {
    await fetch(`${BASE_URL}/auth/csrf/`, { credentials: 'include' })
  } catch {
   
  }
}

class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.status = status
    this.data = data
  }
}

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const isMutation = !['GET', 'HEAD', 'OPTIONS'].includes(method)

  if (isMutation) {
    await ensureCsrfCookie()
  }

  const finalHeaders = {
    Accept: 'application/json',
    ...headers,
  }

  if (body !== undefined) {
    finalHeaders['Content-Type'] = 'application/json'
  }

  if (isMutation) {
    const csrfToken = getCookie(CSRF_COOKIE_NAME)
    if (csrfToken) {
      finalHeaders[CSRF_HEADER_NAME] = csrfToken
    }
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    credentials: 'include', // send/receive the Django session cookie
    headers: finalHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  let data = null
  const text = await response.text()
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = text
    }
  }

  if (!response.ok) {
    const message = data?.detail || data?.message || response.statusText || 'Request failed'
    throw new ApiError(message, response.status, data)
  }

  return data
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body }),
  put: (path, body) => request(path, { method: 'PUT', body }),
  patch: (path, body) => request(path, { method: 'PATCH', body }),
  delete: (path) => request(path, { method: 'DELETE' }),
}

export { ApiError }