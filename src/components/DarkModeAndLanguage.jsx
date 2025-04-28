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
          <div className="block bg-gray-300 w-12 h-6 rounded-full peer-checked:bg-gray-600 transition-colors"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></div>
        </div>
        <span className="text-[#777777] dark:text-[#D9D9D9] font-bold tracking-widest text-sm sm:text-base">
          DARK MODE
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
