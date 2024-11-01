const Buttons = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 p-4 py-6 gap-4 bg-[#262b38] rounded-lg text-2xl font-bold">
      <button data-num className="rounded-lg px-8 py-2 bg-[#e9e2d9] text-[#444B5A]">7</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">8</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">9</button>
      <button data-delete className="rounded-lg bg-[#637097] text-[#e9e2d9]">DEL</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">4</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">5</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">6</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">+</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">1</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">2</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">3</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">-</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">.</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">0</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">/</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A]">x</button>
      <button data-reset className="col-span-2 rounded-lg bg-[#637097] text-[#e9e2d9]">
        RESET
      </button>
      <button data-output className="col-span-2 rounded-lg bg-[#D03F2F] text-white">
        =
      </button>
    </div>
  );
};

export default Buttons;
