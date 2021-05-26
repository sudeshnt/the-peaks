import styled from 'styled-components';

export const LoaderTypes = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
});

const getLoaderColor = (theme, type) => {
  switch (type) {
    case LoaderTypes.DARK:
      return theme?.colors.loaderPrimary;
    case LoaderTypes.LIGHT:
      return theme?.colors.loaderSecondary;
    default:
      return theme?.colors.loaderPrimary;
  }
};

export const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    border: ${({ height }) => `${height / 10}px`} solid ${({ theme, type }) => getLoaderColor(theme, type)};
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme, type }) => getLoaderColor(theme, type)} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
