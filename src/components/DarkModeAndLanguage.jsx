import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { toggleLanguage, setLanguage } from "../store/languageSlice"; 
import { texts } from "../store/texts";

export const DarkModeAndLanguage = () => {
  const lang = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = () => {
    if (lang === "tr") {
      dispatch(setLanguage("en"));
    } else {
      dispatch(setLanguage("tr"));
    }
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
          <div className="block bg-[#4731D3] w-12 h-6 rounded-full peer-checked:bg-gray-600 transition-colors"></div>
          <div className="absolute top-1 left-1 w-4 h-4 bg-yellow-400 rounded-full transition-all transform peer-checked:translate-x-6 peer-checked:bg-white overflow-hidden"></div>
          <div className="absolute w-4 h-4 bg-gray-600 rounded-full right-2 top-0 scale-0 peer-checked:scale-100 transition-all "></div>
        </div>

        <span className="text-[#777777] dark:text-[#D9D9D9] font-bold tracking-widest text-sm sm:text-base">
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </label>

      <span className="text-[#777777] font-bold hidden sm:inline">
        |
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={handleLanguageChange} 
          className="tracking-widest text-sm sm:text-base font-bold flex items-center gap-1"
        >
          {lang === 'tr' ? (
            <>
              <span className="text-[#4731D3] dark:text-[#bab2e7]">{texts[lang].language}</span>
              <span className="text-[#777777] dark:text-[#D9D9D9]">{texts[lang].languageSub}</span>
            </>
          ) : (
            <>
              <span className="text-[#4731D3] dark:text-[#bab2e7]">{texts[lang].language}</span>
              <span className="text-[#777777] dark:text-[#D9D9D9]">{texts[lang].languageSub}</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
