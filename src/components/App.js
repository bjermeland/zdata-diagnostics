import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './ui/Sidebar'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <div className="d-flex h-100">
        <Sidebar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  )
}

export default App
