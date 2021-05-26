import PropTypes from 'prop-types';
import { LoaderContainer } from './styled';

const Loader = ({
  color = '#09357B',
  width = 64,
  height = 64,
}) => (
  <LoaderContainer color={color} width={width} height={height}>
    <div />
    <div />
    <div />
    <div />
  </LoaderContainer>
);

Loader.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Loader;
