import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

export const DarkModeAndLanguage = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-end items-center text-sm sm:text-base">

      <label className="flex items-center cursor-pointer gap-x-3">
        <div className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === 'dark'}
            onChange={handleToggle}
          />

          {/* Arka plan */}
          <div className="block bg-[#4731D3] w-12 h-6 rounded-full peer-checked:bg-gray-600 transition-colors"></div>

          {/* Büyük ana top */}
          <div className="absolute top-1 left-1 w-4 h-4 bg-yellow-400 rounded-full transition-all  transform peer-checked:translate-x-6 peer-checked:bg-white overflow-hidden">



          </div>
          {/* Küçük iç top (hilal efekti) */}
          <div className="absolute w-4 h-4 bg-gray-600 rounded-full right-2 top-0 scale-0 peer-checked:scale-100 transition-all "></div>
        </div>

        {/* Text */}
        <span className="text-[#777777] dark:text-[#D9D9D9] font-bold tracking-widest text-sm sm:text-base">
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </label>





      <span className="text-[#777777] font-bold hidden sm:inline">
        |
      </span>

      <div className="flex items-center gap-1">
        <button className="font-bold text-[#4731D3] dark:text-[#bab2e7] tracking-widest text-sm sm:text-base">
          TÜRKÇE
        </button>
        <span className="text-[#777777] font-bold tracking-widest text-sm sm:text-base">
          'YE GEÇ
        </span>
      </div>
    </div>
  );
};
