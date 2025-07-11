import jwt from 'jsonwebtoken'
import env from '~/lib/env'

export function decode(accessToken: string) {
  try {
    const decoded = jwt.verify(accessToken, env.JWT_SECRET)
    return decoded
  } catch {
    return null
  }
}
