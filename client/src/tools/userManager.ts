import { createUserManager } from 'redux-oidc'
import { UserManagerSettings } from 'oidc-client'

const userManagerConfig: UserManagerSettings = {
  client_id: 'DiagnosticsClient',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/oidc-callback`,
  response_type: 'id_token token',
  scope: 'openid bankservice profile',
  authority: process.env.REACT_APP_IDENTITY_SERVER_URL,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/oidc-silent-renew`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
}

const userManager = createUserManager(userManagerConfig)

export default userManager
