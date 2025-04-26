export const Footer = () => {
    return(
        <div className="flex flex-col gap-5 p-20  bg-[#F9F9F9]">
            <p className="text-[42px] text-black font-semibold leading-13" >Let’s work together on <br />
            your next product.</p>
            <div className="flex justify-between">
                <div className="flex">
                👉
                <a href="" className="a2 !text-[#AF0C48]">aatakankurnaz@gmail.com</a>
                </div>
                <div className="flex gap-3">
                <a href="" className="!text-[#00AB6B] font-semibold">Github</a>
                <a href="" className="!text-[#0077B5] font-semibold">Linkedin</a>
                </div>
            </div>
        </div>
    )
}