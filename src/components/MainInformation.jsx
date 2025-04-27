import CvResim from "../assets/107975 -1.JPG"
import LinkedinP from "../assets/LinkedIn.svg"
import GithubP from "../assets/github.svg"

export const MainInformation = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-3 items-center">
          <hr className="w-16 md:w-24 border-t-2 opacity-60 rounded-xl" />
          <p className="text-[#4338CA] font-medium text-lg md:text-xl">Atakan Kurnaz</p>
        </div>

        <div>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
            Creative thinker <br />
            Minimalism lover
          </h1>
        </div>

        <div>
          <p className="font-normal text-base md:text-lg leading-relaxed text-gray-600">
            Hi, I’m Atakan. I’m a full-stack developer.  
            If you are looking for a developer who can craft solid and scalable frontend  
            products with great user experiences, let’s shake hands with me.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="nav-bar-links-3 flex items-center justify-center px-4 py-2 text-sm sm:text-base whitespace-nowrap min-w-[140px] sm:min-w-[160px] rounded-lg"
          >
            Hire Me
          </a>

          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-4 py-2 text-[#3730A3] text-sm sm:text-base border border-[#3730A3] rounded-lg min-w-[140px] sm:min-w-[160px]"
          >
            <img src={GithubP} alt="Github" className="w-5 h-5" />
            Github
          </a>

          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-4 py-2 text-[#3730A3] text-sm sm:text-base border border-[#3730A3] rounded-lg min-w-[140px] sm:min-w-[160px]"
          >
            <img src={LinkedinP} alt="LinkedIn" className="w-5 h-5" />
            Linkedin
          </a>
        </nav>
      </div>

      <img src={CvResim} alt="Profile" className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover" />
    </div>
  )
}
