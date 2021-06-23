import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import userManager from './userManager'
import Spinner from '../components/ui/Spinner'

const CheckAuth = ({ location, children }) => {
  const [isValidUser, setIsValidUser] = useState(false)

  useEffect(() => {
    if (location && location.pathname !== '/oidc-callback') {
      userManager.getUser().then((response) => {
        if (!response || response.expired) {
          userManager.signinRedirect({
            data: {
              path: window.location.pathname,
            },
          })
        } else {
          setIsValidUser(true)
        }
      })
    } else {
      setIsValidUser(true)
    }
  }, [location])

  return isValidUser ? children : <Spinner />
}

export default withRouter(CheckAuth)
