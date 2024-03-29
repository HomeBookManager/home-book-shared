import { Router } from 'react-router-dom';

// @home-book
import { TObject } from 'home-book-types';

// types
import { E2EAttribute } from '../components/E2EDataAttributes/enums';

// utils
import { getDataTestAttribute } from '../components/E2EDataAttributes/utils';
import { TStore } from '../store/types';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

export const getByE2EAttribute = (
  container: Element | HTMLElement,
  e2eAttribute: E2EAttribute,
  e2eValue?: number | string,
): Element =>
  e2eValue
    ? container.querySelector(
        `[${getDataTestAttribute(e2eAttribute)}="${e2eValue}"]`,
      )!
    : container.querySelector(`[${getDataTestAttribute(e2eAttribute)}]`)!;

export const getProviderWrapper =
  (store: TStore, history): FC<{ children: ReactNode }> =>
  ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

export const isJestRunning = (): boolean =>
  process?.env?.JEST_WORKER_ID !== undefined;

export const mockAll = (pathName: string): TObject<jest.Mock<any, any>> => {
  const obj = jest.requireActual(pathName);
  const { mapValues } = jest.requireActual('lodash');

  return mapValues(obj, () => jest.fn());
};

export const sleep = async (time = 0): Promise<NodeJS.Timeout> =>
  await new Promise((resolve) => setTimeout(resolve, time));
