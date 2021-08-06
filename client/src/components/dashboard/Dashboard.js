import { Link } from 'react-router-dom'
import Services from './Services'
import Queue from './Queue'

const Dashboard = () => {
  return (
    <section>
      <div className="border-bottom pt-5 pb-2 mt-2 mb-5">
        <h1 className="mt-lg-4 pt-4 fs-2">Overview</h1>
      </div>
      <div
        class="alert d-flex alert-danger mb-4"
        role="alert"
      >
        <i class="ai-x-circle fs-xl me-3"></i>
        <div>
          There are currently 8{' '}
          <Link to="/files-in-error" class="alert-link">
            Files In Error
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Services />
        </div>
        <div className="col-lg-6">
          <Queue />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
