const Buttons = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 p-4 py-6 gap-4 bg-[#262b38] rounded-lg text-2xl font-bold">
      <button data-num className="rounded-lg px-8 py-2 bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">7</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">8</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">9</button>
      <button data-delete className="rounded-lg bg-[#637097] text-[#EAE3DC] shadow-[0_4px_#3a516d]">DEL</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">4</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">5</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">6</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">+</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">1</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">2</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">3</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">-</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">.</button>
      <button data-num className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">0</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">/</button>
      <button data-operator className="rounded-lg bg-[#e9e2d9] text-[#444B5A] shadow-[0_4px_#b8a895]">x</button>
      <button data-reset className="col-span-2 rounded-lg bg-[#637097] text-[#EAE3DC] shadow-[0_4px_#3a516d]">
        RESET
      </button>
      <button data-output className="col-span-2 rounded-lg bg-[#D03F2F] text-white shadow-[0_4px_#8b2e24]">
        =
      </button>
    </div>
  );
};

export default Buttons;
