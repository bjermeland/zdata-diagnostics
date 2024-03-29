import { useHistory } from 'react-router'

const queues = [
  {
    name: 'In Error',
    status: 'danger',
    fileCount: 2,
  },
  { name: 'SftpExchanger', status: 'danger', fileCount: 3 },
  {
    name: 'Stuck in Processing',
    status: 'dark',
    fileCount: 2,
  },
  { name: 'Uncollected', status: 'dark', fileCount: 21098 },
]

const Queue = () => {
  const history = useHistory()
  return (
    <>
      <h2 className="pt-2 fs-4">Queue</h2>
      <div className="my-5" id="queue">
        {queues.map((item, index) => {
          return (
            <div
              key={index}
              className="alert alert-dark py-4 px-3 mb-2"
              onClick={() =>
                history.push(`/files-in-error/${item.name.replace(/\s+/g, '-').toLowerCase()}`)
              }
            >
              {item.name}
              <span className={`badge rounded-pill bg-primary py-1 px-2 float-end`}>
                {item.fileCount}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Queue
