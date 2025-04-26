export const MainInformation = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col justify-between">
                <div className="flex gap-3 items-center">
                    <hr className="w-24 !border-t-2 !opacity-60 rounded-xl" />
                    <p className="my-auto text-[#4338CA] font-medium text-xl">Atakan Kurnaz</p>
                </div>
                <div>
                    <h1 className="!font-bold !text-7xl">Creative thinker
                        Minimalism lover</h1>
                </div>
                <div>
                    <p className="font-normal text-lg leading-[28px]">Hi, I’m Atakan. I’m a full-stack developer.
                        If you are looking for a <br />Developer who to craft solid and scalable frontend
                        products with <br />great user experiences. Let’s shake hands with me.</p>
                </div>
                <nav className="flex gap-3">

                    <a href="" className="nav-bar-links-3">Hire Me</a>

                    <div className="flex gap-2 nav-bar-links-2">
                        <img src="src/assets/github.svg" alt="" />
                        <a href ="" className="!text-[#3730A3]">Github</a>
                    </div>

                    <div className="flex gap-2 nav-bar-links-2">
                        <img src="src/assets/LinkedIn.svg" alt="" />
                        <a href="" className="!text-[#3730A3]">Linkedin</a>
                    </div>


                </nav>
            </div>
            <img src="src/assets/107975 -1.JPG" alt="resim" width="450" className="rounded-2xl" />
        </div>
    )
}

