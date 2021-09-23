import React from 'react'
import ReactDOM from 'react-dom'
import { processSilentRenew } from 'redux-oidc'
import Root from './components/Root'
import App from './components/App'

import 'bootstrap'

import './components/assets/index.scss'

if (window.location.pathname === '/oidc-silent-renew') {
  processSilentRenew()
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Root>
        <App />
      </Root>
    </React.StrictMode>,
    document.querySelector('#root')
  )
}
