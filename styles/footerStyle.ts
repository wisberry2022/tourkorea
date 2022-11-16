/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSFormat } from '../interfaceSet/Interface';

export const TopFooter = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  border-top: .1rem solid #2BAE66;
  padding: 1.5rem 0;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'none'};
`;

export const BottomFooter = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  padding: 1.5rem 0;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'none'};
`;