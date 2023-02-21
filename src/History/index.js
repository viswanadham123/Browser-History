import './index.css'

const History = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  const deletedId = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div className="history-div">
        <p className="p1">{timeAccessed}</p>
        <img className="img1" src={logoUrl} alt="domain logo" />
        <p className="p2">{title}</p>
        <p>{domainUrl}</p>
        <div className="buttons">
          <button testid="delete" type="button" onClick={deletedId}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default History
