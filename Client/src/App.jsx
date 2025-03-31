import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Common/Navbar'
import Login from './pages/Login'
import { useState } from 'react'
import Signup from './pages/SignUp'
import OpenRoute from "./components/Core/Auth/OpenRoute"
import PrivateRoute from "./components/Core/Auth/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/Error'
import MyProfile from './components/Core/Dashboard/MyProfile'
import Dashboard from './pages/Dashboard'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen min-h-screen bg-[#000814] flex flex-col font-[inter]'>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OpenRoute> <Login /> </OpenRoute>} />
        <Route path="/signup" element={<OpenRoute> <Signup /> </OpenRoute>} />
        <Route path="/forgot-password" element={<OpenRoute> <ForgotPassword /> </OpenRoute>} />
        <Route path="/update-password/:id" element={<OpenRoute> <UpdatePassword /> </OpenRoute>} />
        <Route path="/verify-email" element={<OpenRoute> <VerifyEmail /> </OpenRoute>} />
        <Route path="/about" element={<OpenRoute> <About /> </OpenRoute>} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
        </Route>

      </Routes>
    </div>
  )
}
export default App