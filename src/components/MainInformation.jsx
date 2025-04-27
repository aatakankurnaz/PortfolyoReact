import CvResim from "../assets/107975 -1.JPG"
import LinkedinP from "../assets/LinkedIn.svg"
import GithubP from "../assets/github.svg"


export const MainInformation = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-6">
          {/* İsim */}
          <div className="flex gap-3 items-center">
            <hr className="w-16 md:w-24 border-t-2 opacity-60 rounded-xl" />
            <p className="text-[#4338CA] font-medium text-lg md:text-xl">Atakan Kurnaz</p>
          </div>
  
          {/* Başlık */}
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Creative thinker <br />
              Minimalism lover
            </h1>
          </div>
  
          {/* Açıklama */}
          <div>
            <p className="font-normal text-base md:text-lg leading-relaxed text-gray-600">
              Hi, I’m Atakan. I’m a full-stack developer.  
              If you are looking for a developer who can craft solid and scalable frontend  
              products with great user experiences, let’s shake hands with me.
            </p>
          </div>
  
          {/* Butonlar */}
          <nav className="flex flex-wrap gap-4">
            <a href="#contact" className="nav-bar-links-3 px-4 py-2 text-sm sm:text-base">
              Hire Me
            </a>
  
            <div className="flex gap-2 items-center nav-bar-links-2 px-4 py-2">
              <img src={GithubP} alt="Github" className="w-5 h-5" />
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-[#3730A3] text-sm sm:text-base">
                Github
              </a>
            </div>
  
            <div className="flex gap-2 items-center nav-bar-links-2 px-4 py-2">
              <img src={LinkedinP} alt="LinkedIn" className="w-5 h-5" />
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#3730A3] text-sm sm:text-base">
                Linkedin
              </a>
            </div>
          </nav>
        </div>
  
        {/* Profil resmi */}
        <img src={CvResim} alt="Profile" className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover" />
      </div>
    )
  }
  