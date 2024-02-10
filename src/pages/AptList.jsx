import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function AptList() {

  const [aptList, setAptList] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response);

      setAptList(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  }

  const handleRefresh = () => {
    setIsFetching(true)
    getData()
  }

  if (isFetching === true) {
    return (
      <div>
        <ClipLoader />
      </div>
    )
  }

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {aptList.map((eachApt) => {
        return (
          <div key={eachApt._id}>
            <h3>{eachApt.title}</h3>
            <img src={eachApt.img} alt="apt-img" width={300}/>
            <p>Price: {eachApt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AptList