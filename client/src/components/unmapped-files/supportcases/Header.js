import Breadcrumbs from '../../ui/Breadcrumbs'

const SupportCaseHeader = ({ currentPage, breadcrumbs, isDetailedPage }) => {
  return (
    <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
      <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
      <div className={`col-lg-${isDetailedPage ? '6' : '12'}`}>
        <h1 className="mt-lg-4 pt-2 fs-2">
          {isDetailedPage ? currentPage : 'Support Cases'}
        </h1>
        {isDetailedPage && (
          <p className="text-muted">Showing a total of 12 companies</p>
        )}
      </div>
      {isDetailedPage && (
        <div className="col-lg-6">
          <div className="card border-primary mb-3">
            <div className="card-body row">
              <div className="col">
                <h5 className="card-title fs-sm">Status</h5>
                <p className="card-text" style={{ color: '#0f8a01' }}>
                  Mottatt svar
                </p>
              </div>
              <div className="col">
                <h5 className="card-title fs-sm">Freshdesk</h5>
                <a
                  className="card-text"
                  href="https://support.zdata.no"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-underline-hover">#12001</span>
                </a>
              </div>
              <div className="col">
                <h5 className="card-title fs-sm">Handler</h5>
                <p className="card-text">Marcus</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SupportCaseHeader