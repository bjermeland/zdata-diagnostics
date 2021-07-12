import { Link } from 'react-router-dom'
import { isGuid } from '../../utils/pagetitles'

const formatOrganizationNumber = (orgNumber) => {
  return orgNumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')
}

const Breadcrumbs = ({ currentPage, items }) => {
  return (
    <nav className="pt-5" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const name = isNaN(item.name) ? (isGuid(item.name) ? 'File' : item.name) : formatOrganizationNumber(item.name)
          if (item.name === currentPage) {
            return (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                {isNaN(name) ? name : name}
              </li>
            )
          } else {
            return (
              <li key={index} className="breadcrumb-item">
                {item.href ? <Link to={item.href}>{name}</Link> : name}
              </li>
            )
          }
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
