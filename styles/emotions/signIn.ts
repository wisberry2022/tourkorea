/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSFormat } from '../../interfaceSet/Interface';

const breakpoints = [500, 768, 1200];
const mQ = breakpoints.map(bp => `@media screen and (max-width:${bp}px)`)

export const Title = styled.h3<CSSFormat>`
  margin-bottom: 1.5rem;
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
`;

export const Phase = styled.p<CSSFormat>`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  text-align: ${props => props.align ? props.align : 'center'};
`;

export const ButtonBox = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '1px solid #000' : 'none'};
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  ${props => props.column &&
    css`
      flex-direction: column;
    `
  }
`;

export const TopDiv = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '1px solid #000' : 'none'};
  height: 40%;
`;

export const BottomDiv = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '1px solid #000' : 'none'};
  height: 60%;
`;

export const FormLabel = styled.label<CSSFormat>`
  display: block;
  margin-right: ${props => props.marginright ? props.marginright : 'auto'};
  margin-bottom: .5rem;
  font-size: 1.8rem;
  font-weight: 300;

  ${mQ[2]} {
    margin-right: 10.5rem;
    width: 70%;
  }

  ${mQ[1]} {
    display: none;
  }

  ${mQ[0]} {
    display: none;
  }
`;

export const SignInput = styled.input<CSSFormat>`
  outline: ${props => props.debug ? '1px solid #000' : 'none'};
  border: none;
  border-bottom: .1rem solid #EEE;
  padding: .5rem .5rem;
  width: ${props => props.width ? props.width : '90%'};
  font-size: 2.3rem;

  &:focus {
    outline: none;
  }

  ${mQ[0]} {
    width: 77%;
    text-align: center;
  }
`;