import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Products } from './components/Products'
import { Industries } from './components/Industries'
import { Analytics } from './components/Analytics'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Analytics />
      <TechStack />
      <Footer />
    </div>
  )
}

export default App
