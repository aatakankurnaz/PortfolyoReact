import { useSelector } from "react-redux";
import { texts } from "../store/texts";

export const Profile = () => {
  const lang = useSelector((state) => state.language.language);
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4338CA]">{texts[lang].profile}</h1>
  
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">{texts[lang].profile}</h2>
            <div className="flex gap-8">
              <div className="flex flex-col gap-4 text-sm md:text-base">
                <p className="font-bold text-black">{texts[lang].birth}</p>
                <p className="font-bold text-black">{texts[lang].place}</p>
                <p className="font-bold text-black">{texts[lang].edu}</p>
                <p className="font-bold text-black">{texts[lang].prefer}</p>
              </div>
  
              <div className="flex flex-col text-sm md:text-base gap-2">
                <p className="text-black">18.07.1994</p>
                <p className="text-black">İstanbul, Kartal</p>
                <p className="text-black whitespace-pre-line">
                {texts[lang].licence}
                </p>
                <p className="text-black">Frontend, UI, Backend</p>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">{texts[lang].about}</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {texts[lang].aboutP1}
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {texts[lang].aboutP2}
            </p>
          </div>
        </div>
  
        <hr className="border-t-2 opacity-50 mt-6" />
      </div>
    )
  }
  