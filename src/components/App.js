import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import Dashboard from './dashboard/Dashboard'
import CheckAuth from '../tools/CheckAuth'
import AuthCallback from '../tools/AuthCallback'
import { useSelector } from 'react-redux'
import Spinner from './ui/Spinner'

const App = () => {
  return (
    <Router>
      <CheckAuth>
        <Routes />
        <Route exact path="/oidc-callback" component={AuthCallback} />
      </CheckAuth>
    </Router>
  )
}

const Routes = () => {
  const auth = useSelector((state) => state.auth)
  return auth && auth.user && auth.user.profile ? (
    <main className="container-fluid">
      <section className="offcanvas-enabled-start row pb-3 pb-md-4">
        <div className="col-xxl-9">
          <Header />
          <Sidebar />
          <Route exact path="/" component={Dashboard} />
        </div>
      </section>
    </main>
  ) : (
    <Spinner />
  )
}

export default App
