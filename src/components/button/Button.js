import PropTypes from 'prop-types';
import Loader from '../loader/Loader';
import { LoaderTypes } from '../loader/styled';
import { ButtonContainer } from './styles';

const Button = ({
  icon,
  title,
  onClick,
  disabled,
  loading,
}) => (
  <ButtonContainer className="btn" onClick={onClick} disabled={disabled}>
    {
      loading ? (
        <Loader
          className="loader"
          type={LoaderTypes.LIGHT}
          width={15}
          height={15}
        />
      ) : <img src={icon} alt="" />
    }
    <span>{title}</span>
  </ButtonContainer>
);

Button.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default Button;
