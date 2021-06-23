import { Link, NavLink } from 'react-router-dom'
import userManager from '../../tools/userManager'

const sidebarItems = [
  { name: 'AgreementFileQueues', fileCount: 3 },
  { name: 'DnbConnector', fileCount: 62 },
  { name: 'DnbSignedConnector', fileCount: 120 },
  { name: 'EvryConnector', fileCount: 137 },
  { name: 'NordeaConnector', fileCount: 482 },
  { name: 'SdcConnector', fileCount: 107 },
  { name: 'SebConnector', fileCount: 15 },
  { name: 'Support Cases', fileCount: 4 },
]

const widgetItems = [
  [
    { name: 'Refresh', icon: 'arrow-repeat' },
    { name: 'Create Case', icon: 'plus-lg' },
    { name: 'Add to existing case', icon: 'file-earmark-plus-fill' },
  ],
  [
    { name: 'View Company', icon: 'building' },
    { name: 'DownloadProcess selected files', icon: 'download' },
    { name: 'Delete selected files', icon: 'trash' },
  ],
  [
    { name: 'Open in PayAdmin', icon: 'app-indicator' },
    { name: 'Look up in Freshdesk', icon: 'person-lines-fill' },
    { name: 'Open in Proff', icon: 'globe' },
  ],
]

const Sidebar = () => {
  return (
    <aside className="offcanvas offcanvas-expand bg-dark" id="sidebar">
      <div className="offcanvas-header bg-darker d-none d-lg-block py-2">
        <Link to="/" className="navbar-brand py-1 text-white fs-3">
          Diagnostics
        </Link>
      </div>
      <div className="offcanvas-header bg-darker d-flex d-lg-none align-items-center">
        <div className="d-flex align-items-center mt-1">
          <h5 className="text-light mb-0 me-3">Diagnostics</h5>
        </div>
        <button
          className="btn-close btn-close-white"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body pt-4 pb-grid-gutter">
        <h6 className="text-light pt-3 pb-2 border-bottom border-light">
          Dashboard
        </h6>
        <nav className="widget-nav nav nav-light flex-column">
          <NavLink
            exact
            to="/"
            className="nav-link fs-sm mb-4"
            activeClassName="active"
          >
            Overview
          </NavLink>
          <NavLink
            to="/files-in-error"
            className="nav-link fs-sm mb-4"
            activeClassName="active"
          >
            Files in error
          </NavLink>
        </nav>
        <h6 className="text-light pt-3 pb-2 border-bottom border-light">
          Unmapped Files
        </h6>
        <nav className="widget-nav nav nav-light flex-column">
          {sidebarItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                exact
                to={`/unmapped-files/${item.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
                className="nav-link fs-sm mb-4"
                activeClassName="active"
              >
                {item.name}
                <span className="badge rounded-pill bg-danger float-end">
                  {item.fileCount}
                </span>
              </NavLink>
            )
          })}
        </nav>
        <h6 className="text-light pt-3 pb-2 border-bottom border-light">
          Account
        </h6>
        <nav className="widget-nav nav nav-light">
          <button
            className="btn btn-link nav-link fs-sm text-decoration-none-hover"
            onClick={() => userManager.signoutRedirect()}
          >
            Sign out
          </button>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
