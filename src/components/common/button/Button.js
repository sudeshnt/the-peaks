import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BookMarksButton = styled.button`
  margin-right: 20px;
`;

const Button = ({
  icon,
  title,
  onClick
}) => {
  return (
    <BookMarksButton className="btn" onClick={onClick}>
      <FontAwesomeIcon icon={icon} color="white" />
      <span>{title}</span>
    </BookMarksButton>
  )
}

export default Button;