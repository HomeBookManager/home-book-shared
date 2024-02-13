// @home-book
import { TObjectArray } from 'home-book-types';

export const enumToArray = <E extends {}>(Enum: E): TObjectArray<E> =>
  Object.keys(Enum) as TObjectArray<typeof Enum>;
