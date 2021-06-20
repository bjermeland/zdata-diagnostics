const sidebarItems = [
  { name: 'AgreementFileQueues', fileCount: 3 },
  { name: 'DnbConnector', fileCount: 62 },
  { name: 'DnbSignedConnector', fileCount: 120 },
  { name: 'EvryConnector', fileCount: 137 },
  { name: 'NordeaConnector', fileCount: 482 },
  { name: 'SdcConnector', fileCount: 107 },
  { name: 'SebConnector', fileCount: 15 },
  { name: 'Supportcases', fileCount: 4 },
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
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-5 ms-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i className="bi bi-list text-white"></i>
      </a>
      <ul className="list-group mt-3">
        {sidebarItems.map((item) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center text-white">
              {item.name}
              <span
                className={`badge bg-${
                  item.name.includes('cases') ? 'primary' : 'danger'
                } rounded-pill`}
              >
                {item.fileCount}
              </span>
            </li>
          )
        })}
      </ul>
      <hr className="white-text w-75 d-flex align-self-center" />
      <div className="widget-container mb-auto">
        {widgetItems.map((row, i) => (
          <div key={i} className="row">
            {row.map((col, i) => (
              <div className="col-md-4">
                <div class="d-flex flex-column">
                  <div class="item-1 d-flex justify-content-center">
                    <i className={`bi bi-${col.icon}`}></i>
                  </div>
                  <div class="flex-fill mt-2">
                    <span>{col.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr className="white-text" />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Markus Bjermeland</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
