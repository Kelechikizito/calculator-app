import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    // Remove previous theme class and apply the new theme class to `body`
    document.body.classList.remove("theme1", "theme2", "theme3");
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.id);
  };

  return (
    <header className="flex justify-between text-[#EAE3DC]
            theme1:text-theme1-textSecond
            theme2:text-theme2-text
            theme3:text-theme3-text
    ">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">calc</h1>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col justify-end text-[0.6rem] font-bold tracking-wider">
          <h6>THEME</h6>
        </div>

        <div className="themes-btns flex flex-col justify-between">
          <div className="labels flex justify-between text-[0.6rem] font-bold px-2">
            <label htmlFor="theme1">1</label>
            <label htmlFor="theme2">2</label>
            <label htmlFor="theme3">3</label>
          </div>
          <div
            className="theme-inputs flex gap-[0.6rem]  
            theme1:bg-theme1-toggleBackground
            theme2:bg-theme2-toggleBackground
            theme3:bg-theme3-toggleBackground  p-[0.25rem] rounded-xl"
          >
            <input
              id="theme1"
              type="radio"
              name="theme"
              defaultChecked
              onChange={handleThemeChange}
              checked={theme === "theme1"}
              className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#D03F2F]"
            />
            <input
              id="theme2"
              type="radio"
              name="theme"
              onChange={handleThemeChange}
              checked={theme === "theme2"}
              className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#CA5502]"
            />
            <input
              id="theme3"
              type="radio"
              name="theme"
              onChange={handleThemeChange}
              className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#00E0D1]"
              checked={theme === "theme3"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
