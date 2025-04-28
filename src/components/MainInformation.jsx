import { useSelector } from "react-redux";
import CvResim from "../assets/107975 -1.JPG"
import { texts } from "../store/texts";

export const MainInformation = () => {
  const lang = useSelector((state) => state.language.language);
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-3 items-center">
          <hr className="dark:border-[#BAB2E7] dark:border-t-1 w-16 md:w-24 border-t-2 opacity-100 rounded-xl" />
          <p className="dark:!text-[#BAB2E7] text-[#4338CA] font-medium text-lg md:text-xl m-0">Atakan Kurnaz</p>
        </div>

        <div>
          <h1 className="dark:text-[#AEBCCF] font-bold text-4xl sm:text-5xl md:text-6xl leading-tight ">
            {texts[lang].mainP}
          </h1>
        </div>

        <div>
          <p className=" font-normal text-base md:text-lg leading-relaxed text-gray-600">
          {texts[lang].mainP2}
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="dark:bg-[#E1E1FF] dark:text-black border text-white bg-[#3730A3] flex items-center justify-center px-4 py-2 text-sm sm:text-base whitespace-nowrap min-w-[140px] sm:min-w-[160px] rounded-lg"
          >
            {texts[lang].hireMe}
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-[#E1E1FF] dark:border-[#E1E1FF] flex items-center justify-center gap-2 px-4 py-2 text-[#3730A3] text-sm sm:text-base border border-[#3730A3] rounded-lg min-w-[140px] sm:min-w-[160px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 28"
              className="w-6 h-6 fill-[#3730A3] dark:fill-[#BAB2E7]"
            >
              <path d="M12.9993 0.872315C6.62413 0.871467 1.18956 5.66041 0.16884 12.1785C-0.851878 18.6967 2.84266 25.0193 8.89128 27.1057C9.54273 27.2272 9.77596 26.8129 9.77596 26.4566C9.77596 26.1368 9.76553 25.2893 9.76162 24.1624C6.14606 24.9721 5.38255 22.3567 5.38255 22.3567C5.14453 21.5429 4.63283 20.8444 3.94023 20.3878C2.76762 19.5524 4.03014 19.5713 4.03014 19.5713C4.86488 19.6899 5.59955 20.2022 6.01967 20.9586C6.37528 21.6283 6.97439 22.1232 7.68388 22.3333C8.39338 22.5434 9.15449 22.4512 9.7981 22.0774C9.85859 21.3945 10.1519 20.7563 10.6255 20.2771C7.74081 19.9384 4.70765 18.7832 4.70765 13.624C4.69164 12.2896 5.17005 10.9995 6.04443 10.0194C5.6488 8.85787 5.69539 7.58384 6.17472 6.45665C6.17472 6.45665 7.26525 6.09363 9.74729 7.83451C11.876 7.22993 14.1227 7.22993 16.2514 7.83451C18.7347 6.09228 19.824 6.45665 19.824 6.45665C20.3055 7.58331 20.3521 8.85823 19.9543 10.0194C20.8318 10.9995 21.3099 12.2929 21.2884 13.6294C21.2884 18.8021 18.2527 19.9384 15.3576 20.2717C15.9821 20.9331 16.3024 21.8403 16.2371 22.763C16.2371 24.5632 16.2214 26.0153 16.2214 26.4566C16.2214 26.8169 16.4534 27.2353 17.1165 27.103C23.1626 25.0131 26.8532 18.6901 25.8304 12.1737C24.8076 5.65726 19.3732 0.870804 12.9993 0.872315Z" />
            </svg>

            Github
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-[#E1E1FF] dark:border-[#E1E1FF] flex items-center justify-center gap-2 px-4 py-2 text-[#3730A3] text-sm sm:text-base border border-[#3730A3] rounded-lg min-w-[140px] sm:min-w-[160px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 26"
              className="w-6 h-6 fill-[#3730A3] dark:fill-[#BAB2E7]"
            >
              <path d="M13.3333 25.6029H7.99998V8.79929H13.3333V11.5999C14.4701 10.0809 16.1941 9.17537 18.0333 9.13116C21.3407 9.15044 24.0096 11.9771 24 15.4507V25.6029H18.6666V16.1509C18.4533 14.5862 17.1756 13.4253 15.6706 13.4287C15.0123 13.4505 14.391 13.7532 13.9499 14.2669C13.5088 14.7806 13.2862 15.4609 13.3333 16.1509V25.6029ZM5.33332 25.6029H0V8.79929H5.33332V25.6029ZM2.66666 5.99868C1.1939 5.99868 0 4.7448 0 3.19807C0 1.65134 1.1939 0.397461 2.66666 0.397461C4.13942 0.397461 5.33332 1.65134 5.33332 3.19807C5.33332 3.94084 5.05237 4.65318 4.55228 5.1784C4.05218 5.70362 3.3739 5.99868 2.66666 5.99868Z" />
            </svg>

            Linkedin
          </a>
        </nav>
      </div>

      <img src={CvResim} alt="Profile" className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover" />
    </div>
  )
}
