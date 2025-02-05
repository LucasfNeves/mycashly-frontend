import { httpClient } from '../httpClient'

interface SigninResponse {
  accessToken: string
  refreshTokenId: string
}

export async function refreshTokenService(refreshTokenId: string) {
  const { data } = await httpClient.post<SigninResponse>(
    '/auth/refresh-token',
    {
      refreshTokenId,
    },
  )

  return data
}
