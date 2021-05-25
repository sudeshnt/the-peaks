import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({
  icon,
  title,
  onClick,
  disabled,
}) => (
  <ButtonContainer className="btn" onClick={onClick} disabled={disabled}>
    <img src={icon} alt="" />
    <span>{title}</span>
  </ButtonContainer>
);

Button.protoTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
