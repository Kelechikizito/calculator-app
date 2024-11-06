const Header = () => {
  return (
    <header className="flex justify-between text-[#EAE3DC]">
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
          <div className="theme-inputs flex gap-[0.6rem] bg-[#232C43] p-[0.25rem] rounded-xl">
            <input id="theme1" type="radio" name="theme" defaultChecked className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#D03F2F]"/>
            <input id="theme2" type="radio" name="theme" className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#CA5502]"/>
            <input id="theme3" type="radio" name="theme" className="cursor-pointer appearance-none w-4 h-4 rounded-full checked:bg-[#00E0D1]"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
