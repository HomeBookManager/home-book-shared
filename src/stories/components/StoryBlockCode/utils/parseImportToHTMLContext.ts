// @home-book
import { TObject } from 'home-book-types';

// types
import { TImport } from '../types';

// utils
import { getHTMLElement } from './common';

const getItemWithHighlightWordAs = (
  itemsToImports: string,
  classNames: TObject<string>,
): string =>
  itemsToImports
    .split(' ')
    .map((item) =>
      item === 'as' ? getHTMLElement(classNames.importAs, 'as') : item,
    )
    .join(' ');

export const parseImportToHTMLContext = (
  { items: itemsToImports, path }: TImport,
  classNames: TObject<string>,
): string =>
  [
    getHTMLElement(classNames.import, 'import'),
    getHTMLElement(
      classNames.importItems,
      getItemWithHighlightWordAs(itemsToImports, classNames),
    ),
    getHTMLElement(classNames.importFrom, 'from'),
    getHTMLElement(classNames.importPath, `'${path}'`),
    getHTMLElement(classNames.importSemicolon, ';'),
  ].join(' ');
