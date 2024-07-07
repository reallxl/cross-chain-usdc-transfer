import { useEffect, useState } from "react";

const useChainData = () => {
  const [chain, setChain] = useState();
  const [balance, setBalance] = useState(Math.random());
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!chain) return;
    setBalance(0);
  }, [chain]);

  return {
    chain,
    onChainChange: (value) => setChain(value),
    balance,
    amount,
    onAmountChange: (value) => setAmount(value),
  };
};

export default useChainData;
