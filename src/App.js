import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Pages from "./Pages"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Pages />
    </Router>
  )
}

export default App
