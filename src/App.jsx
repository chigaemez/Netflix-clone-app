import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import LogIn from './Pages/LogIn'
import SingnUp from './Pages/SignUp'
import Protected from './components/Protected'
import Account from './Pages/Account'

function App () {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signUp' element={<SingnUp/>}/>
          <Route path='/account' element={<Protected><Account/></Protected>}/>
          
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
