import Header from './Components/Header'
import PasswordGenerator from './Components/PasswordGenerator'
import Inicio from './Components/Inicio'
function App() {
  return (
    <>
      <Header/>
      <div id='header'>
      <Inicio/>
      </div>
      <div id='requisitos'>
      <PasswordGenerator/>
      </div>
    </>
  )
}

export default App
