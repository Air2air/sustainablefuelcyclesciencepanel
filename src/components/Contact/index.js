import documents from '../../data/documents.json'
import './index.scss'

const handleOpenPdf = pdfFile => {
  const pdfPath = `/pdf/${pdfFile}`
  window.open(pdfPath)
}

const Contact = () => (
  <div className="container">
    <div className="d-flex flex-row justify-content-between align-items-center page-title fade-in two">
      <span>Contact</span>
    </div>
    <div className="d-flex flex-column fade-in one" />

    {documents.map(document => (
      <div key={document.id} className="result-panel documents">
        <div className="row">
          <div className="d-flex flex-column text-section">
            <h4>
              <span className="fa fa-clock-o" /> {document.date}
            </h4>
            <h1>
              <a href={document.docLink} target="_new">
                {document.title}
              </a>
            </h1>
            <h2>To : {document.recipientOrg}</h2>
            <h3>{document.recipientName}</h3>
            <h2>From : {document.authorOrg}</h2>
            <h3>{document.authorName}</h3>
            <div className="text">{document.docDescription}</div>
            <button
              className="btn btn-default"
              type="button"
              onClick={() => handleOpenPdf(document.docLink)}
              target="_new"
            >
              View {document.category}
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Contact
