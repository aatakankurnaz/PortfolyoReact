import './App.css'
import { DarkModeAndLanguage } from './components/DarkModeAndLanguage'
import { MainInformation } from './components/MainInformation'
import { NavBar } from './components/NNavBar'
import { Skills } from './components/Skills'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'  



function App() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 mt-4 flex flex-col gap-4 sm:gap-5'>
        <DarkModeAndLanguage />
        <NavBar />
        <MainInformation />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
