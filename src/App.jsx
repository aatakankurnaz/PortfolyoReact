import './App.css'
import { DarkModeAndLanguage } from './components/darkModeAndLanguage'
import { Footer } from './components/Footer'
import { MainInformation } from './components/mainInformation'
import { NavBar } from './components/navBar'
import { Profile } from './components/profile'
import { Projects } from './components/Projects'
import { Skills } from './components/skills'

function App() {

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col gap-5'>
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
