import { useState } from "react"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

import "./App.css"

//components
import ItemList from "./Components/ItemList"

function App() {
  const { register, handleSubmit, reset } = useForm()
  const [itemList, setItemList] = useState([])

  const handleRemove = (itemID) => {
    const newList = itemList.filter((item) => item.itemID !== itemID)
    setItemList(newList)
  }

  const handleCheck = (itemID, checkStatus) => {
    const newList = [...itemList]
    const itemToToggle = newList.find((item) => item.itemID === itemID)
    itemToToggle.isDone = checkStatus
    setItemList(newList)
  }

  const onSubmit = (data) => {
    console.log(data)
    setItemList([
      ...itemList,
      {
        itemName: data.itemName,
        itemID: uuidv4(),
        isDone: false,
      },
    ])

    reset()
  }

  return (
    <div className="App">
      <h1>Simple todo app showing the power of cypress</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="itemName">Add item</label>
        <input
          type="text"
          id="itemName"
          data-testid="item-field"
          {...register("itemName")}
        />
        <input type="submit" value="add item" />
      </form>

      <ItemList
        itemList={itemList}
        handleRemove={handleRemove}
        handleCheck={handleCheck}
      />
    </div>
  )
}

export default App
