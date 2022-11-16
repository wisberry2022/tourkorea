/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { CSSFormat } from '../interfaceSet/Interface';
import styled from '@emotion/styled';

export const SignUpModal = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  border-radius: 2.5rem;
  border: .1rem solid #eee;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};

  ${props => props.isPosition &&
    css`
      position: ${props.position ? props.position : 'relative'};
      top: ${props.top ? props.top : 'auto'};
      bottom: ${props.bottom ? props.bottom : 'auto'};
      left: ${props.left ? props.left : 'auto'};
      right: ${props.right ? props.right : 'auto'};
      transform: ${props.transform ? props.transform : 'auto'};
      z-index: ${props.zIndex ? props.zIndex : 'auto'};
    `
  }
`;

export const ModalTitle = styled.h4<CSSFormat>`
  margin-bottom: 5rem;
  font-size: 2.3rem;
  font-weight: 600;
`;

export const ModalSTitle = styled.h5<CSSFormat>`
  margin-bottom: 1rem;
  padding: ${props => props.padding ? props.padding : '0'};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: ${props => props.align ? props.align : 'center'};

  ${props => props.isborder &&
    css`
      border-top: ${props.btop};
      border-bottom: ${props.bbottom};
      border-left: ${props.bleft};
      border-right: ${props.bright};
    `
  }

  ${props => props.issticky &&
    css`
      position: sticky;
      top: 0;
    `
  }
`;