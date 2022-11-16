import { StyledComponent } from '@emotion/styled';
import React from 'react';

export interface CSSFormat {
  [key: string]: string | any;
}

export interface dataObj {
  id: number;
  title?: string;
  icon?: React.ReactElement | string;
  link?: string;
  contents?: string | Array<string>;
}

export interface includeCSSObj extends dataObj {
  border?: string;
  bgColor?: string;
  color?: string;
}

export type funcProps = {
  [key: string]: (x: boolean) => void
}

