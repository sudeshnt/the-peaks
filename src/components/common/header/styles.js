import styled from "styled-components";
import { desaturate } from 'polished';

const Logo = () => (
  <div className="logo">
    <span>The</span>
    <span>Peaks</span>
  </div>
);

export const SearchButton = styled.a`
  &:hover {
    /* background: white; */
  }
  
  cursor: pointer;
  background: transparent;
`;

export const SearchInput = styled.div.attrs(() => ({
  placeholder: 'Search all news'
}))`
  background-color: ${desaturate(0.3, '#09357B')};

  & input {
    padding: 8px 15px;
    width: 200px;
    box-sizing: border-box;
    background: transparent;
    border: 0;
    outline: none;
    color: white;
    transition: all 2s, height 4s;
  }
`;

export const StyledLogo = styled(Logo)`
  cursor: pointer;
  &:logo {
    background: white;
  }
`;