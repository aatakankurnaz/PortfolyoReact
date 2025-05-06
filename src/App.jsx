import './App.css'
import { DarkModeAndLanguage } from './components/DarkModeAndLanguage'
import { MainInformation } from './components/MainInformation'
import { NavBar } from './components/NNavBar'
import { Skills } from './components/Skills'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { useSelector } from 'react-redux'



function App() {

  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <div className={`${theme === 'dark' ? 'dark' : ''} dark:bg-[#252128] dark:[&_p]:text-white dark:[&_h2]:text-[#B7AAFF] dark:[&_h1]:text-[#AEBCCF]`}> 
        <div className=" max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 pt-4 flex 
        flex-col gap-4 sm:gap-5">
          <DarkModeAndLanguage />
          <NavBar />
          <MainInformation />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </>

  )
}

export default App
