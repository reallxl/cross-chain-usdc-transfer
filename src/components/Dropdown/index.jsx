import { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { PropTypes } from "prop-types";

import { ArrowCircleUpIcon, CheckCircleFilledIcon } from "@/assets";

const Dropdown = ({ options, selectedItem, onChange }) => {
  const [isExpanded, setIsExpanded] = useState();

  const ref = useRef();
  const { formatMessage } = useIntl();

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (!ref.current?.contains(target)) setIsExpanded(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const renderChainOption = ({ key, Icon }, onClick, isLabel) => (
    <div
      key={key}
      className="flex cursor-pointer items-center gap-2 rounded-md py-2 transition-opacity duration-300 hover:bg-primaryBg hover:shadow-md [&_svg.arrow]:hover:rotate-180 [&_svg.arrow]:hover:opacity-100"
      onClick={onClick}
    >
      <Icon className="size-6 rounded-full" />
      <span className="text-white">
        {formatMessage({ id: `chain.${key}` })}
      </span>
      {isLabel ? (
        <ArrowCircleUpIcon
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`arrow size-4 opacity-30 transition-transform *:fill-white ${
            isExpanded ? "rotate-180 opacity-100" : "rotate-90"
          }`}
        />
      ) : (
        selectedItem?.key === key && (
          <CheckCircleFilledIcon className="ms-auto size-4" />
        )
      )}
    </div>
  );

  const getHandleClick = (chain) => () => {
    onChange(chain);
    setIsExpanded(false);
  };

  return (
    <div className="relative flex items-center" ref={ref}>
      {renderChainOption(
        selectedItem ?? options?.[0],
        () => setIsExpanded((v) => !v),
        true
      )}
      <div
        className={`absolute -left-4 top-12 z-20 flex max-h-80 min-w-64 flex-col overflow-y-scroll rounded-md bg-primary p-4 transition-opacity duration-500 ${
          isExpanded ? "" : "-z-10 opacity-0"
        }`}
      >
        {options.map((opt) => renderChainOption(opt, getHandleClick(opt)))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
