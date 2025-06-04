import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import Login from './components/Login'
import './App.css'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Welcome/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App