import PropTypes from 'prop-types';
import { EmptyResultContainer } from './styled';
import images from 'assets/images';

const EmptyResults = ({
  icon = images.searchResultsEmpty,
  text = 'Empty Results',
}) => (
  <EmptyResultContainer>
    <img src={icon} alt="" />
    <span>{text}</span>
  </EmptyResultContainer>
);

EmptyResults.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default EmptyResults;
