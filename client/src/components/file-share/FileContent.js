import SyntaxHighlighter from 'react-syntax-highlighter'
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const FileContent = ({ content, highlightedLineNumbers }) => {
  return (
    <div className="line-numbers overflow-auto code-block">
      <SyntaxHighlighter
        language="xml"
        style={vs2015}
        showLineNumbers
        wrapLines
        renderer={virtualizedRenderer()}
        lineNumberStyle={{ height: '100px' }}
        lineProps={(lineNumber) => {
          let style = { display: 'block' }
          if (highlightedLineNumbers.includes(lineNumber - 1)) {
            style.backgroundColor = 'rgb(110 110 110 / 60%)'
          }
          return { style }
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  )
}

export default FileContent
