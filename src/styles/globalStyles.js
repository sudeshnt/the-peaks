import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Georgia';
    src: local('Georgia'), url(../assets/fonts/Georgia.ttf) format('ttf');
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Georgia', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  select {
    border-radius: 0px;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    outline: none;
    padding: 10px;
    width: 180px;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.background};
  }

  .btn {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    position: relative;
    border: none;
    border-radius: 4px;
    min-height: 35px;
    padding: 5px 12px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    margin-right: 20px;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    span {
      margin-left: 10px;
    }
  }

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

  @media (max-width: 480px) {
    .page-content {
      section {
        margin: 0;
        padding: 20px !important;
      }
    }

    .app-header {
      padding: 0 20px !important;
      height: 110px !important;
    }

    .app-sub-header {
      top: 110px !important;

      .content {
        justify-content: center !important;
      }

      .right-container {
        justify-content: center !important;

        .bookmarks-btn {
          margin: 0 !important;
        }
      }
    }
  }
`;

export default GlobalStyles;
