import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthCallback from '../tools/AuthCallback'
import CheckAuth from '../tools/CheckAuth'
import Spinner from './ui/Spinner'
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import Dashboard from './dashboard/Dashboard'
import UnmappedFiles from './unmapped-files/UnmappedFiles'

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
          <Route path="/unmapped-files" component={UnmappedFiles} />
        </div>
      </section>
    </main>
  ) : (
    <Spinner />
  )
}

export default App
