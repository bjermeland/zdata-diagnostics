import { Link } from 'react-router-dom'
import { isGuid } from '../../utils/pagetitles'

interface BreadcrumbLink {
  name: string
  href: string
}

const formatOrganizationNumber = (orgNumber: string): string => {
  return orgNumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ')
}

//* DNB, SDC, SEB for example
const formatName = (name: string): string => {
  return name
    .split(' ')
    .map((word) => (word.length === 3 ? `${word.toUpperCase()} ` : `${word} `))
    .join(' ')
}

const Breadcrumbs = ({ currentPage, items }: { currentPage: string; items: BreadcrumbLink[] }) => {
  return (
    <nav className="pt-5 d-none d-xl-block" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          //* Checks if name consists of only digits
          const name = !item.name.match(/^\d+$/)
            ? isGuid(item.name)
              ? 'File'
              : formatName(item.name)
            : formatOrganizationNumber(item.name)
          if (item.name === currentPage) {
            return (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                {!name.match(/^\d+$/) ? name : name}
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
