import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AptAddForm() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [img, setImg] = useState("")
  const [pricePerDay, setPricePerDay] = useState(0)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleImgChange = (event) => {
    setImg(event.target.value)
  }
  const handlePriceChange = (event) => {
    setPricePerDay(event.target.value)
  }

  const handleCreateApt = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("https://ironbnb-m3.herokuapp.com/apartments", {
        title: title,
        img: img,
        pricePerDay: pricePerDay
      })
      
      navigate("/pisos")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Add a new Apartment</h2>

      <form>
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" value={title} onChange={handleTitleChange}/>
      <br />

      <label htmlFor="img">Image: </label>
      <input type="text" name="img" value={img} onChange={handleImgChange}/>
      <br />

      <label htmlFor="pricePerDay">Price: </label>
      <input type="number" name="pricePerDay" value={pricePerDay} onChange={handlePriceChange}/>
      <br />

      <button onClick={handleCreateApt}>Add</button>

      </form>

    </div>
  )
}

export default AptAddForm