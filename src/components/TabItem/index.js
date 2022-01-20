import './index.css'

const TabItem = props => {
  const {tabItem, onChangeTab, isSelectedTab} = props
  const {tabId, displayText} = tabItem
  const selectedClassName = isSelectedTab ? 'selected' : ''

  const changeTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button type="button" className="button" onClick={changeTab}>
        <p className={`tab-item ${selectedClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
