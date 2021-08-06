import Breadcrumbs from '../../ui/Breadcrumbs'

const Header = ({ currentPage, breadcrumbs }) => {
  return (
    <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
      <Breadcrumbs
        currentPage={currentPage}
        items={breadcrumbs}
      />
      <div className="col-lg-8">
        <h1 className="mt-lg-4 pt-2 fs-4 text-truncate">
          P.00921643497.000.C053.20210706064739-E2C6G.DAT
        </h1>
        <p className="text-muted">
          Camt053 - 07/08/2021 06:47:41
        </p>
      </div>
      <div className="col-lg-4">
        <div className="card border-primary mb-3">
          <div className="card-body row">
            <div className="col">
              <h5 className="card-title fs-sm">Company</h5>
              <p className="card-text fs-sm">
                Bedrift Alpha AS (999 473 200)
              </p>
            </div>
            <div className="col">
              <h5 className="card-title fs-sm">
                Message Id
              </h5>
              <p className="card-text fs-sm">
                e67af04e-5270-45c1-be0a-4511f041f78e
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
