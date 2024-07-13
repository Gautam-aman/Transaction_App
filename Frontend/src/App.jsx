import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

import { Signup } from "./Page/signup"
import {Signin} from "./Page/signin"
import { Dashboard } from "./Page/dashboard"
import { SendMoney } from "./Page/transfer"
function App() {
  return <div>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
  </div>
}

export default App
