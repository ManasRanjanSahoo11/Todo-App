import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="h-screen w-full bg-slate-700">

    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
    

    {/* <Signup /> */}
    {/* <Signin /> */}
    {/* <Home/> */}
    </div>
  )
}

export default App
