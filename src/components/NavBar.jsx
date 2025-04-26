export const NavBar = () => {
    return (
        <nav className="flex justify-between w-full items-center">
            <img src="src/assets/Ellipse 9.svg" alt="logo"/>
            <ul className="flex ml-auto gap-15">
                <li><a href="" className="nav-bar-links">Skills</a></li>
                <li><a href="" className="nav-bar-links">Projects</a></li>
                <li><a href="" className="nav-bar-links-2">Hire me</a></li>
            </ul>
        </nav>
    )
}