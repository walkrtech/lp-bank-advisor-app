import './App.css'
import { Carrer } from './components/Carrer/Carrer'
import { Header } from './components/Header/Header'
import { Mockups } from './components/Mockups/Mockups'
import { Navbar } from './components/Navbar/Navbar'
import { Plans } from './components/Plans/Plans'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Carrer />
      <Mockups />
      <Plans />
    </>
  )
}

export default App
