/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { CSSFormat } from '../../interfaceSet/Interface';
import styled from '@emotion/styled';

const breakpoints = [500, 768, 1200];
const mQ = breakpoints.map(bp => `@media screen and (max-width:${bp}px)`)

// Semantic Styled Component
export const Section = styled.section<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  position: relative;
  padding: 10rem 0;
  height: ${props => props.height ? props.height : 'auto'};

  ${mQ[2]} {
    padding: 8rem 0;
  }

  ${mQ[1]} {
    padding: 2.5rem 0;
  }
`;

export const Footer = styled.footer<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  padding: 1.45rem 0;
  background-color: #2BAE66;

  ${mQ[0]} {
    >div {
      align-items: flex-end;      
    }
  }
`;

// Div Styled Component
export const BasicDiv = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: ${props => props.display ? props.display : 'block'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  gap: ${props => props.gap ? props.gap : '2.5rem'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding ? props.padding : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};

  ${props => props.isborder &&
    css`
      border: ${props.border};
      border-top: ${props.btop};
      border-bottom: ${props.bbottom};
      border-left: ${props.bleft};
      border-right: ${props.bright};
    `
  }

  ${mQ[1]} {
    width: 100%;
  }
`;

export const SubDiv = styled(BasicDiv)`
  position: ${props => props.position ? props.position : 'static'};
`;

export const ButtonBox = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: block;
  text-align: ${props => props.calign ? props.calign : 'center'};

  ${props => props.isflex &&
    css`
      display: flex;
      flex-direction: ${props.direction ? props.direction : 'row'};
      justify-content: ${props.justifycontent ? props.justifycontent : 'flex-start'};
      gap: ${props.gap ? props.gap : '0'};
      margin: ${props.margin ? props.margin : '0'};
    `
  }
  
`;

export const Container = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: ${props => props.display ? props.display : 'block'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  gap: ${props => props.gap ? props.gap : '2.5rem'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  padding: ${props => props.padding ? props.padding : 'auto'};
  width: ${props => props.width ? props.width : '120rem'};

  ${mQ[2]} {
    width: 100rem;
  }

  ${mQ[1]} {
    width: 73rem;
  }

  ${mQ[0]} {
    width: 44rem;
  }
`

export const PositionDiv = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  position: ${props => props.position ? props.position : 'static'};
  top: ${props => props.top ? props.top : 'auto'};
  bottom: ${props => props.bottom ? props.bottom : 'auto'};
  left: ${props => props.left ? props.left : 'auto'};
  right: ${props => props.right ? props.right : 'auto'};
  transform: ${props => props.transform ? props.transform : 'auto'};
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
  border: ${props => props.border ? props.border : 'none'};
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};

  ${mQ[2]} {
    top: 230%;
  }

  ${mQ[1]} {
    position: static;
    transform: translate(0,0);
  }
`;

export const ScrollDiv = styled(BasicDiv)`
  position: ${props => props.isposition ? 'relative' : 'static'};
  overflow-y: scroll;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'auto'};
`;


// List Styled Component
export const RowFlexUl = styled.ul<CSSFormat>`
  display: flex;
  gap: ${props => props.gap ? props.gap : '0'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};

  ${props => props.customlist &&
    css`
      >li {
        display: ${props.listdisplay ? props.listdisplay : 'block'};
        flex-direction: ${props.listdirection ? props.listdirection : 'row'};
        justify-content: ${props.listjustify ? props.listjustify : 'flex-start'};
        gap: ${props.listgap ? props.listgap : '.5rem'};
      }

      ${mQ[2]} {
        >li {
          gap: 1.5rem;
        }
      }
    `
  }
`;

export const ColFlexUl = styled.ul<CSSFormat>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap ? props.gap : '0'};
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'flex-start'};
  align-items: ${props => props.alignitems ? props.alignitems : 'flex-start'};

  ${props => props.customlist &&
    css`
      >li {
        display: ${props.listdisplay ? props.listdisplay : 'block'};
        flex-direction: ${props.listdirection ? props.listdirection : 'row'};
        justify-content: ${props.listjustify ? props.listjustify : 'flex-start'};
        gap: ${props.listgap ? props.listgap : '.5rem'};
      }

      ${mQ[2]} {
        >li {
          gap: 1.5rem;
        }
      }
    `
  }
`;

export const CustomLI = styled.li<CSSFormat>`
  display: ${props => props.listdisplay ? props.listdisplay : 'block'};
  flex-direction: ${props => props.listdirection ? props.listdirection : 'row'};
  justify-content: ${props => props.listjustify ? props.listjustify : 'flex-start'};
  gap: ${props => props.listgap ? props.listgap : '.5rem'};
  background-color: ${props => props.lisgbg ? props.listbg : 'none'};
  color: ${props => props.listcolor ? props.listcolor : 'none'};
`;

// ETC Component
export const CustomFigure = styled.figure<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin: ${props => props.margin ? props.margin : '0 auto 1.5rem auto'};
  width: ${props => props.width ? props.width : '10rem'};
  height: ${props => props.height ? props.height : '10rem'};
  ${props => props.background &&
    css`
      background-repeat: no-repeat;
      background-position: center center;
      background-size: ${props.bgsize ? props.bgsize : 'contain'};
      background-image: url(${props.imgLink ? props.imgLink : ''});
    `
  }

  ${props => props.cursor &&
    css`
      cursor: pointer;
    `
  }

  ${mQ[1]} {
    width: 20rem;
    height: 20rem;
  }
`;

export const Description = styled.div<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  margin-bottom: 1rem;
  width: 100%;
`;

export const Button = styled.button<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: inline-block;
  margin: ${props => props.margin ? props.margin : '0'};
  border-radius: ${props => props.b_radius ? props.b_radius : 'none'};
  border: ${props => props.border ? props.border : 'none'};
  padding: 1rem 1.5rem;
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  font-size: ${props => props.fontsize ? props.fontsize : '1.4rem'};
  font-weight: ${props => props.fontweight ? props.fontweight : '500'};
  text-align: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.bgcolor ? props.bgcolor : 'inherit'};
  color: ${props => props.color ? props.color : 'inherit'};
  cursor: pointer;
`;

export const Emphasize = styled.strong<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.3;

  ${mQ[1]} {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const PlainStrong = styled.strong<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  
`;

export const Phase = styled.p<CSSFormat>`
  outline: ${props => props.debug ? '.1rem solid #000' : 'none'};
  padding: 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: ${props => props.align ? props.align : 'left'};
`;

export const SemiPhase = styled.span<CSSFormat>`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  ${props => props.cursor &&
    css`
      cursor: pointer;
    `
  }
`;