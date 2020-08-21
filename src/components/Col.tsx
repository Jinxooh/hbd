import React from 'react';
import styled from 'styled-components';

//Column 컴포넌트
const calcWidthPercent = (span: number) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

type ColProps = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

const Col = styled.div`
  float: left;
  width: ${({ xs }: ColProps) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};
  padding: 1rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }: ColProps) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }: ColProps) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }: ColProps) => lg && `${calcWidthPercent(lg)}%`};
  }
`;

export default Col;