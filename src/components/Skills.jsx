import { useSelector } from "react-redux";
import { texts } from "../store/texts";

export const Skills = () => {
  const lang = useSelector((state) => state.language.language);
    return (
      <div className="flex flex-col gap-6">

        <h1 className="text-2xl md:text-3xl font-bold text-[#4338CA]">{texts[lang].skills}</h1>
  
     
        <div className="flex flex-col md:flex-row justify-between gap-6">
        
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">JavaScript</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
            {texts[lang].js}
            </p>
          </div>
  
      
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">React.js</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
            {texts[lang].react}
            </p>
          </div>
  
    
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[#222]">SpringBoot</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
            {texts[lang].spring}
            </p>
          </div>
        </div>
  
        <hr className="border-t-2 opacity-50 mt-6" />
      </div>
    )
  }
  