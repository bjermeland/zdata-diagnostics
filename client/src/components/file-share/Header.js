import logo from '../assets/images/zdata-logo.svg'

const Header = () => {
  return (
    <div className="border-bottom border-light pt-5 pb-1 mb-4 row">
      <div className="col-lg-3">
        <img className="w-50 logo-responsive" src={logo} alt="ZData Logo" />
        <small className="py-3 d-block">
          Noen fra ZData har delt denne bankfilen med deg.
          <br />
          Trykk på "Fullfør Fildeling" for å slette linktilgangen.
        </small>
      </div>
      <div className="col-lg-6">
        <div className="card bg-dark border-light border-3 mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7 mb-3">
                <h5 className="card-title fs-sm text-ccc text-truncate">Name</h5>
                <p className="card-text fs-sm">P.00921643497.000.C053.20210706064739-E2C6G.DAT</p>
              </div>
              <div className="col-lg-2 mb-3">
                <h5 className="card-title fs-sm text-ccc">Format</h5>
                <p className="card-text fs-sm">Camt053</p>
              </div>
              <div className="col-lg-3">
                <h5 className="card-title fs-sm text-ccc">Created</h5>
                <p className="card-text fs-sm">07/08/2021 06:47:41</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card bg-dark border-light border-3 mb-3">
          <div className="card-body">
            <h5 className="card-title fs-sm text-ccc">Company</h5>
            <p className="card-text fs-sm">Bedrift Alpha AS (999 473 200)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
