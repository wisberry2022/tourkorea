/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { CSSFormat } from '../../interfaceSet/Interface';
import styled from '@emotion/styled';

const breakpoints = [500, 768, 1200];
const mQ = breakpoints.map(bp => `@media screen and (max-width:${bp}px)`)

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

  ${mQ[1]} {
    ${props => props.isRespon === 'sm' &&
    css`
      top: -70%;
      left: 0;

      >figure {
        width: 50%;
      }

      >h4 {
        font-size: 2.8rem;
      }

      >p {
        font-size: 1.9rem;
      }

      >button {
        margin: 0 0 0 40%;
        width: 20%;
        font-size: 2rem;
      }
    `
  }
}

  ${mQ[0]} {
    ${props => props.isRespon === 'sm' &&
    css`
      >figure {
        width: 80%;
      }

      >h4 {
        font-size: 2.2rem;
      }

      >p {
        font-size: 1.7rem;
      }

      >button {
        margin: 0 0 0 40%;
        width: 20%;
        font-size: 1.7rem;
      }
    `
  }
  }
  
`;

export const SignUpModal = styled(BaseModal)`
  border: none;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  ${mQ[2]} {
    left: -66.8%;
    width: 100rem;
  }

  ${mQ[1]} {
    top: -105%;
    left: 0;
    width: 100%;
    .signUpBox {
      display: flex;
      flex-direction: column-reverse;
    }
  }

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

  ${mQ[2]} {
    top: 45%;
    left: 50%;
  }

  ${mQ[1]} {
    top: 50%;
    width: 50%;
  }

  ${mQ[0]} {
    width: 84.2%;
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