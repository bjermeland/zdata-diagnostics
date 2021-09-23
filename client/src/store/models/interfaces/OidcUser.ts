import { Profile } from 'oidc-client'

interface OidcUser {
  id_token?: string
  session_state?: string
  access_token?: string
  refresh_token?: string
  token_type?: string
  scope?: string
  profile?: Profile
  expires_at?: number
  state?: any
}

export default OidcUser
