/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { CSSFormat } from '../../interfaceSet/Interface';
import styled from '@emotion/styled';

export const BaseModal = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  border-radius: ${props => props.b_radius ? props.b_radius : '2.5rem'};
  border: ${props => props.border ? props.border : 'none'};
  padding: ${props => props.padding ? props.padding : 'none'};
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  background-color: ${props => props.bgcolor ? props.bgcolor : 'auto'};

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

  ${props => props.isCenter &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  }
`;

export const SignUpModal = styled(BaseModal)`
  border: none;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

export const ErrorModal = styled(BaseModal)`
  border-radius: ${props => props.b_radius ? props.b_radius : '0'};
  border: .1rem solid #eee;
  padding: 3rem 1.5rem;
  background-color: #fff;
  text-align: ${props => props.align ? props.align : 'center'};

  ${props => props.isPosition &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    `
  }
`;

export const ModalTitle = styled.h4<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin-bottom: ${props => props.marginbottom ? props.marginbottom : '5rem'};
  font-size: ${props => props.fontsize ? props.fontsize : '2.3rem'};
  font-weight: ${props => props.fontweight ? props.fontweight : '600'};
  text-align: ${props => props.align ? props.align : 'center'};
`;

export const ModalSTitle = styled.h5<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin-bottom: 1rem;
  padding: ${props => props.padding ? props.padding : '0'};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};

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
      z-index: 999;
    `
  }
`;