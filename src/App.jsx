import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Hosting from "./components/Hosting/Hosting"
import Navbar from "./components/Navbar/Navbar"
import Sservices from "./components/Sservices/Sservices"
function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Sservices />
        <Hosting />
      </main>
      <Footer />
    </>
  )
}

export default App

