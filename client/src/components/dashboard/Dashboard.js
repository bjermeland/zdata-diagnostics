import Services from './Services'
import Queue from './Queue'

const Dashboard = () => {
  return (
    <section>
      <div className="border-bottom pt-5 pb-2 mt-2 mb-5">
        <h1 className="mt-lg-4 pt-4">Overview</h1>
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