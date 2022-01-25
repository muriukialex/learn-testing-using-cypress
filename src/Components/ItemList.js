import React from "react"

import Item from "./Item"

const ItemList = ({ itemList, handleRemove, handleCheck }) => {
  if (itemList.length === 0) {
    return <div>No item in the list</div>
  }
  return (
    <div>
      <ol style={{ listStyle: "none" }}>
        {itemList.map((item) => (
          <Item
            key={item.itemID}
            item={item}
            handleRemove={handleRemove}
            handleCheck={handleCheck}
          />
        ))}
      </ol>
    </div>
  )
}

export default ItemList
