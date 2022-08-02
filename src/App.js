import React from "react"
import { Navbar, Footer } from "./components"
import Home from "./pages/Home"

function App() {
  return (
    <div className="l-site">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
