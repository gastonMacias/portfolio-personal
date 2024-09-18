import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/pages/Home.jsx"


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio-personal" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
