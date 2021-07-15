import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Actions from './Actions'
import SearchInput from './SearchInput'

const CodeContainer = ({ content }) => {
  const [highlightedLineNumbers, setHighlightedLineNumbers] = useState([])

  //* Handler for search input
  const handleSearchInput = (value) => {
    const lineNumbers = []

    if (value !== '') {
      const lines = content.split(/\r\n|\r|\n/)
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(value.toLowerCase())) {
          lineNumbers.push(i)
        }
      }
    }

    setHighlightedLineNumbers(lineNumbers)
  }

  return (
    <div className="row" id="code-container">
      <div className="col-lg-12 card d-block border-primary bg-secondary pb-2 code-container-light" id="table">
        <div className="toolbar">
          <div className="row pt-3">
            <div className="col-lg-9">
              <SearchInput value={(value) => handleSearchInput(value)} />
            </div>
            <div className="col-lg-3">
              <Actions content={content} />
            </div>
          </div>
        </div>

        <div className="line-numbers overflow-auto code-block">
          <SyntaxHighlighter
            language="xml"
            style={vs}
            showLineNumbers
            wrapLines
            renderer={virtualizedRenderer()}
            lineProps={(lineNumber) => {
              let style = { display: 'block' }
              if (highlightedLineNumbers.includes(lineNumber - 1)) {
                style.backgroundColor = '#ffe7a4'
              }
              return { style }
            }}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default CodeContainer
