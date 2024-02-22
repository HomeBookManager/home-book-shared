import { Saga, SagaMiddleware } from 'redux-saga';

export const watchersComponentsUI: Array<Saga<any>> = [];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watcher of watchersComponentsUI) {
    sagaMiddleware.run(watcher);
  }
};

export default sagaMiddlewareRuns;
