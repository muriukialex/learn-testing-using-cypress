import React from "react"
import cx from "classnames"

import "./style.css"

const Item = ({ item, handleRemove, handleCheck }) => {
  const cs = cx(item.isDone && "complete")

  return (
    <li style={{ marginBottom: "3rem" }}>
      <div className={cs}>{item.itemName}</div>
      <div>
        Set done
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          checked={item.isDone}
          onChange={(e) => handleCheck(item.itemID, e.target.checked)}
        />
      </div>
      <div>
        <button style={buttonStyles} onClick={() => handleRemove(item.itemID)}>
          {" "}
          remove ❌{" "}
        </button>
      </div>
    </li>
  )
}

const buttonStyles = {
  cursor: "pointer",
}

export default Item
