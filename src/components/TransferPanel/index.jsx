import { useState } from "react";
import { useIntl } from "react-intl";

import { TransferChip } from "..";
import SwitchButton from "../SwitchButton";
import useChainData from "@/hooks/useChainData";

const TransferPanel = () => {
  const [reversed, setReversed] = useState();
  const srcChainProps = useChainData();
  const dstChainProps = useChainData();

  const { formatMessage } = useIntl();

  return (
    <div className="flex size-full flex-col gap-4 rounded-lg border-2 border-secondary bg-primary px-4 py-8 text-text md:h-4/5 md:w-[470px]">
      <h2 className="text-2xl font-semibold text-white">
        {formatMessage({ id: "title" })}
      </h2>
      <div className="relative flex w-full flex-col gap-4">
        <TransferChip
          type="From"
          {...(reversed ? dstChainProps : srcChainProps)}
        />
        <SwitchButton onClick={() => setReversed((val) => !val)} />
        <TransferChip
          type="To"
          {...(reversed ? srcChainProps : dstChainProps)}
        />
      </div>
    </div>
  );
};

export default TransferPanel;
