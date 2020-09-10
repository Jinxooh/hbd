import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }: any) => {
    const selected = theme.palette[color];
    return css`
      background-color: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
      }
    `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  /* display: inline-flex; */
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  ${colorStyles}
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

type ButtonProps = {
  children: any;
  color?: 'pink' | 'gray' | 'blue';
  [x:string]: any;
}

function Button({ children, color, ...rest }: ButtonProps) {
  return (
    <StyledButton
      color={color || 'blue'}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;