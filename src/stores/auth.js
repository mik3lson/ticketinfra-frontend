import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'gatepass-session'

function readSession() {
  if (typeof window === 'undefined') {
    return null
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export const useAuthStore = defineStore('auth', () => {
  const session = ref(readSession())

  const user = computed(() => session.value?.user ?? null)
  const isAuthenticated = computed(() => Boolean(session.value?.token))

  function persist(nextSession) {
    session.value = nextSession

    if (typeof window === 'undefined') {
      return
    }

    if (nextSession) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession))
    } else {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }

  function login(payload) {
    persist({
      token: 'gatepass-demo-token',
      user: {
        name: payload.name || 'Amina Yusuf',
        email: payload.email,
        role: 'Organizer',
      },
    })
  }

  function register(payload) {
    persist({
      token: 'gatepass-demo-token',
      user: {
        name: payload.name,
        email: payload.email,
        role: 'Organizer',
      },
    })
  }

  function logout() {
    persist(null)
  }

  return {
    session,
    user,
    isAuthenticated,
    login,
    register,
    logout,
  }
})