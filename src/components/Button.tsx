import React from 'react';
import styled from 'styled-components';

// const colorStyles = css`
//   ${({ theme, color }: any) => {
//     const selected = theme.palette[color];
//     return css`
//       background: ${selected};
//       &:hover {
//         background: ${lighten(0.1, selected)};
//       }
//       &:active {
//       }
//     `;
//   }}
// `;

// const sizes = {
//   large: {
//     height: '3rem',
//     fontSize: '1.25rem'
//   },
//   medium: {
//     height: '2.25rem',
//     fontSize: '1rem'
//   },
//   small: {
//     height: '1.75rem',
//     fontSize: '0.875rem'
//   }
// };

// const sizeStyles = css`
//   ${({ size }) => css`
//     height: ${sizes[size].height};
//     font-size: ${sizes[size].fontSize};
//   `}
// `;

// const fullWidthStyle = css`
//   ${props =>
//     props.fullWidth &&
//     css`
//       width: 100%;
//       justify-content: center;
//       & + & {
//         margin-left: 0;
//         margin-top: 1rem;
//       }
//     `}
// `;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

type Button = {
  children: any;
  color: 'pink' | 'gray' | 'blue';
  [x:string]: any;
}

function Button({ children, color, ...rest }: Button) {
  return (
    <StyledButton
      color={color}
      // size={size}
      // outline={outline}
      // fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;