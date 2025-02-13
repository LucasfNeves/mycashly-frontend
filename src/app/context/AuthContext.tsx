import {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { signInService } from '../services/authService/signIn'
import { storageKeys } from '@/app/config/storageKeys'
import { httpClient } from '@/app/services/httpClient'
import { refreshTokenService } from '@/app/services/authService/refreshToken'
import { signUpService } from '@/app/services/authService/signUp'
import { useMutation } from '@tanstack/react-query'
import { useGetUserById } from '@/app/hooks/services/users/useGetUserById'
import { LaunchScreen } from '@/view/components/LaunchScreen'
import { toast } from 'react-toastify'
import { User } from '../entities/User'

interface AuthContextType {
  signedIn: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
  isPendingSignIn: boolean
  isPendingSignUp: boolean
  data?: User
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem(storageKeys.acessToken)
  })

  const { data, isError, isFetching, isSuccess } = useGetUserById()

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

  // Interceptor for access token in headers, usamos o useLayoutEffect para garantir que o interceptor seja adicionado antes de qualquer requisição
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

  const signOut = useCallback(() => {
    setSignedIn(false)
    localStorage.clear()
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou, faça login novamente')
      setSignedIn(false)
      signOut()
    }
  }, [isError, signOut, setSignedIn])

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
        signedIn: signedIn && isSuccess,
        data,
        signIn,
        signOut,
        signUp,
        isPendingSignIn,
        isPendingSignUp,
      }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  )
}
