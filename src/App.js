import { useContext } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Skills from './components/Skills/Skills'
import { ThemeContext } from './contexts/theme'
// import Honeres from './components/Honors'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        {/* <Honers /> */}
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
