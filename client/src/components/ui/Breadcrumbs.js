import { Link } from 'react-router-dom'
import { isGuid } from '../../utils/pagetitles'

const formatOrganizationNumber = (orgNumber) => {
  return orgNumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')
}

const formatName = (name) => {
  return name.split(' ').map((word) => (word.length === 3 ? `${word.toUpperCase()} ` : `${word} `))
}

const Breadcrumbs = ({ currentPage, items }) => {
  return (
    <nav className="pt-5 d-none d-xl-block" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const name = isNaN(item.name)
            ? isGuid(item.name)
              ? 'File'
              : formatName(item.name)
            : formatOrganizationNumber(item.name)
          if (item.name === currentPage) {
            return (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                {isNaN(name) ? name : name}
              </li>
            )
          } else {
            return (
              <li key={index} className="breadcrumb-item">
                {/* Don't want people to go to /unmapped-files - empty page */}
                {item.href && item.name !== 'unmapped files' ? (
                  <Link to={item.href}>{name}</Link>
                ) : (
                  name
                )}
              </li>
            )
          }
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
