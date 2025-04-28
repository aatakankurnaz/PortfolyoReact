import Logo from "../assets/Ellipse 9.svg"

export const NavBar = () => {
  return (
    <nav className="flex justify-between w-full items-center py-2">
      <svg
        width="64"
        height="62"
        viewBox="0 0 64 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#EEEBFF] dark:text-[#4731D3]"
      >
        <ellipse
          cx="31.8378"
          cy="31"
          rx="31.8378"
          ry="31"
          fill="currentColor"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          transform="rotate(45 32 31)"
          fontFamily="'Inter', sans-serif"
          fontSize="24"
          fill="#7B61FF"
          fontWeight="600"
        >
          A
        </text>
      </svg>

      <ul className="flex ml-auto gap-8 sm:gap-20">
        <li><a href="#skills" className="text-[#6B7280] text-lg font-medium text-sm sm:text-base">Skills</a></li>
        <li><a href="#projects" className=" text-[#6B7280] text-lg font-medium text-sm sm:text-base">Projects</a></li>
        <li><a href="#contact" className="dark:bg-white border px-7 py-3 rounded-md text-[#3730A3] text-lg font-medium text-sm sm:text-base whitespace-nowrap">Hire me</a></li>
      </ul>
    </nav>
  )
}
