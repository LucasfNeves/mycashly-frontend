import { httpClient } from '../httpClient'

export interface SigninParams {
  email: string
  password: string
}

interface SigninResponse {
  accessToken: string
  refreshTokenId: string
}

export async function signInService({ email, password }: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', {
    email,
    password,
  })

  return data
}
