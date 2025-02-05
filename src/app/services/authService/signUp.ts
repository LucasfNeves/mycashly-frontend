import { httpClient } from '../httpClient'

export interface SigninParams {
  email: string
  password: string
  name: string
}

interface SigninResponse {
  accessToken: string
  refreshTokenId: string
}

export async function signUpService({ email, password, name }: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signup', {
    name,
    email,
    password,
  })

  return data
}
