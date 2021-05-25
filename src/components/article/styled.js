import { rgba } from 'polished';
import styled from 'styled-components';
import { ArticleTypes } from 'config/shared';

const borderColors = [
  '#388E3C', '#D32F2F', '#FFC107', '#2196F3',
];

export const ArticleContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ type }) => (type === ArticleTypes.WITH_TITLE ? '110px' : '300px')};
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  color: white;
  border-bottom: 2px solid ${({ index }) => borderColors[index % 4]};
  cursor: pointer;
  box-sizing: border-box;
  background: #0D47A1;
  
  &:hover {
    opacity: 0.9
  }
`;
export const ArticleImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-height: 300px;

  img {
    ${({ imageAvailable }) => (
    imageAvailable ? {
      width: '100%',
      height: '100%',
    } : {
      width: '200px',
      height: '80px',
      margin: '80px auto',
    }
  )}
  }
`;
export const ArticleBody = styled.div`
  background: ${rgba('#09357B', 0.8)};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 10px;
  max-height: calc(100% - 20px);
  width: calc(100% - 20px);
`;
export const ArticleTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const ArticleDescription = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
