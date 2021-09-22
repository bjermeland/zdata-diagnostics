import Breadcrumbs from '../../ui/Breadcrumbs'

const CompanyHeader = ({ currentPage, breadcrumbs, bank }) => {
  return (
    <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
      <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
      <div className="col-xl-8">
        <h1 className="pt-4 fs-2 text-eee">Bedrift Alpha AS</h1>
        <p className="text-ddd">{bank.name ? `${bank.name} (${bank.bic})` : bank.bic}</p>
      </div>
      <div className="col-xl-4">
        <div className="card bg-dark-gray-light mb-3">
          <div className="card-body">
            <h5 className="card-title fs-md pb-1">External Links</h5>
            <div className="card-text fs-sm">
              <div className="row text-center text-decoration-none">
                <div className="col">
                  <a
                    className="text-decoration-none text-info"
                    href="https://support.zdata.no"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ai ai-headphones d-block fs-lg py-1"></i>
                    <span className="text-underline-hover">Freshdesk</span>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="text-decoration-none text-info"
                    href="https://payadmin.zdata.no/Admin#/searchOrgNo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ai ai-key d-block fs-lg py-1"></i>
                    <span className="text-underline-hover">Pay Admin</span>
                  </a>
                </div>
                <div
                  className="col
                "
                >
                  <a
                    className="text-decoration-none text-info"
                    href={`https://www.proff.no/bransjesøk?q=${currentPage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ai ai-compass d-block fs-lg py-1 text-decoration-none"></i>
                    <span className="text-underline-hover">Proff.no</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyHeader
