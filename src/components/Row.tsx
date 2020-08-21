import React from 'react';
import styled from 'styled-components';

type RowProps = {
  children: React.ReactChild;
}
//Row 컴포넌트

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default Row;