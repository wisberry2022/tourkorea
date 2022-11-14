import React from 'react';

export interface CSSFormat {
  [key: string]: string | any;
}

export interface dataObj {
  id: number;
  title?: string;
  icon?: React.ReactElement;
  link?: string;
  contents?: string | Array<string>;
}