import styled from 'styled-components';

export const BookMarksButton = styled.button`
  margin-right: 20px;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 15px !important;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.3px;
  }
`;

const Button = ({
  icon,
  title,
  onClick,
}) => (
  <BookMarksButton className="btn" onClick={onClick}>
    <img src={icon} alt="" />
    <span>{title}</span>
  </BookMarksButton>
);

export default Button;
