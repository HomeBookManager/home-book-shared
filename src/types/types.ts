import { Store } from 'redux';

// @home-book
import { TAction } from 'home-book-types';

declare global {
  interface Window {
    store?: Store<any, TAction>;
  }
}

export {};
