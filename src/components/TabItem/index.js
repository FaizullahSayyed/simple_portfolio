import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText} = tabDetails

  const onClickUpdateActiveTabId = () => {
    updateTabId(tabDetails.tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        // className={isActive ? 'active-tab-btn tab-btn' : 'tab-btn'}
        className={`tab-btn ${isActive && 'active-tab-btn'}`}
        onClick={onClickUpdateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
