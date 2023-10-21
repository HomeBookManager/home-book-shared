// @home-book
import { TVariable } from '../types';

// types
import { TObject } from 'home-book-types';

// utils
import { getHTMLElement } from './common';

export const parseVariableToHTMLContext = (
  classNames: TObject<string>,
  { name, type, value }: TVariable,
): string =>
  [
    getHTMLElement(classNames.variablesType, type),
    getHTMLElement(classNames.variablesName, name),
    getHTMLElement(classNames.variablesEqual, '='),
    getHTMLElement(classNames.variablesValue, value),
  ].join(' ');
