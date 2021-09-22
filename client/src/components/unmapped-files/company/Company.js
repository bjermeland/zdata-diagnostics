import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../../utils/pagetitles'
import { getBankNameByBic } from '../../../utils/bank'
import Header from './Header'
import Description from './Description'
import Comments from './Comments'
import Spinner from '../../ui/Spinner'
import Table from '../Table'

const comments = [
  {
    id: 0,
    author: 'Matias Tonning',
    date: new Date(2021, 8, 20),
    text: 'Fant sak #10000 i Freshdesk, bedrift ikke lenger kunde hos Uni',
  },
  {
    id: 1,
    author: 'Matias Tonning',
    date: new Date(2021, 8, 18),
    text: 'Finner ingen aktiv avtale',
  },
]

const Company = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location])

  //* ---

  const [bank, setBank] = useState(null)

  useEffect(() => {
    const bic = 'SPTRNO22'
    setBank({
      name: getBankNameByBic(bic),
      bic: bic,
    })
  }, [location.pathname])

  const handleRowClick = (row) => history.push(`${location.pathname}/${row.id}`)

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      grow: 3,
    },
    {
      name: 'State',
      selector: 'state',
      sortable: true,
    },
    {
      name: 'Created',
      selector: 'created',
      sortable: true,
    },
  ]

  const data = [
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f78e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f783',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f75e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f71e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f70e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4541f041f78e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
  ]

  return currentPage ? (
    <section>
      <Header currentPage={currentPage} breadcrumbs={breadcrumbs} bank={bank} />
      <div className="row">
        <div className="col-xl-8">
          <div className="card bg-dark-gray-light mb-3">
            <div className="pt-3 mb-3" id="table">
              <Table
                columns={columns}
                data={data}
                onRowClicked={(row) => handleRowClick(row)}
                displayToolbar
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 mb-2">
          <Description />
          <Comments values={comments} />
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default Company
