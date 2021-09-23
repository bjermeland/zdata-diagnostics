import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Switch from 'react-switch'
import userManager from '../../tools/userManager'

interface SidebarItem {
  name: string
  childrens: SidebarItemChildren[]
}

interface SidebarItemChildren {
  name: string
  fileCount?: number
}

const items: SidebarItem[] = [
  {
    name: 'Diagnostics',
    childrens: [
      { name: 'DNB', fileCount: 62 },
      { name: 'DNB Signed', fileCount: 120 },
      { name: 'Evry', fileCount: 137 },
      { name: 'Nordea', fileCount: 482 },
      { name: 'SDC', fileCount: 107 },
      { name: 'Eika', fileCount: 107 },
      { name: 'SEB', fileCount: 15 },
      { name: 'Support Cases', fileCount: 4 },
    ],
  },
  {
    name: 'Pay Admin',
    childrens: [{ name: 'Search' }, { name: 'Clients' }, { name: 'Accounts' }],
  },
]

const Sidebar = () => {
  return (
    <aside className="offcanvas offcanvas-expand bg-dark border-end border-light" id="sidebar">
      <div className="offcanvas-header bg-dark d-none d-lg-block py-2">
        <Link to="/" className="navbar-brand py-1 text-white fs-3">
          BankService Admin
        </Link>
      </div>
      <div className="offcanvas-header bg-dark d-flex d-lg-none align-items-center">
        <div className="d-flex align-items-center mt-1">
          <h5 className="text-light mb-0 me-3">BankService Admin</h5>
        </div>
        <button
          className="btn-close btn-close-white"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body pt-4 pb-grid-gutter overflow-y-overlay">
        <h6 className="text-light pt-3 pb-2 border-bottom border-light">Dashboard</h6>
        <nav className="widget-nav nav nav-light flex-column">
          <NavLink exact to="/" className="nav-link fs-sm mb-4" activeClassName="active">
            Overview
          </NavLink>
          <NavLink to="/files-in-error" className="nav-link fs-sm mb-4" activeClassName="active">
            Files In Error
            <span className="badge rounded-pill bg-danger float-end px-2">8</span>
          </NavLink>
        </nav>
        {items.map((item: SidebarItem) => {
          //* Remove all spaces from name (used in identifiers)
          const identifier = item.name.replace(/\s+/g, '')
          return (
            <div className="accordion accordion-flush" id={`accordion-${identifier}`}>
              <div className="accordion-item">
                <h6
                  className="border-bottom border-light pt-1 mb-3"
                  id={`flush-heading-${identifier}`}
                >
                  <button
                    className="btn btn-link text-light ps-0 accordion-button fs-6 text-decoration-none box-shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${identifier}`}
                    aria-expanded="true"
                    aria-controls={`flush-collapse-${identifier}`}
                  >
                    {item.name}
                  </button>
                </h6>
                <div
                  className="accordion-collapse collapse show"
                  id={`flush-collapse-${identifier}`}
                  aria-labelledby={`flush-${identifier}`}
                  data-bs-parent={`#accordion-${identifier}`}
                >
                  <div className="widget-nav nav nav-light flex-column">
                    {item.childrens.map((children: SidebarItemChildren, childrenIdx: number) => {
                      return (
                        <NavLink
                          key={childrenIdx}
                          exact
                          to={`/unmapped-files/${children.name.replace(/\s+/g, '-').toLowerCase()}`}
                          className="nav-link fs-sm mb-4"
                          activeClassName="active"
                        >
                          {children.name}
                          {children.fileCount && (
                            <span
                              className={`badge rounded-pill bg-${
                                children.name === 'Support Cases' ? 'info' : 'danger'
                              } float-end px-2`}
                            >
                              {children.fileCount}
                            </span>
                          )}
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <h6 className="text-light pt-4 pb-2 border-bottom border-light">Account</h6>
        <nav className="widget-nav nav nav-light d-block">
          <button
            className="btn btn-link nav-link fs-sm text-decoration-none"
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
