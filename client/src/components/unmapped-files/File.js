import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../utils/pagetitles'
import Breadcrumbs from '../ui/Breadcrumbs'
import Spinner from '../ui/Spinner'

import SyntaxHighlighter from 'react-syntax-highlighter'
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import format from 'xml-formatter'

const xml = `<Document xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iso:std:iso:20022:tech:xsd:camt.053.001.02">
<BkToCstmrStmt>
    <GrpHdr>
        <MsgId>576435.20210709063909454</MsgId>
        <CreDtTm>2021-07-09T06:39:09.454+02:00</CreDtTm>
        <MsgRcpt>
            <Nm>10X WEB AS</Nm>
            <Id>
                <OrgId>
                    <Othr>
                        <Id>576435</Id>
                        <SchmeNm>
                            <Cd>BANK</Cd>
                        </SchmeNm>
                    </Othr>
                </OrgId>
            </Id>
        </MsgRcpt>
    </GrpHdr>
    <Stmt>
        <Id>31263246082.20210708</Id>
        <ElctrncSeqNb>202107090639094570</ElctrncSeqNb>
        <CreDtTm>2021-07-09T06:39:09.457+02:00</CreDtTm>
        <FrToDt>
            <FrDtTm>2021-07-08T00:00:01</FrDtTm>
            <ToDtTm>2021-07-08T23:59:59</ToDtTm>
        </FrToDt>
        <Acct>
            <Id>
                <Othr>
                    <Id>31263246082</Id>
                    <SchmeNm>
                        <Cd>BBAN</Cd>
                    </SchmeNm>
                </Othr>
            </Id>
            <Ccy>NOK</Ccy>
            <Svcr>
                <FinInstnId>
                    <BIC>SPRONO22XXX</BIC>
                </FinInstnId>
            </Svcr>
        </Acct>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>OPBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">0.00</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>CLBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">0.00</Amt>
            <CdtDbtInd>DBIT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
    </Stmt>
    <Stmt>
        <Id>31263246090.20210708</Id>
        <ElctrncSeqNb>202107090639094571</ElctrncSeqNb>
        <CreDtTm>2021-07-09T06:39:09.457+02:00</CreDtTm>
        <FrToDt>
            <FrDtTm>2021-07-08T00:00:01</FrDtTm>
            <ToDtTm>2021-07-08T23:59:59</ToDtTm>
        </FrToDt>
        <Acct>
            <Id>
                <Othr>
                    <Id>31263246090</Id>
                    <SchmeNm>
                        <Cd>BBAN</Cd>
                    </SchmeNm>
                </Othr>
            </Id>
            <Ccy>NOK</Ccy>
            <Svcr>
                <FinInstnId>
                    <BIC>SPRONO22XXX</BIC>
                </FinInstnId>
            </Svcr>
        </Acct>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>OPBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">27813.95</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>CLBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">27813.95</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
    </Stmt>
    <Stmt>
        <Id>31263249375.20210708</Id>
        <ElctrncSeqNb>202107090639094572</ElctrncSeqNb>
        <CreDtTm>2021-07-09T06:39:09.457+02:00</CreDtTm>
        <FrToDt>
            <FrDtTm>2021-07-08T00:00:01</FrDtTm>
            <ToDtTm>2021-07-08T23:59:59</ToDtTm>
        </FrToDt>
        <Acct>
            <Id>
                <Othr>
                    <Id>31263249375</Id>
                    <SchmeNm>
                        <Cd>BBAN</Cd>
                    </SchmeNm>
                </Othr>
            </Id>
            <Ccy>NOK</Ccy>
            <Svcr>
                <FinInstnId>
                    <BIC>SPRONO22XXX</BIC>
                </FinInstnId>
            </Svcr>
        </Acct>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>OPBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">44520.24</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>CLBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">43270.39</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <TxsSummry>
            <TtlNtries>
                <NbOfNtries>1</NbOfNtries>
                <TtlNetNtryAmt>1249.85</TtlNetNtryAmt>
                <CdtDbtInd>DBIT</CdtDbtInd>
            </TtlNtries>
            <TtlDbtNtries>
                <NbOfNtries>1</NbOfNtries>
                <Sum>1249.85</Sum>
            </TtlDbtNtries>
        </TxsSummry>
        <Ntry>
            <NtryRef>00000000022</NtryRef>
            <Amt Ccy="NOK">1249.85</Amt>
            <CdtDbtInd>DBIT</CdtDbtInd>
            <Sts>BOOK</Sts>
            <BookgDt>
                <Dt>2021-07-08</Dt>
            </BookgDt>
            <ValDt>
                <Dt>2021-07-08</Dt>
            </ValDt>
            <AcctSvcrRef>50001685147</AcctSvcrRef>
            <BkTxCd>
                <Domn>
                    <Cd>PMNT</Cd>
                    <Fmly>
                        <Cd>CCRD</Cd>
                        <SubFmlyCd>POSD</SubFmlyCd>
                    </Fmly>
                </Domn>
            </BkTxCd>
            <NtryDtls>
                <TxDtls>
                    <Refs/>
                    <AmtDtls>
                        <TxAmt>
                            <Amt Ccy="NOK">1249.85</Amt>
                        </TxAmt>
                    </AmtDtls>
                    <BkTxCd>
                        <Domn>
                            <Cd>PMNT</Cd>
                            <Fmly>
                                <Cd>CCRD</Cd>
                                <SubFmlyCd>POSD</SubFmlyCd>
                            </Fmly>
                        </Domn>
                    </BkTxCd>
                    <AddtlTxInf>VISA VARE *8012 07.07 USD 140.00 YOUCANBOOK.ME Kurs: 8.9275</AddtlTxInf>
                </TxDtls>
            </NtryDtls>
        </Ntry>
    </Stmt>
    <Stmt>
        <Id>31263249383.20210708</Id>
        <ElctrncSeqNb>202107090639094573</ElctrncSeqNb>
        <CreDtTm>2021-07-09T06:39:09.457+02:00</CreDtTm>
        <FrToDt>
            <FrDtTm>2021-07-08T00:00:01</FrDtTm>
            <ToDtTm>2021-07-08T23:59:59</ToDtTm>
        </FrToDt>
        <Acct>
            <Id>
                <Othr>
                    <Id>31263249383</Id>
                    <SchmeNm>
                        <Cd>BBAN</Cd>
                    </SchmeNm>
                </Othr>
            </Id>
            <Ccy>NOK</Ccy>
            <Svcr>
                <FinInstnId>
                    <BIC>SPRONO22XXX</BIC>
                </FinInstnId>
            </Svcr>
        </Acct>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>OPBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">38.30</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>CLBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">38.30</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
    </Stmt>
    <Stmt>
        <Id>31263249391.20210708</Id>
        <ElctrncSeqNb>202107090639094584</ElctrncSeqNb>
        <CreDtTm>2021-07-09T06:39:09.458+02:00</CreDtTm>
        <FrToDt>
            <FrDtTm>2021-07-08T00:00:01</FrDtTm>
            <ToDtTm>2021-07-08T23:59:59</ToDtTm>
        </FrToDt>
        <Acct>
            <Id>
                <Othr>
                    <Id>31263249391</Id>
                    <SchmeNm>
                        <Cd>BBAN</Cd>
                    </SchmeNm>
                </Othr>
            </Id>
            <Ccy>NOK</Ccy>
            <Svcr>
                <FinInstnId>
                    <BIC>SPRONO22XXX</BIC>
                </FinInstnId>
            </Svcr>
        </Acct>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>OPBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">0.00</Amt>
            <CdtDbtInd>CRDT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
        <Bal>
            <Tp>
                <CdOrPrtry>
                    <Cd>CLBD</Cd>
                </CdOrPrtry>
            </Tp>
            <Amt Ccy="NOK">0.00</Amt>
            <CdtDbtInd>DBIT</CdtDbtInd>
            <Dt>
                <Dt>2021-07-08</Dt>
            </Dt>
        </Bal>
    </Stmt>
</BkToCstmrStmt>
</Document>`

