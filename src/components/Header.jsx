const Header = () => {
  return (
    <header className="flex justify-between text-[#EAE3DC]">
      <div>
        <h1 className="text-2xl font-bold">calc</h1>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center justify-center text-[0.6rem] font-bold tracking-wide">
          <h6>THEME</h6>
        </div>

        <div className="input flex place-items-center">
          <input id="theme1" type="radio" name="theme" value="0" checked />
          <label htmlFor="theme1">1</label>

          <input id="theme2" type="radio" value="1" name="theme" />
          <label htmlFor="theme2">2</label>

          <input id="theme3" type="radio" value="2" name="theme" />
          <label htmlFor="theme3">3</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
