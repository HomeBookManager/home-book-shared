import { renderHook } from '@testing-library/react';

// hooks
import { useHandleRouter } from '../useHandleRouter';

// mocks
import { configureStore } from '../../../../store/store';
import { routerStateMock } from '../../../../tests/mocks/reducer/routerMock';

// tests
import { getProviderWrapper } from '../../../../tests/testHelpers';
import { createMemoryHistory } from 'history';
import { getRouteByName } from '../../utils/getRouteByName';
import { REDUCER_KEY } from '../../../../store/router/actionsType';

enum RouteName {
  login = 'login',
  register = 'register',
}

const routes = {
  [RouteName.login]: '/login',
  [RouteName.register]: '/register',
};

const history = createMemoryHistory({
  initialEntries: [getRouteByName('/', routes)],
});

const stateMock = {
  ...routerStateMock,
};
describe('useHandleRouter', () => {
  it('should init router', () => {
    // mock
    const store = configureStore(stateMock);

    // before
    const { result } = renderHook(() => useHandleRouter(), {
      wrapper: getProviderWrapper(store, history),
    });

    // result
    console.log(store.getState()[REDUCER_KEY]);
  });
});
