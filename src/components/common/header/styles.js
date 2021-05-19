import styled from "styled-components";
import { desaturate } from 'polished';

export const SearchButton = styled.a`
  &:hover {
    /* background: white; */
  }
  
  cursor: pointer;
  background: transparent;
`;

export const SearchInput = styled.div`
  background-color: ${desaturate(0.2, '#09357B')};

  & input {
    padding: 8px 15px;
    width: 200px;
    box-sizing: border-box;
    background-color: ${desaturate(0.2, '#09357B')};
    border: 0;
    outline: none;
    color: white;
    transition: all 2s, height 4s;
  }
`;

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