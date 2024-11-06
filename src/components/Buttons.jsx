import PropTypes from "prop-types";

const Buttons = ({ handleClick }) => {
  const ClickHandler = (e) => {
    const value = e.target.textContent;
    const type = e.target.hasAttribute("data-operator") ? "operator" : "number";

    handleClick({ value, type });
  };

  return (
    <div className="grid grid-cols-4 grid-rows-5 p-4 py-6 gap-4 
            theme1:bg-theme1-keyBackground
            theme2:bg-theme2-toggleBackground
            theme3:bg-theme3-screenBackground  rounded-lg text-2xl font-bold">
      <button
        data-num
        className="rounded-lg sm:px-8 px-6 py-2 bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        7
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        8
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        9
      </button>
      <button
        data-delete
        className="rounded-lg bg-[#637097] text-[#EAE3DC] shadow-[0_4px_#3a516d] active:scale-95"
        onClick={ClickHandler}
      >
        DEL
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        4
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        5
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        6
      </button>
      <button
        data-operator
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        +
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        1
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        2
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        3
      </button>
      <button
        data-operator
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        -
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        .
      </button>
      <button
        data-num
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        0
      </button>
      <button
        data-operator
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        /
      </button>
      <button
        data-operator
        className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895] active:scale-95"
        onClick={ClickHandler}
      >
        x
      </button>
      <button
        data-reset
        className="col-span-2 rounded-lg bg-[#637097] text-[#EAE3DC] shadow-[0_4px_#3a516d] active:scale-95"
        onClick={ClickHandler}
      >
        RESET
      </button>
      <button
        data-output
        className="col-span-2 rounded-lg bg-[#D03F2F] text-white shadow-[0_4px_#8b2e24] active:scale-95"
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
