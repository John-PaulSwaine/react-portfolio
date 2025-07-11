import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Codenation from './pages/codenation'
import PersonalProjects from './pages/personalprojects'

const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/codenation' className='links'>Code Nation</Link>
        <Link to='/personal-projects' className='links'>Personal Projects</Link>
        <Link to='/about' className='links'>About Me</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        {<Route path='/codenation' element={<Codenation />}></Route>}
        {<Route path='/personal-projects' element={<PersonalProjects />}></Route>}
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
