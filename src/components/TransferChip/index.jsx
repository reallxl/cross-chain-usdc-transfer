import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';

const TransferChip = ({
  type,
  chain,
  onChainChange,
  balance = 0,
  amount = '',
  onAmountChange,
}) => {
  const handleInput = ({ key, preventDefault, stopPropagation }) => {
    if (
      (key === 'Backspace' && amount.length) ||
      (key === '.' && !amount.includes('.')) ||
      Number(key) === +key
    )
      return;

    preventDefault();
    stopPropagation();
  };

  return (
    <div className="w-full rounded-md bg-primaryBg p-2">
      <div className="flex gap-2 py-2">
        <span>{type}</span>
        <Dropdown
          value={chain}
          onChange={onChainChange}
        />
        <div className="ms-auto">
          Bal: <span className="text-white">{balance}</span> USDC
        </div>
      </div>
      <hr className="border-text opacity-10"></hr>
      <input
        className="w-full border-transparent bg-primaryBg py-2 text-2xl text-white focus:outline-none"
        onKeyDown={handleInput}
        onChange={onAmountChange}
        value={amount}
        placeholder="0.0"
      ></input>
    </div>
  );
};

TransferChip.propTypes = {
  type: PropTypes.string.isRequired,
  chain: PropTypes.string,
  onChainChange: PropTypes.func.isRequired,
  balance: PropTypes.number,
  amount: PropTypes.string,
  onAmountChange: PropTypes.func.isRequired,
};

export default TransferChip;
