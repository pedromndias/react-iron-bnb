import { NavLink } from "react-router-dom"

function NavBar() {

  const checkActiveUrl = (info) => {
    // console.log(info);
    if (info.isActive === true) {
      return "nav-active"
    } else {
      return "nav-inactive"
    }
  }

  return (
    <nav>
      <NavLink className={checkActiveUrl} to="/">Home</NavLink>
      <NavLink className={checkActiveUrl} end={true}to="/pisos">Apartment List</NavLink>
      <NavLink className={checkActiveUrl} end={true} to="/pisos/add">Add Apartment</NavLink>
    </nav>
  )
}

export default NavBar