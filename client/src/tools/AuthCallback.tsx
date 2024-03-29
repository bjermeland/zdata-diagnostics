import { CallbackComponent } from 'redux-oidc'
import { User } from 'oidc-client'
import userManager from './userManager'
import Spinner from '../components/ui/Spinner'

const successCallback = (user: User, history) => {
  history.push(user.state.path)
}

const errorCallback = (error) => {
  console.error('errorCallback', error)
}

const AuthCallback = (props) => {
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={(user) => successCallback(user, props.history)}
      errorCallback={errorCallback}
    >
      <Spinner />
    </CallbackComponent>
  )
}

export default AuthCallback
