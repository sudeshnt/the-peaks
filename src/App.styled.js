import styled from 'styled-components';

const HeaderBase = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 2;

  .content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
  }

  h1 {
    margin: 0;
  }
`;

export const HeaderContainer = styled(HeaderBase)`
  top: 0px;
  height: ${({ theme }) => theme.dimensions.headerHeight};
  padding: 25px 80px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.shadow};
  padding: 0 80px;

  .search-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: auto;
    border-bottom: 3px solid white;
  }
`;

export const SubHeaderContainer = styled(HeaderBase)`
  top: ${({ theme }) => theme.dimensions.headerHeight};
  display: flex;
  flex-wrap: wrap;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  padding: 5px 80px;
  box-shadow: 0 0px 11px 0 ${({ theme }) => theme.colors.shadow};

  .page-content {
    display: flex;
    flex-direction: column;
    
    section {
      max-width: 1120px;
      margin: 0 auto;
      padding: 20px 80px;

      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const ThemeSwitcher = styled.button`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 30px;
  padding: 6px;
  z-index: 5;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

`;
