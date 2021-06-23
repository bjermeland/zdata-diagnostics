import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import userManager from '../../tools/userManager'

const Header = () => {
  const auth = useSelector((state) => state.auth)
  return (
    <header
      className="navbar navbar-expand-lg navbar-light fixed-top navbar-shadow bg-light px-3 px-lg-4"
      data-scroll-header=""
      data-fixed-element=""
    >
      <Link to="/" className="navbar-brand d-lg-none">
        Diagnostics
      </Link>
      <ul className="navbar-nav ms-auto d-none d-lg-flex me-3">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="ai-file-text align-middle mt-n1 me-2"></i>
            Documentation
          </Link>
        </li>
      </ul>
      <button
        className="navbar-toggler d-block d-lg-none ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-tool dropdown">
        <Gravatar
          className="navbar-tool-icon-box-img"
          email={auth.user.profile.name}
        />
        <span className="navbar-tool-label dropdown-toggle">
          <small>Hello,</small>
          {auth.user.profile.full_name.split(' ')[0]}
        </span>
        <ul
          className="dropdown-menu dropdown-menu-end"
          style={{ width: '1rem', top: '30px' }}
        >
          <li>
            <button
              className="dropdown-item d-flex align-items-center"
              onClick={() => userManager.signoutRedirect()}
            >
              <i className="ai-log-out fs-base opacity-60 me-2"></i>Sign out
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
