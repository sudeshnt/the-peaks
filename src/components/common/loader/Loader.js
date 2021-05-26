import PropTypes from 'prop-types';
import { LoaderContainer, LoaderTypes } from './styled';

const Loader = ({
  type = LoaderTypes.DARK,
  width = 64,
  height = 64,
}) => (
  <LoaderContainer type={type} width={width} height={height}>
    <div />
    <div />
    <div />
    <div />
  </LoaderContainer>
);

Loader.propTypes = {
  type: PropTypes.oneOf(Object.keys(LoaderTypes)),
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Loader;
