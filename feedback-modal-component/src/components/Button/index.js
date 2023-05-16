import PropTypes from 'prop-types';

import { CustomButton } from './styles';

export default function Button({
  type,
  disabled,
  onClick,
  outline,
  rating,
  children,
}) {
  return (
    <CustomButton
      type={type}
      disabled={disabled}
      outline={outline}
      rating={rating}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rating: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  outline: false,
  rating: false,
  onClick: undefined,
};
