import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import userManager from '../../tools/userManager'
import { RootState } from '../../store'

const Header = () => {
  const auth = useSelector((state: RootState) => state.auth)
  return (
    <header
      className="navbar navbar-expand navbar-dark fixed-top navbar-shadow bg-dark-gray px-3 px-lg-4"
      data-scroll-header=""
      data-fixed-element=""
    >
      <button
        className="navbar-toggler d-block d-xl-none me-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="navbar-brand d-sm-none fs-6">
        BankService
      </Link>
      <div className="navbar-tool dropdown ms-auto">
        <Gravatar
          className="navbar-tool-icon-box-img"
          email={auth?.user?.profile.name ?? 'support@zdata.no'}
        />
        <span className="navbar-tool-label dropdown-toggle">
          <small>Hello,</small>
          {auth?.user?.profile.full_name.split(' ')[0] ?? 'User'}
        </span>
        <ul className="dropdown-menu dropdown-menu-end" style={{ width: '1rem', top: '30px' }}>
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
