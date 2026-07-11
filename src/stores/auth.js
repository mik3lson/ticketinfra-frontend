import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import * as authService from '@/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const initialized = ref(false) // true once we've checked for an existing session
  const loading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => Boolean(user.value))

  
  async function init() {
    if (initialized.value) return
    try {
      user.value = await authService.fetchCurrentUser()
    } catch {
      user.value = null
    } finally {
      initialized.value = true
    }
  }

  async function login({ email, password }) {
    loading.value = true
    error.value = ''
    try {
      user.value = await authService.login({ email, password })
      return true
    } catch (err) {
      error.value = err.data?.detail || 'Incorrect email or password.'
      return false
    } finally {
      loading.value = false
    }
  }

  async function register({ businessName, email, password }) {
    loading.value = true
    error.value = ''
    try {
      user.value = await authService.register({ businessName, email, password })
      return true
    } catch (err) {
      error.value = err.data?.detail || 'Could not create your account. Check your details and try again.'
      return false
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      await authService.logout()
    } finally {
      user.value = null
    }
  }

  return {
    user,
    initialized,
    loading,
    error,
    isAuthenticated,
    init,
    login,
    register,
    logout,
  }
})