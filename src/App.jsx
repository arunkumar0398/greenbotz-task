import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { SignUp } from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { AboutUs } from './components/AboutUs'
import { Profile } from './components/Profile'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<SignUp/>}  path='/' />
        <Route element={<Login/>}  path='/login' />
        <Route element={<Dashboard />} path='/dashboard' />

        <Route element={<Profile />} path='/profile' />
        <Route element={<AboutUs />} path='/about' />
      </Routes>
    </Router>
  )
}

export default App
