/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { CSSFormat } from '../interfaceSet/Interface';
import styled from '@emotion/styled';

export const Section = styled.section<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  position: relative;
  padding: 10rem 0;
`;

export const Container = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: ${props => props.display ? props.display : 'block'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  gap: ${props => props.gap ? props.gap : '2.5rem'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  width: 120rem;
`

export const RowFlexUl = styled.ul<CSSFormat>`
  display: flex;
  gap: ${props => props.gap ? props.gap : '0'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};
`;

export const PositionDiv = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  position: ${props => props.position ? props.position : 'static'};
  top: ${props => props.top ? props.top : 'auto'};
  bottom: ${props => props.bottom ? props.bottom : 'auto'};
  left: ${props => props.left ? props.left : 'auto'};
  right: ${props => props.right ? props.right : 'auto'};
  transform: ${props => props.transform ? props.transform : 'auto'};
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
`;