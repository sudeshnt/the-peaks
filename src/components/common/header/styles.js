import styled from 'styled-components';

export const StyledLogo = styled.div`
  cursor: pointer;
  color: white;
  font-weight: 600;

  & span:first-child {
    position: relative;
    top: -20px;
    left: 42px;
    font-size: small;
  }

  & span:last-child {
    font-size: xx-large;
  }
`;
