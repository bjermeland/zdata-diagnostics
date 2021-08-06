import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { OidcProvider, loadUser } from 'redux-oidc'
import userManager from '../tools/userManager'
import store from '../store'

import FileShare from './file-share/FileShare'

const Root = ({ children }) => {
  loadUser(store, userManager)

  const path = window.location.pathname

  //* check to ensure that current path can't be for example
  //* /unmapped-files/share/blabla or /share/, path has to be exactly
  //* /share/f7a31j where f7a31j is share Id
  const isSearchPath = () => {
    return (
      path.substring(0, 7) === '/share/' && path.length > 7
    )
  }

  return (
    <Provider store={store}>
      {isSearchPath() ? (
        <Router>
          <Route
            exact
            path="/share/:id"
            component={FileShare}
          />
        </Router>
      ) : (
        <OidcProvider
          userManager={userManager}
          store={store}
        >
          {children}
        </OidcProvider>
      )}
    </Provider>
  )
}

export default Root
