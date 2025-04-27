export const NavBar = () => {
    return (
      <nav className="flex justify-between w-full items-center py-2">
        <img src="src/assets/Ellipse 9.svg" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12" />
        <ul className="flex ml-auto gap-6 sm:gap-10">
          <li><a href="#skills" className="nav-bar-links text-sm sm:text-base">Skills</a></li>
          <li><a href="#projects" className="nav-bar-links text-sm sm:text-base">Projects</a></li>
          <li><a href="#contact" className="nav-bar-links-2 text-sm sm:text-base">Hire me</a></li>
        </ul>
      </nav>
    )
  }
  