import React from 'react'
import './styles/App.css'
import { Header } from './components'
import { BrowserRouter } from 'react-router-dom'
import  StateRoutes  from './routes/Routes'

const App = () => {
  return (
<BrowserRouter>
<Header/>


<main>
<StateRoutes/>
</main>
</BrowserRouter>


  )
}

export default App