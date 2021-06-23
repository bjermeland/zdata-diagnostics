import { Provider } from 'react-redux'

import { OidcProvider, loadUser } from 'redux-oidc'
import userManager from '../tools/userManager'
import store from '../store'

const Root = ({ children }) => {
  loadUser(store, userManager)

  return (
    <Provider store={store}>
      <OidcProvider userManager={userManager} store={store}>
        {children}
      </OidcProvider>
    </Provider>
  )
}

export default Root
