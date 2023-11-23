import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Success } from './Success'
import { Failed } from './Failed'
import { Home } from './Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/failed' element={<Failed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
