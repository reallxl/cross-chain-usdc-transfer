import PropTypes from "prop-types";

import Dropdown from "../Dropdown";
import chains from "@/config/chains";

const TransferChip = ({
  type,
  chain,
  onChainChange,
  balance = 0,
  amount = "",
  onAmountChange,
}) => {
  const handleInput = (e) => {
    const { key } = e;
    if (
      (key === "Backspace" && amount.length) ||
      (key === "." && !amount.includes(".")) ||
      Number(key) === +key
    )
      return;

    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = ({ target: { value } }) => {
    const c = value.slice(-1);
    if (Number(c) !== +c && c !== ".") {
      onAmountChange(value.slice(0, -1));
      return;
    }

    onAmountChange(value);
  };

  return (
    <div className="w-full rounded-md bg-primaryBg p-2">
      <div className="flex items-center gap-2 py-2">
        <span>{type}</span>
        <Dropdown
          options={chains}
          selectedItem={chain}
          onChange={onChainChange}
        />
        <div className="ms-auto">
          Bal: <span className="text-white">{Number(balance).toFixed(1)}</span>{" "}
          USDC
        </div>
      </div>
      <hr className="border-text opacity-10"></hr>
      <input
        className="w-full border-transparent bg-primaryBg py-2 text-2xl text-white focus:outline-none"
        onKeyDown={handleInput}
        onChange={handleChange}
        value={amount}
        placeholder="0.0"
      ></input>
    </div>
  );
};

TransferChip.propTypes = {
  type: PropTypes.string.isRequired,
  chain: PropTypes.object,
  onChainChange: PropTypes.func.isRequired,
  balance: PropTypes.number,
  amount: PropTypes.string,
  onAmountChange: PropTypes.func.isRequired,
};

export default TransferChip;
