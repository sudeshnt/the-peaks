import styled from 'styled-components';
import { ToastTypes } from 'config/shared';

export const SnackBarContainer = styled.div`
  visibility: ${(({ visible }) => (visible ? 'visible' : 'hidden'))};
  position: fixed;
  bottom: 30px;
  left: calc(50% - 112px);
  z-index: 3;
  padding: 14px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${(({ type, theme }) => (
    type === ToastTypes.SUCCESS ? theme.colors.success : theme.colors.error)
  )};
  min-width: 224px;
  display: flex;
  align-items: center;
  justify-content: center;

  .toast-icon {
    width: 20px !important;
    margin-right: 10px;
  }

  .toast-text {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  &.show {
    ${({ visible }) => (
    visible ? {
      'animation': 'fadein 0.5s, fadeout 0.5s 2.5s',
    } : {
      'animation': '0s',
    }
  )
}
  }
  
  @keyframes fadein {
    from { bottom: 0; opacity: 0; }
    to { bottom: 30px; opacity: 1; }
  }

  @keyframes fadeout {
    from { bottom: 30px; opacity: 1; }
    to { bottom: 0; opacity: 0; }
  }
`;
