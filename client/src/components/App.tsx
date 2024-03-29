import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthCallback from '../tools/AuthCallback'
import CheckAuth from '../tools/CheckAuth'
import Spinner from './ui/Spinner'
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import Dashboard from './dashboard/Dashboard'
import UnmappedFiles from './unmapped-files/UnmappedFiles'
import Company from './unmapped-files/company/Company'
import File from './unmapped-files/file/File'
import SupportCases from './unmapped-files/supportcases/SupportCases'
import SupportCase from './unmapped-files/supportcases/SupportCase'
import FilesInError from './unmapped-files/filesinerror/FilesInError'
import { RootState } from '../store'

const App = () => {
  return (
    <Router>
      <CheckAuth>
        <Routes />
        <Route exact path="/oidc-callback" component={AuthCallback} />
      </CheckAuth>
      {/* <Route exact path="/share/:id" component={FileShare} /> */}
    </Router>
  )
}

const UnmappedFilesRoutes = ['dnb', 'dnb-signed', 'evry', 'nordea', 'sdc', 'eika', 'seb']

const Routes = () => {
  const auth = useSelector((state: RootState) => state.auth)
  return auth && auth.user && auth.user.profile ? (
    <main className="container-fluid">
      <section className="offcanvas-enabled-start row pb-3 pb-md-4">
        <div className="col-xxl-12">
          <Header />
          <Sidebar />
          <Route exact path="/" component={Dashboard} />

          <Route exact path={`/files-in-error`} component={FilesInError} />
          <Route exact path={`/files-in-error/:orgnumber`} component={Company} />
          <Route exact path={`/files-in-error/:orgnumber/:id`} component={File} />

          {UnmappedFilesRoutes.map((route) => {
            return (
              <div key={route}>
                <Route exact path={`/unmapped-files/${route}`} component={UnmappedFiles} />
                <Route exact path={`/unmapped-files/${route}/:orgnumber`} component={Company} />
                <Route exact path={`/unmapped-files/${route}/:orgnumber/:id`} component={File} />
              </div>
            )
          })}

          <Route exact path="/unmapped-files/support-cases" component={SupportCases} />
          <Route exact path="/unmapped-files/support-cases/:id" component={SupportCase} />
        </div>
      </section>
    </main>
  ) : (
    <Spinner />
  )
}

export default App
