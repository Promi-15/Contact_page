
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navbar from './Navigation/Navbar'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  )
}

export default App
