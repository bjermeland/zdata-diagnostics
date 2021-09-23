import Breadcrumbs from '../../ui/Breadcrumbs'

interface BreadcrumbLink {
  name: string
  href: string
}

interface Bank {
  name: string
  bic: string
}

const Header = ({
  currentPage,
  breadcrumbs,
}: {
  currentPage: string
  breadcrumbs: BreadcrumbLink[]
}) => {
  return (
    <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
      <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
      <div className="col-lg-8">
        <h1 className="pt-4 fs-2 text-eee fs-4 text-truncate">
          P.00921643497.000.C053.20210706064739-E2C6G.DAT
        </h1>
        <p className="text-muted">Camt053 - 07/08/2021 06:47:41</p>
      </div>
      <div className="col-lg-4">
        <div className="card bg-dark-gray-light mb-3">
          <div className="card-body row">
            <div className="col-xl-6 mb-3">
              <h5 className="card-title fs-sm">Company</h5>
              <p className="card-text fs-sm">Bedrift Alpha AS (999 473 200)</p>
            </div>
            <div className="col-xl-6">
              <h5 className="card-title fs-sm">Message Id</h5>
              <p className="card-text fs-sm">e67af04e-5270-45c1-be0a-4511f041f78e</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
