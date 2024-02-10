import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import AptList from "./pages/AptList"
import AptAddForm from "./pages/AptAddForm"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar"
import { useState } from 'react'


function App() {
  
  const [isThemeDark, setIsThemeDark] = useState(false)


  const handleSwitchTheme = () => {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <div className={isThemeDark ? 'dark-page' : "light-page"}>

      <button className={isThemeDark ? 'dark-btn' : "light-btn"} onClick={handleSwitchTheme}>Change theme</button>
      <NavBar />
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pisos' element={<AptList />}/>
        <Route path='/pisos/add' element={<AptAddForm />}/>

        <Route path="/error" element={ <Error />}/>
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
