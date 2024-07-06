import { useEffect, useState } from 'react';

const useChainData = () => {
  const [chain, setChain] = useState();
  const [balance, setBalance] = useState(Math.random().toFixed(1));
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (!chain) return;
    setBalance();
  }, [chain]);

  return {
    chain,
    onChainChange: ({ target: { value } }) => setChain(value),
    balance,
    amount,
    onAmountChange: ({ target: { value } }) => setAmount(value),
  };
};

export default useChainData;
