const Header = () => {
  return (
    <header className="flex justify-between">
        <div>
            <h1>calc</h1>
        </div>

        <div className="flex">
            <h6>THEME</h6>       

            <div className="input">
                <input id="theme1" type="radio" name="theme" value="0" checked/>
                <label htmlFor="theme1">1</label>
                
                <input id="theme2" type="radio" value="1" name="theme"/>
                <label htmlFor="theme2">2</label>
                
                <input id="theme3" type="radio" value="2" name="theme"/>
                <label htmlFor="theme3">3</label>
            </div>
        </div>
    </header>
  )
}

export default Header