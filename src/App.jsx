import PokeList from "./store/PokeList"
import PokeDetails from "./store/PokeDetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<PokeList/>}/>
      <Route path="/pokes/:id" element={<PokeDetails/>}/>
    </Routes>
  </Router>
  )
}

export default App
