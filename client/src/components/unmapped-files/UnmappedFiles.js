import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Breadcrumbs from '../ui/Breadcrumbs'
import Spinner from '../ui/Spinner'
import Table from './Table'

const pageTitles = [
  'AgreementFileQueues',
  'DnbConnector',
  'DnbSignedConnector',
  'EvryConnector',
  'NordeaConnector',
  'SdcConnector',
  'SebConnector',
  'Support Cases',
]

const getPageByPathname = (path, history) => {
  const page = path.split('/')[2]

  return pageTitles.find(
    (title) => title.toLowerCase().replace(' ', '-') === page
  )
}

const UnmappedFiles = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(null)

  const history = useHistory()

  useEffect(() => {
    const page = getPageByPathname(location.pathname)
    if (!page) {
      history.push('/page-not-found')
    }
    setCurrentPage(page)
  }, [location, history])

  return currentPage ? (
    <section>
      <div className="border-bottom pt-5 pb-2 mt-2 mb-5">
        <Breadcrumbs first={'Unmapped Files'} second={currentPage} />
        <h1 className="mt-lg-4 pt-2">{currentPage}</h1>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Table />
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default UnmappedFiles
