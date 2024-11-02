import PropTypes from 'prop-types';

const UserInput = (props) => {
  return (
    <div className="bg-[#182034] h-24 p-2 px-4 rounded-lg text-white flex flex-col justify-center text-right font-bold">
      <div data-previous-operand className="previous-operand">{props.previousOperand}</div>
      <div data-current-operand className="current-operand text-5xl sm:max-w-[360px] max-w-[293px] overflow-x-auto overflow-y-hidden whitespace-nowrap w-full">{props.currentOperand}</div>
    </div>
  );
};

UserInput.propTypes = {
  currentOperand: PropTypes.string.isRequired,
  previousOperand: PropTypes.string.isRequired
}

export default UserInput;
