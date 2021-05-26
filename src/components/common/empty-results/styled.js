import styled from 'styled-components';

export const EmptyResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;

  img {
    height: 110px;
    width: 110px;
  }
  
  span {
    font-family: 'Georgia';
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textTertiary};
    margin-top: 10px;
  }
`;
