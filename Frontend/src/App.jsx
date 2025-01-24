import { useState } from "react"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //protected route
  const ProtectedRoute = ({ element: Element }) => {
    return isAuthenticated ? <Element /> : <Navigate to='/signin' />
  }

  return (
    <div className="h-screen w-full bg-slate-700">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Home Route */}
        <Route path="/home" element={<ProtectedRoute element={Home} />} />
      </Routes>
    </div>
  )
}

export default App