const File = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location, history])

  //* ---

  const [fileContent, setFileContent] = useState('')
  const [highlightedLineNumbers, setHighlightedLineNumbers] = useState([])
  let textAreaRef = useRef(fileContent)

  useEffect(() => {
    const content = format(xml, {
      collapseContent: true,
    })
    setFileContent(content)
  }, [location.pathname])

  const data = [
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f78e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
  ]

  const handleSearchInput = (value) => {
    if (value === '') {
      setHighlightedLineNumbers([])
      return
    }
    const lines = fileContent.split(/\r\n|\r|\n/)
    const lineNumbers = []
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(value.toLowerCase())) {
        lineNumbers.push(i)
      }
    }
    setHighlightedLineNumbers(lineNumbers)
  }

  //* Action buttons

  const handleCopyButton = () => {
    textAreaRef.select()
    document.execCommand('copy')
  }

  const handleDownloadButton = () => {
    const element = document.createElement('a')
    const file = new Blob([fileContent], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'P.00921643497.000.C053.20210706064739-E2C6G.xml'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  const handleShareButton = () => {
    textAreaRef.select()
    document.execCommand('copy')
  }

  return currentPage ? (
    <section>
      <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
        <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
        <div className="col-lg-7">
          <h1 className="mt-lg-4 pt-2 fs-4 text-truncate">P.00921643497.000.C053.20210706064739-E2C6G.DAT</h1>
          <p className="text-muted">Camt053 (Avstemming) - 07/08/2021 06:47:41</p>
        </div>
        <div className="col-lg-3">
          <div className="card border-primary mb-3">
            <div className="card-body">
              <h5 className="card-title fs-sm">Company</h5>
              <p className="card-text fs-sm">Bedrift Alpha AS (999 473 200)</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card border-primary mb-0">
            <div className="card-body">
              <div className="card-text fs-sm">
                <div className="row text-center text-decoration-none">
                  <div className="col">
                    <button type="button" className="btn btn-secondary btn-icon" onClick={() => handleCopyButton()}>
                      <i className="ai-copy"></i>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-secondary btn-icon" onClick={() => handleDownloadButton()}>
                      <i className="ai-download"></i>
                    </button>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-secondary btn-icon" onClick={() => handleShareButton()}>
                      <i className="ai-share-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="code-container">
        <div className="col-lg-12 card d-block border-primary bg-secondary pt-3 code-container-light" id="table">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              id="search-in-file"
              placeholder="Search in file"
              onChange={(e) => handleSearchInput(e.target.value)}
            />
            <label htmlFor="search-in-file">Search in file</label>
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
              {fileContent}
            </SyntaxHighlighter>
          </div>
          <textarea
            className="hidden-textarea"
            ref={(textarea) => (textAreaRef = textarea)}
            defaultValue={fileContent}
          />
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default File
