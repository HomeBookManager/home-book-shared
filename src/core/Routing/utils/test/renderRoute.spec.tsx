// import { Provider } from 'react-redux';
// import { render } from '@testing-library/react';

// // components
// import LoginPage from '../../../../sample/components/LoginPage/LoginPage';

// // core
// import { renderRoute } from '../renderRoute';

// // types
// import { RouteName } from '../../constants/routes';
// import { TAppRouteData } from '../../types';

// // utils
// import { history } from '../../../../utils/history';

// const stateMock = {
//   ...routerStateMock,
// };

// describe('renderRoute snaphots', () => {
//   const store = configureStore(stateMock);

//   it('should render renderRoute', () => {
//     // mock
//     const routeData: TAppRouteData = {
//       Component: LoginPage,
//       name: RouteName.login,
//     };

//     // before
//     const { asFragment } = render(
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           {renderRoute(routeData)}
//         </ConnectedRouter>
//       </Provider>,
//     );

//     // result
//     expect(asFragment()).toMatchSnapshot();
//   });

//   it('should render when routeDataArg is string', () => {
//     // mock
//     const routeData: TAppRouteData['name'] = RouteName.login;

//     // before
//     const { asFragment } = render(
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           {renderRoute(routeData)}
//         </ConnectedRouter>
//       </Provider>,
//     );

//     // result
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
