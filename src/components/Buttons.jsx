import PropTypes from "prop-types";

const Buttons = ({ handleClick }) => {
  const ClickHandler = (e) => {
    const value = e.target.textContent;
    const type = e.target.hasAttribute("data-operator") ? "operator" : "number";

    handleClick({ value, type });
  };

  return (
    <div
      className="grid grid-cols-4 grid-rows-5 p-4 py-6 gap-4 
            theme1:bg-theme1-keyBackground
            theme2:bg-theme2-toggleBackground
            theme3:bg-theme3-screenBackground  rounded-lg text-2xl font-bold"
    >
      <button
        data-num
        className="rounded-lg sm:px-8 px-6 py-2             
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow

          shadow-[0_4px_] active:scale-95"
        onClick={ClickHandler}
      >
        7
      </button>
      <button
        data-num
        className="rounded-lg 
          theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        8
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        9
      </button>
      <button
        data-delete
        className="rounded-lg 
         theme1:bg-theme1-keyBackgroundDelete
         theme2:bg-theme2-keyBackground
         theme3:bg-theme3-keyBackgroundTwo
            
         theme1:text-theme1-textSecond
         theme2:text-theme2-textWhite
         theme3:text-theme3-text

         theme1:shadow-theme1-textSecondShadow
         theme2:shadow-theme2-keyShadow
         theme3:shadow-theme3-keyShadowThree
         shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        DEL
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        4
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        5
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        6
      </button>
      <button
        data-operator
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        +
      </button>
      <button
        data-num
        className="rounded-lg 
        theme1:bg-theme1-keyBackgroundToggle
        theme2:bg-theme2-keyBackgroundTwo
        theme3:bg-theme3-keyBackground
        
        theme1:text-theme1-text
        theme2:text-theme2-text
        theme3:text-theme3-text

        theme1:shadow-theme1-keyShadow
        theme2:shadow-theme2-keyShadowThree
        theme3:shadow-theme3-keyShadow
        shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        1
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        2
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        3
      </button>
      <button
        data-operator
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        -
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        .
      </button>
      <button
        data-num
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        0
      </button>
      <button
        data-operator
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        /
      </button>
      <button
        data-operator
        className="rounded-lg 
            theme1:bg-theme1-keyBackgroundToggle
            theme2:bg-theme2-keyBackgroundTwo
            theme3:bg-theme3-keyBackground
            
            theme1:text-theme1-text
            theme2:text-theme2-text
            theme3:text-theme3-text

            theme1:shadow-theme1-keyShadow
            theme2:shadow-theme2-keyShadowThree
            theme3:shadow-theme3-keyShadow
            shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        x
      </button>
      <button
        data-reset
        className="col-span-2 rounded-lg 
         theme1:bg-theme1-keyBackgroundDelete
         theme2:bg-theme2-keyBackground
         theme3:bg-theme3-keyBackgroundTwo
            
         theme1:text-theme1-textSecond
         theme2:text-theme2-textWhite
         theme3:text-theme3-text

         theme1:shadow-theme1-textSecondShadow
         theme2:shadow-theme2-keyShadow
         theme3:shadow-theme3-keyShadowThree
         shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        RESET
      </button>
      <button
        data-output
        className="col-span-2 rounded-lg bg-[#D03F2F] text-white 
         theme1:bg-theme1-keyBackgroundEqual
         theme2:bg-theme2-keyBackgroundThree
         theme3:bg-theme3-keyBackgroundThree
            
         theme1:text-theme1-textWhite
         theme2:text-theme2-textWhite
         theme3:text-theme3-textWhite

         theme1:shadow-theme1-keyShadowTwo
         theme2:shadow-theme2-keyShadowTwo
         theme3:shadow-theme3-keyShadowTwo
         shadow-[0_4px] active:scale-95"
        onClick={ClickHandler}
      >
        =
      </button>
    </div>
  );
};

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
