import PropTypes from 'prop-types';

import { ArrowCircleUpIcon } from '@/assets';

const SwitchButton = ({ onClick }) => {
  return (
    <button
      className="absolute left-1/2 top-1/2 z-10 m-1 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary p-1"
      onClick={onClick}
    >
      <div className="rounded-full bg-primaryBg p-1">
        <ArrowCircleUpIcon className="size-8 rotate-180 transition-transform hover:rotate-0 [&_*]:fill-white" />
      </div>
    </button>
  );
};

SwitchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SwitchButton;
