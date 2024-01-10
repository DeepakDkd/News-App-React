import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
      <main>
        <Header />



        <Outlet />


      <Footer />
      </main>
    </>
  )
}

export default App
