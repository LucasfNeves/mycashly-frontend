import { createContext, useCallback, useLayoutEffect, useState } from 'react'
import { signInService } from '../services/authService/signIn'
import { storageKeys } from '@/config/storageKeys'
import { httpClient } from '@/services/httpClient'
import { refreshTokenService } from '@/services/authService/refreshToken'
import { signUpService } from '@/services/authService/signUp'
import { useMutation } from '@tanstack/react-query'

interface AuthContextType {
  signedIn: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
  isPendingSignIn: boolean
  isPendingSignUp: boolean
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem(storageKeys.acessToken)
  })

  const { isPending: isPendingSignIn, mutateAsync: signInMutation } =
    useMutation({
      mutationKey: ['signin'],
      mutationFn: async ({
        email,
        password,
      }: {
        email: string
        password: string
      }) => {
        return signInService({ email, password })
      },
    })

  const { isPending: isPendingSignUp, mutateAsync: signUpMutation } =
    useMutation({
      mutationKey: ['signup'],
      mutationFn: async ({
        email,
        password,
        name,
      }: {
        email: string
        password: string
        name: string
      }) => {
        return signUpService({ email, password, name })
      },
    })

  // Interceptor for access token in headers
  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem(storageKeys.acessToken)
      if (accessToken) {
        config.headers.set('Authorization', `Bearer ${accessToken}`)
      }

      return config
    })

    return () => {
      httpClient.interceptors.request.eject(interceptorId)
    }
  }, [])

  // Interceptor for refresh token
  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.response.use(
      (response) => response,

      async (error) => {
        const originalRequest = error.config

        const refreshTokenId = localStorage.getItem(storageKeys.refreshTokenId)

        if (originalRequest.url === '/auth/refresh-token') {
          setSignedIn(false)
          localStorage.clear()
          return Promise.reject(error)
        }

        if (
          (error.response && error.response.status !== 401) ||
          !refreshTokenId
        ) {
          return Promise.reject(error)
        }

        const { accessToken, refreshTokenId: newRefreshToken } =
          await refreshTokenService(refreshTokenId)

        localStorage.setItem(storageKeys.acessToken, accessToken)
        localStorage.setItem(storageKeys.refreshTokenId, newRefreshToken)

        return httpClient(originalRequest)
      },
    )

    return () => {
      httpClient.interceptors.response.eject(interceptorId)
    }
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      const { accessToken, refreshTokenId } = await signInMutation({
        email,
        password,
      })

      localStorage.setItem(storageKeys.acessToken, accessToken)
      localStorage.setItem(storageKeys.refreshTokenId, refreshTokenId)

      setSignedIn(true)
    },
    [signInMutation],
  )

  const signOut = useCallback(() => {
    setSignedIn(false)
    localStorage.clear()
  }, [])

  const signUp = useCallback(
    async (email: string, password: string, name: string) => {
      const { accessToken, refreshTokenId } = await signUpMutation({
        email,
        password,
        name,
      })

      localStorage.setItem(storageKeys.acessToken, accessToken)
      localStorage.setItem(storageKeys.refreshTokenId, refreshTokenId)

      setSignedIn(true)
    },
    [signUpMutation],
  )

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn,
        signOut,
        signUp,
        isPendingSignIn,
        isPendingSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
