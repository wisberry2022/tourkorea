import React from 'react';

export class ResponseData<T> {
  ResResult: boolean;
  ResData: T | Array<T>;
  ERROR_MESSAGE: string;
  constructor(result: boolean, data: T, error: string) {
    this.ResResult = result;
    this.ResData = data;
    this.ERROR_MESSAGE = error;
  }
  ResponseData<T>() {
    return this;
  }
}

export interface resultData {
  result: boolean;
  uid: string | null;
  email: string | null;
}

export interface ClientResData {
  ResResult: boolean;
  ResData: any;
  ERROR_MESSAGE: string;
}

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

export interface includeCSSObj extends dataObj, CSSFormat {
  border?: string;
  bgColor?: string;
  color?: string;
}

export interface messageProps {
  MESSAGE: string;
}

export interface funcProps<T> {
  [key: string]: (x: T) => void;
}

export type reducerFunc<A, B> = {
  (x: A, y: B): A
}

export type customState<T> = {
  [key: string]: T;
}

export type Action =
  | { type: 'ADD', event: React.BaseSyntheticEvent }
  | { type: 'DELETE' }

export type useInputProps = 'SignUp' | 'SignIn'

