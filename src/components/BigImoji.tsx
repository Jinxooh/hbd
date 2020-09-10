import React from 'react';
import styled from 'styled-components';

type BigImojiProps = {
  children: React.ReactChild;
  [x:string]: any;
}

const BigImojiContainer = styled.span`
  font-size: 3rem;
  margin-left: 1rem;
`;

const BigImoji = ({ children, ...rest }: BigImojiProps) => <BigImojiContainer role='img' {...rest}>{children}</BigImojiContainer>

export default BigImoji;