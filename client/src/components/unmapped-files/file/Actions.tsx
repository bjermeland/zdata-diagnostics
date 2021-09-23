import { useState, useEffect, useCallback } from 'react'
import { useCopyToClipboard } from '../../hooks/hooks'
import { toast } from '../../ui/Toast'

const Actions = ({ content }) => {
  const [publicShareId, setPublicShareId] = useState('')
  const [isPublicShareIdCopied, copyPublicShareId] = useCopyToClipboard(publicShareId)

  const [isContentCopied, copyContent] = useCopyToClipboard(content)

  //* Checks if share Id is unique
  const isShareIdUnique = (id) => true

  //* Generates a random Id for file
  const generateUniqueId = useCallback(() => {
    let isIdUnique = false

    let publicShareId = ''
    while (!isIdUnique) {
      publicShareId = Math.random().toString(36).substr(2, 15)

      isIdUnique = isShareIdUnique(publicShareId)
    }

    return publicShareId
  }, [])

  //* Retrieves share Id
  useEffect(() => {
    const fileAlreadyShared = false
    const fileAlreadySharedId = generateUniqueId()

    if (fileAlreadyShared) {
      setPublicShareId(`${window.location.origin}/share/${fileAlreadySharedId}`)
    } else {
      const publicShareId = generateUniqueId()
      setPublicShareId(`${window.location.origin}/share/${publicShareId}`)
    }
  }, [generateUniqueId])

  //* Action handlers

  const handleTableButton = () => {}

  const handleCopyButton = () => {
    copyContent()

    toast('Copied to clipboard')
  }

  const handleDownloadButton = () => {
    toast('Downloading file..')

    setTimeout(() => {
      const element = document.createElement('a')
      const file = new Blob([content], { type: 'text/plain' })
      element.href = URL.createObjectURL(file)
      element.download = 'P.00921643497.000.C053.20210706064739-E2C6G.xml'
      document.body.appendChild(element) // Required for this to work in FireFox
      element.click()
    }, 2000)
  }

  const handleShareButton = () => {
    copyPublicShareId()

    toast('Successfully shared file', 'Copied to clipboard')
  }
  return (
    <div className="text-center text-decoration-none">
      <div className="d-flex justify-content-evenly">
        <button
          title="Table Mode"
          type="button"
          className="btn btn-dark-gray btn-icon"
          onClick={() => handleTableButton()}
        >
          <i className="ai-grid"></i>
        </button>
        <button
          title="Copy to clipboard"
          type="button"
          className="btn btn-dark-gray btn-icon"
          onClick={() => handleCopyButton()}
        >
          <i className="ai-copy"></i>
        </button>
        <button
          title="Download file"
          type="button"
          className="btn btn-dark-gray btn-icon"
          onClick={() => handleDownloadButton()}
        >
          <i className="ai-download"></i>
        </button>
        {/* <button
          title="Share file"
          type="button"
          className="btn btn-dark-gray btn-icon"
          onClick={() => handleShareButton()}
        >
          <i className="ai-share-2"></i>
        </button> */}
      </div>
    </div>
  )
}

export default Actions
